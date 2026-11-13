# SEO tegevused, mida saab teha ainult käsitsi

Koodis olev osa on tehtud (13.11.2026): puhtad aadressid, canonical-lingid, sitemap, hinnaartikli
värskendus ja kuus uut valdkonnalehte. Allpool on see, mis nõuab sisselogimist või telefonikõnet.
Järjekord on tähtsuse järgi.

## 1. Vercel: tee veebikask.ee peadomeeniks (10 min)

Praegu suunab veebikask.ee → www.veebikask.ee, aga kõik canonical-lingid, sitemap ja Google'i
indeks kasutavad ilma www-ta aadressi. Google saab kahte vastukäivat signaali.

Vercel → projekt → Settings → Domains:
- `veebikask.ee` peab olema **primary** (ilma suunamiseta).
- `www.veebikask.ee` → **Redirect to veebikask.ee** (308/permanent).

Kontroll terminalis pärast muutmist:

```bash
curl -sI https://www.veebikask.ee/ | head -3
```

Peab näitama `308` ja `location: https://veebikask.ee/`.

## 2. Google Search Console (30 min, kui pole veel tehtud)

https://search.google.com/search-console

- Lisa **domeeni-tüüpi** vara `veebikask.ee` (katab www ja ilma www-ta).
- Sitemaps → lisa `https://veebikask.ee/sitemap.xml`.
- URL inspection → küsi indekseerimist kuuele uuele lehele:
  koduleht-torumehele, koduleht-autoremondile, koduleht-puhkemajale,
  koduleht-raamatupidajale, koduleht-ilusalongile, koduleht-vaiketootjale
  ja uuendatud artikkel-kodulehe-hind.
- Vaata kord nädalas Performance → Queries: millised sõnad näitamisi toovad.
  See ütleb, kas probleem on nähtavuses (vähe näitamisi) või klikkimises (näitamisi on, klikke pole).

## 3. Google'i ettevõtteprofiil (1 tund, kõige suurem mõju)

https://business.google.com

Konkurentidel on otsingus kaardiplokk 4,9 tärni ja 9 arvustusega. Sul ei ole profiili üldse.

- Loo profiil "Veebikask". Kategooria: *Veebidisainer* (Website designer).
- Teeninduspiirkond (ilma avaliku aadressita): kogu Eesti või maakonnad, kus päriselt käid.
- Veebileht: https://veebikask.ee. Telefon ja e-post samad, mis lehel.
- Lisa fotod: stigmark.ee ja amaja.ee ekraanipildid (kaustast `pildid/`).
- Kirjeldus: kasuta avalehe esimest lõiku. Hinnavahemik: 250–500 €.
- **Küsi arvustust** Stigmarkilt ja A-MAJA-lt. Saada neile otselink arvustuse jätmiseks
  (profiilis "Küsi arvustusi"). Kaks arvustust on lõpmata palju parem kui null.

## 4. Tagasilingid klientide lehtedelt (2 kirja)

Kontrollisin: amaja.ee ei viita Veebikasele. Palu mõlemalt kliendilt jalusesse üks rida:

```html
<a href="https://veebikask.ee/" rel="noopener">Koduleht: Veebikask</a>
```

Sina haldad neid lehti, nii et tõenäoliselt saad selle ise lisada. Need on esimesed kaks
tagasilinki domeenile üldse. Lisa see rida vaikimisi igale uuele kliendilehele.

## 5. Tasuta kataloogid (1 tund, teeb korra)

Igaüks annab ühe lingi ja kinnitab Google'ile, et firma on päris:

- Inforegister: https://www.inforegister.ee (lisa veebiaadress ettevõtte kaardile)
- Teatmik: https://www.teatmik.ee
- Neti.ee kataloog: https://www.neti.ee → "Lisa link"
- Äripäeva Infopank (tasuta baasprofiil)
- Facebooki ettevõtte leht + LinkedIn (kui on): pane veebiaadress profiili.

Kui need on olemas, lisa aadressid avalehe struktuurandmetesse `sameAs` massiivina
(index.html, ProfessionalService plokk). Ütle mulle lingid ja ma lisan.

## 6. Hinnapäringu vormi test (2 min)

Saada endale üks testpäring avalehelt ja kontrolli, et kiri jõuab veebikask@gmail.com peale,
ka rämpsposti kaust. Kui ei jõua, on päringute puudumisel väga lihtne põhjus.

## 7. Google Ads üldsõnadele (valikuline, aga kiireim)

Adsi silt on juba lehel. Otsingul "kodulehe tegemine" on esimene ekraanitäis 4 reklaami ja
AI ülevaade, orgaaniliselt sinna ei jõua. Väike eelarve (5–10 €/päev) sõnadele:
`üheleheline koduleht`, `odav koduleht`, `koduleht väikeettevõttele`, `kodulehe tegemine hind`.
Sihtleht: `/pakett-uheleheline`. Lülita välja, kui orgaaniline hakkab 3–6 kuu pärast tooma.

## 8. Rütm edaspidi

- Üks uus valdkonnaleht või artikkel kuus. Järgmised kandidaadid: koduleht fotograafile,
  koduleht puhastusfirmale, koduleht hambaarstile / füsioterapeudile, koduleht aednikule / haljastusele.
- Hinnaartikli tabel uuesti üle vaadata iga 3 kuu tagant ja `dateModified` + nähtav kuupäev värskeks.
- Iga valminud kliendileht: jalusesse link, Google'i profiili foto, arvustuse palve.
