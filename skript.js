/* Veebikask – jagatud skript */
(function () {
  'use strict';

  var vaikneRezhiim = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. taustavärv muutub kerides ---------- */
  var sektsioonid = document.querySelectorAll('[data-toon]');
  if (sektsioonid.length && 'IntersectionObserver' in window) {
    var vaatleja = new IntersectionObserver(function (kirjed) {
      kirjed.forEach(function (k) {
        if (k.isIntersecting) {
          document.body.style.setProperty('--taust', k.target.dataset.toon);
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    sektsioonid.forEach(function (s) { vaatleja.observe(s); });
  }

  /* ---------- 2. puuduvad pildid -> kohatäide ---------- */
  document.querySelectorAll('img[data-puudu]').forEach(function (img) {
    img.addEventListener('error', function () {
      var asendus = document.createElement('div');
      asendus.className = 'puudu';
      asendus.innerHTML = 'PILT PUUDU<br>' + img.dataset.puudu +
        '<br><br>Tee lehest terve lehe ekraanipilt,<br>salvesta WebP-na ja pane see siia.';
      img.replaceWith(asendus);
    });
    if (img.complete && img.naturalWidth === 0) {
      img.dispatchEvent(new Event('error'));
    }
  });

  /* ---------- 3. portfoolio: kerimine hiire all ---------- */
  document.querySelectorAll('.vaade.kasi').forEach(function (vp) {
    var raam = vp.closest('.raam');
    var riba = raam ? raam.querySelector('.riba span') : null;
    var raf = null, peatatud = 0;

    function joonista() {
      if (!riba) return;
      var max = vp.scrollHeight - vp.clientHeight;
      riba.style.width = (max > 0 ? (vp.scrollTop / max) * 100 : 0) + '%';
    }
    function samm() {
      if (Date.now() > peatatud) {
        var max = vp.scrollHeight - vp.clientHeight;
        if (vp.scrollTop < max) vp.scrollTop += 0.9;
      }
      raf = requestAnimationFrame(samm);
    }

    vp.addEventListener('scroll', joonista);
    vp.addEventListener('wheel', function () { peatatud = Date.now() + 2500; }, { passive: true });
    vp.addEventListener('touchstart', function () { peatatud = Date.now() + 4000; }, { passive: true });
    vp.addEventListener('mouseenter', function () {
      if (vaikneRezhiim || raf) return;
      raf = requestAnimationFrame(samm);
    });
    vp.addEventListener('mouseleave', function () {
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      vp.scrollTo({ top: 0, behavior: vaikneRezhiim ? 'auto' : 'smooth' });
    });
    joonista();
  });

  /* ---------- 4. aastaarv jaluses ---------- */
  var aasta = document.getElementById('aasta');
  if (aasta) aasta.textContent = new Date().getFullYear();

  /* ---------- 5. vorm ---------- */
  var vorm = document.getElementById('paringuvorm');
  if (!vorm) return;

  var vanaKast = document.getElementById('vanaleht');
  var vanaVali = document.getElementById('vana');

  vorm.querySelectorAll('input[name="tuup"]').forEach(function (r) {
    r.addEventListener('change', function () {
      var uuendus = r.value.indexOf('uuendus') !== -1 && r.checked;
      vanaKast.classList.toggle('peidus', !uuendus);
      if (vanaVali) vanaVali.required = uuendus;
    });
  });

  var teade = document.getElementById('teade');
  var nupp = document.getElementById('saada');

  function naita(tekst, ok) {
    teade.textContent = tekst;
    teade.className = 'teade ' + (ok ? 'ok' : 'viga');
  }

  vorm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!vorm.checkValidity()) {
      naita('Palun täida tärniga tähistatud väljad.', false);
      vorm.reportValidity();
      return;
    }

    var fd = new FormData(vorm);
    var andmed = {
      nimi: fd.get('nimi'),
      firma: fd.get('firma'),
      epost: fd.get('epost'),
      telefon: fd.get('telefon'),
      tuup: fd.get('tuup'),
      vana: fd.get('vana'),
      pakett: fd.get('pakett'),
      lisad: fd.getAll('lisad'),
      sonum: fd.get('sonum'),
      veebisait: fd.get('veebisait')   // meepott robotitele
    };

    nupp.disabled = true;
    nupp.textContent = 'Saadan…';

    fetch('/api/kontakt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(andmed)
    })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (v) {
        if (!v.ok) throw new Error(v.j && v.j.viga ? v.j.viga : 'Saatmine ebaõnnestus');
        naita('Päring läks teele. Vastan tavaliselt sama päeva jooksul.', true);
        vorm.reset();
        vanaKast.classList.add('peidus');
      })
      .catch(function (err) {
        naita('Midagi läks viltu: ' + err.message +
          '. Helista +372 5693 8020 või kirjuta veebikask@gmail.com.', false);
      })
      .finally(function () {
        nupp.disabled = false;
        nupp.textContent = 'Saada päring';
      });
  });
})();
