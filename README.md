# RA-Test

RA-Test je statička web aplikacija za vežbanje pitanja za ispit za srpsku radio-amatersku licencu.

Aplikacija je namenjena za pripremu kroz vežbanje po oblastima i simulaciju ispita. Baza pitanja je zasnovana na dostavljenom materijalu iz priručnika, pravilnika i primera testova. Projekat nije zvanična usluga RATEL-a, Saveza radio-amatera Srbije ili druge institucije.

## Oblasti ispita

Ispit je podeljen u tri oblasti:

- A - Poznavanje tehnike
- B - Nacionalni i međunarodni pravilnici i postupci
- C - Nacionalni i međunarodni propisi o amaterskoj i amaterskoj satelitskoj službi

## Simulacija ispita

Simulacija koristi strukturu ispita po oblastima:

- A: 30 pitanja, prag za prolaz 21 tačan odgovor
- B: 15 pitanja, prag za prolaz 11 tačnih odgovora
- C: 15 pitanja, prag za prolaz 11 tačnih odgovora

Ukupan rezultat nije dovoljan sam po sebi. Kandidat prolazi samo ako pojedinačno položi sve tri oblasti.

## Vežbanje

Režim vežbanja omogućava izbor oblasti A, B ili C. Posle odgovora prikazuje se tačan odgovor i objašnjenje, pa je ovaj režim pogodan za učenje i ponavljanje gradiva.

## Podaci i privatnost

RA-Test nema server, login, lozinke niti online bazu podataka. Kandidatski profili, rezultati, statistika i nezavršeni test čuvaju se lokalno u browseru kroz `localStorage`.

Podaci ostaju samo na uređaju i u browseru u kome je aplikacija korišćena. Brisanjem podataka browsera brišu se i lokalni profili i statistika.

## Verzija baze pitanja

Trenutna produkciona verzija baze pitanja je `2.0.1`.

Trenutni broj pitanja:

- A: 458
- B: 186
- C: 126
- Ukupno: 770

## Kako se koristi

1. Otvori sajt u browseru.
2. Kreiraj ili izaberi profil kandidata, ako je dostupan.
3. Izaberi vežbanje po oblasti ili simulaciju ispita.
4. Odgovori na pitanja.
5. Pregledaj rezultat, greške i statistiku.

## Lokalno pokretanje

Aplikacija je statička i može da radi kao GitHub Pages sajt. Za lokalno pokretanje može se koristiti bilo koji jednostavan static server.

Primer sa Node.js:

```bash
npx serve .
```

Primer sa Python-om:

```bash
python -m http.server 8000
```

Zatim otvori prikazanu lokalnu adresu u browseru.

## Struktura projekta

- `index.html` - osnovna HTML stranica
- `style.css` - stilovi aplikacije
- `app.js` - logika aplikacije
- `questions.js` - produkciona baza pitanja koju aplikacija učitava
- `docs/question-bank-v2/` - izvorni JSON fajlovi za održavanje baze pitanja

## Održavanje baze pitanja

`questions.js` je runtime baza koju aplikacija direktno učitava. Ne treba ga ručno menjati osim ako je neophodno.

Kanonizovani JSON izvori nalaze se u `docs/question-bank-v2/`. Buduće izmene pitanja treba praviti u tim izvornim JSON fajlovima, zatim regenerisati `questions.js` tek posle validacije:

- jedinstveni ID-jevi
- tačan format pitanja
- tačno 4 ponuđena odgovora
- ispravan indeks tačnog odgovora
- očekivani broj pitanja po oblastima

## GitHub Pages

Projekat je kompatibilan sa GitHub Pages jer koristi samo statičke fajlove: HTML, CSS i vanilla JavaScript. Nema build koraka, backend servisa, baze podataka ni eksternih zavisnosti.
