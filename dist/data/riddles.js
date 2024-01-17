getRiddles = function () {
  return [
    [
      {
        question: {
          de: "Was hat der Henker in der Hand?",
          en: "What does the executioner have in his hand?"
        },
        answers: [
          { de: "Hut", en: "hat", correct: false, points: 0 },
          { de: "Regenschirm", en: "umbrella", correct: false, points: 0 },
          { de: "Beil", en: "axe", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Was trägt der Henker auf dem Kopf?",
          en: "What does the executioner wear on his head?"
        },
        answers: [
          { de: "Hut", en: "hat", correct: false, points: 0 },
          { de: "Sack", en: "sack", correct: true, points: 10 },
          { de: "Brille", en: "glasses", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was trägt das Opfer?",
          en: "What does the victim wear?"
        },
        answers: [
          { de: "Brille", en: "glasses", correct: true, points: 10 },
          { de: "Mantel", en: "coat", correct: false, points: 0 },
          { de: "Sack", en: "sack", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was hängt am Kleiderständer?",
          en: "What hangs on the coathanger?"
        },
        answers: [
          { de: "Mantel", en: "coat", correct: true, points: 10 },
          { de: "Brille", en: "glases", correct: false, points: 0 },
          { de: "Regenschirm", en: "umbrella", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Wie viele Bücher gibt es?",
          en: "How many books are there?"
        },
        answers: [
          { de: "1", en: "1", correct: false, points: 0 },
          { de: "5", en: "5", correct: true, points: 10 },
          { de: "3", en: "3", correct: false, points: 0 }
        ]
      }
    ],
    [
      {
        question: {
          de: "Wie viele Guhle zählst du?",
          en: "How many gouhls do you count?"
        },
        answers: [
          { de: "1", en: "1", correct: false, points: 0 },
          { de: "3", en: "3", correct: true, points: 10 },
          { de: "2", en: "2", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was ist nicht im Kühlschrank?",
          en: "What is not in the fridge?"
        },
        answers: [
          { de: "Arm", en: "arm", correct: false, points: 0 },
          { de: "Fuß", en: "foot", correct: true, points: 10 },
          { de: "Kopf", en: "head", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Wie viele Dosen gibt es?",
          en: "How many cans are there?"
        },
        answers: [
          { de: "7", en: "7", correct: false, points: 0 },
          { de: "8", en: "8", correct: true, points: 10 },
          { de: "9", en: "9", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was ist nicht in der Szene?",
          en: "What is not in the scene?"
        },
        answers: [
          { de: "Teller", en: "plates", correct: false, points: 0 },
          { de: "Tonnen", en: "bins", correct: false, points: 0 },
          { de: "Gabeln", en: "forks", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Was hält ein Guhl in der Hand?",
          en: "What's a ghoul holding in his hand?"
        },
        answers: [
          { de: "Flasche", en: "bottle", correct: true, points: 10 },
          { de: "Messer", en: "knife", correct: false, points: 0 },
          { de: "Tasse", en: "cup", correct: false, points: 0 }
        ]
      }
    ],
    [
      {
        question: {
          de: "Welcher Zombie macht ein Nickerchen?",
          en: "Which zombie is taking a nap?"
        },
        answers: [
          { de: "Opa", en: "grandpa", correct: false, points: 0 },
          { de: "Oma", en: "grandma", correct: true, points: 10 },
          { de: "Baby", en: "baby", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Welcher Zombie hat zu viel getrunken?",
          en: "Which zombie has drunk too much?"
        },
        answers: [
          { de: "Punker", en: "punk", correct: true, points: 10 },
          { de: "Metaller", en: "metalhead", correct: false, points: 0 },
          { de: "Oma", en: "grandma", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Du sollst nicht...?",
          en: "You shall not...?"
        },
        answers: [
          { de: "herumrennen", en: "run around", correct: false, points: 0 },
          { de: "kleckern", en: "spill", correct: false, points: 0 },
          { de: "kippeln", en: "trock the chair", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Was trägt jemand um den Kopf?",
          en: "What is someone wearing around their head?"
        },
        answers: [
          { de: "Verband", en: "bandage", correct: true, points: 10 },
          { de: "Krone", en: "crown", correct: false, points: 0 },
          { de: "Federschmuck", en: "feather ornaments", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was ist auf den Boxer-Shorts?",
          en: "What's on the boxer shorts?"
        },
        answers: [
          { de: "Blumen", en: "flowers", correct: false, points: 0 },
          { de: "Herzen", en: "hearts", correct: true, points: 10 },
          { de: "Fäuste", en: "fists", correct: false, points: 0 }
        ]
      }
    ],
    [
      {
        question: {
          de: "Wer lauert in der Ecke?",
          en: "Wer lauert in der Ecke?"
        },
        answers: [
          { de: "Vampir", en: "Vampir", correct: false, points: 0 },
          { de: "Hexe", en: "exe", correct: false, points: 0 },
          { de: "Werwolf", en: "Werwolf", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Wer ist das Opfer?",
          en: "Wer ist das Opfer?"
        },
        answers: [
          { de: "Frau", en: "Frau", correct: true, points: 10 },
          { de: "Mann", en: "Mann", correct: false, points: 0 },
          { de: "Junge", en: "Junge", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Wodurch ist das Opfer gestorben?",
          en: "Wodurch ist das Opfer gestorben?"
        },
        answers: [
          { de: "Elektroschock", en: "Elektroschock", correct: true, points: 10 },
          { de: "Ertrinken", en: "Ertrinken", correct: false, points: 0 },
          { de: "Guillotine", en: "Guillotine", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Wovon gibt es genau drei?",
          en: "Wovon gibt es genau drei?"
        },
        answers: [
          { de: "Bücher", en: "Bücher", correct: false, points: 0 },
          { de: "Kerzen", en: "Kerzen", correct: true, points: 10 },
          { de: "Klopapierrollen", en: "Klopapierrollen", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was steht nicht offen?",
          en: "Was steht nicht offen?"
        },
        answers: [
          { de: "Fenster", en: "Fenster", correct: false, points: 0 },
          { de: "Hängeschrank", en: "Hängeschrank", correct: false, points: 0 },
          { de: "Spülkasten", en: "Spülkasten", correct: true, points: 10 }
        ]
      }
    ],
    [
      {
        question: {
          de: "Was passiert hier?",
          en: "Was passiert hier?"
        },
        answers: [
          { de: "Beschwörung", en: "Beschwörung", correct: true, points: 10 },
          { de: "Exorzismus", en: "Exorzismus", correct: false, points: 0 },
          { de: "Folter", en: "Folter", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was hat die Beschwörerin in der Hand?",
          en: "Was hat die Beschwörerin in der Hand?"
        },
        answers: [
          { de: "Kerze", en: "Kerze", correct: false, points: 0 },
          { de: "Messer", en: "Messer", correct: false, points: 0 },
          { de: "Buch", en: "Buch", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Was trägt die Beschwörerin im Gesicht?",
          en: "Was trägt die Beschwörerin im Gesicht?"
        },
        answers: [
          { de: "Maske", en: "Maske", correct: true, points: 10 },
          { de: "Nichts", en: "Nichts", correct: false, points: 0 },
          { de: "Schleier", en: "Schleier", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Wer wurde beschworen?",
          en: "Wer wurde beschworen?"
        },
        answers: [
          { de: "Zombie", en: "Zombie", correct: false, points: 0 },
          { de: "Dämon", en: "Dämon", correct: true, points: 10 },
          { de: "Guhl", en: "Guhl", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was befindet sich auf dem Boden?",
          en: "Was befindet sich auf dem Boden?"
        },
        answers: [
          { de: "Lampe", en: "Lampe", correct: false, points: 0 },
          { de: "Telefon", en: "Telefon", correct: false, points: 0 },
          { de: "Pentagramm", en: "Pentagramm", correct: true, points: 10 }
        ]
      }
    ],
    [
      {
        question: {
          de: "Wer sitzt im Schaukelstuhl?",
          en: "Wer sitzt im Schaukelstuhl?"
        },
        answers: [
          { de: "Henker", en: "Henker", correct: false, points: 0 },
          { de: "Vampir", en: "Vampir", correct: true, points: 10 },
          { de: "Guhl", en: "Guhl", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was hat der Mann in der Hand?",
          en: "Was hat der Mann in der Hand?"
        },
        answers: [
          { de: "Kreuz", en: "Kreuz", correct: true, points: 10 },
          { de: "Ampulle", en: "Ampulle", correct: false, points: 0 },
          { de: "Fackel", en: "Fackel", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was ist zerbrochen?",
          en: "Was ist zerbrochen?"
        },
        answers: [
          { de: "Spiegel", en: "Spiegel", correct: true, points: 10 },
          { de: "Flasche", en: "Flasche", correct: false, points: 0 },
          { de: "Kristallkugel", en: "Kristallkugel", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Wer lauert in der Ecke?",
          en: "Wer lauert in der Ecke?"
        },
        answers: [
          { de: "Hexe", en: "Hexe", correct: false, points: 0 },
          { de: "Zombie", en: "Zombie", correct: false, points: 0 },
          { de: "Guhl", en: "Guhl", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Was schwebt in der Luft?",
          en: "Was schwebt in der Luft?"
        },
        answers: [
          { de: "Holzpfahl", en: "Holzpfahl", correct: false, points: 0 },
          { de: "Kristallkugel", en: "Kristallkugel", correct: true, points: 10 },
          { de: "Koffer", en: "Koffer", correct: false, points: 0 }
        ]
      }
    ],
    [
      {
        question: {
          de: "Wer tanzt umher?",
          en: "Wer tanzt umher?"
        },
        answers: [
          { de: "Zombies", en: "Zombies", correct: false, points: 0 },
          { de: "Hexen", en: "Hexen", correct: false, points: 0 },
          { de: "Skelette", en: "Skelette", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Was hat die Frau im Rücken?",
          en: "Was hat die Frau im Rücken?"
        },
        answers: [
          { de: "Messer", en: "Messer", correct: true, points: 10 },
          { de: "Pistolenkugel", en: "Pistolenkugel", correct: false, points: 0 },
          { de: "Beil", en: "Axe", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Wovon gibt es genau fünf?",
          en: "Wovon gibt es genau fünf?"
        },
        answers: [
          { de: "Kerzen", en: "Kerzen", correct: false, points: 0 },
          { de: "Flaschen", en: "Flaschen", correct: true, points: 10 },
          { de: "Buchseiten", en: "Buchseiten", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Worauf oder worin liegt die Pistole?",
          en: "Worauf oder worin liegt die Pistole?"
        },
        answers: [
          { de: "Sideboard", en: "Sideboard", correct: false, points: 0 },
          { de: "Sofa", en: "Sofa", correct: false, points: 0 },
          { de: "Schublade", en: "Schublade", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Wovon gibt es genau drei?",
          en: "Wovon gibt es genau drei?"
        },
        answers: [
          { de: "Schädel", en: "Schädel", correct: false, points: 0 },
          { de: "Zigaretten", en: "Zigaretten", correct: false, points: 0 },
          { de: "Kerzen", en: "Kerzen", correct: true, points: 10 }
        ]
      }
    ],
    [
      {
        question: {
          de: "Wieviele Knochen trägt die Hexe um den Hals?",
          en: "Wieviele Knochen trägt die Hexe um den Hals?"
        },
        answers: [
          { de: "7", en: "7", correct: false, points: 0 },
          { de: "5", en: "5", correct: false, points: 0 },
          { de: "3", en: "3", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Wer wird gefüttert?",
          en: "Wer wird gefüttert?"
        },
        answers: [
          { de: "Skelette", en: "Skelette", correct: false, points: 0 },
          { de: "Monster-Baby", en: "Monster-Baby", correct: true, points: 10 },
          { de: "Dämonen-Hund", en: "Dämonen-Hund", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was gibt's zum Essen?",
          en: "Was gibt's zum Essen?"
        },
        answers: [
          { de: "Hand", en: "Hand", correct: true, points: 10 },
          { de: "Schlange", en: "Schlange", correct: false, points: 0 },
          { de: "Knochen", en: "Knochen", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was befindet sich hinter Glas?",
          en: "Was befindet sich hinter Glas?"
        },
        answers: [
          { de: "Buch", en: "Buch", correct: false, points: 0 },
          { de: "Monster", en: "Monster", correct: false, points: 0 },
          { de: "Schädel", en: "Schädel", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Was gibt es nicht in der Szene?",
          en: "Was gibt es nicht in der Szene?"
        },
        answers: [
          { de: "Hochbeete", en: "Hochbeete", correct: false, points: 0 },
          { de: "Flaschen", en: "Flaschen", correct: false, points: 0 },
          { de: "Feuerstelle", en: "Feuerstelle", correct: true, points: 10 }
        ]
      }
    ],
    [
      {
        question: {
          de: "Was hält der Gimp in der Hand?",
          en: "Was hält der Gimp in der Hand?"
        },
        answers: [
          { de: "Fleisch", en: "Fleisch", correct: true, points: 10 },
          { de: "Axt", en: "Axt", correct: false, points: 0 },
          { de: "Säge", en: "Säge", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Wieviel abgetrennte Arme zählst du?",
          en: "Wieviel abgetrennte Arme zählst du?"
        },
        answers: [
          { de: "5", en: "5", correct: false, points: 0 },
          { de: "4", en: "4", correct: true, points: 10 },
          { de: "6", en: "6", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was hat zwei Drehknöpfe?",
          en: "Was hat zwei Drehknöpfe?"
        },
        answers: [
          { de: "Kühlschrank", en: "Kühlschrank", correct: false, points: 0 },
          { de: "Ofen", en: "Ofen", correct: false, points: 0 },
          { de: "Grammophon", en: "Grammophon", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Wie viele Klappen hat der Ofen?",
          en: "Wie viele Klappen hat der Ofen?"
        },
        answers: [
          { de: "4", en: "4", correct: false, points: 0 },
          { de: "2", en: "2", correct: false, points: 0 },
          { de: "3", en: "3", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Was liegt auf dem Tisch?",
          en: "Was liegt auf dem Tisch?"
        },
        answers: [
          { de: "Leichnam", en: "Leichnam", correct: true, points: 10 },
          { de: "Tierkadaver", en: "Tierkadaver", correct: false, points: 0 },
          { de: "Dämonenkind", en: "Dämonenkind", correct: false, points: 0 }
        ]
      }
    ],
    [
      {
        question: {
          de: "Was hat der Maurer-Zombie in der Hand?",
          en: "Was hat der Maurer-Zombie in der Hand?"
        },
        answers: [
          { de: "Helm", en: "Helm", correct: false, points: 0 },
          { de: "Zementsack", en: "Zementsack", correct: false, points: 0 },
          { de: "Kelle", en: "Kelle", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Wieviel Zement-Säcke zählst du?",
          en: "Wieviel Zement-Säcke zählst du?"
        },
        answers: [
          { de: "4", en: "4", correct: false, points: 0 },
          { de: "5", en: "5", correct: true, points: 10 },
          { de: "6", en: "6", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was ist gelb?",
          en: "Was ist gelb?"
        },
        answers: [
          { de: "Hemd der Frau", en: "Hemd der Frau", correct: false, points: 0 },
          { de: "Zement-Mischer", en: "Zement-Mischer", correct: true, points: 10 },
          { de: "Werkzeugkasten", en: "Werkzeugkasten", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was hat das Skelett am Arm?",
          en: "Was hat das Skelett am Arm?"
        },
        answers: [
          { de: "Hundeleine", en: "Hundeleine", correct: false, points: 0 },
          { de: "Knochensplitter", en: "Knochensplitter", correct: false, points: 0 },
          { de: "Handschelle", en: "Handschelle", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Was liegt auf der Palette?",
          en: "Was liegt auf der Palette?"
        },
        answers: [
          { de: "Ziegel", en: "Ziegel", correct: true, points: 10 },
          { de: "Zementsäcke", en: "Zementsäcke", correct: false, points: 0 },
          { de: "Holzlatten", en: "Holzlatten", correct: false, points: 0 }
        ]
      }
    ]
  ];
};
