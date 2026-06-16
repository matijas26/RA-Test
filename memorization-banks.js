window.MEMORIZATION_BANK_VERSION = "1.0.0";
window.MEMORIZATION_BANKS = [
  {
    "bankId": "memo-simplex-kanali",
    "title": "Simpleks kanali",
    "shortTitle": "Simpleks",
    "description": "Trening za V i U simpleks kanale, stare/nove nazive, frekvencije i korak kanala.",
    "category": "MEMORIZATION",
    "questions": [
      {
        "id": "SIM-C01",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "Simpleks - pravila",
        "group": "Simpleks - pravila",
        "question": "Koji je početni novi naziv simpleks kanala na 2 m iz ove tabele?",
        "options": [
          "V16",
          "V48",
          "V1",
          "V8"
        ],
        "correct": 0,
        "answer": "V16",
        "explanation": "Tabela počinje kanalom V16 na 145.2000 MHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-C02",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "Simpleks - pravila",
        "group": "Simpleks - pravila",
        "question": "Koja je početna frekvencija simpleks kanala V16?",
        "options": [
          "145.6000 MHz",
          "145.0000 MHz",
          "145.2000 MHz",
          "433.4000 MHz"
        ],
        "correct": 2,
        "answer": "145.2000 MHz",
        "explanation": "V16 je prvi V kanal u tabeli i ima frekvenciju 145.2000 MHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-C03",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "Simpleks - pravila",
        "group": "Simpleks - pravila",
        "question": "Koji je početni stari naziv simpleks kanala na 2 m iz ove tabele?",
        "options": [
          "S0",
          "S8",
          "SU16",
          "R0"
        ],
        "correct": 1,
        "answer": "S8",
        "explanation": "V16 odgovara starom nazivu S8.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-C04",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "Simpleks - pravila",
        "group": "Simpleks - pravila",
        "question": "Koji je početni novi naziv simpleks kanala na 70 cm iz ove tabele?",
        "options": [
          "U272",
          "RU368",
          "U280",
          "U16"
        ],
        "correct": 0,
        "answer": "U272",
        "explanation": "Tabela 70 cm simpleks kanala počinje kanalom U272 na 433.4000 MHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-C05",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "Simpleks - pravila",
        "group": "Simpleks - pravila",
        "question": "Koja je početna frekvencija simpleks kanala U272?",
        "options": [
          "145.2000 MHz",
          "433.4000 MHz",
          "433.0000 MHz",
          "432.0000 MHz"
        ],
        "correct": 1,
        "answer": "433.4000 MHz",
        "explanation": "U272 je prvi U kanal u tabeli i ima frekvenciju 433.4000 MHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-C06",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "Simpleks - pravila",
        "group": "Simpleks - pravila",
        "question": "Koji je početni stari naziv simpleks kanala na 70 cm iz ove tabele?",
        "options": [
          "S16",
          "SU16",
          "U272",
          "RU0"
        ],
        "correct": 1,
        "answer": "SU16",
        "explanation": "U272 odgovara starom nazivu SU16.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-C07",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "Simpleks - pravila",
        "group": "Simpleks - pravila",
        "question": "Koliki je korak između susednih simpleks kanala V i U u ovim tabelama?",
        "options": [
          "10 kHz",
          "25 kHz",
          "12.5 kHz",
          "600 kHz"
        ],
        "correct": 2,
        "answer": "12.5 kHz",
        "explanation": "Susedni simpleks kanali u tabelama rastu za 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-C08",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "Simpleks - račun",
        "group": "Simpleks - račun",
        "question": "Kako se računa sledeći V kanal iz početnog V16?",
        "options": [
          "Stari naziv se ne menja",
          "Oduzima se 600 kHz",
          "Dodaje se 1.600 MHz",
          "Na prethodnu frekvenciju se doda 12.5 kHz, a novi naziv se poveća za 1."
        ],
        "correct": 3,
        "answer": "Na prethodnu frekvenciju se doda 12.5 kHz, a novi naziv se poveća za 1.",
        "explanation": "V16 = 145.2000 MHz, V17 = 145.2125 MHz, V18 = 145.2250 MHz...",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-C09",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "Simpleks - račun",
        "group": "Simpleks - račun",
        "question": "Kako se računa sledeći U kanal iz početnog U272?",
        "options": [
          "Na prethodnu frekvenciju se doda 12.5 kHz, a novi naziv se poveća za 1.",
          "Dodaje se 600 kHz",
          "Oduzima se 1.600 MHz",
          "Novi naziv se smanjuje za 1"
        ],
        "correct": 0,
        "answer": "Na prethodnu frekvenciju se doda 12.5 kHz, a novi naziv se poveća za 1.",
        "explanation": "U272 = 433.4000 MHz, U273 = 433.4125 MHz, U274 = 433.4250 MHz...",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V001",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V16 (S8)?",
        "options": [
          "145.2250 MHz",
          "145.2000 MHz",
          "145.1875 MHz",
          "145.2125 MHz"
        ],
        "correct": 1,
        "answer": "145.2000 MHz",
        "explanation": "V16 / S8 je na 145.2000 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V002",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.2000 MHz?",
        "options": [
          "V16",
          "V46",
          "V47",
          "V45"
        ],
        "correct": 0,
        "answer": "V16",
        "explanation": "Frekvencija 145.2000 MHz odgovara kanalu V16.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V003",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S8?",
        "options": [
          "V46",
          "V47",
          "V45",
          "V16"
        ],
        "correct": 3,
        "answer": "V16",
        "explanation": "Stari naziv S8 odgovara novom nazivu V16.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V004",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V16?",
        "options": [
          "S22x",
          "S23x",
          "S23",
          "S8"
        ],
        "correct": 3,
        "answer": "S8",
        "explanation": "Novi naziv V16 odgovara starom nazivu S8.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V005",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V17 (S8x)?",
        "options": [
          "145.2000 MHz",
          "145.2250 MHz",
          "145.2375 MHz",
          "145.2125 MHz"
        ],
        "correct": 3,
        "answer": "145.2125 MHz",
        "explanation": "V17 / S8x je na 145.2125 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V006",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.2125 MHz?",
        "options": [
          "V45",
          "V17",
          "V47",
          "V46"
        ],
        "correct": 1,
        "answer": "V17",
        "explanation": "Frekvencija 145.2125 MHz odgovara kanalu V17.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V007",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S8x?",
        "options": [
          "V46",
          "V47",
          "V17",
          "V45"
        ],
        "correct": 2,
        "answer": "V17",
        "explanation": "Stari naziv S8x odgovara novom nazivu V17.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V008",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V17?",
        "options": [
          "S23x",
          "S23",
          "S22x",
          "S8x"
        ],
        "correct": 3,
        "answer": "S8x",
        "explanation": "Novi naziv V17 odgovara starom nazivu S8x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V009",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V18 (S9)?",
        "options": [
          "145.2250 MHz",
          "145.2375 MHz",
          "145.2125 MHz",
          "145.2500 MHz"
        ],
        "correct": 0,
        "answer": "145.2250 MHz",
        "explanation": "V18 / S9 je na 145.2250 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V010",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.2250 MHz?",
        "options": [
          "V46",
          "V45",
          "V47",
          "V18"
        ],
        "correct": 3,
        "answer": "V18",
        "explanation": "Frekvencija 145.2250 MHz odgovara kanalu V18.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V011",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S9?",
        "options": [
          "V46",
          "V18",
          "V45",
          "V47"
        ],
        "correct": 1,
        "answer": "V18",
        "explanation": "Stari naziv S9 odgovara novom nazivu V18.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V012",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V18?",
        "options": [
          "S9",
          "S23x",
          "S22x",
          "S23"
        ],
        "correct": 0,
        "answer": "S9",
        "explanation": "Novi naziv V18 odgovara starom nazivu S9.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V013",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V19 (S9x)?",
        "options": [
          "145.2375 MHz",
          "145.2500 MHz",
          "145.2250 MHz",
          "145.2625 MHz"
        ],
        "correct": 0,
        "answer": "145.2375 MHz",
        "explanation": "V19 / S9x je na 145.2375 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V014",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.2375 MHz?",
        "options": [
          "V16",
          "V17",
          "V18",
          "V19"
        ],
        "correct": 3,
        "answer": "V19",
        "explanation": "Frekvencija 145.2375 MHz odgovara kanalu V19.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V015",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S9x?",
        "options": [
          "V19",
          "V17",
          "V18",
          "V16"
        ],
        "correct": 0,
        "answer": "V19",
        "explanation": "Stari naziv S9x odgovara novom nazivu V19.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V016",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V19?",
        "options": [
          "S9x",
          "S8x",
          "S8",
          "S9"
        ],
        "correct": 0,
        "answer": "S9x",
        "explanation": "Novi naziv V19 odgovara starom nazivu S9x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V017",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V20 (S10)?",
        "options": [
          "145.2500 MHz",
          "145.2750 MHz",
          "145.2625 MHz",
          "145.2375 MHz"
        ],
        "correct": 0,
        "answer": "145.2500 MHz",
        "explanation": "V20 / S10 je na 145.2500 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V018",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.2500 MHz?",
        "options": [
          "V20",
          "V17",
          "V18",
          "V16"
        ],
        "correct": 0,
        "answer": "V20",
        "explanation": "Frekvencija 145.2500 MHz odgovara kanalu V20.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V019",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S10?",
        "options": [
          "V18",
          "V17",
          "V16",
          "V20"
        ],
        "correct": 3,
        "answer": "V20",
        "explanation": "Stari naziv S10 odgovara novom nazivu V20.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V020",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V20?",
        "options": [
          "S10",
          "S9",
          "S8x",
          "S8"
        ],
        "correct": 0,
        "answer": "S10",
        "explanation": "Novi naziv V20 odgovara starom nazivu S10.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V021",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V21 (S10x)?",
        "options": [
          "145.2750 MHz",
          "145.2500 MHz",
          "145.2875 MHz",
          "145.2625 MHz"
        ],
        "correct": 3,
        "answer": "145.2625 MHz",
        "explanation": "V21 / S10x je na 145.2625 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V022",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.2625 MHz?",
        "options": [
          "V21",
          "V17",
          "V18",
          "V16"
        ],
        "correct": 0,
        "answer": "V21",
        "explanation": "Frekvencija 145.2625 MHz odgovara kanalu V21.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V023",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S10x?",
        "options": [
          "V17",
          "V21",
          "V16",
          "V18"
        ],
        "correct": 1,
        "answer": "V21",
        "explanation": "Stari naziv S10x odgovara novom nazivu V21.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V024",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V21?",
        "options": [
          "S10x",
          "S8",
          "S8x",
          "S9"
        ],
        "correct": 0,
        "answer": "S10x",
        "explanation": "Novi naziv V21 odgovara starom nazivu S10x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V025",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V22 (S11)?",
        "options": [
          "145.2750 MHz",
          "145.3000 MHz",
          "145.2625 MHz",
          "145.2875 MHz"
        ],
        "correct": 0,
        "answer": "145.2750 MHz",
        "explanation": "V22 / S11 je na 145.2750 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V026",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.2750 MHz?",
        "options": [
          "V18",
          "V22",
          "V17",
          "V16"
        ],
        "correct": 1,
        "answer": "V22",
        "explanation": "Frekvencija 145.2750 MHz odgovara kanalu V22.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V027",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S11?",
        "options": [
          "V17",
          "V18",
          "V16",
          "V22"
        ],
        "correct": 3,
        "answer": "V22",
        "explanation": "Stari naziv S11 odgovara novom nazivu V22.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V028",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V22?",
        "options": [
          "S8x",
          "S11",
          "S9",
          "S8"
        ],
        "correct": 1,
        "answer": "S11",
        "explanation": "Novi naziv V22 odgovara starom nazivu S11.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V029",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V23 (S11x)?",
        "options": [
          "145.2750 MHz",
          "145.3000 MHz",
          "145.2875 MHz",
          "145.3125 MHz"
        ],
        "correct": 2,
        "answer": "145.2875 MHz",
        "explanation": "V23 / S11x je na 145.2875 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V030",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.2875 MHz?",
        "options": [
          "V16",
          "V17",
          "V23",
          "V18"
        ],
        "correct": 2,
        "answer": "V23",
        "explanation": "Frekvencija 145.2875 MHz odgovara kanalu V23.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V031",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S11x?",
        "options": [
          "V16",
          "V23",
          "V17",
          "V18"
        ],
        "correct": 1,
        "answer": "V23",
        "explanation": "Stari naziv S11x odgovara novom nazivu V23.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V032",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V23?",
        "options": [
          "S9",
          "S8x",
          "S11x",
          "S8"
        ],
        "correct": 2,
        "answer": "S11x",
        "explanation": "Novi naziv V23 odgovara starom nazivu S11x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V033",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V24 (S12)?",
        "options": [
          "145.3125 MHz",
          "145.3250 MHz",
          "145.2875 MHz",
          "145.3000 MHz"
        ],
        "correct": 3,
        "answer": "145.3000 MHz",
        "explanation": "V24 / S12 je na 145.3000 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V034",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.3000 MHz?",
        "options": [
          "V18",
          "V24",
          "V17",
          "V16"
        ],
        "correct": 1,
        "answer": "V24",
        "explanation": "Frekvencija 145.3000 MHz odgovara kanalu V24.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V035",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S12?",
        "options": [
          "V17",
          "V16",
          "V24",
          "V18"
        ],
        "correct": 2,
        "answer": "V24",
        "explanation": "Stari naziv S12 odgovara novom nazivu V24.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V036",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V24?",
        "options": [
          "S8",
          "S8x",
          "S12",
          "S9"
        ],
        "correct": 2,
        "answer": "S12",
        "explanation": "Novi naziv V24 odgovara starom nazivu S12.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V037",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V25 (S12x)?",
        "options": [
          "145.3375 MHz",
          "145.3250 MHz",
          "145.3125 MHz",
          "145.3000 MHz"
        ],
        "correct": 2,
        "answer": "145.3125 MHz",
        "explanation": "V25 / S12x je na 145.3125 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V038",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.3125 MHz?",
        "options": [
          "V17",
          "V18",
          "V25",
          "V16"
        ],
        "correct": 2,
        "answer": "V25",
        "explanation": "Frekvencija 145.3125 MHz odgovara kanalu V25.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V039",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S12x?",
        "options": [
          "V25",
          "V18",
          "V16",
          "V17"
        ],
        "correct": 0,
        "answer": "V25",
        "explanation": "Stari naziv S12x odgovara novom nazivu V25.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V040",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V25?",
        "options": [
          "S8x",
          "S12x",
          "S9",
          "S8"
        ],
        "correct": 1,
        "answer": "S12x",
        "explanation": "Novi naziv V25 odgovara starom nazivu S12x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V041",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V26 (S13)?",
        "options": [
          "145.3500 MHz",
          "145.3125 MHz",
          "145.3375 MHz",
          "145.3250 MHz"
        ],
        "correct": 3,
        "answer": "145.3250 MHz",
        "explanation": "V26 / S13 je na 145.3250 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V042",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.3250 MHz?",
        "options": [
          "V26",
          "V16",
          "V17",
          "V18"
        ],
        "correct": 0,
        "answer": "V26",
        "explanation": "Frekvencija 145.3250 MHz odgovara kanalu V26.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V043",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S13?",
        "options": [
          "V26",
          "V17",
          "V16",
          "V18"
        ],
        "correct": 0,
        "answer": "V26",
        "explanation": "Stari naziv S13 odgovara novom nazivu V26.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V044",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V26?",
        "options": [
          "S8",
          "S9",
          "S8x",
          "S13"
        ],
        "correct": 3,
        "answer": "S13",
        "explanation": "Novi naziv V26 odgovara starom nazivu S13.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V045",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V27 (S13x)?",
        "options": [
          "145.3500 MHz",
          "145.3625 MHz",
          "145.3375 MHz",
          "145.3250 MHz"
        ],
        "correct": 2,
        "answer": "145.3375 MHz",
        "explanation": "V27 / S13x je na 145.3375 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V046",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.3375 MHz?",
        "options": [
          "V16",
          "V18",
          "V17",
          "V27"
        ],
        "correct": 3,
        "answer": "V27",
        "explanation": "Frekvencija 145.3375 MHz odgovara kanalu V27.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V047",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S13x?",
        "options": [
          "V17",
          "V27",
          "V18",
          "V16"
        ],
        "correct": 1,
        "answer": "V27",
        "explanation": "Stari naziv S13x odgovara novom nazivu V27.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V048",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V27?",
        "options": [
          "S8",
          "S8x",
          "S13x",
          "S9"
        ],
        "correct": 2,
        "answer": "S13x",
        "explanation": "Novi naziv V27 odgovara starom nazivu S13x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V049",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V28 (S14)?",
        "options": [
          "145.3750 MHz",
          "145.3500 MHz",
          "145.3375 MHz",
          "145.3625 MHz"
        ],
        "correct": 1,
        "answer": "145.3500 MHz",
        "explanation": "V28 / S14 je na 145.3500 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V050",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.3500 MHz?",
        "options": [
          "V18",
          "V17",
          "V28",
          "V16"
        ],
        "correct": 2,
        "answer": "V28",
        "explanation": "Frekvencija 145.3500 MHz odgovara kanalu V28.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V051",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S14?",
        "options": [
          "V17",
          "V28",
          "V18",
          "V16"
        ],
        "correct": 1,
        "answer": "V28",
        "explanation": "Stari naziv S14 odgovara novom nazivu V28.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V052",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V28?",
        "options": [
          "S9",
          "S8x",
          "S8",
          "S14"
        ],
        "correct": 3,
        "answer": "S14",
        "explanation": "Novi naziv V28 odgovara starom nazivu S14.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V053",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V29 (S14x)?",
        "options": [
          "145.3875 MHz",
          "145.3500 MHz",
          "145.3625 MHz",
          "145.3750 MHz"
        ],
        "correct": 2,
        "answer": "145.3625 MHz",
        "explanation": "V29 / S14x je na 145.3625 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V054",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.3625 MHz?",
        "options": [
          "V29",
          "V17",
          "V18",
          "V16"
        ],
        "correct": 0,
        "answer": "V29",
        "explanation": "Frekvencija 145.3625 MHz odgovara kanalu V29.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V055",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S14x?",
        "options": [
          "V17",
          "V29",
          "V16",
          "V18"
        ],
        "correct": 1,
        "answer": "V29",
        "explanation": "Stari naziv S14x odgovara novom nazivu V29.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V056",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V29?",
        "options": [
          "S9",
          "S8x",
          "S8",
          "S14x"
        ],
        "correct": 3,
        "answer": "S14x",
        "explanation": "Novi naziv V29 odgovara starom nazivu S14x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V057",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V30 (S15)?",
        "options": [
          "145.4000 MHz",
          "145.3875 MHz",
          "145.3625 MHz",
          "145.3750 MHz"
        ],
        "correct": 3,
        "answer": "145.3750 MHz",
        "explanation": "V30 / S15 je na 145.3750 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V058",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.3750 MHz?",
        "options": [
          "V18",
          "V17",
          "V16",
          "V30"
        ],
        "correct": 3,
        "answer": "V30",
        "explanation": "Frekvencija 145.3750 MHz odgovara kanalu V30.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V059",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S15?",
        "options": [
          "V16",
          "V18",
          "V30",
          "V17"
        ],
        "correct": 2,
        "answer": "V30",
        "explanation": "Stari naziv S15 odgovara novom nazivu V30.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V060",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V30?",
        "options": [
          "S15",
          "S8x",
          "S9",
          "S8"
        ],
        "correct": 0,
        "answer": "S15",
        "explanation": "Novi naziv V30 odgovara starom nazivu S15.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V061",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V31 (S15x)?",
        "options": [
          "145.3875 MHz",
          "145.4125 MHz",
          "145.3750 MHz",
          "145.4000 MHz"
        ],
        "correct": 0,
        "answer": "145.3875 MHz",
        "explanation": "V31 / S15x je na 145.3875 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V062",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.3875 MHz?",
        "options": [
          "V17",
          "V31",
          "V16",
          "V18"
        ],
        "correct": 1,
        "answer": "V31",
        "explanation": "Frekvencija 145.3875 MHz odgovara kanalu V31.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V063",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S15x?",
        "options": [
          "V31",
          "V17",
          "V16",
          "V18"
        ],
        "correct": 0,
        "answer": "V31",
        "explanation": "Stari naziv S15x odgovara novom nazivu V31.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V064",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V31?",
        "options": [
          "S15x",
          "S8",
          "S9",
          "S8x"
        ],
        "correct": 0,
        "answer": "S15x",
        "explanation": "Novi naziv V31 odgovara starom nazivu S15x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V065",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V32 (S16)?",
        "options": [
          "145.3875 MHz",
          "145.4250 MHz",
          "145.4125 MHz",
          "145.4000 MHz"
        ],
        "correct": 3,
        "answer": "145.4000 MHz",
        "explanation": "V32 / S16 je na 145.4000 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V066",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.4000 MHz?",
        "options": [
          "V18",
          "V16",
          "V32",
          "V17"
        ],
        "correct": 2,
        "answer": "V32",
        "explanation": "Frekvencija 145.4000 MHz odgovara kanalu V32.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V067",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S16?",
        "options": [
          "V32",
          "V17",
          "V18",
          "V16"
        ],
        "correct": 0,
        "answer": "V32",
        "explanation": "Stari naziv S16 odgovara novom nazivu V32.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V068",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V32?",
        "options": [
          "S8x",
          "S9",
          "S16",
          "S8"
        ],
        "correct": 2,
        "answer": "S16",
        "explanation": "Novi naziv V32 odgovara starom nazivu S16.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V069",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V33 (S16x)?",
        "options": [
          "145.4125 MHz",
          "145.4000 MHz",
          "145.4250 MHz",
          "145.4375 MHz"
        ],
        "correct": 0,
        "answer": "145.4125 MHz",
        "explanation": "V33 / S16x je na 145.4125 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V070",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.4125 MHz?",
        "options": [
          "V33",
          "V18",
          "V16",
          "V17"
        ],
        "correct": 0,
        "answer": "V33",
        "explanation": "Frekvencija 145.4125 MHz odgovara kanalu V33.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V071",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S16x?",
        "options": [
          "V18",
          "V33",
          "V16",
          "V17"
        ],
        "correct": 1,
        "answer": "V33",
        "explanation": "Stari naziv S16x odgovara novom nazivu V33.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V072",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V33?",
        "options": [
          "S8x",
          "S9",
          "S16x",
          "S8"
        ],
        "correct": 2,
        "answer": "S16x",
        "explanation": "Novi naziv V33 odgovara starom nazivu S16x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V073",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V34 (S17)?",
        "options": [
          "145.4125 MHz",
          "145.4375 MHz",
          "145.4500 MHz",
          "145.4250 MHz"
        ],
        "correct": 3,
        "answer": "145.4250 MHz",
        "explanation": "V34 / S17 je na 145.4250 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V074",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.4250 MHz?",
        "options": [
          "V16",
          "V18",
          "V34",
          "V17"
        ],
        "correct": 2,
        "answer": "V34",
        "explanation": "Frekvencija 145.4250 MHz odgovara kanalu V34.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V075",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S17?",
        "options": [
          "V17",
          "V34",
          "V18",
          "V16"
        ],
        "correct": 1,
        "answer": "V34",
        "explanation": "Stari naziv S17 odgovara novom nazivu V34.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V076",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V34?",
        "options": [
          "S17",
          "S9",
          "S8",
          "S8x"
        ],
        "correct": 0,
        "answer": "S17",
        "explanation": "Novi naziv V34 odgovara starom nazivu S17.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V077",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V35 (S17x)?",
        "options": [
          "145.4250 MHz",
          "145.4625 MHz",
          "145.4500 MHz",
          "145.4375 MHz"
        ],
        "correct": 3,
        "answer": "145.4375 MHz",
        "explanation": "V35 / S17x je na 145.4375 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V078",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.4375 MHz?",
        "options": [
          "V17",
          "V16",
          "V35",
          "V18"
        ],
        "correct": 2,
        "answer": "V35",
        "explanation": "Frekvencija 145.4375 MHz odgovara kanalu V35.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V079",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S17x?",
        "options": [
          "V17",
          "V18",
          "V35",
          "V16"
        ],
        "correct": 2,
        "answer": "V35",
        "explanation": "Stari naziv S17x odgovara novom nazivu V35.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V080",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V35?",
        "options": [
          "S8",
          "S17x",
          "S8x",
          "S9"
        ],
        "correct": 1,
        "answer": "S17x",
        "explanation": "Novi naziv V35 odgovara starom nazivu S17x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V081",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V36 (S18)?",
        "options": [
          "145.4375 MHz",
          "145.4750 MHz",
          "145.4625 MHz",
          "145.4500 MHz"
        ],
        "correct": 3,
        "answer": "145.4500 MHz",
        "explanation": "V36 / S18 je na 145.4500 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V082",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.4500 MHz?",
        "options": [
          "V16",
          "V36",
          "V17",
          "V18"
        ],
        "correct": 1,
        "answer": "V36",
        "explanation": "Frekvencija 145.4500 MHz odgovara kanalu V36.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V083",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S18?",
        "options": [
          "V18",
          "V16",
          "V17",
          "V36"
        ],
        "correct": 3,
        "answer": "V36",
        "explanation": "Stari naziv S18 odgovara novom nazivu V36.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V084",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V36?",
        "options": [
          "S18",
          "S8x",
          "S9",
          "S8"
        ],
        "correct": 0,
        "answer": "S18",
        "explanation": "Novi naziv V36 odgovara starom nazivu S18.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V085",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V37 (S18x)?",
        "options": [
          "145.4625 MHz",
          "145.4750 MHz",
          "145.4500 MHz",
          "145.4875 MHz"
        ],
        "correct": 0,
        "answer": "145.4625 MHz",
        "explanation": "V37 / S18x je na 145.4625 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V086",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.4625 MHz?",
        "options": [
          "V17",
          "V18",
          "V37",
          "V16"
        ],
        "correct": 2,
        "answer": "V37",
        "explanation": "Frekvencija 145.4625 MHz odgovara kanalu V37.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V087",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S18x?",
        "options": [
          "V37",
          "V17",
          "V16",
          "V18"
        ],
        "correct": 0,
        "answer": "V37",
        "explanation": "Stari naziv S18x odgovara novom nazivu V37.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V088",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V37?",
        "options": [
          "S18x",
          "S8x",
          "S9",
          "S8"
        ],
        "correct": 0,
        "answer": "S18x",
        "explanation": "Novi naziv V37 odgovara starom nazivu S18x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V089",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V38 (S19)?",
        "options": [
          "145.5000 MHz",
          "145.4875 MHz",
          "145.4625 MHz",
          "145.4750 MHz"
        ],
        "correct": 3,
        "answer": "145.4750 MHz",
        "explanation": "V38 / S19 je na 145.4750 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V090",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.4750 MHz?",
        "options": [
          "V17",
          "V16",
          "V38",
          "V18"
        ],
        "correct": 2,
        "answer": "V38",
        "explanation": "Frekvencija 145.4750 MHz odgovara kanalu V38.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V091",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S19?",
        "options": [
          "V17",
          "V38",
          "V18",
          "V16"
        ],
        "correct": 1,
        "answer": "V38",
        "explanation": "Stari naziv S19 odgovara novom nazivu V38.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V092",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V38?",
        "options": [
          "S19",
          "S8",
          "S9",
          "S8x"
        ],
        "correct": 0,
        "answer": "S19",
        "explanation": "Novi naziv V38 odgovara starom nazivu S19.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V093",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V39 (S19x)?",
        "options": [
          "145.5125 MHz",
          "145.4875 MHz",
          "145.5000 MHz",
          "145.4750 MHz"
        ],
        "correct": 1,
        "answer": "145.4875 MHz",
        "explanation": "V39 / S19x je na 145.4875 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V094",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.4875 MHz?",
        "options": [
          "V39",
          "V18",
          "V17",
          "V16"
        ],
        "correct": 0,
        "answer": "V39",
        "explanation": "Frekvencija 145.4875 MHz odgovara kanalu V39.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V095",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S19x?",
        "options": [
          "V17",
          "V39",
          "V18",
          "V16"
        ],
        "correct": 1,
        "answer": "V39",
        "explanation": "Stari naziv S19x odgovara novom nazivu V39.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V096",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V39?",
        "options": [
          "S8",
          "S8x",
          "S19x",
          "S9"
        ],
        "correct": 2,
        "answer": "S19x",
        "explanation": "Novi naziv V39 odgovara starom nazivu S19x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V097",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V40 (S20)?",
        "options": [
          "145.5125 MHz",
          "145.5000 MHz",
          "145.4875 MHz",
          "145.5250 MHz"
        ],
        "correct": 1,
        "answer": "145.5000 MHz",
        "explanation": "V40 / S20 je na 145.5000 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V098",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.5000 MHz?",
        "options": [
          "V17",
          "V16",
          "V18",
          "V40"
        ],
        "correct": 3,
        "answer": "V40",
        "explanation": "Frekvencija 145.5000 MHz odgovara kanalu V40.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V099",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S20?",
        "options": [
          "V18",
          "V17",
          "V40",
          "V16"
        ],
        "correct": 2,
        "answer": "V40",
        "explanation": "Stari naziv S20 odgovara novom nazivu V40.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V100",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V40?",
        "options": [
          "S8",
          "S9",
          "S20",
          "S8x"
        ],
        "correct": 2,
        "answer": "S20",
        "explanation": "Novi naziv V40 odgovara starom nazivu S20.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V101",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V41 (S20x)?",
        "options": [
          "145.5250 MHz",
          "145.5375 MHz",
          "145.5000 MHz",
          "145.5125 MHz"
        ],
        "correct": 3,
        "answer": "145.5125 MHz",
        "explanation": "V41 / S20x je na 145.5125 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V102",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.5125 MHz?",
        "options": [
          "V17",
          "V16",
          "V18",
          "V41"
        ],
        "correct": 3,
        "answer": "V41",
        "explanation": "Frekvencija 145.5125 MHz odgovara kanalu V41.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V103",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S20x?",
        "options": [
          "V16",
          "V18",
          "V41",
          "V17"
        ],
        "correct": 2,
        "answer": "V41",
        "explanation": "Stari naziv S20x odgovara novom nazivu V41.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V104",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V41?",
        "options": [
          "S8",
          "S20x",
          "S9",
          "S8x"
        ],
        "correct": 1,
        "answer": "S20x",
        "explanation": "Novi naziv V41 odgovara starom nazivu S20x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V105",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V42 (S21)?",
        "options": [
          "145.5500 MHz",
          "145.5375 MHz",
          "145.5125 MHz",
          "145.5250 MHz"
        ],
        "correct": 3,
        "answer": "145.5250 MHz",
        "explanation": "V42 / S21 je na 145.5250 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V106",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.5250 MHz?",
        "options": [
          "V17",
          "V42",
          "V18",
          "V16"
        ],
        "correct": 1,
        "answer": "V42",
        "explanation": "Frekvencija 145.5250 MHz odgovara kanalu V42.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V107",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S21?",
        "options": [
          "V16",
          "V42",
          "V17",
          "V18"
        ],
        "correct": 1,
        "answer": "V42",
        "explanation": "Stari naziv S21 odgovara novom nazivu V42.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V108",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V42?",
        "options": [
          "S9",
          "S8x",
          "S21",
          "S8"
        ],
        "correct": 2,
        "answer": "S21",
        "explanation": "Novi naziv V42 odgovara starom nazivu S21.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V109",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V43 (S21x)?",
        "options": [
          "145.5625 MHz",
          "145.5375 MHz",
          "145.5500 MHz",
          "145.5250 MHz"
        ],
        "correct": 1,
        "answer": "145.5375 MHz",
        "explanation": "V43 / S21x je na 145.5375 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V110",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.5375 MHz?",
        "options": [
          "V17",
          "V16",
          "V18",
          "V43"
        ],
        "correct": 3,
        "answer": "V43",
        "explanation": "Frekvencija 145.5375 MHz odgovara kanalu V43.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V111",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S21x?",
        "options": [
          "V18",
          "V43",
          "V17",
          "V16"
        ],
        "correct": 1,
        "answer": "V43",
        "explanation": "Stari naziv S21x odgovara novom nazivu V43.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V112",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V43?",
        "options": [
          "S8",
          "S9",
          "S21x",
          "S8x"
        ],
        "correct": 2,
        "answer": "S21x",
        "explanation": "Novi naziv V43 odgovara starom nazivu S21x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V113",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V44 (S22)?",
        "options": [
          "145.5625 MHz",
          "145.5750 MHz",
          "145.5500 MHz",
          "145.5375 MHz"
        ],
        "correct": 2,
        "answer": "145.5500 MHz",
        "explanation": "V44 / S22 je na 145.5500 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V114",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.5500 MHz?",
        "options": [
          "V16",
          "V18",
          "V17",
          "V44"
        ],
        "correct": 3,
        "answer": "V44",
        "explanation": "Frekvencija 145.5500 MHz odgovara kanalu V44.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V115",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S22?",
        "options": [
          "V16",
          "V18",
          "V44",
          "V17"
        ],
        "correct": 2,
        "answer": "V44",
        "explanation": "Stari naziv S22 odgovara novom nazivu V44.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V116",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V44?",
        "options": [
          "S8",
          "S22",
          "S9",
          "S8x"
        ],
        "correct": 1,
        "answer": "S22",
        "explanation": "Novi naziv V44 odgovara starom nazivu S22.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V117",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V45 (S22x)?",
        "options": [
          "145.5875 MHz",
          "145.5750 MHz",
          "145.5500 MHz",
          "145.5625 MHz"
        ],
        "correct": 3,
        "answer": "145.5625 MHz",
        "explanation": "V45 / S22x je na 145.5625 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V118",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.5625 MHz?",
        "options": [
          "V18",
          "V17",
          "V45",
          "V16"
        ],
        "correct": 2,
        "answer": "V45",
        "explanation": "Frekvencija 145.5625 MHz odgovara kanalu V45.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V119",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S22x?",
        "options": [
          "V17",
          "V45",
          "V18",
          "V16"
        ],
        "correct": 1,
        "answer": "V45",
        "explanation": "Stari naziv S22x odgovara novom nazivu V45.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V120",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V45?",
        "options": [
          "S9",
          "S8x",
          "S8",
          "S22x"
        ],
        "correct": 3,
        "answer": "S22x",
        "explanation": "Novi naziv V45 odgovara starom nazivu S22x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V121",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V46 (S23)?",
        "options": [
          "145.5625 MHz",
          "145.6000 MHz",
          "145.5875 MHz",
          "145.5750 MHz"
        ],
        "correct": 3,
        "answer": "145.5750 MHz",
        "explanation": "V46 / S23 je na 145.5750 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V122",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.5750 MHz?",
        "options": [
          "V17",
          "V16",
          "V18",
          "V46"
        ],
        "correct": 3,
        "answer": "V46",
        "explanation": "Frekvencija 145.5750 MHz odgovara kanalu V46.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V123",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S23?",
        "options": [
          "V46",
          "V16",
          "V17",
          "V18"
        ],
        "correct": 0,
        "answer": "V46",
        "explanation": "Stari naziv S23 odgovara novom nazivu V46.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V124",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V46?",
        "options": [
          "S8x",
          "S9",
          "S23",
          "S8"
        ],
        "correct": 2,
        "answer": "S23",
        "explanation": "Novi naziv V46 odgovara starom nazivu S23.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V125",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala V47 (S23x)?",
        "options": [
          "145.5750 MHz",
          "145.6125 MHz",
          "145.5875 MHz",
          "145.6000 MHz"
        ],
        "correct": 2,
        "answer": "145.5875 MHz",
        "explanation": "V47 / S23x je na 145.5875 MHz. Početak je V16 = 145.2000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V126",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 145.5875 MHz?",
        "options": [
          "V47",
          "V17",
          "V18",
          "V16"
        ],
        "correct": 0,
        "answer": "V47",
        "explanation": "Frekvencija 145.5875 MHz odgovara kanalu V47.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V127",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal S23x?",
        "options": [
          "V47",
          "V17",
          "V16",
          "V18"
        ],
        "correct": 0,
        "answer": "V47",
        "explanation": "Stari naziv S23x odgovara novom nazivu V47.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-V128",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "V 2m simpleks kanali",
        "group": "V 2m simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal V47?",
        "options": [
          "S23x",
          "S9",
          "S8",
          "S8x"
        ],
        "correct": 0,
        "answer": "S23x",
        "explanation": "Novi naziv V47 odgovara starom nazivu S23x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U129",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U272 (SU16)?",
        "options": [
          "433.4250 MHz",
          "433.4000 MHz",
          "433.3875 MHz",
          "433.4125 MHz"
        ],
        "correct": 1,
        "answer": "433.4000 MHz",
        "explanation": "U272 / SU16 je na 433.4000 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U130",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.4000 MHz?",
        "options": [
          "U272",
          "U285",
          "U287",
          "U286"
        ],
        "correct": 0,
        "answer": "U272",
        "explanation": "Frekvencija 433.4000 MHz odgovara kanalu U272.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U131",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU16?",
        "options": [
          "U286",
          "U285",
          "U272",
          "U287"
        ],
        "correct": 2,
        "answer": "U272",
        "explanation": "Stari naziv SU16 odgovara novom nazivu U272.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U132",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U272?",
        "options": [
          "SU23",
          "SU16",
          "SU23x",
          "SU22x"
        ],
        "correct": 1,
        "answer": "SU16",
        "explanation": "Novi naziv U272 odgovara starom nazivu SU16.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U133",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U273 (SU16x)?",
        "options": [
          "433.4375 MHz",
          "433.4250 MHz",
          "433.4125 MHz",
          "433.4000 MHz"
        ],
        "correct": 2,
        "answer": "433.4125 MHz",
        "explanation": "U273 / SU16x je na 433.4125 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U134",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.4125 MHz?",
        "options": [
          "U273",
          "U286",
          "U287",
          "U285"
        ],
        "correct": 0,
        "answer": "U273",
        "explanation": "Frekvencija 433.4125 MHz odgovara kanalu U273.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U135",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU16x?",
        "options": [
          "U287",
          "U286",
          "U285",
          "U273"
        ],
        "correct": 3,
        "answer": "U273",
        "explanation": "Stari naziv SU16x odgovara novom nazivu U273.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U136",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U273?",
        "options": [
          "SU23",
          "SU16x",
          "SU22x",
          "SU23x"
        ],
        "correct": 1,
        "answer": "SU16x",
        "explanation": "Novi naziv U273 odgovara starom nazivu SU16x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U137",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U274 (SU17)?",
        "options": [
          "433.4250 MHz",
          "433.4375 MHz",
          "433.4125 MHz",
          "433.4500 MHz"
        ],
        "correct": 0,
        "answer": "433.4250 MHz",
        "explanation": "U274 / SU17 je na 433.4250 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U138",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.4250 MHz?",
        "options": [
          "U274",
          "U285",
          "U287",
          "U286"
        ],
        "correct": 0,
        "answer": "U274",
        "explanation": "Frekvencija 433.4250 MHz odgovara kanalu U274.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U139",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU17?",
        "options": [
          "U286",
          "U274",
          "U285",
          "U287"
        ],
        "correct": 1,
        "answer": "U274",
        "explanation": "Stari naziv SU17 odgovara novom nazivu U274.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U140",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U274?",
        "options": [
          "SU17",
          "SU22x",
          "SU23x",
          "SU23"
        ],
        "correct": 0,
        "answer": "SU17",
        "explanation": "Novi naziv U274 odgovara starom nazivu SU17.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U141",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U275 (SU17x)?",
        "options": [
          "433.4500 MHz",
          "433.4375 MHz",
          "433.4625 MHz",
          "433.4250 MHz"
        ],
        "correct": 1,
        "answer": "433.4375 MHz",
        "explanation": "U275 / SU17x je na 433.4375 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U142",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.4375 MHz?",
        "options": [
          "U275",
          "U274",
          "U273",
          "U272"
        ],
        "correct": 0,
        "answer": "U275",
        "explanation": "Frekvencija 433.4375 MHz odgovara kanalu U275.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U143",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU17x?",
        "options": [
          "U274",
          "U273",
          "U275",
          "U272"
        ],
        "correct": 2,
        "answer": "U275",
        "explanation": "Stari naziv SU17x odgovara novom nazivu U275.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U144",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U275?",
        "options": [
          "SU16x",
          "SU17",
          "SU16",
          "SU17x"
        ],
        "correct": 3,
        "answer": "SU17x",
        "explanation": "Novi naziv U275 odgovara starom nazivu SU17x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U145",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U276 (SU18)?",
        "options": [
          "433.4375 MHz",
          "433.4500 MHz",
          "433.4750 MHz",
          "433.4625 MHz"
        ],
        "correct": 1,
        "answer": "433.4500 MHz",
        "explanation": "U276 / SU18 je na 433.4500 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U146",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.4500 MHz?",
        "options": [
          "U276",
          "U272",
          "U274",
          "U273"
        ],
        "correct": 0,
        "answer": "U276",
        "explanation": "Frekvencija 433.4500 MHz odgovara kanalu U276.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U147",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU18?",
        "options": [
          "U276",
          "U273",
          "U274",
          "U272"
        ],
        "correct": 0,
        "answer": "U276",
        "explanation": "Stari naziv SU18 odgovara novom nazivu U276.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U148",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U276?",
        "options": [
          "SU16",
          "SU16x",
          "SU17",
          "SU18"
        ],
        "correct": 3,
        "answer": "SU18",
        "explanation": "Novi naziv U276 odgovara starom nazivu SU18.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U149",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U277 (SU18x)?",
        "options": [
          "433.4625 MHz",
          "433.4500 MHz",
          "433.4875 MHz",
          "433.4750 MHz"
        ],
        "correct": 0,
        "answer": "433.4625 MHz",
        "explanation": "U277 / SU18x je na 433.4625 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U150",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.4625 MHz?",
        "options": [
          "U274",
          "U277",
          "U273",
          "U272"
        ],
        "correct": 1,
        "answer": "U277",
        "explanation": "Frekvencija 433.4625 MHz odgovara kanalu U277.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U151",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU18x?",
        "options": [
          "U273",
          "U274",
          "U277",
          "U272"
        ],
        "correct": 2,
        "answer": "U277",
        "explanation": "Stari naziv SU18x odgovara novom nazivu U277.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U152",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U277?",
        "options": [
          "SU17",
          "SU18x",
          "SU16x",
          "SU16"
        ],
        "correct": 1,
        "answer": "SU18x",
        "explanation": "Novi naziv U277 odgovara starom nazivu SU18x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U153",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U278 (SU19)?",
        "options": [
          "433.4625 MHz",
          "433.4875 MHz",
          "433.5000 MHz",
          "433.4750 MHz"
        ],
        "correct": 3,
        "answer": "433.4750 MHz",
        "explanation": "U278 / SU19 je na 433.4750 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U154",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.4750 MHz?",
        "options": [
          "U273",
          "U278",
          "U274",
          "U272"
        ],
        "correct": 1,
        "answer": "U278",
        "explanation": "Frekvencija 433.4750 MHz odgovara kanalu U278.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U155",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU19?",
        "options": [
          "U272",
          "U273",
          "U274",
          "U278"
        ],
        "correct": 3,
        "answer": "U278",
        "explanation": "Stari naziv SU19 odgovara novom nazivu U278.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U156",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U278?",
        "options": [
          "SU16x",
          "SU19",
          "SU17",
          "SU16"
        ],
        "correct": 1,
        "answer": "SU19",
        "explanation": "Novi naziv U278 odgovara starom nazivu SU19.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U157",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U279 (SU19x)?",
        "options": [
          "433.5000 MHz",
          "433.5125 MHz",
          "433.4875 MHz",
          "433.4750 MHz"
        ],
        "correct": 2,
        "answer": "433.4875 MHz",
        "explanation": "U279 / SU19x je na 433.4875 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U158",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.4875 MHz?",
        "options": [
          "U279",
          "U274",
          "U273",
          "U272"
        ],
        "correct": 0,
        "answer": "U279",
        "explanation": "Frekvencija 433.4875 MHz odgovara kanalu U279.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U159",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU19x?",
        "options": [
          "U274",
          "U272",
          "U273",
          "U279"
        ],
        "correct": 3,
        "answer": "U279",
        "explanation": "Stari naziv SU19x odgovara novom nazivu U279.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U160",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U279?",
        "options": [
          "SU16",
          "SU16x",
          "SU17",
          "SU19x"
        ],
        "correct": 3,
        "answer": "SU19x",
        "explanation": "Novi naziv U279 odgovara starom nazivu SU19x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U161",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U280 (SU20)?",
        "options": [
          "433.5125 MHz",
          "433.5250 MHz",
          "433.4875 MHz",
          "433.5000 MHz"
        ],
        "correct": 3,
        "answer": "433.5000 MHz",
        "explanation": "U280 / SU20 je na 433.5000 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U162",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.5000 MHz?",
        "options": [
          "U274",
          "U280",
          "U272",
          "U273"
        ],
        "correct": 1,
        "answer": "U280",
        "explanation": "Frekvencija 433.5000 MHz odgovara kanalu U280.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U163",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU20?",
        "options": [
          "U273",
          "U272",
          "U274",
          "U280"
        ],
        "correct": 3,
        "answer": "U280",
        "explanation": "Stari naziv SU20 odgovara novom nazivu U280.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U164",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U280?",
        "options": [
          "SU20",
          "SU16",
          "SU16x",
          "SU17"
        ],
        "correct": 0,
        "answer": "SU20",
        "explanation": "Novi naziv U280 odgovara starom nazivu SU20.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U165",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U281 (SU20x)?",
        "options": [
          "433.5125 MHz",
          "433.5000 MHz",
          "433.5375 MHz",
          "433.5250 MHz"
        ],
        "correct": 0,
        "answer": "433.5125 MHz",
        "explanation": "U281 / SU20x je na 433.5125 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U166",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.5125 MHz?",
        "options": [
          "U281",
          "U272",
          "U273",
          "U274"
        ],
        "correct": 0,
        "answer": "U281",
        "explanation": "Frekvencija 433.5125 MHz odgovara kanalu U281.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U167",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU20x?",
        "options": [
          "U274",
          "U281",
          "U273",
          "U272"
        ],
        "correct": 1,
        "answer": "U281",
        "explanation": "Stari naziv SU20x odgovara novom nazivu U281.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U168",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U281?",
        "options": [
          "SU20x",
          "SU17",
          "SU16",
          "SU16x"
        ],
        "correct": 0,
        "answer": "SU20x",
        "explanation": "Novi naziv U281 odgovara starom nazivu SU20x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U169",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U282 (SU21)?",
        "options": [
          "433.5500 MHz",
          "433.5250 MHz",
          "433.5375 MHz",
          "433.5125 MHz"
        ],
        "correct": 1,
        "answer": "433.5250 MHz",
        "explanation": "U282 / SU21 je na 433.5250 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U170",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.5250 MHz?",
        "options": [
          "U272",
          "U282",
          "U273",
          "U274"
        ],
        "correct": 1,
        "answer": "U282",
        "explanation": "Frekvencija 433.5250 MHz odgovara kanalu U282.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U171",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU21?",
        "options": [
          "U272",
          "U282",
          "U274",
          "U273"
        ],
        "correct": 1,
        "answer": "U282",
        "explanation": "Stari naziv SU21 odgovara novom nazivu U282.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U172",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U282?",
        "options": [
          "SU16",
          "SU21",
          "SU17",
          "SU16x"
        ],
        "correct": 1,
        "answer": "SU21",
        "explanation": "Novi naziv U282 odgovara starom nazivu SU21.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U173",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U283 (SU21x)?",
        "options": [
          "433.5375 MHz",
          "433.5625 MHz",
          "433.5500 MHz",
          "433.5250 MHz"
        ],
        "correct": 0,
        "answer": "433.5375 MHz",
        "explanation": "U283 / SU21x je na 433.5375 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U174",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.5375 MHz?",
        "options": [
          "U283",
          "U272",
          "U274",
          "U273"
        ],
        "correct": 0,
        "answer": "U283",
        "explanation": "Frekvencija 433.5375 MHz odgovara kanalu U283.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U175",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU21x?",
        "options": [
          "U274",
          "U273",
          "U272",
          "U283"
        ],
        "correct": 3,
        "answer": "U283",
        "explanation": "Stari naziv SU21x odgovara novom nazivu U283.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U176",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U283?",
        "options": [
          "SU16",
          "SU16x",
          "SU17",
          "SU21x"
        ],
        "correct": 3,
        "answer": "SU21x",
        "explanation": "Novi naziv U283 odgovara starom nazivu SU21x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U177",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U284 (SU22)?",
        "options": [
          "433.5375 MHz",
          "433.5750 MHz",
          "433.5500 MHz",
          "433.5625 MHz"
        ],
        "correct": 2,
        "answer": "433.5500 MHz",
        "explanation": "U284 / SU22 je na 433.5500 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U178",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.5500 MHz?",
        "options": [
          "U272",
          "U274",
          "U273",
          "U284"
        ],
        "correct": 3,
        "answer": "U284",
        "explanation": "Frekvencija 433.5500 MHz odgovara kanalu U284.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U179",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU22?",
        "options": [
          "U274",
          "U273",
          "U272",
          "U284"
        ],
        "correct": 3,
        "answer": "U284",
        "explanation": "Stari naziv SU22 odgovara novom nazivu U284.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U180",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U284?",
        "options": [
          "SU22",
          "SU17",
          "SU16",
          "SU16x"
        ],
        "correct": 0,
        "answer": "SU22",
        "explanation": "Novi naziv U284 odgovara starom nazivu SU22.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U181",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U285 (SU22x)?",
        "options": [
          "433.5500 MHz",
          "433.5625 MHz",
          "433.5875 MHz",
          "433.5750 MHz"
        ],
        "correct": 1,
        "answer": "433.5625 MHz",
        "explanation": "U285 / SU22x je na 433.5625 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U182",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.5625 MHz?",
        "options": [
          "U285",
          "U272",
          "U273",
          "U274"
        ],
        "correct": 0,
        "answer": "U285",
        "explanation": "Frekvencija 433.5625 MHz odgovara kanalu U285.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U183",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU22x?",
        "options": [
          "U272",
          "U285",
          "U274",
          "U273"
        ],
        "correct": 1,
        "answer": "U285",
        "explanation": "Stari naziv SU22x odgovara novom nazivu U285.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U184",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U285?",
        "options": [
          "SU17",
          "SU22x",
          "SU16",
          "SU16x"
        ],
        "correct": 1,
        "answer": "SU22x",
        "explanation": "Novi naziv U285 odgovara starom nazivu SU22x.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U185",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U286 (SU23)?",
        "options": [
          "433.6000 MHz",
          "433.5750 MHz",
          "433.5625 MHz",
          "433.5875 MHz"
        ],
        "correct": 1,
        "answer": "433.5750 MHz",
        "explanation": "U286 / SU23 je na 433.5750 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U186",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.5750 MHz?",
        "options": [
          "U274",
          "U286",
          "U272",
          "U273"
        ],
        "correct": 1,
        "answer": "U286",
        "explanation": "Frekvencija 433.5750 MHz odgovara kanalu U286.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U187",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU23?",
        "options": [
          "U286",
          "U273",
          "U272",
          "U274"
        ],
        "correct": 0,
        "answer": "U286",
        "explanation": "Stari naziv SU23 odgovara novom nazivu U286.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U188",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U286?",
        "options": [
          "SU17",
          "SU23",
          "SU16x",
          "SU16"
        ],
        "correct": 1,
        "answer": "SU23",
        "explanation": "Novi naziv U286 odgovara starom nazivu SU23.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U189",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koja je frekvencija simpleks kanala U287 (SU23x)?",
        "options": [
          "433.5875 MHz",
          "433.6125 MHz",
          "433.5750 MHz",
          "433.6000 MHz"
        ],
        "correct": 0,
        "answer": "433.5875 MHz",
        "explanation": "U287 / SU23x je na 433.5875 MHz. Početak je U272 = 433.4000 MHz, korak je 12.5 kHz.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U190",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji novi kanal odgovara frekvenciji 433.5875 MHz?",
        "options": [
          "U273",
          "U287",
          "U272",
          "U274"
        ],
        "correct": 1,
        "answer": "U287",
        "explanation": "Frekvencija 433.5875 MHz odgovara kanalu U287.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U191",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je novi naziv za stari simpleks kanal SU23x?",
        "options": [
          "U273",
          "U272",
          "U274",
          "U287"
        ],
        "correct": 3,
        "answer": "U287",
        "explanation": "Stari naziv SU23x odgovara novom nazivu U287.",
        "source": "simplex_kanali_vezbanje.txt"
      },
      {
        "id": "SIM-U192",
        "bankId": "memo-simplex-kanali",
        "section": "MEMO_SIMPLEX",
        "topic": "U 70cm simpleks kanali",
        "group": "U 70cm simpleks kanali",
        "question": "Koji je stari naziv za simpleks kanal U287?",
        "options": [
          "SU16",
          "SU23x",
          "SU17",
          "SU16x"
        ],
        "correct": 1,
        "answer": "SU23x",
        "explanation": "Novi naziv U287 odgovara starom nazivu SU23x.",
        "source": "simplex_kanali_vezbanje.txt"
      }
    ],
    "questionCount": 201,
    "studyNotes": [
      {
        "title": "2 m simpleks kanali / V kanali",
        "lines": [
          "Po?etni kanal: S8 = V16",
          "Frekvencija V16/S8: 145.2000 MHz",
          "Korak kanala: 12.5 kHz",
          "Stari nazivi idu redom: S8, S8x, S9, S9x, S10, S10x..."
        ],
        "formulas": [
          "frekvencija slede?eg kanala = frekvencija prethodnog kanala + 0.0125 MHz",
          "frekvencija V kanala = 145.2000 MHz + (broj V kanala - 16) x 0.0125 MHz"
        ],
        "examples": [
          "V17 = 145.2000 + 0.0125 = 145.2125 MHz",
          "V18 = 145.2000 + 2 x 0.0125 = 145.2250 MHz",
          "V20 = 145.2000 + 4 x 0.0125 = 145.2500 MHz"
        ]
      },
      {
        "title": "70 cm simpleks kanali / U kanali",
        "lines": [
          "Po?etni kanal: SU16 = U272",
          "Frekvencija U272/SU16: 433.4000 MHz",
          "Korak kanala: 12.5 kHz",
          "Stari nazivi idu redom: SU16, SU16x, SU17, SU17x, SU18, SU18x..."
        ],
        "formulas": [
          "frekvencija slede?eg kanala = frekvencija prethodnog kanala + 0.0125 MHz",
          "frekvencija U kanala = 433.4000 MHz + (broj U kanala - 272) x 0.0125 MHz"
        ],
        "examples": [
          "U273 = 433.4000 + 0.0125 = 433.4125 MHz",
          "U274 = 433.4000 + 2 x 0.0125 = 433.4250 MHz",
          "U280 = 433.4000 + 8 x 0.0125 = 433.5000 MHz"
        ]
      },
      {
        "title": "Kako re?avati zadatke za simpleks kanale",
        "lines": [
          "Prvo prepoznaj opseg: V kanal je 2 m, U kanal je 70 cm.",
          "Na oba opsega korak je 12.5 kHz = 0.0125 MHz.",
          "Novi naziv kanala raste za 1 za svaki slede?i kanal.",
          "Kod starih naziva smenjuju se ceo kanal i x kanal.",
          "Primer za 2 m: S8, S8x, S9, S9x...",
          "Primer za 70 cm: SU16, SU16x, SU17, SU17x..."
        ],
        "formulas": [
          "broj koraka V = broj V kanala - 16",
          "frekvencija V = 145.2000 + broj koraka x 0.0125 MHz",
          "broj koraka U = broj U kanala - 272",
          "frekvencija U = 433.4000 + broj koraka x 0.0125 MHz"
        ]
      }
    ]
  },
  {
    "bankId": "memo-repetitori",
    "title": "Repetitori",
    "shortTitle": "Repetitori",
    "description": "Trening za RV, RU i RM repetitore, ulazne/izlazne frekvencije, pomake, korak i stare/nove nazive.",
    "category": "MEMORIZATION",
    "questions": [
      {
        "id": "REP-C01",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "Repetitori - pravila",
        "group": "Repetitori - pravila",
        "question": "Koliki je standardni pomak za repetitore na opsegu 144 MHz / 2 m u Srbiji?",
        "options": [
          "-1600 kHz",
          "-6000 kHz",
          "+600 kHz",
          "-600 kHz"
        ],
        "correct": 3,
        "answer": "-600 kHz",
        "explanation": "Za 2 m repetitore ulazna frekvencija je 600 kHz niža od izlazne.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-C02",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "Repetitori - pravila",
        "group": "Repetitori - pravila",
        "question": "Koliki je standardni pomak za repetitore na opsegu 432 MHz / 70 cm u Srbiji?",
        "options": [
          "-600 kHz",
          "+1600 kHz",
          "-6000 kHz",
          "-1600 kHz"
        ],
        "correct": 3,
        "answer": "-1600 kHz",
        "explanation": "Za 70 cm repetitore ulazna frekvencija je 1.600 MHz niža od izlazne.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-C03",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "Repetitori - pravila",
        "group": "Repetitori - pravila",
        "question": "Koliki je standardni pomak za repetitore na opsegu 1.2 GHz / 23 cm u Srbiji?",
        "options": [
          "-1600 kHz",
          "-6000 kHz",
          "+6000 kHz",
          "-600 kHz"
        ],
        "correct": 1,
        "answer": "-6000 kHz",
        "explanation": "Za 1.2 GHz repetitore ulazna frekvencija je 6 MHz niža od izlazne.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-C04",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "Repetitori - pravila",
        "group": "Repetitori - pravila",
        "question": "Koliki je frekvencijski korak između susednih repetitorskih kanala na 144 MHz i 432 MHz?",
        "options": [
          "6.25 kHz",
          "25 kHz",
          "10 kHz",
          "12.5 kHz"
        ],
        "correct": 3,
        "answer": "12.5 kHz",
        "explanation": "U priručniku je navedeno da je korak 12.5 kHz na 144 MHz i 432 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-C05",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "Repetitori - pravila",
        "group": "Repetitori - pravila",
        "question": "Koliki je frekvencijski korak između susednih repetitorskih kanala na 1.2 GHz?",
        "options": [
          "50 kHz",
          "12.5 kHz",
          "25 kHz",
          "10 kHz"
        ],
        "correct": 2,
        "answer": "25 kHz",
        "explanation": "Na 1.2 GHz korak susednih kanala je 25 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-C06",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "Repetitori - račun",
        "group": "Repetitori - račun",
        "question": "Ako je izlazna frekvencija 2 m repetitora 145.7000 MHz, kolika je ulazna frekvencija?",
        "options": [
          "145.3000 MHz",
          "145.7000 MHz",
          "145.1000 MHz",
          "144.1000 MHz"
        ],
        "correct": 2,
        "answer": "145.1000 MHz",
        "explanation": "Na 2 m: ulaz = izlaz - 0.600 MHz, dakle 145.7000 - 0.6000 = 145.1000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-C07",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "Repetitori - račun",
        "group": "Repetitori - račun",
        "question": "Ako je ulazna frekvencija 70 cm repetitora 433.1625 MHz, kolika je izlazna frekvencija?",
        "options": [
          "439.1625 MHz",
          "434.7625 MHz",
          "434.1625 MHz",
          "433.7625 MHz"
        ],
        "correct": 1,
        "answer": "434.7625 MHz",
        "explanation": "Na 70 cm: izlaz = ulaz + 1.600 MHz, dakle 433.1625 + 1.6000 = 434.7625 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-C08",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "Repetitori - račun",
        "group": "Repetitori - račun",
        "question": "Ako je ulazna frekvencija 23 cm repetitora 1291.250 MHz, kolika je izlazna frekvencija?",
        "options": [
          "1297.250 MHz",
          "1297.850 MHz",
          "1292.850 MHz",
          "1291.850 MHz"
        ],
        "correct": 0,
        "answer": "1297.250 MHz",
        "explanation": "Na 23 cm: izlaz = ulaz + 6.000 MHz, dakle 1291.250 + 6.000 = 1297.250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV001",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV48 (R0)?",
        "options": [
          "145.6000 MHz",
          "145.5875 MHz",
          "145.6125 MHz",
          "145.6250 MHz"
        ],
        "correct": 0,
        "answer": "145.6000 MHz",
        "explanation": "RV48 ima izlaz 145.6000 MHz. Na 2 m ulaz je 600 kHz niži: 145.0000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV002",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV48 (R0)?",
        "options": [
          "144.9875 MHz",
          "145.0250 MHz",
          "145.0125 MHz",
          "145.0000 MHz"
        ],
        "correct": 3,
        "answer": "145.0000 MHz",
        "explanation": "RV48 ima ulaz 145.0000 MHz. Izlaz je 145.6000 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV003",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R0?",
        "options": [
          "RV61",
          "RV48",
          "RV62",
          "RV63"
        ],
        "correct": 1,
        "answer": "RV48",
        "explanation": "Stari naziv R0 odgovara novom nazivu RV48.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV004",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV48?",
        "options": [
          "R0",
          "R6x",
          "R7x",
          "R7"
        ],
        "correct": 0,
        "answer": "R0",
        "explanation": "Novi naziv RV48 odgovara starom nazivu R0.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV005",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV49 (R0x)?",
        "options": [
          "145.6250 MHz",
          "145.6000 MHz",
          "145.6125 MHz",
          "145.6375 MHz"
        ],
        "correct": 2,
        "answer": "145.6125 MHz",
        "explanation": "RV49 ima izlaz 145.6125 MHz. Na 2 m ulaz je 600 kHz niži: 145.0125 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV006",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV49 (R0x)?",
        "options": [
          "145.0250 MHz",
          "145.0125 MHz",
          "145.0375 MHz",
          "145.0000 MHz"
        ],
        "correct": 1,
        "answer": "145.0125 MHz",
        "explanation": "RV49 ima ulaz 145.0125 MHz. Izlaz je 145.6125 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV007",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R0x?",
        "options": [
          "RV63",
          "RV62",
          "RV49",
          "RV61"
        ],
        "correct": 2,
        "answer": "RV49",
        "explanation": "Stari naziv R0x odgovara novom nazivu RV49.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV008",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV49?",
        "options": [
          "R7",
          "R0x",
          "R6x",
          "R7x"
        ],
        "correct": 1,
        "answer": "R0x",
        "explanation": "Novi naziv RV49 odgovara starom nazivu R0x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV009",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV50 (R1)?",
        "options": [
          "145.6375 MHz",
          "145.6250 MHz",
          "145.6125 MHz",
          "145.6500 MHz"
        ],
        "correct": 1,
        "answer": "145.6250 MHz",
        "explanation": "RV50 ima izlaz 145.6250 MHz. Na 2 m ulaz je 600 kHz niži: 145.0250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV010",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV50 (R1)?",
        "options": [
          "145.0125 MHz",
          "145.0375 MHz",
          "145.0250 MHz",
          "145.0500 MHz"
        ],
        "correct": 2,
        "answer": "145.0250 MHz",
        "explanation": "RV50 ima ulaz 145.0250 MHz. Izlaz je 145.6250 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV011",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R1?",
        "options": [
          "RV61",
          "RV63",
          "RV62",
          "RV50"
        ],
        "correct": 3,
        "answer": "RV50",
        "explanation": "Stari naziv R1 odgovara novom nazivu RV50.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV012",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV50?",
        "options": [
          "R7",
          "R6x",
          "R1",
          "R7x"
        ],
        "correct": 2,
        "answer": "R1",
        "explanation": "Novi naziv RV50 odgovara starom nazivu R1.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV013",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV51 (R1x)?",
        "options": [
          "145.6375 MHz",
          "145.6625 MHz",
          "145.6250 MHz",
          "145.6500 MHz"
        ],
        "correct": 0,
        "answer": "145.6375 MHz",
        "explanation": "RV51 ima izlaz 145.6375 MHz. Na 2 m ulaz je 600 kHz niži: 145.0375 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV014",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV51 (R1x)?",
        "options": [
          "145.0500 MHz",
          "145.0250 MHz",
          "145.0625 MHz",
          "145.0375 MHz"
        ],
        "correct": 3,
        "answer": "145.0375 MHz",
        "explanation": "RV51 ima ulaz 145.0375 MHz. Izlaz je 145.6375 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV015",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R1x?",
        "options": [
          "RV49",
          "RV51",
          "RV50",
          "RV48"
        ],
        "correct": 1,
        "answer": "RV51",
        "explanation": "Stari naziv R1x odgovara novom nazivu RV51.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV016",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV51?",
        "options": [
          "R0",
          "R0x",
          "R1x",
          "R1"
        ],
        "correct": 2,
        "answer": "R1x",
        "explanation": "Novi naziv RV51 odgovara starom nazivu R1x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV017",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV52 (R2)?",
        "options": [
          "145.6625 MHz",
          "145.6500 MHz",
          "145.6750 MHz",
          "145.6375 MHz"
        ],
        "correct": 1,
        "answer": "145.6500 MHz",
        "explanation": "RV52 ima izlaz 145.6500 MHz. Na 2 m ulaz je 600 kHz niži: 145.0500 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV018",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV52 (R2)?",
        "options": [
          "145.0750 MHz",
          "145.0375 MHz",
          "145.0625 MHz",
          "145.0500 MHz"
        ],
        "correct": 3,
        "answer": "145.0500 MHz",
        "explanation": "RV52 ima ulaz 145.0500 MHz. Izlaz je 145.6500 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV019",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R2?",
        "options": [
          "RV48",
          "RV50",
          "RV49",
          "RV52"
        ],
        "correct": 3,
        "answer": "RV52",
        "explanation": "Stari naziv R2 odgovara novom nazivu RV52.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV020",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV52?",
        "options": [
          "R1",
          "R0x",
          "R2",
          "R0"
        ],
        "correct": 2,
        "answer": "R2",
        "explanation": "Novi naziv RV52 odgovara starom nazivu R2.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV021",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV53 (R2x)?",
        "options": [
          "145.6750 MHz",
          "145.6625 MHz",
          "145.6500 MHz",
          "145.6875 MHz"
        ],
        "correct": 1,
        "answer": "145.6625 MHz",
        "explanation": "RV53 ima izlaz 145.6625 MHz. Na 2 m ulaz je 600 kHz niži: 145.0625 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV022",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV53 (R2x)?",
        "options": [
          "145.0500 MHz",
          "145.0875 MHz",
          "145.0625 MHz",
          "145.0750 MHz"
        ],
        "correct": 2,
        "answer": "145.0625 MHz",
        "explanation": "RV53 ima ulaz 145.0625 MHz. Izlaz je 145.6625 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV023",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R2x?",
        "options": [
          "RV50",
          "RV49",
          "RV48",
          "RV53"
        ],
        "correct": 3,
        "answer": "RV53",
        "explanation": "Stari naziv R2x odgovara novom nazivu RV53.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV024",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV53?",
        "options": [
          "R0x",
          "R0",
          "R1",
          "R2x"
        ],
        "correct": 3,
        "answer": "R2x",
        "explanation": "Novi naziv RV53 odgovara starom nazivu R2x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV025",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV54 (R3)?",
        "options": [
          "145.7000 MHz",
          "145.6625 MHz",
          "145.6875 MHz",
          "145.6750 MHz"
        ],
        "correct": 3,
        "answer": "145.6750 MHz",
        "explanation": "RV54 ima izlaz 145.6750 MHz. Na 2 m ulaz je 600 kHz niži: 145.0750 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV026",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV54 (R3)?",
        "options": [
          "145.0875 MHz",
          "145.0625 MHz",
          "145.0750 MHz",
          "145.1000 MHz"
        ],
        "correct": 2,
        "answer": "145.0750 MHz",
        "explanation": "RV54 ima ulaz 145.0750 MHz. Izlaz je 145.6750 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV027",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R3?",
        "options": [
          "RV48",
          "RV54",
          "RV50",
          "RV49"
        ],
        "correct": 1,
        "answer": "RV54",
        "explanation": "Stari naziv R3 odgovara novom nazivu RV54.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV028",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV54?",
        "options": [
          "R1",
          "R3",
          "R0",
          "R0x"
        ],
        "correct": 1,
        "answer": "R3",
        "explanation": "Novi naziv RV54 odgovara starom nazivu R3.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV029",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV55 (R3x)?",
        "options": [
          "145.7125 MHz",
          "145.7000 MHz",
          "145.6875 MHz",
          "145.6750 MHz"
        ],
        "correct": 2,
        "answer": "145.6875 MHz",
        "explanation": "RV55 ima izlaz 145.6875 MHz. Na 2 m ulaz je 600 kHz niži: 145.0875 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV030",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV55 (R3x)?",
        "options": [
          "145.1125 MHz",
          "145.1000 MHz",
          "145.0875 MHz",
          "145.0750 MHz"
        ],
        "correct": 2,
        "answer": "145.0875 MHz",
        "explanation": "RV55 ima ulaz 145.0875 MHz. Izlaz je 145.6875 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV031",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R3x?",
        "options": [
          "RV55",
          "RV48",
          "RV50",
          "RV49"
        ],
        "correct": 0,
        "answer": "RV55",
        "explanation": "Stari naziv R3x odgovara novom nazivu RV55.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV032",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV55?",
        "options": [
          "R0x",
          "R0",
          "R3x",
          "R1"
        ],
        "correct": 2,
        "answer": "R3x",
        "explanation": "Novi naziv RV55 odgovara starom nazivu R3x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV033",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV56 (R4)?",
        "options": [
          "145.6875 MHz",
          "145.7125 MHz",
          "145.7250 MHz",
          "145.7000 MHz"
        ],
        "correct": 3,
        "answer": "145.7000 MHz",
        "explanation": "RV56 ima izlaz 145.7000 MHz. Na 2 m ulaz je 600 kHz niži: 145.1000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV034",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV56 (R4)?",
        "options": [
          "145.1000 MHz",
          "145.1250 MHz",
          "145.1125 MHz",
          "145.0875 MHz"
        ],
        "correct": 0,
        "answer": "145.1000 MHz",
        "explanation": "RV56 ima ulaz 145.1000 MHz. Izlaz je 145.7000 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV035",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R4?",
        "options": [
          "RV56",
          "RV50",
          "RV48",
          "RV49"
        ],
        "correct": 0,
        "answer": "RV56",
        "explanation": "Stari naziv R4 odgovara novom nazivu RV56.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV036",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV56?",
        "options": [
          "R0",
          "R0x",
          "R1",
          "R4"
        ],
        "correct": 3,
        "answer": "R4",
        "explanation": "Novi naziv RV56 odgovara starom nazivu R4.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV037",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV57 (R4x)?",
        "options": [
          "145.7375 MHz",
          "145.7125 MHz",
          "145.7000 MHz",
          "145.7250 MHz"
        ],
        "correct": 1,
        "answer": "145.7125 MHz",
        "explanation": "RV57 ima izlaz 145.7125 MHz. Na 2 m ulaz je 600 kHz niži: 145.1125 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV038",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV57 (R4x)?",
        "options": [
          "145.1125 MHz",
          "145.1375 MHz",
          "145.1000 MHz",
          "145.1250 MHz"
        ],
        "correct": 0,
        "answer": "145.1125 MHz",
        "explanation": "RV57 ima ulaz 145.1125 MHz. Izlaz je 145.7125 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV039",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R4x?",
        "options": [
          "RV50",
          "RV49",
          "RV57",
          "RV48"
        ],
        "correct": 2,
        "answer": "RV57",
        "explanation": "Stari naziv R4x odgovara novom nazivu RV57.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV040",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV57?",
        "options": [
          "R0x",
          "R4x",
          "R1",
          "R0"
        ],
        "correct": 1,
        "answer": "R4x",
        "explanation": "Novi naziv RV57 odgovara starom nazivu R4x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV041",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV58 (R5)?",
        "options": [
          "145.7125 MHz",
          "145.7375 MHz",
          "145.7250 MHz",
          "145.7500 MHz"
        ],
        "correct": 2,
        "answer": "145.7250 MHz",
        "explanation": "RV58 ima izlaz 145.7250 MHz. Na 2 m ulaz je 600 kHz niži: 145.1250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV042",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV58 (R5)?",
        "options": [
          "145.1500 MHz",
          "145.1250 MHz",
          "145.1375 MHz",
          "145.1125 MHz"
        ],
        "correct": 1,
        "answer": "145.1250 MHz",
        "explanation": "RV58 ima ulaz 145.1250 MHz. Izlaz je 145.7250 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV043",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R5?",
        "options": [
          "RV48",
          "RV58",
          "RV50",
          "RV49"
        ],
        "correct": 1,
        "answer": "RV58",
        "explanation": "Stari naziv R5 odgovara novom nazivu RV58.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV044",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV58?",
        "options": [
          "R0x",
          "R5",
          "R1",
          "R0"
        ],
        "correct": 1,
        "answer": "R5",
        "explanation": "Novi naziv RV58 odgovara starom nazivu R5.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV045",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV59 (R5x)?",
        "options": [
          "145.7625 MHz",
          "145.7250 MHz",
          "145.7375 MHz",
          "145.7500 MHz"
        ],
        "correct": 2,
        "answer": "145.7375 MHz",
        "explanation": "RV59 ima izlaz 145.7375 MHz. Na 2 m ulaz je 600 kHz niži: 145.1375 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV046",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV59 (R5x)?",
        "options": [
          "145.1250 MHz",
          "145.1375 MHz",
          "145.1500 MHz",
          "145.1625 MHz"
        ],
        "correct": 1,
        "answer": "145.1375 MHz",
        "explanation": "RV59 ima ulaz 145.1375 MHz. Izlaz je 145.7375 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV047",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R5x?",
        "options": [
          "RV48",
          "RV49",
          "RV59",
          "RV50"
        ],
        "correct": 2,
        "answer": "RV59",
        "explanation": "Stari naziv R5x odgovara novom nazivu RV59.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV048",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV59?",
        "options": [
          "R5x",
          "R0",
          "R1",
          "R0x"
        ],
        "correct": 0,
        "answer": "R5x",
        "explanation": "Novi naziv RV59 odgovara starom nazivu R5x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV049",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV60 (R6)?",
        "options": [
          "145.7625 MHz",
          "145.7750 MHz",
          "145.7500 MHz",
          "145.7375 MHz"
        ],
        "correct": 2,
        "answer": "145.7500 MHz",
        "explanation": "RV60 ima izlaz 145.7500 MHz. Na 2 m ulaz je 600 kHz niži: 145.1500 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV050",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV60 (R6)?",
        "options": [
          "145.1625 MHz",
          "145.1750 MHz",
          "145.1500 MHz",
          "145.1375 MHz"
        ],
        "correct": 2,
        "answer": "145.1500 MHz",
        "explanation": "RV60 ima ulaz 145.1500 MHz. Izlaz je 145.7500 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV051",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R6?",
        "options": [
          "RV60",
          "RV49",
          "RV48",
          "RV50"
        ],
        "correct": 0,
        "answer": "RV60",
        "explanation": "Stari naziv R6 odgovara novom nazivu RV60.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV052",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV60?",
        "options": [
          "R1",
          "R0",
          "R6",
          "R0x"
        ],
        "correct": 2,
        "answer": "R6",
        "explanation": "Novi naziv RV60 odgovara starom nazivu R6.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV053",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV61 (R6x)?",
        "options": [
          "145.7625 MHz",
          "145.7500 MHz",
          "145.7875 MHz",
          "145.7750 MHz"
        ],
        "correct": 0,
        "answer": "145.7625 MHz",
        "explanation": "RV61 ima izlaz 145.7625 MHz. Na 2 m ulaz je 600 kHz niži: 145.1625 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV054",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV61 (R6x)?",
        "options": [
          "145.1625 MHz",
          "145.1750 MHz",
          "145.1500 MHz",
          "145.1875 MHz"
        ],
        "correct": 0,
        "answer": "145.1625 MHz",
        "explanation": "RV61 ima ulaz 145.1625 MHz. Izlaz je 145.7625 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV055",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R6x?",
        "options": [
          "RV48",
          "RV61",
          "RV50",
          "RV49"
        ],
        "correct": 1,
        "answer": "RV61",
        "explanation": "Stari naziv R6x odgovara novom nazivu RV61.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV056",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV61?",
        "options": [
          "R1",
          "R0",
          "R6x",
          "R0x"
        ],
        "correct": 2,
        "answer": "R6x",
        "explanation": "Novi naziv RV61 odgovara starom nazivu R6x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV057",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV62 (R7)?",
        "options": [
          "145.7625 MHz",
          "145.7875 MHz",
          "145.7750 MHz",
          "145.8000 MHz"
        ],
        "correct": 2,
        "answer": "145.7750 MHz",
        "explanation": "RV62 ima izlaz 145.7750 MHz. Na 2 m ulaz je 600 kHz niži: 145.1750 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV058",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV62 (R7)?",
        "options": [
          "145.1875 MHz",
          "145.2000 MHz",
          "145.1625 MHz",
          "145.1750 MHz"
        ],
        "correct": 3,
        "answer": "145.1750 MHz",
        "explanation": "RV62 ima ulaz 145.1750 MHz. Izlaz je 145.7750 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV059",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R7?",
        "options": [
          "RV62",
          "RV50",
          "RV48",
          "RV49"
        ],
        "correct": 0,
        "answer": "RV62",
        "explanation": "Stari naziv R7 odgovara novom nazivu RV62.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV060",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV62?",
        "options": [
          "R1",
          "R0",
          "R0x",
          "R7"
        ],
        "correct": 3,
        "answer": "R7",
        "explanation": "Novi naziv RV62 odgovara starom nazivu R7.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV061",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je izlazna frekvencija repetitora RV63 (R7x)?",
        "options": [
          "145.8125 MHz",
          "145.7875 MHz",
          "145.7750 MHz",
          "145.8000 MHz"
        ],
        "correct": 1,
        "answer": "145.7875 MHz",
        "explanation": "RV63 ima izlaz 145.7875 MHz. Na 2 m ulaz je 600 kHz niži: 145.1875 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV062",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koja je ulazna frekvencija repetitora RV63 (R7x)?",
        "options": [
          "145.2000 MHz",
          "145.1750 MHz",
          "145.2125 MHz",
          "145.1875 MHz"
        ],
        "correct": 3,
        "answer": "145.1875 MHz",
        "explanation": "RV63 ima ulaz 145.1875 MHz. Izlaz je 145.7875 MHz, pomak je -600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV063",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal R7x?",
        "options": [
          "RV48",
          "RV63",
          "RV50",
          "RV49"
        ],
        "correct": 1,
        "answer": "RV63",
        "explanation": "Stari naziv R7x odgovara novom nazivu RV63.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RV064",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RV 2m repetitori",
        "group": "RV 2m repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RV63?",
        "options": [
          "R1",
          "R7x",
          "R0x",
          "R0"
        ],
        "correct": 1,
        "answer": "R7x",
        "explanation": "Novi naziv RV63 odgovara starom nazivu R7x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU065",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU368 (RU0)?",
        "options": [
          "434.6125 MHz",
          "434.6250 MHz",
          "434.5875 MHz",
          "434.6000 MHz"
        ],
        "correct": 3,
        "answer": "434.6000 MHz",
        "explanation": "RU368 ima izlaz 434.6000 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.0000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU066",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU368 (RU0)?",
        "options": [
          "433.0125 MHz",
          "432.9875 MHz",
          "433.0000 MHz",
          "433.0250 MHz"
        ],
        "correct": 2,
        "answer": "433.0000 MHz",
        "explanation": "RU368 ima ulaz 433.0000 MHz. Izlaz je 434.6000 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU067",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU0?",
        "options": [
          "RU368",
          "RU399",
          "RU398",
          "RU397"
        ],
        "correct": 0,
        "answer": "RU368",
        "explanation": "Stari naziv RU0 odgovara novom nazivu RU368.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU068",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU368?",
        "options": [
          "RU15",
          "RU0",
          "RU14x",
          "RU15x"
        ],
        "correct": 1,
        "answer": "RU0",
        "explanation": "Novi naziv RU368 odgovara starom nazivu RU0.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU069",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU369 (RU0x)?",
        "options": [
          "434.6000 MHz",
          "434.6375 MHz",
          "434.6250 MHz",
          "434.6125 MHz"
        ],
        "correct": 3,
        "answer": "434.6125 MHz",
        "explanation": "RU369 ima izlaz 434.6125 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.0125 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU070",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU369 (RU0x)?",
        "options": [
          "433.0250 MHz",
          "433.0375 MHz",
          "433.0125 MHz",
          "433.0000 MHz"
        ],
        "correct": 2,
        "answer": "433.0125 MHz",
        "explanation": "RU369 ima ulaz 433.0125 MHz. Izlaz je 434.6125 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU071",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU0x?",
        "options": [
          "RU398",
          "RU369",
          "RU399",
          "RU397"
        ],
        "correct": 1,
        "answer": "RU369",
        "explanation": "Stari naziv RU0x odgovara novom nazivu RU369.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU072",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU369?",
        "options": [
          "RU14x",
          "RU0x",
          "RU15",
          "RU15x"
        ],
        "correct": 1,
        "answer": "RU0x",
        "explanation": "Novi naziv RU369 odgovara starom nazivu RU0x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU073",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU370 (RU1)?",
        "options": [
          "434.6375 MHz",
          "434.6500 MHz",
          "434.6125 MHz",
          "434.6250 MHz"
        ],
        "correct": 3,
        "answer": "434.6250 MHz",
        "explanation": "RU370 ima izlaz 434.6250 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.0250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU074",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU370 (RU1)?",
        "options": [
          "433.0375 MHz",
          "433.0125 MHz",
          "433.0250 MHz",
          "433.0500 MHz"
        ],
        "correct": 2,
        "answer": "433.0250 MHz",
        "explanation": "RU370 ima ulaz 433.0250 MHz. Izlaz je 434.6250 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU075",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU1?",
        "options": [
          "RU370",
          "RU397",
          "RU399",
          "RU398"
        ],
        "correct": 0,
        "answer": "RU370",
        "explanation": "Stari naziv RU1 odgovara novom nazivu RU370.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU076",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU370?",
        "options": [
          "RU15",
          "RU14x",
          "RU15x",
          "RU1"
        ],
        "correct": 3,
        "answer": "RU1",
        "explanation": "Novi naziv RU370 odgovara starom nazivu RU1.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU077",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU371 (RU1x)?",
        "options": [
          "434.6250 MHz",
          "434.6625 MHz",
          "434.6375 MHz",
          "434.6500 MHz"
        ],
        "correct": 2,
        "answer": "434.6375 MHz",
        "explanation": "RU371 ima izlaz 434.6375 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.0375 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU078",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU371 (RU1x)?",
        "options": [
          "433.0375 MHz",
          "433.0625 MHz",
          "433.0500 MHz",
          "433.0250 MHz"
        ],
        "correct": 0,
        "answer": "433.0375 MHz",
        "explanation": "RU371 ima ulaz 433.0375 MHz. Izlaz je 434.6375 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU079",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU1x?",
        "options": [
          "RU371",
          "RU369",
          "RU370",
          "RU368"
        ],
        "correct": 0,
        "answer": "RU371",
        "explanation": "Stari naziv RU1x odgovara novom nazivu RU371.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU080",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU371?",
        "options": [
          "RU1",
          "RU0",
          "RU1x",
          "RU0x"
        ],
        "correct": 2,
        "answer": "RU1x",
        "explanation": "Novi naziv RU371 odgovara starom nazivu RU1x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU081",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU372 (RU2)?",
        "options": [
          "434.6375 MHz",
          "434.6500 MHz",
          "434.6625 MHz",
          "434.6750 MHz"
        ],
        "correct": 1,
        "answer": "434.6500 MHz",
        "explanation": "RU372 ima izlaz 434.6500 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.0500 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU082",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU372 (RU2)?",
        "options": [
          "433.0625 MHz",
          "433.0375 MHz",
          "433.0750 MHz",
          "433.0500 MHz"
        ],
        "correct": 3,
        "answer": "433.0500 MHz",
        "explanation": "RU372 ima ulaz 433.0500 MHz. Izlaz je 434.6500 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU083",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU2?",
        "options": [
          "RU370",
          "RU368",
          "RU372",
          "RU369"
        ],
        "correct": 2,
        "answer": "RU372",
        "explanation": "Stari naziv RU2 odgovara novom nazivu RU372.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU084",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU372?",
        "options": [
          "RU0",
          "RU0x",
          "RU2",
          "RU1"
        ],
        "correct": 2,
        "answer": "RU2",
        "explanation": "Novi naziv RU372 odgovara starom nazivu RU2.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU085",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU373 (RU2x)?",
        "options": [
          "434.6875 MHz",
          "434.6500 MHz",
          "434.6625 MHz",
          "434.6750 MHz"
        ],
        "correct": 2,
        "answer": "434.6625 MHz",
        "explanation": "RU373 ima izlaz 434.6625 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.0625 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU086",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU373 (RU2x)?",
        "options": [
          "433.0875 MHz",
          "433.0625 MHz",
          "433.0750 MHz",
          "433.0500 MHz"
        ],
        "correct": 1,
        "answer": "433.0625 MHz",
        "explanation": "RU373 ima ulaz 433.0625 MHz. Izlaz je 434.6625 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU087",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU2x?",
        "options": [
          "RU370",
          "RU373",
          "RU369",
          "RU368"
        ],
        "correct": 1,
        "answer": "RU373",
        "explanation": "Stari naziv RU2x odgovara novom nazivu RU373.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU088",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU373?",
        "options": [
          "RU1",
          "RU0x",
          "RU0",
          "RU2x"
        ],
        "correct": 3,
        "answer": "RU2x",
        "explanation": "Novi naziv RU373 odgovara starom nazivu RU2x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU089",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU374 (RU3)?",
        "options": [
          "434.7000 MHz",
          "434.6750 MHz",
          "434.6875 MHz",
          "434.6625 MHz"
        ],
        "correct": 1,
        "answer": "434.6750 MHz",
        "explanation": "RU374 ima izlaz 434.6750 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.0750 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU090",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU374 (RU3)?",
        "options": [
          "433.0875 MHz",
          "433.0750 MHz",
          "433.1000 MHz",
          "433.0625 MHz"
        ],
        "correct": 1,
        "answer": "433.0750 MHz",
        "explanation": "RU374 ima ulaz 433.0750 MHz. Izlaz je 434.6750 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU091",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU3?",
        "options": [
          "RU369",
          "RU368",
          "RU370",
          "RU374"
        ],
        "correct": 3,
        "answer": "RU374",
        "explanation": "Stari naziv RU3 odgovara novom nazivu RU374.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU092",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU374?",
        "options": [
          "RU0",
          "RU3",
          "RU1",
          "RU0x"
        ],
        "correct": 1,
        "answer": "RU3",
        "explanation": "Novi naziv RU374 odgovara starom nazivu RU3.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU093",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU375 (RU3x)?",
        "options": [
          "434.6750 MHz",
          "434.7000 MHz",
          "434.6875 MHz",
          "434.7125 MHz"
        ],
        "correct": 2,
        "answer": "434.6875 MHz",
        "explanation": "RU375 ima izlaz 434.6875 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.0875 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU094",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU375 (RU3x)?",
        "options": [
          "433.0875 MHz",
          "433.1125 MHz",
          "433.1000 MHz",
          "433.0750 MHz"
        ],
        "correct": 0,
        "answer": "433.0875 MHz",
        "explanation": "RU375 ima ulaz 433.0875 MHz. Izlaz je 434.6875 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU095",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU3x?",
        "options": [
          "RU370",
          "RU375",
          "RU368",
          "RU369"
        ],
        "correct": 1,
        "answer": "RU375",
        "explanation": "Stari naziv RU3x odgovara novom nazivu RU375.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU096",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU375?",
        "options": [
          "RU3x",
          "RU1",
          "RU0",
          "RU0x"
        ],
        "correct": 0,
        "answer": "RU3x",
        "explanation": "Novi naziv RU375 odgovara starom nazivu RU3x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU097",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU376 (RU4)?",
        "options": [
          "434.6875 MHz",
          "434.7000 MHz",
          "434.7250 MHz",
          "434.7125 MHz"
        ],
        "correct": 1,
        "answer": "434.7000 MHz",
        "explanation": "RU376 ima izlaz 434.7000 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.1000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU098",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU376 (RU4)?",
        "options": [
          "433.0875 MHz",
          "433.1125 MHz",
          "433.1250 MHz",
          "433.1000 MHz"
        ],
        "correct": 3,
        "answer": "433.1000 MHz",
        "explanation": "RU376 ima ulaz 433.1000 MHz. Izlaz je 434.7000 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU099",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU4?",
        "options": [
          "RU368",
          "RU370",
          "RU376",
          "RU369"
        ],
        "correct": 2,
        "answer": "RU376",
        "explanation": "Stari naziv RU4 odgovara novom nazivu RU376.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU100",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU376?",
        "options": [
          "RU4",
          "RU0x",
          "RU0",
          "RU1"
        ],
        "correct": 0,
        "answer": "RU4",
        "explanation": "Novi naziv RU376 odgovara starom nazivu RU4.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU101",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU377 (RU4x)?",
        "options": [
          "434.7375 MHz",
          "434.7250 MHz",
          "434.7125 MHz",
          "434.7000 MHz"
        ],
        "correct": 2,
        "answer": "434.7125 MHz",
        "explanation": "RU377 ima izlaz 434.7125 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.1125 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU102",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU377 (RU4x)?",
        "options": [
          "433.1125 MHz",
          "433.1250 MHz",
          "433.1000 MHz",
          "433.1375 MHz"
        ],
        "correct": 0,
        "answer": "433.1125 MHz",
        "explanation": "RU377 ima ulaz 433.1125 MHz. Izlaz je 434.7125 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU103",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU4x?",
        "options": [
          "RU368",
          "RU369",
          "RU377",
          "RU370"
        ],
        "correct": 2,
        "answer": "RU377",
        "explanation": "Stari naziv RU4x odgovara novom nazivu RU377.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU104",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU377?",
        "options": [
          "RU4x",
          "RU1",
          "RU0",
          "RU0x"
        ],
        "correct": 0,
        "answer": "RU4x",
        "explanation": "Novi naziv RU377 odgovara starom nazivu RU4x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU105",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU378 (RU5)?",
        "options": [
          "434.7125 MHz",
          "434.7375 MHz",
          "434.7500 MHz",
          "434.7250 MHz"
        ],
        "correct": 3,
        "answer": "434.7250 MHz",
        "explanation": "RU378 ima izlaz 434.7250 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.1250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU106",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU378 (RU5)?",
        "options": [
          "433.1125 MHz",
          "433.1375 MHz",
          "433.1500 MHz",
          "433.1250 MHz"
        ],
        "correct": 3,
        "answer": "433.1250 MHz",
        "explanation": "RU378 ima ulaz 433.1250 MHz. Izlaz je 434.7250 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU107",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU5?",
        "options": [
          "RU370",
          "RU368",
          "RU369",
          "RU378"
        ],
        "correct": 3,
        "answer": "RU378",
        "explanation": "Stari naziv RU5 odgovara novom nazivu RU378.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU108",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU378?",
        "options": [
          "RU5",
          "RU0x",
          "RU0",
          "RU1"
        ],
        "correct": 0,
        "answer": "RU5",
        "explanation": "Novi naziv RU378 odgovara starom nazivu RU5.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU109",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU379 (RU5x)?",
        "options": [
          "434.7625 MHz",
          "434.7375 MHz",
          "434.7500 MHz",
          "434.7250 MHz"
        ],
        "correct": 1,
        "answer": "434.7375 MHz",
        "explanation": "RU379 ima izlaz 434.7375 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.1375 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU110",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU379 (RU5x)?",
        "options": [
          "433.1500 MHz",
          "433.1250 MHz",
          "433.1625 MHz",
          "433.1375 MHz"
        ],
        "correct": 3,
        "answer": "433.1375 MHz",
        "explanation": "RU379 ima ulaz 433.1375 MHz. Izlaz je 434.7375 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU111",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU5x?",
        "options": [
          "RU379",
          "RU368",
          "RU370",
          "RU369"
        ],
        "correct": 0,
        "answer": "RU379",
        "explanation": "Stari naziv RU5x odgovara novom nazivu RU379.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU112",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU379?",
        "options": [
          "RU5x",
          "RU1",
          "RU0",
          "RU0x"
        ],
        "correct": 0,
        "answer": "RU5x",
        "explanation": "Novi naziv RU379 odgovara starom nazivu RU5x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU113",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU380 (RU6)?",
        "options": [
          "434.7500 MHz",
          "434.7750 MHz",
          "434.7375 MHz",
          "434.7625 MHz"
        ],
        "correct": 0,
        "answer": "434.7500 MHz",
        "explanation": "RU380 ima izlaz 434.7500 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.1500 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU114",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU380 (RU6)?",
        "options": [
          "433.1375 MHz",
          "433.1625 MHz",
          "433.1750 MHz",
          "433.1500 MHz"
        ],
        "correct": 3,
        "answer": "433.1500 MHz",
        "explanation": "RU380 ima ulaz 433.1500 MHz. Izlaz je 434.7500 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU115",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU6?",
        "options": [
          "RU368",
          "RU370",
          "RU369",
          "RU380"
        ],
        "correct": 3,
        "answer": "RU380",
        "explanation": "Stari naziv RU6 odgovara novom nazivu RU380.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU116",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU380?",
        "options": [
          "RU1",
          "RU0",
          "RU0x",
          "RU6"
        ],
        "correct": 3,
        "answer": "RU6",
        "explanation": "Novi naziv RU380 odgovara starom nazivu RU6.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU117",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU381 (RU6x)?",
        "options": [
          "434.7500 MHz",
          "434.7875 MHz",
          "434.7625 MHz",
          "434.7750 MHz"
        ],
        "correct": 2,
        "answer": "434.7625 MHz",
        "explanation": "RU381 ima izlaz 434.7625 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.1625 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU118",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU381 (RU6x)?",
        "options": [
          "433.1750 MHz",
          "433.1500 MHz",
          "433.1875 MHz",
          "433.1625 MHz"
        ],
        "correct": 3,
        "answer": "433.1625 MHz",
        "explanation": "RU381 ima ulaz 433.1625 MHz. Izlaz je 434.7625 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU119",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU6x?",
        "options": [
          "RU381",
          "RU368",
          "RU370",
          "RU369"
        ],
        "correct": 0,
        "answer": "RU381",
        "explanation": "Stari naziv RU6x odgovara novom nazivu RU381.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU120",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU381?",
        "options": [
          "RU0x",
          "RU1",
          "RU0",
          "RU6x"
        ],
        "correct": 3,
        "answer": "RU6x",
        "explanation": "Novi naziv RU381 odgovara starom nazivu RU6x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU121",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU382 (RU7)?",
        "options": [
          "434.7750 MHz",
          "434.7875 MHz",
          "434.7625 MHz",
          "434.8000 MHz"
        ],
        "correct": 0,
        "answer": "434.7750 MHz",
        "explanation": "RU382 ima izlaz 434.7750 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.1750 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU122",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU382 (RU7)?",
        "options": [
          "433.2000 MHz",
          "433.1875 MHz",
          "433.1750 MHz",
          "433.1625 MHz"
        ],
        "correct": 2,
        "answer": "433.1750 MHz",
        "explanation": "RU382 ima ulaz 433.1750 MHz. Izlaz je 434.7750 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU123",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU7?",
        "options": [
          "RU369",
          "RU382",
          "RU370",
          "RU368"
        ],
        "correct": 1,
        "answer": "RU382",
        "explanation": "Stari naziv RU7 odgovara novom nazivu RU382.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU124",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU382?",
        "options": [
          "RU1",
          "RU7",
          "RU0x",
          "RU0"
        ],
        "correct": 1,
        "answer": "RU7",
        "explanation": "Novi naziv RU382 odgovara starom nazivu RU7.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU125",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU383 (RU7x)?",
        "options": [
          "434.7875 MHz",
          "434.8000 MHz",
          "434.8125 MHz",
          "434.7750 MHz"
        ],
        "correct": 0,
        "answer": "434.7875 MHz",
        "explanation": "RU383 ima izlaz 434.7875 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.1875 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU126",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU383 (RU7x)?",
        "options": [
          "433.1750 MHz",
          "433.2125 MHz",
          "433.2000 MHz",
          "433.1875 MHz"
        ],
        "correct": 3,
        "answer": "433.1875 MHz",
        "explanation": "RU383 ima ulaz 433.1875 MHz. Izlaz je 434.7875 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU127",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU7x?",
        "options": [
          "RU368",
          "RU383",
          "RU369",
          "RU370"
        ],
        "correct": 1,
        "answer": "RU383",
        "explanation": "Stari naziv RU7x odgovara novom nazivu RU383.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU128",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU383?",
        "options": [
          "RU7x",
          "RU1",
          "RU0",
          "RU0x"
        ],
        "correct": 0,
        "answer": "RU7x",
        "explanation": "Novi naziv RU383 odgovara starom nazivu RU7x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU129",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU384 (RU8)?",
        "options": [
          "434.8125 MHz",
          "434.8250 MHz",
          "434.7875 MHz",
          "434.8000 MHz"
        ],
        "correct": 3,
        "answer": "434.8000 MHz",
        "explanation": "RU384 ima izlaz 434.8000 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.2000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU130",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU384 (RU8)?",
        "options": [
          "433.2250 MHz",
          "433.2000 MHz",
          "433.1875 MHz",
          "433.2125 MHz"
        ],
        "correct": 1,
        "answer": "433.2000 MHz",
        "explanation": "RU384 ima ulaz 433.2000 MHz. Izlaz je 434.8000 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU131",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU8?",
        "options": [
          "RU369",
          "RU368",
          "RU384",
          "RU370"
        ],
        "correct": 2,
        "answer": "RU384",
        "explanation": "Stari naziv RU8 odgovara novom nazivu RU384.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU132",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU384?",
        "options": [
          "RU0x",
          "RU1",
          "RU8",
          "RU0"
        ],
        "correct": 2,
        "answer": "RU8",
        "explanation": "Novi naziv RU384 odgovara starom nazivu RU8.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU133",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU385 (RU8x)?",
        "options": [
          "434.8375 MHz",
          "434.8250 MHz",
          "434.8000 MHz",
          "434.8125 MHz"
        ],
        "correct": 3,
        "answer": "434.8125 MHz",
        "explanation": "RU385 ima izlaz 434.8125 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.2125 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU134",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU385 (RU8x)?",
        "options": [
          "433.2125 MHz",
          "433.2375 MHz",
          "433.2000 MHz",
          "433.2250 MHz"
        ],
        "correct": 0,
        "answer": "433.2125 MHz",
        "explanation": "RU385 ima ulaz 433.2125 MHz. Izlaz je 434.8125 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU135",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU8x?",
        "options": [
          "RU385",
          "RU370",
          "RU369",
          "RU368"
        ],
        "correct": 0,
        "answer": "RU385",
        "explanation": "Stari naziv RU8x odgovara novom nazivu RU385.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU136",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU385?",
        "options": [
          "RU1",
          "RU8x",
          "RU0x",
          "RU0"
        ],
        "correct": 1,
        "answer": "RU8x",
        "explanation": "Novi naziv RU385 odgovara starom nazivu RU8x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU137",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU386 (RU9)?",
        "options": [
          "434.8125 MHz",
          "434.8375 MHz",
          "434.8250 MHz",
          "434.8500 MHz"
        ],
        "correct": 2,
        "answer": "434.8250 MHz",
        "explanation": "RU386 ima izlaz 434.8250 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.2250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU138",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU386 (RU9)?",
        "options": [
          "433.2500 MHz",
          "433.2250 MHz",
          "433.2375 MHz",
          "433.2125 MHz"
        ],
        "correct": 1,
        "answer": "433.2250 MHz",
        "explanation": "RU386 ima ulaz 433.2250 MHz. Izlaz je 434.8250 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU139",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU9?",
        "options": [
          "RU386",
          "RU369",
          "RU368",
          "RU370"
        ],
        "correct": 0,
        "answer": "RU386",
        "explanation": "Stari naziv RU9 odgovara novom nazivu RU386.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU140",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU386?",
        "options": [
          "RU1",
          "RU0x",
          "RU0",
          "RU9"
        ],
        "correct": 3,
        "answer": "RU9",
        "explanation": "Novi naziv RU386 odgovara starom nazivu RU9.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU141",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU387 (RU9x)?",
        "options": [
          "434.8625 MHz",
          "434.8500 MHz",
          "434.8250 MHz",
          "434.8375 MHz"
        ],
        "correct": 3,
        "answer": "434.8375 MHz",
        "explanation": "RU387 ima izlaz 434.8375 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.2375 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU142",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU387 (RU9x)?",
        "options": [
          "433.2375 MHz",
          "433.2500 MHz",
          "433.2250 MHz",
          "433.2625 MHz"
        ],
        "correct": 0,
        "answer": "433.2375 MHz",
        "explanation": "RU387 ima ulaz 433.2375 MHz. Izlaz je 434.8375 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU143",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU9x?",
        "options": [
          "RU387",
          "RU369",
          "RU368",
          "RU370"
        ],
        "correct": 0,
        "answer": "RU387",
        "explanation": "Stari naziv RU9x odgovara novom nazivu RU387.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU144",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU387?",
        "options": [
          "RU1",
          "RU9x",
          "RU0x",
          "RU0"
        ],
        "correct": 1,
        "answer": "RU9x",
        "explanation": "Novi naziv RU387 odgovara starom nazivu RU9x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU145",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU388 (RU10)?",
        "options": [
          "434.8375 MHz",
          "434.8500 MHz",
          "434.8625 MHz",
          "434.8750 MHz"
        ],
        "correct": 1,
        "answer": "434.8500 MHz",
        "explanation": "RU388 ima izlaz 434.8500 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.2500 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU146",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU388 (RU10)?",
        "options": [
          "433.2500 MHz",
          "433.2750 MHz",
          "433.2625 MHz",
          "433.2375 MHz"
        ],
        "correct": 0,
        "answer": "433.2500 MHz",
        "explanation": "RU388 ima ulaz 433.2500 MHz. Izlaz je 434.8500 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU147",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU10?",
        "options": [
          "RU388",
          "RU370",
          "RU368",
          "RU369"
        ],
        "correct": 0,
        "answer": "RU388",
        "explanation": "Stari naziv RU10 odgovara novom nazivu RU388.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU148",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU388?",
        "options": [
          "RU10",
          "RU0",
          "RU1",
          "RU0x"
        ],
        "correct": 0,
        "answer": "RU10",
        "explanation": "Novi naziv RU388 odgovara starom nazivu RU10.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU149",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU389 (RU10x)?",
        "options": [
          "434.8625 MHz",
          "434.8875 MHz",
          "434.8750 MHz",
          "434.8500 MHz"
        ],
        "correct": 0,
        "answer": "434.8625 MHz",
        "explanation": "RU389 ima izlaz 434.8625 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.2625 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU150",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU389 (RU10x)?",
        "options": [
          "433.2500 MHz",
          "433.2875 MHz",
          "433.2750 MHz",
          "433.2625 MHz"
        ],
        "correct": 3,
        "answer": "433.2625 MHz",
        "explanation": "RU389 ima ulaz 433.2625 MHz. Izlaz je 434.8625 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU151",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU10x?",
        "options": [
          "RU368",
          "RU370",
          "RU389",
          "RU369"
        ],
        "correct": 2,
        "answer": "RU389",
        "explanation": "Stari naziv RU10x odgovara novom nazivu RU389.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU152",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU389?",
        "options": [
          "RU10x",
          "RU1",
          "RU0x",
          "RU0"
        ],
        "correct": 0,
        "answer": "RU10x",
        "explanation": "Novi naziv RU389 odgovara starom nazivu RU10x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU153",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU390 (RU11)?",
        "options": [
          "434.9000 MHz",
          "434.8875 MHz",
          "434.8625 MHz",
          "434.8750 MHz"
        ],
        "correct": 3,
        "answer": "434.8750 MHz",
        "explanation": "RU390 ima izlaz 434.8750 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.2750 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU154",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU390 (RU11)?",
        "options": [
          "433.2875 MHz",
          "433.3000 MHz",
          "433.2750 MHz",
          "433.2625 MHz"
        ],
        "correct": 2,
        "answer": "433.2750 MHz",
        "explanation": "RU390 ima ulaz 433.2750 MHz. Izlaz je 434.8750 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU155",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU11?",
        "options": [
          "RU390",
          "RU369",
          "RU370",
          "RU368"
        ],
        "correct": 0,
        "answer": "RU390",
        "explanation": "Stari naziv RU11 odgovara novom nazivu RU390.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU156",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU390?",
        "options": [
          "RU0",
          "RU1",
          "RU0x",
          "RU11"
        ],
        "correct": 3,
        "answer": "RU11",
        "explanation": "Novi naziv RU390 odgovara starom nazivu RU11.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU157",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU391 (RU11x)?",
        "options": [
          "434.8750 MHz",
          "434.8875 MHz",
          "434.9125 MHz",
          "434.9000 MHz"
        ],
        "correct": 1,
        "answer": "434.8875 MHz",
        "explanation": "RU391 ima izlaz 434.8875 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.2875 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU158",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU391 (RU11x)?",
        "options": [
          "433.2875 MHz",
          "433.2750 MHz",
          "433.3125 MHz",
          "433.3000 MHz"
        ],
        "correct": 0,
        "answer": "433.2875 MHz",
        "explanation": "RU391 ima ulaz 433.2875 MHz. Izlaz je 434.8875 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU159",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU11x?",
        "options": [
          "RU369",
          "RU368",
          "RU391",
          "RU370"
        ],
        "correct": 2,
        "answer": "RU391",
        "explanation": "Stari naziv RU11x odgovara novom nazivu RU391.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU160",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU391?",
        "options": [
          "RU0x",
          "RU0",
          "RU1",
          "RU11x"
        ],
        "correct": 3,
        "answer": "RU11x",
        "explanation": "Novi naziv RU391 odgovara starom nazivu RU11x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU161",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU392 (RU12)?",
        "options": [
          "434.9250 MHz",
          "434.9000 MHz",
          "434.8875 MHz",
          "434.9125 MHz"
        ],
        "correct": 1,
        "answer": "434.9000 MHz",
        "explanation": "RU392 ima izlaz 434.9000 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.3000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU162",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU392 (RU12)?",
        "options": [
          "433.3125 MHz",
          "433.2875 MHz",
          "433.3250 MHz",
          "433.3000 MHz"
        ],
        "correct": 3,
        "answer": "433.3000 MHz",
        "explanation": "RU392 ima ulaz 433.3000 MHz. Izlaz je 434.9000 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU163",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU12?",
        "options": [
          "RU368",
          "RU369",
          "RU370",
          "RU392"
        ],
        "correct": 3,
        "answer": "RU392",
        "explanation": "Stari naziv RU12 odgovara novom nazivu RU392.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU164",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU392?",
        "options": [
          "RU0x",
          "RU12",
          "RU0",
          "RU1"
        ],
        "correct": 1,
        "answer": "RU12",
        "explanation": "Novi naziv RU392 odgovara starom nazivu RU12.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU165",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU393 (RU12x)?",
        "options": [
          "434.9375 MHz",
          "434.9125 MHz",
          "434.9250 MHz",
          "434.9000 MHz"
        ],
        "correct": 1,
        "answer": "434.9125 MHz",
        "explanation": "RU393 ima izlaz 434.9125 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.3125 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU166",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU393 (RU12x)?",
        "options": [
          "433.3375 MHz",
          "433.3000 MHz",
          "433.3250 MHz",
          "433.3125 MHz"
        ],
        "correct": 3,
        "answer": "433.3125 MHz",
        "explanation": "RU393 ima ulaz 433.3125 MHz. Izlaz je 434.9125 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU167",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU12x?",
        "options": [
          "RU370",
          "RU393",
          "RU369",
          "RU368"
        ],
        "correct": 1,
        "answer": "RU393",
        "explanation": "Stari naziv RU12x odgovara novom nazivu RU393.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU168",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU393?",
        "options": [
          "RU1",
          "RU0",
          "RU0x",
          "RU12x"
        ],
        "correct": 3,
        "answer": "RU12x",
        "explanation": "Novi naziv RU393 odgovara starom nazivu RU12x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU169",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU394 (RU13)?",
        "options": [
          "434.9500 MHz",
          "434.9125 MHz",
          "434.9250 MHz",
          "434.9375 MHz"
        ],
        "correct": 2,
        "answer": "434.9250 MHz",
        "explanation": "RU394 ima izlaz 434.9250 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.3250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU170",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU394 (RU13)?",
        "options": [
          "433.3500 MHz",
          "433.3125 MHz",
          "433.3250 MHz",
          "433.3375 MHz"
        ],
        "correct": 2,
        "answer": "433.3250 MHz",
        "explanation": "RU394 ima ulaz 433.3250 MHz. Izlaz je 434.9250 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU171",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU13?",
        "options": [
          "RU368",
          "RU369",
          "RU370",
          "RU394"
        ],
        "correct": 3,
        "answer": "RU394",
        "explanation": "Stari naziv RU13 odgovara novom nazivu RU394.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU172",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU394?",
        "options": [
          "RU0",
          "RU13",
          "RU0x",
          "RU1"
        ],
        "correct": 1,
        "answer": "RU13",
        "explanation": "Novi naziv RU394 odgovara starom nazivu RU13.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU173",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU395 (RU13x)?",
        "options": [
          "434.9625 MHz",
          "434.9250 MHz",
          "434.9500 MHz",
          "434.9375 MHz"
        ],
        "correct": 3,
        "answer": "434.9375 MHz",
        "explanation": "RU395 ima izlaz 434.9375 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.3375 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU174",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU395 (RU13x)?",
        "options": [
          "433.3250 MHz",
          "433.3375 MHz",
          "433.3625 MHz",
          "433.3500 MHz"
        ],
        "correct": 1,
        "answer": "433.3375 MHz",
        "explanation": "RU395 ima ulaz 433.3375 MHz. Izlaz je 434.9375 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU175",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU13x?",
        "options": [
          "RU395",
          "RU368",
          "RU370",
          "RU369"
        ],
        "correct": 0,
        "answer": "RU395",
        "explanation": "Stari naziv RU13x odgovara novom nazivu RU395.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU176",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU395?",
        "options": [
          "RU1",
          "RU0x",
          "RU13x",
          "RU0"
        ],
        "correct": 2,
        "answer": "RU13x",
        "explanation": "Novi naziv RU395 odgovara starom nazivu RU13x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU177",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU396 (RU14)?",
        "options": [
          "434.9375 MHz",
          "434.9625 MHz",
          "434.9750 MHz",
          "434.9500 MHz"
        ],
        "correct": 3,
        "answer": "434.9500 MHz",
        "explanation": "RU396 ima izlaz 434.9500 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.3500 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU178",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU396 (RU14)?",
        "options": [
          "433.3375 MHz",
          "433.3750 MHz",
          "433.3500 MHz",
          "433.3625 MHz"
        ],
        "correct": 2,
        "answer": "433.3500 MHz",
        "explanation": "RU396 ima ulaz 433.3500 MHz. Izlaz je 434.9500 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU179",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU14?",
        "options": [
          "RU370",
          "RU368",
          "RU369",
          "RU396"
        ],
        "correct": 3,
        "answer": "RU396",
        "explanation": "Stari naziv RU14 odgovara novom nazivu RU396.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU180",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU396?",
        "options": [
          "RU0",
          "RU0x",
          "RU14",
          "RU1"
        ],
        "correct": 2,
        "answer": "RU14",
        "explanation": "Novi naziv RU396 odgovara starom nazivu RU14.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU181",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU397 (RU14x)?",
        "options": [
          "434.9750 MHz",
          "434.9625 MHz",
          "434.9875 MHz",
          "434.9500 MHz"
        ],
        "correct": 1,
        "answer": "434.9625 MHz",
        "explanation": "RU397 ima izlaz 434.9625 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.3625 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU182",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU397 (RU14x)?",
        "options": [
          "433.3625 MHz",
          "433.3875 MHz",
          "433.3750 MHz",
          "433.3500 MHz"
        ],
        "correct": 0,
        "answer": "433.3625 MHz",
        "explanation": "RU397 ima ulaz 433.3625 MHz. Izlaz je 434.9625 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU183",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU14x?",
        "options": [
          "RU368",
          "RU369",
          "RU397",
          "RU370"
        ],
        "correct": 2,
        "answer": "RU397",
        "explanation": "Stari naziv RU14x odgovara novom nazivu RU397.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU184",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU397?",
        "options": [
          "RU1",
          "RU0",
          "RU14x",
          "RU0x"
        ],
        "correct": 2,
        "answer": "RU14x",
        "explanation": "Novi naziv RU397 odgovara starom nazivu RU14x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU185",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU398 (RU15)?",
        "options": [
          "434.9750 MHz",
          "434.9625 MHz",
          "434.9875 MHz",
          "435.0000 MHz"
        ],
        "correct": 0,
        "answer": "434.9750 MHz",
        "explanation": "RU398 ima izlaz 434.9750 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.3750 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU186",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU398 (RU15)?",
        "options": [
          "433.3750 MHz",
          "433.4000 MHz",
          "433.3875 MHz",
          "433.3625 MHz"
        ],
        "correct": 0,
        "answer": "433.3750 MHz",
        "explanation": "RU398 ima ulaz 433.3750 MHz. Izlaz je 434.9750 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU187",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU15?",
        "options": [
          "RU369",
          "RU398",
          "RU368",
          "RU370"
        ],
        "correct": 1,
        "answer": "RU398",
        "explanation": "Stari naziv RU15 odgovara novom nazivu RU398.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU188",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU398?",
        "options": [
          "RU1",
          "RU0x",
          "RU0",
          "RU15"
        ],
        "correct": 3,
        "answer": "RU15",
        "explanation": "Novi naziv RU398 odgovara starom nazivu RU15.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU189",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RU399 (RU15x)?",
        "options": [
          "435.0125 MHz",
          "434.9750 MHz",
          "434.9875 MHz",
          "435.0000 MHz"
        ],
        "correct": 2,
        "answer": "434.9875 MHz",
        "explanation": "RU399 ima izlaz 434.9875 MHz. Na 70 cm ulaz je 1.600 MHz niži: 433.3875 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU190",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RU399 (RU15x)?",
        "options": [
          "433.3875 MHz",
          "433.3750 MHz",
          "433.4000 MHz",
          "433.4125 MHz"
        ],
        "correct": 0,
        "answer": "433.3875 MHz",
        "explanation": "RU399 ima ulaz 433.3875 MHz. Izlaz je 434.9875 MHz, pomak je -1600 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU191",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je novi naziv za stari repetitorski kanal RU15x?",
        "options": [
          "RU368",
          "RU369",
          "RU399",
          "RU370"
        ],
        "correct": 2,
        "answer": "RU399",
        "explanation": "Stari naziv RU15x odgovara novom nazivu RU399.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RU192",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RU 70cm repetitori",
        "group": "RU 70cm repetitori",
        "question": "Koji je stari naziv za repetitorski kanal RU399?",
        "options": [
          "RU1",
          "RU0x",
          "RU0",
          "RU15x"
        ],
        "correct": 3,
        "answer": "RU15x",
        "explanation": "Novi naziv RU399 odgovara starom nazivu RU15x.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM193",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM0?",
        "options": [
          "1297.0500 MHz",
          "1296.9750 MHz",
          "1297.0250 MHz",
          "1297.0000 MHz"
        ],
        "correct": 3,
        "answer": "1297.0000 MHz",
        "explanation": "RM0 ima izlaz 1297.0000 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.0000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM194",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM0?",
        "options": [
          "1291.0000 MHz",
          "1291.0500 MHz",
          "1291.0250 MHz",
          "1290.9750 MHz"
        ],
        "correct": 0,
        "answer": "1291.0000 MHz",
        "explanation": "RM0 ima ulaz 1291.0000 MHz. Izlaz je 1297.0000 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM195",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM1?",
        "options": [
          "1297.0250 MHz",
          "1297.0750 MHz",
          "1297.0500 MHz",
          "1297.0000 MHz"
        ],
        "correct": 0,
        "answer": "1297.0250 MHz",
        "explanation": "RM1 ima izlaz 1297.0250 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.0250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM196",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM1?",
        "options": [
          "1291.0000 MHz",
          "1291.0500 MHz",
          "1291.0250 MHz",
          "1291.0750 MHz"
        ],
        "correct": 2,
        "answer": "1291.0250 MHz",
        "explanation": "RM1 ima ulaz 1291.0250 MHz. Izlaz je 1297.0250 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM197",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM2?",
        "options": [
          "1297.0500 MHz",
          "1297.0750 MHz",
          "1297.1000 MHz",
          "1297.0250 MHz"
        ],
        "correct": 0,
        "answer": "1297.0500 MHz",
        "explanation": "RM2 ima izlaz 1297.0500 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.0500 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM198",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM2?",
        "options": [
          "1291.0250 MHz",
          "1291.0500 MHz",
          "1291.0750 MHz",
          "1291.1000 MHz"
        ],
        "correct": 1,
        "answer": "1291.0500 MHz",
        "explanation": "RM2 ima ulaz 1291.0500 MHz. Izlaz je 1297.0500 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM199",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM3?",
        "options": [
          "1297.1250 MHz",
          "1297.1000 MHz",
          "1297.0750 MHz",
          "1297.0500 MHz"
        ],
        "correct": 2,
        "answer": "1297.0750 MHz",
        "explanation": "RM3 ima izlaz 1297.0750 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.0750 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM200",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM3?",
        "options": [
          "1291.1000 MHz",
          "1291.0750 MHz",
          "1291.1250 MHz",
          "1291.0500 MHz"
        ],
        "correct": 1,
        "answer": "1291.0750 MHz",
        "explanation": "RM3 ima ulaz 1291.0750 MHz. Izlaz je 1297.0750 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM201",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM4?",
        "options": [
          "1297.1500 MHz",
          "1297.1000 MHz",
          "1297.0750 MHz",
          "1297.1250 MHz"
        ],
        "correct": 1,
        "answer": "1297.1000 MHz",
        "explanation": "RM4 ima izlaz 1297.1000 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.1000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM202",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM4?",
        "options": [
          "1291.0750 MHz",
          "1291.1250 MHz",
          "1291.1000 MHz",
          "1291.1500 MHz"
        ],
        "correct": 2,
        "answer": "1291.1000 MHz",
        "explanation": "RM4 ima ulaz 1291.1000 MHz. Izlaz je 1297.1000 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM203",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM5?",
        "options": [
          "1297.1250 MHz",
          "1297.1000 MHz",
          "1297.1750 MHz",
          "1297.1500 MHz"
        ],
        "correct": 0,
        "answer": "1297.1250 MHz",
        "explanation": "RM5 ima izlaz 1297.1250 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.1250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM204",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM5?",
        "options": [
          "1291.1000 MHz",
          "1291.1750 MHz",
          "1291.1500 MHz",
          "1291.1250 MHz"
        ],
        "correct": 3,
        "answer": "1291.1250 MHz",
        "explanation": "RM5 ima ulaz 1291.1250 MHz. Izlaz je 1297.1250 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM205",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM6?",
        "options": [
          "1297.1250 MHz",
          "1297.1500 MHz",
          "1297.1750 MHz",
          "1297.2000 MHz"
        ],
        "correct": 1,
        "answer": "1297.1500 MHz",
        "explanation": "RM6 ima izlaz 1297.1500 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.1500 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM206",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM6?",
        "options": [
          "1291.2000 MHz",
          "1291.1500 MHz",
          "1291.1750 MHz",
          "1291.1250 MHz"
        ],
        "correct": 1,
        "answer": "1291.1500 MHz",
        "explanation": "RM6 ima ulaz 1291.1500 MHz. Izlaz je 1297.1500 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM207",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM7?",
        "options": [
          "1297.2250 MHz",
          "1297.1500 MHz",
          "1297.2000 MHz",
          "1297.1750 MHz"
        ],
        "correct": 3,
        "answer": "1297.1750 MHz",
        "explanation": "RM7 ima izlaz 1297.1750 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.1750 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM208",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM7?",
        "options": [
          "1291.1500 MHz",
          "1291.2250 MHz",
          "1291.1750 MHz",
          "1291.2000 MHz"
        ],
        "correct": 2,
        "answer": "1291.1750 MHz",
        "explanation": "RM7 ima ulaz 1291.1750 MHz. Izlaz je 1297.1750 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM209",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM8?",
        "options": [
          "1297.2000 MHz",
          "1297.2250 MHz",
          "1297.1750 MHz",
          "1297.2500 MHz"
        ],
        "correct": 0,
        "answer": "1297.2000 MHz",
        "explanation": "RM8 ima izlaz 1297.2000 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.2000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM210",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM8?",
        "options": [
          "1291.2250 MHz",
          "1291.2500 MHz",
          "1291.1750 MHz",
          "1291.2000 MHz"
        ],
        "correct": 3,
        "answer": "1291.2000 MHz",
        "explanation": "RM8 ima ulaz 1291.2000 MHz. Izlaz je 1297.2000 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM211",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM9?",
        "options": [
          "1297.2000 MHz",
          "1297.2500 MHz",
          "1297.2750 MHz",
          "1297.2250 MHz"
        ],
        "correct": 3,
        "answer": "1297.2250 MHz",
        "explanation": "RM9 ima izlaz 1297.2250 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.2250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM212",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM9?",
        "options": [
          "1291.2500 MHz",
          "1291.2250 MHz",
          "1291.2000 MHz",
          "1291.2750 MHz"
        ],
        "correct": 1,
        "answer": "1291.2250 MHz",
        "explanation": "RM9 ima ulaz 1291.2250 MHz. Izlaz je 1297.2250 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM213",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM10?",
        "options": [
          "1297.2500 MHz",
          "1297.2250 MHz",
          "1297.3000 MHz",
          "1297.2750 MHz"
        ],
        "correct": 0,
        "answer": "1297.2500 MHz",
        "explanation": "RM10 ima izlaz 1297.2500 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.2500 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM214",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM10?",
        "options": [
          "1291.2500 MHz",
          "1291.2250 MHz",
          "1291.3000 MHz",
          "1291.2750 MHz"
        ],
        "correct": 0,
        "answer": "1291.2500 MHz",
        "explanation": "RM10 ima ulaz 1291.2500 MHz. Izlaz je 1297.2500 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM215",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM11?",
        "options": [
          "1297.2500 MHz",
          "1297.3250 MHz",
          "1297.3000 MHz",
          "1297.2750 MHz"
        ],
        "correct": 3,
        "answer": "1297.2750 MHz",
        "explanation": "RM11 ima izlaz 1297.2750 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.2750 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM216",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM11?",
        "options": [
          "1291.3000 MHz",
          "1291.3250 MHz",
          "1291.2750 MHz",
          "1291.2500 MHz"
        ],
        "correct": 2,
        "answer": "1291.2750 MHz",
        "explanation": "RM11 ima ulaz 1291.2750 MHz. Izlaz je 1297.2750 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM217",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM12?",
        "options": [
          "1297.3000 MHz",
          "1297.3250 MHz",
          "1297.3500 MHz",
          "1297.2750 MHz"
        ],
        "correct": 0,
        "answer": "1297.3000 MHz",
        "explanation": "RM12 ima izlaz 1297.3000 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.3000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM218",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM12?",
        "options": [
          "1291.3500 MHz",
          "1291.3000 MHz",
          "1291.3250 MHz",
          "1291.2750 MHz"
        ],
        "correct": 1,
        "answer": "1291.3000 MHz",
        "explanation": "RM12 ima ulaz 1291.3000 MHz. Izlaz je 1297.3000 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM219",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM13?",
        "options": [
          "1297.3000 MHz",
          "1297.3250 MHz",
          "1297.3500 MHz",
          "1297.3750 MHz"
        ],
        "correct": 1,
        "answer": "1297.3250 MHz",
        "explanation": "RM13 ima izlaz 1297.3250 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.3250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM220",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM13?",
        "options": [
          "1291.3750 MHz",
          "1291.3000 MHz",
          "1291.3250 MHz",
          "1291.3500 MHz"
        ],
        "correct": 2,
        "answer": "1291.3250 MHz",
        "explanation": "RM13 ima ulaz 1291.3250 MHz. Izlaz je 1297.3250 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM221",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM14?",
        "options": [
          "1297.3250 MHz",
          "1297.3500 MHz",
          "1297.3750 MHz",
          "1297.4000 MHz"
        ],
        "correct": 1,
        "answer": "1297.3500 MHz",
        "explanation": "RM14 ima izlaz 1297.3500 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.3500 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM222",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM14?",
        "options": [
          "1291.4000 MHz",
          "1291.3250 MHz",
          "1291.3500 MHz",
          "1291.3750 MHz"
        ],
        "correct": 2,
        "answer": "1291.3500 MHz",
        "explanation": "RM14 ima ulaz 1291.3500 MHz. Izlaz je 1297.3500 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM223",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM15?",
        "options": [
          "1297.4000 MHz",
          "1297.4250 MHz",
          "1297.3500 MHz",
          "1297.3750 MHz"
        ],
        "correct": 3,
        "answer": "1297.3750 MHz",
        "explanation": "RM15 ima izlaz 1297.3750 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.3750 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM224",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM15?",
        "options": [
          "1291.3750 MHz",
          "1291.4250 MHz",
          "1291.4000 MHz",
          "1291.3500 MHz"
        ],
        "correct": 0,
        "answer": "1291.3750 MHz",
        "explanation": "RM15 ima ulaz 1291.3750 MHz. Izlaz je 1297.3750 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM225",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM16?",
        "options": [
          "1297.4500 MHz",
          "1297.4250 MHz",
          "1297.3750 MHz",
          "1297.4000 MHz"
        ],
        "correct": 3,
        "answer": "1297.4000 MHz",
        "explanation": "RM16 ima izlaz 1297.4000 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.4000 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM226",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM16?",
        "options": [
          "1291.4000 MHz",
          "1291.4500 MHz",
          "1291.4250 MHz",
          "1291.3750 MHz"
        ],
        "correct": 0,
        "answer": "1291.4000 MHz",
        "explanation": "RM16 ima ulaz 1291.4000 MHz. Izlaz je 1297.4000 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM227",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM17?",
        "options": [
          "1297.4250 MHz",
          "1297.4000 MHz",
          "1297.4750 MHz",
          "1297.4500 MHz"
        ],
        "correct": 0,
        "answer": "1297.4250 MHz",
        "explanation": "RM17 ima izlaz 1297.4250 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.4250 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM228",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM17?",
        "options": [
          "1291.4750 MHz",
          "1291.4000 MHz",
          "1291.4500 MHz",
          "1291.4250 MHz"
        ],
        "correct": 3,
        "answer": "1291.4250 MHz",
        "explanation": "RM17 ima ulaz 1291.4250 MHz. Izlaz je 1297.4250 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM229",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM18?",
        "options": [
          "1297.4500 MHz",
          "1297.4750 MHz",
          "1297.5000 MHz",
          "1297.4250 MHz"
        ],
        "correct": 0,
        "answer": "1297.4500 MHz",
        "explanation": "RM18 ima izlaz 1297.4500 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.4500 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM230",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM18?",
        "options": [
          "1291.4750 MHz",
          "1291.4250 MHz",
          "1291.4500 MHz",
          "1291.5000 MHz"
        ],
        "correct": 2,
        "answer": "1291.4500 MHz",
        "explanation": "RM18 ima ulaz 1291.4500 MHz. Izlaz je 1297.4500 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM231",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je izlazna frekvencija repetitora RM19?",
        "options": [
          "1297.4750 MHz",
          "1297.5250 MHz",
          "1297.4500 MHz",
          "1297.5000 MHz"
        ],
        "correct": 0,
        "answer": "1297.4750 MHz",
        "explanation": "RM19 ima izlaz 1297.4750 MHz. Na 23 cm ulaz je 6 MHz niži: 1291.4750 MHz.",
        "source": "repetitori_vezbanje.txt"
      },
      {
        "id": "REP-RM232",
        "bankId": "memo-repetitori",
        "section": "MEMO_REPETITORS",
        "topic": "RM 23cm repetitori",
        "group": "RM 23cm repetitori",
        "question": "Koja je ulazna frekvencija repetitora RM19?",
        "options": [
          "1291.4500 MHz",
          "1291.5250 MHz",
          "1291.5000 MHz",
          "1291.4750 MHz"
        ],
        "correct": 3,
        "answer": "1291.4750 MHz",
        "explanation": "RM19 ima ulaz 1291.4750 MHz. Izlaz je 1297.4750 MHz, pomak je -6000 kHz.",
        "source": "repetitori_vezbanje.txt"
      }
    ],
    "questionCount": 240,
    "studyNotes": [
      {
        "title": "2 m repetitori / RV kanali",
        "lines": [
          "Po?etni kanal: R0 = RV48",
          "Ulaz R0/RV48: 145.0000 MHz",
          "Izlaz R0/RV48: 145.6000 MHz",
          "Pomak: -600 kHz",
          "Korak kanala: 12.5 kHz",
          "Stari nazivi idu redom: R0, R0x, R1, R1x, R2, R2x..."
        ],
        "formulas": [
          "ulaz = izlaz - 0.600 MHz",
          "izlaz = ulaz + 0.600 MHz",
          "frekvencija slede?eg kanala = frekvencija prethodnog kanala + 0.0125 MHz"
        ],
        "examples": [
          "RV49 je jedan kanal posle RV48.",
          "RV49 ulaz = 145.0000 + 0.0125 = 145.0125 MHz",
          "RV49 izlaz = 145.6000 + 0.0125 = 145.6125 MHz"
        ]
      },
      {
        "title": "70 cm repetitori / RU kanali",
        "lines": [
          "Po?etni kanal: RU0 = RU368",
          "Ulaz RU0/RU368: 433.0000 MHz",
          "Izlaz RU0/RU368: 434.6000 MHz",
          "Pomak: -1600 kHz",
          "Korak kanala: 12.5 kHz",
          "Stari nazivi idu redom: RU0, RU0x, RU1, RU1x, RU2, RU2x..."
        ],
        "formulas": [
          "ulaz = izlaz - 1.600 MHz",
          "izlaz = ulaz + 1.600 MHz",
          "frekvencija slede?eg kanala = frekvencija prethodnog kanala + 0.0125 MHz"
        ],
        "examples": [
          "RU369 je jedan kanal posle RU368.",
          "RU369 ulaz = 433.0000 + 0.0125 = 433.0125 MHz",
          "RU369 izlaz = 434.6000 + 0.0125 = 434.6125 MHz"
        ]
      },
      {
        "title": "23 cm repetitori / RM kanali",
        "lines": [
          "Po?etni kanal: RM0",
          "Ulaz RM0: 1291.000 MHz",
          "Izlaz RM0: 1297.000 MHz",
          "Pomak: -6000 kHz",
          "Korak kanala: 25 kHz"
        ],
        "formulas": [
          "ulaz = izlaz - 6.000 MHz",
          "izlaz = ulaz + 6.000 MHz",
          "frekvencija slede?eg kanala = frekvencija prethodnog kanala + 0.025 MHz"
        ],
        "examples": [
          "RM1 je jedan kanal posle RM0.",
          "RM1 ulaz = 1291.000 + 0.025 = 1291.025 MHz",
          "RM1 izlaz = 1297.000 + 0.025 = 1297.025 MHz"
        ]
      },
      {
        "title": "Kako re?avati zadatke za repetitore",
        "lines": [
          "Prvo prepoznaj opseg: RV = 2 m, RU = 70 cm, RM = 23 cm.",
          "Ako je data izlazna frekvencija, ulaz dobija? oduzimanjem pomaka.",
          "Ako je data ulazna frekvencija, izlaz dobija? dodavanjem pomaka.",
          "Ako je dat kanal, izra?unaj koliko je koraka udaljen od po?etnog kanala.",
          "Na RV i RU kanalima jedan korak je 12.5 kHz = 0.0125 MHz.",
          "Na RM kanalima jedan korak je 25 kHz = 0.025 MHz."
        ],
        "formulas": [
          "broj koraka = novi broj kanala - po?etni broj kanala",
          "frekvencija = po?etna frekvencija + broj koraka x korak",
          "RV: ulaz = izlaz - 0.600 MHz",
          "RU: ulaz = izlaz - 1.600 MHz",
          "RM: ulaz = izlaz - 6.000 MHz"
        ]
      }
    ]
  },
  {
    "bankId": "memo-band-plan",
    "title": "Band plan i plan opsega",
    "shortTitle": "Band plan",
    "description": "Trening za frekvencijske opsege, phone segmente, klase licence i dozvoljene snage.",
    "category": "MEMORIZATION",
    "licenseMapping": {
      "1. klasa": "A licenca",
      "3. klasa": "B licenca",
      "2. klasa": "C licenca"
    },
    "questions": [
      {
        "id": "BP001",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 1.8 MHz?",
        "options": [
          "21.000-21.450 MHz",
          "10.100-10.150 MHz",
          "24.890-24.990 MHz",
          "1.810-2.000 MHz"
        ],
        "correct": 3,
        "answer": "1.810-2.000 MHz",
        "explanation": "Band 1.8 MHz u tabeli ima opseg 1.810-2.000 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP002",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 1.8 MHz?",
        "options": [
          "80 m",
          "2 m",
          "160 m",
          "15 m"
        ],
        "correct": 2,
        "answer": "160 m",
        "explanation": "Za band 1.8 MHz navedena je talasna dužina 160 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP003",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 1.810-2.000 MHz?",
        "options": [
          "2.3 GHz",
          "7 MHz",
          "1.8 MHz",
          "24 MHz"
        ],
        "correct": 2,
        "answer": "1.8 MHz",
        "explanation": "Opseg 1.810-2.000 MHz pripada bandu 1.8 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP004",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - phone segmenti",
        "group": "Band plan - phone segmenti",
        "question": "Koji je Phone deo opsega za band 1.8 MHz?",
        "options": [
          "3.600-3.800 MHz",
          "28.225-29.700 MHz",
          "21.151-21.450 MHz",
          "1.840-2.000 MHz"
        ],
        "correct": 3,
        "answer": "1.840-2.000 MHz",
        "explanation": "Phone segment za 1.8 MHz je 1.840-2.000 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP005",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 1.8 MHz prema tabeli?",
        "options": [
          "B, C",
          "A, B, C",
          "A, C",
          "A"
        ],
        "correct": 3,
        "answer": "A",
        "explanation": "Za 1.8 MHz u koloni ARO klasa stoji: A.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP006",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 1.8 MHz?",
        "options": [
          "30 W",
          "100 W",
          "300 W",
          "50 W"
        ],
        "correct": 2,
        "answer": "300 W",
        "explanation": "Za 1.8 MHz, klasa A: 300 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP007",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 1.8 MHz?",
        "options": [
          "1500 W",
          "Nije dozvoljeno prema ovoj tabeli",
          "100 W",
          "300 W"
        ],
        "correct": 1,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 1.8 MHz, klasa B: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP008",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 1.8 MHz?",
        "options": [
          "1500 W",
          "100 W",
          "300 W",
          "Nije dozvoljeno prema ovoj tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 1.8 MHz, klasa C: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP009",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 3.5 MHz?",
        "options": [
          "21.000-21.450 MHz",
          "50.000-51.900 MHz",
          "7.000-7.200 MHz",
          "3.500-3.800 MHz"
        ],
        "correct": 3,
        "answer": "3.500-3.800 MHz",
        "explanation": "Band 3.5 MHz u tabeli ima opseg 3.500-3.800 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP010",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 3.5 MHz?",
        "options": [
          "80 m",
          "20 m",
          "2 m",
          "10 m"
        ],
        "correct": 0,
        "answer": "80 m",
        "explanation": "Za band 3.5 MHz navedena je talasna dužina 80 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP011",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 3.500-3.800 MHz?",
        "options": [
          "144 MHz",
          "21 MHz",
          "3.5 MHz",
          "28 MHz"
        ],
        "correct": 2,
        "answer": "3.5 MHz",
        "explanation": "Opseg 3.500-3.800 MHz pripada bandu 3.5 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP012",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - phone segmenti",
        "group": "Band plan - phone segmenti",
        "question": "Koji je Phone deo opsega za band 3.5 MHz?",
        "options": [
          "3.600-3.800 MHz",
          "18.111-18.168 MHz",
          "21.151-21.450 MHz",
          "1.840-2.000 MHz"
        ],
        "correct": 0,
        "answer": "3.600-3.800 MHz",
        "explanation": "Phone segment za 3.5 MHz je 3.600-3.800 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP013",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 3.5 MHz prema tabeli?",
        "options": [
          "A, B",
          "C",
          "B, C",
          "A, B, C"
        ],
        "correct": 3,
        "answer": "A, B, C",
        "explanation": "Za 3.5 MHz u koloni ARO klasa stoji: A, B, C.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP014",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 3.5 MHz?",
        "options": [
          "75 W",
          "1500 W",
          "100 W",
          "300 W"
        ],
        "correct": 1,
        "answer": "1500 W",
        "explanation": "Za 3.5 MHz, klasa A: 1500 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP015",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 3.5 MHz?",
        "options": [
          "100 W",
          "1500 W",
          "300 W",
          "75 W"
        ],
        "correct": 0,
        "answer": "100 W",
        "explanation": "Za 3.5 MHz, klasa B: 100 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP016",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 3.5 MHz?",
        "options": [
          "1500 W",
          "50 W",
          "30 W",
          "100 W"
        ],
        "correct": 3,
        "answer": "100 W",
        "explanation": "Za 3.5 MHz, klasa C: 100 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP017",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 7 MHz?",
        "options": [
          "3.500-3.800 MHz",
          "1240-1300 MHz",
          "432.000-438.000 MHz",
          "7.000-7.200 MHz"
        ],
        "correct": 3,
        "answer": "7.000-7.200 MHz",
        "explanation": "Band 7 MHz u tabeli ima opseg 7.000-7.200 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP018",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 7 MHz?",
        "options": [
          "40 m",
          "2 m",
          "0.7 m",
          "0.13 m"
        ],
        "correct": 0,
        "answer": "40 m",
        "explanation": "Za band 7 MHz navedena je talasna dužina 40 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP019",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 7.000-7.200 MHz?",
        "options": [
          "21 MHz",
          "7 MHz",
          "432 MHz",
          "1.8 MHz"
        ],
        "correct": 1,
        "answer": "7 MHz",
        "explanation": "Opseg 7.000-7.200 MHz pripada bandu 7 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP020",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - phone segmenti",
        "group": "Band plan - phone segmenti",
        "question": "Koji je Phone deo opsega za band 7 MHz?",
        "options": [
          "18.111-18.168 MHz",
          "7.040-7.200 MHz",
          "1.840-2.000 MHz",
          "3.600-3.800 MHz"
        ],
        "correct": 1,
        "answer": "7.040-7.200 MHz",
        "explanation": "Phone segment za 7 MHz je 7.040-7.200 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP021",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 7 MHz prema tabeli?",
        "options": [
          "B",
          "A, B, C",
          "B, C",
          "A, B"
        ],
        "correct": 1,
        "answer": "A, B, C",
        "explanation": "Za 7 MHz u koloni ARO klasa stoji: A, B, C.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP022",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 7 MHz?",
        "options": [
          "30 W",
          "100 W",
          "1500 W",
          "50 W"
        ],
        "correct": 2,
        "answer": "1500 W",
        "explanation": "Za 7 MHz, klasa A: 1500 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP023",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 7 MHz?",
        "options": [
          "100 W",
          "75 W",
          "30 W",
          "50 W"
        ],
        "correct": 0,
        "answer": "100 W",
        "explanation": "Za 7 MHz, klasa B: 100 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP024",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 7 MHz?",
        "options": [
          "1500 W",
          "30 W",
          "100 W",
          "300 W"
        ],
        "correct": 2,
        "answer": "100 W",
        "explanation": "Za 7 MHz, klasa C: 100 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP025",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 10 MHz?",
        "options": [
          "432.000-438.000 MHz",
          "10.100-10.150 MHz",
          "14.000-14.350 MHz",
          "1.810-2.000 MHz"
        ],
        "correct": 1,
        "answer": "10.100-10.150 MHz",
        "explanation": "Band 10 MHz u tabeli ima opseg 10.100-10.150 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP026",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 10 MHz?",
        "options": [
          "30 m",
          "0.13 m",
          "160 m",
          "17 m"
        ],
        "correct": 0,
        "answer": "30 m",
        "explanation": "Za band 10 MHz navedena je talasna dužina 30 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP027",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 10.100-10.150 MHz?",
        "options": [
          "21 MHz",
          "10 MHz",
          "2.3 GHz",
          "144 MHz"
        ],
        "correct": 1,
        "answer": "10 MHz",
        "explanation": "Opseg 10.100-10.150 MHz pripada bandu 10 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP028",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - napomene",
        "group": "Band plan - napomene",
        "question": "Šta oznaka '*' u Phone koloni znači za band 10 MHz?",
        "options": [
          "Treba pogledati detaljniji pravilnik za taj opseg",
          "Phone je zabranjen u celom opsegu",
          "Dozvoljen je samo CW",
          "Dozvoljen je samo radio-far"
        ],
        "correct": 0,
        "answer": "Treba pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Zvezdica upućuje na detaljniji pravilnik / detaljniju tabelu.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP029",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 10 MHz prema tabeli?",
        "options": [
          "B, C",
          "A, B, C",
          "A, C",
          "A"
        ],
        "correct": 3,
        "answer": "A",
        "explanation": "Za 10 MHz u koloni ARO klasa stoji: A.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP030",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 10 MHz?",
        "options": [
          "100 W",
          "300 W",
          "30 W",
          "1500 W"
        ],
        "correct": 1,
        "answer": "300 W",
        "explanation": "Za 10 MHz, klasa A: 300 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP031",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 10 MHz?",
        "options": [
          "300 W",
          "100 W",
          "1500 W",
          "Nije dozvoljeno prema ovoj tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 10 MHz, klasa B: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP032",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 10 MHz?",
        "options": [
          "1500 W",
          "300 W",
          "100 W",
          "Nije dozvoljeno prema ovoj tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 10 MHz, klasa C: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP033",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 14 MHz?",
        "options": [
          "50.000-51.900 MHz",
          "3.500-3.800 MHz",
          "21.000-21.450 MHz",
          "14.000-14.350 MHz"
        ],
        "correct": 3,
        "answer": "14.000-14.350 MHz",
        "explanation": "Band 14 MHz u tabeli ima opseg 14.000-14.350 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP034",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 14 MHz?",
        "options": [
          "20 m",
          "40 m",
          "2 m",
          "12 m"
        ],
        "correct": 0,
        "answer": "20 m",
        "explanation": "Za band 14 MHz navedena je talasna dužina 20 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP035",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 14.000-14.350 MHz?",
        "options": [
          "14 MHz",
          "3.5 MHz",
          "28 MHz",
          "1.2 GHz"
        ],
        "correct": 0,
        "answer": "14 MHz",
        "explanation": "Opseg 14.000-14.350 MHz pripada bandu 14 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP036",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - phone segmenti",
        "group": "Band plan - phone segmenti",
        "question": "Koji je Phone deo opsega za band 14 MHz?",
        "options": [
          "7.040-7.200 MHz",
          "1.840-2.000 MHz",
          "14.101-14.350 MHz",
          "50.100-51.900 MHz"
        ],
        "correct": 2,
        "answer": "14.101-14.350 MHz",
        "explanation": "Phone segment za 14 MHz je 14.101-14.350 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP037",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 14 MHz prema tabeli?",
        "options": [
          "A, C",
          "A",
          "A, B",
          "A, B, C"
        ],
        "correct": 1,
        "answer": "A",
        "explanation": "Za 14 MHz u koloni ARO klasa stoji: A.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP038",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 14 MHz?",
        "options": [
          "300 W",
          "100 W",
          "75 W",
          "1500 W"
        ],
        "correct": 3,
        "answer": "1500 W",
        "explanation": "Za 14 MHz, klasa A: 1500 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP039",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 14 MHz?",
        "options": [
          "100 W",
          "1500 W",
          "300 W",
          "Nije dozvoljeno prema ovoj tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 14 MHz, klasa B: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP040",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 14 MHz?",
        "options": [
          "100 W",
          "1500 W",
          "Nije dozvoljeno prema ovoj tabeli",
          "300 W"
        ],
        "correct": 2,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 14 MHz, klasa C: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP041",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 18 MHz?",
        "options": [
          "2300-2450 MHz",
          "18.068-18.168 MHz",
          "50.000-51.900 MHz",
          "10.100-10.150 MHz"
        ],
        "correct": 1,
        "answer": "18.068-18.168 MHz",
        "explanation": "Band 18 MHz u tabeli ima opseg 18.068-18.168 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP042",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 18 MHz?",
        "options": [
          "2 m",
          "17 m",
          "30 m",
          "0.23 m"
        ],
        "correct": 1,
        "answer": "17 m",
        "explanation": "Za band 18 MHz navedena je talasna dužina 17 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP043",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 18.068-18.168 MHz?",
        "options": [
          "10 MHz",
          "18 MHz",
          "28 MHz",
          "50 MHz"
        ],
        "correct": 1,
        "answer": "18 MHz",
        "explanation": "Opseg 18.068-18.168 MHz pripada bandu 18 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP044",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - phone segmenti",
        "group": "Band plan - phone segmenti",
        "question": "Koji je Phone deo opsega za band 18 MHz?",
        "options": [
          "28.225-29.700 MHz",
          "18.111-18.168 MHz",
          "1.840-2.000 MHz",
          "7.040-7.200 MHz"
        ],
        "correct": 1,
        "answer": "18.111-18.168 MHz",
        "explanation": "Phone segment za 18 MHz je 18.111-18.168 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP045",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 18 MHz prema tabeli?",
        "options": [
          "A",
          "A, B, C",
          "B, C",
          "A, B"
        ],
        "correct": 0,
        "answer": "A",
        "explanation": "Za 18 MHz u koloni ARO klasa stoji: A.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP046",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 18 MHz?",
        "options": [
          "1500 W",
          "75 W",
          "50 W",
          "300 W"
        ],
        "correct": 3,
        "answer": "300 W",
        "explanation": "Za 18 MHz, klasa A: 300 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP047",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 18 MHz?",
        "options": [
          "300 W",
          "Nije dozvoljeno prema ovoj tabeli",
          "100 W",
          "1500 W"
        ],
        "correct": 1,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 18 MHz, klasa B: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP048",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 18 MHz?",
        "options": [
          "1500 W",
          "Nije dozvoljeno prema ovoj tabeli",
          "300 W",
          "100 W"
        ],
        "correct": 1,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 18 MHz, klasa C: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP049",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 21 MHz?",
        "options": [
          "28.000-29.700 MHz",
          "18.068-18.168 MHz",
          "432.000-438.000 MHz",
          "21.000-21.450 MHz"
        ],
        "correct": 3,
        "answer": "21.000-21.450 MHz",
        "explanation": "Band 21 MHz u tabeli ima opseg 21.000-21.450 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP050",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 21 MHz?",
        "options": [
          "0.23 m",
          "12 m",
          "15 m",
          "30 m"
        ],
        "correct": 2,
        "answer": "15 m",
        "explanation": "Za band 21 MHz navedena je talasna dužina 15 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP051",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 21.000-21.450 MHz?",
        "options": [
          "18 MHz",
          "2.3 GHz",
          "432 MHz",
          "21 MHz"
        ],
        "correct": 3,
        "answer": "21 MHz",
        "explanation": "Opseg 21.000-21.450 MHz pripada bandu 21 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP052",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - phone segmenti",
        "group": "Band plan - phone segmenti",
        "question": "Koji je Phone deo opsega za band 21 MHz?",
        "options": [
          "50.100-51.900 MHz",
          "24.931-24.990 MHz",
          "14.101-14.350 MHz",
          "21.151-21.450 MHz"
        ],
        "correct": 3,
        "answer": "21.151-21.450 MHz",
        "explanation": "Phone segment za 21 MHz je 21.151-21.450 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP053",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 21 MHz prema tabeli?",
        "options": [
          "A, B",
          "A",
          "A, B, C",
          "B"
        ],
        "correct": 0,
        "answer": "A, B",
        "explanation": "Za 21 MHz u koloni ARO klasa stoji: A, B.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP054",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 21 MHz?",
        "options": [
          "100 W",
          "75 W",
          "1500 W",
          "50 W"
        ],
        "correct": 2,
        "answer": "1500 W",
        "explanation": "Za 21 MHz, klasa A: 1500 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP055",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 21 MHz?",
        "options": [
          "1500 W",
          "75 W",
          "30 W",
          "100 W"
        ],
        "correct": 3,
        "answer": "100 W",
        "explanation": "Za 21 MHz, klasa B: 100 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP056",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 21 MHz?",
        "options": [
          "1500 W",
          "300 W",
          "Nije dozvoljeno prema ovoj tabeli",
          "100 W"
        ],
        "correct": 2,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 21 MHz, klasa C: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP057",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 24 MHz?",
        "options": [
          "1.810-2.000 MHz",
          "24.890-24.990 MHz",
          "10.100-10.150 MHz",
          "14.000-14.350 MHz"
        ],
        "correct": 1,
        "answer": "24.890-24.990 MHz",
        "explanation": "Band 24 MHz u tabeli ima opseg 24.890-24.990 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP058",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 24 MHz?",
        "options": [
          "12 m",
          "0.13 m",
          "17 m",
          "2 m"
        ],
        "correct": 0,
        "answer": "12 m",
        "explanation": "Za band 24 MHz navedena je talasna dužina 12 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP059",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 24.890-24.990 MHz?",
        "options": [
          "24 MHz",
          "7 MHz",
          "1.8 MHz",
          "18 MHz"
        ],
        "correct": 0,
        "answer": "24 MHz",
        "explanation": "Opseg 24.890-24.990 MHz pripada bandu 24 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP060",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - phone segmenti",
        "group": "Band plan - phone segmenti",
        "question": "Koji je Phone deo opsega za band 24 MHz?",
        "options": [
          "18.111-18.168 MHz",
          "3.600-3.800 MHz",
          "7.040-7.200 MHz",
          "24.931-24.990 MHz"
        ],
        "correct": 3,
        "answer": "24.931-24.990 MHz",
        "explanation": "Phone segment za 24 MHz je 24.931-24.990 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP061",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 24 MHz prema tabeli?",
        "options": [
          "B",
          "C",
          "A",
          "B, C"
        ],
        "correct": 2,
        "answer": "A",
        "explanation": "Za 24 MHz u koloni ARO klasa stoji: A.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP062",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 24 MHz?",
        "options": [
          "75 W",
          "1500 W",
          "30 W",
          "300 W"
        ],
        "correct": 3,
        "answer": "300 W",
        "explanation": "Za 24 MHz, klasa A: 300 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP063",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 24 MHz?",
        "options": [
          "1500 W",
          "100 W",
          "300 W",
          "Nije dozvoljeno prema ovoj tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 24 MHz, klasa B: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP064",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 24 MHz?",
        "options": [
          "300 W",
          "100 W",
          "Nije dozvoljeno prema ovoj tabeli",
          "1500 W"
        ],
        "correct": 2,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 24 MHz, klasa C: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP065",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 28 MHz?",
        "options": [
          "1.810-2.000 MHz",
          "28.000-29.700 MHz",
          "3.500-3.800 MHz",
          "50.000-51.900 MHz"
        ],
        "correct": 1,
        "answer": "28.000-29.700 MHz",
        "explanation": "Band 28 MHz u tabeli ima opseg 28.000-29.700 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP066",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 28 MHz?",
        "options": [
          "0.13 m",
          "10 m",
          "12 m",
          "80 m"
        ],
        "correct": 1,
        "answer": "10 m",
        "explanation": "Za band 28 MHz navedena je talasna dužina 10 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP067",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 28.000-29.700 MHz?",
        "options": [
          "1.2 GHz",
          "28 MHz",
          "14 MHz",
          "24 MHz"
        ],
        "correct": 1,
        "answer": "28 MHz",
        "explanation": "Opseg 28.000-29.700 MHz pripada bandu 28 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP068",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - phone segmenti",
        "group": "Band plan - phone segmenti",
        "question": "Koji je Phone deo opsega za band 28 MHz?",
        "options": [
          "50.100-51.900 MHz",
          "18.111-18.168 MHz",
          "28.225-29.700 MHz",
          "3.600-3.800 MHz"
        ],
        "correct": 2,
        "answer": "28.225-29.700 MHz",
        "explanation": "Phone segment za 28 MHz je 28.225-29.700 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP069",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 28 MHz prema tabeli?",
        "options": [
          "A",
          "B, C",
          "A, B",
          "A, C"
        ],
        "correct": 2,
        "answer": "A, B",
        "explanation": "Za 28 MHz u koloni ARO klasa stoji: A, B.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP070",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 28 MHz?",
        "options": [
          "50 W",
          "30 W",
          "1500 W",
          "300 W"
        ],
        "correct": 2,
        "answer": "1500 W",
        "explanation": "Za 28 MHz, klasa A: 1500 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP071",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 28 MHz?",
        "options": [
          "300 W",
          "100 W",
          "50 W",
          "75 W"
        ],
        "correct": 1,
        "answer": "100 W",
        "explanation": "Za 28 MHz, klasa B: 100 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP072",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 28 MHz?",
        "options": [
          "100 W",
          "300 W",
          "1500 W",
          "Nije dozvoljeno prema ovoj tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 28 MHz, klasa C: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP073",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 50 MHz?",
        "options": [
          "50.000-51.900 MHz",
          "10.100-10.150 MHz",
          "432.000-438.000 MHz",
          "7.000-7.200 MHz"
        ],
        "correct": 0,
        "answer": "50.000-51.900 MHz",
        "explanation": "Band 50 MHz u tabeli ima opseg 50.000-51.900 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP074",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 50 MHz?",
        "options": [
          "15 m",
          "10 m",
          "6 m",
          "17 m"
        ],
        "correct": 2,
        "answer": "6 m",
        "explanation": "Za band 50 MHz navedena je talasna dužina 6 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP075",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 50.000-51.900 MHz?",
        "options": [
          "2.3 GHz",
          "3.5 MHz",
          "18 MHz",
          "50 MHz"
        ],
        "correct": 3,
        "answer": "50 MHz",
        "explanation": "Opseg 50.000-51.900 MHz pripada bandu 50 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP076",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - phone segmenti",
        "group": "Band plan - phone segmenti",
        "question": "Koji je Phone deo opsega za band 50 MHz?",
        "options": [
          "50.100-51.900 MHz",
          "21.151-21.450 MHz",
          "28.225-29.700 MHz",
          "1.840-2.000 MHz"
        ],
        "correct": 0,
        "answer": "50.100-51.900 MHz",
        "explanation": "Phone segment za 50 MHz je 50.100-51.900 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP077",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 50 MHz prema tabeli?",
        "options": [
          "A, B, C",
          "B",
          "A",
          "B, C"
        ],
        "correct": 2,
        "answer": "A",
        "explanation": "Za 50 MHz u koloni ARO klasa stoji: A.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP078",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 50 MHz?",
        "options": [
          "30 W",
          "100 W",
          "1500 W",
          "75 W"
        ],
        "correct": 1,
        "answer": "100 W",
        "explanation": "Za 50 MHz, klasa A: 100 W.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP079",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 50 MHz?",
        "options": [
          "Nije dozvoljeno prema ovoj tabeli",
          "1500 W",
          "300 W",
          "100 W"
        ],
        "correct": 0,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 50 MHz, klasa B: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP080",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 50 MHz?",
        "options": [
          "300 W",
          "1500 W",
          "Nije dozvoljeno prema ovoj tabeli",
          "100 W"
        ],
        "correct": 2,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 50 MHz, klasa C: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP081",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 144 MHz?",
        "options": [
          "1240-1300 MHz",
          "3.500-3.800 MHz",
          "144.000-146.000 MHz",
          "18.068-18.168 MHz"
        ],
        "correct": 2,
        "answer": "144.000-146.000 MHz",
        "explanation": "Band 144 MHz u tabeli ima opseg 144.000-146.000 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP082",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 144 MHz?",
        "options": [
          "15 m",
          "20 m",
          "80 m",
          "2 m"
        ],
        "correct": 3,
        "answer": "2 m",
        "explanation": "Za band 144 MHz navedena je talasna dužina 2 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP083",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 144.000-146.000 MHz?",
        "options": [
          "14 MHz",
          "3.5 MHz",
          "144 MHz",
          "2.3 GHz"
        ],
        "correct": 2,
        "answer": "144 MHz",
        "explanation": "Opseg 144.000-146.000 MHz pripada bandu 144 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP084",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - napomene",
        "group": "Band plan - napomene",
        "question": "Šta oznaka '*' u Phone koloni znači za band 144 MHz?",
        "options": [
          "Dozvoljen je samo CW",
          "Dozvoljen je samo radio-far",
          "Phone je zabranjen u celom opsegu",
          "Treba pogledati detaljniji pravilnik za taj opseg"
        ],
        "correct": 3,
        "answer": "Treba pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Zvezdica upućuje na detaljniji pravilnik / detaljniju tabelu.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP085",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 144 MHz prema tabeli?",
        "options": [
          "C",
          "A, B, C",
          "A, B",
          "A, C"
        ],
        "correct": 1,
        "answer": "A, B, C",
        "explanation": "Za 144 MHz u koloni ARO klasa stoji: A, B, C.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP086",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 144 MHz?",
        "options": [
          "1500 W",
          "100 W",
          "300 W",
          "Pogledati detaljniji pravilnik za taj opseg"
        ],
        "correct": 3,
        "answer": "Pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Za 144 MHz, klasa A: Pogledati detaljniji pravilnik za taj opseg.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP087",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 144 MHz?",
        "options": [
          "300 W",
          "1500 W",
          "100 W",
          "Pogledati detaljniji pravilnik za taj opseg"
        ],
        "correct": 3,
        "answer": "Pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Za 144 MHz, klasa B: Pogledati detaljniji pravilnik za taj opseg.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP088",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 144 MHz?",
        "options": [
          "1500 W",
          "300 W",
          "100 W",
          "Pogledati detaljniji pravilnik za taj opseg"
        ],
        "correct": 3,
        "answer": "Pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Za 144 MHz, klasa C: Pogledati detaljniji pravilnik za taj opseg.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP089",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 432 MHz?",
        "options": [
          "432.000-438.000 MHz",
          "144.000-146.000 MHz",
          "2300-2450 MHz",
          "14.000-14.350 MHz"
        ],
        "correct": 0,
        "answer": "432.000-438.000 MHz",
        "explanation": "Band 432 MHz u tabeli ima opseg 432.000-438.000 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP090",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 432 MHz?",
        "options": [
          "40 m",
          "0.7 m",
          "10 m",
          "2 m"
        ],
        "correct": 1,
        "answer": "0.7 m",
        "explanation": "Za band 432 MHz navedena je talasna dužina 0.7 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP091",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 432.000-438.000 MHz?",
        "options": [
          "14 MHz",
          "1.2 GHz",
          "1.8 MHz",
          "432 MHz"
        ],
        "correct": 3,
        "answer": "432 MHz",
        "explanation": "Opseg 432.000-438.000 MHz pripada bandu 432 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP092",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - napomene",
        "group": "Band plan - napomene",
        "question": "Šta oznaka '*' u Phone koloni znači za band 432 MHz?",
        "options": [
          "Dozvoljen je samo CW",
          "Phone je zabranjen u celom opsegu",
          "Treba pogledati detaljniji pravilnik za taj opseg",
          "Dozvoljen je samo radio-far"
        ],
        "correct": 2,
        "answer": "Treba pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Zvezdica upućuje na detaljniji pravilnik / detaljniju tabelu.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP093",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 432 MHz prema tabeli?",
        "options": [
          "A, B, C",
          "A",
          "A, B",
          "A, C"
        ],
        "correct": 0,
        "answer": "A, B, C",
        "explanation": "Za 432 MHz u koloni ARO klasa stoji: A, B, C.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP094",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 432 MHz?",
        "options": [
          "300 W",
          "100 W",
          "Pogledati detaljniji pravilnik za taj opseg",
          "1500 W"
        ],
        "correct": 2,
        "answer": "Pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Za 432 MHz, klasa A: Pogledati detaljniji pravilnik za taj opseg.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP095",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 432 MHz?",
        "options": [
          "100 W",
          "Pogledati detaljniji pravilnik za taj opseg",
          "300 W",
          "1500 W"
        ],
        "correct": 1,
        "answer": "Pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Za 432 MHz, klasa B: Pogledati detaljniji pravilnik za taj opseg.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP096",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 432 MHz?",
        "options": [
          "300 W",
          "Pogledati detaljniji pravilnik za taj opseg",
          "1500 W",
          "100 W"
        ],
        "correct": 1,
        "answer": "Pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Za 432 MHz, klasa C: Pogledati detaljniji pravilnik za taj opseg.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP097",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 1.2 GHz?",
        "options": [
          "3.500-3.800 MHz",
          "1240-1300 MHz",
          "7.000-7.200 MHz",
          "1.810-2.000 MHz"
        ],
        "correct": 1,
        "answer": "1240-1300 MHz",
        "explanation": "Band 1.2 GHz u tabeli ima opseg 1240-1300 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP098",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 1.2 GHz?",
        "options": [
          "0.23 m",
          "160 m",
          "80 m",
          "2 m"
        ],
        "correct": 0,
        "answer": "0.23 m",
        "explanation": "Za band 1.2 GHz navedena je talasna dužina 0.23 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP099",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 1240-1300 MHz?",
        "options": [
          "10 MHz",
          "14 MHz",
          "50 MHz",
          "1.2 GHz"
        ],
        "correct": 3,
        "answer": "1.2 GHz",
        "explanation": "Opseg 1240-1300 MHz pripada bandu 1.2 GHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP100",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - napomene",
        "group": "Band plan - napomene",
        "question": "Šta oznaka '*' u Phone koloni znači za band 1.2 GHz?",
        "options": [
          "Treba pogledati detaljniji pravilnik za taj opseg",
          "Dozvoljen je samo CW",
          "Dozvoljen je samo radio-far",
          "Phone je zabranjen u celom opsegu"
        ],
        "correct": 0,
        "answer": "Treba pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Zvezdica upućuje na detaljniji pravilnik / detaljniju tabelu.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP101",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 1.2 GHz prema tabeli?",
        "options": [
          "A",
          "B",
          "B, C",
          "A, B"
        ],
        "correct": 0,
        "answer": "A",
        "explanation": "Za 1.2 GHz u koloni ARO klasa stoji: A.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP102",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 1.2 GHz?",
        "options": [
          "300 W",
          "100 W",
          "Pogledati detaljniji pravilnik za taj opseg",
          "1500 W"
        ],
        "correct": 2,
        "answer": "Pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Za 1.2 GHz, klasa A: Pogledati detaljniji pravilnik za taj opseg.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP103",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 1.2 GHz?",
        "options": [
          "300 W",
          "Nije dozvoljeno prema ovoj tabeli",
          "100 W",
          "1500 W"
        ],
        "correct": 1,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 1.2 GHz, klasa B: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP104",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 1.2 GHz?",
        "options": [
          "100 W",
          "300 W",
          "1500 W",
          "Nije dozvoljeno prema ovoj tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 1.2 GHz, klasa C: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP105",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - osnovni opsezi",
        "group": "Band plan - osnovni opsezi",
        "question": "Koji je frekvencijski opseg za radio-amaterski band 2.3 GHz?",
        "options": [
          "14.000-14.350 MHz",
          "24.890-24.990 MHz",
          "2300-2450 MHz",
          "3.500-3.800 MHz"
        ],
        "correct": 2,
        "answer": "2300-2450 MHz",
        "explanation": "Band 2.3 GHz u tabeli ima opseg 2300-2450 MHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP106",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - talasne dužine",
        "group": "Band plan - talasne dužine",
        "question": "Koja je nominalna talasna dužina za band 2.3 GHz?",
        "options": [
          "20 m",
          "0.13 m",
          "0.23 m",
          "80 m"
        ],
        "correct": 1,
        "answer": "0.13 m",
        "explanation": "Za band 2.3 GHz navedena je talasna dužina 0.13 m.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP107",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - prepoznavanje opsega",
        "group": "Band plan - prepoznavanje opsega",
        "question": "Koji band odgovara opsegu 2300-2450 MHz?",
        "options": [
          "21 MHz",
          "2.3 GHz",
          "14 MHz",
          "1.8 MHz"
        ],
        "correct": 1,
        "answer": "2.3 GHz",
        "explanation": "Opseg 2300-2450 MHz pripada bandu 2.3 GHz.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP108",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - napomene",
        "group": "Band plan - napomene",
        "question": "Šta oznaka '*' u Phone koloni znači za band 2.3 GHz?",
        "options": [
          "Phone je zabranjen u celom opsegu",
          "Dozvoljen je samo radio-far",
          "Dozvoljen je samo CW",
          "Treba pogledati detaljniji pravilnik za taj opseg"
        ],
        "correct": 3,
        "answer": "Treba pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Zvezdica upućuje na detaljniji pravilnik / detaljniju tabelu.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP109",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - licence",
        "group": "Band plan - licence",
        "question": "Koje klase licence mogu koristiti band 2.3 GHz prema tabeli?",
        "options": [
          "A",
          "A, B, C",
          "A, C",
          "B, C"
        ],
        "correct": 0,
        "answer": "A",
        "explanation": "Za 2.3 GHz u koloni ARO klasa stoji: A.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP110",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu na bandu 2.3 GHz?",
        "options": [
          "300 W",
          "Pogledati detaljniji pravilnik za taj opseg",
          "100 W",
          "1500 W"
        ],
        "correct": 1,
        "answer": "Pogledati detaljniji pravilnik za taj opseg",
        "explanation": "Za 2.3 GHz, klasa A: Pogledati detaljniji pravilnik za taj opseg.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP111",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu na bandu 2.3 GHz?",
        "options": [
          "100 W",
          "1500 W",
          "300 W",
          "Nije dozvoljeno prema ovoj tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 2.3 GHz, klasa B: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP112",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Band plan - snage po licenci",
        "group": "Band plan - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu na bandu 2.3 GHz?",
        "options": [
          "100 W",
          "Nije dozvoljeno prema ovoj tabeli",
          "300 W",
          "1500 W"
        ],
        "correct": 1,
        "answer": "Nije dozvoljeno prema ovoj tabeli",
        "explanation": "Za 2.3 GHz, klasa C: Nije dozvoljeno prema ovoj tabeli.",
        "source": "Tabela: Plan namene frekventnih opsega"
      },
      {
        "id": "BP113",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 144.000-144.035 MHz (2m / 144MHz)?",
        "options": [
          "Sve vrste emisija osim CW, AM, SSB, FM",
          "CW, SSB, digitalne emisije",
          "Sve vrste emisija",
          "CW DX veze"
        ],
        "correct": 3,
        "answer": "CW DX veze",
        "explanation": "Deo 144.000-144.035 MHz namenjen je za: CW DX veze.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP114",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 2m / 144MHz je namenjen za: CW DX veze?",
        "options": [
          "144.995-145.200 MHz",
          "144.000-144.035 MHz",
          "144.400-144.500 MHz",
          "144.035-144.150 MHz"
        ],
        "correct": 1,
        "answer": "144.000-144.035 MHz",
        "explanation": "Za CW DX veze u opsegu 2m / 144MHz tabela navodi 144.000-144.035 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP115",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 144.000-144.035 MHz (CW DX veze)?",
        "options": [
          "50 W",
          "1500 W",
          "300 W",
          "30 W"
        ],
        "correct": 1,
        "answer": "1500 W",
        "explanation": "Za 144.000-144.035 MHz, namena CW DX veze, klasa A: 1500 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP116",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 144.000-144.035 MHz (CW DX veze)?",
        "options": [
          "1500 W",
          "75 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli",
          "30 W"
        ],
        "correct": 2,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 144.000-144.035 MHz, namena CW DX veze, klasa B: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP117",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 144.000-144.035 MHz (CW DX veze)?",
        "options": [
          "30 W",
          "1500 W",
          "75 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 144.000-144.035 MHz, namena CW DX veze, klasa C: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP118",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 144.035-144.150 MHz (2m / 144MHz)?",
        "options": [
          "Sve vrste emisija osim CW, AM, SSB, FM",
          "CW",
          "SSB",
          "Digitalne emisije"
        ],
        "correct": 1,
        "answer": "CW",
        "explanation": "Deo 144.035-144.150 MHz namenjen je za: CW.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP119",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 2m / 144MHz je namenjen za: CW?",
        "options": [
          "145.600-145.800 MHz",
          "144.500-144.800 MHz",
          "144.035-144.150 MHz",
          "145.800-146.000 MHz"
        ],
        "correct": 2,
        "answer": "144.035-144.150 MHz",
        "explanation": "Za CW u opsegu 2m / 144MHz tabela navodi 144.035-144.150 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP120",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 144.035-144.150 MHz (CW)?",
        "options": [
          "50 W",
          "30 W",
          "300 W",
          "1500 W"
        ],
        "correct": 3,
        "answer": "1500 W",
        "explanation": "Za 144.035-144.150 MHz, namena CW, klasa A: 1500 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP121",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 144.035-144.150 MHz (CW)?",
        "options": [
          "300 W",
          "30 W",
          "50 W",
          "75 W"
        ],
        "correct": 2,
        "answer": "50 W",
        "explanation": "Za 144.035-144.150 MHz, namena CW, klasa B: 50 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP122",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 144.035-144.150 MHz (CW)?",
        "options": [
          "30 W",
          "75 W",
          "1500 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 144.035-144.150 MHz, namena CW, klasa C: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP123",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 144.150-144.400 MHz (2m / 144MHz)?",
        "options": [
          "SSB",
          "CW",
          "Sve vrste emisija osim CW, AM, SSB, FM",
          "Sve vrste emisija"
        ],
        "correct": 0,
        "answer": "SSB",
        "explanation": "Deo 144.150-144.400 MHz namenjen je za: SSB.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP124",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 2m / 144MHz je namenjen za: SSB?",
        "options": [
          "145.600-145.800 MHz",
          "144.500-144.800 MHz",
          "145.800-146.000 MHz",
          "144.150-144.400 MHz"
        ],
        "correct": 3,
        "answer": "144.150-144.400 MHz",
        "explanation": "Za SSB u opsegu 2m / 144MHz tabela navodi 144.150-144.400 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP125",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 144.150-144.400 MHz (SSB)?",
        "options": [
          "75 W",
          "300 W",
          "50 W",
          "1500 W"
        ],
        "correct": 3,
        "answer": "1500 W",
        "explanation": "Za 144.150-144.400 MHz, namena SSB, klasa A: 1500 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP126",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 144.150-144.400 MHz (SSB)?",
        "options": [
          "300 W",
          "50 W",
          "1500 W",
          "75 W"
        ],
        "correct": 1,
        "answer": "50 W",
        "explanation": "Za 144.150-144.400 MHz, namena SSB, klasa B: 50 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP127",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 144.150-144.400 MHz (SSB)?",
        "options": [
          "50 W",
          "75 W",
          "1500 W",
          "300 W"
        ],
        "correct": 0,
        "answer": "50 W",
        "explanation": "Za 144.150-144.400 MHz, namena SSB, klasa C: 50 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP128",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 144.400-144.500 MHz (2m / 144MHz)?",
        "options": [
          "Rad preko satelita",
          "Repetitori - ulazne frekvencije FM",
          "Radio farovi",
          "SSB"
        ],
        "correct": 2,
        "answer": "Radio farovi",
        "explanation": "Deo 144.400-144.500 MHz namenjen je za: Radio farovi.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP129",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 2m / 144MHz je namenjen za: Radio farovi?",
        "options": [
          "144.500-144.800 MHz",
          "145.600-145.800 MHz",
          "144.400-144.500 MHz",
          "145.800-146.000 MHz"
        ],
        "correct": 2,
        "answer": "144.400-144.500 MHz",
        "explanation": "Za Radio farovi u opsegu 2m / 144MHz tabela navodi 144.400-144.500 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP130",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 144.400-144.500 MHz (Radio farovi)?",
        "options": [
          "30 W",
          "75 W",
          "1500 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 144.400-144.500 MHz, namena Radio farovi, klasa A: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP131",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 144.400-144.500 MHz (Radio farovi)?",
        "options": [
          "75 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli",
          "1500 W",
          "30 W"
        ],
        "correct": 1,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 144.400-144.500 MHz, namena Radio farovi, klasa B: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP132",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 144.400-144.500 MHz (Radio farovi)?",
        "options": [
          "Nije dozvoljeno / nema dozvoljene snage u tabeli",
          "75 W",
          "1500 W",
          "30 W"
        ],
        "correct": 0,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 144.400-144.500 MHz, namena Radio farovi, klasa C: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP133",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 144.500-144.800 MHz (2m / 144MHz)?",
        "options": [
          "Sve vrste emisija osim CW, AM, SSB, FM",
          "CW",
          "Repetitori - ulazne frekvencije FM",
          "Sve vrste emisija"
        ],
        "correct": 3,
        "answer": "Sve vrste emisija",
        "explanation": "Deo 144.500-144.800 MHz namenjen je za: Sve vrste emisija.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP134",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 2m / 144MHz je namenjen za: Sve vrste emisija?",
        "options": [
          "145.600-145.800 MHz",
          "145.200-145.600 MHz",
          "144.035-144.150 MHz",
          "144.500-144.800 MHz"
        ],
        "correct": 3,
        "answer": "144.500-144.800 MHz",
        "explanation": "Za Sve vrste emisija u opsegu 2m / 144MHz tabela navodi 144.500-144.800 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP135",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 144.500-144.800 MHz (Sve vrste emisija)?",
        "options": [
          "75 W",
          "300 W",
          "50 W",
          "1500 W"
        ],
        "correct": 1,
        "answer": "300 W",
        "explanation": "Za 144.500-144.800 MHz, namena Sve vrste emisija, klasa A: 300 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP136",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 144.500-144.800 MHz (Sve vrste emisija)?",
        "options": [
          "300 W",
          "50 W",
          "75 W",
          "30 W"
        ],
        "correct": 3,
        "answer": "30 W",
        "explanation": "Za 144.500-144.800 MHz, namena Sve vrste emisija, klasa B: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP137",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 144.500-144.800 MHz (Sve vrste emisija)?",
        "options": [
          "75 W",
          "300 W",
          "30 W",
          "1500 W"
        ],
        "correct": 2,
        "answer": "30 W",
        "explanation": "Za 144.500-144.800 MHz, namena Sve vrste emisija, klasa C: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP138",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 144.800-144.995 MHz (2m / 144MHz)?",
        "options": [
          "Digitalne emisije",
          "Rad preko satelita",
          "Repetitori - ulazne frekvencije FM",
          "FM - simpleksni kanali"
        ],
        "correct": 0,
        "answer": "Digitalne emisije",
        "explanation": "Deo 144.800-144.995 MHz namenjen je za: Digitalne emisije.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP139",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 2m / 144MHz je namenjen za: Digitalne emisije?",
        "options": [
          "144.500-144.800 MHz",
          "144.800-144.995 MHz",
          "145.200-145.600 MHz",
          "144.000-144.035 MHz"
        ],
        "correct": 1,
        "answer": "144.800-144.995 MHz",
        "explanation": "Za Digitalne emisije u opsegu 2m / 144MHz tabela navodi 144.800-144.995 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP140",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 144.800-144.995 MHz (Digitalne emisije)?",
        "options": [
          "1500 W",
          "50 W",
          "75 W",
          "300 W"
        ],
        "correct": 1,
        "answer": "50 W",
        "explanation": "Za 144.800-144.995 MHz, namena Digitalne emisije, klasa A: 50 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP141",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 144.800-144.995 MHz (Digitalne emisije)?",
        "options": [
          "300 W",
          "1500 W",
          "30 W",
          "75 W"
        ],
        "correct": 2,
        "answer": "30 W",
        "explanation": "Za 144.800-144.995 MHz, namena Digitalne emisije, klasa B: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP142",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 144.800-144.995 MHz (Digitalne emisije)?",
        "options": [
          "30 W",
          "75 W",
          "50 W",
          "300 W"
        ],
        "correct": 0,
        "answer": "30 W",
        "explanation": "Za 144.800-144.995 MHz, namena Digitalne emisije, klasa C: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP143",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 144.995-145.200 MHz (2m / 144MHz)?",
        "options": [
          "Repetitori - ulazne frekvencije FM",
          "FM - simpleksni kanali",
          "Radio farovi",
          "Sve vrste emisija"
        ],
        "correct": 0,
        "answer": "Repetitori - ulazne frekvencije FM",
        "explanation": "Deo 144.995-145.200 MHz namenjen je za: Repetitori - ulazne frekvencije FM.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP144",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 2m / 144MHz je namenjen za: Repetitori - ulazne frekvencije FM?",
        "options": [
          "144.800-144.995 MHz",
          "144.150-144.400 MHz",
          "144.995-145.200 MHz",
          "144.035-144.150 MHz"
        ],
        "correct": 2,
        "answer": "144.995-145.200 MHz",
        "explanation": "Za Repetitori - ulazne frekvencije FM u opsegu 2m / 144MHz tabela navodi 144.995-145.200 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP145",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 144.995-145.200 MHz (Repetitori - ulazne frekvencije FM)?",
        "options": [
          "30 W",
          "75 W",
          "50 W",
          "1500 W"
        ],
        "correct": 0,
        "answer": "30 W",
        "explanation": "Za 144.995-145.200 MHz, namena Repetitori - ulazne frekvencije FM, klasa A: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP146",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 144.995-145.200 MHz (Repetitori - ulazne frekvencije FM)?",
        "options": [
          "75 W",
          "1500 W",
          "30 W",
          "50 W"
        ],
        "correct": 2,
        "answer": "30 W",
        "explanation": "Za 144.995-145.200 MHz, namena Repetitori - ulazne frekvencije FM, klasa B: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP147",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 144.995-145.200 MHz (Repetitori - ulazne frekvencije FM)?",
        "options": [
          "1500 W",
          "75 W",
          "30 W",
          "50 W"
        ],
        "correct": 2,
        "answer": "30 W",
        "explanation": "Za 144.995-145.200 MHz, namena Repetitori - ulazne frekvencije FM, klasa C: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP148",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 145.200-145.600 MHz (2m / 144MHz)?",
        "options": [
          "Radio farovi",
          "Sve vrste emisija",
          "CW, SSB, digitalne emisije",
          "FM - simpleksni kanali"
        ],
        "correct": 3,
        "answer": "FM - simpleksni kanali",
        "explanation": "Deo 145.200-145.600 MHz namenjen je za: FM - simpleksni kanali.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP149",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 2m / 144MHz je namenjen za: FM - simpleksni kanali?",
        "options": [
          "145.200-145.600 MHz",
          "145.800-146.000 MHz",
          "144.800-144.995 MHz",
          "144.995-145.200 MHz"
        ],
        "correct": 0,
        "answer": "145.200-145.600 MHz",
        "explanation": "Za FM - simpleksni kanali u opsegu 2m / 144MHz tabela navodi 145.200-145.600 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP150",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 145.200-145.600 MHz (FM - simpleksni kanali)?",
        "options": [
          "30 W",
          "75 W",
          "300 W",
          "1500 W"
        ],
        "correct": 0,
        "answer": "30 W",
        "explanation": "Za 145.200-145.600 MHz, namena FM - simpleksni kanali, klasa A: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP151",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 145.200-145.600 MHz (FM - simpleksni kanali)?",
        "options": [
          "75 W",
          "1500 W",
          "300 W",
          "30 W"
        ],
        "correct": 3,
        "answer": "30 W",
        "explanation": "Za 145.200-145.600 MHz, namena FM - simpleksni kanali, klasa B: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP152",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 145.200-145.600 MHz (FM - simpleksni kanali)?",
        "options": [
          "300 W",
          "30 W",
          "50 W",
          "75 W"
        ],
        "correct": 1,
        "answer": "30 W",
        "explanation": "Za 145.200-145.600 MHz, namena FM - simpleksni kanali, klasa C: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP153",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 145.600-145.800 MHz (2m / 144MHz)?",
        "options": [
          "Repetitori - izlazne frekvencije FM",
          "SSB",
          "CW DX veze",
          "Repetitori - ulazne frekvencije FM"
        ],
        "correct": 0,
        "answer": "Repetitori - izlazne frekvencije FM",
        "explanation": "Deo 145.600-145.800 MHz namenjen je za: Repetitori - izlazne frekvencije FM.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP154",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 2m / 144MHz je namenjen za: Repetitori - izlazne frekvencije FM?",
        "options": [
          "144.035-144.150 MHz",
          "145.600-145.800 MHz",
          "144.000-144.035 MHz",
          "144.400-144.500 MHz"
        ],
        "correct": 1,
        "answer": "145.600-145.800 MHz",
        "explanation": "Za Repetitori - izlazne frekvencije FM u opsegu 2m / 144MHz tabela navodi 145.600-145.800 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP155",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 145.600-145.800 MHz (Repetitori - izlazne frekvencije FM)?",
        "options": [
          "1500 W",
          "75 W",
          "30 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 145.600-145.800 MHz, namena Repetitori - izlazne frekvencije FM, klasa A: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP156",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 145.600-145.800 MHz (Repetitori - izlazne frekvencije FM)?",
        "options": [
          "30 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli",
          "75 W",
          "1500 W"
        ],
        "correct": 1,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 145.600-145.800 MHz, namena Repetitori - izlazne frekvencije FM, klasa B: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP157",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 145.600-145.800 MHz (Repetitori - izlazne frekvencije FM)?",
        "options": [
          "1500 W",
          "75 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli",
          "30 W"
        ],
        "correct": 2,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 145.600-145.800 MHz, namena Repetitori - izlazne frekvencije FM, klasa C: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP158",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 145.800-146.000 MHz (2m / 144MHz)?",
        "options": [
          "Radio farovi",
          "CW DX veze",
          "SSB",
          "Rad preko satelita"
        ],
        "correct": 3,
        "answer": "Rad preko satelita",
        "explanation": "Deo 145.800-146.000 MHz namenjen je za: Rad preko satelita.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP159",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 2m / 144MHz je namenjen za: Rad preko satelita?",
        "options": [
          "144.150-144.400 MHz",
          "145.800-146.000 MHz",
          "144.500-144.800 MHz",
          "145.200-145.600 MHz"
        ],
        "correct": 1,
        "answer": "145.800-146.000 MHz",
        "explanation": "Za Rad preko satelita u opsegu 2m / 144MHz tabela navodi 145.800-146.000 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP160",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 145.800-146.000 MHz (Rad preko satelita)?",
        "options": [
          "75 W",
          "30 W",
          "300 W",
          "1500 W"
        ],
        "correct": 0,
        "answer": "75 W",
        "explanation": "Za 145.800-146.000 MHz, namena Rad preko satelita, klasa A: 75 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP161",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 145.800-146.000 MHz (Rad preko satelita)?",
        "options": [
          "1500 W",
          "300 W",
          "50 W",
          "75 W"
        ],
        "correct": 3,
        "answer": "75 W",
        "explanation": "Za 145.800-146.000 MHz, namena Rad preko satelita, klasa B: 75 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP162",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 145.800-146.000 MHz (Rad preko satelita)?",
        "options": [
          "300 W",
          "75 W",
          "50 W",
          "30 W"
        ],
        "correct": 1,
        "answer": "75 W",
        "explanation": "Za 145.800-146.000 MHz, namena Rad preko satelita, klasa C: 75 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP163",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 432.000-432.100 MHz (70cm / 432MHz)?",
        "options": [
          "CW",
          "Rad preko satelita",
          "Sve vrste emisija",
          "CW DX veze"
        ],
        "correct": 0,
        "answer": "CW",
        "explanation": "Deo 432.000-432.100 MHz namenjen je za: CW.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP164",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 70cm / 432MHz je namenjen za: CW?",
        "options": [
          "432.000-432.100 MHz",
          "432.100-432.400 MHz",
          "435.000-438.000 MHz",
          "432.400-432.500 MHz"
        ],
        "correct": 0,
        "answer": "432.000-432.100 MHz",
        "explanation": "Za CW u opsegu 70cm / 432MHz tabela navodi 432.000-432.100 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP165",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 432.000-432.100 MHz (CW)?",
        "options": [
          "75 W",
          "1500 W",
          "300 W",
          "30 W"
        ],
        "correct": 1,
        "answer": "1500 W",
        "explanation": "Za 432.000-432.100 MHz, namena CW, klasa A: 1500 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP166",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 432.000-432.100 MHz (CW)?",
        "options": [
          "50 W",
          "1500 W",
          "30 W",
          "300 W"
        ],
        "correct": 0,
        "answer": "50 W",
        "explanation": "Za 432.000-432.100 MHz, namena CW, klasa B: 50 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP167",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 432.000-432.100 MHz (CW)?",
        "options": [
          "75 W",
          "30 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli",
          "1500 W"
        ],
        "correct": 2,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 432.000-432.100 MHz, namena CW, klasa C: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP168",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 432.100-432.400 MHz (70cm / 432MHz)?",
        "options": [
          "CW",
          "Repetitori - izlazne frekvencije FM",
          "CW, SSB, digitalne emisije",
          "Radio farovi"
        ],
        "correct": 2,
        "answer": "CW, SSB, digitalne emisije",
        "explanation": "Deo 432.100-432.400 MHz namenjen je za: CW, SSB, digitalne emisije.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP169",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 70cm / 432MHz je namenjen za: CW, SSB, digitalne emisije?",
        "options": [
          "432.100-432.400 MHz",
          "435.000-438.000 MHz",
          "434.600-434.985 MHz",
          "433.000-433.400 MHz"
        ],
        "correct": 0,
        "answer": "432.100-432.400 MHz",
        "explanation": "Za CW, SSB, digitalne emisije u opsegu 70cm / 432MHz tabela navodi 432.100-432.400 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP170",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 432.100-432.400 MHz (CW, SSB, digitalne emisije)?",
        "options": [
          "50 W",
          "75 W",
          "1500 W",
          "300 W"
        ],
        "correct": 2,
        "answer": "1500 W",
        "explanation": "Za 432.100-432.400 MHz, namena CW, SSB, digitalne emisije, klasa A: 1500 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP171",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 432.100-432.400 MHz (CW, SSB, digitalne emisije)?",
        "options": [
          "75 W",
          "50 W",
          "1500 W",
          "30 W"
        ],
        "correct": 1,
        "answer": "50 W",
        "explanation": "Za 432.100-432.400 MHz, namena CW, SSB, digitalne emisije, klasa B: 50 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP172",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 432.100-432.400 MHz (CW, SSB, digitalne emisije)?",
        "options": [
          "300 W",
          "1500 W",
          "50 W",
          "75 W"
        ],
        "correct": 2,
        "answer": "50 W",
        "explanation": "Za 432.100-432.400 MHz, namena CW, SSB, digitalne emisije, klasa C: 50 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP173",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 432.400-432.500 MHz (70cm / 432MHz)?",
        "options": [
          "SSB",
          "Radio farovi",
          "Repetitori - izlazne frekvencije FM",
          "FM - simpleksni kanali"
        ],
        "correct": 1,
        "answer": "Radio farovi",
        "explanation": "Deo 432.400-432.500 MHz namenjen je za: Radio farovi.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP174",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 70cm / 432MHz je namenjen za: Radio farovi?",
        "options": [
          "432.500-433.000 MHz",
          "434.600-434.985 MHz",
          "432.400-432.500 MHz",
          "432.100-432.400 MHz"
        ],
        "correct": 2,
        "answer": "432.400-432.500 MHz",
        "explanation": "Za Radio farovi u opsegu 70cm / 432MHz tabela navodi 432.400-432.500 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP175",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 432.400-432.500 MHz (Radio farovi)?",
        "options": [
          "30 W",
          "75 W",
          "1500 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 432.400-432.500 MHz, namena Radio farovi, klasa A: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP176",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 432.400-432.500 MHz (Radio farovi)?",
        "options": [
          "Nije dozvoljeno / nema dozvoljene snage u tabeli",
          "30 W",
          "1500 W",
          "75 W"
        ],
        "correct": 0,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 432.400-432.500 MHz, namena Radio farovi, klasa B: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP177",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 432.400-432.500 MHz (Radio farovi)?",
        "options": [
          "30 W",
          "75 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli",
          "1500 W"
        ],
        "correct": 2,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 432.400-432.500 MHz, namena Radio farovi, klasa C: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP178",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 432.500-433.000 MHz (70cm / 432MHz)?",
        "options": [
          "Sve vrste emisija osim CW, AM, SSB, FM",
          "Sve vrste emisija",
          "CW",
          "Digitalne emisije"
        ],
        "correct": 1,
        "answer": "Sve vrste emisija",
        "explanation": "Deo 432.500-433.000 MHz namenjen je za: Sve vrste emisija.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP179",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 70cm / 432MHz je namenjen za: Sve vrste emisija?",
        "options": [
          "432.500-433.000 MHz",
          "434.600-434.985 MHz",
          "435.000-438.000 MHz",
          "433.000-433.400 MHz"
        ],
        "correct": 0,
        "answer": "432.500-433.000 MHz",
        "explanation": "Za Sve vrste emisija u opsegu 70cm / 432MHz tabela navodi 432.500-433.000 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP180",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 432.500-433.000 MHz (Sve vrste emisija)?",
        "options": [
          "300 W",
          "30 W",
          "75 W",
          "1500 W"
        ],
        "correct": 0,
        "answer": "300 W",
        "explanation": "Za 432.500-433.000 MHz, namena Sve vrste emisija, klasa A: 300 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP181",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 432.500-433.000 MHz (Sve vrste emisija)?",
        "options": [
          "50 W",
          "300 W",
          "30 W",
          "75 W"
        ],
        "correct": 2,
        "answer": "30 W",
        "explanation": "Za 432.500-433.000 MHz, namena Sve vrste emisija, klasa B: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP182",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 432.500-433.000 MHz (Sve vrste emisija)?",
        "options": [
          "75 W",
          "50 W",
          "300 W",
          "30 W"
        ],
        "correct": 3,
        "answer": "30 W",
        "explanation": "Za 432.500-433.000 MHz, namena Sve vrste emisija, klasa C: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP183",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 433.000-433.400 MHz (70cm / 432MHz)?",
        "options": [
          "Repetitori - izlazne frekvencije FM",
          "CW DX veze",
          "Repetitori - ulazne frekvencije FM",
          "CW"
        ],
        "correct": 2,
        "answer": "Repetitori - ulazne frekvencije FM",
        "explanation": "Deo 433.000-433.400 MHz namenjen je za: Repetitori - ulazne frekvencije FM.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP184",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 70cm / 432MHz je namenjen za: Repetitori - ulazne frekvencije FM?",
        "options": [
          "433.600-434.000 MHz",
          "433.000-433.400 MHz",
          "432.400-432.500 MHz",
          "435.000-438.000 MHz"
        ],
        "correct": 1,
        "answer": "433.000-433.400 MHz",
        "explanation": "Za Repetitori - ulazne frekvencije FM u opsegu 70cm / 432MHz tabela navodi 433.000-433.400 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP185",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 433.000-433.400 MHz (Repetitori - ulazne frekvencije FM)?",
        "options": [
          "300 W",
          "30 W",
          "75 W",
          "50 W"
        ],
        "correct": 1,
        "answer": "30 W",
        "explanation": "Za 433.000-433.400 MHz, namena Repetitori - ulazne frekvencije FM, klasa A: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP186",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 433.000-433.400 MHz (Repetitori - ulazne frekvencije FM)?",
        "options": [
          "75 W",
          "50 W",
          "1500 W",
          "30 W"
        ],
        "correct": 3,
        "answer": "30 W",
        "explanation": "Za 433.000-433.400 MHz, namena Repetitori - ulazne frekvencije FM, klasa B: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP187",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 433.000-433.400 MHz (Repetitori - ulazne frekvencije FM)?",
        "options": [
          "300 W",
          "50 W",
          "30 W",
          "75 W"
        ],
        "correct": 2,
        "answer": "30 W",
        "explanation": "Za 433.000-433.400 MHz, namena Repetitori - ulazne frekvencije FM, klasa C: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP188",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 433.400-433.600 MHz (70cm / 432MHz)?",
        "options": [
          "Sve vrste emisija",
          "FM - simpleksni kanali",
          "CW DX veze",
          "SSB"
        ],
        "correct": 1,
        "answer": "FM - simpleksni kanali",
        "explanation": "Deo 433.400-433.600 MHz namenjen je za: FM - simpleksni kanali.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP189",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 70cm / 432MHz je namenjen za: FM - simpleksni kanali?",
        "options": [
          "433.600-434.000 MHz",
          "433.400-433.600 MHz",
          "432.500-433.000 MHz",
          "435.000-438.000 MHz"
        ],
        "correct": 1,
        "answer": "433.400-433.600 MHz",
        "explanation": "Za FM - simpleksni kanali u opsegu 70cm / 432MHz tabela navodi 433.400-433.600 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP190",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 433.400-433.600 MHz (FM - simpleksni kanali)?",
        "options": [
          "50 W",
          "30 W",
          "1500 W",
          "300 W"
        ],
        "correct": 1,
        "answer": "30 W",
        "explanation": "Za 433.400-433.600 MHz, namena FM - simpleksni kanali, klasa A: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP191",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 433.400-433.600 MHz (FM - simpleksni kanali)?",
        "options": [
          "300 W",
          "30 W",
          "75 W",
          "1500 W"
        ],
        "correct": 1,
        "answer": "30 W",
        "explanation": "Za 433.400-433.600 MHz, namena FM - simpleksni kanali, klasa B: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP192",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 433.400-433.600 MHz (FM - simpleksni kanali)?",
        "options": [
          "300 W",
          "50 W",
          "30 W",
          "1500 W"
        ],
        "correct": 2,
        "answer": "30 W",
        "explanation": "Za 433.400-433.600 MHz, namena FM - simpleksni kanali, klasa C: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP193",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 433.600-434.000 MHz (70cm / 432MHz)?",
        "options": [
          "Sve vrste emisija osim CW, AM, SSB, FM",
          "SSB",
          "Sve vrste emisija",
          "Repetitori - izlazne frekvencije FM"
        ],
        "correct": 2,
        "answer": "Sve vrste emisija",
        "explanation": "Deo 433.600-434.000 MHz namenjen je za: Sve vrste emisija.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP194",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 70cm / 432MHz je namenjen za: Sve vrste emisija?",
        "options": [
          "433.400-433.600 MHz",
          "432.500-433.000 MHz",
          "434.600-434.985 MHz",
          "433.600-434.000 MHz"
        ],
        "correct": 3,
        "answer": "433.600-434.000 MHz",
        "explanation": "Za Sve vrste emisija u opsegu 70cm / 432MHz tabela navodi 433.600-434.000 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP195",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 433.600-434.000 MHz (Sve vrste emisija)?",
        "options": [
          "300 W",
          "75 W",
          "50 W",
          "30 W"
        ],
        "correct": 0,
        "answer": "300 W",
        "explanation": "Za 433.600-434.000 MHz, namena Sve vrste emisija, klasa A: 300 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP196",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 433.600-434.000 MHz (Sve vrste emisija)?",
        "options": [
          "1500 W",
          "50 W",
          "30 W",
          "300 W"
        ],
        "correct": 2,
        "answer": "30 W",
        "explanation": "Za 433.600-434.000 MHz, namena Sve vrste emisija, klasa B: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP197",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 433.600-434.000 MHz (Sve vrste emisija)?",
        "options": [
          "1500 W",
          "300 W",
          "30 W",
          "50 W"
        ],
        "correct": 2,
        "answer": "30 W",
        "explanation": "Za 433.600-434.000 MHz, namena Sve vrste emisija, klasa C: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP198",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 434.000-434.600 MHz (70cm / 432MHz)?",
        "options": [
          "Repetitori - izlazne frekvencije FM",
          "Sve vrste emisija osim CW, AM, SSB, FM",
          "Radio farovi",
          "Sve vrste emisija"
        ],
        "correct": 1,
        "answer": "Sve vrste emisija osim CW, AM, SSB, FM",
        "explanation": "Deo 434.000-434.600 MHz namenjen je za: Sve vrste emisija osim CW, AM, SSB, FM.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP199",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 70cm / 432MHz je namenjen za: Sve vrste emisija osim CW, AM, SSB, FM?",
        "options": [
          "432.000-432.100 MHz",
          "435.000-438.000 MHz",
          "434.600-434.985 MHz",
          "434.000-434.600 MHz"
        ],
        "correct": 3,
        "answer": "434.000-434.600 MHz",
        "explanation": "Za Sve vrste emisija osim CW, AM, SSB, FM u opsegu 70cm / 432MHz tabela navodi 434.000-434.600 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP200",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 434.000-434.600 MHz (Sve vrste emisija osim CW, AM, SSB, FM)?",
        "options": [
          "30 W",
          "1500 W",
          "300 W",
          "75 W"
        ],
        "correct": 2,
        "answer": "300 W",
        "explanation": "Za 434.000-434.600 MHz, namena Sve vrste emisija osim CW, AM, SSB, FM, klasa A: 300 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP201",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 434.000-434.600 MHz (Sve vrste emisija osim CW, AM, SSB, FM)?",
        "options": [
          "50 W",
          "75 W",
          "1500 W",
          "30 W"
        ],
        "correct": 3,
        "answer": "30 W",
        "explanation": "Za 434.000-434.600 MHz, namena Sve vrste emisija osim CW, AM, SSB, FM, klasa B: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP202",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 434.000-434.600 MHz (Sve vrste emisija osim CW, AM, SSB, FM)?",
        "options": [
          "75 W",
          "50 W",
          "300 W",
          "30 W"
        ],
        "correct": 3,
        "answer": "30 W",
        "explanation": "Za 434.000-434.600 MHz, namena Sve vrste emisija osim CW, AM, SSB, FM, klasa C: 30 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP203",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 434.600-434.985 MHz (70cm / 432MHz)?",
        "options": [
          "Radio farovi",
          "Digitalne emisije",
          "Repetitori - izlazne frekvencije FM",
          "CW DX veze"
        ],
        "correct": 2,
        "answer": "Repetitori - izlazne frekvencije FM",
        "explanation": "Deo 434.600-434.985 MHz namenjen je za: Repetitori - izlazne frekvencije FM.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP204",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 70cm / 432MHz je namenjen za: Repetitori - izlazne frekvencije FM?",
        "options": [
          "433.000-433.400 MHz",
          "432.000-432.100 MHz",
          "434.600-434.985 MHz",
          "432.500-433.000 MHz"
        ],
        "correct": 2,
        "answer": "434.600-434.985 MHz",
        "explanation": "Za Repetitori - izlazne frekvencije FM u opsegu 70cm / 432MHz tabela navodi 434.600-434.985 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP205",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 434.600-434.985 MHz (Repetitori - izlazne frekvencije FM)?",
        "options": [
          "Nije dozvoljeno / nema dozvoljene snage u tabeli",
          "1500 W",
          "75 W",
          "30 W"
        ],
        "correct": 0,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 434.600-434.985 MHz, namena Repetitori - izlazne frekvencije FM, klasa A: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP206",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 434.600-434.985 MHz (Repetitori - izlazne frekvencije FM)?",
        "options": [
          "Nije dozvoljeno / nema dozvoljene snage u tabeli",
          "30 W",
          "75 W",
          "1500 W"
        ],
        "correct": 0,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 434.600-434.985 MHz, namena Repetitori - izlazne frekvencije FM, klasa B: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP207",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 434.600-434.985 MHz (Repetitori - izlazne frekvencije FM)?",
        "options": [
          "1500 W",
          "75 W",
          "30 W",
          "Nije dozvoljeno / nema dozvoljene snage u tabeli"
        ],
        "correct": 3,
        "answer": "Nije dozvoljeno / nema dozvoljene snage u tabeli",
        "explanation": "Za 434.600-434.985 MHz, namena Repetitori - izlazne frekvencije FM, klasa C: Nije dozvoljeno / nema dozvoljene snage u tabeli.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP208",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - namena delova opsega",
        "group": "144/432 MHz - namena delova opsega",
        "question": "Čemu je namenjen deo opsega 435.000-438.000 MHz (70cm / 432MHz)?",
        "options": [
          "Repetitori - izlazne frekvencije FM",
          "Sve vrste emisija osim CW, AM, SSB, FM",
          "FM - simpleksni kanali",
          "Rad preko satelita"
        ],
        "correct": 3,
        "answer": "Rad preko satelita",
        "explanation": "Deo 435.000-438.000 MHz namenjen je za: Rad preko satelita.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP209",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - opseg prema nameni",
        "group": "144/432 MHz - opseg prema nameni",
        "question": "Koji deo opsega 70cm / 432MHz je namenjen za: Rad preko satelita?",
        "options": [
          "433.600-434.000 MHz",
          "433.400-433.600 MHz",
          "432.400-432.500 MHz",
          "435.000-438.000 MHz"
        ],
        "correct": 3,
        "answer": "435.000-438.000 MHz",
        "explanation": "Za Rad preko satelita u opsegu 70cm / 432MHz tabela navodi 435.000-438.000 MHz.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP210",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za A licencu u delu 435.000-438.000 MHz (Rad preko satelita)?",
        "options": [
          "75 W",
          "50 W",
          "30 W",
          "300 W"
        ],
        "correct": 0,
        "answer": "75 W",
        "explanation": "Za 435.000-438.000 MHz, namena Rad preko satelita, klasa A: 75 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP211",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za B licencu u delu 435.000-438.000 MHz (Rad preko satelita)?",
        "options": [
          "75 W",
          "300 W",
          "30 W",
          "1500 W"
        ],
        "correct": 0,
        "answer": "75 W",
        "explanation": "Za 435.000-438.000 MHz, namena Rad preko satelita, klasa B: 75 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP212",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "144/432 MHz - snage po licenci",
        "group": "144/432 MHz - snage po licenci",
        "question": "Kolika je maksimalno dozvoljena snaga za C licencu u delu 435.000-438.000 MHz (Rad preko satelita)?",
        "options": [
          "75 W",
          "1500 W",
          "300 W",
          "30 W"
        ],
        "correct": 0,
        "answer": "75 W",
        "explanation": "Za 435.000-438.000 MHz, namena Rad preko satelita, klasa C: 75 W.",
        "source": "Tabela: Plan opsega 144 MHz i 432 MHz"
      },
      {
        "id": "BP213",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Mapiranje licenci",
        "group": "Mapiranje licenci",
        "question": "Koja sadašnja licenca odgovara staroj 1. klasi u tabeli?",
        "options": [
          "C licenca",
          "Nijedna",
          "A licenca",
          "B licenca"
        ],
        "correct": 2,
        "answer": "A licenca",
        "explanation": "1. klasa = A licenca.",
        "source": "Napomena korisnika"
      },
      {
        "id": "BP214",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Mapiranje licenci",
        "group": "Mapiranje licenci",
        "question": "Koja sadašnja licenca odgovara staroj 3. klasi u tabeli?",
        "options": [
          "C licenca",
          "B licenca",
          "Nijedna",
          "A licenca"
        ],
        "correct": 1,
        "answer": "B licenca",
        "explanation": "3. klasa = B licenca.",
        "source": "Napomena korisnika"
      },
      {
        "id": "BP215",
        "bankId": "memo-band-plan",
        "section": "MEMO_BAND_PLAN",
        "topic": "Mapiranje licenci",
        "group": "Mapiranje licenci",
        "question": "Koja sadašnja licenca odgovara staroj 2. klasi u tabeli?",
        "options": [
          "Nijedna",
          "B licenca",
          "A licenca",
          "C licenca"
        ],
        "correct": 3,
        "answer": "C licenca",
        "explanation": "2. klasa = C licenca.",
        "source": "Napomena korisnika"
      }
    ],
    "questionCount": 215
  },
  {
    "bankId": "memo-dxcc-prefiksi",
    "title": "DXCC prefiksi država",
    "shortTitle": "DXCC",
    "description": "Trening prefiksa država po grupama: Balkan, Evropa, UK nacije, istočna Evropa, DX i slični prefiksi.",
    "category": "MEMORIZATION",
    "questions": [
      {
        "id": "DXCC001",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji DXCC prefiksi pripadaju Srbiji?",
        "options": [
          "YU, YT",
          "9A",
          "S5",
          "E7"
        ],
        "correct": 0,
        "answer": "YU, YT",
        "explanation": "Tačan odgovor je: YU, YT.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC002",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Država sa DXCC prefiksima YU i YT je:",
        "options": [
          "Srbija",
          "Hrvatska",
          "Slovenija",
          "Rumunija"
        ],
        "correct": 0,
        "answer": "Srbija",
        "explanation": "Tačan odgovor je: Srbija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC003",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji DXCC prefiks pripada Hrvatskoj?",
        "options": [
          "9A",
          "E7",
          "4O",
          "Z3"
        ],
        "correct": 0,
        "answer": "9A",
        "explanation": "Tačan odgovor je: 9A.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC004",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Država sa DXCC prefiksom 9A je:",
        "options": [
          "Hrvatska",
          "Srbija",
          "Albanija",
          "Bugarska"
        ],
        "correct": 0,
        "answer": "Hrvatska",
        "explanation": "Tačan odgovor je: Hrvatska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC005",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji DXCC prefiks pripada Bosni i Hercegovini?",
        "options": [
          "E7",
          "S5",
          "YO",
          "LZ"
        ],
        "correct": 0,
        "answer": "E7",
        "explanation": "Tačan odgovor je: E7.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC006",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Država sa DXCC prefiksom E7 je:",
        "options": [
          "Bosna i Hercegovina",
          "Crna Gora",
          "Severna Makedonija",
          "Slovenija"
        ],
        "correct": 0,
        "answer": "Bosna i Hercegovina",
        "explanation": "Tačan odgovor je: Bosna i Hercegovina.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC007",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji DXCC prefiks pripada Crnoj Gori?",
        "options": [
          "4O",
          "4X",
          "9H",
          "9A"
        ],
        "correct": 0,
        "answer": "4O",
        "explanation": "Tačan odgovor je: 4O.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC008",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Država sa DXCC prefiksom 4O je:",
        "options": [
          "Crna Gora",
          "Izrael",
          "Malta",
          "Hrvatska"
        ],
        "correct": 0,
        "answer": "Crna Gora",
        "explanation": "Tačan odgovor je: Crna Gora.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC009",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji DXCC prefiks pripada Sloveniji?",
        "options": [
          "S5",
          "SV",
          "SP",
          "SM"
        ],
        "correct": 0,
        "answer": "S5",
        "explanation": "Tačan odgovor je: S5.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC010",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Država sa DXCC prefiksom S5 je:",
        "options": [
          "Slovenija",
          "Grčka",
          "Poljska",
          "Švedska"
        ],
        "correct": 0,
        "answer": "Slovenija",
        "explanation": "Tačan odgovor je: Slovenija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC011",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji DXCC prefiks pripada Severnoj Makedoniji?",
        "options": [
          "Z3",
          "ZA",
          "ZS",
          "ZL"
        ],
        "correct": 0,
        "answer": "Z3",
        "explanation": "Tačan odgovor je: Z3.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC012",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Država sa DXCC prefiksom Z3 je:",
        "options": [
          "Severna Makedonija",
          "Albanija",
          "Južna Afrika",
          "Novi Zeland"
        ],
        "correct": 0,
        "answer": "Severna Makedonija",
        "explanation": "Tačan odgovor je: Severna Makedonija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC013",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji DXCC prefiks pripada Albaniji?",
        "options": [
          "ZA",
          "Z3",
          "9A",
          "HA"
        ],
        "correct": 0,
        "answer": "ZA",
        "explanation": "Tačan odgovor je: ZA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC014",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Država sa DXCC prefiksom ZA je:",
        "options": [
          "Albanija",
          "Severna Makedonija",
          "Hrvatska",
          "Mađarska"
        ],
        "correct": 0,
        "answer": "Albanija",
        "explanation": "Tačan odgovor je: Albanija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC015",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji DXCC prefiks pripada Bugarskoj?",
        "options": [
          "LZ",
          "LY",
          "LX",
          "LA"
        ],
        "correct": 0,
        "answer": "LZ",
        "explanation": "Tačan odgovor je: LZ.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC016",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Država sa DXCC prefiksom LZ je:",
        "options": [
          "Bugarska",
          "Litvanija",
          "Norveška",
          "Luksemburg"
        ],
        "correct": 0,
        "answer": "Bugarska",
        "explanation": "Tačan odgovor je: Bugarska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC017",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji DXCC prefiks pripada Rumuniji?",
        "options": [
          "YO, YR",
          "YU, YT",
          "YL",
          "YB"
        ],
        "correct": 0,
        "answer": "YO, YR",
        "explanation": "Tačan odgovor je: YO, YR.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC018",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Država sa DXCC prefiksima YO i YR je:",
        "options": [
          "Rumunija",
          "Srbija",
          "Letonija",
          "Indonezija"
        ],
        "correct": 0,
        "answer": "Rumunija",
        "explanation": "Tačan odgovor je: Rumunija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC019",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji DXCC prefiks pripada Grčkoj?",
        "options": [
          "SV",
          "S5",
          "SM",
          "SP"
        ],
        "correct": 0,
        "answer": "SV",
        "explanation": "Tačan odgovor je: SV.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC020",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Država sa DXCC prefiksom SV je:",
        "options": [
          "Grčka",
          "Slovenija",
          "Švedska",
          "Poljska"
        ],
        "correct": 0,
        "answer": "Grčka",
        "explanation": "Tačan odgovor je: Grčka.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC021",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji par je tačan?",
        "options": [
          "Srbija - YU, YT",
          "Srbija - S5",
          "Srbija - 9A",
          "Srbija - E7"
        ],
        "correct": 0,
        "answer": "Srbija - YU, YT",
        "explanation": "Tačan odgovor je: Srbija - YU, YT.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC022",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji par je tačan?",
        "options": [
          "Hrvatska - 9A",
          "Hrvatska - HA",
          "Hrvatska - HB",
          "Hrvatska - HZ"
        ],
        "correct": 0,
        "answer": "Hrvatska - 9A",
        "explanation": "Tačan odgovor je: Hrvatska - 9A.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC023",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji par je tačan?",
        "options": [
          "Bosna i Hercegovina - E7",
          "Bosna i Hercegovina - EU",
          "Bosna i Hercegovina - ES",
          "Bosna i Hercegovina - EA"
        ],
        "correct": 0,
        "answer": "Bosna i Hercegovina - E7",
        "explanation": "Tačan odgovor je: Bosna i Hercegovina - E7.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC024",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji par je tačan?",
        "options": [
          "Crna Gora - 4O",
          "Crna Gora - 4X",
          "Crna Gora - 4L",
          "Crna Gora - 4K"
        ],
        "correct": 0,
        "answer": "Crna Gora - 4O",
        "explanation": "Tačan odgovor je: Crna Gora - 4O.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC025",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji par je tačan?",
        "options": [
          "Slovenija - S5",
          "Slovenija - SV",
          "Slovenija - SP",
          "Slovenija - SM"
        ],
        "correct": 0,
        "answer": "Slovenija - S5",
        "explanation": "Tačan odgovor je: Slovenija - S5.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC026",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji par NIJE tačan?",
        "options": [
          "Srbija - 9A",
          "Hrvatska - 9A",
          "Bosna i Hercegovina - E7",
          "Crna Gora - 4O"
        ],
        "correct": 0,
        "answer": "Srbija - 9A",
        "explanation": "Tačan odgovor je: Srbija - 9A.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC027",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji par NIJE tačan?",
        "options": [
          "Slovenija - YO",
          "Slovenija - S5",
          "Rumunija - YO, YR",
          "Bugarska - LZ"
        ],
        "correct": 0,
        "answer": "Slovenija - YO",
        "explanation": "Tačan odgovor je: Slovenija - YO.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC028",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji par NIJE tačan?",
        "options": [
          "Grčka - 9A",
          "Grčka - SV",
          "Albanija - ZA",
          "Severna Makedonija - Z3"
        ],
        "correct": 0,
        "answer": "Grčka - 9A",
        "explanation": "Tačan odgovor je: Grčka - 9A.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC029",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji prefiks pripada državi iz neposrednog okruženja Srbije?",
        "options": [
          "4O",
          "VK",
          "PY",
          "JA"
        ],
        "correct": 0,
        "answer": "4O",
        "explanation": "Tačan odgovor je: 4O.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC030",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Balkan i okruženje",
        "group": "Balkan i okruženje",
        "question": "Koji od navedenih prefiksa pripada balkanskoj državi?",
        "options": [
          "LZ",
          "VE",
          "LU",
          "BY"
        ],
        "correct": 0,
        "answer": "LZ",
        "explanation": "Tačan odgovor je: LZ.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC031",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji DXCC prefiks pripada Austriji?",
        "options": [
          "OE",
          "OM",
          "OK",
          "ON"
        ],
        "correct": 0,
        "answer": "OE",
        "explanation": "Tačan odgovor je: OE.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC032",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Država sa DXCC prefiksom OE je:",
        "options": [
          "Austrija",
          "Slovačka",
          "Češka",
          "Belgija"
        ],
        "correct": 0,
        "answer": "Austrija",
        "explanation": "Tačan odgovor je: Austrija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC033",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji DXCC prefiks pripada Mađarskoj?",
        "options": [
          "HA, HG",
          "HB",
          "HB, HE",
          "HV"
        ],
        "correct": 0,
        "answer": "HA, HG",
        "explanation": "Tačan odgovor je: HA, HG.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC034",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Država sa DXCC prefiksima HA i HG je:",
        "options": [
          "Mađarska",
          "Švajcarska",
          "Italija",
          "Austrija"
        ],
        "correct": 0,
        "answer": "Mađarska",
        "explanation": "Tačan odgovor je: Mađarska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC035",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji DXCC prefiksi pripadaju Češkoj?",
        "options": [
          "OK, OL",
          "OM",
          "OE",
          "OZ"
        ],
        "correct": 0,
        "answer": "OK, OL",
        "explanation": "Tačan odgovor je: OK, OL.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC036",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Država sa DXCC prefiksima OK i OL je:",
        "options": [
          "Češka",
          "Slovačka",
          "Austrija",
          "Danska"
        ],
        "correct": 0,
        "answer": "Češka",
        "explanation": "Tačan odgovor je: Češka.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC037",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji DXCC prefiks pripada Slovačkoj?",
        "options": [
          "OM",
          "OK",
          "OE",
          "ON"
        ],
        "correct": 0,
        "answer": "OM",
        "explanation": "Tačan odgovor je: OM.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC038",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Država sa DXCC prefiksom OM je:",
        "options": [
          "Slovačka",
          "Češka",
          "Austrija",
          "Belgija"
        ],
        "correct": 0,
        "answer": "Slovačka",
        "explanation": "Tačan odgovor je: Slovačka.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC039",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji DXCC prefiks pripada Nemačkoj?",
        "options": [
          "DL",
          "F",
          "I",
          "G"
        ],
        "correct": 0,
        "answer": "DL",
        "explanation": "Tačan odgovor je: DL.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC040",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Država sa DXCC prefiksom DL je:",
        "options": [
          "Nemačka",
          "Francuska",
          "Italija",
          "Engleska"
        ],
        "correct": 0,
        "answer": "Nemačka",
        "explanation": "Tačan odgovor je: Nemačka.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC041",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji DXCC prefiks pripada Švajcarskoj?",
        "options": [
          "HB, HE",
          "HA, HG",
          "HV",
          "HZ"
        ],
        "correct": 0,
        "answer": "HB, HE",
        "explanation": "Tačan odgovor je: HB, HE.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC042",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Država sa DXCC prefiksima HB i HE je:",
        "options": [
          "Švajcarska",
          "Mađarska",
          "Vatikan",
          "Saudijska Arabija"
        ],
        "correct": 0,
        "answer": "Švajcarska",
        "explanation": "Tačan odgovor je: Švajcarska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC043",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji DXCC prefiks pripada Poljskoj?",
        "options": [
          "SP",
          "S5",
          "SV",
          "SM"
        ],
        "correct": 0,
        "answer": "SP",
        "explanation": "Tačan odgovor je: SP.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC044",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Država sa DXCC prefiksom SP je:",
        "options": [
          "Poljska",
          "Slovenija",
          "Grčka",
          "Švedska"
        ],
        "correct": 0,
        "answer": "Poljska",
        "explanation": "Tačan odgovor je: Poljska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC045",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji par je tačan?",
        "options": [
          "Austrija - OE",
          "Austrija - OM",
          "Austrija - OK",
          "Austrija - OZ"
        ],
        "correct": 0,
        "answer": "Austrija - OE",
        "explanation": "Tačan odgovor je: Austrija - OE.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC046",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji par je tačan?",
        "options": [
          "Mađarska - HA, HG",
          "Mađarska - HB, HE",
          "Mađarska - DL",
          "Mađarska - OE"
        ],
        "correct": 0,
        "answer": "Mađarska - HA, HG",
        "explanation": "Tačan odgovor je: Mađarska - HA, HG.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC047",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji par je tačan?",
        "options": [
          "Češka - OK, OL",
          "Češka - OM",
          "Češka - OE",
          "Češka - OZ"
        ],
        "correct": 0,
        "answer": "Češka - OK, OL",
        "explanation": "Tačan odgovor je: Češka - OK, OL.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC048",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji par je tačan?",
        "options": [
          "Slovačka - OM",
          "Slovačka - OK",
          "Slovačka - OE",
          "Slovačka - ON"
        ],
        "correct": 0,
        "answer": "Slovačka - OM",
        "explanation": "Tačan odgovor je: Slovačka - OM.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC049",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji par NIJE tačan?",
        "options": [
          "Austrija - OK",
          "Austrija - OE",
          "Nemačka - DL",
          "Poljska - SP"
        ],
        "correct": 0,
        "answer": "Austrija - OK",
        "explanation": "Tačan odgovor je: Austrija - OK.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC050",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Centralna Evropa",
        "group": "Centralna Evropa",
        "question": "Koji par NIJE tačan?",
        "options": [
          "Švajcarska - HA",
          "Švajcarska - HB",
          "Mađarska - HA",
          "Češka - OK"
        ],
        "correct": 0,
        "answer": "Švajcarska - HA",
        "explanation": "Tačan odgovor je: Švajcarska - HA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC051",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Francuskoj?",
        "options": [
          "F",
          "I",
          "G",
          "CT"
        ],
        "correct": 0,
        "answer": "F",
        "explanation": "Tačan odgovor je: F.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC052",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksom F je:",
        "options": [
          "Francuska",
          "Italija",
          "Engleska",
          "Portugal"
        ],
        "correct": 0,
        "answer": "Francuska",
        "explanation": "Tačan odgovor je: Francuska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC053",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Italiji?",
        "options": [
          "I",
          "F",
          "G",
          "EI"
        ],
        "correct": 0,
        "answer": "I",
        "explanation": "Tačan odgovor je: I.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC054",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksom I je:",
        "options": [
          "Italija",
          "Francuska",
          "Engleska",
          "Irska"
        ],
        "correct": 0,
        "answer": "Italija",
        "explanation": "Tačan odgovor je: Italija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC055",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Španiji?",
        "options": [
          "EA",
          "EI",
          "ES",
          "ER"
        ],
        "correct": 0,
        "answer": "EA",
        "explanation": "Tačan odgovor je: EA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC056",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksom EA je:",
        "options": [
          "Španija",
          "Irska",
          "Estonija",
          "Moldavija"
        ],
        "correct": 0,
        "answer": "Španija",
        "explanation": "Tačan odgovor je: Španija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC057",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Portugalu?",
        "options": [
          "CT",
          "CE",
          "CX",
          "CN"
        ],
        "correct": 0,
        "answer": "CT",
        "explanation": "Tačan odgovor je: CT.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC058",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksom CT je:",
        "options": [
          "Portugal",
          "Čile",
          "Urugvaj",
          "Maroko"
        ],
        "correct": 0,
        "answer": "Portugal",
        "explanation": "Tačan odgovor je: Portugal.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC059",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Irskoj?",
        "options": [
          "EI, EJ",
          "ES",
          "ER",
          "EA"
        ],
        "correct": 0,
        "answer": "EI, EJ",
        "explanation": "Tačan odgovor je: EI, EJ.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC060",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksima EI i EJ je:",
        "options": [
          "Irska",
          "Estonija",
          "Moldavija",
          "Španija"
        ],
        "correct": 0,
        "answer": "Irska",
        "explanation": "Tačan odgovor je: Irska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC061",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Holandiji?",
        "options": [
          "PA",
          "ON",
          "OZ",
          "LA"
        ],
        "correct": 0,
        "answer": "PA",
        "explanation": "Tačan odgovor je: PA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC062",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksom PA je:",
        "options": [
          "Holandija",
          "Belgija",
          "Danska",
          "Norveška"
        ],
        "correct": 0,
        "answer": "Holandija",
        "explanation": "Tačan odgovor je: Holandija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC063",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Belgiji?",
        "options": [
          "ON",
          "PA",
          "OZ",
          "LA"
        ],
        "correct": 0,
        "answer": "ON",
        "explanation": "Tačan odgovor je: ON.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC064",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksom ON je:",
        "options": [
          "Belgija",
          "Holandija",
          "Danska",
          "Norveška"
        ],
        "correct": 0,
        "answer": "Belgija",
        "explanation": "Tačan odgovor je: Belgija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC065",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Danskoj?",
        "options": [
          "OZ",
          "ON",
          "OE",
          "OM"
        ],
        "correct": 0,
        "answer": "OZ",
        "explanation": "Tačan odgovor je: OZ.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC066",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksom OZ je:",
        "options": [
          "Danska",
          "Belgija",
          "Austrija",
          "Slovačka"
        ],
        "correct": 0,
        "answer": "Danska",
        "explanation": "Tačan odgovor je: Danska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC067",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Norveškoj?",
        "options": [
          "LA",
          "LY",
          "LZ",
          "LX"
        ],
        "correct": 0,
        "answer": "LA",
        "explanation": "Tačan odgovor je: LA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC068",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksom LA je:",
        "options": [
          "Norveška",
          "Litvanija",
          "Bugarska",
          "Luksemburg"
        ],
        "correct": 0,
        "answer": "Norveška",
        "explanation": "Tačan odgovor je: Norveška.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC069",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Švedskoj?",
        "options": [
          "SM",
          "S5",
          "SV",
          "SP"
        ],
        "correct": 0,
        "answer": "SM",
        "explanation": "Tačan odgovor je: SM.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC070",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksom SM je:",
        "options": [
          "Švedska",
          "Slovenija",
          "Grčka",
          "Poljska"
        ],
        "correct": 0,
        "answer": "Švedska",
        "explanation": "Tačan odgovor je: Švedska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC071",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Finskoj?",
        "options": [
          "OH",
          "OY",
          "OZ",
          "ON"
        ],
        "correct": 0,
        "answer": "OH",
        "explanation": "Tačan odgovor je: OH.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC072",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksom OH je:",
        "options": [
          "Finska",
          "Farska Ostrva",
          "Danska",
          "Belgija"
        ],
        "correct": 0,
        "answer": "Finska",
        "explanation": "Tačan odgovor je: Finska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC073",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji DXCC prefiks pripada Islandu?",
        "options": [
          "TF",
          "TA",
          "CT",
          "F"
        ],
        "correct": 0,
        "answer": "TF",
        "explanation": "Tačan odgovor je: TF.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC074",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Država sa DXCC prefiksom TF je:",
        "options": [
          "Island",
          "Turska",
          "Portugal",
          "Francuska"
        ],
        "correct": 0,
        "answer": "Island",
        "explanation": "Tačan odgovor je: Island.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC075",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji par je tačan?",
        "options": [
          "Island - TF",
          "Island - TA",
          "Island - CT",
          "Island - F"
        ],
        "correct": 0,
        "answer": "Island - TF",
        "explanation": "Tačan odgovor je: Island - TF.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC076",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji prefiks NE pripada Islandu?",
        "options": [
          "TA",
          "TF",
          "OY",
          "LA"
        ],
        "correct": 0,
        "answer": "TA",
        "explanation": "TA ne pripada Islandu; TF je DXCC prefiks za Island. OY je Farska Ostrva, LA je Norveška.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC077",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji par je tačan?",
        "options": [
          "Francuska - F",
          "Francuska - I",
          "Francuska - G",
          "Francuska - CT"
        ],
        "correct": 0,
        "answer": "Francuska - F",
        "explanation": "Tačan odgovor je: Francuska - F.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC078",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji par je tačan?",
        "options": [
          "Italija - I",
          "Italija - F",
          "Italija - G",
          "Italija - EI"
        ],
        "correct": 0,
        "answer": "Italija - I",
        "explanation": "Tačan odgovor je: Italija - I.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC079",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji par je tačan?",
        "options": [
          "Španija - EA",
          "Španija - EI",
          "Španija - ES",
          "Španija - ER"
        ],
        "correct": 0,
        "answer": "Španija - EA",
        "explanation": "Tačan odgovor je: Španija - EA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC080",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zapadna, južna i severna Evropa",
        "group": "Zapadna, južna i severna Evropa",
        "question": "Koji par je tačan?",
        "options": [
          "Portugal - CT",
          "Portugal - CE",
          "Portugal - CX",
          "Portugal - CN"
        ],
        "correct": 0,
        "answer": "Portugal - CT",
        "explanation": "Tačan odgovor je: Portugal - CT.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC081",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Koji DXCC prefiks pripada Engleskoj?",
        "options": [
          "G",
          "GM",
          "GW",
          "GI"
        ],
        "correct": 0,
        "answer": "G",
        "explanation": "Tačan odgovor je: G.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC082",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Država sa DXCC prefiksom G je:",
        "options": [
          "Engleska",
          "Škotska",
          "Vels",
          "Severna Irska"
        ],
        "correct": 0,
        "answer": "Engleska",
        "explanation": "Tačan odgovor je: Engleska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC083",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Koji DXCC prefiks pripada Škotskoj?",
        "options": [
          "GM",
          "G",
          "GW",
          "GI"
        ],
        "correct": 0,
        "answer": "GM",
        "explanation": "Tačan odgovor je: GM.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC084",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Država sa DXCC prefiksom GM je:",
        "options": [
          "Škotska",
          "Engleska",
          "Vels",
          "Severna Irska"
        ],
        "correct": 0,
        "answer": "Škotska",
        "explanation": "Tačan odgovor je: Škotska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC085",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Koji DXCC prefiks pripada Velsu?",
        "options": [
          "GW",
          "G",
          "GM",
          "GI"
        ],
        "correct": 0,
        "answer": "GW",
        "explanation": "Tačan odgovor je: GW.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC086",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Država sa DXCC prefiksom GW je:",
        "options": [
          "Vels",
          "Engleska",
          "Škotska",
          "Severna Irska"
        ],
        "correct": 0,
        "answer": "Vels",
        "explanation": "Tačan odgovor je: Vels.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC087",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Koji DXCC prefiks pripada Severnoj Irskoj?",
        "options": [
          "GI",
          "G",
          "GM",
          "GW"
        ],
        "correct": 0,
        "answer": "GI",
        "explanation": "Tačan odgovor je: GI.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC088",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Država sa DXCC prefiksom GI je:",
        "options": [
          "Severna Irska",
          "Engleska",
          "Škotska",
          "Vels"
        ],
        "correct": 0,
        "answer": "Severna Irska",
        "explanation": "Tačan odgovor je: Severna Irska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC089",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Koji skup prefiksa pripada delovima Ujedinjenog Kraljevstva iz tabele?",
        "options": [
          "G, GM, GW, GI",
          "F, I, EA, CT",
          "YU, 9A, E7, S5",
          "DL, OE, HB, HA"
        ],
        "correct": 0,
        "answer": "G, GM, GW, GI",
        "explanation": "Tačan odgovor je: G, GM, GW, GI.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC090",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Koji par je tačan?",
        "options": [
          "Engleska - G",
          "Engleska - GM",
          "Engleska - GW",
          "Engleska - GI"
        ],
        "correct": 0,
        "answer": "Engleska - G",
        "explanation": "Tačan odgovor je: Engleska - G.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC091",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Koji par je tačan?",
        "options": [
          "Škotska - GM",
          "Škotska - G",
          "Škotska - GW",
          "Škotska - GI"
        ],
        "correct": 0,
        "answer": "Škotska - GM",
        "explanation": "Tačan odgovor je: Škotska - GM.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC092",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Koji par je tačan?",
        "options": [
          "Vels - GW",
          "Vels - G",
          "Vels - GM",
          "Vels - GI"
        ],
        "correct": 0,
        "answer": "Vels - GW",
        "explanation": "Tačan odgovor je: Vels - GW.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC093",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Koji par je tačan?",
        "options": [
          "Severna Irska - GI",
          "Severna Irska - G",
          "Severna Irska - GM",
          "Severna Irska - GW"
        ],
        "correct": 0,
        "answer": "Severna Irska - GI",
        "explanation": "Tačan odgovor je: Severna Irska - GI.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC094",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Koji par NIJE tačan?",
        "options": [
          "Engleska - GM",
          "Engleska - G",
          "Škotska - GM",
          "Vels - GW"
        ],
        "correct": 0,
        "answer": "Engleska - GM",
        "explanation": "Tačan odgovor je: Engleska - GM.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC095",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Velika Britanija i ostrva",
        "group": "Velika Britanija i ostrva",
        "question": "Koji par NIJE tačan?",
        "options": [
          "Severna Irska - GW",
          "Severna Irska - GI",
          "Škotska - GM",
          "Engleska - G"
        ],
        "correct": 0,
        "answer": "Severna Irska - GW",
        "explanation": "Tačan odgovor je: Severna Irska - GW.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC096",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji DXCC prefiks pripada Rusiji?",
        "options": [
          "UA",
          "UR",
          "EU",
          "ER"
        ],
        "correct": 0,
        "answer": "UA",
        "explanation": "Tačan odgovor je: UA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC097",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Država sa DXCC prefiksom UA je:",
        "options": [
          "Rusija",
          "Ukrajina",
          "Belorusija",
          "Moldavija"
        ],
        "correct": 0,
        "answer": "Rusija",
        "explanation": "Tačan odgovor je: Rusija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC098",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji DXCC prefiks pripada Ukrajini?",
        "options": [
          "UR",
          "UA",
          "EU",
          "ER"
        ],
        "correct": 0,
        "answer": "UR",
        "explanation": "Tačan odgovor je: UR.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC099",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Država sa DXCC prefiksom UR je:",
        "options": [
          "Ukrajina",
          "Rusija",
          "Belorusija",
          "Moldavija"
        ],
        "correct": 0,
        "answer": "Ukrajina",
        "explanation": "Tačan odgovor je: Ukrajina.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC100",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji DXCC prefiks pripada Belorusiji?",
        "options": [
          "EU",
          "UA",
          "UR",
          "ER"
        ],
        "correct": 0,
        "answer": "EU",
        "explanation": "Tačan odgovor je: EU.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC101",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Država sa DXCC prefiksom EU je:",
        "options": [
          "Belorusija",
          "Rusija",
          "Ukrajina",
          "Moldavija"
        ],
        "correct": 0,
        "answer": "Belorusija",
        "explanation": "Tačan odgovor je: Belorusija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC102",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji DXCC prefiks pripada Moldaviji?",
        "options": [
          "ER",
          "EU",
          "ES",
          "EI"
        ],
        "correct": 0,
        "answer": "ER",
        "explanation": "Tačan odgovor je: ER.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC103",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Država sa DXCC prefiksom ER je:",
        "options": [
          "Moldavija",
          "Belorusija",
          "Estonija",
          "Irska"
        ],
        "correct": 0,
        "answer": "Moldavija",
        "explanation": "Tačan odgovor je: Moldavija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC104",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji DXCC prefiks pripada Estoniji?",
        "options": [
          "ES",
          "ER",
          "EI",
          "EU"
        ],
        "correct": 0,
        "answer": "ES",
        "explanation": "Tačan odgovor je: ES.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC105",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Država sa DXCC prefiksom ES je:",
        "options": [
          "Estonija",
          "Moldavija",
          "Irska",
          "Belorusija"
        ],
        "correct": 0,
        "answer": "Estonija",
        "explanation": "Tačan odgovor je: Estonija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC106",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji DXCC prefiks pripada Letoniji?",
        "options": [
          "YL",
          "LY",
          "LZ",
          "LA"
        ],
        "correct": 0,
        "answer": "YL",
        "explanation": "Tačan odgovor je: YL.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC107",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Država sa DXCC prefiksom YL je:",
        "options": [
          "Letonija",
          "Litvanija",
          "Bugarska",
          "Norveška"
        ],
        "correct": 0,
        "answer": "Letonija",
        "explanation": "Tačan odgovor je: Letonija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC108",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji DXCC prefiks pripada Litvaniji?",
        "options": [
          "LY",
          "YL",
          "LZ",
          "LA"
        ],
        "correct": 0,
        "answer": "LY",
        "explanation": "Tačan odgovor je: LY.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC109",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Država sa DXCC prefiksom LY je:",
        "options": [
          "Litvanija",
          "Letonija",
          "Bugarska",
          "Norveška"
        ],
        "correct": 0,
        "answer": "Litvanija",
        "explanation": "Tačan odgovor je: Litvanija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC110",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji DXCC prefiks pripada Turskoj?",
        "options": [
          "TA",
          "TF",
          "CT",
          "4X"
        ],
        "correct": 0,
        "answer": "TA",
        "explanation": "Tačan odgovor je: TA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC111",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Država sa DXCC prefiksom TA je:",
        "options": [
          "Turska",
          "Island",
          "Portugal",
          "Izrael"
        ],
        "correct": 0,
        "answer": "Turska",
        "explanation": "Tačan odgovor je: Turska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC112",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji par je tačan?",
        "options": [
          "Rusija - UA",
          "Rusija - UR",
          "Rusija - EU",
          "Rusija - ER"
        ],
        "correct": 0,
        "answer": "Rusija - UA",
        "explanation": "Tačan odgovor je: Rusija - UA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC113",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji par je tačan?",
        "options": [
          "Ukrajina - UR",
          "Ukrajina - UA",
          "Ukrajina - EU",
          "Ukrajina - ER"
        ],
        "correct": 0,
        "answer": "Ukrajina - UR",
        "explanation": "Tačan odgovor je: Ukrajina - UR.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC114",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji par NIJE tačan?",
        "options": [
          "Island - TA",
          "Island - TF",
          "Turska - TA",
          "Rusija - UA"
        ],
        "correct": 0,
        "answer": "Island - TA",
        "explanation": "Tačan odgovor je: Island - TA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC115",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Istočna Evropa i Evroazija",
        "group": "Istočna Evropa i Evroazija",
        "question": "Koji par NIJE tačan?",
        "options": [
          "Ukrajina - UA",
          "Ukrajina - UR",
          "Belorusija - EU",
          "Moldavija - ER"
        ],
        "correct": 0,
        "answer": "Ukrajina - UA",
        "explanation": "Tačan odgovor je: Ukrajina - UA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC116",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Koji DXCC prefiks pripada Alžiru?",
        "options": [
          "7X",
          "CN",
          "ZS",
          "4X"
        ],
        "correct": 0,
        "answer": "7X",
        "explanation": "Tačan odgovor je: 7X.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC117",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Država sa DXCC prefiksom 7X je:",
        "options": [
          "Alžir",
          "Maroko",
          "Južna Afrika",
          "Izrael"
        ],
        "correct": 0,
        "answer": "Alžir",
        "explanation": "Tačan odgovor je: Alžir.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC118",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Koji DXCC prefiks pripada Maroku?",
        "options": [
          "CN",
          "7X",
          "ZS",
          "4X"
        ],
        "correct": 0,
        "answer": "CN",
        "explanation": "Tačan odgovor je: CN.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC119",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Država sa DXCC prefiksom CN je:",
        "options": [
          "Maroko",
          "Alžir",
          "Južna Afrika",
          "Izrael"
        ],
        "correct": 0,
        "answer": "Maroko",
        "explanation": "Tačan odgovor je: Maroko.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC120",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Koji DXCC prefiks pripada Južnoj Africi?",
        "options": [
          "ZS",
          "ZA",
          "Z3",
          "ZL"
        ],
        "correct": 0,
        "answer": "ZS",
        "explanation": "Tačan odgovor je: ZS.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC121",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Država sa DXCC prefiksom ZS je:",
        "options": [
          "Južna Afrika",
          "Albanija",
          "Severna Makedonija",
          "Novi Zeland"
        ],
        "correct": 0,
        "answer": "Južna Afrika",
        "explanation": "Tačan odgovor je: Južna Afrika.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC122",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Koji DXCC prefiks pripada Izraelu?",
        "options": [
          "4X",
          "4O",
          "9H",
          "9A"
        ],
        "correct": 0,
        "answer": "4X",
        "explanation": "Tačan odgovor je: 4X.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC123",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Država sa DXCC prefiksom 4X je:",
        "options": [
          "Izrael",
          "Crna Gora",
          "Malta",
          "Hrvatska"
        ],
        "correct": 0,
        "answer": "Izrael",
        "explanation": "Tačan odgovor je: Izrael.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC124",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Koji par je tačan?",
        "options": [
          "Alžir - 7X",
          "Alžir - CN",
          "Alžir - ZS",
          "Alžir - 4X"
        ],
        "correct": 0,
        "answer": "Alžir - 7X",
        "explanation": "Tačan odgovor je: Alžir - 7X.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC125",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Koji par je tačan?",
        "options": [
          "Maroko - CN",
          "Maroko - 7X",
          "Maroko - ZS",
          "Maroko - 4X"
        ],
        "correct": 0,
        "answer": "Maroko - CN",
        "explanation": "Tačan odgovor je: Maroko - CN.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC126",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Koji par je tačan?",
        "options": [
          "Južna Afrika - ZS",
          "Južna Afrika - ZA",
          "Južna Afrika - Z3",
          "Južna Afrika - ZL"
        ],
        "correct": 0,
        "answer": "Južna Afrika - ZS",
        "explanation": "Tačan odgovor je: Južna Afrika - ZS.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC127",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Koji par je tačan?",
        "options": [
          "Izrael - 4X",
          "Izrael - 4O",
          "Izrael - 9A",
          "Izrael - 9H"
        ],
        "correct": 0,
        "answer": "Izrael - 4X",
        "explanation": "Tačan odgovor je: Izrael - 4X.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC128",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Afrika i Bliski istok",
        "group": "Afrika i Bliski istok",
        "question": "Koji par NIJE tačan?",
        "options": [
          "Izrael - 4O",
          "Izrael - 4X",
          "Maroko - CN",
          "Južna Afrika - ZS"
        ],
        "correct": 0,
        "answer": "Izrael - 4O",
        "explanation": "Tačan odgovor je: Izrael - 4O.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC129",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji DXCC prefiks pripada Kini?",
        "options": [
          "BY",
          "VU",
          "JA",
          "VK"
        ],
        "correct": 0,
        "answer": "BY",
        "explanation": "Tačan odgovor je: BY.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC130",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Država sa DXCC prefiksom BY je:",
        "options": [
          "Kina",
          "Indija",
          "Japan",
          "Australija"
        ],
        "correct": 0,
        "answer": "Kina",
        "explanation": "Tačan odgovor je: Kina.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC131",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji DXCC prefiks pripada Indiji?",
        "options": [
          "VU",
          "BY",
          "JA",
          "VK"
        ],
        "correct": 0,
        "answer": "VU",
        "explanation": "Tačan odgovor je: VU.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC132",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Država sa DXCC prefiksom VU je:",
        "options": [
          "Indija",
          "Kina",
          "Japan",
          "Australija"
        ],
        "correct": 0,
        "answer": "Indija",
        "explanation": "Tačan odgovor je: Indija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC133",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji DXCC prefiks pripada Japanu?",
        "options": [
          "JA",
          "BY",
          "VU",
          "VK"
        ],
        "correct": 0,
        "answer": "JA",
        "explanation": "Tačan odgovor je: JA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC134",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Država sa DXCC prefiksom JA je:",
        "options": [
          "Japan",
          "Kina",
          "Indija",
          "Australija"
        ],
        "correct": 0,
        "answer": "Japan",
        "explanation": "Tačan odgovor je: Japan.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC135",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji DXCC prefiks pripada Kazahstanu?",
        "options": [
          "UN",
          "UA",
          "UR",
          "UK"
        ],
        "correct": 0,
        "answer": "UN",
        "explanation": "Tačan odgovor je: UN.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC136",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Država sa DXCC prefiksom UN je:",
        "options": [
          "Kazahstan",
          "Rusija",
          "Ukrajina",
          "Uzbekistan"
        ],
        "correct": 0,
        "answer": "Kazahstan",
        "explanation": "Tačan odgovor je: Kazahstan.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC137",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji DXCC prefiks pripada Tajlandu?",
        "options": [
          "HS",
          "JA",
          "BY",
          "VU"
        ],
        "correct": 0,
        "answer": "HS",
        "explanation": "Tačan odgovor je: HS.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC138",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Država sa DXCC prefiksom HS je:",
        "options": [
          "Tajland",
          "Japan",
          "Kina",
          "Indija"
        ],
        "correct": 0,
        "answer": "Tajland",
        "explanation": "Tačan odgovor je: Tajland.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC139",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji DXCC prefiks pripada Australiji?",
        "options": [
          "VK",
          "VE",
          "VU",
          "BY"
        ],
        "correct": 0,
        "answer": "VK",
        "explanation": "Tačan odgovor je: VK.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC140",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Država sa DXCC prefiksom VK je:",
        "options": [
          "Australija",
          "Kanada",
          "Indija",
          "Kina"
        ],
        "correct": 0,
        "answer": "Australija",
        "explanation": "Tačan odgovor je: Australija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC141",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji DXCC prefiks pripada Indoneziji?",
        "options": [
          "YB",
          "YU",
          "YO",
          "YL"
        ],
        "correct": 0,
        "answer": "YB",
        "explanation": "Tačan odgovor je: YB.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC142",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Država sa DXCC prefiksom YB je:",
        "options": [
          "Indonezija",
          "Srbija",
          "Rumunija",
          "Letonija"
        ],
        "correct": 0,
        "answer": "Indonezija",
        "explanation": "Tačan odgovor je: Indonezija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC143",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji DXCC prefiks pripada Novom Zelandu?",
        "options": [
          "ZL",
          "ZS",
          "ZA",
          "Z3"
        ],
        "correct": 0,
        "answer": "ZL",
        "explanation": "Tačan odgovor je: ZL.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC144",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Država sa DXCC prefiksom ZL je:",
        "options": [
          "Novi Zeland",
          "Južna Afrika",
          "Albanija",
          "Severna Makedonija"
        ],
        "correct": 0,
        "answer": "Novi Zeland",
        "explanation": "Tačan odgovor je: Novi Zeland.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC145",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji DXCC prefiks pripada Filipinima?",
        "options": [
          "DU",
          "BY",
          "JA",
          "VU"
        ],
        "correct": 0,
        "answer": "DU",
        "explanation": "Tačan odgovor je: DU.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC146",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Država sa DXCC prefiksom DU je:",
        "options": [
          "Filipini",
          "Kina",
          "Japan",
          "Indija"
        ],
        "correct": 0,
        "answer": "Filipini",
        "explanation": "Tačan odgovor je: Filipini.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC147",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji par je tačan?",
        "options": [
          "Kina - BY",
          "Kina - VU",
          "Kina - JA",
          "Kina - VK"
        ],
        "correct": 0,
        "answer": "Kina - BY",
        "explanation": "Tačan odgovor je: Kina - BY.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC148",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji par je tačan?",
        "options": [
          "Japan - JA",
          "Japan - BY",
          "Japan - VU",
          "Japan - VK"
        ],
        "correct": 0,
        "answer": "Japan - JA",
        "explanation": "Tačan odgovor je: Japan - JA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC149",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji par je tačan?",
        "options": [
          "Australija - VK",
          "Australija - VE",
          "Australija - VU",
          "Australija - BY"
        ],
        "correct": 0,
        "answer": "Australija - VK",
        "explanation": "Tačan odgovor je: Australija - VK.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC150",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Azija i Okeanija",
        "group": "Azija i Okeanija",
        "question": "Koji par je tačan?",
        "options": [
          "Novi Zeland - ZL",
          "Novi Zeland - ZS",
          "Novi Zeland - ZA",
          "Novi Zeland - Z3"
        ],
        "correct": 0,
        "answer": "Novi Zeland - ZL",
        "explanation": "Tačan odgovor je: Novi Zeland - ZL.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC151",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji DXCC prefiks pripada Kanadi?",
        "options": [
          "VE",
          "K",
          "LU",
          "PY"
        ],
        "correct": 0,
        "answer": "VE",
        "explanation": "Tačan odgovor je: VE.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC152",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Država sa DXCC prefiksom VE je:",
        "options": [
          "Kanada",
          "Sjedinjene Američke Države",
          "Argentina",
          "Brazil"
        ],
        "correct": 0,
        "answer": "Kanada",
        "explanation": "Tačan odgovor je: Kanada.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC153",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji DXCC prefiks pripada Sjedinjenim Američkim Državama?",
        "options": [
          "K",
          "VE",
          "LU",
          "PY"
        ],
        "correct": 0,
        "answer": "K",
        "explanation": "Tačan odgovor je: K.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC154",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Država sa DXCC prefiksom K je:",
        "options": [
          "Sjedinjene Američke Države",
          "Kanada",
          "Argentina",
          "Brazil"
        ],
        "correct": 0,
        "answer": "Sjedinjene Američke Države",
        "explanation": "Tačan odgovor je: Sjedinjene Američke Države.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC155",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji DXCC prefiks pripada Argentini?",
        "options": [
          "LU",
          "PY",
          "CE",
          "CX"
        ],
        "correct": 0,
        "answer": "LU",
        "explanation": "Tačan odgovor je: LU.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC156",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Država sa DXCC prefiksom LU je:",
        "options": [
          "Argentina",
          "Brazil",
          "Čile",
          "Urugvaj"
        ],
        "correct": 0,
        "answer": "Argentina",
        "explanation": "Tačan odgovor je: Argentina.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC157",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji DXCC prefiks pripada Brazilu?",
        "options": [
          "PY",
          "LU",
          "CE",
          "CX"
        ],
        "correct": 0,
        "answer": "PY",
        "explanation": "Tačan odgovor je: PY.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC158",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Država sa DXCC prefiksom PY je:",
        "options": [
          "Brazil",
          "Argentina",
          "Čile",
          "Urugvaj"
        ],
        "correct": 0,
        "answer": "Brazil",
        "explanation": "Tačan odgovor je: Brazil.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC159",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji DXCC prefiks pripada Čileu?",
        "options": [
          "CE",
          "LU",
          "PY",
          "CX"
        ],
        "correct": 0,
        "answer": "CE",
        "explanation": "Tačan odgovor je: CE.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC160",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Država sa DXCC prefiksom CE je:",
        "options": [
          "Čile",
          "Argentina",
          "Brazil",
          "Urugvaj"
        ],
        "correct": 0,
        "answer": "Čile",
        "explanation": "Tačan odgovor je: Čile.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC161",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji DXCC prefiks pripada Kolumbiji?",
        "options": [
          "HK",
          "CE",
          "CX",
          "PY"
        ],
        "correct": 0,
        "answer": "HK",
        "explanation": "Tačan odgovor je: HK.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC162",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Država sa DXCC prefiksom HK je:",
        "options": [
          "Kolumbija",
          "Čile",
          "Urugvaj",
          "Brazil"
        ],
        "correct": 0,
        "answer": "Kolumbija",
        "explanation": "Tačan odgovor je: Kolumbija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC163",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji DXCC prefiks pripada Urugvaju?",
        "options": [
          "CX",
          "CE",
          "PY",
          "LU"
        ],
        "correct": 0,
        "answer": "CX",
        "explanation": "Tačan odgovor je: CX.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC164",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Država sa DXCC prefiksom CX je:",
        "options": [
          "Urugvaj",
          "Čile",
          "Brazil",
          "Argentina"
        ],
        "correct": 0,
        "answer": "Urugvaj",
        "explanation": "Tačan odgovor je: Urugvaj.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC165",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji DXCC prefiks pripada Venecueli?",
        "options": [
          "YV",
          "YU",
          "YL",
          "YO"
        ],
        "correct": 0,
        "answer": "YV",
        "explanation": "Tačan odgovor je: YV.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC166",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Država sa DXCC prefiksom YV je:",
        "options": [
          "Venecuela",
          "Srbija",
          "Letonija",
          "Rumunija"
        ],
        "correct": 0,
        "answer": "Venecuela",
        "explanation": "Tačan odgovor je: Venecuela.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC167",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji par je tačan?",
        "options": [
          "Kanada - VE",
          "Kanada - K",
          "Kanada - LU",
          "Kanada - PY"
        ],
        "correct": 0,
        "answer": "Kanada - VE",
        "explanation": "Tačan odgovor je: Kanada - VE.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC168",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji par je tačan?",
        "options": [
          "SAD - K",
          "SAD - VE",
          "SAD - LU",
          "SAD - PY"
        ],
        "correct": 0,
        "answer": "SAD - K",
        "explanation": "Tačan odgovor je: SAD - K.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC169",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji par je tačan?",
        "options": [
          "Brazil - PY",
          "Brazil - LU",
          "Brazil - CE",
          "Brazil - CX"
        ],
        "correct": 0,
        "answer": "Brazil - PY",
        "explanation": "Tačan odgovor je: Brazil - PY.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC170",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Severna i Južna Amerika",
        "group": "Severna i Južna Amerika",
        "question": "Koji par NIJE tačan?",
        "options": [
          "Kanada - K",
          "Kanada - VE",
          "SAD - K",
          "Argentina - LU"
        ],
        "correct": 0,
        "answer": "Kanada - K",
        "explanation": "Tačan odgovor je: Kanada - K.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC171",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks YU/YT?",
        "options": [
          "Srbija",
          "Hrvatska",
          "Slovenija",
          "Bosna i Hercegovina"
        ],
        "correct": 0,
        "answer": "Srbija",
        "explanation": "Tačan odgovor je: Srbija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC172",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks 9A?",
        "options": [
          "Hrvatska",
          "Srbija",
          "Crna Gora",
          "Slovenija"
        ],
        "correct": 0,
        "answer": "Hrvatska",
        "explanation": "Tačan odgovor je: Hrvatska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC173",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks E7?",
        "options": [
          "Bosna i Hercegovina",
          "Crna Gora",
          "Slovenija",
          "Albanija"
        ],
        "correct": 0,
        "answer": "Bosna i Hercegovina",
        "explanation": "Tačan odgovor je: Bosna i Hercegovina.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC174",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks 4O?",
        "options": [
          "Crna Gora",
          "Izrael",
          "Malta",
          "Hrvatska"
        ],
        "correct": 0,
        "answer": "Crna Gora",
        "explanation": "Tačan odgovor je: Crna Gora.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC175",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks S5?",
        "options": [
          "Slovenija",
          "Grčka",
          "Švedska",
          "Poljska"
        ],
        "correct": 0,
        "answer": "Slovenija",
        "explanation": "Tačan odgovor je: Slovenija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC176",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks OE?",
        "options": [
          "Austrija",
          "Slovačka",
          "Češka",
          "Belgija"
        ],
        "correct": 0,
        "answer": "Austrija",
        "explanation": "Tačan odgovor je: Austrija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC177",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks DL?",
        "options": [
          "Nemačka",
          "Francuska",
          "Italija",
          "Engleska"
        ],
        "correct": 0,
        "answer": "Nemačka",
        "explanation": "Tačan odgovor je: Nemačka.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC178",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks HB?",
        "options": [
          "Švajcarska",
          "Mađarska",
          "Austrija",
          "Nemačka"
        ],
        "correct": 0,
        "answer": "Švajcarska",
        "explanation": "Tačan odgovor je: Švajcarska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC179",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks F?",
        "options": [
          "Francuska",
          "Italija",
          "Engleska",
          "Portugal"
        ],
        "correct": 0,
        "answer": "Francuska",
        "explanation": "Tačan odgovor je: Francuska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC180",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks I?",
        "options": [
          "Italija",
          "Francuska",
          "Engleska",
          "Irska"
        ],
        "correct": 0,
        "answer": "Italija",
        "explanation": "Tačan odgovor je: Italija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC181",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks G?",
        "options": [
          "Engleska",
          "Škotska",
          "Vels",
          "Severna Irska"
        ],
        "correct": 0,
        "answer": "Engleska",
        "explanation": "Tačan odgovor je: Engleska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC182",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks GM?",
        "options": [
          "Škotska",
          "Engleska",
          "Vels",
          "Severna Irska"
        ],
        "correct": 0,
        "answer": "Škotska",
        "explanation": "Tačan odgovor je: Škotska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC183",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks GW?",
        "options": [
          "Vels",
          "Engleska",
          "Škotska",
          "Severna Irska"
        ],
        "correct": 0,
        "answer": "Vels",
        "explanation": "Tačan odgovor je: Vels.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC184",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks GI?",
        "options": [
          "Severna Irska",
          "Engleska",
          "Škotska",
          "Vels"
        ],
        "correct": 0,
        "answer": "Severna Irska",
        "explanation": "Tačan odgovor je: Severna Irska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC185",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks TF?",
        "options": [
          "Island",
          "Turska",
          "Portugal",
          "Francuska"
        ],
        "correct": 0,
        "answer": "Island",
        "explanation": "Tačan odgovor je: Island.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC186",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks K?",
        "options": [
          "Sjedinjene Američke Države",
          "Kanada",
          "Japan",
          "Kina"
        ],
        "correct": 0,
        "answer": "Sjedinjene Američke Države",
        "explanation": "Tačan odgovor je: Sjedinjene Američke Države.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC187",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks VE?",
        "options": [
          "Kanada",
          "Sjedinjene Američke Države",
          "Brazil",
          "Argentina"
        ],
        "correct": 0,
        "answer": "Kanada",
        "explanation": "Tačan odgovor je: Kanada.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC188",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks VK?",
        "options": [
          "Australija",
          "Kanada",
          "Indija",
          "Japan"
        ],
        "correct": 0,
        "answer": "Australija",
        "explanation": "Tačan odgovor je: Australija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC189",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks ZL?",
        "options": [
          "Novi Zeland",
          "Južna Afrika",
          "Albanija",
          "Severna Makedonija"
        ],
        "correct": 0,
        "answer": "Novi Zeland",
        "explanation": "Tačan odgovor je: Novi Zeland.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC190",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks JA?",
        "options": [
          "Japan",
          "Kina",
          "Indija",
          "Australija"
        ],
        "correct": 0,
        "answer": "Japan",
        "explanation": "Tačan odgovor je: Japan.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC191",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks BY?",
        "options": [
          "Kina",
          "Japan",
          "Indija",
          "Australija"
        ],
        "correct": 0,
        "answer": "Kina",
        "explanation": "Tačan odgovor je: Kina.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC192",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks VU?",
        "options": [
          "Indija",
          "Kina",
          "Japan",
          "Australija"
        ],
        "correct": 0,
        "answer": "Indija",
        "explanation": "Tačan odgovor je: Indija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC193",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks 4X?",
        "options": [
          "Izrael",
          "Crna Gora",
          "Malta",
          "Hrvatska"
        ],
        "correct": 0,
        "answer": "Izrael",
        "explanation": "Tačan odgovor je: Izrael.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC194",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks PY?",
        "options": [
          "Brazil",
          "Argentina",
          "Čile",
          "Urugvaj"
        ],
        "correct": 0,
        "answer": "Brazil",
        "explanation": "Tačan odgovor je: Brazil.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC195",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Kojoj državi pripada prefiks LU?",
        "options": [
          "Argentina",
          "Brazil",
          "Čile",
          "Urugvaj"
        ],
        "correct": 0,
        "answer": "Argentina",
        "explanation": "Tačan odgovor je: Argentina.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC196",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Srbiji?",
        "options": [
          "YU, YT",
          "S5",
          "9A",
          "E7"
        ],
        "correct": 0,
        "answer": "YU, YT",
        "explanation": "Tačan odgovor je: YU, YT.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC197",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Hrvatskoj?",
        "options": [
          "9A",
          "YU, YT",
          "S5",
          "E7"
        ],
        "correct": 0,
        "answer": "9A",
        "explanation": "Tačan odgovor je: 9A.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC198",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Bosni i Hercegovini?",
        "options": [
          "E7",
          "4O",
          "S5",
          "ZA"
        ],
        "correct": 0,
        "answer": "E7",
        "explanation": "Tačan odgovor je: E7.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC199",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Crnoj Gori?",
        "options": [
          "4O",
          "4X",
          "9H",
          "9A"
        ],
        "correct": 0,
        "answer": "4O",
        "explanation": "Tačan odgovor je: 4O.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC200",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Sloveniji?",
        "options": [
          "S5",
          "SV",
          "SM",
          "SP"
        ],
        "correct": 0,
        "answer": "S5",
        "explanation": "Tačan odgovor je: S5.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC201",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Austriji?",
        "options": [
          "OE",
          "OM",
          "OK",
          "ON"
        ],
        "correct": 0,
        "answer": "OE",
        "explanation": "Tačan odgovor je: OE.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC202",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Nemačkoj?",
        "options": [
          "DL",
          "F",
          "I",
          "G"
        ],
        "correct": 0,
        "answer": "DL",
        "explanation": "Tačan odgovor je: DL.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC203",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Švajcarskoj?",
        "options": [
          "HB, HE",
          "HA, HG",
          "OE",
          "DL"
        ],
        "correct": 0,
        "answer": "HB, HE",
        "explanation": "Tačan odgovor je: HB, HE.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC204",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Francuskoj?",
        "options": [
          "F",
          "I",
          "G",
          "CT"
        ],
        "correct": 0,
        "answer": "F",
        "explanation": "Tačan odgovor je: F.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC205",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Italiji?",
        "options": [
          "I",
          "F",
          "G",
          "EI"
        ],
        "correct": 0,
        "answer": "I",
        "explanation": "Tačan odgovor je: I.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC206",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Engleskoj?",
        "options": [
          "G",
          "GM",
          "GW",
          "GI"
        ],
        "correct": 0,
        "answer": "G",
        "explanation": "Tačan odgovor je: G.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC207",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Škotskoj?",
        "options": [
          "GM",
          "G",
          "GW",
          "GI"
        ],
        "correct": 0,
        "answer": "GM",
        "explanation": "Tačan odgovor je: GM.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC208",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Velsu?",
        "options": [
          "GW",
          "G",
          "GM",
          "GI"
        ],
        "correct": 0,
        "answer": "GW",
        "explanation": "Tačan odgovor je: GW.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC209",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Severnoj Irskoj?",
        "options": [
          "GI",
          "G",
          "GM",
          "GW"
        ],
        "correct": 0,
        "answer": "GI",
        "explanation": "Tačan odgovor je: GI.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC210",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Islandu?",
        "options": [
          "TF",
          "TA",
          "CT",
          "F"
        ],
        "correct": 0,
        "answer": "TF",
        "explanation": "Tačan odgovor je: TF.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC211",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada SAD?",
        "options": [
          "K",
          "VE",
          "JA",
          "BY"
        ],
        "correct": 0,
        "answer": "K",
        "explanation": "Tačan odgovor je: K.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC212",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Kanadi?",
        "options": [
          "VE",
          "K",
          "JA",
          "BY"
        ],
        "correct": 0,
        "answer": "VE",
        "explanation": "Tačan odgovor je: VE.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC213",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Australiji?",
        "options": [
          "VK",
          "VE",
          "VU",
          "BY"
        ],
        "correct": 0,
        "answer": "VK",
        "explanation": "Tačan odgovor je: VK.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC214",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Novom Zelandu?",
        "options": [
          "ZL",
          "ZS",
          "ZA",
          "Z3"
        ],
        "correct": 0,
        "answer": "ZL",
        "explanation": "Tačan odgovor je: ZL.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC215",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Japanu?",
        "options": [
          "JA",
          "BY",
          "VU",
          "VK"
        ],
        "correct": 0,
        "answer": "JA",
        "explanation": "Tačan odgovor je: JA.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC216",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Kini?",
        "options": [
          "BY",
          "JA",
          "VU",
          "VK"
        ],
        "correct": 0,
        "answer": "BY",
        "explanation": "Tačan odgovor je: BY.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC217",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Indiji?",
        "options": [
          "VU",
          "BY",
          "JA",
          "VK"
        ],
        "correct": 0,
        "answer": "VU",
        "explanation": "Tačan odgovor je: VU.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC218",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Izraelu?",
        "options": [
          "4X",
          "4O",
          "9A",
          "9H"
        ],
        "correct": 0,
        "answer": "4X",
        "explanation": "Tačan odgovor je: 4X.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC219",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Brazilu?",
        "options": [
          "PY",
          "LU",
          "CE",
          "CX"
        ],
        "correct": 0,
        "answer": "PY",
        "explanation": "Tačan odgovor je: PY.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC220",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Mešovita provera",
        "group": "Mešovita provera",
        "question": "Koji prefiks pripada Argentini?",
        "options": [
          "LU",
          "PY",
          "CE",
          "CX"
        ],
        "correct": 0,
        "answer": "LU",
        "explanation": "Tačan odgovor je: LU.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC221",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zamke i slični prefiksi",
        "group": "Zamke i slični prefiksi",
        "question": "Koja tvrdnja je tačna?",
        "options": [
          "TF je Island, a TA je Turska",
          "TF je Turska, a TA je Island",
          "TF je Portugal, a TA je Francuska",
          "TF je Francuska, a TA je Portugal"
        ],
        "correct": 0,
        "answer": "TF je Island, a TA je Turska",
        "explanation": "Tačan odgovor je: TF je Island, a TA je Turska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC222",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zamke i slični prefiksi",
        "group": "Zamke i slični prefiksi",
        "question": "Koja tvrdnja je tačna?",
        "options": [
          "4O je Crna Gora, a 4X je Izrael",
          "4O je Izrael, a 4X je Crna Gora",
          "4O je Malta, a 4X je Hrvatska",
          "4O je Hrvatska, a 4X je Malta"
        ],
        "correct": 0,
        "answer": "4O je Crna Gora, a 4X je Izrael",
        "explanation": "Tačan odgovor je: 4O je Crna Gora, a 4X je Izrael.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC223",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zamke i slični prefiksi",
        "group": "Zamke i slični prefiksi",
        "question": "Koja tvrdnja je tačna?",
        "options": [
          "S5 je Slovenija, a SV je Grčka",
          "S5 je Grčka, a SV je Slovenija",
          "S5 je Švedska, a SV je Poljska",
          "S5 je Poljska, a SV je Švedska"
        ],
        "correct": 0,
        "answer": "S5 je Slovenija, a SV je Grčka",
        "explanation": "Tačan odgovor je: S5 je Slovenija, a SV je Grčka.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC224",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zamke i slični prefiksi",
        "group": "Zamke i slični prefiksi",
        "question": "Koja tvrdnja je tačna?",
        "options": [
          "HA je Mađarska, a HB je Švajcarska",
          "HA je Švajcarska, a HB je Mađarska",
          "HA je Austrija, a HB je Nemačka",
          "HA je Nemačka, a HB je Austrija"
        ],
        "correct": 0,
        "answer": "HA je Mađarska, a HB je Švajcarska",
        "explanation": "Tačan odgovor je: HA je Mađarska, a HB je Švajcarska.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC225",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zamke i slični prefiksi",
        "group": "Zamke i slični prefiksi",
        "question": "Koja tvrdnja je tačna?",
        "options": [
          "OK je Češka, a OM je Slovačka",
          "OK je Slovačka, a OM je Češka",
          "OK je Austrija, a OM je Belgija",
          "OK je Belgija, a OM je Austrija"
        ],
        "correct": 0,
        "answer": "OK je Češka, a OM je Slovačka",
        "explanation": "Tačan odgovor je: OK je Češka, a OM je Slovačka.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC226",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zamke i slični prefiksi",
        "group": "Zamke i slični prefiksi",
        "question": "Koja tvrdnja je tačna?",
        "options": [
          "ZA je Albanija, a Z3 je Severna Makedonija",
          "ZA je Severna Makedonija, a Z3 je Albanija",
          "ZA je Južna Afrika, a Z3 je Novi Zeland",
          "ZA je Novi Zeland, a Z3 je Južna Afrika"
        ],
        "correct": 0,
        "answer": "ZA je Albanija, a Z3 je Severna Makedonija",
        "explanation": "Tačan odgovor je: ZA je Albanija, a Z3 je Severna Makedonija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC227",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zamke i slični prefiksi",
        "group": "Zamke i slični prefiksi",
        "question": "Koja tvrdnja je tačna?",
        "options": [
          "ZS je Južna Afrika, a ZL je Novi Zeland",
          "ZS je Novi Zeland, a ZL je Južna Afrika",
          "ZS je Albanija, a ZL je Severna Makedonija",
          "ZS je Severna Makedonija, a ZL je Albanija"
        ],
        "correct": 0,
        "answer": "ZS je Južna Afrika, a ZL je Novi Zeland",
        "explanation": "Tačan odgovor je: ZS je Južna Afrika, a ZL je Novi Zeland.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC228",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zamke i slični prefiksi",
        "group": "Zamke i slični prefiksi",
        "question": "Koja tvrdnja je tačna?",
        "options": [
          "BY je Kina, a VU je Indija",
          "BY je Indija, a VU je Kina",
          "BY je Japan, a VU je Australija",
          "BY je Australija, a VU je Japan"
        ],
        "correct": 0,
        "answer": "BY je Kina, a VU je Indija",
        "explanation": "Tačan odgovor je: BY je Kina, a VU je Indija.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC229",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zamke i slični prefiksi",
        "group": "Zamke i slični prefiksi",
        "question": "Koja tvrdnja je tačna?",
        "options": [
          "VE je Kanada, a K je SAD",
          "VE je SAD, a K je Kanada",
          "VE je Australija, a K je Japan",
          "VE je Japan, a K je Australija"
        ],
        "correct": 0,
        "answer": "VE je Kanada, a K je SAD",
        "explanation": "Tačan odgovor je: VE je Kanada, a K je SAD.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      },
      {
        "id": "DXCC230",
        "bankId": "memo-dxcc-prefiksi",
        "section": "MEMO_DXCC",
        "topic": "Zamke i slični prefiksi",
        "group": "Zamke i slični prefiksi",
        "question": "Koja tvrdnja je tačna?",
        "options": [
          "LU je Argentina, a PY je Brazil",
          "LU je Brazil, a PY je Argentina",
          "LU je Čile, a PY je Urugvaj",
          "LU je Urugvaj, a PY je Čile"
        ],
        "correct": 0,
        "answer": "LU je Argentina, a PY je Brazil",
        "explanation": "Tačan odgovor je: LU je Argentina, a PY je Brazil.",
        "source": "dxcc_prefiksi_trening_pitanja.txt"
      }
    ],
    "questionCount": 230
  },
  {
    "bankId": "memo-radio-spektar-opsezi",
    "title": "Radio spektar i radio-amaterski opsezi",
    "shortTitle": "Spektar i opsezi",
    "description": "Trening za MF/HF/VHF/UHF/SHF/EHF i nominalne radio-amaterske opsege.",
    "category": "MEMORIZATION",
    "questions": [
      {
        "id": "RSB001",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji naziv na engleskom odgovara oznaci MF?",
        "options": [
          "Very high frequency",
          "Medium frequency",
          "Ultra high frequency",
          "Super high frequency"
        ],
        "correct": 1,
        "answer": "Medium frequency",
        "explanation": "Tačan odgovor je: Medium frequency.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB002",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji srpski naziv odgovara oznaci MF?",
        "options": [
          "Visoke frekvencije",
          "Super visoke frekvencije",
          "Srednje frekvencije",
          "Ultra visoke frekvencije"
        ],
        "correct": 2,
        "answer": "Srednje frekvencije",
        "explanation": "Tačan odgovor je: Srednje frekvencije.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB003",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji frekvencijski raspon odgovara području MF?",
        "options": [
          "30 MHz – 300 MHz",
          "300 MHz – 3 GHz",
          "300 kHz – 3 MHz",
          "3 GHz – 30 GHz"
        ],
        "correct": 2,
        "answer": "300 kHz – 3 MHz",
        "explanation": "Tačan odgovor je: 300 kHz – 3 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB004",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara rasponu 300 kHz – 3 MHz?",
        "options": [
          "MF",
          "UHF",
          "VHF",
          "SHF"
        ],
        "correct": 0,
        "answer": "MF",
        "explanation": "Tačan odgovor je: MF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB005",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „Medium frequency”?",
        "options": [
          "UHF",
          "SHF",
          "EHF",
          "MF"
        ],
        "correct": 3,
        "answer": "MF",
        "explanation": "Tačan odgovor je: MF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB006",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „Srednje frekvencije”?",
        "options": [
          "UHF",
          "HF",
          "VHF",
          "MF"
        ],
        "correct": 3,
        "answer": "MF",
        "explanation": "Tačan odgovor je: MF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB007",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji naziv na engleskom odgovara oznaci HF?",
        "options": [
          "Super high frequency",
          "High frequency",
          "Very high frequency",
          "Medium frequency"
        ],
        "correct": 1,
        "answer": "High frequency",
        "explanation": "Tačan odgovor je: High frequency.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB008",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji srpski naziv odgovara oznaci HF?",
        "options": [
          "Veoma visoke frekvencije",
          "Srednje frekvencije",
          "Visoke frekvencije",
          "Ekstremno visoke frekvencije"
        ],
        "correct": 2,
        "answer": "Visoke frekvencije",
        "explanation": "Tačan odgovor je: Visoke frekvencije.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB009",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji frekvencijski raspon odgovara području HF?",
        "options": [
          "3 MHz – 30 MHz",
          "3 GHz – 30 GHz",
          "30 GHz – 300 GHz",
          "300 kHz – 3 MHz"
        ],
        "correct": 0,
        "answer": "3 MHz – 30 MHz",
        "explanation": "Tačan odgovor je: 3 MHz – 30 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB010",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara rasponu 3 MHz – 30 MHz?",
        "options": [
          "UHF",
          "HF",
          "EHF",
          "VHF"
        ],
        "correct": 1,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB011",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „High frequency”?",
        "options": [
          "HF",
          "VHF",
          "SHF",
          "MF"
        ],
        "correct": 0,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB012",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „Visoke frekvencije”?",
        "options": [
          "VHF",
          "SHF",
          "HF",
          "UHF"
        ],
        "correct": 2,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB013",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji naziv na engleskom odgovara oznaci VHF?",
        "options": [
          "Super high frequency",
          "Medium frequency",
          "High frequency",
          "Very high frequency"
        ],
        "correct": 3,
        "answer": "Very high frequency",
        "explanation": "Tačan odgovor je: Very high frequency.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB014",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji srpski naziv odgovara oznaci VHF?",
        "options": [
          "Veoma visoke frekvencije",
          "Ultra visoke frekvencije",
          "Super visoke frekvencije",
          "Srednje frekvencije"
        ],
        "correct": 0,
        "answer": "Veoma visoke frekvencije",
        "explanation": "Tačan odgovor je: Veoma visoke frekvencije.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB015",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji frekvencijski raspon odgovara području VHF?",
        "options": [
          "3 GHz – 30 GHz",
          "300 MHz – 3 GHz",
          "30 GHz – 300 GHz",
          "30 MHz – 300 MHz"
        ],
        "correct": 3,
        "answer": "30 MHz – 300 MHz",
        "explanation": "Tačan odgovor je: 30 MHz – 300 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB016",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara rasponu 30 MHz – 300 MHz?",
        "options": [
          "VHF",
          "EHF",
          "UHF",
          "SHF"
        ],
        "correct": 0,
        "answer": "VHF",
        "explanation": "Tačan odgovor je: VHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB017",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „Very high frequency”?",
        "options": [
          "VHF",
          "MF",
          "HF",
          "EHF"
        ],
        "correct": 0,
        "answer": "VHF",
        "explanation": "Tačan odgovor je: VHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB018",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „Veoma visoke frekvencije”?",
        "options": [
          "MF",
          "VHF",
          "SHF",
          "EHF"
        ],
        "correct": 1,
        "answer": "VHF",
        "explanation": "Tačan odgovor je: VHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB019",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji naziv na engleskom odgovara oznaci UHF?",
        "options": [
          "Extremely high frequency",
          "Very high frequency",
          "Super high frequency",
          "Ultra high frequency"
        ],
        "correct": 3,
        "answer": "Ultra high frequency",
        "explanation": "Tačan odgovor je: Ultra high frequency.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB020",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji srpski naziv odgovara oznaci UHF?",
        "options": [
          "Ekstremno visoke frekvencije",
          "Veoma visoke frekvencije",
          "Ultra visoke frekvencije",
          "Srednje frekvencije"
        ],
        "correct": 2,
        "answer": "Ultra visoke frekvencije",
        "explanation": "Tačan odgovor je: Ultra visoke frekvencije.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB021",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji frekvencijski raspon odgovara području UHF?",
        "options": [
          "300 MHz – 3 GHz",
          "300 kHz – 3 MHz",
          "30 MHz – 300 MHz",
          "3 GHz – 30 GHz"
        ],
        "correct": 0,
        "answer": "300 MHz – 3 GHz",
        "explanation": "Tačan odgovor je: 300 MHz – 3 GHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB022",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara rasponu 300 MHz – 3 GHz?",
        "options": [
          "UHF",
          "EHF",
          "SHF",
          "VHF"
        ],
        "correct": 0,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB023",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „Ultra high frequency”?",
        "options": [
          "UHF",
          "HF",
          "EHF",
          "MF"
        ],
        "correct": 0,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB024",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „Ultra visoke frekvencije”?",
        "options": [
          "MF",
          "HF",
          "SHF",
          "UHF"
        ],
        "correct": 3,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB025",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji naziv na engleskom odgovara oznaci SHF?",
        "options": [
          "Medium frequency",
          "Super high frequency",
          "Very high frequency",
          "High frequency"
        ],
        "correct": 1,
        "answer": "Super high frequency",
        "explanation": "Tačan odgovor je: Super high frequency.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB026",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji srpski naziv odgovara oznaci SHF?",
        "options": [
          "Ultra visoke frekvencije",
          "Super visoke frekvencije",
          "Srednje frekvencije",
          "Veoma visoke frekvencije"
        ],
        "correct": 1,
        "answer": "Super visoke frekvencije",
        "explanation": "Tačan odgovor je: Super visoke frekvencije.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB027",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji frekvencijski raspon odgovara području SHF?",
        "options": [
          "3 MHz – 30 MHz",
          "300 kHz – 3 MHz",
          "30 MHz – 300 MHz",
          "3 GHz – 30 GHz"
        ],
        "correct": 3,
        "answer": "3 GHz – 30 GHz",
        "explanation": "Tačan odgovor je: 3 GHz – 30 GHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB028",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara rasponu 3 GHz – 30 GHz?",
        "options": [
          "EHF",
          "UHF",
          "MF",
          "SHF"
        ],
        "correct": 3,
        "answer": "SHF",
        "explanation": "Tačan odgovor je: SHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB029",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „Super high frequency”?",
        "options": [
          "UHF",
          "SHF",
          "VHF",
          "HF"
        ],
        "correct": 1,
        "answer": "SHF",
        "explanation": "Tačan odgovor je: SHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB030",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „Super visoke frekvencije”?",
        "options": [
          "VHF",
          "EHF",
          "MF",
          "SHF"
        ],
        "correct": 3,
        "answer": "SHF",
        "explanation": "Tačan odgovor je: SHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB031",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji naziv na engleskom odgovara oznaci EHF?",
        "options": [
          "Medium frequency",
          "Extremely high frequency",
          "High frequency",
          "Very high frequency"
        ],
        "correct": 1,
        "answer": "Extremely high frequency",
        "explanation": "Tačan odgovor je: Extremely high frequency.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB032",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji srpski naziv odgovara oznaci EHF?",
        "options": [
          "Ultra visoke frekvencije",
          "Visoke frekvencije",
          "Srednje frekvencije",
          "Ekstremno visoke frekvencije"
        ],
        "correct": 3,
        "answer": "Ekstremno visoke frekvencije",
        "explanation": "Tačan odgovor je: Ekstremno visoke frekvencije.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB033",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koji frekvencijski raspon odgovara području EHF?",
        "options": [
          "3 GHz – 30 GHz",
          "30 GHz – 300 GHz",
          "3 MHz – 30 MHz",
          "300 MHz – 3 GHz"
        ],
        "correct": 1,
        "answer": "30 GHz – 300 GHz",
        "explanation": "Tačan odgovor je: 30 GHz – 300 GHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB034",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara rasponu 30 GHz – 300 GHz?",
        "options": [
          "HF",
          "UHF",
          "EHF",
          "SHF"
        ],
        "correct": 2,
        "answer": "EHF",
        "explanation": "Tačan odgovor je: EHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB035",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „Extremely high frequency”?",
        "options": [
          "HF",
          "SHF",
          "VHF",
          "EHF"
        ],
        "correct": 3,
        "answer": "EHF",
        "explanation": "Tačan odgovor je: EHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB036",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar",
        "group": "radio_spektar",
        "question": "Koja oznaka odgovara nazivu „Ekstremno visoke frekvencije”?",
        "options": [
          "EHF",
          "UHF",
          "MF",
          "VHF"
        ],
        "correct": 0,
        "answer": "EHF",
        "explanation": "Tačan odgovor je: EHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB037",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_redosled",
        "group": "radio_spektar_redosled",
        "question": "Koje područje je neposredno iznad područja MF po frekvenciji?",
        "options": [
          "SHF",
          "HF",
          "MF",
          "EHF"
        ],
        "correct": 1,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB038",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_redosled",
        "group": "radio_spektar_redosled",
        "question": "Koje područje je neposredno ispod područja HF po frekvenciji?",
        "options": [
          "UHF",
          "EHF",
          "SHF",
          "MF"
        ],
        "correct": 3,
        "answer": "MF",
        "explanation": "Tačan odgovor je: MF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB039",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_redosled",
        "group": "radio_spektar_redosled",
        "question": "Koje područje je neposredno iznad područja HF po frekvenciji?",
        "options": [
          "VHF",
          "EHF",
          "HF",
          "UHF"
        ],
        "correct": 0,
        "answer": "VHF",
        "explanation": "Tačan odgovor je: VHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB040",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_redosled",
        "group": "radio_spektar_redosled",
        "question": "Koje područje je neposredno ispod područja VHF po frekvenciji?",
        "options": [
          "SHF",
          "HF",
          "MF",
          "EHF"
        ],
        "correct": 1,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB041",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_redosled",
        "group": "radio_spektar_redosled",
        "question": "Koje područje je neposredno iznad područja VHF po frekvenciji?",
        "options": [
          "VHF",
          "SHF",
          "UHF",
          "HF"
        ],
        "correct": 2,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB042",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_redosled",
        "group": "radio_spektar_redosled",
        "question": "Koje područje je neposredno ispod područja UHF po frekvenciji?",
        "options": [
          "VHF",
          "SHF",
          "UHF",
          "EHF"
        ],
        "correct": 0,
        "answer": "VHF",
        "explanation": "Tačan odgovor je: VHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB043",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_redosled",
        "group": "radio_spektar_redosled",
        "question": "Koje područje je neposredno iznad područja UHF po frekvenciji?",
        "options": [
          "VHF",
          "SHF",
          "UHF",
          "MF"
        ],
        "correct": 1,
        "answer": "SHF",
        "explanation": "Tačan odgovor je: SHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB044",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_redosled",
        "group": "radio_spektar_redosled",
        "question": "Koje područje je neposredno ispod područja SHF po frekvenciji?",
        "options": [
          "VHF",
          "SHF",
          "MF",
          "UHF"
        ],
        "correct": 3,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB045",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_redosled",
        "group": "radio_spektar_redosled",
        "question": "Koje područje je neposredno iznad područja SHF po frekvenciji?",
        "options": [
          "EHF",
          "MF",
          "HF",
          "SHF"
        ],
        "correct": 0,
        "answer": "EHF",
        "explanation": "Tačan odgovor je: EHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB046",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_redosled",
        "group": "radio_spektar_redosled",
        "question": "Koje područje je neposredno ispod područja EHF po frekvenciji?",
        "options": [
          "UHF",
          "EHF",
          "VHF",
          "SHF"
        ],
        "correct": 3,
        "answer": "SHF",
        "explanation": "Tačan odgovor je: SHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB047",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 160 m?",
        "options": [
          "1.8 MHz",
          "10 MHz",
          "28 MHz",
          "18 MHz"
        ],
        "correct": 0,
        "answer": "1.8 MHz",
        "explanation": "Tačan odgovor je: 1.8 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB048",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 1.8 MHz?",
        "options": [
          "160 m",
          "80 m",
          "30 m",
          "0.13 m"
        ],
        "correct": 0,
        "answer": "160 m",
        "explanation": "Tačan odgovor je: 160 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB049",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 160 m?",
        "options": [
          "UHF",
          "MF",
          "HF",
          "VHF"
        ],
        "correct": 1,
        "answer": "MF",
        "explanation": "Tačan odgovor je: MF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB050",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 1.8 MHz?",
        "options": [
          "VHF",
          "UHF",
          "HF",
          "MF"
        ],
        "correct": 3,
        "answer": "MF",
        "explanation": "Tačan odgovor je: MF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB051",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 80 m?",
        "options": [
          "7 MHz",
          "10 MHz",
          "3.5 MHz",
          "14 MHz"
        ],
        "correct": 2,
        "answer": "3.5 MHz",
        "explanation": "Tačan odgovor je: 3.5 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB052",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 3.5 MHz?",
        "options": [
          "80 m",
          "12 m",
          "160 m",
          "30 m"
        ],
        "correct": 0,
        "answer": "80 m",
        "explanation": "Tačan odgovor je: 80 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB053",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 80 m?",
        "options": [
          "MF",
          "UHF",
          "VHF",
          "HF"
        ],
        "correct": 3,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB054",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 3.5 MHz?",
        "options": [
          "HF",
          "MF",
          "UHF",
          "VHF"
        ],
        "correct": 0,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB055",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 40 m?",
        "options": [
          "10 MHz",
          "24 MHz",
          "7 MHz",
          "18 MHz"
        ],
        "correct": 2,
        "answer": "7 MHz",
        "explanation": "Tačan odgovor je: 7 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB056",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 7 MHz?",
        "options": [
          "40 m",
          "17 m",
          "80 m",
          "10 m"
        ],
        "correct": 0,
        "answer": "40 m",
        "explanation": "Tačan odgovor je: 40 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB057",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 40 m?",
        "options": [
          "UHF",
          "HF",
          "VHF",
          "MF"
        ],
        "correct": 1,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB058",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 7 MHz?",
        "options": [
          "HF",
          "MF",
          "UHF",
          "VHF"
        ],
        "correct": 0,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB059",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 30 m?",
        "options": [
          "24 MHz",
          "10 MHz",
          "7 MHz",
          "432 MHz"
        ],
        "correct": 1,
        "answer": "10 MHz",
        "explanation": "Tačan odgovor je: 10 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB060",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 10 MHz?",
        "options": [
          "0.13 m",
          "30 m",
          "15 m",
          "6 m"
        ],
        "correct": 1,
        "answer": "30 m",
        "explanation": "Tačan odgovor je: 30 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB061",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 30 m?",
        "options": [
          "UHF",
          "MF",
          "HF",
          "VHF"
        ],
        "correct": 2,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB062",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 10 MHz?",
        "options": [
          "VHF",
          "MF",
          "HF",
          "UHF"
        ],
        "correct": 2,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB063",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 20 m?",
        "options": [
          "1.8 MHz",
          "28 MHz",
          "14 MHz",
          "50 MHz"
        ],
        "correct": 2,
        "answer": "14 MHz",
        "explanation": "Tačan odgovor je: 14 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB064",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 14 MHz?",
        "options": [
          "15 m",
          "0.13 m",
          "30 m",
          "20 m"
        ],
        "correct": 3,
        "answer": "20 m",
        "explanation": "Tačan odgovor je: 20 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB065",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 20 m?",
        "options": [
          "MF",
          "UHF",
          "HF",
          "VHF"
        ],
        "correct": 2,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB066",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 14 MHz?",
        "options": [
          "VHF",
          "HF",
          "UHF",
          "MF"
        ],
        "correct": 1,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB067",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 17 m?",
        "options": [
          "18 MHz",
          "24 MHz",
          "10 MHz",
          "3.5 MHz"
        ],
        "correct": 0,
        "answer": "18 MHz",
        "explanation": "Tačan odgovor je: 18 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB068",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 18 MHz?",
        "options": [
          "12 m",
          "30 m",
          "17 m",
          "160 m"
        ],
        "correct": 2,
        "answer": "17 m",
        "explanation": "Tačan odgovor je: 17 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB069",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 17 m?",
        "options": [
          "UHF",
          "VHF",
          "MF",
          "HF"
        ],
        "correct": 3,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB070",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 18 MHz?",
        "options": [
          "MF",
          "HF",
          "UHF",
          "VHF"
        ],
        "correct": 1,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB071",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 15 m?",
        "options": [
          "21 MHz",
          "10 MHz",
          "144 MHz",
          "28 MHz"
        ],
        "correct": 0,
        "answer": "21 MHz",
        "explanation": "Tačan odgovor je: 21 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB072",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 21 MHz?",
        "options": [
          "40 m",
          "30 m",
          "20 m",
          "15 m"
        ],
        "correct": 3,
        "answer": "15 m",
        "explanation": "Tačan odgovor je: 15 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB073",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 15 m?",
        "options": [
          "MF",
          "VHF",
          "HF",
          "UHF"
        ],
        "correct": 2,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB074",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 21 MHz?",
        "options": [
          "MF",
          "HF",
          "UHF",
          "VHF"
        ],
        "correct": 1,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB075",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 12 m?",
        "options": [
          "432 MHz",
          "1296 MHz",
          "21 MHz",
          "24 MHz"
        ],
        "correct": 3,
        "answer": "24 MHz",
        "explanation": "Tačan odgovor je: 24 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB076",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 24 MHz?",
        "options": [
          "20 m",
          "2 m",
          "10 m",
          "12 m"
        ],
        "correct": 3,
        "answer": "12 m",
        "explanation": "Tačan odgovor je: 12 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB077",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 12 m?",
        "options": [
          "MF",
          "HF",
          "UHF",
          "VHF"
        ],
        "correct": 1,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB078",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 24 MHz?",
        "options": [
          "UHF",
          "VHF",
          "HF",
          "MF"
        ],
        "correct": 2,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB079",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 10 m?",
        "options": [
          "144 MHz",
          "7 MHz",
          "28 MHz",
          "21 MHz"
        ],
        "correct": 2,
        "answer": "28 MHz",
        "explanation": "Tačan odgovor je: 28 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB080",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 28 MHz?",
        "options": [
          "12 m",
          "0.23 m",
          "10 m",
          "30 m"
        ],
        "correct": 2,
        "answer": "10 m",
        "explanation": "Tačan odgovor je: 10 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB081",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 10 m?",
        "options": [
          "HF",
          "MF",
          "VHF",
          "UHF"
        ],
        "correct": 0,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB082",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 28 MHz?",
        "options": [
          "MF",
          "HF",
          "VHF",
          "UHF"
        ],
        "correct": 1,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB083",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 6 m?",
        "options": [
          "1.8 MHz",
          "432 MHz",
          "50 MHz",
          "144 MHz"
        ],
        "correct": 2,
        "answer": "50 MHz",
        "explanation": "Tačan odgovor je: 50 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB084",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 50 MHz?",
        "options": [
          "6 m",
          "12 m",
          "80 m",
          "2 m"
        ],
        "correct": 0,
        "answer": "6 m",
        "explanation": "Tačan odgovor je: 6 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB085",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 6 m?",
        "options": [
          "HF",
          "UHF",
          "MF",
          "VHF"
        ],
        "correct": 3,
        "answer": "VHF",
        "explanation": "Tačan odgovor je: VHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB086",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 50 MHz?",
        "options": [
          "UHF",
          "HF",
          "MF",
          "VHF"
        ],
        "correct": 3,
        "answer": "VHF",
        "explanation": "Tačan odgovor je: VHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB087",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 2 m?",
        "options": [
          "1.8 MHz",
          "24 MHz",
          "28 MHz",
          "144 MHz"
        ],
        "correct": 3,
        "answer": "144 MHz",
        "explanation": "Tačan odgovor je: 144 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB088",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 144 MHz?",
        "options": [
          "0.13 m",
          "2 m",
          "80 m",
          "0.7 m"
        ],
        "correct": 1,
        "answer": "2 m",
        "explanation": "Tačan odgovor je: 2 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB089",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 2 m?",
        "options": [
          "HF",
          "VHF",
          "MF",
          "UHF"
        ],
        "correct": 1,
        "answer": "VHF",
        "explanation": "Tačan odgovor je: VHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB090",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 144 MHz?",
        "options": [
          "UHF",
          "HF",
          "VHF",
          "MF"
        ],
        "correct": 2,
        "answer": "VHF",
        "explanation": "Tačan odgovor je: VHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB091",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 0.7 m?",
        "options": [
          "28 MHz",
          "21 MHz",
          "432 MHz",
          "10 MHz"
        ],
        "correct": 2,
        "answer": "432 MHz",
        "explanation": "Tačan odgovor je: 432 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB092",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 432 MHz?",
        "options": [
          "40 m",
          "0.7 m",
          "0.23 m",
          "15 m"
        ],
        "correct": 1,
        "answer": "0.7 m",
        "explanation": "Tačan odgovor je: 0.7 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB093",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 0.7 m?",
        "options": [
          "MF",
          "VHF",
          "UHF",
          "HF"
        ],
        "correct": 2,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB094",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 432 MHz?",
        "options": [
          "HF",
          "VHF",
          "UHF",
          "MF"
        ],
        "correct": 2,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB095",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 0.23 m?",
        "options": [
          "2.3 GHz",
          "7 MHz",
          "28 MHz",
          "1296 MHz"
        ],
        "correct": 3,
        "answer": "1296 MHz",
        "explanation": "Tačan odgovor je: 1296 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB096",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 1296 MHz?",
        "options": [
          "160 m",
          "0.23 m",
          "2 m",
          "0.13 m"
        ],
        "correct": 1,
        "answer": "0.23 m",
        "explanation": "Tačan odgovor je: 0.23 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB097",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 0.23 m?",
        "options": [
          "MF",
          "UHF",
          "HF",
          "VHF"
        ],
        "correct": 1,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB098",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 1296 MHz?",
        "options": [
          "MF",
          "VHF",
          "HF",
          "UHF"
        ],
        "correct": 3,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB099",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna frekvencija odgovara radio-amaterskom opsegu 0.13 m?",
        "options": [
          "2.3 GHz",
          "50 MHz",
          "21 MHz",
          "1.8 MHz"
        ],
        "correct": 0,
        "answer": "2.3 GHz",
        "explanation": "Tačan odgovor je: 2.3 GHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB100",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Koja nominalna talasna dužina odgovara opsegu 2.3 GHz?",
        "options": [
          "0.7 m",
          "40 m",
          "0.13 m",
          "160 m"
        ],
        "correct": 2,
        "answer": "0.13 m",
        "explanation": "Tačan odgovor je: 0.13 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB101",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 0.13 m?",
        "options": [
          "HF",
          "UHF",
          "VHF",
          "MF"
        ],
        "correct": 1,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB102",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi",
        "group": "radio_amaterski_opsezi",
        "question": "Kojem području radio spektra pripada radio-amaterski opseg 2.3 GHz?",
        "options": [
          "HF",
          "MF",
          "VHF",
          "UHF"
        ],
        "correct": 3,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB103",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području MF?",
        "options": [
          "17 m",
          "160 m",
          "0.7 m",
          "30 m"
        ],
        "correct": 1,
        "answer": "160 m",
        "explanation": "Tačan odgovor je: 160 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB104",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području MF?",
        "options": [
          "1296 MHz",
          "10 MHz",
          "1.8 MHz",
          "14 MHz"
        ],
        "correct": 2,
        "answer": "1.8 MHz",
        "explanation": "Tačan odgovor je: 1.8 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB105",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području HF?",
        "options": [
          "160 m",
          "0.13 m",
          "6 m",
          "80 m"
        ],
        "correct": 3,
        "answer": "80 m",
        "explanation": "Tačan odgovor je: 80 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB106",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području HF?",
        "options": [
          "1296 MHz",
          "3.5 MHz",
          "1.8 MHz",
          "2.3 GHz"
        ],
        "correct": 1,
        "answer": "3.5 MHz",
        "explanation": "Tačan odgovor je: 3.5 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB107",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području HF?",
        "options": [
          "6 m",
          "0.7 m",
          "2 m",
          "40 m"
        ],
        "correct": 3,
        "answer": "40 m",
        "explanation": "Tačan odgovor je: 40 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB108",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području HF?",
        "options": [
          "144 MHz",
          "2.3 GHz",
          "7 MHz",
          "1296 MHz"
        ],
        "correct": 2,
        "answer": "7 MHz",
        "explanation": "Tačan odgovor je: 7 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB109",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području HF?",
        "options": [
          "30 m",
          "6 m",
          "0.23 m",
          "0.13 m"
        ],
        "correct": 0,
        "answer": "30 m",
        "explanation": "Tačan odgovor je: 30 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB110",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području HF?",
        "options": [
          "1.8 MHz",
          "10 MHz",
          "2.3 GHz",
          "50 MHz"
        ],
        "correct": 1,
        "answer": "10 MHz",
        "explanation": "Tačan odgovor je: 10 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB111",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području HF?",
        "options": [
          "0.23 m",
          "6 m",
          "20 m",
          "0.13 m"
        ],
        "correct": 2,
        "answer": "20 m",
        "explanation": "Tačan odgovor je: 20 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB112",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području HF?",
        "options": [
          "432 MHz",
          "50 MHz",
          "144 MHz",
          "14 MHz"
        ],
        "correct": 3,
        "answer": "14 MHz",
        "explanation": "Tačan odgovor je: 14 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB113",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području HF?",
        "options": [
          "0.7 m",
          "2 m",
          "6 m",
          "17 m"
        ],
        "correct": 3,
        "answer": "17 m",
        "explanation": "Tačan odgovor je: 17 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB114",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području HF?",
        "options": [
          "144 MHz",
          "1296 MHz",
          "432 MHz",
          "18 MHz"
        ],
        "correct": 3,
        "answer": "18 MHz",
        "explanation": "Tačan odgovor je: 18 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB115",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području HF?",
        "options": [
          "15 m",
          "2 m",
          "0.13 m",
          "0.23 m"
        ],
        "correct": 0,
        "answer": "15 m",
        "explanation": "Tačan odgovor je: 15 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB116",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području HF?",
        "options": [
          "21 MHz",
          "432 MHz",
          "2.3 GHz",
          "1296 MHz"
        ],
        "correct": 0,
        "answer": "21 MHz",
        "explanation": "Tačan odgovor je: 21 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB117",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području HF?",
        "options": [
          "2 m",
          "12 m",
          "0.7 m",
          "6 m"
        ],
        "correct": 1,
        "answer": "12 m",
        "explanation": "Tačan odgovor je: 12 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB118",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području HF?",
        "options": [
          "1296 MHz",
          "24 MHz",
          "2.3 GHz",
          "144 MHz"
        ],
        "correct": 1,
        "answer": "24 MHz",
        "explanation": "Tačan odgovor je: 24 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB119",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području HF?",
        "options": [
          "0.23 m",
          "10 m",
          "6 m",
          "0.7 m"
        ],
        "correct": 1,
        "answer": "10 m",
        "explanation": "Tačan odgovor je: 10 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB120",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području HF?",
        "options": [
          "2.3 GHz",
          "28 MHz",
          "50 MHz",
          "1.8 MHz"
        ],
        "correct": 1,
        "answer": "28 MHz",
        "explanation": "Tačan odgovor je: 28 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB121",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području VHF?",
        "options": [
          "6 m",
          "40 m",
          "0.13 m",
          "20 m"
        ],
        "correct": 0,
        "answer": "6 m",
        "explanation": "Tačan odgovor je: 6 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB122",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području VHF?",
        "options": [
          "1.8 MHz",
          "50 MHz",
          "3.5 MHz",
          "28 MHz"
        ],
        "correct": 1,
        "answer": "50 MHz",
        "explanation": "Tačan odgovor je: 50 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB123",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području VHF?",
        "options": [
          "15 m",
          "160 m",
          "2 m",
          "40 m"
        ],
        "correct": 2,
        "answer": "2 m",
        "explanation": "Tačan odgovor je: 2 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB124",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području VHF?",
        "options": [
          "28 MHz",
          "3.5 MHz",
          "144 MHz",
          "1.8 MHz"
        ],
        "correct": 2,
        "answer": "144 MHz",
        "explanation": "Tačan odgovor je: 144 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB125",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području UHF?",
        "options": [
          "15 m",
          "17 m",
          "40 m",
          "0.7 m"
        ],
        "correct": 3,
        "answer": "0.7 m",
        "explanation": "Tačan odgovor je: 0.7 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB126",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području UHF?",
        "options": [
          "21 MHz",
          "14 MHz",
          "432 MHz",
          "18 MHz"
        ],
        "correct": 2,
        "answer": "432 MHz",
        "explanation": "Tačan odgovor je: 432 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB127",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području UHF?",
        "options": [
          "10 m",
          "80 m",
          "160 m",
          "0.23 m"
        ],
        "correct": 3,
        "answer": "0.23 m",
        "explanation": "Tačan odgovor je: 0.23 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB128",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području UHF?",
        "options": [
          "21 MHz",
          "10 MHz",
          "50 MHz",
          "1296 MHz"
        ],
        "correct": 3,
        "answer": "1296 MHz",
        "explanation": "Tačan odgovor je: 1296 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB129",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koji od navedenih radio-amaterskih opsega pripada području UHF?",
        "options": [
          "160 m",
          "15 m",
          "80 m",
          "0.13 m"
        ],
        "correct": 3,
        "answer": "0.13 m",
        "explanation": "Tačan odgovor je: 0.13 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB130",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_amaterski_opsezi_po_podrucju",
        "group": "radio_amaterski_opsezi_po_podrucju",
        "question": "Koja od navedenih frekvencija pripada radio-amaterskom opsegu u području UHF?",
        "options": [
          "50 MHz",
          "21 MHz",
          "2.3 GHz",
          "28 MHz"
        ],
        "correct": 2,
        "answer": "2.3 GHz",
        "explanation": "Tačan odgovor je: 2.3 GHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB131",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 160 m ili 80 m?",
        "options": [
          "80 m",
          "20 m",
          "160 m",
          "15 m"
        ],
        "correct": 0,
        "answer": "80 m",
        "explanation": "Tačan odgovor je: 80 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB132",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 160 m ili 80 m?",
        "options": [
          "160 m",
          "80 m",
          "0.7 m",
          "40 m"
        ],
        "correct": 0,
        "answer": "160 m",
        "explanation": "Tačan odgovor je: 160 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB133",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 80 m ili 40 m?",
        "options": [
          "12 m",
          "80 m",
          "15 m",
          "40 m"
        ],
        "correct": 3,
        "answer": "40 m",
        "explanation": "Tačan odgovor je: 40 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB134",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 80 m ili 40 m?",
        "options": [
          "30 m",
          "40 m",
          "20 m",
          "80 m"
        ],
        "correct": 3,
        "answer": "80 m",
        "explanation": "Tačan odgovor je: 80 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB135",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 40 m ili 30 m?",
        "options": [
          "10 m",
          "30 m",
          "6 m",
          "40 m"
        ],
        "correct": 1,
        "answer": "30 m",
        "explanation": "Tačan odgovor je: 30 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB136",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 40 m ili 30 m?",
        "options": [
          "40 m",
          "30 m",
          "0.13 m",
          "80 m"
        ],
        "correct": 0,
        "answer": "40 m",
        "explanation": "Tačan odgovor je: 40 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB137",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 30 m ili 20 m?",
        "options": [
          "6 m",
          "20 m",
          "30 m",
          "0.23 m"
        ],
        "correct": 1,
        "answer": "20 m",
        "explanation": "Tačan odgovor je: 20 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB138",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 30 m ili 20 m?",
        "options": [
          "12 m",
          "20 m",
          "30 m",
          "6 m"
        ],
        "correct": 2,
        "answer": "30 m",
        "explanation": "Tačan odgovor je: 30 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB139",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 20 m ili 17 m?",
        "options": [
          "20 m",
          "0.23 m",
          "17 m",
          "0.13 m"
        ],
        "correct": 2,
        "answer": "17 m",
        "explanation": "Tačan odgovor je: 17 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB140",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 20 m ili 17 m?",
        "options": [
          "17 m",
          "20 m",
          "15 m",
          "80 m"
        ],
        "correct": 1,
        "answer": "20 m",
        "explanation": "Tačan odgovor je: 20 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB141",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 17 m ili 15 m?",
        "options": [
          "17 m",
          "15 m",
          "20 m",
          "6 m"
        ],
        "correct": 1,
        "answer": "15 m",
        "explanation": "Tačan odgovor je: 15 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB142",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 17 m ili 15 m?",
        "options": [
          "15 m",
          "2 m",
          "17 m",
          "80 m"
        ],
        "correct": 2,
        "answer": "17 m",
        "explanation": "Tačan odgovor je: 17 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB143",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 15 m ili 12 m?",
        "options": [
          "12 m",
          "20 m",
          "17 m",
          "15 m"
        ],
        "correct": 0,
        "answer": "12 m",
        "explanation": "Tačan odgovor je: 12 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB144",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 15 m ili 12 m?",
        "options": [
          "12 m",
          "6 m",
          "80 m",
          "15 m"
        ],
        "correct": 3,
        "answer": "15 m",
        "explanation": "Tačan odgovor je: 15 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB145",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 12 m ili 10 m?",
        "options": [
          "10 m",
          "12 m",
          "17 m",
          "0.13 m"
        ],
        "correct": 0,
        "answer": "10 m",
        "explanation": "Tačan odgovor je: 10 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB146",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 12 m ili 10 m?",
        "options": [
          "10 m",
          "12 m",
          "40 m",
          "160 m"
        ],
        "correct": 1,
        "answer": "12 m",
        "explanation": "Tačan odgovor je: 12 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB147",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 10 m ili 6 m?",
        "options": [
          "6 m",
          "12 m",
          "10 m",
          "17 m"
        ],
        "correct": 0,
        "answer": "6 m",
        "explanation": "Tačan odgovor je: 6 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB148",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 10 m ili 6 m?",
        "options": [
          "160 m",
          "6 m",
          "10 m",
          "17 m"
        ],
        "correct": 2,
        "answer": "10 m",
        "explanation": "Tačan odgovor je: 10 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB149",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 6 m ili 2 m?",
        "options": [
          "20 m",
          "2 m",
          "6 m",
          "80 m"
        ],
        "correct": 1,
        "answer": "2 m",
        "explanation": "Tačan odgovor je: 2 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB150",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 6 m ili 2 m?",
        "options": [
          "0.7 m",
          "6 m",
          "2 m",
          "30 m"
        ],
        "correct": 1,
        "answer": "6 m",
        "explanation": "Tačan odgovor je: 6 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB151",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 2 m ili 0.7 m?",
        "options": [
          "0.7 m",
          "2 m",
          "0.23 m",
          "30 m"
        ],
        "correct": 0,
        "answer": "0.7 m",
        "explanation": "Tačan odgovor je: 0.7 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB152",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 2 m ili 0.7 m?",
        "options": [
          "0.23 m",
          "0.7 m",
          "20 m",
          "2 m"
        ],
        "correct": 3,
        "answer": "2 m",
        "explanation": "Tačan odgovor je: 2 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB153",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 0.7 m ili 0.23 m?",
        "options": [
          "0.23 m",
          "0.7 m",
          "12 m",
          "40 m"
        ],
        "correct": 0,
        "answer": "0.23 m",
        "explanation": "Tačan odgovor je: 0.23 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB154",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 0.7 m ili 0.23 m?",
        "options": [
          "0.23 m",
          "6 m",
          "0.7 m",
          "12 m"
        ],
        "correct": 2,
        "answer": "0.7 m",
        "explanation": "Tačan odgovor je: 0.7 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB155",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima višu nominalnu frekvenciju: 0.23 m ili 0.13 m?",
        "options": [
          "0.23 m",
          "0.13 m",
          "160 m",
          "10 m"
        ],
        "correct": 1,
        "answer": "0.13 m",
        "explanation": "Tačan odgovor je: 0.13 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB156",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "poredjenje_opsega",
        "group": "poredjenje_opsega",
        "question": "Koji od ova dva opsega ima dužu talasnu dužinu: 0.23 m ili 0.13 m?",
        "options": [
          "0.23 m",
          "15 m",
          "80 m",
          "0.13 m"
        ],
        "correct": 0,
        "answer": "0.23 m",
        "explanation": "Tačan odgovor je: 0.23 m.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB157",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_primena",
        "group": "radio_spektar_primena",
        "question": "U koje područje radio spektra spada frekvencija 1 MHz?",
        "options": [
          "MF",
          "VHF",
          "EHF",
          "UHF"
        ],
        "correct": 0,
        "answer": "MF",
        "explanation": "Tačan odgovor je: MF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB158",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_primena",
        "group": "radio_spektar_primena",
        "question": "U koje područje radio spektra spada frekvencija 10 MHz?",
        "options": [
          "EHF",
          "MF",
          "HF",
          "VHF"
        ],
        "correct": 2,
        "answer": "HF",
        "explanation": "Tačan odgovor je: HF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB159",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_primena",
        "group": "radio_spektar_primena",
        "question": "U koje područje radio spektra spada frekvencija 50 MHz?",
        "options": [
          "UHF",
          "EHF",
          "MF",
          "VHF"
        ],
        "correct": 3,
        "answer": "VHF",
        "explanation": "Tačan odgovor je: VHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB160",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_primena",
        "group": "radio_spektar_primena",
        "question": "U koje područje radio spektra spada frekvencija 145 MHz?",
        "options": [
          "MF",
          "VHF",
          "EHF",
          "UHF"
        ],
        "correct": 1,
        "answer": "VHF",
        "explanation": "Tačan odgovor je: VHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB161",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_primena",
        "group": "radio_spektar_primena",
        "question": "U koje područje radio spektra spada frekvencija 433 MHz?",
        "options": [
          "MF",
          "HF",
          "UHF",
          "SHF"
        ],
        "correct": 2,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB162",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_primena",
        "group": "radio_spektar_primena",
        "question": "U koje područje radio spektra spada frekvencija 1.2 GHz?",
        "options": [
          "UHF",
          "HF",
          "EHF",
          "VHF"
        ],
        "correct": 0,
        "answer": "UHF",
        "explanation": "Tačan odgovor je: UHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB163",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_primena",
        "group": "radio_spektar_primena",
        "question": "U koje područje radio spektra spada frekvencija 10 GHz?",
        "options": [
          "UHF",
          "HF",
          "VHF",
          "SHF"
        ],
        "correct": 3,
        "answer": "SHF",
        "explanation": "Tačan odgovor je: SHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB164",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "radio_spektar_primena",
        "group": "radio_spektar_primena",
        "question": "U koje područje radio spektra spada frekvencija 100 GHz?",
        "options": [
          "EHF",
          "UHF",
          "SHF",
          "MF"
        ],
        "correct": 0,
        "answer": "EHF",
        "explanation": "Tačan odgovor je: EHF.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB165",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "160 m – 1.8 MHz",
          "30 m – 1.8 MHz",
          "160 m – 24 MHz",
          "160 m – 10 MHz"
        ],
        "correct": 0,
        "answer": "160 m – 1.8 MHz",
        "explanation": "Tačan odgovor je: 160 m – 1.8 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB166",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "0.7 m – 18 MHz",
          "12 m – 50 MHz",
          "20 m – 432 MHz",
          "80 m – 3.5 MHz"
        ],
        "correct": 3,
        "answer": "80 m – 3.5 MHz",
        "explanation": "Tačan odgovor je: 80 m – 3.5 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB167",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "80 m – 7 MHz",
          "40 m – 7 MHz",
          "6 m – 432 MHz",
          "160 m – 3.5 MHz"
        ],
        "correct": 1,
        "answer": "40 m – 7 MHz",
        "explanation": "Tačan odgovor je: 40 m – 7 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB168",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "30 m – 10 MHz",
          "15 m – 2.3 GHz",
          "2 m – 24 MHz",
          "0.23 m – 28 MHz"
        ],
        "correct": 0,
        "answer": "30 m – 10 MHz",
        "explanation": "Tačan odgovor je: 30 m – 10 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB169",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "20 m – 14 MHz",
          "160 m – 3.5 MHz",
          "0.23 m – 144 MHz",
          "80 m – 1296 MHz"
        ],
        "correct": 0,
        "answer": "20 m – 14 MHz",
        "explanation": "Tačan odgovor je: 20 m – 14 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB170",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "160 m – 3.5 MHz",
          "12 m – 10 MHz",
          "0.23 m – 7 MHz",
          "17 m – 18 MHz"
        ],
        "correct": 3,
        "answer": "17 m – 18 MHz",
        "explanation": "Tačan odgovor je: 17 m – 18 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB171",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "15 m – 21 MHz",
          "10 m – 2.3 GHz",
          "80 m – 50 MHz",
          "17 m – 2.3 GHz"
        ],
        "correct": 0,
        "answer": "15 m – 21 MHz",
        "explanation": "Tačan odgovor je: 15 m – 21 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB172",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "80 m – 21 MHz",
          "20 m – 144 MHz",
          "12 m – 24 MHz",
          "0.7 m – 1.8 MHz"
        ],
        "correct": 2,
        "answer": "12 m – 24 MHz",
        "explanation": "Tačan odgovor je: 12 m – 24 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB173",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "0.23 m – 1.8 MHz",
          "20 m – 3.5 MHz",
          "20 m – 10 MHz",
          "10 m – 28 MHz"
        ],
        "correct": 3,
        "answer": "10 m – 28 MHz",
        "explanation": "Tačan odgovor je: 10 m – 28 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB174",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "6 m – 50 MHz",
          "10 m – 18 MHz",
          "40 m – 28 MHz",
          "15 m – 18 MHz"
        ],
        "correct": 0,
        "answer": "6 m – 50 MHz",
        "explanation": "Tačan odgovor je: 6 m – 50 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB175",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "0.13 m – 50 MHz",
          "0.7 m – 10 MHz",
          "40 m – 2.3 GHz",
          "2 m – 144 MHz"
        ],
        "correct": 3,
        "answer": "2 m – 144 MHz",
        "explanation": "Tačan odgovor je: 2 m – 144 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB176",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "30 m – 1.8 MHz",
          "0.13 m – 10 MHz",
          "0.7 m – 432 MHz",
          "12 m – 3.5 MHz"
        ],
        "correct": 2,
        "answer": "0.7 m – 432 MHz",
        "explanation": "Tačan odgovor je: 0.7 m – 432 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB177",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "0.23 m – 1296 MHz",
          "15 m – 3.5 MHz",
          "10 m – 3.5 MHz",
          "160 m – 24 MHz"
        ],
        "correct": 0,
        "answer": "0.23 m – 1296 MHz",
        "explanation": "Tačan odgovor je: 0.23 m – 1296 MHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      },
      {
        "id": "RSB178",
        "bankId": "memo-radio-spektar-opsezi",
        "section": "TABLE_SPECTRUM_BANDS",
        "topic": "mesovita_pitanja",
        "group": "mesovita_pitanja",
        "question": "Koja kombinacija talasne dužine i nominalne frekvencije je tačna?",
        "options": [
          "0.13 m – 18 MHz",
          "2 m – 50 MHz",
          "80 m – 21 MHz",
          "0.13 m – 2.3 GHz"
        ],
        "correct": 3,
        "answer": "0.13 m – 2.3 GHz",
        "explanation": "Tačan odgovor je: 0.13 m – 2.3 GHz.",
        "source": "Priručnik str. 17 – radio spektar i radio-amaterski opsezi"
      }
    ],
    "questionCount": 178
  },
  {
    "bankId": "memo-q-kodovi-skracenice",
    "title": "Q-kodovi i radioamaterske skraćenice",
    "shortTitle": "Q-kodovi i skraćenice",
    "description": "Trening Q-kodova i najbitnijih radioamaterskih skraćenica u oba smera i kroz kontekst.",
    "category": "MEMORIZATION",
    "questions": [
      {
        "id": "QS001",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRB?",
        "options": [
          "Zauzet sam",
          "Koje je moje približno rastojanje iznosi ___ km",
          "Spreman sam za prijem",
          "Čitljivost vaših signala je: (1-5)"
        ],
        "correct": 1,
        "answer": "Koje je moje približno rastojanje iznosi ___ km",
        "explanation": "QRB se u tabeli koristi za: Koje je moje približno rastojanje iznosi ___ km. Zapamti ga kao: rastojanje / udaljenost između stanica.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS002",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Koje je moje približno rastojanje iznosi ___ km”?",
        "options": [
          "QRB",
          "QRM",
          "QRP",
          "QSO"
        ],
        "correct": 0,
        "answer": "QRB",
        "explanation": "Za značenje „Koje je moje približno rastojanje iznosi ___ km” koristi se Q-kod QRB.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS003",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: U vezi želiš da pitaš ili navedeš približno rastojanje između dve stanice.",
        "options": [
          "QSB",
          "QRZ",
          "QRB",
          "QRL"
        ],
        "correct": 2,
        "answer": "QRB",
        "explanation": "U toj situaciji koristi se QRB, jer označava: rastojanje / udaljenost između stanica.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS004",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRG?",
        "options": [
          "Moja lokacija je ___",
          "Moja tačna frekvencija je ___ kHz",
          "Vaše otpravljanje je neispravno",
          "Potvrđujem prijem"
        ],
        "correct": 1,
        "answer": "Moja tačna frekvencija je ___ kHz",
        "explanation": "QRG se u tabeli koristi za: Moja tačna frekvencija je ___ kHz. Zapamti ga kao: tačna frekvencija stanice.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS005",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Moja tačna frekvencija je ___ kHz”?",
        "options": [
          "QRM",
          "QRG",
          "QRK",
          "QRZ"
        ],
        "correct": 1,
        "answer": "QRG",
        "explanation": "Za značenje „Moja tačna frekvencija je ___ kHz” koristi se Q-kod QRG.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS006",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Želiš da proveriš ili saopštiš tačnu radnu frekvenciju.",
        "options": [
          "QSX",
          "QRX",
          "QRS",
          "QRG"
        ],
        "correct": 3,
        "answer": "QRG",
        "explanation": "U toj situaciji koristi se QRG, jer označava: tačna frekvencija stanice.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS007",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRK?",
        "options": [
          "Čitljivost vaših signala je: (1-5)",
          "Smanjite snagu",
          "Potvrđujem prijem",
          "Moja lokacija je ___"
        ],
        "correct": 0,
        "answer": "Čitljivost vaših signala je: (1-5)",
        "explanation": "QRK se u tabeli koristi za: Čitljivost vaših signala je: (1-5). Zapamti ga kao: čitljivost signala po oceni 1 do 5.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS008",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Čitljivost vaših signala je: (1-5)”?",
        "options": [
          "QRB",
          "QSX",
          "QRK",
          "QTH"
        ],
        "correct": 2,
        "answer": "QRK",
        "explanation": "Za značenje „Čitljivost vaših signala je: (1-5)” koristi se Q-kod QRK.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS009",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Treba da daš ocenu koliko je signal čitljiv od 1 do 5.",
        "options": [
          "QRN",
          "QRS",
          "QRK",
          "QSD"
        ],
        "correct": 2,
        "answer": "QRK",
        "explanation": "U toj situaciji koristi se QRK, jer označava: čitljivost signala po oceni 1 do 5.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS010",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRL?",
        "options": [
          "Zauzet sam",
          "Ko me je zvao?",
          "Potvrđujem prijem",
          "Slušam na ___ kHz"
        ],
        "correct": 0,
        "answer": "Zauzet sam",
        "explanation": "QRL se u tabeli koristi za: Zauzet sam. Zapamti ga kao: stanica je zauzeta.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS011",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Zauzet sam”?",
        "options": [
          "QRT",
          "QRL",
          "QRK",
          "QSB"
        ],
        "correct": 1,
        "answer": "QRL",
        "explanation": "Za značenje „Zauzet sam” koristi se Q-kod QRL.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS012",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Frekvencija je zauzeta i stanica ne može odmah da radi.",
        "options": [
          "QRQ",
          "QRL",
          "QTR",
          "QSD"
        ],
        "correct": 1,
        "answer": "QRL",
        "explanation": "U toj situaciji koristi se QRL, jer označava: stanica je zauzeta.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS013",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRM?",
        "options": [
          "Moja lokacija je ___",
          "Čitljivost vaših signala je: (1-5)",
          "Kada ćete me ponovo zvati?",
          "Od drugih stanica sam ometan (1-5)"
        ],
        "correct": 3,
        "answer": "Od drugih stanica sam ometan (1-5)",
        "explanation": "QRM se u tabeli koristi za: Od drugih stanica sam ometan (1-5). Zapamti ga kao: smetnje od drugih stanica.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS014",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Od drugih stanica sam ometan (1-5)”?",
        "options": [
          "QSB",
          "QRM",
          "QSO",
          "QRN"
        ],
        "correct": 1,
        "answer": "QRM",
        "explanation": "Za značenje „Od drugih stanica sam ometan (1-5)” koristi se Q-kod QRM.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS015",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Smetaju ti druge radio-stanice na istoj ili bliskoj frekvenciji.",
        "options": [
          "QRO",
          "QRM",
          "QRV",
          "QSY"
        ],
        "correct": 1,
        "answer": "QRM",
        "explanation": "U toj situaciji koristi se QRM, jer označava: smetnje od drugih stanica.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS016",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRN?",
        "options": [
          "Jačina mog signala varira",
          "Koje je moje približno rastojanje iznosi ___ km",
          "Pređite na drugu frekvenciju ___ kHz",
          "Od atmosferskih prilika sam ometan (1-5)"
        ],
        "correct": 3,
        "answer": "Od atmosferskih prilika sam ometan (1-5)",
        "explanation": "QRN se u tabeli koristi za: Od atmosferskih prilika sam ometan (1-5). Zapamti ga kao: atmosferske smetnje.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS017",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Od atmosferskih prilika sam ometan (1-5)”?",
        "options": [
          "QRZ",
          "QRN",
          "QRK",
          "QRL"
        ],
        "correct": 1,
        "answer": "QRN",
        "explanation": "Za značenje „Od atmosferskih prilika sam ometan (1-5)” koristi se Q-kod QRN.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS018",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Prijem ometaju atmosferske smetnje, šumovi i pražnjenja.",
        "options": [
          "QRZ",
          "QRO",
          "QTH",
          "QRN"
        ],
        "correct": 3,
        "answer": "QRN",
        "explanation": "U toj situaciji koristi se QRN, jer označava: atmosferske smetnje.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS019",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRO?",
        "options": [
          "Slušam na ___ kHz",
          "Prestanite sa radom",
          "Od drugih stanica sam ometan (1-5)",
          "Povećajte snagu"
        ],
        "correct": 3,
        "answer": "Povećajte snagu",
        "explanation": "QRO se u tabeli koristi za: Povećajte snagu. Zapamti ga kao: povećanje snage predajnika.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS020",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Povećajte snagu”?",
        "options": [
          "QRO",
          "QSB",
          "QRX",
          "QTH"
        ],
        "correct": 0,
        "answer": "QRO",
        "explanation": "Za značenje „Povećajte snagu” koristi se Q-kod QRO.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS021",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Drugu stanicu moliš da poveća snagu predajnika.",
        "options": [
          "QRG",
          "QRO",
          "QSY",
          "QRZ"
        ],
        "correct": 1,
        "answer": "QRO",
        "explanation": "U toj situaciji koristi se QRO, jer označava: povećanje snage predajnika.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS022",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRP?",
        "options": [
          "Smanjite snagu",
          "Čitljivost vaših signala je: (1-5)",
          "Šaljite sporije",
          "Slušam na ___ kHz"
        ],
        "correct": 0,
        "answer": "Smanjite snagu",
        "explanation": "QRP se u tabeli koristi za: Smanjite snagu. Zapamti ga kao: smanjenje snage predajnika.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS023",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Smanjite snagu”?",
        "options": [
          "QRP",
          "QTC",
          "QRL",
          "QRS"
        ],
        "correct": 0,
        "answer": "QRP",
        "explanation": "Za značenje „Smanjite snagu” koristi se Q-kod QRP.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS024",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Drugu stanicu moliš da smanji snagu predajnika.",
        "options": [
          "QSX",
          "QRP",
          "QRK",
          "QRB"
        ],
        "correct": 1,
        "answer": "QRP",
        "explanation": "U toj situaciji koristi se QRP, jer označava: smanjenje snage predajnika.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS025",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRQ?",
        "options": [
          "Spreman sam za prijem",
          "Vaše otpravljanje je neispravno",
          "Šaljite brže",
          "Slušam na ___ kHz"
        ],
        "correct": 2,
        "answer": "Šaljite brže",
        "explanation": "QRQ se u tabeli koristi za: Šaljite brže. Zapamti ga kao: slanje brže.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS026",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Šaljite brže”?",
        "options": [
          "QRV",
          "QRM",
          "QRB",
          "QRQ"
        ],
        "correct": 3,
        "answer": "QRQ",
        "explanation": "Za značenje „Šaljite brže” koristi se Q-kod QRQ.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS027",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Tražiš da korespondent šalje brže.",
        "options": [
          "QRQ",
          "QTC",
          "QTH",
          "QRV"
        ],
        "correct": 0,
        "answer": "QRQ",
        "explanation": "U toj situaciji koristi se QRQ, jer označava: slanje brže.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS028",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRS?",
        "options": [
          "Šaljite sporije",
          "Tačno je ___ sati",
          "Pređite na drugu frekvenciju ___ kHz",
          "Od drugih stanica sam ometan (1-5)"
        ],
        "correct": 0,
        "answer": "Šaljite sporije",
        "explanation": "QRS se u tabeli koristi za: Šaljite sporije. Zapamti ga kao: slanje sporije.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS029",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Šaljite sporije”?",
        "options": [
          "QSB",
          "QRN",
          "QRS",
          "QSD"
        ],
        "correct": 2,
        "answer": "QRS",
        "explanation": "Za značenje „Šaljite sporije” koristi se Q-kod QRS.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS030",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Tražiš da korespondent šalje sporije.",
        "options": [
          "QSX",
          "QRP",
          "QRS",
          "QRV"
        ],
        "correct": 2,
        "answer": "QRS",
        "explanation": "U toj situaciji koristi se QRS, jer označava: slanje sporije.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS031",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRT?",
        "options": [
          "Imate li telegram za mene?",
          "Šaljite sporije",
          "Prestanite sa radom",
          "Tačno je ___ sati"
        ],
        "correct": 2,
        "answer": "Prestanite sa radom",
        "explanation": "QRT se u tabeli koristi za: Prestanite sa radom. Zapamti ga kao: prekid rada / prestanak predaje.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS032",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Prestanite sa radom”?",
        "options": [
          "QRL",
          "QRT",
          "QRZ",
          "QRG"
        ],
        "correct": 1,
        "answer": "QRT",
        "explanation": "Za značenje „Prestanite sa radom” koristi se Q-kod QRT.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS033",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Stanica završava rad i prestaje sa predajom.",
        "options": [
          "QRS",
          "QRT",
          "QRX",
          "QSX"
        ],
        "correct": 1,
        "answer": "QRT",
        "explanation": "U toj situaciji koristi se QRT, jer označava: prekid rada / prestanak predaje.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS034",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRV?",
        "options": [
          "Spreman sam za prijem",
          "Koje je moje približno rastojanje iznosi ___ km",
          "Čitljivost vaših signala je: (1-5)",
          "Tačno je ___ sati"
        ],
        "correct": 0,
        "answer": "Spreman sam za prijem",
        "explanation": "QRV se u tabeli koristi za: Spreman sam za prijem. Zapamti ga kao: spremnost za prijem/rad.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS035",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Spreman sam za prijem”?",
        "options": [
          "QRP",
          "QRV",
          "QSO",
          "QRG"
        ],
        "correct": 1,
        "answer": "QRV",
        "explanation": "Za značenje „Spreman sam za prijem” koristi se Q-kod QRV.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS036",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Stanica javlja da je spremna za prijem.",
        "options": [
          "QRK",
          "QRV",
          "QRT",
          "QTR"
        ],
        "correct": 1,
        "answer": "QRV",
        "explanation": "U toj situaciji koristi se QRV, jer označava: spremnost za prijem/rad.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS037",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRX?",
        "options": [
          "Šaljite brže",
          "Kada ćete me ponovo zvati?",
          "Slušam na ___ kHz",
          "Jačina mog signala varira"
        ],
        "correct": 1,
        "answer": "Kada ćete me ponovo zvati?",
        "explanation": "QRX se u tabeli koristi za: Kada ćete me ponovo zvati?. Zapamti ga kao: čekanje / ponovno pozivanje.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS038",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Kada ćete me ponovo zvati?”?",
        "options": [
          "QSY",
          "QRX",
          "QRB",
          "QRM"
        ],
        "correct": 1,
        "answer": "QRX",
        "explanation": "Za značenje „Kada ćete me ponovo zvati?” koristi se Q-kod QRX.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS039",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Tražiš od stanice da sačeka ili pitaš kada će ponovo zvati.",
        "options": [
          "QRV",
          "QTH",
          "QRX",
          "QTC"
        ],
        "correct": 2,
        "answer": "QRX",
        "explanation": "U toj situaciji koristi se QRX, jer označava: čekanje / ponovno pozivanje.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS040",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QRZ?",
        "options": [
          "Šaljite sporije",
          "Ko me je zvao?",
          "Slušam na ___ kHz",
          "Zauzet sam"
        ],
        "correct": 1,
        "answer": "Ko me je zvao?",
        "explanation": "QRZ se u tabeli koristi za: Ko me je zvao?. Zapamti ga kao: ko poziva stanicu.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS041",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Ko me je zvao?”?",
        "options": [
          "QSL",
          "QRZ",
          "QRM",
          "QTH"
        ],
        "correct": 1,
        "answer": "QRZ",
        "explanation": "Za značenje „Ko me je zvao?” koristi se Q-kod QRZ.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS042",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Čuo si poziv, ali ne znaš ko te je zvao.",
        "options": [
          "QRZ",
          "QRO",
          "QRG",
          "QSL"
        ],
        "correct": 0,
        "answer": "QRZ",
        "explanation": "U toj situaciji koristi se QRZ, jer označava: ko poziva stanicu.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS043",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QSB?",
        "options": [
          "Mogu komunicirati sa ___",
          "Jačina mog signala varira",
          "Zauzet sam",
          "Povećajte snagu"
        ],
        "correct": 1,
        "answer": "Jačina mog signala varira",
        "explanation": "QSB se u tabeli koristi za: Jačina mog signala varira. Zapamti ga kao: variranje jačine signala.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS044",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Jačina mog signala varira”?",
        "options": [
          "QSY",
          "QRG",
          "QSB",
          "QRZ"
        ],
        "correct": 2,
        "answer": "QSB",
        "explanation": "Za značenje „Jačina mog signala varira” koristi se Q-kod QSB.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS045",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Signal povremeno jača i slabi tokom prijema.",
        "options": [
          "QSD",
          "QSO",
          "QSB",
          "QSX"
        ],
        "correct": 2,
        "answer": "QSB",
        "explanation": "U toj situaciji koristi se QSB, jer označava: variranje jačine signala.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS046",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QSD?",
        "options": [
          "Kada ćete me ponovo zvati?",
          "Vaše otpravljanje je neispravno",
          "Slušam na ___ kHz",
          "Ko me je zvao?"
        ],
        "correct": 1,
        "answer": "Vaše otpravljanje je neispravno",
        "explanation": "QSD se u tabeli koristi za: Vaše otpravljanje je neispravno. Zapamti ga kao: neispravno otpravljanje.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS047",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Vaše otpravljanje je neispravno”?",
        "options": [
          "QRP",
          "QSO",
          "QRT",
          "QSD"
        ],
        "correct": 3,
        "answer": "QSD",
        "explanation": "Za značenje „Vaše otpravljanje je neispravno” koristi se Q-kod QSD.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS048",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Korespondent otpravlja neispravno i treba mu skrenuti pažnju.",
        "options": [
          "QSL",
          "QSY",
          "QRX",
          "QSD"
        ],
        "correct": 3,
        "answer": "QSD",
        "explanation": "U toj situaciji koristi se QSD, jer označava: neispravno otpravljanje.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS049",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QSL?",
        "options": [
          "Potvrđujem prijem",
          "Jačina mog signala varira",
          "Imate li telegram za mene?",
          "Šaljite sporije"
        ],
        "correct": 0,
        "answer": "Potvrđujem prijem",
        "explanation": "QSL se u tabeli koristi za: Potvrđujem prijem. Zapamti ga kao: potvrda prijema.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS050",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Potvrđujem prijem”?",
        "options": [
          "QRN",
          "QSL",
          "QRB",
          "QSO"
        ],
        "correct": 1,
        "answer": "QSL",
        "explanation": "Za značenje „Potvrđujem prijem” koristi se Q-kod QSL.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS051",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Potvrđuješ da si primio poruku ili vezu.",
        "options": [
          "QSL",
          "QRL",
          "QRB",
          "QRV"
        ],
        "correct": 0,
        "answer": "QSL",
        "explanation": "U toj situaciji koristi se QSL, jer označava: potvrda prijema.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS052",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QSO?",
        "options": [
          "Mogu komunicirati sa ___",
          "Pređite na drugu frekvenciju ___ kHz",
          "Smanjite snagu",
          "Šaljite brže"
        ],
        "correct": 0,
        "answer": "Mogu komunicirati sa ___",
        "explanation": "QSO se u tabeli koristi za: Mogu komunicirati sa ___. Zapamti ga kao: radio-veza / komunikacija sa stanicom.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS053",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Mogu komunicirati sa ___”?",
        "options": [
          "QRV",
          "QSO",
          "QTC",
          "QSX"
        ],
        "correct": 1,
        "answer": "QSO",
        "explanation": "Za značenje „Mogu komunicirati sa ___” koristi se Q-kod QSO.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS054",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Govoriš o ostvarivanju radio-veze sa nekom stanicom.",
        "options": [
          "QSL",
          "QSX",
          "QRL",
          "QSO"
        ],
        "correct": 3,
        "answer": "QSO",
        "explanation": "U toj situaciji koristi se QSO, jer označava: radio-veza / komunikacija sa stanicom.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS055",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QSX?",
        "options": [
          "Od atmosferskih prilika sam ometan (1-5)",
          "Slušam na ___ kHz",
          "Šaljite brže",
          "Zauzet sam"
        ],
        "correct": 1,
        "answer": "Slušam na ___ kHz",
        "explanation": "QSX se u tabeli koristi za: Slušam na ___ kHz. Zapamti ga kao: slušanje na drugoj frekvenciji.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS056",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Slušam na ___ kHz”?",
        "options": [
          "QRO",
          "QSX",
          "QRM",
          "QSD"
        ],
        "correct": 1,
        "answer": "QSX",
        "explanation": "Za značenje „Slušam na ___ kHz” koristi se Q-kod QSX.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS057",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Stanica ne sluša na istoj frekvenciji, već na drugoj navedenoj frekvenciji.",
        "options": [
          "QRS",
          "QRL",
          "QRO",
          "QSX"
        ],
        "correct": 3,
        "answer": "QSX",
        "explanation": "U toj situaciji koristi se QSX, jer označava: slušanje na drugoj frekvenciji.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS058",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QSY?",
        "options": [
          "Jačina mog signala varira",
          "Ko me je zvao?",
          "Pređite na drugu frekvenciju ___ kHz",
          "Tačno je ___ sati"
        ],
        "correct": 2,
        "answer": "Pređite na drugu frekvenciju ___ kHz",
        "explanation": "QSY se u tabeli koristi za: Pređite na drugu frekvenciju ___ kHz. Zapamti ga kao: prelazak na drugu frekvenciju.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS059",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Pređite na drugu frekvenciju ___ kHz”?",
        "options": [
          "QRV",
          "QSY",
          "QRP",
          "QRK"
        ],
        "correct": 1,
        "answer": "QSY",
        "explanation": "Za značenje „Pređite na drugu frekvenciju ___ kHz” koristi se Q-kod QSY.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS060",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Dogovarate prelazak na drugu frekvenciju.",
        "options": [
          "QRX",
          "QRS",
          "QSY",
          "QRK"
        ],
        "correct": 2,
        "answer": "QSY",
        "explanation": "U toj situaciji koristi se QSY, jer označava: prelazak na drugu frekvenciju.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS061",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QTC?",
        "options": [
          "Imate li telegram za mene?",
          "Šaljite brže",
          "Zauzet sam",
          "Vaše otpravljanje je neispravno"
        ],
        "correct": 0,
        "answer": "Imate li telegram za mene?",
        "explanation": "QTC se u tabeli koristi za: Imate li telegram za mene?. Zapamti ga kao: telegram / poruka za stanicu.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS062",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Imate li telegram za mene?”?",
        "options": [
          "QSD",
          "QTC",
          "QRK",
          "QTR"
        ],
        "correct": 1,
        "answer": "QTC",
        "explanation": "Za značenje „Imate li telegram za mene?” koristi se Q-kod QTC.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS063",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Pitaš da li postoji telegram ili poruka za tvoju stanicu.",
        "options": [
          "QSO",
          "QRX",
          "QTC",
          "QSD"
        ],
        "correct": 2,
        "answer": "QTC",
        "explanation": "U toj situaciji koristi se QTC, jer označava: telegram / poruka za stanicu.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS064",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QTH?",
        "options": [
          "Moja lokacija je ___",
          "Zauzet sam",
          "Moja tačna frekvencija je ___ kHz",
          "Čitljivost vaših signala je: (1-5)"
        ],
        "correct": 0,
        "answer": "Moja lokacija je ___",
        "explanation": "QTH se u tabeli koristi za: Moja lokacija je ___. Zapamti ga kao: lokacija stanice.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS065",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Moja lokacija je ___”?",
        "options": [
          "QRV",
          "QTH",
          "QSX",
          "QRL"
        ],
        "correct": 1,
        "answer": "QTH",
        "explanation": "Za značenje „Moja lokacija je ___” koristi se Q-kod QTH.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS066",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Saopštavaš svoju lokaciju.",
        "options": [
          "QSX",
          "QRQ",
          "QTH",
          "QRK"
        ],
        "correct": 2,
        "answer": "QTH",
        "explanation": "U toj situaciji koristi se QTH, jer označava: lokacija stanice.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS067",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Q-kod -> značenje",
        "group": "Q-kod -> značenje",
        "question": "Šta znači Q-kod QTR?",
        "options": [
          "Moja tačna frekvencija je ___ kHz",
          "Tačno je ___ sati",
          "Šaljite brže",
          "Imate li telegram za mene?"
        ],
        "correct": 1,
        "answer": "Tačno je ___ sati",
        "explanation": "QTR se u tabeli koristi za: Tačno je ___ sati. Zapamti ga kao: tačno vreme.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS068",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> Q-kod",
        "group": "Značenje -> Q-kod",
        "question": "Koji Q-kod se koristi za značenje: „Tačno je ___ sati”?",
        "options": [
          "QTR",
          "QRZ",
          "QTC",
          "QTH"
        ],
        "correct": 0,
        "answer": "QTR",
        "explanation": "Za značenje „Tačno je ___ sati” koristi se Q-kod QTR.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS069",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koji Q-kod najviše odgovara situaciji: Saopštavaš tačno vreme.",
        "options": [
          "QTR",
          "QRV",
          "QTH",
          "QRK"
        ],
        "correct": 0,
        "answer": "QTR",
        "explanation": "U toj situaciji koristi se QTR, jer označava: tačno vreme.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS070",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica 33?",
        "options": [
          "Good night, laku noć",
          "Good morning, dobro jutro",
          "Thank you, hvala",
          "Pozdrav operatorki"
        ],
        "correct": 3,
        "answer": "Pozdrav operatorki",
        "explanation": "33 znači: Pozdrav operatorki. U praksi se odnosi na: pozdrav operatorki.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS071",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Pozdrav operatorki”?",
        "options": [
          "33",
          "GE",
          "GM",
          "K"
        ],
        "correct": 0,
        "answer": "33",
        "explanation": "Za „Pozdrav operatorki” koristi se skraćenica 33.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS072",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Želiš posebno da pozdraviš operatorku.",
        "options": [
          "DX",
          "SIGS",
          "GM",
          "33"
        ],
        "correct": 3,
        "answer": "33",
        "explanation": "U toj situaciji koristi se 33, jer znači: Pozdrav operatorki.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS073",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica 55?",
        "options": [
          "Severna Amerika",
          "Operatorka",
          "Mnogo uspeha",
          "Afrika"
        ],
        "correct": 2,
        "answer": "Mnogo uspeha",
        "explanation": "55 znači: Mnogo uspeha. U praksi se odnosi na: želja za mnogo uspeha.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS074",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Mnogo uspeha”?",
        "options": [
          "TKS, TNX, TU",
          "55",
          "Z",
          "PSE, PLS"
        ],
        "correct": 1,
        "answer": "55",
        "explanation": "Za „Mnogo uspeha” koristi se skraćenica 55.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS075",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Želiš nekome mnogo uspeha.",
        "options": [
          "55",
          "QSO",
          "SA",
          "OK"
        ],
        "correct": 0,
        "answer": "55",
        "explanation": "U toj situaciji koristi se 55, jer znači: Mnogo uspeha.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS076",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica 73?",
        "options": [
          "Transceiver, primopredajnik",
          "Sve u redu",
          "Mikrofon",
          "Puno pozdrava"
        ],
        "correct": 3,
        "answer": "Puno pozdrava",
        "explanation": "73 znači: Puno pozdrava. U praksi se odnosi na: standardni radioamaterski pozdrav.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS077",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Puno pozdrava”?",
        "options": [
          "S",
          "RST",
          "73",
          "33"
        ],
        "correct": 2,
        "answer": "73",
        "explanation": "Za „Puno pozdrava” koristi se skraćenica 73.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS078",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Na kraju radioamaterske veze šalješ uobičajen prijateljski pozdrav.",
        "options": [
          "73",
          "FRQ, FREQ",
          "SKED",
          "Z"
        ],
        "correct": 0,
        "answer": "73",
        "explanation": "U toj situaciji koristi se 73, jer znači: Puno pozdrava.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS079",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica 88?",
        "options": [
          "Dnevnik",
          "Puno pozdrava",
          "Poljupci",
          "Poziv na otpravljanje"
        ],
        "correct": 2,
        "answer": "Poljupci",
        "explanation": "88 znači: Poljupci. U praksi se odnosi na: pozdrav sa značenjem poljupci.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS080",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Poljupci”?",
        "options": [
          "S",
          "Z",
          "TRX, TRCV",
          "88"
        ],
        "correct": 3,
        "answer": "88",
        "explanation": "Za „Poljupci” koristi se skraćenica 88.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS081",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: U tabeli je navedeno značenje „poljupci”.",
        "options": [
          "GB",
          "88",
          "QSO",
          "33"
        ],
        "correct": 1,
        "answer": "88",
        "explanation": "U toj situaciji koristi se 88, jer znači: Poljupci.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS082",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica 99?",
        "options": [
          "Nestani bez traga - uvreda",
          "Puno pozdrava",
          "Dogovorena veza",
          "Snaga"
        ],
        "correct": 0,
        "answer": "Nestani bez traga - uvreda",
        "explanation": "99 znači: Nestani bez traga - uvreda. U praksi se odnosi na: uvredljiva skraćenica, ne koristi se u normalnoj vezi.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS083",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Nestani bez traga - uvreda”?",
        "options": [
          "TRX, TRCV",
          "TX",
          "99",
          "LOG"
        ],
        "correct": 2,
        "answer": "99",
        "explanation": "Za „Nestani bez traga - uvreda” koristi se skraćenica 99.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS084",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Želiš da prepoznaš uvredljivu skraćenicu koju ne treba koristiti u normalnoj vezi.",
        "options": [
          "99",
          "SKED",
          "MSG",
          "Z"
        ],
        "correct": 0,
        "answer": "99",
        "explanation": "U toj situaciji koristi se 99, jer znači: Nestani bez traga - uvreda.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS085",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica AF?",
        "options": [
          "Frekvencija",
          "Azija",
          "Afrika",
          "Opšti poziv"
        ],
        "correct": 2,
        "answer": "Afrika",
        "explanation": "AF znači: Afrika. U praksi se odnosi na: kontinent Afrika.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS086",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Afrika”?",
        "options": [
          "AF",
          "NW",
          "OM",
          "DX"
        ],
        "correct": 0,
        "answer": "AF",
        "explanation": "Za „Afrika” koristi se skraćenica AF.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS087",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: U logu ili raportu označavaš Afriku.",
        "options": [
          "AF",
          "99",
          "SKED",
          "GM"
        ],
        "correct": 0,
        "answer": "AF",
        "explanation": "U toj situaciji koristi se AF, jer znači: Afrika.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS088",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica AS?",
        "options": [
          "Ne",
          "Azija",
          "Now, sada",
          "Roger, razumeo, primljeno"
        ],
        "correct": 1,
        "answer": "Azija",
        "explanation": "AS znači: Azija. U praksi se odnosi na: kontinent Azija.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS089",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Azija”?",
        "options": [
          "S",
          "AS",
          "XYL",
          "CALL"
        ],
        "correct": 1,
        "answer": "AS",
        "explanation": "Za „Azija” koristi se skraćenica AS.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS090",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: U logu ili raportu označavaš Aziju.",
        "options": [
          "SA",
          "GA",
          "AS",
          "NW"
        ],
        "correct": 2,
        "answer": "AS",
        "explanation": "U toj situaciji koristi se AS, jer znači: Azija.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS091",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica CALL?",
        "options": [
          "Pozivni znak",
          "North, sever",
          "Puno pozdrava",
          "Poljupci"
        ],
        "correct": 0,
        "answer": "Pozivni znak",
        "explanation": "CALL znači: Pozivni znak. U praksi se odnosi na: pozivni znak stanice.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS092",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Pozivni znak”?",
        "options": [
          "CALL",
          "PWR",
          "N",
          "TRX, TRCV"
        ],
        "correct": 0,
        "answer": "CALL",
        "explanation": "Za „Pozivni znak” koristi se skraćenica CALL.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS093",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Tražiš ili navodiš pozivni znak stanice.",
        "options": [
          "GD",
          "MSG",
          "CALL",
          "73"
        ],
        "correct": 2,
        "answer": "CALL",
        "explanation": "U toj situaciji koristi se CALL, jer znači: Pozivni znak.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS094",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica CQ?",
        "options": [
          "Opšti poziv",
          "Frekvencija",
          "Transceiver, primopredajnik",
          "Good bye, doviđenja"
        ],
        "correct": 0,
        "answer": "Opšti poziv",
        "explanation": "CQ znači: Opšti poziv. U praksi se odnosi na: opšti poziv svim stanicama.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS095",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Opšti poziv”?",
        "options": [
          "OK",
          "MIKE, MICE",
          "CQ",
          "AF"
        ],
        "correct": 2,
        "answer": "CQ",
        "explanation": "Za „Opšti poziv” koristi se skraćenica CQ.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS096",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Pozivaš sve stanice koje te čuju.",
        "options": [
          "R",
          "RX",
          "TRX, TRCV",
          "CQ"
        ],
        "correct": 3,
        "answer": "CQ",
        "explanation": "U toj situaciji koristi se CQ, jer znači: Opšti poziv.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS097",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica DX?",
        "options": [
          "Sorry, žao mi je",
          "Daleka veza, stanica sa kojom radimo",
          "Good morning, dobro jutro",
          "North, sever"
        ],
        "correct": 1,
        "answer": "Daleka veza, stanica sa kojom radimo",
        "explanation": "DX znači: Daleka veza, stanica sa kojom radimo. U praksi se odnosi na: daleka veza ili udaljena stanica.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS098",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Daleka veza, stanica sa kojom radimo”?",
        "options": [
          "55",
          "DX",
          "TRX, TRCV",
          "AS"
        ],
        "correct": 1,
        "answer": "DX",
        "explanation": "Za „Daleka veza, stanica sa kojom radimo” koristi se skraćenica DX.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS099",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Govoriš o dalekoj radio-vezi.",
        "options": [
          "RPT",
          "DX",
          "RPRT",
          "R"
        ],
        "correct": 1,
        "answer": "DX",
        "explanation": "U toj situaciji koristi se DX, jer znači: Daleka veza, stanica sa kojom radimo.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS100",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica FRQ, FREQ?",
        "options": [
          "Poljupci",
          "Frekvencija",
          "Pozdrav operatorki",
          "Good day, dobar dan"
        ],
        "correct": 1,
        "answer": "Frekvencija",
        "explanation": "FRQ, FREQ znači: Frekvencija. U praksi se odnosi na: frekvencija.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS101",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Frekvencija”?",
        "options": [
          "FRQ, FREQ",
          "WX",
          "RPT",
          "R"
        ],
        "correct": 0,
        "answer": "FRQ, FREQ",
        "explanation": "Za „Frekvencija” koristi se skraćenica FRQ, FREQ.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS102",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Govoriš o radnoj frekvenciji.",
        "options": [
          "N",
          "OP",
          "FRQ, FREQ",
          "GM"
        ],
        "correct": 2,
        "answer": "FRQ, FREQ",
        "explanation": "U toj situaciji koristi se FRQ, FREQ, jer znači: Frekvencija.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS103",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica GA?",
        "options": [
          "Good afternoon, dobar dan",
          "Roger, razumeo, primljeno",
          "Report, izveštaj, raport",
          "Good bye, doviđenja"
        ],
        "correct": 0,
        "answer": "Good afternoon, dobar dan",
        "explanation": "GA znači: Good afternoon, dobar dan. U praksi se odnosi na: pozdrav dobar dan / good afternoon.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS104",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Good afternoon, dobar dan”?",
        "options": [
          "GA",
          "RPT",
          "XYL",
          "SK"
        ],
        "correct": 0,
        "answer": "GA",
        "explanation": "Za „Good afternoon, dobar dan” koristi se skraćenica GA.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS105",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Pozdravljaš korespondenta tokom dana izrazom good afternoon.",
        "options": [
          "Z",
          "GM",
          "N",
          "GA"
        ],
        "correct": 3,
        "answer": "GA",
        "explanation": "U toj situaciji koristi se GA, jer znači: Good afternoon, dobar dan.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS106",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica GB?",
        "options": [
          "South, jug",
          "Afrika",
          "Puno pozdrava",
          "Good bye, doviđenja"
        ],
        "correct": 3,
        "answer": "Good bye, doviđenja",
        "explanation": "GB znači: Good bye, doviđenja. U praksi se odnosi na: pozdrav pri završetku veze.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS107",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Good bye, doviđenja”?",
        "options": [
          "RST",
          "S",
          "GB",
          "AS"
        ],
        "correct": 2,
        "answer": "GB",
        "explanation": "Za „Good bye, doviđenja” koristi se skraćenica GB.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS108",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Završavaš vezu i kažeš doviđenja.",
        "options": [
          "SIGS",
          "SK",
          "GB",
          "N"
        ],
        "correct": 2,
        "answer": "GB",
        "explanation": "U toj situaciji koristi se GB, jer znači: Good bye, doviđenja.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS109",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica GD?",
        "options": [
          "Good morning, dobro jutro",
          "Izveštaj po RST skali",
          "Good day, dobar dan",
          "Good afternoon, dobar dan"
        ],
        "correct": 2,
        "answer": "Good day, dobar dan",
        "explanation": "GD znači: Good day, dobar dan. U praksi se odnosi na: pozdrav good day / dobar dan.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS110",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Good day, dobar dan”?",
        "options": [
          "99",
          "SK",
          "GD",
          "73"
        ],
        "correct": 2,
        "answer": "GD",
        "explanation": "Za „Good day, dobar dan” koristi se skraćenica GD.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS111",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Koristiš pozdrav good day / dobar dan.",
        "options": [
          "GD",
          "SA",
          "PWR",
          "73"
        ],
        "correct": 0,
        "answer": "GD",
        "explanation": "U toj situaciji koristi se GD, jer znači: Good day, dobar dan.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS112",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica GE?",
        "options": [
          "Good evening, dobro veče",
          "Mnogo uspeha",
          "Pozivni znak",
          "Good night, laku noć"
        ],
        "correct": 0,
        "answer": "Good evening, dobro veče",
        "explanation": "GE znači: Good evening, dobro veče. U praksi se odnosi na: pozdrav dobro veče.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS113",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Good evening, dobro veče”?",
        "options": [
          "33",
          "GE",
          "NA",
          "TRX, TRCV"
        ],
        "correct": 1,
        "answer": "GE",
        "explanation": "Za „Good evening, dobro veče” koristi se skraćenica GE.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS114",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Veza se radi uveče i pozdravljaš sa dobro veče.",
        "options": [
          "OC",
          "88",
          "GE",
          "SKED"
        ],
        "correct": 2,
        "answer": "GE",
        "explanation": "U toj situaciji koristi se GE, jer znači: Good evening, dobro veče.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS115",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica GM?",
        "options": [
          "Mnogo uspeha",
          "Južna Amerika",
          "Transmitter, predajnik",
          "Good morning, dobro jutro"
        ],
        "correct": 3,
        "answer": "Good morning, dobro jutro",
        "explanation": "GM znači: Good morning, dobro jutro. U praksi se odnosi na: pozdrav dobro jutro.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS116",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Good morning, dobro jutro”?",
        "options": [
          "R",
          "GM",
          "N",
          "GD"
        ],
        "correct": 1,
        "answer": "GM",
        "explanation": "Za „Good morning, dobro jutro” koristi se skraćenica GM.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS117",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Veza se radi ujutru i pozdravljaš sa dobro jutro.",
        "options": [
          "SRI",
          "GB",
          "GM",
          "N"
        ],
        "correct": 2,
        "answer": "GM",
        "explanation": "U toj situaciji koristi se GM, jer znači: Good morning, dobro jutro.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS118",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica GN?",
        "options": [
          "Good day, dobar dan",
          "Good night, laku noć",
          "Izveštaj po RST skali",
          "Južna Amerika"
        ],
        "correct": 1,
        "answer": "Good night, laku noć",
        "explanation": "GN znači: Good night, laku noć. U praksi se odnosi na: pozdrav laku noć.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS119",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Good night, laku noć”?",
        "options": [
          "GA",
          "R",
          "GN",
          "TKS, TNX, TU"
        ],
        "correct": 2,
        "answer": "GN",
        "explanation": "Za „Good night, laku noć” koristi se skraćenica GN.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS120",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Kasno je i pozdravljaš sa laku noć.",
        "options": [
          "LOG",
          "R",
          "GN",
          "55"
        ],
        "correct": 2,
        "answer": "GN",
        "explanation": "U toj situaciji koristi se GN, jer znači: Good night, laku noć.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS121",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica K?",
        "options": [
          "Poziv na otpravljanje",
          "Azija",
          "Južna Amerika",
          "Nestani bez traga - uvreda"
        ],
        "correct": 0,
        "answer": "Poziv na otpravljanje",
        "explanation": "K znači: Poziv na otpravljanje. U praksi se odnosi na: prepuštanje predaje drugoj stanici.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS122",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Poziv na otpravljanje”?",
        "options": [
          "R",
          "RPT",
          "K",
          "XYL"
        ],
        "correct": 2,
        "answer": "K",
        "explanation": "Za „Poziv na otpravljanje” koristi se skraćenica K.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS123",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Završio si svoju predaju i prepuštaš otpravljanje drugoj stanici.",
        "options": [
          "K",
          "AF",
          "55",
          "TKS, TNX, TU"
        ],
        "correct": 0,
        "answer": "K",
        "explanation": "U toj situaciji koristi se K, jer znači: Poziv na otpravljanje.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS124",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica LOG?",
        "options": [
          "Dnevnik",
          "Sorry, žao mi je",
          "Old mate, stari prijatelj",
          "Pozivni znak"
        ],
        "correct": 0,
        "answer": "Dnevnik",
        "explanation": "LOG znači: Dnevnik. U praksi se odnosi na: dnevnik veza.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS125",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Dnevnik”?",
        "options": [
          "GD",
          "MSG",
          "LOG",
          "GA"
        ],
        "correct": 2,
        "answer": "LOG",
        "explanation": "Za „Dnevnik” koristi se skraćenica LOG.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS126",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Upisuješ vezu u dnevnik.",
        "options": [
          "GE",
          "SA",
          "TX",
          "LOG"
        ],
        "correct": 3,
        "answer": "LOG",
        "explanation": "U toj situaciji koristi se LOG, jer znači: Dnevnik.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS127",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica MIKE, MICE?",
        "options": [
          "South, jug",
          "Okeanija",
          "Nestani bez traga - uvreda",
          "Mikrofon"
        ],
        "correct": 3,
        "answer": "Mikrofon",
        "explanation": "MIKE, MICE znači: Mikrofon. U praksi se odnosi na: mikrofon.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS128",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Mikrofon”?",
        "options": [
          "XYL",
          "MIKE, MICE",
          "WX",
          "K"
        ],
        "correct": 1,
        "answer": "MIKE, MICE",
        "explanation": "Za „Mikrofon” koristi se skraćenica MIKE, MICE.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS129",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Govoriš o mikrofonu.",
        "options": [
          "MIKE, MICE",
          "OP",
          "R",
          "RX"
        ],
        "correct": 0,
        "answer": "MIKE, MICE",
        "explanation": "U toj situaciji koristi se MIKE, MICE, jer znači: Mikrofon.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS130",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica MSG?",
        "options": [
          "Opšti poziv",
          "Thank you, hvala",
          "Puno pozdrava",
          "Message, poruka"
        ],
        "correct": 3,
        "answer": "Message, poruka",
        "explanation": "MSG znači: Message, poruka. U praksi se odnosi na: poruka.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS131",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Message, poruka”?",
        "options": [
          "RPRT",
          "33",
          "XYL",
          "MSG"
        ],
        "correct": 3,
        "answer": "MSG",
        "explanation": "Za „Message, poruka” koristi se skraćenica MSG.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS132",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Šalješ ili pominješ poruku.",
        "options": [
          "MSG",
          "SA",
          "NO",
          "DX"
        ],
        "correct": 0,
        "answer": "MSG",
        "explanation": "U toj situaciji koristi se MSG, jer znači: Message, poruka.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS133",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica N?",
        "options": [
          "Supruga",
          "Poljupci",
          "North, sever",
          "Puno pozdrava"
        ],
        "correct": 2,
        "answer": "North, sever",
        "explanation": "N znači: North, sever. U praksi se odnosi na: sever.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS134",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „North, sever”?",
        "options": [
          "OK",
          "R",
          "N",
          "QSO"
        ],
        "correct": 2,
        "answer": "N",
        "explanation": "Za „North, sever” koristi se skraćenica N.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS135",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Označavaš pravac sever.",
        "options": [
          "AS",
          "55",
          "N",
          "RPRT"
        ],
        "correct": 2,
        "answer": "N",
        "explanation": "U toj situaciji koristi se N, jer znači: North, sever.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS136",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica NA?",
        "options": [
          "Daleka veza, stanica sa kojom radimo",
          "Opšti poziv",
          "Silent key, završavam sa predajom",
          "Severna Amerika"
        ],
        "correct": 3,
        "answer": "Severna Amerika",
        "explanation": "NA znači: Severna Amerika. U praksi se odnosi na: kontinent Severna Amerika.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS137",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Severna Amerika”?",
        "options": [
          "NA",
          "R",
          "PSE, PLS",
          "SIGS"
        ],
        "correct": 0,
        "answer": "NA",
        "explanation": "Za „Severna Amerika” koristi se skraćenica NA.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS138",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Označavaš Severnu Ameriku.",
        "options": [
          "OM",
          "NA",
          "WX",
          "NO"
        ],
        "correct": 1,
        "answer": "NA",
        "explanation": "U toj situaciji koristi se NA, jer znači: Severna Amerika.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS139",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica NAME?",
        "options": [
          "Okeanija",
          "Ime",
          "Silent key, završavam sa predajom",
          "Poljupci"
        ],
        "correct": 1,
        "answer": "Ime",
        "explanation": "NAME znači: Ime. U praksi se odnosi na: ime operatora.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS140",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Ime”?",
        "options": [
          "MIKE, MICE",
          "NAME",
          "TX",
          "QSO"
        ],
        "correct": 1,
        "answer": "NAME",
        "explanation": "Za „Ime” koristi se skraćenica NAME.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS141",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Korespondentu saopštavaš svoje ime.",
        "options": [
          "NAME",
          "RST",
          "GM",
          "NW"
        ],
        "correct": 0,
        "answer": "NAME",
        "explanation": "U toj situaciji koristi se NAME, jer znači: Ime.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS142",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica NO?",
        "options": [
          "Good morning, dobro jutro",
          "Ne",
          "Report, izveštaj, raport",
          "Poljupci"
        ],
        "correct": 1,
        "answer": "Ne",
        "explanation": "NO znači: Ne. U praksi se odnosi na: negativan odgovor.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS143",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Ne”?",
        "options": [
          "GD",
          "PWR",
          "NO",
          "OC"
        ],
        "correct": 2,
        "answer": "NO",
        "explanation": "Za „Ne” koristi se skraćenica NO.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS144",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Daješ negativan odgovor.",
        "options": [
          "NO",
          "SRI",
          "RPT",
          "PWR"
        ],
        "correct": 0,
        "answer": "NO",
        "explanation": "U toj situaciji koristi se NO, jer znači: Ne.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS145",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica NW?",
        "options": [
          "Poziv na otpravljanje",
          "Now, sada",
          "Roger, razumeo, primljeno",
          "Dnevnik"
        ],
        "correct": 1,
        "answer": "Now, sada",
        "explanation": "NW znači: Now, sada. U praksi se odnosi na: sada.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS146",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Now, sada”?",
        "options": [
          "NW",
          "WX",
          "RX",
          "MSG"
        ],
        "correct": 0,
        "answer": "NW",
        "explanation": "Za „Now, sada” koristi se skraćenica NW.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS147",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Kažeš da se nešto dešava sada.",
        "options": [
          "33",
          "TX",
          "NW",
          "SIGS"
        ],
        "correct": 2,
        "answer": "NW",
        "explanation": "U toj situaciji koristi se NW, jer znači: Now, sada.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS148",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica OC?",
        "options": [
          "Okeanija",
          "Good evening, dobro veče",
          "Transmitter, predajnik",
          "Poziv na otpravljanje"
        ],
        "correct": 0,
        "answer": "Okeanija",
        "explanation": "OC znači: Okeanija. U praksi se odnosi na: kontinent Okeanija.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS149",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Okeanija”?",
        "options": [
          "RPRT",
          "OP",
          "OC",
          "SK"
        ],
        "correct": 2,
        "answer": "OC",
        "explanation": "Za „Okeanija” koristi se skraćenica OC.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS150",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Označavaš Okeaniju.",
        "options": [
          "OM",
          "RX",
          "OC",
          "OP"
        ],
        "correct": 2,
        "answer": "OC",
        "explanation": "U toj situaciji koristi se OC, jer znači: Okeanija.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS151",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica OK?",
        "options": [
          "Sve u redu",
          "Good day, dobar dan",
          "Puno pozdrava",
          "Veza"
        ],
        "correct": 0,
        "answer": "Sve u redu",
        "explanation": "OK znači: Sve u redu. U praksi se odnosi na: sve je u redu.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS152",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Sve u redu”?",
        "options": [
          "SIGS",
          "GD",
          "55",
          "OK"
        ],
        "correct": 3,
        "answer": "OK",
        "explanation": "Za „Sve u redu” koristi se skraćenica OK.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS153",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Potvrđuješ da je sve u redu.",
        "options": [
          "MSG",
          "OK",
          "TRX, TRCV",
          "GE"
        ],
        "correct": 1,
        "answer": "OK",
        "explanation": "U toj situaciji koristi se OK, jer znači: Sve u redu.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS154",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica OM?",
        "options": [
          "Please, molim",
          "Južna Amerika",
          "Old mate, stari prijatelj",
          "Message, poruka"
        ],
        "correct": 2,
        "answer": "Old mate, stari prijatelj",
        "explanation": "OM znači: Old mate, stari prijatelj. U praksi se odnosi na: stari prijatelj / muški radioamater.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS155",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Old mate, stari prijatelj”?",
        "options": [
          "R",
          "LOG",
          "YL",
          "OM"
        ],
        "correct": 3,
        "answer": "OM",
        "explanation": "Za „Old mate, stari prijatelj” koristi se skraćenica OM.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS156",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Obraćaš se starom prijatelju / radioamateru.",
        "options": [
          "OM",
          "CALL",
          "NO",
          "AS"
        ],
        "correct": 0,
        "answer": "OM",
        "explanation": "U toj situaciji koristi se OM, jer znači: Old mate, stari prijatelj.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS157",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica OP?",
        "options": [
          "Thank you, hvala",
          "Okeanija",
          "Operator",
          "Old mate, stari prijatelj"
        ],
        "correct": 2,
        "answer": "Operator",
        "explanation": "OP znači: Operator. U praksi se odnosi na: operator.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS158",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Operator”?",
        "options": [
          "YL",
          "OC",
          "NAME",
          "OP"
        ],
        "correct": 3,
        "answer": "OP",
        "explanation": "Za „Operator” koristi se skraćenica OP.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS159",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Govoriš o operatoru stanice.",
        "options": [
          "R",
          "N",
          "OP",
          "XYL"
        ],
        "correct": 2,
        "answer": "OP",
        "explanation": "U toj situaciji koristi se OP, jer znači: Operator.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS160",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica PSE, PLS?",
        "options": [
          "Message, poruka",
          "Please, molim",
          "Nestani bez traga - uvreda",
          "Operator"
        ],
        "correct": 1,
        "answer": "Please, molim",
        "explanation": "PSE, PLS znači: Please, molim. U praksi se odnosi na: molim.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS161",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Please, molim”?",
        "options": [
          "SIGS",
          "PSE, PLS",
          "FRQ, FREQ",
          "GD"
        ],
        "correct": 1,
        "answer": "PSE, PLS",
        "explanation": "Za „Please, molim” koristi se skraćenica PSE, PLS.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS162",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Ljubazno moliš korespondenta da nešto uradi.",
        "options": [
          "K",
          "PSE, PLS",
          "MIKE, MICE",
          "OM"
        ],
        "correct": 1,
        "answer": "PSE, PLS",
        "explanation": "U toj situaciji koristi se PSE, PLS, jer znači: Please, molim.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS163",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica PWR?",
        "options": [
          "Snaga",
          "Pozivni znak",
          "Poljupci",
          "Old mate, stari prijatelj"
        ],
        "correct": 0,
        "answer": "Snaga",
        "explanation": "PWR znači: Snaga. U praksi se odnosi na: snaga.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS164",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Snaga”?",
        "options": [
          "88",
          "OP",
          "PWR",
          "NAME"
        ],
        "correct": 2,
        "answer": "PWR",
        "explanation": "Za „Snaga” koristi se skraćenica PWR.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS165",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Pominješ snagu predajnika.",
        "options": [
          "99",
          "PWR",
          "SA",
          "SKED"
        ],
        "correct": 1,
        "answer": "PWR",
        "explanation": "U toj situaciji koristi se PWR, jer znači: Snaga.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS166",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica QSO?",
        "options": [
          "Opšti poziv",
          "Veza",
          "Nestani bez traga - uvreda",
          "Now, sada"
        ],
        "correct": 1,
        "answer": "Veza",
        "explanation": "QSO znači: Veza. U praksi se odnosi na: radio-veza.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS167",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Veza”?",
        "options": [
          "FRQ, FREQ",
          "73",
          "QSO",
          "Z"
        ],
        "correct": 2,
        "answer": "QSO",
        "explanation": "Za „Veza” koristi se skraćenica QSO.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS168",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Pominješ ostvarenu radio-vezu.",
        "options": [
          "SK",
          "K",
          "NA",
          "QSO"
        ],
        "correct": 3,
        "answer": "QSO",
        "explanation": "U toj situaciji koristi se QSO, jer znači: Veza.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS169",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica R?",
        "options": [
          "Roger, razumeo, primljeno",
          "Good night, laku noć",
          "Receiver, prijemnik",
          "Good evening, dobro veče"
        ],
        "correct": 0,
        "answer": "Roger, razumeo, primljeno",
        "explanation": "R znači: Roger, razumeo, primljeno. U praksi se odnosi na: razumeo / primljeno.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS170",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Roger, razumeo, primljeno”?",
        "options": [
          "OP",
          "R",
          "MIKE, MICE",
          "YL"
        ],
        "correct": 1,
        "answer": "R",
        "explanation": "Za „Roger, razumeo, primljeno” koristi se skraćenica R.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS171",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Potvrđuješ da si razumeo i primio poruku.",
        "options": [
          "PSE, PLS",
          "OP",
          "N",
          "R"
        ],
        "correct": 3,
        "answer": "R",
        "explanation": "U toj situaciji koristi se R, jer znači: Roger, razumeo, primljeno.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS172",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica RPRT?",
        "options": [
          "Zulu time, vreme po UTC",
          "Good morning, dobro jutro",
          "Dnevnik",
          "Report, izveštaj, raport"
        ],
        "correct": 3,
        "answer": "Report, izveštaj, raport",
        "explanation": "RPRT znači: Report, izveštaj, raport. U praksi se odnosi na: raport / izveštaj.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS173",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Report, izveštaj, raport”?",
        "options": [
          "SRI",
          "NA",
          "XYL",
          "RPRT"
        ],
        "correct": 3,
        "answer": "RPRT",
        "explanation": "Za „Report, izveštaj, raport” koristi se skraćenica RPRT.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS174",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Tražiš ili daješ izveštaj / raport.",
        "options": [
          "S",
          "RPRT",
          "DX",
          "AS"
        ],
        "correct": 1,
        "answer": "RPRT",
        "explanation": "U toj situaciji koristi se RPRT, jer znači: Report, izveštaj, raport.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS175",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica RPT?",
        "options": [
          "Sorry, žao mi je",
          "Roger, razumeo, primljeno",
          "Repeat, ponovite",
          "Good afternoon, dobar dan"
        ],
        "correct": 2,
        "answer": "Repeat, ponovite",
        "explanation": "RPT znači: Repeat, ponovite. U praksi se odnosi na: ponovite.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS176",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Repeat, ponovite”?",
        "options": [
          "99",
          "RPT",
          "N",
          "73"
        ],
        "correct": 1,
        "answer": "RPT",
        "explanation": "Za „Repeat, ponovite” koristi se skraćenica RPT.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS177",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Tražiš da korespondent ponovi poruku.",
        "options": [
          "73",
          "MIKE, MICE",
          "DX",
          "RPT"
        ],
        "correct": 3,
        "answer": "RPT",
        "explanation": "U toj situaciji koristi se RPT, jer znači: Repeat, ponovite.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS178",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica RST?",
        "options": [
          "Poljupci",
          "Izveštaj po RST skali",
          "Meteorološka situacija",
          "Good afternoon, dobar dan"
        ],
        "correct": 1,
        "answer": "Izveštaj po RST skali",
        "explanation": "RST znači: Izveštaj po RST skali. U praksi se odnosi na: raport po RST skali.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS179",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Izveštaj po RST skali”?",
        "options": [
          "YL",
          "RST",
          "GD",
          "99"
        ],
        "correct": 1,
        "answer": "RST",
        "explanation": "Za „Izveštaj po RST skali” koristi se skraćenica RST.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS180",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Daješ izveštaj po RST skali.",
        "options": [
          "GE",
          "NAME",
          "RST",
          "CALL"
        ],
        "correct": 2,
        "answer": "RST",
        "explanation": "U toj situaciji koristi se RST, jer znači: Izveštaj po RST skali.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS181",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica RX?",
        "options": [
          "Pozivni znak",
          "Poljupci",
          "Receiver, prijemnik",
          "North, sever"
        ],
        "correct": 2,
        "answer": "Receiver, prijemnik",
        "explanation": "RX znači: Receiver, prijemnik. U praksi se odnosi na: prijemnik.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS182",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Receiver, prijemnik”?",
        "options": [
          "RX",
          "OP",
          "YL",
          "PWR"
        ],
        "correct": 0,
        "answer": "RX",
        "explanation": "Za „Receiver, prijemnik” koristi se skraćenica RX.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS183",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Govoriš o prijemniku.",
        "options": [
          "GE",
          "GB",
          "RX",
          "RPRT"
        ],
        "correct": 2,
        "answer": "RX",
        "explanation": "U toj situaciji koristi se RX, jer znači: Receiver, prijemnik.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS184",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica S?",
        "options": [
          "South, jug",
          "Opšti poziv",
          "Južna Amerika",
          "Transmitter, predajnik"
        ],
        "correct": 0,
        "answer": "South, jug",
        "explanation": "S znači: South, jug. U praksi se odnosi na: jug.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS185",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „South, jug”?",
        "options": [
          "S",
          "99",
          "Z",
          "MIKE, MICE"
        ],
        "correct": 0,
        "answer": "S",
        "explanation": "Za „South, jug” koristi se skraćenica S.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS186",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Označavaš pravac jug.",
        "options": [
          "88",
          "S",
          "SRI",
          "RST"
        ],
        "correct": 1,
        "answer": "S",
        "explanation": "U toj situaciji koristi se S, jer znači: South, jug.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS187",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica SA?",
        "options": [
          "Mikrofon",
          "Ne",
          "Južna Amerika",
          "Signali, signal report"
        ],
        "correct": 2,
        "answer": "Južna Amerika",
        "explanation": "SA znači: Južna Amerika. U praksi se odnosi na: kontinent Južna Amerika.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS188",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Južna Amerika”?",
        "options": [
          "SA",
          "NAME",
          "GN",
          "AS"
        ],
        "correct": 0,
        "answer": "SA",
        "explanation": "Za „Južna Amerika” koristi se skraćenica SA.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS189",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Označavaš Južnu Ameriku.",
        "options": [
          "73",
          "OK",
          "SA",
          "RX"
        ],
        "correct": 2,
        "answer": "SA",
        "explanation": "U toj situaciji koristi se SA, jer znači: Južna Amerika.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS190",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica SIGS?",
        "options": [
          "Meteorološka situacija",
          "Now, sada",
          "Good afternoon, dobar dan",
          "Signali, signal report"
        ],
        "correct": 3,
        "answer": "Signali, signal report",
        "explanation": "SIGS znači: Signali, signal report. U praksi se odnosi na: signali / raport signala.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS191",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Signali, signal report”?",
        "options": [
          "CALL",
          "YL",
          "SIGS",
          "R"
        ],
        "correct": 2,
        "answer": "SIGS",
        "explanation": "Za „Signali, signal report” koristi se skraćenica SIGS.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS192",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Govoriš o signalima ili raportu signala.",
        "options": [
          "WX",
          "SIGS",
          "OM",
          "DX"
        ],
        "correct": 1,
        "answer": "SIGS",
        "explanation": "U toj situaciji koristi se SIGS, jer znači: Signali, signal report.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS193",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica SK?",
        "options": [
          "Transmitter, predajnik",
          "Snaga",
          "Silent key, završavam sa predajom",
          "Ne"
        ],
        "correct": 2,
        "answer": "Silent key, završavam sa predajom",
        "explanation": "SK znači: Silent key, završavam sa predajom. U praksi se odnosi na: završavam sa predajom.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS194",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Silent key, završavam sa predajom”?",
        "options": [
          "SK",
          "RX",
          "NW",
          "SIGS"
        ],
        "correct": 0,
        "answer": "SK",
        "explanation": "Za „Silent key, završavam sa predajom” koristi se skraćenica SK.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS195",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Završavaš predaju.",
        "options": [
          "LOG",
          "SK",
          "XYL",
          "NO"
        ],
        "correct": 1,
        "answer": "SK",
        "explanation": "U toj situaciji koristi se SK, jer znači: Silent key, završavam sa predajom.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS196",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica SKED?",
        "options": [
          "Dogovorena veza",
          "Mnogo uspeha",
          "Frekvencija",
          "Roger, razumeo, primljeno"
        ],
        "correct": 0,
        "answer": "Dogovorena veza",
        "explanation": "SKED znači: Dogovorena veza. U praksi se odnosi na: dogovorena veza.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS197",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Dogovorena veza”?",
        "options": [
          "RPT",
          "SKED",
          "TKS, TNX, TU",
          "GE"
        ],
        "correct": 1,
        "answer": "SKED",
        "explanation": "Za „Dogovorena veza” koristi se skraćenica SKED.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS198",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Dogovaraš vezu u određeno vreme ili na određenoj frekvenciji.",
        "options": [
          "SKED",
          "DX",
          "GB",
          "RPT"
        ],
        "correct": 0,
        "answer": "SKED",
        "explanation": "U toj situaciji koristi se SKED, jer znači: Dogovorena veza.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS199",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica SRI?",
        "options": [
          "Sorry, žao mi je",
          "Supruga",
          "Receiver, prijemnik",
          "Meteorološka situacija"
        ],
        "correct": 0,
        "answer": "Sorry, žao mi je",
        "explanation": "SRI znači: Sorry, žao mi je. U praksi se odnosi na: izvinjenje / žao mi je.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS200",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Sorry, žao mi je”?",
        "options": [
          "TKS, TNX, TU",
          "XYL",
          "SRI",
          "TX"
        ],
        "correct": 2,
        "answer": "SRI",
        "explanation": "Za „Sorry, žao mi je” koristi se skraćenica SRI.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS201",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Izvinjavaš se ili kažeš da ti je žao.",
        "options": [
          "55",
          "OK",
          "SRI",
          "SKED"
        ],
        "correct": 2,
        "answer": "SRI",
        "explanation": "U toj situaciji koristi se SRI, jer znači: Sorry, žao mi je.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS202",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica TKS, TNX, TU?",
        "options": [
          "Veza",
          "Thank you, hvala",
          "Meteorološka situacija",
          "Izveštaj po RST skali"
        ],
        "correct": 1,
        "answer": "Thank you, hvala",
        "explanation": "TKS, TNX, TU znači: Thank you, hvala. U praksi se odnosi na: hvala.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS203",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Thank you, hvala”?",
        "options": [
          "GB",
          "TKS, TNX, TU",
          "99",
          "GM"
        ],
        "correct": 1,
        "answer": "TKS, TNX, TU",
        "explanation": "Za „Thank you, hvala” koristi se skraćenica TKS, TNX, TU.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS204",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Zahvaljuješ se korespondentu.",
        "options": [
          "CQ",
          "RX",
          "GB",
          "TKS, TNX, TU"
        ],
        "correct": 3,
        "answer": "TKS, TNX, TU",
        "explanation": "U toj situaciji koristi se TKS, TNX, TU, jer znači: Thank you, hvala.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS205",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica TRX, TRCV?",
        "options": [
          "Mnogo uspeha",
          "Poziv na otpravljanje",
          "Opšti poziv",
          "Transceiver, primopredajnik"
        ],
        "correct": 3,
        "answer": "Transceiver, primopredajnik",
        "explanation": "TRX, TRCV znači: Transceiver, primopredajnik. U praksi se odnosi na: primopredajnik.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS206",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Transceiver, primopredajnik”?",
        "options": [
          "FRQ, FREQ",
          "TRX, TRCV",
          "PSE, PLS",
          "MIKE, MICE"
        ],
        "correct": 1,
        "answer": "TRX, TRCV",
        "explanation": "Za „Transceiver, primopredajnik” koristi se skraćenica TRX, TRCV.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS207",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Govoriš o primopredajniku.",
        "options": [
          "OK",
          "SK",
          "SIGS",
          "TRX, TRCV"
        ],
        "correct": 3,
        "answer": "TRX, TRCV",
        "explanation": "U toj situaciji koristi se TRX, TRCV, jer znači: Transceiver, primopredajnik.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS208",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica TX?",
        "options": [
          "Puno pozdrava",
          "Transmitter, predajnik",
          "Izveštaj po RST skali",
          "Snaga"
        ],
        "correct": 1,
        "answer": "Transmitter, predajnik",
        "explanation": "TX znači: Transmitter, predajnik. U praksi se odnosi na: predajnik.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS209",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Transmitter, predajnik”?",
        "options": [
          "NW",
          "GD",
          "MIKE, MICE",
          "TX"
        ],
        "correct": 3,
        "answer": "TX",
        "explanation": "Za „Transmitter, predajnik” koristi se skraćenica TX.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS210",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Govoriš o predajniku.",
        "options": [
          "NAME",
          "DX",
          "TX",
          "NO"
        ],
        "correct": 2,
        "answer": "TX",
        "explanation": "U toj situaciji koristi se TX, jer znači: Transmitter, predajnik.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS211",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica WX?",
        "options": [
          "Meteorološka situacija",
          "Old mate, stari prijatelj",
          "Silent key, završavam sa predajom",
          "Transmitter, predajnik"
        ],
        "correct": 0,
        "answer": "Meteorološka situacija",
        "explanation": "WX znači: Meteorološka situacija. U praksi se odnosi na: vremenske prilike.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS212",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Meteorološka situacija”?",
        "options": [
          "WX",
          "GD",
          "NAME",
          "SKED"
        ],
        "correct": 0,
        "answer": "WX",
        "explanation": "Za „Meteorološka situacija” koristi se skraćenica WX.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS213",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Pominješ vremenske prilike.",
        "options": [
          "DX",
          "NAME",
          "CALL",
          "WX"
        ],
        "correct": 3,
        "answer": "WX",
        "explanation": "U toj situaciji koristi se WX, jer znači: Meteorološka situacija.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS214",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica XYL?",
        "options": [
          "Supruga",
          "Južna Amerika",
          "Good day, dobar dan",
          "Operatorka"
        ],
        "correct": 0,
        "answer": "Supruga",
        "explanation": "XYL znači: Supruga. U praksi se odnosi na: supruga operatora.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS215",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Supruga”?",
        "options": [
          "RST",
          "XYL",
          "99",
          "OM"
        ],
        "correct": 1,
        "answer": "XYL",
        "explanation": "Za „Supruga” koristi se skraćenica XYL.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS216",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Pominješ suprugu operatora.",
        "options": [
          "XYL",
          "GA",
          "55",
          "GE"
        ],
        "correct": 0,
        "answer": "XYL",
        "explanation": "U toj situaciji koristi se XYL, jer znači: Supruga.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS217",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica YL?",
        "options": [
          "Frekvencija",
          "Good afternoon, dobar dan",
          "Poziv na otpravljanje",
          "Operatorka"
        ],
        "correct": 3,
        "answer": "Operatorka",
        "explanation": "YL znači: Operatorka. U praksi se odnosi na: ženski operator / operatorka.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS218",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Operatorka”?",
        "options": [
          "Z",
          "YL",
          "SIGS",
          "AS"
        ],
        "correct": 1,
        "answer": "YL",
        "explanation": "Za „Operatorka” koristi se skraćenica YL.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS219",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Pominješ operatorku.",
        "options": [
          "YL",
          "73",
          "QSO",
          "RST"
        ],
        "correct": 0,
        "answer": "YL",
        "explanation": "U toj situaciji koristi se YL, jer znači: Operatorka.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS220",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Skraćenica -> značenje",
        "group": "Skraćenica -> značenje",
        "question": "Šta znači radioamaterska skraćenica Z?",
        "options": [
          "Zulu time, vreme po UTC",
          "Old mate, stari prijatelj",
          "Mikrofon",
          "Sorry, žao mi je"
        ],
        "correct": 0,
        "answer": "Zulu time, vreme po UTC",
        "explanation": "Z znači: Zulu time, vreme po UTC. U praksi se odnosi na: UTC vreme / Zulu time.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS221",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Značenje -> skraćenica",
        "group": "Značenje -> skraćenica",
        "question": "Koja skraćenica odgovara značenju: „Zulu time, vreme po UTC”?",
        "options": [
          "55",
          "OK",
          "Z",
          "88"
        ],
        "correct": 2,
        "answer": "Z",
        "explanation": "Za „Zulu time, vreme po UTC” koristi se skraćenica Z.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      },
      {
        "id": "QS222",
        "bankId": "memo-q-kodovi-skracenice",
        "section": "MEMO_Q_CODES_ABBREVIATIONS",
        "topic": "Kontekst",
        "group": "Kontekst",
        "question": "Koja skraćenica najviše odgovara situaciji: Vreme navodiš po UTC / Zulu vremenu.",
        "options": [
          "SK",
          "DX",
          "N",
          "Z"
        ],
        "correct": 3,
        "answer": "Z",
        "explanation": "U toj situaciji koristi se Z, jer znači: Zulu time, vreme po UTC.",
        "source": "q_kodovi_i_radioamaterske_skracenice_vezbanje.txt"
      }
    ],
    "questionCount": 222
  }
];
