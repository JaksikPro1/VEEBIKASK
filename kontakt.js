// Vercel Serverless Function – /api/kontakt
// Võtab hinnapäringu vastu ja saadab selle Resendi kaudu e-kirjaga.
//
// Vajalikud keskkonnamuutujad (Vercel > Settings > Environment Variables):
//   RESEND_API_KEY   Resendi API võti (re_...)
//   SAATJA           nt "Veebikase vorm <vorm@veebikask.ee>"  (domeen peab olema Resendis kinnitatud)
//   SAAJA            nt "veebikask@gmail.com"

const { Resend } = require('resend');

function puhasta(v, maxPikkus = 2000) {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, maxPikkus)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Lihtne kiiruspiirang: sama IP kuni 5 päringut 10 minuti jooksul.
// Töötab ühe instantsi piires. Tõsisema kaitse jaoks lisa Cloudflare Turnstile.
const logi = new Map();
function liiga_tihti(ip) {
  const nyyd = Date.now();
  const aken = 10 * 60 * 1000;
  const kirjed = (logi.get(ip) || []).filter((t) => nyyd - t < aken);
  kirjed.push(nyyd);
  logi.set(ip, kirjed);
  if (logi.size > 5000) logi.clear();
  return kirjed.length > 5;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ viga: 'Ainult POST' });
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'tundmatu';
  if (liiga_tihti(ip)) {
    return res.status(429).json({ viga: 'Liiga palju päringuid. Proovi mõne minuti pärast uuesti.' });
  }

  let keha;
  try {
    keha = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  } catch (e) {
    return res.status(400).json({ viga: 'Vigane päring' });
  }

  // Meepott: robotid täidavad peidetud välja, päris inimene ei näe seda.
  if (keha.veebisait) {
    return res.status(200).json({ ok: true });
  }

  const nimi = puhasta(keha.nimi, 120);
  const epost = puhasta(keha.epost, 160);
  const sonum = puhasta(keha.sonum, 5000);

  if (!nimi || !epost || !sonum) {
    return res.status(400).json({ viga: 'Nimi, e-post ja sõnum on kohustuslikud' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epost)) {
    return res.status(400).json({ viga: 'E-posti aadress ei ole korrektne' });
  }

  const firma = puhasta(keha.firma, 160) || '–';
  const telefon = puhasta(keha.telefon, 60) || '–';
  const tuup = puhasta(keha.tuup, 60) || '–';
  const vana = puhasta(keha.vana, 300) || '–';
  const pakett = puhasta(keha.pakett, 80) || '–';
  const lisad = Array.isArray(keha.lisad)
    ? keha.lisad.map((x) => puhasta(x, 80)).filter(Boolean)
    : [];

  const rida = (silt, vaartus) =>
    `<tr>
       <td style="padding:8px 14px;border-bottom:1px solid #e6ecf5;color:#5b6b80;white-space:nowrap;vertical-align:top">${silt}</td>
       <td style="padding:8px 14px;border-bottom:1px solid #e6ecf5;color:#0c1b33"><b>${vaartus}</b></td>
     </tr>`;

  const html = `
  <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:640px">
    <h2 style="color:#0c1b33;margin:0 0 4px">Uus hinnapäring</h2>
    <p style="color:#5b6b80;margin:0 0 20px;font-size:14px">Veebikask · ${new Date().toLocaleString('et-EE')}</p>
    <table style="width:100%;border-collapse:collapse;font-size:15px;border:1px solid #e6ecf5;border-radius:8px">
      ${rida('Nimi', nimi)}
      ${rida('Ettevõte', firma)}
      ${rida('E-post', `<a href="mailto:${epost}">${epost}</a>`)}
      ${rida('Telefon', telefon !== '–' ? `<a href="tel:${telefon.replace(/\s/g, '')}">${telefon}</a>` : '–')}
      ${rida('Tüüp', tuup)}
      ${rida('Vana leht', vana !== '–' ? `<a href="${vana}">${vana}</a>` : '–')}
      ${rida('Pakett', pakett)}
      ${rida('Lisad', lisad.length ? lisad.join(', ') : '–')}
    </table>
    <h3 style="color:#0c1b33;margin:26px 0 8px">Sõnum</h3>
    <div style="background:#f4f7fc;border-left:3px solid #1b3be0;padding:14px 18px;
                white-space:pre-wrap;line-height:1.6;color:#26364d;font-size:15px">${sonum}</div>
  </div>`;

  const tekst =
`Uus hinnapäring – Veebikask

Nimi: ${nimi}
Ettevõte: ${firma}
E-post: ${epost}
Telefon: ${telefon}
Tüüp: ${tuup}
Vana leht: ${vana}
Pakett: ${pakett}
Lisad: ${lisad.length ? lisad.join(', ') : '–'}

Sõnum:
${sonum}`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.SAATJA,
      to: [process.env.SAAJA],
      replyTo: epost,
      subject: `Hinnapäring – ${nimi}${firma !== '–' ? ' (' + firma + ')' : ''}`,
      html,
      text: tekst
    });

    if (error) {
      console.error('Resend viga:', error);
      return res.status(502).json({ viga: 'E-kirja saatmine ebaõnnestus' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ viga: 'Serveri viga' });
  }
};
