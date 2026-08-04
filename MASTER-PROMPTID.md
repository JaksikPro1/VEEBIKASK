# Master promptid klienditööde jaoks

Kaks iseseisvat prompti. Mõlemad on täielikud: kopeeri ainult see, mida vajad,
midagi kokku panema ei pea.

**Kasutus:** täida kliendi andmete plokk ära ja kleebi kogu koodiplokk korraga.
Ära anna AI-le stiilijuhiseid ette. Prompt käsib tal valdkonna järgi ise suund
välja mõelda ja seda põhjendada. Kui tulemus ei istu, ütle "tee teine suund".
Nii saad kaks varianti võrrelda, selle asemel et algusest ühte lahtrisse jääda.

---

# PAKETT 01: üheleheline koduleht (alates 300 EUR)

```
Ehita üheleheline koduleht Eesti väikeettevõttele. Puhas HTML, CSS ja
JavaScript, ilma raamistiku ja ehitusprotsessita. Majutus tuleb Vercelisse.

## TÖÖ KÄIK
1. Kui midagi allolevas on ebaselge või puudu, esita mulle enne alustamist
   kuni viis küsimust. Ära täida lünki oletustega.
2. Põhjenda kahe lausega, millise visuaalse suuna valisid ja miks see
   sellele valdkonnale sobib.
3. Anna failid ükshaaval, mitte kõik korraga. Iga faili järel oota mu
   kinnitust, enne kui järgmise juurde lähed. Nii ei jää midagi poolikuks.
4. Lõpus käi läbi kontrollnimekiri, mis on selle prompti lõpus.

## KLIENDI ANDMED
Ettevõte:              [NIMI]
Õiguslik vorm:         [OÜ / FIE / MTÜ / eraisik ettevõtluskonto alt]
Registrikood:          [KOOD, või kirjuta "puudub"]
KMKR number:           [NUMBER, või "ei ole käibemaksukohustuslane"]
Tegevusala:            [MIDA FIRMA TEEB]
Teenused:              [LOETLE 3 KUNI 6 TEENUST]
Piirkond:              [LINN / MAAKOND / KOGU EESTI]
Telefon:               [+372 ...]
E-post:                [...]
Aadress:               [FÜÜSILINE ASUKOHT, või "vastuvõttu ei ole"]
Domeen:                [firma.ee]
Tegutsenud alates:     [AASTA]
Töötajaid:             [ARV]
Eristumine:            [MIS TEEB SELLE FIRMA TEISTEST ERINEVAKS]
Sihtklient:            [ERAKLIENT / ÄRIKLIENT / MÕLEMAD]
Fotod:                 [MITU JA MILLEST]
Logo:                  [ON / EI OLE. Kui on, kirjelda seda]
Olemasolevad värvid:   [LOETLE, KUI FIRMAL ON JUBA VÄRVID. Muidu "ei ole"]
Klientide tagasiside:  [TSITAADID, KUI ON. Muidu "ei ole"]

## VISUAALNE SUUND: MÕTLE ISE VÄLJA
Ära küsi minult stiili, otsusta ise valdkonna ja sihtkliendi järgi.

- Kui kliendil on logo või olemasolevad värvid, tuleta palett neist.
  Ära mõtle uut värvimaailma välja, kui vana on juba kasutusel.
- Kui logo ei ole, vali palett, mis sobib valdkonna tegeliku maailmaga,
  mitte üldise "professionaalse veebilehe" ettekujutusega. Ehitus,
  meditsiin, käsitöö, toitlustus ja õigusabi ei tohiks näha ühesugused.
- Vali kirjatüübid Google Fontsi kataloogist, aga lae failid alla ja
  majuta neid koos lehega. Kontrolli, et fondid toetaksid eesti täpitähti
  (õ ä ö ü ž š), ehk vajad latin-ext toega fonte.
- Üks selge kujunduslik eripära, mis teeb lehe äratuntavaks. Mitte efekt
  efekti pärast, vaid midagi, mis toetab sisu.
- Ära kasuta vaikimisi neid kolme kombinatsiooni, sest need on AI-lehtede
  levinud mustrid ja mõjuvad mallina: beež taust pluss serif-kiri pluss
  terrakota aktsent; peaaegu must taust pluss neoonroheline aktsent;
  ajalehestiilis hiiglaslik serif-pealkiri. Kui mõni neist on selle
  valdkonna jaoks päriselt õige valik, põhjenda see eraldi ära.
- Kujundus peab olema loetav. Väike hall tekst halli peal ei ole stiilne.

## LEHE STRUKTUUR
Üks pikk leht ankurmenüüga, kuni kuus sektsiooni. Menüü kerib sama lehe sees.
Soovituslik järjekord, kohanda valdkonna järgi:
1. Hero: mida firma teeb, kellele, ja üks selge tegevusnupp
2. Teenused: iga teenus eraldi välja toodud, mitte ühe lõiguna
3. Tehtud tööd või galerii
4. Miks meid: tegutsemisaastad, kogemus, tõendid usaldusväärsusest
5. Korduvad küsimused
6. Kontakt: telefon, e-post, piirkond

## TEKSTI MAHT
- Sektsiooni sissejuhatus kuni kolm lauset
- Iga teenus kaks kuni neli lauset
- Korduvaid küsimusi viis kuni seitse, vastus kaks kuni neli lauset
- Hero pealkiri kuni kaheksa sõna
Ära kirjuta pikemalt ainult selleks, et lehte täita.

## TEHNILINE SEO, KOHUSTUSLIK
a) Unikaalne meta title ja description. Title sisaldab tegevusala ja
   piirkonda, kuni umbes 60 tähemärki. Description kuni umbes 155
   tähemärki ja kutsub klõpsama.
b) Open Graph: og:type, og:site_name, og:locale (et_EE), og:title,
   og:description, og:url, og:image (1200x630), og:image:alt.
   Twitter Card: summary_large_image.
c) Canonical URL lehe päris aadressile.
d) robots.txt, mis lubab kõigil indekseerida ja viitab sitemapile.
e) sitemap.xml. Lisa pildid image:image plokkidena koos pealkirja ja
   kirjeldusega, nii jõuavad tööde fotod pildiotsingusse.
f) Iga pilt saab kirjeldava alt-teksti JA kirjeldava failinime.
   Õige: eramu-fassaadi-renoveerimine-tartumaa.webp
   Vale: IMG_2841.jpg
g) JSON-LD struktuurandmed:
   - LocalBusiness, kui on füüsiline asukoht. ProfessionalService, kui ei ole.
     Väljad: nimi, telefon, e-post, areaServed, aadress, tegevusala.
   - Service ja Offer iga põhiteenuse kohta
   - FAQPage korduvate küsimuste sektsioonile, see võib anda Google'is
     laiendatud tulemuse
   Kontrolli, et JSON on süntaktiliselt korrektne.
h) Täpselt ÜKS h1 lehel. Sektsioonid h2, alaosad h3. Ära jäta taset vahele.
i) Semantiline HTML: header, nav, main, section, article, footer.
   Mitte ainult div. Ankurlingid peavad viitama olemasolevatele id-dele.

## JÕUDLUS
- Pildid WebP-na, iga pilt alla 400 KB
- Kõigil piltidel width ja height atribuudid, et paigutus ei hüppaks
- loading="lazy" kõigil piltidel peale hero oma
- Fondid @font-face kaudu omast kaustast, font-display: swap,
  põhikirjatüüp preload
- Eesmärk: PageSpeed Insights mobiilis 90 või rohkem
- Ei mingeid raamistikke, jQueryt, ikoonipakette ega bännereid.
  Ainus lubatud väline skript on küpsisevaba analüütika, mis on
  allpool eraldi kirjeldatud.

## LIGIPÄÄSETAVUS
- Teksti ja tausta kontrast vähemalt 4.5:1
- Nähtav fookusraam klaviatuuriga liikumisel
- prefers-reduced-motion toetus, animatsioonid välja
- aria-label navigatsioonielementidel
- Telefon ja e-post klikitavad: tel: ja mailto:
- Kõik vormiväljad seotud sildiga (label for)

## MOBIIL JA TAHVEL
Kohustuslik, mitte lisavõimalus. Kirjuta CSS nii, et leht oleks korrektne
laiustel 375, 768, 1024 ja 1440 pikslit. Ära väida, et testisid, sest sa
ei saa testida. Selle asemel loetle lõpus, millised murdepunktid lisasid.
- Menüü peab mobiilis kättesaadav olema, mitte lihtsalt peidetud
- Puutealad vähemalt 44x44 pikslit
- Pikad e-posti aadressid peavad murduma, mitte kastist välja jooksma
- Tabelid ei tohi tekitada horisontaalset kerimist
- Kerivas konteineris ei tohi olla absoluutselt positsioneeritud elemente,
  sest need kerivad puuteekraanil sisuga kaasa

## PUUDUVAD PILDID
Kliendi fotod ei pruugi veel olemas olla. Tee nii, et puuduv pilt ei
näitaks katkist ikooni, vaid asendataks kohatäitega, millel on kirjas
puuduva faili nimi. Nii saab lehte kliendile näidata ka enne fotode saamist.

## KEEL
- Kogu sisu eesti keeles, lang="et"
- Ära kasuta pikka mõttekriipsu, see on märk U+2014. Kasuta selle asemel
  lühemat mõttekriipsu U+2013, koma või punkti.
- Koma ei käi rinnastavate sidesõnade ja, ning, või, ega ette.
  Erand: koma jääb siis, kui see sulgeb kõrvallause.
- Kirjuta konkreetselt, mitte turundusjutuga. "22 aastat fassaaditöid
  Tartumaal" on parem kui "aastatepikkune kogemus ja pühendumus".
- Ära luba asju, mida ma pole öelnud: garantiid, sertifikaate, hindu.

## SISU AUSUS
Ära leiuta fakte. Konkreetselt keelatud:
- Väljamõeldud klientide tagasiside
- Väljamõeldud statistika, näiteks "üle 500 rahuloleva kliendi"
- Sertifikaadid, litsentsid või garantiid, mida ma ei ole maininud
- Aastaarvud või töömahud, mida ma ei ole andnud
Kui mõni sektsioon vajab sisu, mida mul ei ole, jäta sinna selge
kohatäide ja ütle mulle, mida ma pean kliendilt küsima.

## JURIIDILINE MIINIMUM
Eestis peab infoühiskonna teenuse osutaja tegema oma andmed veebilehel
kergesti kättesaadavaks. Pane jalusesse:
- Ettevõtte täisnimi ja õiguslik vorm
- Registrikood, kui see on olemas. Kui ma kirjutasin "puudub", jäta välja.
- Aadress, või tegevuspiirkond, kui füüsilist vastuvõttu ei ole
- E-post ja telefon
- KMKR number, kui ma selle andsin

Kui lehel on kontaktivorm või mis tahes muu isikuandmete kogumine, tee
eraldi leht privaatsus.html: mis andmeid kogutakse, mis eesmärgil, kui
kaua säilitatakse, kellega jagatakse, ja et inimesel on õigus küsida
kustutamist. Lingi see vormi juurest ja jalusest.

Küpsiste teavitus on vajalik ainult jälgimisküpsiste puhul. Kuna
analüütika on küpsisevaba, ära lisa ribapaani ilma vajaduseta.

## MÕÕTMINE
Lisa küpsisevaba analüütika, mis ei nõua nõusolekuribapaani. Sobivad
Vercel Analytics, Plausible või Umami. Ära kasuta Google Analyticsi,
sest see toob kaasa küpsiseteavituse ja täiendava dokumentatsiooni.
Põhjus: ilma numbriteta ei saa kliendile näidata, kas leht töötab.

## VÄLJUND
- index.html
- stiil.css
- skript.js
- privaatsus.html, kui lehel on vorm
- 404.html, lihtne vealeht, mis viib tagasi avalehele
- robots.txt
- sitemap.xml
- vercel.json turvapäistega: X-Content-Type-Options, X-Frame-Options,
  Referrer-Policy, Permissions-Policy, Strict-Transport-Security,
  Content-Security-Policy
- Faviconid: .ico, .svg, apple-touch-icon.png, site.webmanifest
- Jagamispilt 1200x630 (og:image). Genereeri see ise lehe värvide ja
  logoga, ära jäta viidet puuduvale failile.
- Fondifailid omas kaustas
- README.md: mida tuleb koodis asendada, kuidas Vercelisse panna,
  mis pildid on veel vaja lisada ja mis nimega

## KONTROLLNIMEKIRI, KÄI LÄBI ENNE KUI ÜTLED "VALMIS"
1. Kõik JSON-LD plokid parsivad vigadeta
2. Lehel on täpselt üks h1 ja pealkirjade tasemed ei hüppa
3. Kõik sisemised lingid ja ankrud viitavad olemasolevale
4. HTML-i avavad ja sulgevad sildid on tasakaalus
5. Ühtegi pikka mõttekriipsu (U+2014) ei ole
6. Koma ei ole ühegi rinnastava sidesõna ees, välja arvatud kõrvallause lõpus
7. Ühtegi kohatäidet nagu [NIMI] ei ole koodi jäänud
8. Kõik pildiviited on olemas või asendatud kohatäitega
9. og:image fail on päriselt olemas
10. Jaluses on ettevõtte andmed vastavalt juriidilisele miinimumile
11. Ühtegi väljamõeldud fakti, tagasisidet ega numbrit ei ole
12. Iga värvipaar vastab kontrastinõudele 4.5:1
13. Fookusraam on klaviatuuriga nähtav
14. Loetle, millised mobiili murdepunktid lisasid
15. Fondid tulevad omast kaustast, mitte Google'i serverist
```

---

# PAKETT 02: mitmeleheline koduleht (alates 500 EUR)

```
Ehita mitmeleheline koduleht Eesti väikeettevõttele. Puhas HTML, CSS ja
JavaScript, ilma raamistikuta. Majutus Vercelisse, hinnapäringu vormi
taust Resend.

## TÖÖ KÄIK
1. Kui midagi allolevas on ebaselge või puudu, esita mulle enne alustamist
   kuni viis küsimust. Ära täida lünki oletustega.
2. Põhjenda kahe lausega, millise visuaalse suuna valisid ja miks see
   sellele valdkonnale sobib.
3. Anna failid ükshaaval, mitte kõik korraga. Iga faili järel oota mu
   kinnitust, enne kui järgmise juurde lähed. Nii ei jää midagi poolikuks.
4. Lõpus käi läbi kontrollnimekiri, mis on selle prompti lõpus.

## KLIENDI ANDMED
Ettevõte:              [NIMI]
Õiguslik vorm:         [OÜ / FIE / MTÜ / eraisik ettevõtluskonto alt]
Registrikood:          [KOOD, või kirjuta "puudub"]
KMKR number:           [NUMBER, või "ei ole käibemaksukohustuslane"]
Tegevusala:            [MIDA FIRMA TEEB]
Teenused:              [LOETLE 3 KUNI 8 TEENUST]
Piirkond:              [LINN / MAAKOND / KOGU EESTI]
Telefon:               [+372 ...]
E-post:                [...]
Aadress:               [FÜÜSILINE ASUKOHT, või "vastuvõttu ei ole"]
Domeen:                [firma.ee]
Tegutsenud alates:     [AASTA]
Töötajaid:             [ARV]
Eristumine:            [MIS TEEB SELLE FIRMA TEISTEST ERINEVAKS]
Sihtklient:            [ERAKLIENT / ÄRIKLIENT / MÕLEMAD]
Fotod:                 [MITU JA MILLEST]
Logo:                  [ON / EI OLE. Kui on, kirjelda seda]
Olemasolevad värvid:   [LOETLE, KUI FIRMAL ON JUBA VÄRVID. Muidu "ei ole"]
Klientide tagasiside:  [TSITAADID, KUI ON. Muidu "ei ole"]
Vana leht:             [AADRESS, KUI ASENDAME OLEMASOLEVAT. Muidu "ei ole"]
Keeled:                [EESTI / EESTI JA INGLISE / EESTI JA VENE / KÕIK KOLM]

## VISUAALNE SUUND: MÕTLE ISE VÄLJA
Ära küsi minult stiili, otsusta ise valdkonna ja sihtkliendi järgi.

- Kui kliendil on logo või olemasolevad värvid, tuleta palett neist.
  Ära mõtle uut värvimaailma välja, kui vana on juba kasutusel.
- Kui logo ei ole, vali palett, mis sobib valdkonna tegeliku maailmaga,
  mitte üldise "professionaalse veebilehe" ettekujutusega. Ehitus,
  meditsiin, käsitöö, toitlustus ja õigusabi ei tohiks näha ühesugused.
- Vali kirjatüübid Google Fontsi kataloogist, aga lae failid alla ja
  majuta neid koos lehega. Kontrolli, et fondid toetaksid eesti täpitähti
  (õ ä ö ü ž š), ehk vajad latin-ext toega fonte.
- Üks selge kujunduslik eripära, mis teeb lehe äratuntavaks. Mitte efekt
  efekti pärast, vaid midagi, mis toetab sisu.
- Ära kasuta vaikimisi neid kolme kombinatsiooni, sest need on AI-lehtede
  levinud mustrid ja mõjuvad mallina: beež taust pluss serif-kiri pluss
  terrakota aktsent; peaaegu must taust pluss neoonroheline aktsent;
  ajalehestiilis hiiglaslik serif-pealkiri. Kui mõni neist on selle
  valdkonna jaoks päriselt õige valik, põhjenda see eraldi ära.
- Kujundus peab olema loetav. Väike hall tekst halli peal ei ole stiilne.
- Kõik lehed jagavad sama stiililehte, sama päist ja sama jalust.

## LEHTEDE STRUKTUUR
Neli kuni viis eraldi lehte, igaühel oma aadress, oma meta title ja
description ning oma märksõnad. Iga leht sihib ühte konkreetset otsingut.

- index.html      kes firma on, olulisemad tööd, tegevusnupp
- teenused.html   iga teenus eraldi alajaotusega
- tood.html       galerii lühikirjeldustega
- kontakt.html    hinnapäringu vorm, telefon, piirkond
- artiklid.html   nimekiri ja valmis struktuur tulevaste artiklite jaoks

Kohanda nimesid valdkonna järgi. Kui firmal on viis või rohkem sisuliselt
erinevat teenust, tee neist eraldi lehed.

TÄHTIS: ära tee lehti, mille sisu on üksteise koopia vahetatud sõnadega.
Google karistab seda. Iga leht peab vastama ühele päris küsimusele.
Kui sisu ühe lehe jaoks ei jätku, tee vähem lehti.

## TEKSTI MAHT
- Sektsiooni sissejuhatus kuni kolm lauset
- Iga teenus neli kuni kaheksa lauset omal lehel
- Korduvaid küsimusi viis kuni seitse, vastus kaks kuni neli lauset
- Hero pealkiri kuni kaheksa sõna
Ära kirjuta pikemalt ainult selleks, et lehte täita.

## TEHNILINE SEO, KOHUSTUSLIK
a) Igal lehel unikaalne meta title ja description, mitte kopeeritud.
   Title sisaldab tegevusala ja piirkonda, kuni umbes 60 tähemärki.
   Description kuni umbes 155 tähemärki ja kutsub klõpsama.
b) Open Graph igal lehel: og:type, og:site_name, og:locale (et_EE),
   og:title, og:description, og:url, og:image (1200x630), og:image:alt.
   Twitter Card: summary_large_image.
c) Canonical URL igal lehel tema enda aadressile.
d) robots.txt, mis lubab kõigil indekseerida, blokeerib /api/ ja
   viitab sitemapile.
e) sitemap.xml kõigi lehtedega. Lisa pildid image:image plokkidena koos
   pealkirja ja kirjeldusega, nii jõuavad tööde fotod pildiotsingusse.
f) Iga pilt saab kirjeldava alt-teksti JA kirjeldava failinime.
   Õige: eramu-fassaadi-renoveerimine-tartumaa.webp
   Vale: IMG_2841.jpg
g) JSON-LD struktuurandmed:
   - LocalBusiness, kui on füüsiline asukoht. ProfessionalService, kui ei ole.
     Väljad: nimi, telefon, e-post, areaServed, aadress, tegevusala.
   - Service ja Offer iga põhiteenuse kohta
   - FAQPage korduvate küsimuste sektsioonile
   - BreadcrumbList igal alamlehel
   - CollectionPage ja ItemList artiklite nimekirjal
   - Article iga artikli lehel: headline, datePublished, dateModified,
     author, publisher, mainEntityOfPage
   Kontrolli, et JSON on süntaktiliselt korrektne.
h) Täpselt ÜKS h1 igal lehel. Sektsioonid h2, alaosad h3.
   Ära jäta taset vahele.
i) Semantiline HTML: header, nav, main, section, article, footer.
   Mitte ainult div.

## SISEMINE LINGISTRUKTUUR
Lehed peavad lingima üksteist sisu sees, mitte ainult menüüst.
Iga leht sisaldab vähemalt kaks mõtestatud sisemist linki.
Leivapurunavigatsioon igal alamlehel.
Tähtsad lehed ei tohi jääda avalehelt rohkem kui ühe klõpsu kaugusele.

## KUI ASENDATAKSE OLEMASOLEVAT LEHTE, KRIITILINE
Kui ma andsin vana lehe aadressi, küsi minult kõigi vanade alamlehtede
aadresside nimekiri. Iga vana aadress peab saama 301-ümbersuunamise
uuele vastavale lehele. Vercelis käib see vercel.json redirects plokis.

Ilma selleta kaovad kõik senised Google'i positsioonid ja klient alustab
nullist. See on kõige kallim viga, mida uuendustöös teha saab, ja seda ei
märka keegi enne, kui liiklus on paar kuud kadunud.

## MITMEKEELSUS, KUI TELLITUD
- Iga keel oma aadressil, näiteks /en/ ja /ru/
- hreflang-sildid mõlemas suunas, pluss x-default
- Keelevalik nähtaval igal lehel
- Ära kasuta automaattõlget märkimata, ütle mulle, mis vajab ülevaatamist

## HINNAPÄRINGU VORM
Vercel Serverless Function aadressil /api/kontakt, mis saadab kirja
Resendiga.

Väljad:
- Nimi (kohustuslik), ettevõte, e-post (kohustuslik), telefon
- Raadionupud: uus töö / olemasoleva uuendus
- Kui valitakse uuendus, ilmub nähtavale väli olemasoleva aadressi jaoks
- Vaba tekst (kohustuslik) selgitava abitekstiga selle kohta, mida kirjutada
- Nõusoleku linnuke andmete töötlemiseks, lingiga privaatsuslehele

Turvalisus, kõik kohustuslikud:
- Peidetud meepott-väli robotite püüdmiseks
- Serveripoolne valideerimine, ära usalda brauserit
- HTML-i erimärkide puhastamine sisendist
- Kiiruspiirang IP kohta
- replyTo seatud kliendi aadressile, et saaks otse vastata
- API võti ainult keskkonnamuutujas, MITTE koodis
- .gitignore sisaldab .env

Kasutajale näidatav veateade olgu üldine ja sisaldagu telefoninumbrit
varuvariandina. Ära näita serveri tehnilisi veateateid.

Õnnestumisel suuna kasutaja eraldi tänulehele (aitah.html), mitte ainult
sama lehe teatele. Nii saab analüütikast lugeda, mitu päringut tuli.

## JÕUDLUS
- Pildid WebP-na, iga pilt alla 400 KB
- Kõigil piltidel width ja height atribuudid, et paigutus ei hüppaks
- loading="lazy" kõigil piltidel peale hero oma
- Fondid @font-face kaudu omast kaustast, font-display: swap,
  põhikirjatüüp preload
- Eesmärk: PageSpeed Insights mobiilis 90 või rohkem
- Ei mingeid raamistikke, jQueryt, ikoonipakette ega bännereid.
  Ainus lubatud väline skript on küpsisevaba analüütika, mis on
  allpool eraldi kirjeldatud.

## LIGIPÄÄSETAVUS
- Teksti ja tausta kontrast vähemalt 4.5:1
- Nähtav fookusraam klaviatuuriga liikumisel
- prefers-reduced-motion toetus, animatsioonid välja
- aria-label navigatsioonielementidel
- Telefon ja e-post klikitavad: tel: ja mailto:
- Kõik vormiväljad seotud sildiga (label for)
- Vormi veateated loetavad ka ekraanilugejale (aria-live)

## MOBIIL JA TAHVEL
Kohustuslik, mitte lisavõimalus. Kirjuta CSS nii, et leht oleks korrektne
laiustel 375, 768, 1024 ja 1440 pikslit. Ära väida, et testisid, sest sa
ei saa testida. Selle asemel loetle lõpus, millised murdepunktid lisasid.
- Menüü peab mobiilis kättesaadav olema, mitte lihtsalt peidetud
- Puutealad vähemalt 44x44 pikslit
- Pikad e-posti aadressid peavad murduma, mitte kastist välja jooksma
- Tabelid ei tohi tekitada horisontaalset kerimist
- Kerivas konteineris ei tohi olla absoluutselt positsioneeritud elemente,
  sest need kerivad puuteekraanil sisuga kaasa

## PUUDUVAD PILDID
Kliendi fotod ei pruugi veel olemas olla. Tee nii, et puuduv pilt ei
näitaks katkist ikooni, vaid asendataks kohatäitega, millel on kirjas
puuduva faili nimi. Nii saab lehte kliendile näidata ka enne fotode saamist.

## KEEL
- Kogu sisu eesti keeles, lang="et"
- Ära kasuta pikka mõttekriipsu, see on märk U+2014. Kasuta selle asemel
  lühemat mõttekriipsu U+2013, koma või punkti.
- Koma ei käi rinnastavate sidesõnade ja, ning, või, ega ette.
  Erand: koma jääb siis, kui see sulgeb kõrvallause.
- Kirjuta konkreetselt, mitte turundusjutuga. "22 aastat fassaaditöid
  Tartumaal" on parem kui "aastatepikkune kogemus ja pühendumus".
- Ära luba asju, mida ma pole öelnud: garantiid, sertifikaate, hindu.

## SISU AUSUS
Ära leiuta fakte. Konkreetselt keelatud:
- Väljamõeldud klientide tagasiside
- Väljamõeldud statistika, näiteks "üle 500 rahuloleva kliendi"
- Sertifikaadid, litsentsid või garantiid, mida ma ei ole maininud
- Aastaarvud või töömahud, mida ma ei ole andnud
Kui mõni sektsioon vajab sisu, mida mul ei ole, jäta sinna selge
kohatäide ja ütle mulle, mida ma pean kliendilt küsima.

## JURIIDILINE MIINIMUM
Eestis peab infoühiskonna teenuse osutaja tegema oma andmed veebilehel
kergesti kättesaadavaks. Pane jalusesse kõigil lehtedel:
- Ettevõtte täisnimi ja õiguslik vorm
- Registrikood, kui see on olemas. Kui ma kirjutasin "puudub", jäta välja.
- Aadress, või tegevuspiirkond, kui füüsilist vastuvõttu ei ole
- E-post ja telefon
- KMKR number, kui ma selle andsin

Kuna lehel on kontaktivorm, tee eraldi leht privaatsus.html: mis andmeid
kogutakse, mis eesmärgil, kui kaua säilitatakse, kellega jagatakse (Resend
ja Vercel), ja et inimesel on õigus küsida kustutamist. Lingi see vormi
juurest ja jalusest.

Küpsiste teavitus on vajalik ainult jälgimisküpsiste puhul. Kuna
analüütika on küpsisevaba, ära lisa ribapaani ilma vajaduseta.

## MÕÕTMINE
Lisa küpsisevaba analüütika, mis ei nõua nõusolekuribapaani. Sobivad
Vercel Analytics, Plausible või Umami. Ära kasuta Google Analyticsi,
sest see toob kaasa küpsiseteavituse ja täiendava dokumentatsiooni.
Põhjus: ilma numbriteta ei saa kliendile näidata, kas leht töötab.

## VÄLJUND
- index.html, teenused.html, tood.html, kontakt.html, artiklid.html
- aitah.html, tänuleht pärast vormi saatmist
- privaatsus.html
- 404.html, lihtne vealeht, mis viib tagasi avalehele
- stiil.css, jagatud kõigi lehtede vahel
- skript.js, jagatud kõigi lehtede vahel
- api/kontakt.js
- package.json koos resend sõltuvusega
- robots.txt
- sitemap.xml kõigi lehtedega
- vercel.json turvapäistega ja vajadusel 301-ümbersuunamistega:
  X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
  Permissions-Policy, Strict-Transport-Security, Content-Security-Policy
- Faviconid: .ico, .svg, apple-touch-icon.png, site.webmanifest
- Jagamispilt 1200x630 (og:image). Genereeri see ise lehe värvide ja
  logoga, ära jäta viidet puuduvale failile.
- Fondifailid omas kaustas
- README.md, kus on sammhaaval:
  * mida tuleb koodis asendada
  * mis pildid on veel vaja lisada ja mis nimega
  * Vercelisse panek
  * Resendi konto, API võti, keskkonnamuutujad RESEND_API_KEY, SAATJA, SAAJA
  * meeldetuletus, et keskkonnamuutujad loetakse ainult käivitamisel,
    ehk pärast lisamist tuleb teha uus deploy
  * juhend kliendile Google'i ettevõtteprofiili seadistamiseks:
    mis andmed, mis fotod, kuidas arvustusi küsida

## KONTROLLNIMEKIRI, KÄI LÄBI ENNE KUI ÜTLED "VALMIS"
1. Kõik JSON-LD plokid parsivad vigadeta
2. Igal lehel täpselt üks h1 ja pealkirjade tasemed ei hüppa
3. Igal lehel unikaalne title ja description, mitte kopeeritud
4. Kõik sisemised lingid ja ankrud viitavad olemasolevale failile
5. HTML-i avavad ja sulgevad sildid on tasakaalus igal lehel
6. Ühtegi pikka mõttekriipsu (U+2014) ei ole
7. Koma ei ole ühegi rinnastava sidesõna ees, välja arvatud kõrvallause lõpus
8. Ühtegi kohatäidet nagu [NIMI] ei ole koodi jäänud
9. Kõik pildiviited on olemas või asendatud kohatäitega
10. og:image fail on päriselt olemas
11. Jaluses on ettevõtte andmed vastavalt juriidilisele miinimumile
12. Privaatsusleht on olemas ja lingitud vormi juurest ning jalusest
13. Ühtegi väljamõeldud fakti, tagasisidet ega numbrit ei ole
14. Iga värvipaar vastab kontrastinõudele 4.5:1
15. Fookusraam on klaviatuuriga nähtav
16. Loetle, millised mobiili murdepunktid lisasid
17. Fondid tulevad omast kaustast, mitte Google'i serverist
18. API võti ei esine üheski failis, ainult keskkonnamuutujana
19. Kui vana leht asendati, on kõik vanad aadressid ümber suunatud
```

---

# ÜLEANDMISE KONTROLLNIMEKIRI

See ei ole AI jaoks, vaid sinu jaoks. Käi iga töö lõpus läbi.

**Omandiõigus, kõige tähtsam punkt**
- [ ] Domeen on registreeritud KLIENDI nimele, mitte sinu omale.
      Kui klient hiljem lahkub, peab domeen jääma temale.
- [ ] Klient on saanud kogu koodi, ZIP või ligipääs hoidlale
- [ ] Klient teab, kus leht majutatud on ja mis see maksab

**Õigused sisule**
- [ ] Klient kinnitab, et fotod on tema omad või tal on luba neid kasutada.
      Drooni- ja proffotod kuuluvad sageli fotograafile, mitte tellijale.
- [ ] Kas tohid tööd oma portfoolios näidata
- [ ] Kas tohid jalusesse panna diskreetse "Veebilehe tegi ..." lingi.
      See on su kõige väärtuslikum tagasilink.

**Ligipääsud kliendile**
- [ ] Google Search Console, lisa klient omanikuks, mitte ainult endale
- [ ] Google'i ettevõtteprofiil kliendi konto alt
- [ ] Analüütika vaatamisõigus

**Dokumentatsioon**
- [ ] Lühike juhend: kuidas fotosid juurde panna, kuidas teksti muuta
- [ ] Mis on püsikulud ja millal need saabuvad
- [ ] Mis on halduse sees ja mis mitte

**Kokkulepe kirjalikult, enne alustamist**
- [ ] Mitu paranduskorda hind sisaldab
- [ ] Mis kuupäevaks valmib
- [ ] Mis jääb hinnast välja

**Kaks nädalat pärast üleandmist**
- [ ] Kontrolli Search Console'ist, kas lehed on indekseeritud
- [ ] Küsi kliendilt, kas päringuid on tulnud
- [ ] Küsi soovitust, kui vastus on jaatav

---

# VEAD, MIS PÄRISELT ETTE TULID

**Keskkonnamuutujad ei jõustu ilma uue deployta.** Kõige sagedasem
"miks vorm ei tööta" põhjus.

**Resend kinnitamata domeeniga saadab ainult konto omaniku aadressile.**
Kui SAAJA on mõni muu aadress, tuleb 403.

**Faviconid jäävad brauseri vahemällu.** Kui leht külastati enne nende
lisamist, ei ilmu need ka pärast. Kontrolli inkognito-aknas.

**Absoluutsed teed (/favicon.ico) töötavad serveris, aga mitte kohalikult
faili avades.** Otsusta, kumb on tähtsam.

**Kerivas konteineris olev absoluutselt positsioneeritud element kerib
sisuga kaasa.** Puuteekraanil on see kohe näha, hiirega mitte.

**Zone lisab domeenile vaikimisi oma A-kirje.** Kui uue juurde lisad ja
vana ei kustuta, on kaks A-kirjet ja Vercel annab vea.

**DNS-i nimeväli:** juurdomeeni A-kirje puhul tühi või @, mitte firma.ee.

**Google Search Console:** Domain-property puhul käib sitemapi väljale
terve aadress, URL-prefix-property puhul ainult sitemap.xml.

**Verceli tasuta plaan on mõeldud mittekaubanduslikuks kasutuseks.**
Kliendilehed on kaubanduslikud. Kontrolli tingimusi ja arvesta Pro-plaani
kuluga oma hinnastamisel.
