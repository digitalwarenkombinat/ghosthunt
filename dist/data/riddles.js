getRiddles = function () {
  return [
    [
      {
        question: {
          de: "Wer ist gestorben?",
          en: "Who died?"
        },
        answers: [
          { de: "Junge Frau", en: "Young woman", correct: false, points: 0 },
          { de: "Kleines Kind", en: "Little child", correct: false, points: 0 },
          { de: "Alter Mann", en: "Old man", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Was hatte der Mann in der Hand?",
          en: "What did the man have in his hand?"
        },
        answers: [
          { de: "Geld", en: "Money", correct: false, points: 0 },
          { de: "Pillen", en: "Pills", correct: true, points: 10 },
          { de: "Handy", en: "Phone", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Wer war dabei als er starb?",
          en: "Who was there when he died?"
        },
        answers: [
          { de: "Sein Hund", en: "His dog", correct: true, points: 10 },
          { de: "Seine Frau", en: "His wife", correct: false, points: 0 },
          { de: "Sein Enkel", en: "His grandson", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Wie hieß der Hund?",
          en: "What was the dog's name?"
        },
        answers: [
          { de: "Bob", en: "Bob", correct: false, points: 0 },
          { de: "Ben", en: "Ben", correct: true, points: 10 },
          { de: "Pip", en: "Pip", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was fehlte dem Toten?",
          en: "What was missing from the dead man?"
        },
        answers: [
          { de: "Hose", en: "Pants", correct: true, points: 10 },
          { de: "Hand", en: "Hand", correct: false, points: 0 },
          { de: "Brille", en: "Glasses", correct: false, points: 0 }
        ]
      }
    ],
    [
      {
        question: {
          de: "Was ist passiert?",
          en: "What happened?"
        },
        answers: [
          { de: "Überfall", en: "Robbery", correct: false, points: 0 },
          { de: "Unfall", en: "Accident", correct: false, points: 0 },
          { de: "Grabraub", en: "Grave robbery", correct: true, points: 10 }
        ]
      },
      {
        question: {
          de: "Wessen Grab wurde ausgeraubt?",
          en: "Whose grave was robbed?"
        },
        answers: [
          { de: "Herbert Paus", en: "Herbert Paus", correct: false, points: 0 },
          { de: "Rosa Herman", en: "Rosa Herman", correct: true, points: 10 },
          { de: "Sibille Knapp", en: "Sibille Knapp", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Wie viele Räuber waren es?",
          en: "How many robbers were there?"
        },
        answers: [
          { de: "1", en: "1", correct: false, points: 0 },
          { de: "2", en: "2", correct: true, points: 10 },
          { de: "3", en: "3", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Was haben die Räuber gestohlen?",
          en: "What did the robbers steal?"
        },
        answers: [
          { de: "Ein Brosche", en: "A brooch", correct: false, points: 0 },
          { de: "Zwei Ringe", en: "Two rings", correct: true, points: 10 },
          { de: "Eine Halskette", en: "A necklace", correct: false, points: 0 }
        ]
      },
      {
        question: {
          de: "Gibt es Hinweise auf die Identität der Räuber?",
          en: "Are there clues to the identity of the robbers?"
        },
        answers: [
          { de: "Ausweis", en: "ID card", correct: true, points: 10 },
          { de: "Nummernschild", en: "License plate", correct: false, points: 0 },
          { de: "Namen", en: "Names", correct: false, points: 0 }
        ]
      }
    ]
  ];
};
