# RA-Test

Statička web aplikacija za vežbanje ispita za srpsku radio-amatersku licencu. Radi direktno u browseru, bez build koraka, backend servera, naloga ili eksternih biblioteka.

## Lokalno pokretanje u VS Code

1. Otvori folder projekta `RA-Test` u VS Code.
2. Instaliraj ekstenziju **Live Server** ako je već nemaš.
3. Desni klik na `index.html`.
4. Izaberi **Open with Live Server**.

Aplikacija može da se otvori i direktno iz fajla, ali Live Server bolje simulira GitHub Pages okruženje.

## Objavljivanje na GitHub Pages

1. Napravi GitHub repozitorijum i pošalji ove fajlove u njega.
2. U repozitorijumu otvori **Settings**.
3. Izaberi **Pages**.
4. Kao source izaberi granu, najčešće `main`, i folder `/root`.
5. Sačuvaj podešavanje.

GitHub će prikazati URL na kome je aplikacija dostupna. Fajl `.nojekyll` je dodat da GitHub Pages ne koristi Jekyll obradu.

## Profili kandidata

Profili kandidata nisu pravi korisnički nalozi. Ne postoje lozinke, prijava, autentifikacija ni backend. Profil je samo ime sačuvano u `localStorage` trenutnog browsera.

Na početnoj strani možeš:

- dodati novo ime kandidata
- izabrati postojećeg kandidata
- pokrenuti ispit tek kada je kandidat izabran
- obrisati jedan profil kandidata uz potvrdu

Brisanje profila kandidata briše i njegove lokalno sačuvane rezultate.

## Autosave testa

Tokom aktivnog ispita aplikacija automatski čuva nezavršen test u `localStorage` posle svakog odgovora, promene pitanja i otkucaja tajmera.

Čuva se:

- ime kandidata
- izabrana pitanja sa već izmešanim odgovorima
- trenutno pitanje
- uneti odgovori
- vreme početka testa
- preostalo vreme

Ako postoji nezavršen test, pri otvaranju aplikacije prikazuje se poruka sa opcijama **Nastavi test** i **Odbaci test**. Nastavak vraća isti redosled pitanja, izmešane odgovore, izabrane odgovore i preostalo vreme. Završetak testa, ručno ili istekom vremena, briše aktivni autosave.

## Statistika

Po završetku ispita aplikacija lokalno čuva pokušaj pod izabranim kandidatom:

- ime kandidata
- ISO datum i vreme završetka
- ukupan rezultat
- rezultate oblasti A, B i C
- status položeno/nije položeno
- oblasti koje nisu položene
- potrošeno vreme u sekundama
- ID-jeve pogrešno odgovornih pitanja
- verziju seta pitanja

Ekran **Statistika** prikazuje zbirne podatke za sve kandidate ili za jednog izabranog kandidata, kao i tabelu poređenja kandidata:

- broj pokušaja
- najbolji rezultat
- prosečan rezultat
- broj položenih i nepoloženih pokušaja
- prosek po oblastima A/B/C
- datum poslednjeg pokušaja
- listu skorašnjih pokušaja

Statistika je i dalje samo lokalna. Aplikacija ne šalje podatke na server i ne koristi login. Svi profili, pokušaji i aktivni autosave čuvaju se samo u `localStorage` trenutnog browsera i uređaja.

## Export i import

Dugme **Export JSON** preuzima lokalne profile i pokušaje kao `ra-test-statistika.json`.

Dugme **Import JSON** učitava JSON koji je prethodno izvezao RA-Test. Import očekuje objekat sa nizovima `profiles` i `attempts`. Profili se spajaju bez duplikata, a pokušaji se dodaju postojećoj statistici. Neispravan fajl neće srušiti aplikaciju; prikazuje se poruka o uspehu ili grešci.

Dugme **Obriši statistiku** briše sve lokalno sačuvane pokušaje posle potvrde. Profili kandidata ostaju dostupni dok se ne obrišu pojedinačno.

## Tajmer

Simulacija ispita traje 60 minuta. Tokom testa prikazuje se odbrojavanje. Kada vreme istekne, test se automatski završava i rezultat se računa sa odgovorima koji su do tada uneti. Potrošeno vreme se čuva u rezultatu i statistici.

## Verzija seta pitanja

`questions.js` može opciono da definiše globalnu verziju seta pitanja:

```js
window.QUESTION_SET_VERSION = "1.0.0";
```

Ako je definisana, verzija se čuva u svakom završenom pokušaju i prikazuje u skorašnjim pokušajima. Ako nije definisana, koristi se vrednost `"unknown"`.

## Dodavanje pitanja

Sva pitanja se nalaze u `questions.js`, u nizu `QUESTIONS`.

Pitanja treba dodavati samo iz zvaničnog priručnika, pravilnika i obezbeđenih primera testova. Ne treba dodavati praktična hobi pitanja, pitanja o konkretnim uređajima, NanoVNA, Baofeng, praktičnom testiranju antena ili sadržaj van ispitnog materijala.

Osnovni format pitanja:

```js
{
  id: "A001",
  section: "A",
  topic: "Električna struja",
  question: "Šta je električna struja?",
  options: [
    "Usmereno kretanje nosilaca elektriciteta",
    "Kretanje neutrona",
    "Kretanje atoma kroz izolator",
    "Kretanje protona kroz vakuum"
  ],
  correct: 0,
  explanation: "Električna struja je usmereno kretanje nosilaca elektriciteta."
}
```

Polje `correct` je indeks tačnog odgovora u listi `options`, počev od nule.

Pitanje može opciono da sadrži i:

```js
{
  difficulty: "medium",
  source: "Priručnik, str. 42"
}
```

Polja `difficulty` i `source` nisu obavezna. Ako je `source` unet, prikazuje se u objašnjenju i pregledu grešaka.

## Potreban broj pitanja

Za simulaciju ispita aplikacija mora da ima najmanje:

- Oblast A: 30 pitanja, minimum za prolaz 21 tačan odgovor
- Oblast B: 15 pitanja, minimum za prolaz 11 tačnih odgovora
- Oblast C: 15 pitanja, minimum za prolaz 11 tačnih odgovora

Korisnik polaže samo ako svaka oblast pojedinačno ispuni minimum. Ukupan broj poena sam nije dovoljan.
