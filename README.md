# Veebikask – müügileht

Staatiline leht + üks serverifunktsioon hinnapäringu vormi jaoks.
Ei vaja ehitusprotsessi ega raamistikku – puhas HTML, CSS ja JS.

## Failid

```
index.html                    avaleht (hero, hinnad, tööd, KKK, vorm, kontakt)
pakett-uheleheline.html       300 € paketi kirjeldus + elektritööde näide
pakett-arileht.html           500 € paketi kirjeldus + arhitektuuribüroo viis lehte kõrvuti
artiklid.html                 artiklite nimekiri
artikkel-kodulehe-hind.html   artikkel: kodulehe hind
artikkel-ei-ilmu-googles.html artikkel: miks leht ei ilmu Google'is
artikkel-uks-voi-mitu-lehte.html  artikkel: üks või mitu lehte
stiil.css                     kogu kujundus
skript.js                     värvivahetus, kerimine, vorm
api/kontakt.js                Vercel funktsioon, saadab kirja Resendiga
robots.txt  sitemap.xml       SEO
pildid/                       ekraanipildid tulevad siia
```

---

## 1. Asenda kohatäited

Bränd **Veebikask** ja domeen **veebikask.ee** on kohatäited. Kontrolli enne kasutamist,
kas nimi ja domeen on vabad, ning asenda kõikides failides:

```bash
# macOS
grep -rl "veebikask.ee" . --exclude-dir=node_modules | xargs sed -i '' 's/veebikask\.ee/SINUDOMEEN.ee/g'
grep -rl "Veebikask"    . --exclude-dir=node_modules | xargs sed -i '' 's/Veebikask/SinuBränd/g'
grep -rl "VEEBI<span>KASK" . | xargs sed -i '' 's/VEEBI<span>KASK/SINU<span>BRÄND/g'
```

Kontakt on juba paigas: **+372 5693 8020** ja **veebikask@gmail.com**. Domeen veebikask.ee on juba kõikjal sees.
Kui vahetad e-posti, muuda `index.html` (kontaktiplokk + JSON-LD) ja `api/kontakt.js` keskkonnamuutuja.

## 2. Lisa pildid

Kausta `pildid/` käivad tööde ekraanipildid:

| Fail | Mis see on | Kus kasutusel |
|---|---|---|
| ~~`too-arh-avaleht.webp`~~ | arhitektuuribüroo avaleht | `index.html` hero |
| ~~`too-arh-portfoolio.webp`~~ | arhitektuuribüroo portfoolio | `index.html` tehtud tööd |
| ~~`too-arh-teenused.webp`~~ | arhitektuuribüroo teenused | `pakett-arileht.html` |
| ~~`too-arh-meist.webp`~~ | arhitektuuribüroo meist | `pakett-arileht.html` |
| ~~`too-arh-kontakt.webp`~~ | arhitektuuribüroo kontakt | `pakett-arileht.html` |
| ~~`too-fassaad.webp`~~ | fassaaditööde kliendi koduleht | `index.html` tehtud tööd |
| ~~`too-elekter.webp`~~ | elektritööde kliendi koduleht | `pakett-uheleheline.html` |
| ~~`jagapilt.png`~~ | genereeritud | Open Graph |

Kõik läbikriipsutatud failid on kaustas juba olemas – uut pilti on vaja ainult
siis, kui lisad uue klienditöö.

Ekraanipilt: Firefox → parem klõps lehel → *Tee ekraanipilt* → *Salvesta terve leht*.
Seejärel [squoosh.app](https://squoosh.app) → WebP, kvaliteet ~75 → alla 400 KB.

Kuni pilte pole, näitab leht triibulist kohatäidet, mitte katkist pilti.

## 3. Pane Vercelisse

```bash
npm i -g vercel
cd veebikask
vercel
```

Või lohista kaust [vercel.com/new](https://vercel.com/new) peale. Vercel leiab `api/`
kausta ise üles ja teeb sellest serverifunktsiooni.

## 4. Seadista Resend

1. Loo konto [resend.com](https://resend.com)
2. **Domains** → lisa oma domeen → lisa DNS-kirjed (Vercelis või domeeniregistri juures)
3. **API Keys** → loo võti, algab `re_`
4. Vercelis: *Settings → Environment Variables*, lisa kolm:

| Nimi | Väärtus |
|---|---|
| `RESEND_API_KEY` | `re_...` |
| `SAATJA` | `Vorm <vorm@sinudomeen.ee>` |
| `SAAJA` | `veebikask@gmail.com` |

5. Tee uuesti deploy (muutujad loetakse ainult käivitamisel)

Enne domeeni kinnitamist saad testida aadressiga `onboarding@resend.dev` saatjana –
siis jõuab kiri ainult sinu enda Resendi konto e-postile.

## 5. Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) → lisa domeen
2. Kinnita omandiõigus DNS-kirjega
3. *Sitemaps* → lisa `sitemap.xml`
4. *URL Inspection* → iga leht → *Request indexing*

Sama tee ka Bingis (Bing Webmaster Tools) – võtab viis minutit ja toob natuke liiklust juurde.

---

## Mis SEO-baasis sees on

- üks `<h1>` lehe kohta, sektsioonid `<h2>`, alaosad `<h3>`
- semantiline struktuur: `header`, `nav`, `main`, `section`, `article`, `footer`
- meta title + description igal lehel eraldi, mitte kopeeritud
- canonical, Open Graph, Twitter Card
- JSON-LD: `ProfessionalService`, `Offer`, `FAQPage`, `Service`, `BreadcrumbList`, `Article`
- `sitemap.xml` koos pildi-sitemapiga (`image:image`)
- `robots.txt`, mis lubab crawlida ja blokeerib ainult `/api/`
- kirjeldavad alt-tekstid, `width`/`height` piltidel (vähendab hüplemist)
- `prefers-reduced-motion` toetus, nähtav klaviatuurifookus

**Mida see ei tee:** ei vii sind automaatselt esikohale märksõnal „kodulehe tegemine“.
Selleks on vaja artikleid ja tagasilinke. Küsi klientidelt luba panna
nende lehe jalusesse „Veebilehe tegi …“ link – kaks päris tagasilinki on väärt rohkem
kui kogu ülejäänud nimekiri.

## Vormi turvalisus

- peidetud meepott-väli püüab lihtsad robotid
- server kontrollib kohustuslikke välju ja e-posti kuju
- sisend puhastatakse HTML-i eest
- `replyTo` on kliendi aadress, nii et saad kirjale otse vastata

Kui rämpsposti tuleb liiga palju, lisa Cloudflare Turnstile (tasuta).

---

## Logo ja ikoonid

| Fail | Kus kasutusel |
|---|---|
| `pildid/logo.svg` | horisontaalne logo (märk + kiri), arvetel, sotsiaalmeedias |
| `pildid/logo-mark.svg` | ainult märk, lehe päises |
| `favicon.svg` / `favicon.ico` | brauseri vahekaardil |
| `pildid/apple-touch-icon.png` | iPhone'i avaekraanil |
| `pildid/ikoon-192.png`, `ikoon-512.png` | Androidi avaekraanil |

Värvid: sinine `#1B3BE0`, tume `#0C1B33`, kollane `#FFC53D`.
Kui tahad logo värvi muuta, ava SVG tekstiredaktoris ja asenda värvikood.
