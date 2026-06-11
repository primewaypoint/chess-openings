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
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","Bc4"],
        explanations: [
          "White controls the centre with the e-pawn.",
          "Black mirrors with e5, contesting the centre.",
          "The knight develops and attacks the e5 pawn.",
          "Black defends e5 with the knight.",
          "The bishop eyes the f7 square — the Italian setup."
        ]
      },
      {
        id: "giuoco-piano",
        name: "Giuoco Piano",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Bc5"],
        explanations: [
          "White occupies the centre.",
          "Black responds symmetrically.",
          "Knight develops, pressuring e5.",
          "Knight defends e5.",
          "Bishop attacks f7.",
          "Black mirrors with Bc5 — the 'quiet game'."
        ]
      },
      {
        id: "two-knights",
        name: "Two Knights Variation",
        moves: ["e4","e5","Nf3","Nc6","Bc4","Nf6"],
        explanations: [
          "White controls the centre.",
          "Black fights for the centre.",
          "Knight develops with tempo.",
          "Knight defends.",
          "Bishop targets f7.",
          "Black develops aggressively, counter-attacking e4."
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
        moves: ["d4","d5","Nf3","Nf6","Bf4"],
        explanations: [
          "White controls the centre with d4.",
          "Black challenges with d5.",
          "Knight develops to its best square.",
          "Black develops the knight.",
          "The London bishop heads to f4 — the signature move."
        ]
      },
      {
        id: "vs-king-indian",
        name: "vs King's Indian Setup",
        moves: ["d4","Nf6","Nf3","g6","Bf4","Bg7","e3"],
        explanations: [
          "White starts with d4.",
          "Black plays Nf6, aiming for a King's Indian setup.",
          "Knight to f3.",
          "Black fianchettoes.",
          "London bishop to f4.",
          "Bishop fianchettoes to g7.",
          "White solidifies the centre with e3."
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
        id: "main",
        name: "Classical — Queen to a5",
        moves: ["e4","d5","exd5","Qxd5","Nc3","Qa5"],
        explanations: [
          "White opens with e4.",
          "Black immediately strikes the centre with d5.",
          "White captures the d5 pawn.",
          "Black recaptures with the queen, gaining material.",
          "White attacks the queen with the knight.",
          "Queen retreats to a5, maintaining pressure on c3."
        ]
      },
      {
        id: "modern",
        name: "Modern — Nf6",
        moves: ["e4","d5","exd5","Nf6"],
        explanations: [
          "White opens with e4.",
          "Black strikes with d5.",
          "White captures.",
          "Black recaptures with the knight, avoiding early queen development."
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
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","Nc3","Nf6"],
        explanations: [
          "White opens e4.",
          "Black responds e5.",
          "White's kingside knight develops.",
          "Black's queenside knight develops.",
          "White's queenside knight joins.",
          "All four knights are out — the Four Knights Game."
        ]
      },
      {
        id: "spanish",
        name: "Spanish Variation",
        moves: ["e4","e5","Nf3","Nc6","Nc3","Nf6","Bb5"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Knight to c3.",
          "Knight to f6.",
          "White pins the c6 knight — the Spanish Four Knights."
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
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nc3"],
        explanations: [
          "White opens e4.",
          "Black responds e5.",
          "White develops the queenside knight — a flexible approach."
        ]
      },
      {
        id: "vienna-gambit",
        name: "Vienna Gambit",
        moves: ["e4","e5","Nc3","Nf6","f4"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "White plays Nc3.",
          "Black develops with Nf6.",
          "White pushes f4, offering a gambit pawn for centre control."
        ]
      },
      {
        id: "bishop-variation",
        name: "Bishop's Variation",
        moves: ["e4","e5","Nc3","Bc5","Bc4"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "Knight to c3.",
          "Black develops the bishop to c5.",
          "White mirrors with Bc4 — a double-bishop setup."
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
        id: "main",
        name: "King's Gambit",
        moves: ["e4","e5","f4"],
        explanations: [
          "White opens with e4.",
          "Black responds e5.",
          "White offers the f-pawn — the King's Gambit!"
        ]
      },
      {
        id: "accepted",
        name: "King's Gambit Accepted",
        moves: ["e4","e5","f4","exf4"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "White offers the f-pawn.",
          "Black accepts! Now White aims for rapid development."
        ]
      },
      {
        id: "declined",
        name: "King's Gambit Declined",
        moves: ["e4","e5","f4","Bc5"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "White offers the gambit.",
          "Black declines and develops the bishop — counterattacking f4."
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
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","d4","exd4","Nxd4"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "White immediately challenges with d4.",
          "Black captures the d4 pawn.",
          "White recaptures with the knight."
        ]
      },
      {
        id: "scotch-gambit",
        name: "Scotch Gambit",
        moves: ["e4","e5","Nf3","Nc6","d4","exd4","Bc4"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "White plays d4.",
          "Black captures.",
          "White gambits — Bc4 instead of recapturing, eyeing f7."
        ]
      },
      {
        id: "classical",
        name: "Classical — Nf6",
        moves: ["e4","e5","Nf3","Nc6","d4","exd4","Nxd4","Nf6"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight out.",
          "Knight out.",
          "d4 challenge.",
          "Black captures.",
          "White recaptures.",
          "Black develops with Nf6 — the Classical Scotch."
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
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nc6","Bb5"],
        explanations: [
          "White opens e4.",
          "Black e5.",
          "Knight to f3, attacking e5.",
          "Knight to c6, defending e5.",
          "Bishop to b5 — the Ruy Lopez, pinning the knight."
        ]
      },
      {
        id: "morphy-defense",
        name: "Morphy Defense",
        moves: ["e4","e5","Nf3","Nc6","Bb5","a6","Ba4"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Bishop to b5.",
          "Black challenges the bishop with a6.",
          "Bishop retreats to a4, maintaining the pin."
        ]
      },
      {
        id: "exchange",
        name: "Exchange Variation",
        moves: ["e4","e5","Nf3","Nc6","Bb5","a6","Bxc6"],
        explanations: [
          "White e4.",
          "Black e5.",
          "Knight to f3.",
          "Knight to c6.",
          "Bishop to b5.",
          "Black plays a6.",
          "White captures — the Exchange Lopez, creating a structural imbalance."
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
        id: "main",
        name: "Open Sicilian",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3"],
        explanations: [
          "White opens e4.",
          "Black plays c5 — the Sicilian!",
          "Knight to f3.",
          "Black plays d6.",
          "White strikes the centre with d4.",
          "Black captures.",
          "White recaptures with the knight.",
          "Black develops with Nf6.",
          "Knight to c3 — the Open Sicilian."
        ]
      },
      {
        id: "closed",
        name: "Closed Sicilian",
        moves: ["e4","c5","Nc3","g6","g3","Bg7","Bg2","Nc6"],
        explanations: [
          "White e4.",
          "Black c5.",
          "White plays Nc3 — the Closed Sicilian.",
          "Black fianchettoes with g6.",
          "White fianchettoes.",
          "Black bishop to g7.",
          "White completes the fianchetto.",
          "Black develops with Nc6."
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
        id: "main",
        name: "Main Line",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6"],
        explanations: [
          "White e4.",
          "Black c5.",
          "Knight to f3.",
          "Black d6.",
          "White d4.",
          "Black captures.",
          "White recaptures.",
          "Black Nf6.",
          "Knight to c3.",
          "Black plays a6 — the Najdorf, preventing Nb5."
        ]
      },
      {
        id: "english-attack",
        name: "English Attack",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Be3","e5","Nb3"],
        explanations: [
          "White e4.",
          "Black c5.",
          "Knight to f3.",
          "Black d6.",
          "White d4.",
          "Black captures.",
          "White recaptures.",
          "Nf6.",
          "Nc3.",
          "Najdorf a6.",
          "White plays Be3 — the English Attack.",
          "Black plays e5.",
          "Knight retreats to b3."
        ]
      },
      {
        id: "bg5",
        name: "Classical Variation — Bg5",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Bg5"],
        explanations: [
          "White e4.",
          "Black c5.",
          "Nf3.",
          "d6.",
          "d4.",
          "Captures.",
          "Recaptures.",
          "Nf6.",
          "Nc3.",
          "a6.",
          "White pins the knight — the Classical Najdorf with Bg5."
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
        id: "main",
        name: "Dragon Setup",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6"],
        explanations: [
          "White e4.",
          "Black c5.",
          "Knight to f3.",
          "Black d6.",
          "White d4.",
          "Black captures.",
          "White recaptures.",
          "Nf6.",
          "Nc3.",
          "Black plays g6 — the Dragon!"
        ]
      },
      {
        id: "yugoslav",
        name: "Yugoslav Attack",
        moves: ["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","g6","Be3","Bg7","f3","O-O","Qd2","Nc6","Bc4"],
        explanations: [
          "e4.", "c5.", "Nf3.", "d6.", "d4.", "cxd4.", "Nxd4.", "Nf6.", "Nc3.", "g6.",
          "White plays Be3.",
          "Black fianchettoes.",
          "White plays f3 — preparing g4 advance.",
          "Black castles.",
          "Qd2 — preparing 0-0-0.",
          "Black develops Nc6.",
          "Bishop to c4 — the Yugoslav Attack, a race of attacks."
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
        id: "main",
        name: "Main Line",
        moves: ["e4","e6","d4","d5"],
        explanations: [
          "White opens e4.",
          "Black plays e6 — the French Defense.",
          "White pushes d4.",
          "Black challenges with d5."
        ]
      },
      {
        id: "advance",
        name: "Advance Variation",
        moves: ["e4","e6","d4","d5","e5"],
        explanations: [
          "White e4.", "Black e6.", "White d4.", "Black d5.",
          "White plays e5 — the Advance, gaining space and closing the centre."
        ]
      },
      {
        id: "exchange",
        name: "Exchange Variation",
        moves: ["e4","e6","d4","d5","exd5","exd5"],
        explanations: [
          "White e4.", "Black e6.", "White d4.", "Black d5.",
          "White captures.", "Black recaptures — symmetrical positions."
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
          "White e4.", "Black e6.", "White d4.", "Black d5.",
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
        moves: ["e4","e6","d4","d5","e5","c5","c3","Nc6","Nf3","Nge7","Bd3","cxd4","cxd4","Nxd4","Nxd4","Qxd4","Nb5"],
        explanations: [
          "e4.","e6.","d4.","d5.","e5.","c5.","c3.","Nc6.","Nf3.","Nge7.","Bd3.",
          "Black captures on d4.",
          "White recaptures.",
          "Black knight captures.",
          "White recaptures.",
          "Black captures the d4 pawn.",
          "Knight to b5 — the Milner-Barry Gambit."
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
        id: "main",
        name: "Main Line",
        moves: ["e4","c6","d4","d5"],
        explanations: [
          "White opens e4.",
          "Black plays c6 — the Caro-Kann!",
          "White plays d4.",
          "Black challenges with d5."
        ]
      },
      {
        id: "advance",
        name: "Advance Variation",
        moves: ["e4","c6","d4","d5","e5","Bf5"],
        explanations: [
          "White e4.", "Black c6.", "White d4.", "Black d5.",
          "White plays e5.",
          "Black develops the bishop before closing in — the Advance Caro-Kann."
        ]
      },
      {
        id: "classical",
        name: "Classical Variation",
        moves: ["e4","c6","d4","d5","Nc3","dxe4","Nxe4","Bf5"],
        explanations: [
          "e4.","c6.","d4.","d5.","Nc3.",
          "Black captures.",
          "White recaptures.",
          "Black develops bishop to f5 — the Classical Caro-Kann."
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
        id: "main",
        name: "Main Line",
        moves: ["e4","d6","d4","Nf6","Nc3","g6","Nf3","Bg7","Be2","O-O"],
        explanations: [
          "White e4.", "Black d6 — the Pirc.",
          "White d4.", "Black Nf6.",
          "White Nc3.", "Black fianchettoes with g6.",
          "White Nf3.", "Black bishop to g7.",
          "Bishop to e2.", "Black castles — classic Pirc setup."
        ]
      },
      {
        id: "austrian-attack",
        name: "Austrian Attack",
        moves: ["e4","d6","d4","Nf6","Nc3","g6","f4","Bg7","Nf3"],
        explanations: [
          "e4.","d6.","d4.","Nf6.","Nc3.","g6.",
          "White plays f4 — the aggressive Austrian Attack!",
          "Black fianchettoes.",
          "Knight to f3."
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
        id: "main",
        name: "Main Line — Four Pawns Attack",
        moves: ["e4","Nf6","e5","Nd5","d4","d6","c4","Nb6","f4"],
        explanations: [
          "White e4.", "Alekhine's! Knight to f6.",
          "White chases with e5.", "Knight retreats to d5.",
          "White d4.", "Black d6, undermining e5.",
          "White c4, chasing again.", "Knight to b6.",
          "White f4 — the Four Pawns Attack."
        ]
      },
      {
        id: "modern",
        name: "Modern Variation",
        moves: ["e4","Nf6","e5","Nd5","Nf3","d6","Bc4"],
        explanations: [
          "White e4.", "Nf6.", "White e5.", "Nd5.",
          "White plays Nf3.", "Black d6.",
          "Bishop to c4 — the Modern Variation."
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
        id: "main",
        name: "Main Line",
        moves: ["e4","e5","Nf3","Nf6","Nxe5","d6","Nf3","Nxe4","d4"],
        explanations: [
          "White e4.", "Black e5.", "Knight to f3.",
          "Black plays Nf6 — the Petrov!",
          "White captures on e5.", "Black plays d6.",
          "White retreats.", "Black captures e4.", "White plays d4."
        ]
      },
      {
        id: "classical",
        name: "Classical Attack",
        moves: ["e4","e5","Nf3","Nf6","Nxe5","d6","Nf3","Nxe4","Nc3"],
        explanations: [
          "e4.","e5.","Nf3.","Nf6.","Nxe5.","d6.","Nf3.","Nxe4.",
          "White plays Nc3 — the Classical Attack."
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
        id: "main",
        name: "Main Line",
        moves: ["d4","d5","c4"],
        explanations: [
          "White controls the centre with d4.",
          "Black responds symmetrically with d5.",
          "White offers c4 — the Queen's Gambit!"
        ]
      },
      {
        id: "accepted",
        name: "Queen's Gambit Accepted",
        moves: ["d4","d5","c4","dxc4"],
        explanations: [
          "White d4.", "Black d5.", "White c4.",
          "Black accepts — dxc4. White will regain the pawn."
        ]
      },
      {
        id: "declined",
        name: "Queen's Gambit Declined",
        moves: ["d4","d5","c4","e6"],
        explanations: [
          "White d4.", "Black d5.", "White c4.",
          "Black declines with e6 — a solid central defence."
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
        name: "Main Line",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3"],
        explanations: [
          "White d4.", "Black d5.", "White c4.",
          "Black plays c6 — the Slav, supporting d5.", "Knight to f3.", "Nf6.", "Nc3."
        ]
      },
      {
        id: "exchange",
        name: "Exchange Variation",
        moves: ["d4","d5","c4","c6","cxd5","cxd5","Nc3","Nf6"],
        explanations: [
          "d4.","d5.","c4.","c6.",
          "White captures on d5.", "Black recaptures.", "White Nc3.", "Black Nf6."
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
        id: "main",
        name: "Main Line",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6"],
        explanations: [
          "d4.","d5.","c4.","c6.","Nf3.","Nf6.","Nc3.",
          "Black plays e6 — the Semi-Slav."
        ]
      },
      {
        id: "botvinnik",
        name: "Botvinnik Variation",
        moves: ["d4","d5","c4","c6","Nf3","Nf6","Nc3","e6","Bg5","dxc4","e4","b5"],
        explanations: [
          "d4.","d5.","c4.","c6.","Nf3.","Nf6.","Nc3.","e6.",
          "White plays Bg5.", "Black captures on c4.",
          "White plays e4!", "Black defends with b5 — the wild Botvinnik."
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
        id: "main",
        name: "Leningrad Variation",
        moves: ["d4","f5","g3","Nf6","Bg2","g6","Nf3","Bg7","O-O","O-O"],
        explanations: [
          "White d4.", "Black f5 — the Dutch!",
          "White fianchettoes.", "Nf6.", "Bishop to g2.", "Black fianchettoes.",
          "Nf3.", "Black bishop to g7.", "White castles.", "Black castles."
        ]
      },
      {
        id: "stonewall",
        name: "Stonewall Variation",
        moves: ["d4","f5","Nf3","Nf6","e3","e6","Bd3","d5","c3"],
        explanations: [
          "d4.","f5.","Nf3.","Nf6.","e3.","e6.","Bd3.","d5.",
          "White plays c3 — Black will build the Stonewall with c6."
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
          "White d4.", "Nf6.", "c4.", "c5.", "d5.",
          "Black plays b5 — the Benko Gambit!", "White captures.", "Black a6.", "White captures again.",
          "Black recaptures — excellent queenside compensation."
        ]
      },
      {
        id: "declined",
        name: "Declined",
        moves: ["d4","Nf6","c4","c5","d5","b5","b6"],
        explanations: [
          "d4.","Nf6.","c4.","c5.","d5.","b5.",
          "White declines with b6 — avoiding the gambit."
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
        id: "main",
        name: "Main Line",
        moves: ["c4","e5","Nc3","Nf6","Nf3","Nc6","g3"],
        explanations: [
          "White plays c4 — the English!", "Black plays e5.", "Knight to c3.",
          "Black Nf6.", "Nf3.", "Nc6.", "White fianchettoes."
        ]
      },
      {
        id: "symmetrical",
        name: "Symmetrical Variation",
        moves: ["c4","c5","Nf3","Nf6","Nc3","Nc6","g3","g6"],
        explanations: [
          "c4.", "Black mirrors with c5!", "Nf3.", "Nf6.", "Nc3.", "Nc6.",
          "White fianchettoes.", "Black mirrors — the Symmetrical English."
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
        name: "Main Line",
        moves: ["Nf3","d5","c4","c6","g3","Nf6","Bg2"],
        explanations: [
          "White plays Nf3 — the Réti!", "Black d5.", "White c4.",
          "Black c6.", "White fianchettoes.", "Nf6.", "Bishop to g2."
        ]
      },
      {
        id: "double-fianchetto",
        name: "Double Fianchetto",
        moves: ["Nf3","d5","g3","Nf6","Bg2","g6","O-O","Bg7","b3","O-O","Bb2"],
        explanations: [
          "Nf3.", "d5.", "g3.", "Nf6.", "Bg2.", "Black fianchettoes.", "White castles.",
          "Black bishop out.", "White b3.", "Black castles.", "Bishop to b2 — double fianchetto."
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
        id: "main",
        name: "Closed Catalan",
        moves: ["d4","Nf6","c4","e6","g3","d5","Bg2","Be7","Nf3","O-O","O-O"],
        explanations: [
          "d4.","Nf6.","c4.","e6.","White fianchettoes.","d5.","Bg2.","Be7.","Nf3.","Black castles.","White castles — Closed Catalan."
        ]
      },
      {
        id: "open",
        name: "Open Catalan",
        moves: ["d4","Nf6","c4","e6","g3","d5","Bg2","dxc4","Nf3"],
        explanations: [
          "d4.","Nf6.","c4.","e6.","g3.","d5.","Bg2.",
          "Black captures on c4 — the Open Catalan.", "Nf3 — White regains the pawn."
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
        id: "main",
        name: "KID Setup",
        moves: ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","Nf3","O-O"],
        explanations: [
          "d4.","Nf6.","c4.","Black fianchettoes — the KID!","Nc3.","Bishop to g7.","e4.","d6.","Nf3.","Black castles — the King's Indian setup."
        ]
      },
      {
        id: "classical",
        name: "Classical Variation",
        moves: ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","Nf3","O-O","Be2","e5"],
        explanations: [
          "d4.","Nf6.","c4.","g6.","Nc3.","Bg7.","e4.","d6.","Nf3.","O-O.",
          "White plays Be2.", "Black strikes with e5 — the Classical KID."
        ]
      },
      {
        id: "averbakh",
        name: "Averbakh Variation",
        moves: ["d4","Nf6","c4","g6","Nc3","Bg7","e4","d6","Be2","O-O","Bg5"],
        explanations: [
          "d4.","Nf6.","c4.","g6.","Nc3.","Bg7.","e4.","d6.","Be2.","O-O.",
          "White plays Bg5 — the Averbakh, preventing e5."
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
        id: "main",
        name: "Main Line",
        moves: ["d4","Nf6","c4","g6","Nc3","d5"],
        explanations: [
          "d4.","Nf6.","c4.","Black fianchettoes.","Nc3.",
          "Black plays d5 — the Grünfeld, challenging the centre directly!"
        ]
      },
      {
        id: "exchange",
        name: "Exchange Variation",
        moves: ["d4","Nf6","c4","g6","Nc3","d5","cxd5","Nxd5","e4","Nxc3","bxc3","Bg7","Bc4","c5"],
        explanations: [
          "d4.","Nf6.","c4.","g6.","Nc3.","d5.",
          "White captures on d5.","Black recaptures.","White plays e4!","Black captures on c3.","White recaptures.","Black fianchettoes.","Bishop to c4.","Black plays c5 — the Exchange Grünfeld."
        ]
      },
      {
        id: "russian",
        name: "Russian System",
        moves: ["d4","Nf6","c4","g6","Nc3","d5","Nf3","Bg7","Qb3"],
        explanations: [
          "d4.","Nf6.","c4.","g6.","Nc3.","d5.","Nf3.","Black fianchettoes.",
          "White plays Qb3 — the Russian System, pressuring d5."
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
        id: "main",
        name: "Main Line",
        moves: ["d4","Nf6","c4","e6","Nc3","Bb4"],
        explanations: [
          "d4.","Nf6.","c4.","e6.","Nc3.",
          "Black plays Bb4 — the Nimzo-Indian, pinning the knight!"
        ]
      },
      {
        id: "classical",
        name: "Classical — Qc2",
        moves: ["d4","Nf6","c4","e6","Nc3","Bb4","Qc2"],
        explanations: [
          "d4.","Nf6.","c4.","e6.","Nc3.","Bb4.",
          "White plays Qc2 — avoiding doubled pawns."
        ]
      },
      {
        id: "rubinstein",
        name: "Rubinstein — e3",
        moves: ["d4","Nf6","c4","e6","Nc3","Bb4","e3","O-O","Bd3","d5"],
        explanations: [
          "d4.","Nf6.","c4.","e6.","Nc3.","Bb4.",
          "White plays e3 — the Rubinstein.","Black castles.","Bishop to d3.","Black challenges with d5."
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
        name: "Main Line",
        moves: ["d4","Nf6","c4","e6","Nf3","b6","g3","Bb7","Bg2","Be7","O-O"],
        explanations: [
          "d4.","Nf6.","c4.","e6.","Nf3.",
          "Black plays b6 — the Queen's Indian!","White fianchettoes.","Black fianchettoes.","Bg2.","Be7.","White castles."
        ]
      },
      {
        id: "kasparov",
        name: "Kasparov Variation",
        moves: ["d4","Nf6","c4","e6","Nf3","b6","Nc3","Bb7","a3","d5"],
        explanations: [
          "d4.","Nf6.","c4.","e6.","Nf3.","b6.","Nc3.","Bb7.",
          "White plays a3 — the Kasparov Variation.","Black challenges with d5."
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
        moves: ["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","Nf6","Nc3","e5","Nb5","d6","Bg5","a6","Na3","b5"],
        explanations: [
          "e4.","c5.","Nf3.","Nc6.","d4.","cxd4.","Nxd4.","Nf6.","Nc3.",
          "Black plays e5 — the Sveshnikov!","Knight goes to b5.","d6.","Bg5.","Black plays a6.","Knight retreats.","Black plays b5 — queenside expansion."
        ]
      },
      {
        id: "modern",
        name: "Modern Variation",
        moves: ["e4","c5","Nf3","Nc6","d4","cxd4","Nxd4","Nf6","Nc3","e5","Ndb5","d6","Bg5","a6","Bxf6","gxf6","Na3"],
        explanations: [
          "e4.","c5.","Nf3.","Nc6.","d4.","cxd4.","Nxd4.","Nf6.","Nc3.","e5.","Ndb5.","d6.",
          "White plays Bg5.","Black a6.","White captures on f6.","Black recaptures with the g-pawn.","Knight to a3."
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
        moves: ["f3","e5","Kf2","d5","d4","exd4","Nf3"],
        explanations: [
          "f3.", "e5.", "Kf2 — the hammer falls.",
          "Black plays d5.", "White plays d4.", "Black captures.",
          "White plays Nf3 — at least developing a piece. The king on f2 will be fine. Probably."
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
          "White e4.", "Black e5.", "Nf3.", "Nc6.", "Bb5.", "a6.", "Ba4.", "Nf6.", "White castles.",
          "Black captures on e4. White's queen on d1 is not hanging — but don't worry, the Botez Gambit will find a way."
        ]
      },
      {
        id: "declined",
        name: "Botez Gambit Declined",
        moves: ["e4","e5","Nf3","Nc6","Qh5"],
        explanations: [
          "e4.", "e5.", "Nf3.", "Nc6.",
          "White plays Qh5 — immediately putting the queen where it can be lost. The Botez Gambit is a mindset, not a line."
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
  }

];
