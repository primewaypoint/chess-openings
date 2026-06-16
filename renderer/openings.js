// Chess openings database
const OPENINGS = [

  // ============================================================
  // BEGINNER
  // ============================================================

  {
    id: "italian-game",
    name: "Italian Game",
    eco: "C50",
    difficulty: "beginner",
    description: "One of the oldest openings. White develops quickly to control the centre and targets the vulnerable f7 pawn.",
    lines: [
      {
        id: "giuoco-pianissimo",
        name: "Giuoco Pianissimo",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Bc5","c3","Nf6","d3","d6"],
        explanations: [
          "White takes the centre.",
          "Black mirrors with e5.",
          "Knight attacks e5.",
          "Knight defends e5.",
          "The Italian bishop eyes f7.",
          "Black mirrors — the Giuoco Piano.",
          "c3 prepares a future d4.",
          "Black develops the knight.",
          "d3 keeps it quiet — the Giuoco Pianissimo.",
          "Both sides build slowly and safely."
        ]
      },
      {
        id: "giuoco-d4",
        name: "Giuoco Piano — d4 Break",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Bc5","c3","Nf6","d4","exd4","cxd4","Bb4+","Bd2"],
        explanations: [
          "White takes the centre.",
          "Black answers in the centre.",
          "Knight hits e5.",
          "Knight guards e5.",
          "Bishop targets f7.",
          "Black copies with Bc5.",
          "c3 prepares the big central push.",
          "Black develops.",
          "d4 strikes the centre open.",
          "Black captures.",
          "White recaptures, building a strong centre.",
          "Black checks to win a tempo.",
          "Bd2 blocks the check safely — White stands well."
        ]
      },
      {
        id: "two-knights-quiet",
        name: "Two Knights — Quiet d3",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Nf6","d3","Be7","O-O","O-O"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Bishop to c4.",
          "Black develops actively — the Two Knights.",
          "d3 keeps things solid, sidestepping sharp lines.",
          "Black develops the bishop.",
          "White castles to safety.",
          "Black castles too — a calm, healthy position."
        ]
      },
      {
        id: "two-knights-ng5",
        name: "Two Knights — Ng5 Attack",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5","d5","exd5","Na5","Bb5+","c6","dxc6","bxc6"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight hits e5.",
          "Knight defends.",
          "Bishop to c4, eyeing f7.",
          "Black develops, daring White to attack.",
          "Ng5 pounces on f7!",
          "Black hits back in the centre with d5.",
          "White captures the pawn.",
          "Na5 chases the strong bishop.",
          "Bb5+ keeps the extra pawn for now.",
          "Black blocks the check.",
          "White grabs another pawn.",
          "Black recaptures, with active piece play for the pawn."
        ]
      },
      {
        id: "hungarian",
        name: "Hungarian Defense (...Be7)",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Be7","d4","exd4","Nxd4"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Bishop to c4.",
          "Black plays the solid, modest Be7 — the Hungarian Defense.",
          "White grabs the centre with d4.",
          "Black captures.",
          "White recaptures, with a comfortable space edge."
        ]
      }
    ]
  },

  {
    id: "london-system",
    name: "London System",
    eco: "D02",
    difficulty: "beginner",
    description: "A solid, reliable opening for White. Easy to learn, hard to refute — perfect for beginners.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["d4","d5","Nf3","Nf6","Bf4","e6","e3","c5","c3","Nc6","Bd3"],
        explanations: [
          "White claims the centre with the d-pawn.",
          "Black mirrors in the centre.",
          "The knight takes its natural square.",
          "Black develops the knight too.",
          "The signature London move — the bishop comes out before ...e6 can lock it in.",
          "Black opens a path for the dark-squared bishop.",
          "White supports d4 and frees the f1-bishop.",
          "Black strikes at the centre.",
          "White calmly props up d4 — no need to capture.",
          "Black piles pressure on d4.",
          "The London setup is complete: a solid pyramid aimed at Black's king."
        ]
      },
      {
        id: "vs-c5",
        name: "vs Early ...c5",
        moves: ["d4","d5","Nf3","Nf6","Bf4","c5","e3","Nc6","c3"],
        explanations: [
          "White takes the centre with d4.",
          "Black answers in the centre.",
          "Knight to its best square.",
          "Black develops.",
          "The London bishop comes out to f4.",
          "Black challenges the centre early with ...c5.",
          "White stays calm and supports d4 with e3.",
          "Black adds a second attacker on d4.",
          "c3 holds everything together — the centre won't fall. This is the London way: solid, not flashy."
        ]
      },
      {
        id: "vs-qb6",
        name: "vs ...Qb6 (the b2 grab)",
        moves: ["d4","d5","Nf3","Nf6","Bf4","c5","e3","Qb6","Qc1"],
        explanations: [
          "White grabs the centre.",
          "Black replies in the centre.",
          "Knight develops.",
          "Black develops the knight.",
          "Bishop to f4 — the London signature.",
          "Black plays ...c5 to pressure d4.",
          "White supports with e3.",
          "Black swings the queen to b6, eyeing the b2-pawn.",
          "The simplest answer: Qc1 quietly defends b2 and keeps White rock-solid. No panic needed."
        ]
      },
      {
        id: "vs-king-indian",
        name: "vs King's Indian Setup",
        moves: ["d4","Nf6","Nf3","g6","Bf4","Bg7","e3","d6","Be2","O-O","O-O"],
        explanations: [
          "White starts with d4.",
          "Black goes for a King's Indian setup with ...Nf6.",
          "Knight to f3.",
          "Black prepares to fianchetto.",
          "The London bishop reaches f4.",
          "Black completes the fianchetto.",
          "White builds the solid e3 pawn chain.",
          "Black supports the centre.",
          "The bishop develops to e2, ready to castle.",
          "Black castles to safety.",
          "White castles too — the same London setup works against almost anything."
        ]
      },
      {
        id: "vs-bf5",
        name: "vs ...Bf5 (bishop out early)",
        moves: ["d4","d5","Nf3","Nf6","Bf4","Bf5","e3","e6","Bd3","Bxd3","Qxd3"],
        explanations: [
          "White takes the centre.",
          "Black mirrors with ...d5.",
          "Knight to f3.",
          "Black develops the knight.",
          "Bishop to f4 — out before the pawns lock it in.",
          "Black copies the idea, developing the bishop outside the chain.",
          "White prepares to challenge that bishop.",
          "Black solidifies.",
          "Bd3 offers to trade the active light-squared bishops.",
          "Black takes the trade.",
          "White recaptures with the queen, eyeing Black's kingside. Comfortable and easy to play."
        ]
      }
    ]
  },

  {
    id: "scandinavian-defense",
    name: "Scandinavian Defense",
    eco: "B01",
    difficulty: "beginner",
    description: "Black immediately challenges White's e4 pawn on move one. One of the oldest recorded openings in chess history.",
    lines: [
      {
        id: "classical",
        name: "Classical (3...Qa5)",
        moves: ["e4","d5","exd5","Qxd5","Nc3","Qa5","d4","Nf6","Nf3","c6"],
        explanations: [
          "White opens e4.",
          "Black strikes with d5 — the Scandinavian!",
          "White captures.",
          "Black recaptures with the queen.",
          "Nc3 hits the queen with tempo.",
          "Qa5 — the Classical retreat.",
          "d4 builds the centre.",
          "Black develops.",
          "Nf3 develops.",
          "c6 gives the queen a safe retreat — solid and sound."
        ]
      },
      {
        id: "qd6",
        name: "Modern Queen (3...Qd6)",
        moves: ["e4","d5","exd5","Qxd5","Nc3","Qd6","d4","Nf6","Nf3","a6"],
        explanations: [
          "White opens e4.",
          "Black plays the Scandinavian.",
          "White captures.",
          "Black recaptures.",
          "Nc3 hits the queen.",
          "Qd6 — the modern, flexible retreat.",
          "d4 builds the centre.",
          "Black develops.",
          "Nf3 develops.",
          "a6 prepares ...b5 and ...Bb7 — a resilient set-up."
        ]
      },
      {
        id: "qd8",
        name: "Banker's (3...Qd8)",
        moves: ["e4","d5","exd5","Qxd5","Nc3","Qd8","d4","Nf6","Nf3","Bf5"],
        explanations: [
          "White opens e4.",
          "Black plays the Scandinavian.",
          "White captures.",
          "Black recaptures.",
          "Nc3 hits the queen.",
          "Qd8 — the modest 'Banker's' retreat.",
          "d4 grabs the centre.",
          "Black develops.",
          "Nf3 develops.",
          "Bf5 develops the bishop actively — passive but very solid for Black."
        ]
      },
      {
        id: "modern-nf6",
        name: "Modern (2...Nf6)",
        moves: ["e4","d5","exd5","Nf6","d4","Nxd5","c4","Nb6","Nf3"],
        explanations: [
          "White opens e4.",
          "Black plays the Scandinavian.",
          "White captures.",
          "Black delays recapture — the Modern 2...Nf6.",
          "d4 holds the extra pawn for now.",
          "Black regains it with the knight.",
          "c4 kicks the knight.",
          "Nb6 retreats.",
          "Nf3 develops — White has more space."
        ]
      },
      {
        id: "portuguese",
        name: "Portuguese Gambit",
        moves: ["e4","d5","exd5","Nf6","d4","Bg4","f3","Bf5"],
        explanations: [
          "White opens e4.",
          "Black plays the Scandinavian.",
          "White captures.",
          "Black plays 2...Nf6.",
          "d4 defends the pawn.",
          "Bg4!? the Portuguese Gambit — eyeing quick development.",
          "f3 questions the bishop.",
          "Bf5 keeps the bishop active for the pawn."
        ]
      }
    ]
  },

  {
    id: "four-knights-game",
    name: "Four Knights Game",
    eco: "C47",
    difficulty: "beginner",
    description: "Both sides develop all four knights early. A very symmetrical, classical opening.",
    lines: [
      {
        id: "spanish",
        name: "Spanish Four Knights",
        moves: ["e4","e5","Nf3","Nc6","Nc3","Nf6","Bb5","Bb4","O-O","O-O","d3","d6","Bg5"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Nc3 develops — the Four Knights.",
          "Black develops symmetrically.",
          "Bb5 pins the c6 knight — the Spanish Four Knights.",
          "Black mirrors the pin.",
          "White castles.",
          "Black castles.",
          "d3 supports e4.",
          "Black supports e5.",
          "Bg5 pins — a balanced, classical battle."
        ]
      },
      {
        id: "scotch-four-knights",
        name: "Scotch Four Knights",
        moves: ["e4","e5","Nf3","Nc6","Nc3","Nf6","d4","exd4","Nxd4","Bb4","Nxc6","bxc6","Bd3"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Nc3 develops.",
          "Black develops.",
          "d4 strikes — the Scotch Four Knights.",
          "Black captures.",
          "White recaptures.",
          "Black pins the knight.",
          "White trades on c6.",
          "Black recaptures.",
          "Bd3 develops, eyeing the kingside."
        ]
      },
      {
        id: "italian-four-knights",
        name: "Italian Four Knights",
        moves: ["e4","e5","Nf3","Nc6","Nc3","Nf6","Bc4","Bc5","d3","d6"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Nc3 develops.",
          "Black develops.",
          "Bc4 eyes f7 — the Italian Four Knights.",
          "Black mirrors with Bc5.",
          "d3 keeps it solid.",
          "Black mirrors — a quiet, even game."
        ]
      },
      {
        id: "belgrade-gambit",
        name: "Belgrade Gambit",
        moves: ["e4","e5","Nf3","Nc6","Nc3","Nf6","d4","exd4","Nd5"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Nc3 develops.",
          "Black develops.",
          "d4 strikes.",
          "Black captures.",
          "Nd5!? the Belgrade Gambit — offering a pawn for a lead in development."
        ]
      },
      {
        id: "glek-system",
        name: "Glek System (4.g3)",
        moves: ["e4","e5","Nf3","Nc6","Nc3","Nf6","g3","Bc5","Bg2","d6","d3"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Nc3 develops.",
          "Black develops.",
          "g3 prepares a fianchetto — the modern Glek System.",
          "Black develops the bishop.",
          "Bishop to g2.",
          "Black plays d6.",
          "d3 completes a flexible, harmonious set-up."
        ]
      }
    ]
  },

  {
    id: "vienna-game",
    name: "Vienna Game",
    eco: "C25",
    difficulty: "beginner",
    description: "White develops the queenside knight before Nf3. Flexible and leads to rich middlegames.",
    lines: [
      {
        id: "vienna-gambit",
        name: "Vienna Gambit (3.f4 d5)",
        moves: ["e4","e5","Nc3","Nf6","f4","d5","fxe5","Nxe4","Nf3"],
        explanations: [
          "White takes the centre.",
          "Black answers e5.",
          "Nc3 develops — the Vienna Game.",
          "Black develops.",
          "f4 strikes — the Vienna Gambit!",
          "Black hits back in the centre with d5.",
          "White captures on e5.",
          "Black grabs e4.",
          "Nf3 develops, fighting for the centre."
        ]
      },
      {
        id: "gambit-accepted",
        name: "Vienna Gambit Accepted",
        moves: ["e4","e5","Nc3","Nf6","f4","exf4","e5","Qe7","Qe2"],
        explanations: [
          "White takes the centre.",
          "Black answers e5.",
          "Nc3 develops.",
          "Black develops.",
          "f4 — the Vienna Gambit.",
          "Black grabs the pawn.",
          "e5 kicks the knight and gains space.",
          "Qe7 hits the e5 pawn.",
          "Qe2 defends — sharp, open play ahead."
        ]
      },
      {
        id: "bishop-variation",
        name: "Bishop's Variation",
        moves: ["e4","e5","Nc3","Nf6","Bc4","Nc6","d3","Bb4"],
        explanations: [
          "White takes the centre.",
          "Black answers e5.",
          "Nc3 develops.",
          "Black develops.",
          "Bc4 eyes f7 — the Bishop's Variation.",
          "Black develops.",
          "d3 supports e4.",
          "Black pins the knight — a calm, classical game."
        ]
      },
      {
        id: "mieses",
        name: "Mieses (3.g3)",
        moves: ["e4","e5","Nc3","Nf6","g3","d5","exd5","Nxd5","Bg2","Nxc3","bxc3"],
        explanations: [
          "White takes the centre.",
          "Black answers e5.",
          "Nc3 develops.",
          "Black develops.",
          "g3 prepares a fianchetto — the Mieses Variation.",
          "Black strikes with d5.",
          "White captures.",
          "Black recaptures.",
          "Bishop to g2, raking the long diagonal.",
          "Black trades knights.",
          "White recaptures, with a broad centre."
        ]
      },
      {
        id: "fork-trick",
        name: "Fork Trick (3.Bc4 Nxe4)",
        moves: ["e4","e5","Nc3","Nf6","Bc4","Nxe4","Nxe4","d5","Bd3","dxe4","Bxe4"],
        explanations: [
          "White takes the centre.",
          "Black answers e5.",
          "Nc3 develops.",
          "Black develops.",
          "Bc4 eyes f7.",
          "Black plays the fork trick — Nxe4!",
          "White recaptures.",
          "Black forks bishop and knight with d5.",
          "The bishop steps back.",
          "Black regains the piece.",
          "White recaptures — equal, a useful trick to know."
        ]
      }
    ]
  },

  {
    id: "kings-gambit",
    name: "King's Gambit",
    eco: "C30",
    difficulty: "beginner",
    description: "White sacrifices the f-pawn to open the f-file and seize the centre. The most romanticly aggressive opening in chess.",
    lines: [
      {
        id: "kieseritzky",
        name: "Kieseritzky Gambit",
        moves: ["e4","e5","f4","exf4","Nf3","g5","h4","g4","Ne5"],
        explanations: [
          "White takes the centre.",
          "Black answers e5.",
          "f4 — the King's Gambit!",
          "Black grabs the pawn.",
          "Nf3 stops ...Qh4+ and develops.",
          "Black holds the pawn with g5.",
          "h4 strikes at the pawn chain.",
          "Black pushes on, kicking the knight.",
          "Ne5 — the Kieseritzky, leaping into the centre."
        ]
      },
      {
        id: "modern-defense",
        name: "Modern Defense (3...d5)",
        moves: ["e4","e5","f4","exf4","Nf3","d5","exd5","Nf6"],
        explanations: [
          "White takes the centre.",
          "Black answers e5.",
          "f4 — the King's Gambit.",
          "Black accepts.",
          "Nf3 develops.",
          "Black hits back with d5 — the Modern Defense.",
          "White captures.",
          "Black develops, regaining the pawn smoothly."
        ]
      },
      {
        id: "declined",
        name: "King's Gambit Declined",
        moves: ["e4","e5","f4","Bc5","Nf3","d6","Nc3","Nf6"],
        explanations: [
          "White takes the centre.",
          "Black answers e5.",
          "f4 — the King's Gambit.",
          "Black declines with Bc5, eyeing f2.",
          "Nf3 develops.",
          "Black supports e5.",
          "Nc3 develops.",
          "Black develops — a solid, classical refusal."
        ]
      },
      {
        id: "falkbeer",
        name: "Falkbeer Counter-Gambit",
        moves: ["e4","e5","f4","d5","exd5","e4","d3","Nf6"],
        explanations: [
          "White takes the centre.",
          "Black answers e5.",
          "f4 — the King's Gambit.",
          "Black strikes back — the Falkbeer Counter-Gambit!",
          "White captures.",
          "Black clamps with e4, gaining space.",
          "d3 challenges the advanced pawn.",
          "Black develops — counterattack for the pawn."
        ]
      },
      {
        id: "cunningham",
        name: "Cunningham Defense",
        moves: ["e4","e5","f4","exf4","Nf3","Be7","Bc4","Bh4+","Kf1"],
        explanations: [
          "White takes the centre.",
          "Black answers e5.",
          "f4 — the King's Gambit.",
          "Black accepts.",
          "Nf3 develops.",
          "Be7 prepares an annoying check — the Cunningham.",
          "Bc4 eyes f7.",
          "Bh4+! a check to disrupt White's castling.",
          "Kf1 — White keeps the extra pawn but loses castling rights."
        ]
      }
    ]
  },

  {
    id: "kings-gambit-accepted",
    name: "King's Gambit Accepted",
    eco: "C33",
    difficulty: "beginner",
    description: "Black takes the f-pawn and White launches a fierce attack. Tactical fireworks guaranteed!",
    lines: [
      {
        id: "classical",
        name: "Classical Variation",
        moves: ["e4","e5","f4","exf4","Nf3"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "White offers the f-pawn.",
          "Black accepts with exf4.",
          "White develops the knight, preparing to castle."
        ]
      },
      {
        id: "kieseritzky",
        name: "Kieseritzky Gambit",
        moves: ["e4","e5","f4","exf4","Nf3","g5","h4"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Gambit offered.",
          "Gambit accepted.",
          "Knight develops.",
          "Black defends f4 with g5.",
          "White attacks g5 with h4 — sharp play!"
        ]
      }
    ]
  },

  {
    id: "giuoco-piano-full",
    name: "Giuoco Piano",
    eco: "C54",
    difficulty: "beginner",
    description: "The 'Quiet Game' leads to rich positions after White plays c3 and d4 to challenge the centre.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Bc5","c3","Nf6","d4"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Bishop to c4.",
          "Black mirrors with Bc5.",
          "White prepares the d4 break with c3.",
          "Black develops the knight.",
          "White strikes the centre with d4."
        ]
      },
      {
        id: "evans-approach",
        name: "Quiet Approach",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Bc5","O-O","Nf6"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight out.",
          "Knight out.",
          "Bishop to c4.",
          "Bishop to c5.",
          "White castles quickly.",
          "Black develops — solid equality."
        ]
      }
    ]
  },

  {
    id: "fried-liver-attack",
    name: "Fried Liver Attack",
    eco: "C57",
    difficulty: "beginner",
    description: "White sacrifices the knight on f7 for a devastating attack on the exposed black king. One of chess's most aggressive lines!",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5","d5","exd5","Nxd5","Nxf7"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Bishop to c4, targeting f7.",
          "Black plays Nf6 — the Two Knights Defense.",
          "White attacks f7 with Ng5!",
          "Black must counter-attack with d5.",
          "White captures the d5 pawn.",
          "Black captures with the knight.",
          "The Fried Liver! Knight sacrificed on f7 for a fierce attack."
        ]
      },
      {
        id: "traxler",
        name: "Traxler Counter-Attack",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5","Bc5"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Bishop to c4.",
          "Knight to f6.",
          "White attacks f7.",
          "The Traxler! Black ignores the threat with Bc5 — wild complications."
        ]
      }
    ]
  },

  {
    id: "philidor-defense",
    name: "Philidor Defense",
    eco: "C41",
    difficulty: "beginner",
    description: "Named after the legendary 18th-century player François-André Philidor. Solid but slightly passive.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","d6"],
        explanations: [
          "White opens e4.",
          "Black responds e5.",
          "Knight to f3.",
          "Black plays d6 — the Philidor, defending e5 solidly."
        ]
      },
      {
        id: "hanham",
        name: "Hanham Variation",
        moves: ["e4","e5","Nf3","d6","d4","Nd7"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Philidor d6.",
          "White challenges the centre with d4.",
          "Black defends with Nd7 — the Hanham setup."
        ]
      }
    ]
  },

  {
    id: "scotch-game",
    name: "Scotch Game",
    eco: "C44",
    difficulty: "beginner",
    description: "White immediately challenges the centre with d4 on move 3. Open, active and direct play.",
    lines: [
      {
        id: "classical",
        name: "Classical (4...Bc5)",
        moves: ["e4","e5","Nf3","Nc6","d4","exd4","Nxd4","Bc5","Be3","Qf6","c3","Nge7"],
        explanations: [
          "White opens the centre.",
          "Black answers with e5.",
          "Knight attacks e5.",
          "Knight defends.",
          "d4 challenges at once — the Scotch.",
          "Black captures.",
          "White recaptures with the knight.",
          "Black hits the knight with Bc5.",
          "Be3 supports the knight.",
          "Qf6 keeps the pressure on d4.",
          "c3 reinforces.",
          "Nge7 develops — the Classical Scotch main line."
        ]
      },
      {
        id: "mieses",
        name: "Mieses Main (4...Nf6)",
        moves: ["e4","e5","Nf3","Nc6","d4","exd4","Nxd4","Nf6","Nxc6","bxc6","e5","Qe7","Qe2","Nd5"],
        explanations: [
          "White opens the centre.",
          "Black plays e5.",
          "Knight attacks e5.",
          "Knight defends.",
          "d4 strikes.",
          "Black captures.",
          "White recaptures.",
          "Black develops, hitting e4.",
          "White trades on c6.",
          "Black recaptures, opening the b-file.",
          "e5 kicks the knight and grabs space.",
          "Qe7 pressures the e5 pawn.",
          "Qe2 defends and unpins.",
          "Nd5 centralises — the main Mieses Variation."
        ]
      },
      {
        id: "four-knights",
        name: "Scotch Four Knights",
        moves: ["e4","e5","Nf3","Nc6","d4","exd4","Nxd4","Nf6","Nc3","Bb4","Nxc6","bxc6","Bd3"],
        explanations: [
          "White opens the centre.",
          "Black plays e5.",
          "Knight attacks e5.",
          "Knight defends.",
          "d4 challenges.",
          "Black captures.",
          "White recaptures.",
          "Black develops, hitting e4.",
          "Nc3 defends e4 — the Scotch Four Knights.",
          "Black pins the knight.",
          "White trades on c6.",
          "Black recaptures.",
          "Bd3 develops, eyeing the kingside."
        ]
      },
      {
        id: "scotch-gambit",
        name: "Scotch Gambit (4.Bc4)",
        moves: ["e4","e5","Nf3","Nc6","d4","exd4","Bc4","Bc5","c3"],
        explanations: [
          "White opens the centre.",
          "Black plays e5.",
          "Knight attacks e5.",
          "Knight defends.",
          "d4 challenges.",
          "Black captures.",
          "Bc4 gambits the pawn for fast development — the Scotch Gambit.",
          "Black develops the bishop.",
          "c3 offers to open lines and regain d4."
        ]
      },
      {
        id: "goring-gambit",
        name: "Göring Gambit (4.c3)",
        moves: ["e4","e5","Nf3","Nc6","d4","exd4","c3","dxc3","Nxc3"],
        explanations: [
          "White opens the centre.",
          "Black plays e5.",
          "Knight attacks e5.",
          "Knight defends.",
          "d4 challenges.",
          "Black captures.",
          "c3 offers a second pawn — the Göring Gambit.",
          "Black grabs it.",
          "Nxc3 gives White a big lead in development for the pawn."
        ]
      }
    ]
  },

  {
    id: "evans-gambit",
    name: "Evans Gambit",
    eco: "C51",
    difficulty: "beginner",
    description: "White sacrifices the b-pawn to speed up development in the Italian Game. A romantic, attacking opening.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Bc5","b4"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Bishop to c4.",
          "Black mirrors with Bc5.",
          "White offers the b-pawn — the Evans Gambit!"
        ]
      },
      {
        id: "accepted",
        name: "Evans Gambit Accepted",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Bc5","b4","Bxb4","c3"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight out.",
          "Knight out.",
          "Bishop to c4.",
          "Bishop to c5.",
          "b4 gambit.",
          "Black accepts — bishop captures b4.",
          "White plays c3, gaining a powerful centre."
        ]
      }
    ]
  },

  {
    id: "danish-gambit",
    name: "Danish Gambit",
    eco: "C21",
    difficulty: "beginner",
    description: "White sacrifices two pawns for rapid development and a fierce attack. One of the most aggressive gambits!",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","d4","exd4","c3"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "White immediately challenges with d4.",
          "Black captures.",
          "White offers another pawn with c3 — the Danish Gambit!"
        ]
      },
      {
        id: "accepted",
        name: "Danish Gambit Accepted",
        moves: ["e4","e5","d4","exd4","c3","dxc3","Bc4"],
        explanations: [
          "White e4.",
          "Black e5.",
          "d4 challenge.",
          "Black captures.",
          "c3 gambit.",
          "Black accepts again, taking on c3.",
          "Bishop to c4 — White has devastating piece activity."
        ]
      }
    ]
  },

  {
    id: "bishops-opening",
    name: "Bishop's Opening",
    eco: "C23",
    difficulty: "beginner",
    description: "White develops the bishop to c4 on move 2, bypassing the usual Nf3. Simple and direct.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Bc4"],
        explanations: [
          "White opens e4.",
          "Black responds e5.",
          "Bishop to c4 — targets f7 immediately."
        ]
      },
      {
        id: "boden-kieseritzky",
        name: "Classical Variation",
        moves: ["e4","e5","Bc4","Nf6","d3"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Bishop to c4.",
          "Black develops knight to f6.",
          "White plays d3 — solid Classical Bishop's Opening."
        ]
      }
    ]
  },

  {
    id: "three-knights-game",
    name: "Three Knights Game",
    eco: "C46",
    difficulty: "beginner",
    description: "Three knights are developed before any pawns beyond the initial moves. Leads to the Four Knights if Black plays Nf6.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","Nc3"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "White plays Nc3 — three knights out."
        ]
      },
      {
        id: "steinitz",
        name: "Steinitz Variation",
        moves: ["e4","e5","Nf3","Nc6","Nc3","g6"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Knight to c3.",
          "Black plays g6 — the Steinitz Variation, preparing a fianchetto."
        ]
      }
    ]
  },

  {
    id: "center-game",
    name: "Center Game",
    eco: "C22",
    difficulty: "beginner",
    description: "White seizes the centre with d4 and recaptures with the queen. The queen comes out early but can be harassed.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","d4","exd4","Qxd4"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "White plays d4.",
          "Black captures.",
          "White recaptures with the queen — the Center Game."
        ]
      },
      {
        id: "normal",
        name: "Normal Variation",
        moves: ["e4","e5","d4","exd4","Qxd4","Nc6","Qe3"],
        explanations: [
          "White e4.",
          "Black e5.",
          "d4.",
          "Black captures.",
          "Queen recaptures.",
          "Black attacks the queen with Nc6.",
          "Queen retreats to e3."
        ]
      }
    ]
  },

  {
    id: "hungarian-defense",
    name: "Hungarian Defense",
    eco: "C50",
    difficulty: "beginner",
    description: "Black plays Be7 instead of the active Bc5, choosing a solid but passive setup.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Be7"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Bishop to c4.",
          "Black plays Be7 — the Hungarian, solid but passive."
        ]
      },
      {
        id: "normal",
        name: "Normal Continuation",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Be7","d4","exd4","Nxd4"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight out.",
          "Knight out.",
          "Bishop to c4.",
          "Hungarian Be7.",
          "White challenges with d4.",
          "Black captures.",
          "White recaptures — active play."
        ]
      }
    ]
  },

  {
    id: "ponziani-opening",
    name: "Ponziani Opening",
    eco: "C44",
    difficulty: "beginner",
    description: "An ancient opening — White plays c3 on move 3 to prepare d4. Less common but tricky.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","c3"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "White plays c3 — the Ponziani, preparing d4."
        ]
      },
      {
        id: "countergambit",
        name: "Countergambit",
        moves: ["e4","e5","Nf3","Nc6","c3","d5"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Ponziani c3.",
          "Black strikes immediately with d5 — the countergambit!"
        ]
      }
    ]
  },

  {
    id: "bird-opening",
    name: "Bird Opening",
    eco: "A02",
    difficulty: "beginner",
    description: "White opens with f4, controlling e5 but weakening the kingside. An unorthodox but playable system.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["f4"],
        explanations: [
          "White opens with f4 — the Bird, named after Henry Bird."
        ]
      },
      {
        id: "from-gambit",
        name: "From's Gambit",
        moves: ["f4","e5","fxe5","d6"],
        explanations: [
          "White plays f4.",
          "Black immediately counter-attacks with e5.",
          "White accepts.",
          "Black plays d6 — the sharp From's Gambit."
        ]
      },
      {
        id: "normal",
        name: "Normal Variation",
        moves: ["f4","d5","Nf3","Nf6","e3"],
        explanations: [
          "White opens f4.",
          "Black controls the centre with d5.",
          "White develops the knight.",
          "Black develops.",
          "White supports the f4 pawn with e3."
        ]
      }
    ]
  },

  {
    id: "nimzowitsch-larsen-attack",
    name: "Nimzowitsch-Larsen Attack",
    eco: "A01",
    difficulty: "beginner",
    description: "White fianchettoes the queenside bishop with 1.b3. An hypermodern approach championed by Bent Larsen.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["b3"],
        explanations: [
          "White plays b3 — preparing to fianchetto the queenside bishop."
        ]
      },
      {
        id: "classical",
        name: "Classical Variation",
        moves: ["b3","e5","Bb2","Nc6","e3"],
        explanations: [
          "White plays b3.",
          "Black occupies the centre with e5.",
          "Bishop to b2 — the fianchetto.",
          "Black develops the knight.",
          "White supports with e3 — solid development."
        ]
      },
      {
        id: "indian",
        name: "Indian Variation",
        moves: ["b3","Nf6","Bb2","g6","e3"],
        explanations: [
          "White b3.",
          "Black plays Nf6.",
          "Bishop fianchettoes.",
          "Black mirrors with g6.",
          "White plays e3 for a solid setup."
        ]
      }
    ]
  },

  // ============================================================
  // INTERMEDIATE
  // ============================================================

  {
    id: "ruy-lopez",
    name: "Ruy Lopez",
    eco: "C60",
    difficulty: "intermediate",
    description: "The most classical of all chess openings. White pins the c6 knight, putting long-term pressure on the e5 pawn.",
    lines: [
      {
        id: "morphy-closed",
        name: "Morphy Defense — Closed",
        moves: ["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Bb5 pins the knight — the Ruy Lopez.",
          "Black challenges the bishop.",
          "Ba4 keeps the pin.",
          "Black develops, hitting e4.",
          "White castles.",
          "Black develops the bishop.",
          "Re1 defends e4 — the Closed Ruy main line."
        ]
      },
      {
        id: "exchange",
        name: "Exchange Variation",
        moves: ["e4","e5","Nf3","Nc6","Bb5","a6","Bxc6","dxc6","O-O"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Bb5 pins the knight.",
          "Black plays a6.",
          "White trades — the Exchange Variation, damaging Black's pawns.",
          "Black recaptures, gaining the bishop pair.",
          "White castles, aiming for a better endgame structure."
        ]
      },
      {
        id: "berlin",
        name: "Berlin Defense (...Nf6)",
        moves: ["e4","e5","Nf3","Nc6","Bb5","Nf6","O-O","Nxe4","d4"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Bb5 pins the knight.",
          "Black plays Nf6 — the rock-solid Berlin Defense.",
          "White castles, ignoring e4 for now.",
          "Black grabs the e4 pawn.",
          "d4 opens the centre to regain the pawn."
        ]
      },
      {
        id: "steinitz",
        name: "Steinitz Defense (...d6)",
        moves: ["e4","e5","Nf3","Nc6","Bb5","d6","d4","Bd7","Nc3","Nf6","O-O","Be7"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Bb5 pins the knight.",
          "Black props up e5 with d6 — the solid Steinitz Defense.",
          "White expands with d4.",
          "Black unpins with Bd7.",
          "Nc3 develops.",
          "Black develops the knight.",
          "White castles.",
          "Black develops — a sturdy, if passive, set-up."
        ]
      },
      {
        id: "classical",
        name: "Classical Defense (...Bc5)",
        moves: ["e4","e5","Nf3","Nc6","Bb5","Bc5","c3","Nf6","O-O"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "Knight attacks e5.",
          "Knight defends.",
          "Bb5 pins the knight.",
          "Black develops actively — the Classical Defense.",
          "c3 prepares d4.",
          "Black develops, hitting e4.",
          "White castles into a rich middlegame."
        ]
      }
    ]
  },

  {
    id: "ruy-lopez-berlin",
    name: "Ruy Lopez — Berlin Defense",
    eco: "C65",
    difficulty: "intermediate",
    description: "Black plays Nf6 instead of a6. The Berlin Wall endgame became famous after Kramnik used it to defeat Kasparov.",
    lines: [
      {
        id: "main",
        name: "Berlin Wall",
        moves: ["e4","e5","Nf3","Nc6","Bb5","Nf6","O-O","Nxe4","Re1","Nd6","Nxe5","Nxe5","Rxe5","Be7"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Bishop to b5.",
          "Berlin! Knight to f6.",
          "White castles.",
          "Black captures the e4 pawn.",
          "White plays Re1, attacking the knight.",
          "Knight retreats to d6.",
          "White captures on e5.",
          "Black recaptures.",
          "White rook takes e5.",
          "Black develops bishop — leading to the drawish Berlin endgame."
        ]
      },
      {
        id: "rio-gambit",
        name: "Rio de Janeiro Gambit",
        moves: ["e4","e5","Nf3","Nc6","Bb5","Nf6","Bxc6"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Bishop to b5.",
          "Black plays Nf6.",
          "White captures on c6 — the Rio de Janeiro Gambit."
        ]
      }
    ]
  },

  {
    id: "ruy-lopez-closed",
    name: "Ruy Lopez — Closed",
    eco: "C84",
    difficulty: "intermediate",
    description: "The main line of the Ruy Lopez. Both sides castle and play for long-term positional advantages.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","O-O"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Bishop to b5.",
          "Black a6.",
          "Bishop retreats.",
          "Knight to f6.",
          "White castles.",
          "Black plays Be7.",
          "Rook to e1 — protecting e4.",
          "Black plays b5, gaining space.",
          "Bishop retreats to b3.",
          "Black castles — the classic Closed Lopez."
        ]
      },
      {
        id: "chigorin",
        name: "Chigorin Variation",
        moves: ["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","d6","c3","Na5","Bc2"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Bishop to b5.",
          "Black a6.",
          "Bishop to a4.",
          "Knight to f6.",
          "White castles.",
          "Black Be7.",
          "Rook to e1.",
          "Black b5.",
          "Bishop to b3.",
          "Black d6.",
          "White plays c3.",
          "Knight to a5 — the Chigorin Variation.",
          "Bishop retreats to c2."
        ]
      }
    ]
  },

  {
    id: "sicilian-defense",
    name: "Sicilian Defense",
    eco: "B20",
    difficulty: "intermediate",
    description: "The most popular response to 1.e4. Black creates an imbalanced position and fights for the initiative.",
    lines: [
      {
        id: "open",
        name: "Open Sicilian",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6"],
        explanations: [
          "White takes the centre.",
          "Black plays c5 — the Sicilian!",
          "Knight develops.",
          "Black supports the centre with d6.",
          "d4 opens the position — the Open Sicilian.",
          "Black captures.",
          "White recaptures with the knight.",
          "Black develops, hitting e4.",
          "Nc3 defends e4.",
          "a6 prepares ...e5/...b5 — heading for the Najdorf."
        ]
      },
      {
        id: "closed",
        name: "Closed Sicilian",
        moves: ["e4","c5","Nc3","g6","g3","Bg7","Bg2","Nc6"],
        explanations: [
          "White takes the centre.",
          "Black plays the Sicilian.",
          "Nc3 keeps it closed — the Closed Sicilian.",
          "Black fianchettoes.",
          "White prepares to fianchetto too.",
          "Bishop to g7.",
          "White completes the fianchetto.",
          "Black develops, a manoeuvring battle ahead."
        ]
      },
      {
        id: "alapin",
        name: "Alapin (2.c3)",
        moves: ["e4","c5","c3","d5","exd5","Qxd5","d4","Nc6","Nf3"],
        explanations: [
          "White takes the centre.",
          "Black plays c5.",
          "c3 prepares d4 — the Alapin, sidestepping the Open Sicilian.",
          "Black strikes with d5.",
          "White captures.",
          "Black recaptures with the queen.",
          "d4 builds a strong centre.",
          "Black develops.",
          "Nf3 develops and supports the centre."
        ]
      },
      {
        id: "smith-morra",
        name: "Smith-Morra Gambit",
        moves: ["e4","c5","d4","cxd4","c3","dxc3","Nxc3"],
        explanations: [
          "White takes the centre.",
          "Black plays c5.",
          "d4 offers a pawn — the Smith-Morra Gambit.",
          "Black captures.",
          "c3 offers it back.",
          "Black grabs the pawn.",
          "Nxc3 gives White fast development and open lines for the pawn."
        ]
      },
      {
        id: "grand-prix",
        name: "Grand Prix Attack",
        moves: ["e4","c5","Nc3","Nc6","f4","g6","Nf3","Bg7"],
        explanations: [
          "White takes the centre.",
          "Black plays c5.",
          "Nc3 develops.",
          "Black develops.",
          "f4 signals a kingside attack — the Grand Prix Attack.",
          "Black fianchettoes for safety.",
          "Nf3 develops.",
          "Bishop to g7, bracing for the coming storm."
        ]
      }
    ]
  },

  {
    id: "sicilian-najdorf",
    name: "Sicilian Najdorf",
    eco: "B90",
    difficulty: "intermediate",
    description: "Black's most ambitious reply. Fischer and Kasparov's favourite — aggressive, complex, and rich in theory.",
    lines: [
      {
        id: "main-bg5",
        name: "6.Bg5 Main Line",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Bg5","e6","f4","Be7"],
        explanations: [
          "White takes the centre.",
          "Black plays the Sicilian.",
          "Knight develops.",
          "Black supports with d6.",
          "d4 opens the position.",
          "Black captures.",
          "White recaptures.",
          "Black develops, hitting e4.",
          "Nc3 defends e4.",
          "a6 — the Najdorf!",
          "Bg5 pins the knight — the main line.",
          "Black plays e6.",
          "f4 builds a kingside pawn storm.",
          "Be7 develops — razor-sharp play ahead."
        ]
      },
      {
        id: "classical-be2",
        name: "6.Be2 Classical",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Be2","e5","Nb3","Be7"],
        explanations: [
          "White takes the centre.",
          "Black plays the Sicilian.",
          "Knight develops.",
          "Black plays d6.",
          "d4 opens.",
          "Black captures.",
          "White recaptures.",
          "Black develops.",
          "Nc3 defends e4.",
          "a6 — the Najdorf.",
          "Be2 — the calm Classical set-up.",
          "Black grabs space with e5.",
          "The knight retreats to b3.",
          "Be7 develops — a positional struggle."
        ]
      },
      {
        id: "english-attack",
        name: "6.Be3 English Attack",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Be3","e5","Nb3","Be6"],
        explanations: [
          "White takes the centre.",
          "Black plays the Sicilian.",
          "Knight develops.",
          "Black plays d6.",
          "d4 opens.",
          "Black captures.",
          "White recaptures.",
          "Black develops.",
          "Nc3 defends e4.",
          "a6 — the Najdorf.",
          "Be3 — the aggressive English Attack.",
          "Black plays e5.",
          "The knight retreats to b3.",
          "Be6 develops — White aims for f3, Qd2 and a pawn storm."
        ]
      },
      {
        id: "fischer-sozin",
        name: "6.Bc4 Fischer-Sozin",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Bc4","e6","Bb3","Be7"],
        explanations: [
          "White takes the centre.",
          "Black plays the Sicilian.",
          "Knight develops.",
          "Black plays d6.",
          "d4 opens.",
          "Black captures.",
          "White recaptures.",
          "Black develops.",
          "Nc3 defends e4.",
          "a6 — the Najdorf.",
          "Bc4 — the Fischer-Sozin, aiming the bishop at f7.",
          "Black plays e6.",
          "The bishop tucks back to b3.",
          "Be7 develops — sharp attacking chances."
        ]
      },
      {
        id: "fianchetto",
        name: "6.g3 Fianchetto",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","g3","e5","Nde2","Be7"],
        explanations: [
          "White takes the centre.",
          "Black plays the Sicilian.",
          "Knight develops.",
          "Black plays d6.",
          "d4 opens.",
          "Black captures.",
          "White recaptures.",
          "Black develops.",
          "Nc3 defends e4.",
          "a6 — the Najdorf.",
          "g3 — the quiet Fianchetto Variation.",
          "Black grabs space with e5.",
          "The knight reroutes to e2.",
          "Be7 develops — a slower, positional approach."
        ]
      }
    ]
  },

  {
    id: "sicilian-dragon",
    name: "Sicilian Dragon",
    eco: "B70",
    difficulty: "intermediate",
    description: "Black fianchettoes the bishop on g7, creating a powerful 'dragon' diagonal. White often attacks on the kingside.",
    lines: [
      {
        id: "yugoslav",
        name: "Yugoslav Attack",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6","Be3","Bg7","f3","Nc6","Qd2","O-O"],
        explanations: [
          "White takes the centre.",
          "Black plays the Sicilian.",
          "Knight develops.",
          "Black plays d6.",
          "d4 opens the position.",
          "Black captures.",
          "White recaptures.",
          "Black develops.",
          "Nc3 defends e4.",
          "g6 — the Dragon!",
          "Be3 develops.",
          "Bishop to g7, the Dragon bishop.",
          "f3 braces e4 — the Yugoslav Attack.",
          "Black develops.",
          "Qd2 prepares O-O-O.",
          "Black castles — opposite-side attacks, very sharp!"
        ]
      },
      {
        id: "classical",
        name: "Classical (Be2)",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6","Be2","Bg7","O-O","O-O","Be3","Nc6"],
        explanations: [
          "White takes the centre.",
          "Black plays the Sicilian.",
          "Knight develops.",
          "Black plays d6.",
          "d4 opens.",
          "Black captures.",
          "White recaptures.",
          "Black develops.",
          "Nc3 defends e4.",
          "g6 — the Dragon.",
          "Be2 — the calm Classical set-up.",
          "Bishop to g7.",
          "White castles short.",
          "Black castles.",
          "Be3 develops.",
          "Black develops — a quieter, positional Dragon."
        ]
      },
      {
        id: "levenfish",
        name: "Levenfish Attack (6.f4)",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6","f4","Nc6"],
        explanations: [
          "White takes the centre.",
          "Black plays the Sicilian.",
          "Knight develops.",
          "Black plays d6.",
          "d4 opens.",
          "Black captures.",
          "White recaptures.",
          "Black develops.",
          "Nc3 defends e4.",
          "g6 — the Dragon.",
          "f4! the aggressive Levenfish — note 6...Bg7?? 7.e5 is a trap.",
          "Black develops carefully with Nc6 instead."
        ]
      },
      {
        id: "fianchetto",
        name: "Fianchetto (6.g3)",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6","g3","Bg7","Bg2","Nc6"],
        explanations: [
          "White takes the centre.",
          "Black plays the Sicilian.",
          "Knight develops.",
          "Black plays d6.",
          "d4 opens.",
          "Black captures.",
          "White recaptures.",
          "Black develops.",
          "Nc3 defends e4.",
          "g6 — the Dragon.",
          "g3 — White fianchettoes too, a calm approach.",
          "Bishop to g7.",
          "Bishop to g2.",
          "Black develops — both bishops eye the long diagonals."
        ]
      },
      {
        id: "bc4-line",
        name: "6.Bc4 Setup",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6","Bc4","Bg7","Bb3","O-O"],
        explanations: [
          "White takes the centre.",
          "Black plays the Sicilian.",
          "Knight develops.",
          "Black plays d6.",
          "d4 opens.",
          "Black captures.",
          "White recaptures.",
          "Black develops.",
          "Nc3 defends e4.",
          "g6 — the Dragon.",
          "Bc4 aims the bishop at f7.",
          "Bishop to g7.",
          "Bb3 tucks the bishop safely.",
          "Black castles — White eyes a kingside attack."
        ]
      }
    ]
  },

  {
    id: "sicilian-scheveningen",
    name: "Sicilian Scheveningen",
    eco: "B80",
    difficulty: "intermediate",
    description: "Black builds a solid pawn structure with d6 and e6. A flexible system used by many world champions.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","e6"],
        explanations: [
          "e4.", "c5.", "Nf3.", "d6.", "d4.", "cxd4.", "Nxd4.", "Nf6.", "Nc3.",
          "Black plays e6 — the Scheveningen, a solid centre."
        ]
      },
      {
        id: "keres-attack",
        name: "Keres Attack",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","e6","g4"],
        explanations: [
          "e4.", "c5.", "Nf3.", "d6.", "d4.", "cxd4.", "Nxd4.", "Nf6.", "Nc3.", "e6.",
          "White plays g4! — the aggressive Keres Attack."
        ]
      }
    ]
  },

  {
    id: "sicilian-alapin",
    name: "Sicilian Alapin",
    eco: "B22",
    difficulty: "intermediate",
    description: "White plays 2.c3 to support d4 without allowing the open Sicilian. A solid, anti-Sicilian approach.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","c5","c3"],
        explanations: [
          "White e4.",
          "Black c5.",
          "White plays c3 — the Alapin, preparing d4."
        ]
      },
      {
        id: "d5",
        name: "d5 Counter",
        moves: ["e4","c5","c3","d5","exd5","Qxd5","d4","Nf6","Nf3"],
        explanations: [
          "White e4.", "Black c5.", "Alapin c3.",
          "Black strikes with d5.",
          "White captures.",
          "Black recaptures with the queen.",
          "White plays d4.",
          "Black develops Nf6.",
          "White plays Nf3 — active play."
        ]
      }
    ]
  },

  {
    id: "sicilian-smith-morra",
    name: "Sicilian Smith-Morra Gambit",
    eco: "B21",
    difficulty: "intermediate",
    description: "White gambits a pawn with 2.d4 3.c3 for rapid development and an open game against the Sicilian.",
    lines: [
      {
        id: "main",
        name: "Smith-Morra Accepted",
        moves: ["e4","c5","d4","cxd4","c3","dxc3","Nxc3"],
        explanations: [
          "White e4.",
          "Black c5.",
          "White plays d4.",
          "Black captures.",
          "White offers c3.",
          "Black accepts again.",
          "White recaptures with the knight — excellent development."
        ]
      },
      {
        id: "declined",
        name: "Smith-Morra Declined",
        moves: ["e4","c5","d4","cxd4","c3","d3"],
        explanations: [
          "White e4.", "Black c5.", "d4.", "Black captures.",
          "White offers the gambit.",
          "Black declines with d3 — White still has active play."
        ]
      }
    ]
  },

  {
    id: "french-defense",
    name: "French Defense",
    eco: "C00",
    difficulty: "intermediate",
    description: "A solid, classical defense. Black accepts a cramped position but builds a strong pawn chain.",
    lines: [
      {
        id: "advance",
        name: "Advance Variation",
        moves: ["e4","e6","d4","d5","e5","c5","c3","Nc6","Nf3","Qb6"],
        explanations: [
          "White takes the centre.",
          "Black plays e6 — the French Defense.",
          "White builds with d4.",
          "Black challenges with d5.",
          "e5 grabs space — the Advance Variation.",
          "Black strikes at the base with c5.",
          "c3 defends d4.",
          "Black piles up on d4.",
          "Nf3 defends d4.",
          "Qb6 pressures d4 and b2 — the main Advance French."
        ]
      },
      {
        id: "exchange",
        name: "Exchange Variation",
        moves: ["e4","e6","d4","d5","exd5","exd5","Nf3","Nf6","Bd3"],
        explanations: [
          "White takes the centre.",
          "Black plays e6.",
          "White plays d4.",
          "Black plays d5.",
          "White trades — the Exchange Variation.",
          "Black recaptures, a symmetrical structure.",
          "White develops.",
          "Black develops.",
          "Bd3 eyes the kingside — equal but playable."
        ]
      },
      {
        id: "tarrasch",
        name: "Tarrasch (3.Nd2)",
        moves: ["e4","e6","d4","d5","Nd2","Nf6","e5","Nfd7","Bd3","c5"],
        explanations: [
          "White takes the centre.",
          "Black plays e6.",
          "White plays d4.",
          "Black plays d5.",
          "Nd2 avoids the pin — the Tarrasch Variation.",
          "Black develops, hitting e4.",
          "e5 gains space and kicks the knight.",
          "The knight retreats to d7.",
          "Bd3 develops aggressively.",
          "Black counters the centre with c5."
        ]
      },
      {
        id: "winawer",
        name: "Winawer (3.Nc3 Bb4)",
        moves: ["e4","e6","d4","d5","Nc3","Bb4","e5","c5","a3","Bxc3+","bxc3"],
        explanations: [
          "White takes the centre.",
          "Black plays e6.",
          "White plays d4.",
          "Black plays d5.",
          "Nc3 defends e4.",
          "Black pins the knight — the sharp Winawer.",
          "e5 closes the centre and grabs space.",
          "Black hits back with c5.",
          "a3 questions the bishop.",
          "Black takes the knight.",
          "White recaptures, gaining the bishop pair and a big centre."
        ]
      },
      {
        id: "classical",
        name: "Classical (3.Nc3 Nf6)",
        moves: ["e4","e6","d4","d5","Nc3","Nf6","Bg5","Be7","e5","Nfd7"],
        explanations: [
          "White takes the centre.",
          "Black plays e6.",
          "White plays d4.",
          "Black plays d5.",
          "Nc3 defends e4.",
          "Black develops, hitting e4 — the Classical French.",
          "Bg5 pins the knight.",
          "Black breaks the pin with Be7.",
          "e5 gains space and kicks the knight.",
          "The knight drops back to d7, ready to challenge the centre."
        ]
      }
    ]
  },

  {
    id: "french-winawer",
    name: "French Winawer",
    eco: "C15",
    difficulty: "intermediate",
    description: "Black pins White's knight with Bb4. Leads to sharp, imbalanced positions with opposite-side attacks.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e6","d4","d5","Nc3","Bb4"],
        explanations: [
          "White e4.", "Black e6.", "White d4.", "Black d5.", "Knight to c3.",
          "Black plays Bb4 — the Winawer, pinning the knight."
        ]
      },
      {
        id: "poisoned-pawn",
        name: "Poisoned Pawn Variation",
        moves: ["e4","e6","d4","d5","Nc3","Bb4","e5","c5","a3","Bxc3+","bxc3","Ne7","Qg4"],
        explanations: [
          "e4.", "e6.", "d4.", "d5.", "Nc3.", "Bb4.",
          "White advances with e5.",
          "Black counter-attacks with c5.",
          "White plays a3.",
          "Black captures on c3.",
          "White recaptures — doubled pawns but the bishops.",
          "Black plays Ne7.",
          "White plays Qg4 — attacking g7."
        ]
      }
    ]
  },

  {
    id: "french-advance",
    name: "French Advance",
    eco: "C02",
    difficulty: "intermediate",
    description: "White grabs space immediately with e5. Black attacks the pawn chain with c5.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e6","d4","d5","e5","c5","c3","Nc6","Nf3"],
        explanations: [
          "White e4.",
          "Black e6.",
          "White d4.",
          "Black d5.",
          "White advances with e5.",
          "Black attacks the base of the chain with c5.",
          "White supports with c3.",
          "Black develops Nc6.",
          "Knight to f3."
        ]
      },
      {
        id: "milner-barry",
        name: "Milner-Barry Gambit",
        moves: ["e4","e6","d4","d5","e5","c5","c3","Nc6","Nf3","Qb6","Bd3","cxd4","cxd4","Bd7","O-O","Nxd4","Nxd4","Qxd4","Nc3"],
        explanations: [
          "White takes the centre.",
          "Black plays e6 — the French.",
          "White builds with d4.",
          "Black challenges with d5.",
          "e5 grabs space — the Advance.",
          "Black hits the base with c5.",
          "c3 defends d4.",
          "Black piles on d4.",
          "Nf3 defends d4.",
          "Qb6 adds pressure on d4 and b2.",
          "Bd3 offers the d4 pawn — the Milner-Barry Gambit!",
          "Black captures on d4.",
          "White recaptures, keeping the gambit idea.",
          "Black develops the bishop.",
          "White castles, ready to attack.",
          "Black grabs the d4 pawn.",
          "White recaptures with the knight.",
          "Black snatches the pawn with the queen.",
          "Nc3! White gambits the pawn for a fierce attack on the black king."
        ]
      }
    ]
  },

  {
    id: "french-tarrasch",
    name: "French Tarrasch",
    eco: "C03",
    difficulty: "intermediate",
    description: "White plays Nd2 instead of Nc3, avoiding the Winawer pin. A solid positional approach.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e6","d4","d5","Nd2"],
        explanations: [
          "White e4.", "Black e6.", "White d4.", "Black d5.",
          "White plays Nd2 — the Tarrasch, avoiding the Bb4 pin."
        ]
      },
      {
        id: "open",
        name: "Open Variation",
        moves: ["e4","e6","d4","d5","Nd2","c5","exd5","exd5","Ngf3","Nf6"],
        explanations: [
          "e4.","e6.","d4.","d5.","Nd2.",
          "Black plays c5.",
          "White captures.",
          "Black recaptures.",
          "Knight to f3.",
          "Black Nf6 — an open, balanced position."
        ]
      }
    ]
  },

  {
    id: "caro-kann",
    name: "Caro-Kann Defense",
    eco: "B10",
    difficulty: "intermediate",
    description: "A solid response to 1.e4. Black plays c6 to support d5, avoiding the weaknesses of the French.",
    lines: [
      {
        id: "classical",
        name: "Classical (4...Bf5)",
        moves: ["e4","c6","d4","d5","Nc3","dxe4","Nxe4","Bf5","Ng3","Bg6","h4","h6"],
        explanations: [
          "White takes the centre.",
          "Black plays c6 — the Caro-Kann.",
          "White builds with d4.",
          "Black challenges with d5.",
          "Nc3 defends e4.",
          "Black captures.",
          "White recaptures.",
          "Black develops the bishop first — the Classical Caro.",
          "Ng3 kicks the bishop.",
          "Bishop to g6.",
          "h4 gains space and threatens to trap the bishop.",
          "h6 makes luft for the bishop — a solid, sound structure."
        ]
      },
      {
        id: "karpov",
        name: "Karpov Variation (4...Nd7)",
        moves: ["e4","c6","d4","d5","Nc3","dxe4","Nxe4","Nd7","Ng5","Ngf6","Bd3"],
        explanations: [
          "White takes the centre.",
          "Black plays c6.",
          "White plays d4.",
          "Black plays d5.",
          "Nc3 defends e4.",
          "Black captures.",
          "White recaptures.",
          "Black plays the flexible Nd7 — the Karpov Variation.",
          "Ng5 eyes f7.",
          "Black develops, covering f7.",
          "Bd3 develops, a rich, solid middlegame."
        ]
      },
      {
        id: "advance",
        name: "Advance Variation",
        moves: ["e4","c6","d4","d5","e5","Bf5","Nf3","e6","Be2","c5"],
        explanations: [
          "White takes the centre.",
          "Black plays c6.",
          "White plays d4.",
          "Black plays d5.",
          "e5 grabs space — the Advance Variation.",
          "Black develops the bishop OUTSIDE the chain — the Caro's big point.",
          "Nf3 develops.",
          "Black supports the centre.",
          "Be2 develops modestly.",
          "Black strikes at the base with c5."
        ]
      },
      {
        id: "exchange",
        name: "Exchange Variation",
        moves: ["e4","c6","d4","d5","exd5","cxd5","Bd3","Nc6","c3"],
        explanations: [
          "White takes the centre.",
          "Black plays c6.",
          "White plays d4.",
          "Black plays d5.",
          "White trades — the Exchange Variation.",
          "Black recaptures.",
          "Bd3 develops to the active diagonal.",
          "Black develops.",
          "c3 makes a solid little triangle — easy, equal play."
        ]
      },
      {
        id: "panov",
        name: "Panov-Botvinnik Attack",
        moves: ["e4","c6","d4","d5","exd5","cxd5","c4","Nf6","Nc3"],
        explanations: [
          "White takes the centre.",
          "Black plays c6.",
          "White plays d4.",
          "Black plays d5.",
          "White trades.",
          "Black recaptures.",
          "c4 strikes — the aggressive Panov-Botvinnik Attack.",
          "Black develops, hitting the centre.",
          "Nc3 develops, leading to lively, open play."
        ]
      }
    ]
  },

  {
    id: "caro-kann-advance",
    name: "Caro-Kann — Advance Variation",
    eco: "B12",
    difficulty: "intermediate",
    description: "White claims space with e5. One of the most topical lines — Short and Tal both championed it.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","c6","d4","d5","e5","Bf5","Nf3","e6"],
        explanations: [
          "e4.","c6.","d4.","d5.",
          "White advances with e5.",
          "Black develops the bishop before playing e6.",
          "Knight to f3.",
          "Black plays e6 — solid structure."
        ]
      },
      {
        id: "short",
        name: "Short Variation",
        moves: ["e4","c6","d4","d5","e5","Bf5","Nf3","e6","Be2","c5"],
        explanations: [
          "e4.","c6.","d4.","d5.","e5.","Bf5.","Nf3.","e6.",
          "White plays Be2.",
          "Black immediately attacks the centre with c5."
        ]
      }
    ]
  },

  {
    id: "pirc-defense",
    name: "Pirc Defense",
    eco: "B07",
    difficulty: "intermediate",
    description: "Black allows White to build a big centre, then attacks it from the flanks. A hypermodern approach.",
    lines: [
      {
        id: "classical",
        name: "Classical (Nf3)",
        moves: ["e4","d6","d4","Nf6","Nc3","g6","Nf3","Bg7","Be2","O-O"],
        explanations: [
          "White takes the centre.",
          "Black plays ...d6 — the Pirc.",
          "White builds the big centre with d4.",
          "Black develops.",
          "Nc3 develops.",
          "Black fianchettoes.",
          "Nf3 develops — the calm Classical.",
          "Bishop to g7.",
          "Be2 develops.",
          "Black castles — flexible counterattack to come."
        ]
      },
      {
        id: "austrian-attack",
        name: "Austrian Attack (f4)",
        moves: ["e4","d6","d4","Nf6","Nc3","g6","f4","Bg7","Nf3","O-O"],
        explanations: [
          "White takes the centre.",
          "Black plays the Pirc.",
          "White builds the centre.",
          "Black develops.",
          "Nc3 develops.",
          "Black fianchettoes.",
          "f4! the aggressive Austrian Attack.",
          "Bishop to g7.",
          "Nf3 develops.",
          "Black castles — White eyes a pawn storm."
        ]
      },
      {
        id: "150-attack",
        name: "150 Attack (Be3, Qd2)",
        moves: ["e4","d6","d4","Nf6","Nc3","g6","Be3","Bg7","Qd2","O-O","O-O-O"],
        explanations: [
          "White takes the centre.",
          "Black plays the Pirc.",
          "White builds the centre.",
          "Black develops.",
          "Nc3 develops.",
          "Black fianchettoes.",
          "Be3 — the club-crusher 150 Attack.",
          "Bishop to g7.",
          "Qd2 prepares Bh6 and O-O-O.",
          "Black castles.",
          "O-O-O — opposite-side castling, attack incoming!"
        ]
      },
      {
        id: "byrne",
        name: "Byrne Variation (Bg5)",
        moves: ["e4","d6","d4","Nf6","Nc3","g6","Bg5","Bg7","Qd2","h6","Bh4","g5"],
        explanations: [
          "White takes the centre.",
          "Black plays the Pirc.",
          "White builds the centre.",
          "Black develops.",
          "Nc3 develops.",
          "Black fianchettoes.",
          "Bg5 — the Byrne, pinning the knight.",
          "Bishop to g7.",
          "Qd2 supports the bishop.",
          "Black questions it with h6.",
          "Bh4 keeps the pin.",
          "Black lunges with g5 — double-edged."
        ]
      },
      {
        id: "fianchetto",
        name: "Fianchetto (g3)",
        moves: ["e4","d6","d4","Nf6","Nc3","g6","g3","Bg7","Bg2","O-O","Nge2"],
        explanations: [
          "White takes the centre.",
          "Black plays the Pirc.",
          "White builds the centre.",
          "Black develops.",
          "Nc3 develops.",
          "Black fianchettoes.",
          "g3 — White fianchettoes too, a quiet set-up.",
          "Bishop to g7.",
          "Bishop to g2.",
          "Black castles.",
          "Nge2 completes development — a slow squeeze."
        ]
      }
    ]
  },

  {
    id: "modern-defense",
    name: "Modern Defense",
    eco: "B06",
    difficulty: "intermediate",
    description: "Black plays g6 without committing the d-pawn. A flexible hypermodern system.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","g6","d4","Bg7","Nc3","d6"],
        explanations: [
          "White e4.", "Black plays g6 — the Modern Defense.",
          "White d4.", "Black fianchettoes.", "White Nc3.", "Black plays d6."
        ]
      },
      {
        id: "averbakh",
        name: "Averbakh System",
        moves: ["e4","g6","d4","Bg7","Nc3","d6","Be3","Nf6","Be2"],
        explanations: [
          "e4.","g6.","d4.","Bg7.","Nc3.","d6.",
          "White plays Be3.", "Black Nf6.", "White Be2 — the Averbakh System."
        ]
      }
    ]
  },

  {
    id: "alekhines-defense",
    name: "Alekhine's Defense",
    eco: "B02",
    difficulty: "intermediate",
    description: "Black plays Nf6, inviting White to chase it with pawns. A provocative hypermodern opening.",
    lines: [
      {
        id: "modern-main",
        name: "Modern Main Line",
        moves: ["e4","Nf6","e5","Nd5","d4","d6","Nf3","Bg4","Be2","e6"],
        explanations: [
          "White opens e4.",
          "Black taunts the pawn — Alekhine's Defense!",
          "e5 chases the knight.",
          "Knight to d5.",
          "d4 builds a big centre.",
          "Black undermines with d6.",
          "Nf3 develops — the Modern Variation.",
          "Bg4 pins the knight.",
          "Be2 breaks the pin.",
          "Black plays ...e6 — counterattack vs the centre."
        ]
      },
      {
        id: "four-pawns",
        name: "Four Pawns Attack",
        moves: ["e4","Nf6","e5","Nd5","d4","d6","c4","Nb6","f4","dxe5","fxe5"],
        explanations: [
          "White opens e4.",
          "Black plays Alekhine's.",
          "e5 chases the knight.",
          "Knight to d5.",
          "d4 builds the centre.",
          "Black hits it with d6.",
          "c4 kicks the knight.",
          "Nb6 retreats.",
          "f4! the massive Four Pawns Attack.",
          "Black strikes the centre.",
          "White recaptures — huge space vs counterplay."
        ]
      },
      {
        id: "exchange",
        name: "Exchange Variation",
        moves: ["e4","Nf6","e5","Nd5","d4","d6","c4","Nb6","exd6","cxd6"],
        explanations: [
          "White opens e4.",
          "Black plays Alekhine's.",
          "e5 chases the knight.",
          "Knight to d5.",
          "d4 builds the centre.",
          "Black hits it with d6.",
          "c4 kicks the knight.",
          "Nb6 retreats.",
          "White trades — the safe Exchange Variation.",
          "Black recaptures, with a sound, solid game."
        ]
      },
      {
        id: "chase",
        name: "Chase Variation",
        moves: ["e4","Nf6","e5","Nd5","c4","Nb6","c5","Nd5","Nc3"],
        explanations: [
          "White opens e4.",
          "Black plays Alekhine's.",
          "e5 chases the knight.",
          "Knight to d5.",
          "c4 kicks it early.",
          "Nb6 retreats.",
          "c5! the over-eager Chase Variation.",
          "The knight hops back to d5.",
          "Nc3 challenges — White's pawns may become overextended."
        ]
      },
      {
        id: "two-knights",
        name: "Two Knights (2.Nc3)",
        moves: ["e4","Nf6","Nc3","d5","exd5","Nxd5"],
        explanations: [
          "White opens e4.",
          "Black plays Alekhine's.",
          "Nc3 declines the chase, developing.",
          "Black strikes with d5.",
          "White captures.",
          "Black recaptures — a calm, Vienna-like game."
        ]
      }
    ]
  },

  {
    id: "petroff-defense",
    name: "Petrov's Defense",
    eco: "C42",
    difficulty: "intermediate",
    description: "Black immediately counter-attacks e4 with Nf6. Solid and symmetrical — a favourite for drawing with Black.",
    lines: [
      {
        id: "classical",
        name: "Classical (3.Nxe5)",
        moves: ["e4","e5","Nf3","Nf6","Nxe5","d6","Nf3","Nxe4","d4","d5"],
        explanations: [
          "White opens e4.",
          "Black answers e5.",
          "Nf3 attacks e5.",
          "Black counterattacks e4 — the Petroff!",
          "White grabs e5.",
          "Black kicks the knight (not 3...Nxe4?? 4.Qe2).",
          "The knight retreats.",
          "Now Black safely takes e4.",
          "d4 opens the centre.",
          "Black supports the knight with d5 — solid equality."
        ]
      },
      {
        id: "steinitz",
        name: "Steinitz Attack (3.d4)",
        moves: ["e4","e5","Nf3","Nf6","d4","exd4","e5","Ne4"],
        explanations: [
          "White opens e4.",
          "Black answers e5.",
          "Nf3 attacks e5.",
          "Black plays the Petroff.",
          "d4! the Steinitz Attack.",
          "Black captures.",
          "e5 gains space and kicks the knight.",
          "Black hops to e4 — lively, open play."
        ]
      },
      {
        id: "cochrane-gambit",
        name: "Cochrane Gambit",
        moves: ["e4","e5","Nf3","Nf6","Nxe5","d6","Nxf7","Kxf7"],
        explanations: [
          "White opens e4.",
          "Black answers e5.",
          "Nf3 attacks e5.",
          "Black plays the Petroff.",
          "White grabs e5.",
          "Black kicks the knight.",
          "Nxf7!? the Cochrane Gambit — sacrificing the knight!",
          "Black must take — White gets two pawns and a king hunt."
        ]
      },
      {
        id: "nimzowitsch",
        name: "Nimzowitsch (5.Nc3)",
        moves: ["e4","e5","Nf3","Nf6","Nxe5","d6","Nf3","Nxe4","Nc3","Nxc3","dxc3"],
        explanations: [
          "White opens e4.",
          "Black answers e5.",
          "Nf3 attacks e5.",
          "Black plays the Petroff.",
          "White grabs e5.",
          "Black kicks the knight.",
          "The knight retreats.",
          "Black takes e4.",
          "Nc3 offers a trade — the Nimzowitsch.",
          "Black trades.",
          "White recaptures, opening lines for quick development."
        ]
      },
      {
        id: "boden-kieseritzky",
        name: "Boden-Kieseritzky Gambit",
        moves: ["e4","e5","Nf3","Nf6","Bc4","Nxe4","Nc3"],
        explanations: [
          "White opens e4.",
          "Black answers e5.",
          "Nf3 attacks e5.",
          "Black plays the Petroff.",
          "Bc4 ignores e5 — the Boden-Kieseritzky Gambit.",
          "Black grabs the pawn.",
          "Nc3! offering more, for a raging attack."
        ]
      }
    ]
  },

  {
    id: "two-knights",
    name: "Two Knights Defense",
    eco: "C55",
    difficulty: "intermediate",
    description: "Black plays Nf6 against the Italian, counterattacking e4. Leads to wild tactical play.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Nf6","Ng5"],
        explanations: [
          "White e4.", "Black e5.", "Knight to f3.",
          "Knight to c6.", "Bishop to c4.", "Black plays Nf6 — the Two Knights!",
          "White attacks f7 with Ng5."
        ]
      },
      {
        id: "open",
        name: "Open Variation",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Nf6","d3"],
        explanations: [
          "e4.","e5.","Nf3.","Nc6.","Bc4.","Nf6.",
          "White plays d3 — a quiet approach avoiding the sharp lines."
        ]
      }
    ]
  },

  {
    id: "queens-gambit",
    name: "Queen's Gambit",
    eco: "D06",
    difficulty: "intermediate",
    description: "White offers a pawn on c4 to seize the centre. One of the most popular openings at every level.",
    lines: [
      {
        id: "declined",
        name: "Queen's Gambit Declined",
        moves: ["d4","d5","c4","e6","Nc3","Nf6","Bg5","Be7","e3","O-O","Nf3"],
        explanations: [
          "White takes the centre.",
          "Black mirrors with d5.",
          "c4 offers the Queen's Gambit.",
          "Black declines solidly with e6 — the QGD.",
          "Nc3 develops, pressuring d5.",
          "Black develops.",
          "Bg5 pins the knight.",
          "Black breaks the pin.",
          "e3 opens a path for the bishop.",
          "Black castles.",
          "Nf3 completes a harmonious set-up."
        ]
      },
      {
        id: "accepted",
        name: "Queen's Gambit Accepted",
        moves: ["d4","d5","c4","dxc4","Nf3","Nf6","e3","e6","Bxc4","c5"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black accepts — the QGA.",
          "Nf3 stops ...e5 and develops.",
          "Black develops.",
          "e3 prepares to regain the pawn.",
          "Black supports a future ...c5.",
          "White recaptures the pawn.",
          "Black strikes the centre with c5 — active, equal play."
        ]
      },
      {
        id: "slav",
        name: "Slav Defense (...c6)",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","dxc4","a4","Bf5"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black supports d5 with c6 — the Slav.",
          "Nf3 develops.",
          "Black develops.",
          "Nc3 develops.",
          "Black grabs the pawn.",
          "a4 stops ...b5 from holding it.",
          "Black develops the bishop freely — the Slav's main point."
        ]
      },
      {
        id: "tarrasch",
        name: "Tarrasch Defense (...c5)",
        moves: ["d4","d5","c4","e6","Nc3","c5","cxd5","exd5","Nf3","Nc6"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black plays e6.",
          "Nc3 develops.",
          "Black strikes with c5 — the Tarrasch Defense.",
          "White trades.",
          "Black recaptures.",
          "Nf3 develops.",
          "Black accepts an isolated d-pawn for free, active pieces."
        ]
      },
      {
        id: "exchange",
        name: "Exchange QGD",
        moves: ["d4","d5","c4","e6","Nc3","Nf6","cxd5","exd5","Bg5","Be7","e3"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black plays e6.",
          "Nc3 develops.",
          "Black develops.",
          "White trades — the Exchange QGD.",
          "Black recaptures, the Carlsbad structure.",
          "Bg5 pins the knight.",
          "Black unpins.",
          "e3 prepares the classic minority attack plan."
        ]
      }
    ]
  },

  {
    id: "slav-defense",
    name: "Slav Defense",
    eco: "D10",
    difficulty: "intermediate",
    description: "Black plays c6 to support d5 without blocking the c8 bishop. A very solid system.",
    lines: [
      {
        id: "main",
        name: "Main Line (...dxc4, ...Bf5)",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","dxc4","a4","Bf5"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black supports d5 with c6 — the Slav.",
          "Nf3 develops.",
          "Black develops.",
          "Nc3 develops.",
          "Black grabs the pawn.",
          "a4 stops ...b5 from holding it.",
          "Black develops the bishop freely — the Slav's whole point."
        ]
      },
      {
        id: "exchange",
        name: "Exchange Slav",
        moves: ["d4","d5","c4","c6","cxd5","cxd5","Nc3","Nf6","Nf3","Nc6"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black plays the Slav.",
          "White trades — the symmetrical Exchange Slav.",
          "Black recaptures.",
          "Nc3 develops.",
          "Black develops.",
          "Nf3 develops.",
          "Black develops — a drawish but instructive structure."
        ]
      },
      {
        id: "quiet",
        name: "Quiet System (e3)",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","e3","Bf5"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black plays the Slav.",
          "Nf3 develops.",
          "Black develops.",
          "e3 keeps it solid.",
          "Black develops the bishop outside the chain — the Slav idea."
        ]
      },
      {
        id: "chebanenko",
        name: "Chebanenko (...a6)",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","a6"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black plays the Slav.",
          "Nf3 develops.",
          "Black develops.",
          "Nc3 develops.",
          "a6 — the flexible Chebanenko, preparing ...b5 or ...dxc4."
        ]
      },
      {
        id: "geller-gambit",
        name: "Geller Gambit (e4)",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","dxc4","e4","b5"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black plays the Slav.",
          "Nf3 develops.",
          "Black develops.",
          "Nc3 develops.",
          "Black grabs c4.",
          "e4! the Geller Gambit — a big centre for the pawn.",
          "Black clings to the pawn with b5 — sharp play."
        ]
      }
    ]
  },

  {
    id: "semi-slav",
    name: "Semi-Slav Defense",
    eco: "D43",
    difficulty: "intermediate",
    description: "Black combines elements of the Slav and QGD with c6 and e6. Rich, complex middlegames.",
    lines: [
      {
        id: "meran",
        name: "Meran Variation",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6","e3","Nbd7","Bd3","dxc4","Bxc4","b5"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black plays ...c6.",
          "Nf3 develops.",
          "Black develops.",
          "Nc3 develops.",
          "Black plays ...e6 — the Semi-Slav.",
          "e3 frees the bishop.",
          "Black develops.",
          "Bd3 develops.",
          "Black captures.",
          "White recaptures.",
          "Black expands with b5 — the dynamic Meran."
        ]
      },
      {
        id: "botvinnik",
        name: "Botvinnik System",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6","Bg5","dxc4","e4","b5"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black plays ...c6.",
          "Nf3 develops.",
          "Black develops.",
          "Nc3 develops.",
          "Black plays ...e6.",
          "Bg5 pins the knight.",
          "Black grabs c4.",
          "e4! the wild Botvinnik System.",
          "Black holds on with b5 — fearsome complications."
        ]
      },
      {
        id: "moscow",
        name: "Moscow Variation",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6","Bg5","h6","Bxf6","Qxf6"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black plays ...c6.",
          "Nf3 develops.",
          "Black develops.",
          "Nc3 develops.",
          "Black plays ...e6.",
          "Bg5 pins the knight.",
          "Black questions it — the Moscow Variation.",
          "White trades on f6.",
          "Black recaptures with the queen — the bishop pair vs activity."
        ]
      },
      {
        id: "stoltz",
        name: "Stoltz (...Bd6)",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6","e3","Bd6"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black plays ...c6.",
          "Nf3 develops.",
          "Black develops.",
          "Nc3 develops.",
          "Black plays ...e6.",
          "e3 frees the bishop.",
          "Bd6 develops actively, aiming at h2."
        ]
      },
      {
        id: "marshall-gambit",
        name: "Marshall Gambit",
        moves: ["d4","d5","c4","e6","Nc3","c6","e4","dxe4","Nxe4","Bb4+"],
        explanations: [
          "White takes the centre.",
          "Black mirrors.",
          "c4 offers the gambit.",
          "Black plays ...e6.",
          "Nc3 develops.",
          "Black plays ...c6 — heading for the Semi-Slav.",
          "e4! the Marshall Gambit, blasting the centre open.",
          "Black captures.",
          "White recaptures.",
          "Bb4+ develops with check — sharp, forcing play."
        ]
      }
    ]
  },

  {
    id: "trompowsky-attack",
    name: "Trompowsky Attack",
    eco: "A45",
    difficulty: "intermediate",
    description: "White immediately pins Black's knight with Bg5. An aggressive anti-King's Indian weapon.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["d4","Nf6","Bg5"],
        explanations: [
          "White d4.", "Black Nf6.", "White plays Bg5 — the Trompowsky!"
        ]
      },
      {
        id: "main-response",
        name: "Main Response — Ne4",
        moves: ["d4","Nf6","Bg5","Ne4","Bf4","c5"],
        explanations: [
          "White d4.", "Nf6.", "Trompowsky Bg5.",
          "Black plays Ne4, attacking the bishop.",
          "Bishop retreats.", "Black plays c5 — active counter-play."
        ]
      }
    ]
  },

  {
    id: "colle-system",
    name: "Colle System",
    eco: "D04",
    difficulty: "intermediate",
    description: "White builds a solid pawn triangle with d4, e3, and Nf3. A reliable, easy-to-learn system.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["d4","d5","Nf3","Nf6","e3","e6","Bd3","c5"],
        explanations: [
          "White d4.", "Black d5.", "Nf3.", "Nf6.",
          "White plays e3 — the Colle triangle.", "Black e6.", "Bishop to d3.", "Black c5."
        ]
      },
      {
        id: "colle-zukertort",
        name: "Colle-Zukertort",
        moves: ["d4","d5","Nf3","Nf6","e3","e6","Bd3","c5","b3"],
        explanations: [
          "d4.","d5.","Nf3.","Nf6.","e3.","e6.","Bd3.","c5.",
          "White plays b3 — the Colle-Zukertort, preparing Bb2."
        ]
      }
    ]
  },

  {
    id: "dutch-defense",
    name: "Dutch Defense",
    eco: "A80",
    difficulty: "intermediate",
    description: "Black plays f5 to fight for e4. An aggressive, fighting defense that unbalances the game.",
    lines: [
      {
        id: "leningrad",
        name: "Leningrad Variation",
        moves: ["d4","f5","g3","Nf6","Bg2","g6","Nf3","Bg7","O-O","O-O","c4","d6"],
        explanations: [
          "White takes the centre.",
          "Black grabs kingside space — the Dutch!",
          "g3 prepares a fianchetto.",
          "Black develops.",
          "Bishop to g2.",
          "Black fianchettoes — the Leningrad Dutch.",
          "Nf3 develops.",
          "Bishop to g7.",
          "White castles.",
          "Black castles.",
          "c4 grabs space.",
          "Black plays d6, eyeing ...e5."
        ]
      },
      {
        id: "stonewall",
        name: "Stonewall Variation",
        moves: ["d4","f5","g3","Nf6","Bg2","e6","Nf3","d5","O-O","Bd6"],
        explanations: [
          "White takes the centre.",
          "Black plays the Dutch.",
          "g3 prepares the fianchetto.",
          "Black develops.",
          "Bishop to g2.",
          "Black plays ...e6.",
          "Nf3 develops.",
          "Black builds the Stonewall with d5.",
          "White castles.",
          "Bd6 eyes the kingside — a rigid, attacking wall."
        ]
      },
      {
        id: "classical",
        name: "Classical Variation",
        moves: ["d4","f5","g3","Nf6","Bg2","e6","Nf3","Be7","O-O","O-O"],
        explanations: [
          "White takes the centre.",
          "Black plays the Dutch.",
          "g3 prepares the fianchetto.",
          "Black develops.",
          "Bishop to g2.",
          "Black plays ...e6.",
          "Nf3 develops.",
          "Black develops the bishop.",
          "White castles.",
          "Black castles — the flexible Classical Dutch."
        ]
      },
      {
        id: "staunton-gambit",
        name: "Staunton Gambit",
        moves: ["d4","f5","e4","fxe4","Nc3","Nf6","Bg5"],
        explanations: [
          "White takes the centre.",
          "Black plays the Dutch.",
          "e4! the Staunton Gambit, offering a pawn.",
          "Black accepts.",
          "Nc3 develops, eyeing the e4 pawn.",
          "Black defends with Nf6.",
          "Bg5 pins — fast development for the pawn."
        ]
      },
      {
        id: "hopton-attack",
        name: "Hopton Attack (2.Bg5)",
        moves: ["d4","f5","Bg5","Nf6","Bxf6","exf6","e3"],
        explanations: [
          "White takes the centre.",
          "Black plays the Dutch.",
          "Bg5 — the tricky Hopton Attack.",
          "Black develops.",
          "White trades on f6.",
          "Black recaptures, doubling pawns but opening the e-file.",
          "e3 keeps a small, safe edge."
        ]
      }
    ]
  },

  {
    id: "benoni-defense",
    name: "Benoni Defense",
    eco: "A60",
    difficulty: "intermediate",
    description: "Black plays c5 to create an asymmetrical pawn structure. Dynamic play with attacking chances for both sides.",
    lines: [
      {
        id: "main",
        name: "Modern Benoni",
        moves: ["d4","Nf6","c4","c5","d5","e6","Nc3","exd5","cxd5","d6","e4","g6","Nf3","Bg7"],
        explanations: [
          "d4.","Nf6.","c4.","Black plays c5 — the Benoni!","White advances with d5.","Black plays e6.",
          "Nc3.","exd5.", "White recaptures.", "d6.", "e4.", "Black fianchettoes.",
          "Nf3.", "Bishop to g7 — the Modern Benoni setup."
        ]
      },
      {
        id: "czech",
        name: "Czech Benoni",
        moves: ["d4","Nf6","c4","c5","d5","e5"],
        explanations: [
          "d4.","Nf6.","c4.","c5.","d5.",
          "Black plays e5 — the Czech Benoni, a very solid structure."
        ]
      }
    ]
  },

  {
    id: "budapest-gambit",
    name: "Budapest Gambit",
    eco: "A51",
    difficulty: "intermediate",
    description: "Black sacrifices a pawn with e5 on move 2 for quick development and attacking chances.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["d4","Nf6","c4","e5","dxe5","Ng4"],
        explanations: [
          "White d4.", "Black Nf6.", "White c4.",
          "Black plays e5 — the Budapest Gambit!", "White captures.",
          "Black plays Ng4, attacking the e5 pawn."
        ]
      },
      {
        id: "fajarowicz",
        name: "Fajarowicz Variation",
        moves: ["d4","Nf6","c4","e5","dxe5","Ne4"],
        explanations: [
          "d4.","Nf6.","c4.","Budapest e5.","dxe5.",
          "Black plays Ne4 — the Fajarowicz, a tricky sideline."
        ]
      }
    ]
  },

  {
    id: "benko-gambit",
    name: "Benko Gambit",
    eco: "A57",
    difficulty: "intermediate",
    description: "Black sacrifices the b-pawn for long-term queenside pressure. A favourite weapon of grandmasters.",
    lines: [
      {
        id: "main",
        name: "Accepted",
        moves: ["d4","Nf6","c4","c5","d5","b5","cxb5","a6","bxa6","Bxa6"],
        explanations: [
          "White d4.",
          "Nf6.",
          "c4.",
          "c5.",
          "d5.",
          "Black plays b5 — the Benko Gambit!",
          "White captures.",
          "Black a6.",
          "White captures again.",
          "Black recaptures — excellent queenside compensation."
        ]
      },
      {
        id: "declined",
        name: "Declined",
        moves: ["d4","Nf6","c4","c5","d5","b5","Nd2","bxc4","Nxc4"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black challenges with c5.",
          "d5 gains space.",
          "Black offers the Benko Gambit with b5.",
          "Nd2 declines — rerouting to recapture on c4.",
          "Black takes c4.",
          "Nxc4 regains the pawn — material stays level, the Benko Declined."
        ]
      }
    ]
  },

  {
    id: "english-opening",
    name: "English Opening",
    eco: "A10",
    difficulty: "intermediate",
    description: "White opens with c4, fighting for the centre from the flank. Flexible and deep.",
    lines: [
      {
        id: "symmetrical",
        name: "Symmetrical English",
        moves: ["c4","c5","Nc3","Nc6","g3","g6","Bg2","Bg7","Nf3","Nf6"],
        explanations: [
          "White starts flank-first with c4 — the English.",
          "Black mirrors with c5.",
          "Nc3 develops.",
          "Black mirrors.",
          "g3 prepares a fianchetto.",
          "Black mirrors.",
          "Bishop to g2.",
          "Black mirrors — the Symmetrical English.",
          "Nf3 develops.",
          "Black mirrors — a slow, strategic battle."
        ]
      },
      {
        id: "reversed-sicilian",
        name: "Reversed Sicilian",
        moves: ["c4","e5","Nc3","Nf6","Nf3","Nc6","g3","d5","cxd5","Nxd5"],
        explanations: [
          "White plays the English.",
          "Black grabs the centre with e5.",
          "Nc3 develops.",
          "Black develops.",
          "Nf3 attacks e5.",
          "Black defends.",
          "g3 prepares the fianchetto — a Sicilian a tempo up!",
          "Black strikes with d5.",
          "White captures.",
          "Black recaptures — the Reversed Sicilian."
        ]
      },
      {
        id: "botvinnik",
        name: "Botvinnik System",
        moves: ["c4","e5","Nc3","Nc6","g3","g6","Bg2","Bg7","e4"],
        explanations: [
          "White plays the English.",
          "Black plays e5.",
          "Nc3 develops.",
          "Black develops.",
          "g3 prepares the fianchetto.",
          "Black fianchettoes.",
          "Bishop to g2.",
          "Black mirrors.",
          "e4! the Botvinnik System — a broad, locked centre."
        ]
      },
      {
        id: "anglo-indian",
        name: "Anglo-Indian",
        moves: ["c4","Nf6","Nc3","d5","cxd5","Nxd5","g3","g6","Bg2"],
        explanations: [
          "White plays the English.",
          "Black develops — the Anglo-Indian.",
          "Nc3 develops.",
          "Black strikes with d5.",
          "White captures.",
          "Black recaptures with the knight.",
          "g3 prepares the fianchetto.",
          "Black fianchettoes too.",
          "Bishop to g2 — a flexible, double-fianchetto fight."
        ]
      },
      {
        id: "mikenas-carls",
        name: "Mikenas-Carls Attack",
        moves: ["c4","Nf6","Nc3","e6","e4","c5","e5","Ng8","Nf3"],
        explanations: [
          "White plays the English.",
          "Black develops.",
          "Nc3 develops.",
          "Black plays e6.",
          "e4! the aggressive Mikenas-Carls Attack.",
          "Black challenges with c5.",
          "e5 kicks the knight and grabs space.",
          "The knight drops back to g8.",
          "Nf3 develops — White enjoys a big space edge."
        ]
      }
    ]
  },

  {
    id: "reti-opening",
    name: "Réti Opening",
    eco: "A09",
    difficulty: "intermediate",
    description: "White develops the knight to f3 and prepares a double fianchetto. A hypermodern classic.",
    lines: [
      {
        id: "main",
        name: "Main Line (g3 setup)",
        moves: ["Nf3","d5","c4","e6","g3","Nf6","Bg2","Be7","O-O","O-O"],
        explanations: [
          "White develops flexibly — the Réti.",
          "Black takes the centre.",
          "c4 strikes at d5 from the flank.",
          "Black supports with e6.",
          "g3 prepares a fianchetto.",
          "Black develops.",
          "Bishop to g2, pressuring d5.",
          "Bishop to e7.",
          "White castles.",
          "Black castles — a hypermodern squeeze."
        ]
      },
      {
        id: "advance",
        name: "2...d4 Advance",
        moves: ["Nf3","d5","c4","d4","e3","Nc6","exd4","Nxd4"],
        explanations: [
          "White plays the Réti.",
          "Black takes the centre.",
          "c4 hits d5.",
          "Black pushes past with d4.",
          "e3 challenges the advanced pawn.",
          "Black defends with Nc6.",
          "White captures.",
          "Black recaptures — open, lively play."
        ]
      },
      {
        id: "capture",
        name: "2...dxc4",
        moves: ["Nf3","d5","c4","dxc4","e3","Nf6","Bxc4"],
        explanations: [
          "White plays the Réti.",
          "Black takes the centre.",
          "c4 hits d5.",
          "Black grabs the pawn.",
          "e3 prepares to regain it.",
          "Black develops.",
          "Bxc4 recovers the pawn with easy development."
        ]
      },
      {
        id: "slav-like",
        name: "2...c6 (Slav-like)",
        moves: ["Nf3","d5","c4","c6","b3","Nf6","g3","Bf5"],
        explanations: [
          "White plays the Réti.",
          "Black takes the centre.",
          "c4 hits d5.",
          "Black supports with c6.",
          "b3 prepares a double fianchetto.",
          "Black develops.",
          "g3 continues the plan.",
          "Bf5 develops the bishop actively."
        ]
      },
      {
        id: "kia",
        name: "King's Indian Attack",
        moves: ["Nf3","d5","g3","Nf6","Bg2","e6","O-O","Be7","d3"],
        explanations: [
          "White plays the Réti.",
          "Black takes the centre.",
          "g3 — heading for the King's Indian Attack.",
          "Black develops.",
          "Bishop to g2.",
          "Black plays ...e6.",
          "White castles.",
          "Bishop to e7.",
          "d3 prepares e4 and a kingside plan."
        ]
      }
    ]
  },

  {
    id: "catalan-opening",
    name: "Catalan Opening",
    eco: "E00",
    difficulty: "intermediate",
    description: "White combines the Queen's Gambit with a kingside fianchetto. Pressure on the long diagonal.",
    lines: [
      {
        id: "open",
        name: "Open Catalan",
        moves: ["d4","Nf6","c4","e6","g3","d5","Bg2","dxc4","Nf3","Be7","O-O","O-O"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays ...e6.",
          "g3 — the Catalan fianchetto.",
          "Black challenges with d5.",
          "Bishop to g2, raking the long diagonal.",
          "Black grabs the pawn — the Open Catalan.",
          "Nf3 develops.",
          "Bishop to e7.",
          "White castles.",
          "Black castles — White has lasting pressure for the pawn."
        ]
      },
      {
        id: "closed",
        name: "Closed Catalan",
        moves: ["d4","Nf6","c4","e6","g3","d5","Bg2","Be7","Nf3","O-O","O-O","Nbd7"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays ...e6.",
          "g3 — the Catalan.",
          "Black plays d5.",
          "Bishop to g2.",
          "Black holds the centre — the Closed Catalan.",
          "Nf3 develops.",
          "Black castles.",
          "White castles.",
          "Black develops — a slow, strategic bind."
        ]
      },
      {
        id: "bb4-check",
        name: "Open with ...Bb4+",
        moves: ["d4","Nf6","c4","e6","g3","d5","Bg2","dxc4","Nf3","Bb4+","Bd2","Be7"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays ...e6.",
          "g3 — the Catalan.",
          "Black plays d5.",
          "Bishop to g2.",
          "Black grabs c4.",
          "Nf3 develops.",
          "Bb4+ disrupts with a check.",
          "Bd2 blocks.",
          "Black retreats the bishop — a key Open Catalan tabiya."
        ]
      },
      {
        id: "qa4-recovery",
        name: "Qa4+ Pawn Recovery",
        moves: ["d4","Nf6","c4","e6","g3","d5","Bg2","dxc4","Qa4+","Nbd7","Qxc4"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays ...e6.",
          "g3 — the Catalan.",
          "Black plays d5.",
          "Bishop to g2.",
          "Black grabs c4.",
          "Qa4+ — White checks to win the pawn straight back.",
          "Black blocks.",
          "White recaptures the pawn cleanly."
        ]
      },
      {
        id: "a6-hold",
        name: "...a6 Pawn Grab",
        moves: ["d4","Nf6","c4","e6","g3","d5","Bg2","dxc4","Nf3","a6"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays ...e6.",
          "g3 — the Catalan.",
          "Black plays d5.",
          "Bishop to g2.",
          "Black grabs c4.",
          "Nf3 develops.",
          "a6 prepares ...b5 to cling to the pawn — sharp, materialistic play."
        ]
      }
    ]
  },

  // ============================================================
  // ADVANCED
  // ============================================================

  {
    id: "kings-indian-defense",
    name: "King's Indian Defense",
    eco: "E60",
    difficulty: "advanced",
    description: "Black allows White to build a big centre, then counterattacks with e5 or c5. A favourite of Fischer and Kasparov.",
    lines: [
      {
        id: "classical",
        name: "Classical (Mar del Plata)",
        moves: ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","Nf3","O-O","Be2","e5","O-O","Nc6","d5","Ne7"],
        explanations: [
          "White builds a big centre.",
          "Black develops the knight.",
          "White grabs more space with c4.",
          "Black fianchettoes — the King's Indian!",
          "Nc3 develops.",
          "Bishop to g7, eyeing the long diagonal.",
          "e4 builds a huge centre.",
          "Black bides time with d6.",
          "Nf3 develops.",
          "Black castles.",
          "Be2 develops.",
          "Black strikes the centre with e5 — the Classical KID.",
          "White castles.",
          "Black develops, adding pressure on d4.",
          "d5 locks the centre and gains space.",
          "Ne7 reroutes — both sides attack on opposite wings."
        ]
      },
      {
        id: "samisch",
        name: "Sämisch (5.f3)",
        moves: ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","f3","O-O","Be3","e5"],
        explanations: [
          "White builds the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black fianchettoes.",
          "Nc3 develops.",
          "Bishop to g7.",
          "e4 builds a big centre.",
          "Black plays d6.",
          "f3 braces the centre — the Sämisch Variation.",
          "Black castles.",
          "Be3 develops.",
          "Black hits back with e5."
        ]
      },
      {
        id: "fianchetto",
        name: "Fianchetto Variation",
        moves: ["d4","Nf6","c4","g6","Nf3","Bg7","g3","O-O","Bg2","d6","O-O","Nc6"],
        explanations: [
          "White builds the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black fianchettoes.",
          "Nf3 develops.",
          "Bishop to g7.",
          "g3 prepares White's own fianchetto — the calm Fianchetto KID.",
          "Black castles.",
          "Bishop to g2.",
          "Black plays d6.",
          "White castles.",
          "Black develops, ready for ...e5 — a positional struggle."
        ]
      },
      {
        id: "four-pawns",
        name: "Four Pawns Attack",
        moves: ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","f4","O-O","Nf3","c5"],
        explanations: [
          "White builds the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black fianchettoes.",
          "Nc3 develops.",
          "Bishop to g7.",
          "e4 builds the centre.",
          "Black plays d6.",
          "f4 builds a massive pawn front — the Four Pawns Attack.",
          "Black castles.",
          "Nf3 develops.",
          "Black hits the centre with c5 — sharp play."
        ]
      },
      {
        id: "averbakh",
        name: "Averbakh (Bg5)",
        moves: ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","Be2","O-O","Bg5","c5"],
        explanations: [
          "White builds the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black fianchettoes.",
          "Nc3 develops.",
          "Bishop to g7.",
          "e4 builds the centre.",
          "Black plays d6.",
          "Be2 develops.",
          "Black castles.",
          "Bg5 prevents ...e5 — the Averbakh Variation.",
          "Black switches plans, striking with c5."
        ]
      }
    ]
  },

  {
    id: "kid-samisch",
    name: "King's Indian — Sämisch Variation",
    eco: "E81",
    difficulty: "advanced",
    description: "White plays f3 to build a massive centre and prevent Ng4. One of the sharpest lines against the KID.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","f3","O-O","Be3","c5"],
        explanations: [
          "d4.","Nf6.","c4.","g6.","Nc3.","Bg7.","e4.","d6.",
          "White plays f3 — the Sämisch!","Black castles.","Be3.","Black immediately attacks with c5."
        ]
      },
      {
        id: "panno",
        name: "Panno Variation",
        moves: ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","f3","O-O","Be3","Nc6"],
        explanations: [
          "d4.","Nf6.","c4.","g6.","Nc3.","Bg7.","e4.","d6.","f3.","O-O.","Be3.",
          "Black plays Nc6 — the Panno, planning a6 and b5."
        ]
      }
    ]
  },

  {
    id: "kid-four-pawns",
    name: "King's Indian — Four Pawns Attack",
    eco: "E76",
    difficulty: "advanced",
    description: "White builds a massive four-pawn centre. An aggressive attempt to crush the KID immediately.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","f4","O-O","Nf3","c5","d5"],
        explanations: [
          "d4.","Nf6.","c4.","g6.","Nc3.","Bg7.","e4.","d6.",
          "White plays f4 — the Four Pawns!","Black castles.","Nf3.","Black plays c5.","White advances d5."
        ]
      },
      {
        id: "dynamic",
        name: "Dynamic Response",
        moves: ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","f4","O-O","Nf3","Na6"],
        explanations: [
          "d4.","Nf6.","c4.","g6.","Nc3.","Bg7.","e4.","d6.","f4.","O-O.","Nf3.",
          "Black plays Na6 — an unusual but interesting response."
        ]
      }
    ]
  },

  {
    id: "grunfeld-defense",
    name: "Grünfeld Defense",
    eco: "D80",
    difficulty: "advanced",
    description: "Black allows White to build a huge centre, then systematically destroys it. A sharp, principled defense.",
    lines: [
      {
        id: "exchange",
        name: "Exchange Variation",
        moves: ["d4","Nf6","c4","g6","Nc3","d5","cxd5","Nxd5","e4","Nxc3","bxc3","Bg7"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black fianchettoes.",
          "Nc3 develops.",
          "Black strikes the centre — the Grünfeld!",
          "White captures.",
          "Black recaptures.",
          "e4 builds a big centre, kicking the knight.",
          "Black trades.",
          "White recaptures, with a huge pawn centre.",
          "Bishop to g7 — Black will hammer the centre."
        ]
      },
      {
        id: "russian",
        name: "Russian System (Qb3)",
        moves: ["d4","Nf6","c4","g6","Nc3","d5","Nf3","Bg7","Qb3","dxc4","Qxc4","O-O"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black fianchettoes.",
          "Nc3 develops.",
          "Black plays the Grünfeld.",
          "Nf3 develops.",
          "Bishop to g7.",
          "Qb3 eyes d5 and c4 — the Russian System.",
          "Black captures.",
          "White recaptures with the queen.",
          "Black castles — a well-mapped main line."
        ]
      },
      {
        id: "classical-bf4",
        name: "Classical (Bf4)",
        moves: ["d4","Nf6","c4","g6","Nc3","d5","Bf4","Bg7","e3","O-O"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black fianchettoes.",
          "Nc3 develops.",
          "Black plays the Grünfeld.",
          "Bf4 develops actively.",
          "Bishop to g7.",
          "e3 supports the centre.",
          "Black castles — solid, flexible play."
        ]
      },
      {
        id: "taimanov-bg5",
        name: "Taimanov (Bg5)",
        moves: ["d4","Nf6","c4","g6","Nc3","d5","Bg5","Ne4","Bf4","Nxc3","bxc3"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black fianchettoes.",
          "Nc3 develops.",
          "Black plays the Grünfeld.",
          "Bg5 pins nothing yet but eyes f6 — the Taimanov.",
          "Black jumps to e4.",
          "The bishop drops to f4.",
          "Black trades knights.",
          "White recaptures, keeping the centre."
        ]
      },
      {
        id: "fianchetto",
        name: "Fianchetto Variation",
        moves: ["d4","Nf6","c4","g6","g3","Bg7","Bg2","d5","cxd5","Nxd5"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black fianchettoes.",
          "g3 — White fianchettoes too.",
          "Bishop to g7.",
          "Bishop to g2.",
          "Black strikes with d5.",
          "White captures.",
          "Black recaptures — a calmer, positional Grünfeld."
        ]
      }
    ]
  },

  {
    id: "nimzo-indian",
    name: "Nimzo-Indian Defense",
    eco: "E20",
    difficulty: "advanced",
    description: "Black pins the c3 knight with Bb4, preventing e4. One of the most strategically rich defenses.",
    lines: [
      {
        id: "rubinstein",
        name: "4.e3 Rubinstein",
        moves: ["d4","Nf6","c4","e6","Nc3","Bb4","e3","O-O","Bd3","d5","Nf3","c5"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays e6.",
          "Nc3 develops.",
          "Black pins the knight — the Nimzo-Indian!",
          "e3 — the flexible Rubinstein System.",
          "Black castles.",
          "Bd3 develops.",
          "Black challenges the centre.",
          "Nf3 develops.",
          "Black strikes with c5 — a rich middlegame."
        ]
      },
      {
        id: "classical-qc2",
        name: "4.Qc2 Classical",
        moves: ["d4","Nf6","c4","e6","Nc3","Bb4","Qc2","O-O","a3","Bxc3+","Qxc3"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays e6.",
          "Nc3 develops.",
          "Black pins the knight.",
          "Qc2 — the Classical, avoiding doubled pawns.",
          "Black castles.",
          "a3 questions the bishop.",
          "Black takes the knight.",
          "White recaptures with the queen, keeping a clean structure and the bishop pair."
        ]
      },
      {
        id: "samisch",
        name: "4.a3 Sämisch",
        moves: ["d4","Nf6","c4","e6","Nc3","Bb4","a3","Bxc3+","bxc3","c5","e3"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays e6.",
          "Nc3 develops.",
          "Black pins the knight.",
          "a3 — the Sämisch, forcing the trade.",
          "Black takes the knight.",
          "White recaptures, building a big centre with doubled pawns.",
          "Black strikes with c5.",
          "e3 supports the centre — bishops vs pawn targets."
        ]
      },
      {
        id: "kmoch-f3",
        name: "4.f3",
        moves: ["d4","Nf6","c4","e6","Nc3","Bb4","f3","d5","a3","Bxc3+","bxc3","c5"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays e6.",
          "Nc3 develops.",
          "Black pins the knight.",
          "f3 prepares a huge e4 centre.",
          "Black hits back with d5.",
          "a3 questions the bishop.",
          "Black takes the knight.",
          "White recaptures.",
          "Black strikes with c5 — sharp, double-edged play."
        ]
      },
      {
        id: "leningrad-bg5",
        name: "4.Bg5 Leningrad",
        moves: ["d4","Nf6","c4","e6","Nc3","Bb4","Bg5","h6","Bh4","c5"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays e6.",
          "Nc3 develops.",
          "Black pins the knight.",
          "Bg5 — the Leningrad, pinning back.",
          "Black questions the bishop.",
          "Bh4 keeps the pin.",
          "Black counters with c5 — tense, original positions."
        ]
      }
    ]
  },

  {
    id: "queens-indian",
    name: "Queen's Indian Defense",
    eco: "E12",
    difficulty: "advanced",
    description: "Black fianchettoes the queenside bishop to counteract White's control of e4. A solid hypermodern defense.",
    lines: [
      {
        id: "main",
        name: "Main Line (4.g3 Ba6)",
        moves: ["d4","Nf6","c4","e6","Nf3","b6","g3","Ba6","b3","Bb4+","Bd2","Be7"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays ...e6.",
          "Nf3 develops, stopping ...e5.",
          "Black fianchettoes — the Queen's Indian.",
          "g3 prepares White's own fianchetto.",
          "Ba6 pressures c4 — the main line.",
          "b3 defends c4.",
          "Bb4+ disrupts with a check.",
          "Bd2 blocks.",
          "Black retreats — a deeply analysed tabiya."
        ]
      },
      {
        id: "bb7",
        name: "4.g3 Bb7",
        moves: ["d4","Nf6","c4","e6","Nf3","b6","g3","Bb7","Bg2","Be7","O-O","O-O"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays ...e6.",
          "Nf3 develops.",
          "Black fianchettoes — the Queen's Indian.",
          "g3 prepares the fianchetto.",
          "Bishop to b7, the classical square.",
          "Bishop to g2 — bishops glare down the long diagonal.",
          "Bishop to e7.",
          "White castles.",
          "Black castles — a calm positional battle."
        ]
      },
      {
        id: "petrosian",
        name: "Petrosian (4.a3)",
        moves: ["d4","Nf6","c4","e6","Nf3","b6","a3","Bb7","Nc3","d5"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays ...e6.",
          "Nf3 develops.",
          "Black fianchettoes.",
          "a3! the Petrosian, stopping ...Bb4.",
          "Bishop to b7.",
          "Nc3 develops without fear of a pin.",
          "Black hits the centre with d5."
        ]
      },
      {
        id: "classical-nc3",
        name: "Classical (4.Nc3)",
        moves: ["d4","Nf6","c4","e6","Nf3","b6","Nc3","Bb7","Bg5","h6"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays ...e6.",
          "Nf3 develops.",
          "Black fianchettoes.",
          "Nc3 develops, eyeing e4.",
          "Bishop to b7.",
          "Bg5 pins the knight.",
          "Black questions the bishop — sharp, classical play."
        ]
      },
      {
        id: "quiet-e3",
        name: "Quiet System (4.e3)",
        moves: ["d4","Nf6","c4","e6","Nf3","b6","e3","Bb7","Bd3","Be7","O-O","O-O"],
        explanations: [
          "White takes the centre.",
          "Black develops.",
          "c4 grabs space.",
          "Black plays ...e6.",
          "Nf3 develops.",
          "Black fianchettoes.",
          "e3 keeps it solid and simple.",
          "Bishop to b7.",
          "Bd3 develops.",
          "Bishop to e7.",
          "White castles.",
          "Black castles — a quiet, low-risk set-up."
        ]
      }
    ]
  },

  {
    id: "sicilian-sveshnikov",
    name: "Sicilian Sveshnikov",
    eco: "B33",
    difficulty: "advanced",
    description: "Black plays e5 early, accepting structural weaknesses for dynamic piece play. Leko and Kramnik both used it.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","Nf6","Nc3","e5","Ndb5","d6","Bg5","a6","Na3","b5"],
        explanations: [
          "e4.",
          "c5.",
          "Nf3.",
          "Nc6.",
          "d4.",
          "cxd4.",
          "Nxd4.",
          "Nf6.",
          "Nc3.",
          "Black plays e5 — the Sveshnikov!",
          "Knight goes to b5.",
          "d6.",
          "Bg5.",
          "Black plays a6.",
          "Knight retreats.",
          "Black plays b5 — queenside expansion."
        ]
      },
      {
        id: "modern",
        name: "Modern Variation",
        moves: ["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","Nf6","Nc3","e5","Ndb5","d6","Bg5","a6","Bxf6","gxf6","Na3"],
        explanations: [
          "e4.",
          "c5.",
          "Nf3.",
          "Nc6.",
          "d4.",
          "cxd4.",
          "Nxd4.",
          "Nf6.",
          "Nc3.",
          "e5.",
          "Ndb5.",
          "d6.",
          "White plays Bg5.",
          "Black a6.",
          "White captures on f6.",
          "Black recaptures with the g-pawn.",
          "Knight to a3."
        ]
      }
    ]
  },

  {
    id: "sicilian-poisoned-pawn",
    name: "Sicilian Poisoned Pawn",
    eco: "B97",
    difficulty: "advanced",
    description: "Black grabs the b2 pawn at great risk. One of the most theoretically sharp variations in all of chess.",
    lines: [
      {
        id: "main",
        name: "Poisoned Pawn",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Bg5","e6","f4","Qb6","Qd2","Qxb2"],
        explanations: [
          "e4.","c5.","Nf3.","d6.","d4.","cxd4.","Nxd4.","Nf6.","Nc3.","a6.","Bg5.","e6.","f4.",
          "Black plays Qb6, eyeing b2.","White plays Qd2.",
          "Black takes the poisoned pawn! — extremely risky but rewarding."
        ]
      },
      {
        id: "sideline",
        name: "Modern Response",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Bg5","e6","f4","Qb6","Nb3"],
        explanations: [
          "e4.","c5.","Nf3.","d6.","d4.","cxd4.","Nxd4.","Nf6.","Nc3.","a6.","Bg5.","e6.","f4.","Qb6.",
          "White plays Nb3 — defending b2 and avoiding the madness."
        ]
      }
    ]
  },

  {
    id: "sicilian-richter-rauzer",
    name: "Sicilian Richter-Rauzer",
    eco: "B60",
    difficulty: "advanced",
    description: "White pins the f6 knight with Bg5 in the classical Sicilian. Positional pressure with attacking potential.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","Nf6","Nc3","d6","Bg5"],
        explanations: [
          "e4.","c5.","Nf3.","Nc6.","d4.","cxd4.","Nxd4.","Nf6.","Nc3.","d6.",
          "White plays Bg5 — the Richter-Rauzer, pinning the knight."
        ]
      },
      {
        id: "classical",
        name: "Classical Continuation",
        moves: ["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","Nf6","Nc3","d6","Bg5","e6","Qd2","a6","O-O-O"],
        explanations: [
          "e4.","c5.","Nf3.","Nc6.","d4.","cxd4.","Nxd4.","Nf6.","Nc3.","d6.","Bg5.","e6.","Qd2.","a6.",
          "White castles queenside — opposite-side castling, mutual attacks."
        ]
      }
    ]
  },

  {
    id: "sicilian-accelerated-dragon",
    name: "Sicilian Accelerated Dragon",
    eco: "B34",
    difficulty: "advanced",
    description: "Black plays g6 without committing to d6, keeping the d-pawn flexible to play d5 in one move.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","g6","Nc3","Bg7"],
        explanations: [
          "e4.","c5.","Nf3.","Nc6.","d4.","cxd4.","Nxd4.",
          "Black plays g6 — the Accelerated Dragon!","Nc3.","Bishop to g7."
        ]
      },
      {
        id: "maroczy",
        name: "Maróczy Bind",
        moves: ["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","g6","c4","Bg7","Be3"],
        explanations: [
          "e4.","c5.","Nf3.","Nc6.","d4.","cxd4.","Nxd4.","g6.",
          "White plays c4 — the Maróczy Bind, controlling d5.","Bg7.","Be3."
        ]
      }
    ]
  },

  {
    id: "ruy-lopez-marshall",
    name: "Ruy Lopez — Marshall Attack",
    eco: "C89",
    difficulty: "advanced",
    description: "Black sacrifices a pawn on move 8 for a ferocious attack against White's king. Capablanca invented it; Marshall sprung it as a surprise.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","O-O","c3","d5"],
        explanations: [
          "e4.","e5.","Nf3.","Nc6.","Bb5.","a6.","Ba4.","Nf6.","White castles.","Be7.","Re1.","b5.","Bb3.","Black castles.","White plays c3.",
          "Black plays d5! — the Marshall Attack sacrifice."
        ]
      },
      {
        id: "anti-marshall",
        name: "Anti-Marshall",
        moves: ["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","O-O","a4"],
        explanations: [
          "e4.","e5.","Nf3.","Nc6.","Bb5.","a6.","Ba4.","Nf6.","O-O.","Be7.","Re1.","b5.","Bb3.","O-O.",
          "White plays a4 — the Anti-Marshall, avoiding the gambit."
        ]
      }
    ]
  },

  {
    id: "semi-slav-meran",
    name: "Semi-Slav — Meran Variation",
    eco: "D47",
    difficulty: "advanced",
    description: "Black plays Nbd7 and dxc4, leading to extremely sharp and deeply analysed positions.",
    lines: [
      {
        id: "main",
        name: "Meran Variation",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6","e3","Nbd7","Bd3","dxc4","Bxc4","b5"],
        explanations: [
          "d4.","d5.","c4.","c6.","Nf3.","Nf6.","Nc3.","e6.","e3.","Nbd7.","Bd3.",
          "Black captures on c4.","White recaptures.","Black plays b5 — the Meran!"
        ]
      },
      {
        id: "anti-meran",
        name: "Anti-Meran — Bg5",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6","Bg5"],
        explanations: [
          "d4.","d5.","c4.","c6.","Nf3.","Nf6.","Nc3.","e6.",
          "White plays Bg5 — the Anti-Meran, avoiding the sharpest lines."
        ]
      }
    ]
  },

  {
    id: "catalan-open",
    name: "Catalan Opening — Open Variation",
    eco: "E04",
    difficulty: "advanced",
    description: "Black captures on c4 and White's bishop on g2 exerts long-term pressure to regain the pawn.",
    lines: [
      {
        id: "main",
        name: "Open Catalan",
        moves: ["d4","Nf6","c4","e6","g3","d5","Bg2","dxc4","Nf3","a6","Ne5"],
        explanations: [
          "d4.","Nf6.","c4.","e6.","g3.","d5.","Bg2.",
          "Black captures — the Open Catalan.","Nf3.","Black plays a6.","White plays Ne5, fighting for c4."
        ]
      },
      {
        id: "main-line",
        name: "Classical Line",
        moves: ["d4","Nf6","c4","e6","g3","d5","Bg2","dxc4","Nf3","Bd7","Qc2"],
        explanations: [
          "d4.","Nf6.","c4.","e6.","g3.","d5.","Bg2.","dxc4.","Nf3.","Black plays Bd7.",
          "White plays Qc2 — pressing for recovery of c4."
        ]
      }
    ]
  },

  {
    id: "bogo-indian",
    name: "Bogo-Indian Defense",
    eco: "E11",
    difficulty: "advanced",
    description: "Black checks with Bb4+ on move 3, a more flexible alternative to the Nimzo-Indian.",
    lines: [
      {
        id: "main",
        name: "Main Line",
        moves: ["d4","Nf6","c4","e6","Nf3","Bb4+","Bd2","Bxd2+","Qxd2","O-O"],
        explanations: [
          "d4.","Nf6.","c4.","e6.","Nf3.",
          "Black plays Bb4+ — the Bogo-Indian!","White interposes Bd2.","Black captures.","White recaptures.","Black castles."
        ]
      },
      {
        id: "nc3",
        name: "Nd2 Variation",
        moves: ["d4","Nf6","c4","e6","Nf3","Bb4+","Nbd2","b6"],
        explanations: [
          "d4.","Nf6.","c4.","e6.","Nf3.","Bb4+.",
          "White blocks with Nbd2.","Black plays b6 — preparing a queenside fianchetto."
        ]
      }
    ]
  },

  // ============================================================
  // FUN
  // ============================================================

  {
    id: "the-cow",
    name: "The Cow",
    eco: "C20",
    difficulty: "fun",
    description: "White builds a solid but completely passive setup. Playing the Cow tells your opponent: 'I am afraid of you.'",
    lines: [
      {
        id: "main",
        name: "The Cow",
        moves: ["e4","e5","d3"],
        explanations: [
          "White plays e4 — standard stuff.",
          "Black plays e5 — also standard.",
          "White plays d3... because why develop pieces when you can just sit there? Moo."
        ]
      },
      {
        id: "full",
        name: "Full Cow Setup",
        moves: ["e4","e5","d3","Nf6","Nd2","Bc5","c3"],
        explanations: [
          "White e4.", "Black e5.", "Moo.",
          "Black sensibly develops.", "Knight to d2 — at least it's out.",
          "Black develops the bishop.",
          "White plays c3 — the full Cow. Four pawns on the second rank is a lifestyle choice."
        ]
      }
    ]
  },

  {
    id: "bongcloud-attack",
    name: "Bongcloud Attack",
    eco: "C20",
    difficulty: "fun",
    description: "White moves the king on move 2, voluntarily giving up castling rights. Played unironically by Magnus Carlsen and Hikaru Nakamura at the highest level.",
    lines: [
      {
        id: "main",
        name: "Classic Bongcloud",
        moves: ["e4","e5","Ke2"],
        explanations: [
          "White plays e4 — setting up the most important move of all time.",
          "Black plays e5 — completely unaware of what is coming.",
          "KING TO E2. White has given up castling, exposed the king, and sent a message: 'Your opening preparation is irrelevant.'"
        ]
      },
      {
        id: "extended",
        name: "Extended Bongcloud",
        moves: ["e4","e5","Ke2","Nf6","Ke1"],
        explanations: [
          "e4.", "e5.", "Ke2 — the king boldly advances.",
          "Black develops, sensing something is wrong.",
          "King retreats to e1. White has done a complete tour and achieved absolutely nothing. A masterpiece."
        ]
      }
    ]
  },

  {
    id: "double-bongcloud",
    name: "Double Bongcloud",
    eco: "C20",
    difficulty: "fun",
    description: "Both kings come out on move 2. Played by Magnus Carlsen and Hikaru Nakamura in an online classical game — they agreed to draw immediately after.",
    lines: [
      {
        id: "main",
        name: "Double Bongcloud",
        moves: ["e4","e5","Ke2","Ke7"],
        explanations: [
          "White plays e4.",
          "Black plays e5.",
          "White plays Ke2 — the Bongcloud!",
          "Black plays Ke7 — the counter-Bongcloud! Both kings step forward. The game is decided."
        ]
      }
    ]
  },

  {
    id: "polish-opening",
    name: "Polish Opening (Orangutan)",
    eco: "A00",
    difficulty: "fun",
    description: "Named after an orangutan that allegedly suggested 1.b4 in a chess club. Surprisingly tricky and used by Tartakower.",
    lines: [
      {
        id: "main",
        name: "Polish Opening",
        moves: ["b4"],
        explanations: [
          "White plays b4 — the Orangutan! A surprisingly dangerous sideline that many opponents don't know how to face."
        ]
      },
      {
        id: "normal",
        name: "Normal Continuation",
        moves: ["b4","e5","Bb2","Bxb4","Bxe5"],
        explanations: [
          "White plays b4.", "Black plays e5.", "White fianchettoes the bishop.",
          "Black captures the b4 pawn.", "White captures e5 — material balance, but White has the bishop pair!"
        ]
      }
    ]
  },

  {
    id: "grob-attack",
    name: "Grob Attack",
    eco: "A00",
    difficulty: "fun",
    description: "1.g4. Henri Grob played it seriously. Most players respond with d5 and White immediately looks silly. Shockingly effective against unprepared opponents.",
    lines: [
      {
        id: "main",
        name: "Grob Attack",
        moves: ["g4"],
        explanations: [
          "White plays g4. The g-pawn leaps forward. Your opponent stares at the board in disbelief. You maintain eye contact."
        ]
      },
      {
        id: "declined",
        name: "Grob Gambit",
        moves: ["g4","d5","Bg2","Bxg4","c4"],
        explanations: [
          "g4 — the Grob!", "Black plays d5 — the obvious refutation attempt.",
          "White fianchettoes.", "Black captures.", "White plays c4 — claiming the centre as compensation."
        ]
      }
    ]
  },

  {
    id: "wayward-queen",
    name: "Wayward Queen Attack",
    eco: "C20",
    difficulty: "fun",
    description: "White's queen charges out on move 2, threatening checkmate on f7. Most beginners fall for it. Most intermediates don't.",
    lines: [
      {
        id: "main",
        name: "Scholar's Mate Attempt",
        moves: ["e4","e5","Qh5","Nc6","Bc4","Nf6"],
        explanations: [
          "White opens e4.", "Black e5.", "QUEEN TO H5 — threatening checkmate on f7!",
          "Black defends with Nc6.", "Bishop to c4 — attacking f7 again.",
          "Black plays Nf6, attacking the queen AND defending f7. White must retreat in shame."
        ]
      },
      {
        id: "jerome",
        name: "Jerome Gambit Setup",
        moves: ["e4","e5","Qh5","Nc6","Bc4","g6","Qf3"],
        explanations: [
          "e4.", "e5.", "Qh5.", "Nc6.", "Bc4.",
          "Black plays g6 — kicking the queen.",
          "Queen retreats to f3, still eyeing f7."
        ]
      }
    ]
  },

  {
    id: "halloween-gambit",
    name: "Halloween Gambit",
    eco: "C47",
    difficulty: "fun",
    description: "White sacrifices a knight for a pawn and a massive centre. Terrifying to face if you don't know it.",
    lines: [
      {
        id: "main",
        name: "Halloween Gambit",
        moves: ["e4","e5","Nf3","Nc6","Nc3","Nf6","Nxe5"],
        explanations: [
          "e4.", "e5.", "Nf3.", "Nc6.", "Nc3.", "Nf6 — all four knights out.",
          "White plays Nxe5?! — the Halloween Gambit! A knight for a pawn, but the attack is REAL."
        ]
      },
      {
        id: "accepted",
        name: "Gambit Accepted",
        moves: ["e4","e5","Nf3","Nc6","Nc3","Nf6","Nxe5","Nxe5","d4","Nc6","e5"],
        explanations: [
          "e4.","e5.","Nf3.","Nc6.","Nc3.","Nf6.","Nxe5.",
          "Black accepts.", "White plays d4.", "Knight retreats.", "e5 — White has a massive pawn centre!"
        ]
      }
    ]
  },

  {
    id: "hillbilly-attack",
    name: "Hillbilly Attack",
    eco: "B10",
    difficulty: "fun",
    description: "White plays Bc4 against the Caro-Kann, threatening Scholar's Mate immediately. Tricky and underestimated.",
    lines: [
      {
        id: "main",
        name: "Hillbilly Attack",
        moves: ["e4","c6","Bc4"],
        explanations: [
          "White e4.", "Black plays c6 — the Caro-Kann.",
          "White plays Bc4 — threatening Qh5! and a quick Scholar's Mate. Your opponent expected theory, not this."
        ]
      },
      {
        id: "trap",
        name: "Trap Line",
        moves: ["e4","c6","Bc4","d5","Bb3","dxe4","Qh5"],
        explanations: [
          "e4.", "c6.", "Bc4.", "Black plays d5.", "Bishop retreats.",
          "Black captures.", "Qh5 — attacking f7! The Hillbilly trap is sprung."
        ]
      }
    ]
  },

  {
    id: "frankenstein-dracula",
    name: "Frankenstein-Dracula Variation",
    eco: "C25",
    difficulty: "fun",
    description: "Named for the monstrous complications that arise. Black captures the e4 pawn with the knight, leading to wildly chaotic play.",
    lines: [
      {
        id: "main",
        name: "Frankenstein-Dracula",
        moves: ["e4","e5","Nc3","Nf6","Bc4","Nxe4"],
        explanations: [
          "White e4.", "Black e5.", "Knight to c3.", "Knight to f6.",
          "Bishop to c4.", "Black captures the e4 pawn — INTO THE MADNESS. This opening has its own Wikipedia horror story."
        ]
      },
      {
        id: "main-line",
        name: "Main Line",
        moves: ["e4","e5","Nc3","Nf6","Bc4","Nxe4","Qh5","Nd6","Bb3","Nc6","Nb5"],
        explanations: [
          "e4.","e5.","Nc3.","Nf6.","Bc4.","Nxe4.",
          "Queen to h5 — the monster awakens!","Knight to d6.",
          "Bishop retreats.","Nc6.","White's knight threatens a fork — absolute chaos."
        ]
      }
    ]
  },

  {
    id: "cornstalk-defense",
    name: "Cornstalk Defense",
    eco: "B00",
    difficulty: "fun",
    description: "Black plays a5 on move 1. This achieves nothing strategically. It is called the Cornstalk because like corn, it looks promising but you're just wasting everyone's time.",
    lines: [
      {
        id: "main",
        name: "Cornstalk Defense",
        moves: ["e4","a5"],
        explanations: [
          "White opens e4.",
          "Black plays a5. Black has moved a rook pawn. The rook is still stuck. No one knows why."
        ]
      },
      {
        id: "continued",
        name: "Continued Confusion",
        moves: ["e4","a5","d4","a4","c4","a3"],
        explanations: [
          "e4.", "a5.", "White plays d4.", "Black continues… a4.",
          "White plays c4.", "Black plays a3. The a-pawn has achieved enlightenment. White is completely fine."
        ]
      }
    ]
  },

  {
    id: "lemming-defense",
    name: "Lemming Defense",
    eco: "B00",
    difficulty: "fun",
    description: "Black plays Na6 on move 1, developing a knight to the worst possible square. Like lemmings, Black marches boldly toward disaster.",
    lines: [
      {
        id: "main",
        name: "Lemming Defense",
        moves: ["e4","Na6"],
        explanations: [
          "White opens e4.",
          "Black plays Na6 — a knight to the rim! It is dim. The knight is a tourist, observing the game from the sidelines."
        ]
      },
      {
        id: "continued",
        name: "Continued Lemming",
        moves: ["e4","Na6","d4","Nc5","Nf3","Ne6","Be3"],
        explanations: [
          "e4.", "Na6 — the Lemming!", "White plays d4.", "Knight goes to c5.",
          "Nf3.", "Knight to e6.", "White plays Be3. Black's knight has moved twice and is on e6. Classical development beats confusion."
        ]
      }
    ]
  },

  {
    id: "carrs-defense",
    name: "Carr's Defense",
    eco: "B00",
    difficulty: "fun",
    description: "Black plays h6 on move 1. It stops Bg5 before White has even thought about it. Psychological warfare or just a random move? Both.",
    lines: [
      {
        id: "main",
        name: "Carr's Defense",
        moves: ["e4","h6"],
        explanations: [
          "White opens e4.",
          "Black plays h6. Prevents Bg5. Stops Ng5. Achieves nothing offensive. White is confused. Black is proud."
        ]
      },
      {
        id: "continued",
        name: "Continued",
        moves: ["e4","h6","d4","a5"],
        explanations: [
          "e4.", "h6.", "White plays d4.",
          "Black plays a5. Both wing pawns are moved. No piece is developed. Someone must win this game eventually."
        ]
      }
    ]
  },

  {
    id: "st-george-defense",
    name: "St. George Defense",
    eco: "B00",
    difficulty: "fun",
    description: "Black plays a6 on move 1. Miles used it to beat Karpov! So it must be good... right?",
    lines: [
      {
        id: "main",
        name: "St. George Defense",
        moves: ["e4","a6"],
        explanations: [
          "White opens e4.",
          "Black plays a6 — the St. George! Tony Miles beat Anatoly Karpov with this in 1980. One data point."
        ]
      },
      {
        id: "queenside-expansion",
        name: "Queenside Expansion",
        moves: ["e4","a6","d4","b5","Nf3","Bb7","Bd3"],
        explanations: [
          "e4.", "a6.", "d4.", "Black plays b5 — expanding on the queenside.", "Nf3.",
          "Black activates the bishop.", "White develops normally. Black has counterplay. Miles smiles from wherever he is."
        ]
      }
    ]
  },

  {
    id: "hammerschlag",
    name: "Hammerschlag (Fried Fox Attack)",
    eco: "A00",
    difficulty: "fun",
    description: "White moves the king to f2 on move 2. In German, 'Hammerschlag' means 'hammer blow'. The only hammer here is to White's own position.",
    lines: [
      {
        id: "main",
        name: "Hammerschlag",
        moves: ["f3","e5","Kf2"],
        explanations: [
          "White plays f3 — weakening the kingside.",
          "Black plays e5 — occupying the centre.",
          "White plays Kf2 — the Hammerschlag! King on f2, move 2. White has given up castling to achieve absolutely nothing."
        ]
      },
      {
        id: "continued",
        name: "Continued",
        moves: ["f3","e5","Kf2","d5","d4","exd4","Qxd4"],
        explanations: [
          "f3 — an odd first move.",
          "Black grabs the centre.",
          "Kf2?! the king strolls out — the Hammerschlag.",
          "Black expands with d5.",
          "d4 hits back.",
          "Black captures.",
          "Qxd4 recaptures the pawn — White's king is airy but the position holds."
        ]
      }
    ]
  },

  {
    id: "botez-gambit",
    name: "Botez Gambit",
    eco: "C00",
    difficulty: "fun",
    description: "Popularised by chess streamers Alexandra and Andrea Botez. The idea is simple: hang your queen. There is no compensation. It is a gift to your opponent. You just forgot it was there.",
    lines: [
      {
        id: "main",
        name: "Classic Botez Gambit",
        moves: ["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Nxe4"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Nf3.",
          "Nc6.",
          "Bb5.",
          "a6.",
          "Ba4.",
          "Nf6.",
          "White castles.",
          "Black captures on e4. White's queen on d1 is not hanging — but don't worry, the Botez Gambit will find a way."
        ]
      },
      {
        id: "declined",
        name: "Botez Gambit Declined",
        moves: ["e4","e5","Qh5","Nc6","Bc4","g6","Qf3"],
        explanations: [
          "White opens e4.",
          "Black answers e5.",
          "Qh5?! the queen charges out early — pure Botez energy.",
          "Black defends with the knight.",
          "Bc4 piles on f7, threatening mate.",
          "Black calmly plays g6 — declining to blunder.",
          "Qf3 keeps the f7 threat alive; the queen lives to fight on."
        ]
      }
    ]
  },

  {
    id: "hippopotamus-defense",
    name: "Hippopotamus Defense",
    eco: "B00",
    difficulty: "fun",
    description: "Black keeps all pawns on the second and third ranks, developing all pieces to the second rank. Slow, passive, and remarkably hard to crack.",
    lines: [
      {
        id: "main",
        name: "Hippopotamus Setup",
        moves: ["e4","Nh6","d4","g6","Nf3","Bg7","Nc3","d6","Be2","Nd7"],
        explanations: [
          "White plays e4.",
          "Black plays Nh6 — not Nf6, the HIPPOptamus is different.", "White d4.", "Black g6.", "Nf3.", "Bg7.",
          "Nc3.", "Black plays d6.", "White Be2.",
          "Black plays Nd7 — all pieces on the second rank. Fat and immovable."
        ]
      },
      {
        id: "full",
        name: "Full Hippo Setup",
        moves: ["e4","Nh6","d4","g6","Nf3","Bg7","Be2","d6","O-O","Nd7","Nc3","e6"],
        explanations: [
          "e4.", "Nh6.", "d4.", "g6.", "Nf3.", "Bg7.", "Be2.", "d6.", "O-O.", "Nd7.", "Nc3.",
          "Black plays e6 — the hippo settles in. White has no obvious way to break through."
        ]
      }
    ]
  },

  {
    id: "monkeys-bum",
    name: "Monkey's Bum",
    eco: "B06",
    difficulty: "fun",
    description: "1.e4 g6 2.d4 Bg7 3.h4 — this is its real name. White immediately plays h4-h5 to blow open the kingside. It looks ridiculous. It can work.",
    lines: [
      {
        id: "main",
        name: "Monkey's Bum",
        moves: ["e4","g6","d4","Bg7","h4"],
        explanations: [
          "White plays e4.", "Black plays g6.", "White d4.", "Black fianchettoes.",
          "White plays h4 — the Monkey's Bum! The h-pawn charges forward. Black must be careful."
        ]
      },
      {
        id: "main-line",
        name: "Main Line",
        moves: ["e4","g6","d4","Bg7","h4","h5","Be3"],
        explanations: [
          "e4.", "g6.", "d4.", "Bg7.", "h4.", "Black stops the advance with h5.",
          "White plays Be3 — still has a solid game. The name is the worst thing about it."
        ]
      }
    ]
  },

  {
    id: "coca-cola-gambit",
    name: "Coca-Cola Gambit",
    eco: "A00",
    difficulty: "fun",
    description: "1.g4 g5 2.f4 — White opens both the g and f files simultaneously. The king is in the middle and nobody knows what's happening. Refreshing chaos.",
    lines: [
      {
        id: "main",
        name: "Coca-Cola Gambit",
        moves: ["g4","g5","f4"],
        explanations: [
          "White plays g4 — the Grob?",
          "Black mirrors with g5 — both sides weakening the kingside.",
          "White plays f4 — the Coca-Cola Gambit! Both kingside pawns are pushed. The centre is wide open. Fizzy."
        ]
      },
      {
        id: "accepted",
        name: "Gambit Accepted",
        moves: ["g4","g5","f4","gxf4","d4"],
        explanations: [
          "g4.", "g5.", "f4.", "Black captures the f4 pawn.",
          "White plays d4 — grabbing the centre while Black holds a stray pawn. Chaos is achieved."
        ]
      }
    ]
  },


  // ============================================================
  // TRAPS
  // ============================================================

  {
    id: "scholars-mate",
    name: "Scholar's Mate",
    eco: "C20",
    difficulty: "trap",
    description: "The famous four-move checkmate — and how careless development hands it to White.",
    lines: [
      {
        id: "main",
        name: "The 4-move mate",
        moves: ["e4","e5","Qh5","Nc6","Bc4","Nf6","Qxf7#"],
        explanations: [
          "White opens with e4.",
          "Black mirrors.",
          "Qh5?! the queen lunges out, eyeing f7 and e5.",
          "Black defends e5 with the knight.",
          "Bc4 adds a second attacker on f7 — mate is threatened!",
          "Black develops naturally... but misses the threat.",
          "Qxf7# — the Scholar's Mate! (Defend it with ...g6 and ...Nf6.)"
        ]
      }
    ]
  },

  {
    id: "legals-mate",
    name: "Légal's Mate",
    eco: "C41",
    difficulty: "trap",
    description: "A queen sacrifice leads to mate with three minor pieces. A 200-year-old classic.",
    lines: [
      {
        id: "main",
        name: "The queen sacrifice",
        moves: ["e4","e5","Nf3","Nc6","Bc4","d6","Nc3","Bg4","Nxe5","Bxd1","Bxf7+","Ke7","Nd5#"],
        explanations: [
          "e4.",
          "e5.",
          "Nf3 attacks e5.",
          "Nc6 defends.",
          "Bc4 eyes f7.",
          "Black plays d6.",
          "Nc3 develops.",
          "Bg4 pins the f3 knight to the queen.",
          "Nxe5!? White ignores the pin — a stunning idea.",
          "Bxd1?? Black greedily grabs the queen (5...Nxe5 was safe).",
          "Bxf7+ — the trap springs!",
          "Ke7, forced.",
          "Nd5# — Légal's Mate: three little pieces deliver checkmate!"
        ]
      }
    ]
  },

  {
    id: "blackburne-shilling",
    name: "Blackburne Shilling Gambit",
    eco: "C50",
    difficulty: "trap",
    description: "Black baits White into grabbing a pawn, then weaves a smothered mating net.",
    lines: [
      {
        id: "main",
        name: "The smothered net",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Nd4","Nxe5","Qg5","Nxf7","Qxg2","Rf1","Qxe4+","Be2","Nf3#"],
        explanations: [
          "e4.",
          "e5.",
          "Nf3 attacks e5.",
          "Nc6 defends.",
          "Bc4 eyes f7.",
          "Nd4!? the cheeky Shilling Gambit — daring White to grab e5.",
          "Nxe5?? White takes the bait (4.Nxd4 was correct).",
          "Qg5! forking e5 and g2.",
          "Nxf7 forking queen and rook — but it walks into the trap.",
          "Qxg2 hitting the rook.",
          "Rf1 saving it.",
          "Qxe4+ grabbing a pawn with check.",
          "Be2 blocks — but the bishop is pinned!",
          "Nf3# — smothered mate!"
        ]
      }
    ]
  },

  {
    id: "englund-gambit-trap",
    name: "Englund Gambit Trap",
    eco: "A40",
    difficulty: "trap",
    description: "Black's offbeat gambit sets a back-rank mating trap if White grabs too greedily.",
    lines: [
      {
        id: "main",
        name: "Back-rank ambush",
        moves: ["d4","e5","dxe5","Nc6","Nf3","Qe7","Bf4","Qb4+","Bd2","Qxb2","Bc3","Bb4","Qd2","Bxc3","Qxc3","Qc1#"],
        explanations: [
          "d4.",
          "e5!? the Englund Gambit.",
          "dxe5 grabbing the pawn.",
          "Nc6 hitting e5.",
          "Nf3 defends.",
          "Qe7 piling on e5.",
          "Bf4?? a natural move that loses (4.Qd5 holds).",
          "Qb4+ forking king and b2.",
          "Bd2 blocks.",
          "Qxb2 snatching the pawn and hitting the rook.",
          "Bc3 trying to trap the queen.",
          "Bb4! pinning the bishop.",
          "Qd2 defending.",
          "Bxc3 removing the defender.",
          "Qxc3 recaptures...",
          "Qc1# — back-rank checkmate!"
        ]
      }
    ]
  },

  {
    id: "elephant-trap",
    name: "Elephant Trap",
    eco: "D51",
    difficulty: "trap",
    description: "It looks like White wins the queen for free — but a hidden check turns the tables.",
    lines: [
      {
        id: "main",
        name: "The hidden check",
        moves: ["d4","d5","c4","e6","Nc3","Nf6","Bg5","Nbd7","cxd5","exd5","Nxd5","Nxd5","Bxd8","Bb4+","Qd2","Bxd2+","Kxd2","Kxd8"],
        explanations: [
          "d4.",
          "d5.",
          "c4 — the Queen's Gambit.",
          "e6 declining.",
          "Nc3 develops.",
          "Nf6 develops.",
          "Bg5 pins the knight.",
          "Nbd7 — the bait!",
          "cxd5 opening the centre.",
          "exd5 recaptures.",
          "Nxd5?? grabbing a pawn (the f6 knight looks pinned).",
          "Nxd5! the pin was an illusion.",
          "Bxd8 winning the queen...",
          "Bb4+! the point — check!",
          "Qd2 blocks.",
          "Bxd2+.",
          "Kxd2.",
          "Kxd8 — Black recaptures and is a whole piece up!"
        ]
      }
    ]
  },

  {
    id: "lasker-trap",
    name: "Lasker Trap",
    eco: "D08",
    difficulty: "trap",
    description: "The Albin Counter-Gambit's gem, ending in a stunning knight underpromotion.",
    lines: [
      {
        id: "main",
        name: "The underpromotion",
        moves: ["d4","d5","c4","e5","dxe5","d4","e3","Bb4+","Bd2","dxe3","Bxb4","exf2+","Ke2","fxg1=N+"],
        explanations: [
          "d4.",
          "d5.",
          "c4.",
          "e5!? the Albin Counter-Gambit.",
          "dxe5 grabbing the pawn.",
          "d4 clamping the centre.",
          "e3?? a natural try that walks into the trap (4.Nf3 is right).",
          "Bb4+ check!",
          "Bd2 blocks.",
          "dxe3! opening lines.",
          "Bxb4?? the losing move.",
          "exf2+ check!",
          "Ke2.",
          "fxg1=N+! the famous knight underpromotion — winning the queen next."
        ]
      }
    ]
  },

  {
    id: "noahs-ark-trap",
    name: "Noah's Ark Trap",
    eco: "C70",
    difficulty: "trap",
    description: "A Ruy Lopez classic: Black's pawns slowly close in and trap the white bishop.",
    lines: [
      {
        id: "main",
        name: "Trapping the bishop",
        moves: ["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","d6","d4","b5","Bb3","Nxd4","Nxd4","exd4","Qxd4","c5","Qd5","Be6","Qc6+","Bd7","Qd5","c4"],
        explanations: [
          "e4.",
          "e5.",
          "Nf3.",
          "Nc6.",
          "Bb5 — the Ruy Lopez.",
          "a6 questioning the bishop.",
          "Ba4.",
          "d6 — the Steinitz.",
          "d4 striking the centre.",
          "b5 gaining space.",
          "Bb3 retreating.",
          "Nxd4! the trap begins.",
          "Nxd4 recapturing.",
          "exd4 winning the piece back.",
          "Qxd4 — White regains the pawn, but...",
          "c5! kicking the queen.",
          "Qd5 attacking.",
          "Be6.",
          "Qc6+.",
          "Bd7.",
          "Qd5.",
          "c4! — the Noah's Ark closes; the b3 bishop is trapped!"
        ]
      }
    ]
  }

];
