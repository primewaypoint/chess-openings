// ── "Go deeper" lines (v1.5.0) ───────────────────────────────────────
// Optional advanced lines per opening, merged into OPENINGS at load time and
// tagged tier:"deeper". Kept separate so the curated essentials in openings.js
// stay untouched. Every line here is validated move-by-move by
// scripts/validate-openings.js (chess.js) before each build.
//
// NOTE: italian-game, ruy-lopez and sicilian-defense already carry their deeper
// lines inline in openings.js, so they are intentionally absent here.

const DEEPER_LINES = {

  // ============================================================
  // BEGINNER
  // ============================================================

  'london-system': [
    {
      id: 'london-kingside-attack',
      name: 'Kingside Attack (Ne5 & f4)',
      moves: ['d4','d5','Bf4','Nf6','e3','e6','Bd3','c5','c3','Nc6','Nf3','Bd6','Bg3','O-O','Nbd2','b6','Ne5'],
      explanations: [
        'White takes the centre.','Black answers symmetrically.','The London bishop comes out early.',
        'Black develops.','e3 supports the centre.','Black opens a path for the bishop.',
        'Bishop aims at the kingside.','Black strikes at d4.','c3 keeps the pawn chain solid.',
        'Black develops the knight.','Knight develops.','Black challenges the London bishop.',
        'Bishop sidesteps to g3.','Black castles.','Knight heads for the kingside.',
        'Black fianchettoes.','Ne5 — the classic London kingside clamp, ready for f4.'
      ]
    },
    {
      id: 'london-vs-kid-h4',
      name: 'Aggressive h4 vs …g6',
      moves: ['d4','Nf6','Bf4','g6','Nc3','d5','e3','Bg7','h4'],
      explanations: [
        'White takes the centre.','Black develops.','The bishop comes out.','Black prepares a fianchetto.',
        'Nc3 eyes d5 and supports a pawn storm.','Black stakes a centre claim.','e3 stays solid.',
        'Black completes the fianchetto.','h4! — a sharp pawn lunge to crack open the castled king.'
      ]
    }
  ],

  'scandinavian-defense': [
    {
      id: 'scandi-icelandic',
      name: 'Icelandic Gambit',
      moves: ['e4','d5','exd5','Nf6','c4','e6','dxe6','Bxe6'],
      explanations: [
        'White takes the centre.','Black challenges immediately.','White grabs the pawn.',
        'Nf6 hits the d5 pawn instead of recapturing.','c4 tries to hold the extra pawn.',
        'e6! the Icelandic Gambit — opening lines fast.','White accepts.',
        'Bxe6 — Black has a big lead in development for the pawn.'
      ]
    },
    {
      id: 'scandi-portuguese-deep',
      name: 'Portuguese Gambit — 3…Bg4',
      moves: ['e4','d5','exd5','Nf6','d4','Bg4','f3','Bf5','c4','e6','dxe6','Nc6'],
      explanations: [
        'White takes the centre.','Black challenges.','White grabs the pawn.','Nf6 delays the recapture.',
        'd4 builds a big centre.','Bg4! the Portuguese Gambit, pinning nothing but eyeing development.',
        'f3 questions the bishop.','Bishop reroutes to f5.','c4 holds the pawn.','e6 strikes back.',
        'White takes.','Nc6 — Black pours pieces out for the pawn.'
      ]
    }
  ],

  'four-knights-game': [
    {
      id: '4kn-rubinstein',
      name: 'Rubinstein Counter-Gambit',
      moves: ['e4','e5','Nf3','Nc6','Nc3','Nf6','Bb5','Nd4'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight attacks e5.','Knight defends.',
        'Nc3 — the Four Knights.','Black develops symmetrically.','Bb5 pins the knight.',
        'Nd4! the Rubinstein — a bold counter-thrust ignoring the pin.'
      ]
    },
    {
      id: '4kn-halloween',
      name: 'Halloween Gambit',
      moves: ['e4','e5','Nf3','Nc6','Nc3','Nf6','Nxe5','Nxe5','d4'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight attacks e5.','Knight defends.',
        'Nc3 — the Four Knights.','Black develops.','Nxe5?! the wild Halloween Gambit — sacrificing a knight.',
        'Black takes.','d4 — White grabs the centre and chases the knights for the piece.'
      ]
    }
  ],

  'vienna-game': [
    {
      id: 'vienna-frankenstein',
      name: 'Frankenstein-Dracula',
      moves: ['e4','e5','Nc3','Nf6','Bc4','Nxe4','Qh5','Nd6','Bb3','Nc6'],
      explanations: [
        'White takes the centre.','Black mirrors.','Nc3 — the Vienna.','Black develops.',
        'Bc4 eyes f7.','Nxe4!? grabbing the pawn — entering the Frankenstein-Dracula.',
        'Qh5 attacks e5 and f7.','Nd6 defends and blocks.','Bishop retreats to b3.',
        'Nc6 holds e5 — wild complications loom.'
      ]
    },
    {
      id: 'vienna-max-lange',
      name: 'Max Lange (3.f4 d5 4.fxe5)',
      moves: ['e4','e5','Nc3','Nf6','f4','d5','fxe5','Nxe4','Nf3','Be7'],
      explanations: [
        'White takes the centre.','Black mirrors.','Nc3 develops.','Black develops.',
        'f4 — the Vienna Gambit.','d5! the critical counter-strike.','White takes on e5.',
        'Black recaptures the e4 pawn.','Nf3 develops and eyes e5.','Be7 — a solid, balanced fight.'
      ]
    }
  ],

  'kings-gambit': [
    {
      id: 'kg-muzio',
      name: 'Muzio Gambit',
      moves: ['e4','e5','f4','exf4','Nf3','g5','Bc4','g4','O-O'],
      explanations: [
        'White takes the centre.','Black mirrors.','f4 — the King\'s Gambit.','Black accepts.',
        'Nf3 stops ...Qh4+.','g5 defends the f4 pawn.','Bc4 targets f7.','g4 attacks the knight.',
        'O-O! the Muzio — sacrificing the knight for a roaring attack.'
      ]
    },
    {
      id: 'kg-fischer',
      name: 'Fischer Defense (3…d6)',
      moves: ['e4','e5','f4','exf4','Nf3','d6'],
      explanations: [
        'White takes the centre.','Black mirrors.','f4 — the King\'s Gambit.','Black accepts.',
        'Nf3 develops.','d6! Fischer\'s solid antidote, preparing ...g5 without ...Bg7 problems.'
      ]
    }
  ],

  'kings-gambit-accepted': [
    {
      id: 'kga-cunningham',
      name: 'Cunningham Defense',
      moves: ['e4','e5','f4','exf4','Nf3','Be7','Bc4','Bh4+','g3','fxg3'],
      explanations: [
        'White takes the centre.','Black mirrors.','f4 — the gambit.','Black accepts.',
        'Nf3 develops.','Be7 eyeing the h4 check.','Bc4 targets f7.','Bh4+! the Cunningham check.',
        'g3 blocks.','fxg3 — sharp play with an open f-file looming.'
      ]
    },
    {
      id: 'kga-bishop-gambit',
      name: "Bishop's Gambit (4.Bc4)",
      moves: ['e4','e5','f4','exf4','Bc4','Qh4+','Kf1','d5'],
      explanations: [
        'White takes the centre.','Black mirrors.','f4 — the gambit.','Black accepts.',
        "Bc4 — the Bishop's Gambit, allowing the check.",'Qh4+ checks.',
        'Kf1 steps aside, keeping the extra pawn.','d5! Black hits back in the centre.'
      ]
    }
  ],

  'giuoco-piano-full': [
    {
      id: 'gpf-greco',
      name: 'Greco Attack (main d4 line)',
      moves: ['e4','e5','Nf3','Nc6','Bc4','Bc5','c3','Nf6','d4','exd4','cxd4','Bb4+','Nc3','Nxe4'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop to c4.',
        'Black copies.','c3 prepares d4.','Black develops.','d4 strikes.','Black takes.',
        'White recaptures.','Bb4+ checks.','Nc3 blocks (the Greco).','Nxe4! the critical grab — wild tactics ahead.'
      ]
    },
    {
      id: 'gpf-moeller',
      name: 'Møller Attack',
      moves: ['e4','e5','Nf3','Nc6','Bc4','Bc5','c3','Nf6','d4','exd4','cxd4','Bb4+','Nc3','Nxe4','O-O','Bxc3','d5'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop to c4.',
        'Black copies.','c3 prepares d4.','Black develops.','d4 strikes.','Black takes.','White recaptures.',
        'Bb4+ checks.','Nc3 blocks.','Nxe4 grabs.','O-O! the Møller — offering more material.',
        'Black takes the knight.','d5! the thematic central pawn sacrifice for a huge attack.'
      ]
    }
  ],

  'fried-liver-attack': [
    {
      id: 'fla-lolli',
      name: 'Lolli Attack (6.d4)',
      moves: ['e4','e5','Nf3','Nc6','Bc4','Nf6','Ng5','d5','exd5','Nxd5','d4'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Black develops.','Bishop eyes f7.',
        'Black develops — Two Knights.','Ng5 lunges.','d5 strikes back.','White takes.','Black recaptures.',
        'd4! the Lolli — blasting the centre open instead of Nxf7.'
      ]
    }
  ],

  'philidor-defense': [
    {
      id: 'philidor-shirov',
      name: 'Shirov Gambit',
      moves: ['e4','e5','Nf3','d6','d4','exd4','Nxd4','Nf6','Nc3','Be7','f4'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','d6 — the Philidor.','d4 strikes.',
        'Black takes.','White recaptures.','Black develops.','Nc3 develops.','Be7 solid.',
        'f4! an aggressive space-grabbing thrust.'
      ]
    },
    {
      id: 'philidor-exchange',
      name: 'Exchange French-style (3.d4 exd4)',
      moves: ['e4','e5','Nf3','d6','d4','Nf6','Nc3','Nbd7','Bc4','Be7','O-O','O-O'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','d6 — the Philidor.','d4 strikes.',
        'Black develops, keeping the tension.','Nc3 develops.','Nbd7 supports e5.','Bishop to c4.',
        'Black develops.','White castles.','Black castles — a solid Hanham-style setup.'
      ]
    }
  ],

  'scotch-game': [
    {
      id: 'scotch-steinitz',
      name: 'Steinitz Variation (4…Qh4)',
      moves: ['e4','e5','Nf3','Nc6','d4','exd4','Nxd4','Qh4'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Black defends.','d4 — the Scotch.',
        'Black takes.','White recaptures.','Qh4!? the provocative Steinitz, eyeing e4 and g2.'
      ]
    },
    {
      id: 'scotch-mieses-deep',
      name: 'Mieses — 8.c4 Main',
      moves: ['e4','e5','Nf3','Nc6','d4','exd4','Nxd4','Nf6','Nxc6','bxc6','e5','Qe7','Qe2','Nd5','c4'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Black defends.','d4 — the Scotch.',
        'Black takes.','White recaptures.','Nf6 hits e4.','Nxc6 trades.','bxc6 recaptures.',
        'e5! kicks the knight.','Qe7 pins the e-pawn.','Qe2 supports it.','Nd5 centralises.',
        'c4! the main line, challenging the knight for an edge.'
      ]
    }
  ],

  'evans-gambit': [
    {
      id: 'evans-compromised',
      name: 'Compromised Defense',
      moves: ['e4','e5','Nf3','Nc6','Bc4','Bc5','b4','Bxb4','c3','Ba5','d4','exd4','O-O','dxc3','Qb3'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Black defends.','Bishop to c4.',
        'Black copies.','b4 — the Evans.','Black accepts.','c3 gains a tempo.','Bishop retreats.',
        'd4 strikes.','Black takes.','O-O develops.','dxc3 grabs a second pawn — the Compromised Defense.',
        'Qb3! White piles on f7 with a fierce initiative.'
      ]
    },
    {
      id: 'evans-declined',
      name: 'Evans Gambit Declined',
      moves: ['e4','e5','Nf3','Nc6','Bc4','Bc5','b4','Bb6','a4','a6','c3'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Black defends.','Bishop to c4.',
        'Black copies.','b4 — the Evans.','Bb6 declines the pawn.','a4 gains queenside space.',
        'a6 stops a4-a5.','c3 prepares d4 — a calmer but pleasant edge for White.'
      ]
    }
  ],

  'danish-gambit': [
    {
      id: 'danish-double',
      name: 'Double Pawn Sacrifice',
      moves: ['e4','e5','d4','exd4','c3','dxc3','Bc4','cxb2','Bxb2'],
      explanations: [
        'White takes the centre.','Black mirrors.','d4 strikes.','Black takes.','c3 — the Danish.',
        'Black grabs.','Bc4 ignores material, eyeing f7.','cxb2 takes a second pawn.',
        'Bxb2! two raking bishops aim at the Black king for the two pawns.'
      ]
    },
    {
      id: 'danish-decline-d5',
      name: 'Declined with 3…d5',
      moves: ['e4','e5','d4','exd4','c3','d5','exd5','Qxd5','cxd4'],
      explanations: [
        'White takes the centre.','Black mirrors.','d4 strikes.','Black takes.','c3 — the Danish.',
        'd5! the safest decline, returning the pawn for free development.','White takes.',
        'Black recaptures.','cxd4 — a balanced, open position.'
      ]
    }
  ],

  'bishops-opening': [
    {
      id: 'bishops-urusov',
      name: 'Urusov Gambit',
      moves: ['e4','e5','Bc4','Nf6','d4','exd4','Nf3'],
      explanations: [
        'White takes the centre.','Black mirrors.','Bc4 — the Bishop\'s Opening.','Nf6 hits e4.',
        'd4! the Urusov Gambit.','Black takes.','Nf3 — quick development and open lines for the pawn.'
      ]
    },
    {
      id: 'bishops-berlin',
      name: 'Berlin (3…Nf6 4.d3)',
      moves: ['e4','e5','Bc4','Nf6','d3','c6','Nf3','d5','Bb3','Bd6'],
      explanations: [
        'White takes the centre.','Black mirrors.','Bc4 develops.','Nf6 hits e4.','d3 defends solidly.',
        'c6 prepares ...d5.','Nf3 develops.','d5 grabs the centre.','Bb3 keeps the bishop active.',
        'Bd6 — a balanced Italian-style structure.'
      ]
    }
  ],

  'three-knights-game': [
    {
      id: '3kn-winawer',
      name: 'Winawer Defense (3…g6)',
      moves: ['e4','e5','Nf3','Nc6','Nc3','g6'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Black defends.',
        'Nc3 — the Three Knights.','g6! Black fianchettoes rather than playing ...Nf6.'
      ]
    }
  ],

  'center-game': [
    {
      id: 'center-paulsen',
      name: 'Paulsen Attack (Qe3)',
      moves: ['e4','e5','d4','exd4','Qxd4','Nc6','Qe3','Nf6','Nc3','Be7'],
      explanations: [
        'White takes the centre.','Black mirrors.','d4 — the Center Game.','Black takes.',
        'Qxd4 recaptures with the queen.','Nc6 hits the queen with tempo.','Qe3 — the Paulsen setup.',
        'Black develops.','Nc3 develops.','Be7 — White aims for long castling and a kingside attack.'
      ]
    },
    {
      id: 'center-opposite-castling',
      name: 'Opposite-Side Castling Attack',
      moves: ['e4','e5','d4','exd4','Qxd4','Nc6','Qe3','Nf6','Nc3','Bb4','Bd2','O-O','O-O-O'],
      explanations: [
        'White takes the centre.','Black mirrors.','d4 — the Center Game.','Black takes.',
        'Qxd4 recaptures.','Nc6 hits the queen.','Qe3 tucks the queen safely.','Black develops.',
        'Nc3 develops.','Bb4 pins the knight.','Bd2 unpins.','Black castles short.',
        'O-O-O! White castles long — opposite-side castling means a race of pawn storms.'
      ]
    }
  ],

  'hungarian-defense': [
    {
      id: 'hungarian-d4',
      name: 'Central Push (4.d4)',
      moves: ['e4','e5','Nf3','Nc6','Bc4','Be7','d4','exd4','Nxd4','Nf6'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Black defends.','Bishop to c4.',
        'Be7 — the modest Hungarian.','d4 grabs the centre.','Black takes.','White recaptures.',
        'Nf6 — Black stays solid but passive; White has a pleasant space edge.'
      ]
    }
  ],

  'ponziani-opening': [
    {
      id: 'ponziani-jaenisch',
      name: 'Jaenisch Counterattack (3…Nf6)',
      moves: ['e4','e5','Nf3','Nc6','c3','Nf6','d4','Nxe4','d5','Ne7'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Black defends.','c3 — the Ponziani.',
        'Nf6! the Jaenisch, hitting e4.','d4 strikes.','Nxe4 grabs the pawn.','d5 chases the knight.',
        'Ne7 retreats — double-edged play.'
      ]
    },
    {
      id: 'ponziani-leonhardt',
      name: 'Leonhardt (3…d5)',
      moves: ['e4','e5','Nf3','Nc6','c3','d5','Qa4','Nf6','Nxe5','Bd6'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Black defends.','c3 — the Ponziani.',
        'd5! the principled central counter.','Qa4 pins the knight.','Nf6 develops.','Nxe5 grabs a pawn.',
        'Bd6 hits the knight — Black has active piece play.'
      ]
    }
  ],

  'bird-opening': [
    {
      id: 'bird-froms-deep',
      name: "From's Gambit — 4.Nf3 main",
      moves: ['f4','e5','fxe5','d6','exd6','Bxd6','Nf3','g5'],
      explanations: [
        'f4 — the Bird.','e5! From\'s Gambit.','White grabs the pawn.','d6 challenges back.',
        'exd6 takes.','Bxd6 recaptures, eyeing h2.','Nf3 stops ...Qh4+.','g5! Black storms the kingside.'
      ]
    },
    {
      id: 'bird-classical-stonewall',
      name: 'Stonewall Bird',
      moves: ['f4','d5','Nf3','Nf6','e3','g6','Be2','Bg7','O-O','O-O','d4'],
      explanations: [
        'f4 — the Bird.','d5 takes the centre.','Nf3 develops.','Black develops.','e3 solid.',
        'g6 prepares a fianchetto.','Be2 develops.','Bg7 fianchettoes.','White castles.','Black castles.',
        'd4 — locking a Stonewall structure for a kingside plan.'
      ]
    }
  ],

  'nimzowitsch-larsen-attack': [
    {
      id: 'larsen-classical-deep',
      name: 'Classical vs 1…e5',
      moves: ['b3','e5','Bb2','Nc6','e3','Nf6','Bb5','Bd6','Na3'],
      explanations: [
        'b3 — the Larsen.','e5 grabs the centre.','Bb2 pressures e5.','Nc6 defends.','e3 opens the bishop.',
        'Black develops.','Bb5 pins the knight.','Bd6 protects e5.','Na3 heads for c4 to pressure d6/e5.'
      ]
    },
    {
      id: 'larsen-indian',
      name: 'vs Indian Setup',
      moves: ['b3','Nf6','Bb2','g6','g3','Bg7','Bg2','O-O','Nf3','d6'],
      explanations: [
        'b3 — the Larsen.','Black develops.','Bb2 eyes the long diagonal.','g6 prepares a fianchetto.',
        'g3 mirrors.','Bg7 fianchettoes.','Bg2 — double fianchetto battle.','Black castles.','Nf3 develops.',
        'd6 — a flexible, manoeuvring middlegame.'
      ]
    }
  ],

  // ============================================================
  // INTERMEDIATE
  // ============================================================

  'ruy-lopez': [
    {
      id: 'ruy-schliemann',
      name: 'Schliemann Defense (3…f5)',
      moves: ['e4','e5','Nf3','Nc6','Bb5','f5','Nc3','fxe4','Nxe4','d5'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop pins — the Ruy.',
        'f5!? the aggressive Schliemann (Jaenisch), striking at once.','Nc3 keeps it solid.','fxe4 opens the f-file.',
        'Nxe4 recaptures.','d5! Black gains the centre with sharp, double-edged play.'
      ]
    },
    {
      id: 'ruy-birds',
      name: "Bird's Defense (3…Nd4)",
      moves: ['e4','e5','Nf3','Nc6','Bb5','Nd4','Nxd4','exd4','O-O'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop pins.',
        'Nd4!? Bird\'s Defense, trading off the pinned knight\'s attacker.','Nxd4 takes.','exd4 recaptures, gaining the bishop pair chance.',
        'O-O — an offbeat but fully playable Ruy where Black accepts a slight structural concession.'
      ]
    }
  ],

  'ruy-lopez-berlin': [
    {
      id: 'berlin-endgame',
      name: 'Berlin Endgame (Open)',
      moves: ['e4','e5','Nf3','Nc6','Bb5','Nf6','O-O','Nxe4','d4','Nd6','Bxc6','dxc6','dxe5','Nf5','Qxd8+','Kxd8'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop pins — the Ruy.',
        'Nf6 — the Berlin.','White castles.','Nxe4 grabs the pawn.','d4 strikes the centre.','Knight retreats to d6.',
        'White trades on c6.','Black recaptures.','dxe5 wins back the pawn.','Nf5 eyes d4.',
        'Qxd8+ forces the trade.','Kxd8 — the famous Berlin endgame; Black has no castling but a solid structure.'
      ]
    },
    {
      id: 'anti-berlin-d3',
      name: 'Anti-Berlin (4.d3)',
      moves: ['e4','e5','Nf3','Nc6','Bb5','Nf6','d3','Bc5','c3','O-O','O-O','d6'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop pins.',
        'Nf6 — the Berlin.','d3 sidesteps the endgame, keeping pieces on.','Bc5 develops actively.',
        'c3 prepares d4.','Black castles.','White castles.','d6 — a slow Italian-style manoeuvring game.'
      ]
    }
  ],

  'ruy-lopez-closed': [
    {
      id: 'breyer',
      name: 'Breyer Variation',
      moves: ['e4','e5','Nf3','Nc6','Bb5','a6','Ba4','Nf6','O-O','Be7','Re1','b5','Bb3','d6','c3','O-O','h3','Nb8'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop pins.',
        'a6 questions it.','Bishop to a4.','Knight develops.','White castles.','Black develops.','Re1 backs e4.',
        'b5 gains space.','Bishop to b3.','d6 supports e5.','c3 prepares d4.','Black castles.','h3 makes luft.',
        'Nb8! the Breyer — rerouting the knight to d7 for a better build-up.'
      ]
    },
    {
      id: 'zaitsev',
      name: 'Zaitsev Variation',
      moves: ['e4','e5','Nf3','Nc6','Bb5','a6','Ba4','Nf6','O-O','Be7','Re1','b5','Bb3','d6','c3','O-O','h3','Bb7','d4','Re8'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop pins.',
        'a6 questions it.','Bishop to a4.','Knight develops.','White castles.','Black develops.','Re1 backs e4.',
        'b5 gains space.','Bishop to b3.','d6 supports e5.','c3 prepares d4.','Black castles.','h3 makes luft.',
        'Bb7 — the Zaitsev, pressuring e4 on the long diagonal.','d4 strikes.','Re8 — sharp, well-mapped theory.'
      ]
    }
  ],

  'sicilian-najdorf': [
    {
      id: 'najdorf-poisoned-pawn',
      name: 'Poisoned Pawn (6.Bg5)',
      moves: ['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','a6','Bg5','e6','f4','Qb6','Qd2','Qxb2','Rb1','Qa3'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','d6 — flexible.','d4 opens the centre.',
        'Black takes.','White recaptures.','Black develops.','Nc3 defends e4.','a6 — the Najdorf.','Bg5 pins.',
        'e6 solidifies.','f4 grabs space.','Qb6 eyes b2.','Qd2 defends and develops.','Qxb2! grabbing the poisoned pawn.',
        'Rb1 traps nothing — the queen escapes.','Qa3 — wildly sharp, deeply analysed complications.'
      ]
    },
    {
      id: 'najdorf-english-attack',
      name: 'English Attack (6.Be3)',
      moves: ['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','a6','Be3','e5','Nb3','Be6','f3','Be7'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','d6 — flexible.','d4 opens the centre.',
        'Black takes.','White recaptures.','Black develops.','Nc3 defends e4.','a6 — the Najdorf.',
        'Be3 — the English Attack, planning Qd2, O-O-O and g4.','e5 gains space, kicking the knight.',
        'Nb3 retreats.','Be6 develops.','f3 supports g4.','Be7 — opposite-side castling battle ahead.'
      ]
    }
  ],

  'sicilian-dragon': [
    {
      id: 'dragon-yugoslav-9bc4',
      name: 'Yugoslav Attack (9.Bc4)',
      moves: ['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','g6','Be3','Bg7','f3','O-O','Qd2','Nc6','Bc4'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','d6.','d4 opens the centre.','Black takes.',
        'White recaptures.','Black develops.','Nc3 defends e4.','g6 — the Dragon.','Be3 prepares the storm.',
        'Bg7 fianchettoes.','f3 supports g4 and shields e4.','Black castles.','Qd2 connects, eyeing O-O-O.',
        'Nc6 develops.','Bc4 — the sharpest Yugoslav; both kings race to attack.'
      ]
    },
    {
      id: 'dragadorf',
      name: 'Dragadorf (…a6)',
      moves: ['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','g6','Be3','Bg7','f3','a6'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','d6.','d4 opens the centre.','Black takes.',
        'White recaptures.','Black develops.','Nc3 defends e4.','g6 — the Dragon.','Be3 prepares to attack.',
        'Bg7 fianchettoes.','f3 braces.','a6! a Najdorf-Dragon hybrid, preparing ...b5 counterplay.'
      ]
    }
  ],

  'sicilian-scheveningen': [
    {
      id: 'scheveningen-keres',
      name: 'Keres Attack (6.g4)',
      moves: ['e4','c5','Nf3','e6','d4','cxd4','Nxd4','Nf6','Nc3','d6','g4'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','e6 — small centre.','d4 opens the centre.',
        'Black takes.','White recaptures.','Black develops.','Nc3 defends e4.','d6 — the Scheveningen.',
        'g4! the Keres Attack — storming the kingside before castling.'
      ]
    },
    {
      id: 'scheveningen-classical',
      name: 'Classical (6.Be2)',
      moves: ['e4','c5','Nf3','e6','d4','cxd4','Nxd4','Nf6','Nc3','d6','Be2','Be7','O-O','O-O','f4'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','e6.','d4 opens the centre.','Black takes.',
        'White recaptures.','Black develops.','Nc3 defends e4.','d6 — the Scheveningen.','Be2 — solid Classical.',
        'Be7 develops.','White castles.','Black castles.','f4 — White grabs space for a kingside push.'
      ]
    }
  ],

  'sicilian-alapin': [
    {
      id: 'alapin-nf6',
      name: '2…Nf6 Main',
      moves: ['e4','c5','c3','Nf6','e5','Nd5','d4','cxd4','Nf3','Nc6','cxd4','d6'],
      explanations: [
        'White takes the centre.','Black plays c5.','c3 — the Alapin, preparing d4.','Nf6 hits e4.',
        'e5 chases the knight.','Nd5 hops to a good square.','d4 builds the centre.','Black takes.','Nf3 develops.',
        'Nc6 develops.','cxd4 recaptures.','d6 challenges the e5 spearhead — a balanced IQP-style game.'
      ]
    },
    {
      id: 'alapin-barmen',
      name: '2…d5 Barmen',
      moves: ['e4','c5','c3','d5','exd5','Qxd5','d4','Nc6','Nf3','Bg4','Be2','cxd4'],
      explanations: [
        'White takes the centre.','Black plays c5.','c3 — the Alapin.','d5! striking the centre at once.',
        'White takes.','Black recaptures with the queen.','d4 challenges.','Nc6 develops with tempo.','Nf3 develops.',
        'Bg4 pins the knight.','Be2 unpins.','cxd4 — an open, roughly equal middlegame.'
      ]
    }
  ],

  'sicilian-smith-morra': [
    {
      id: 'morra-siberian',
      name: 'Siberian Defense',
      moves: ['e4','c5','d4','cxd4','c3','dxc3','Nxc3','Nc6','Nf3','e6','Bc4','Qc7'],
      explanations: [
        'White takes the centre.','Black plays c5.','d4 — the Morra setup.','Black takes.','c3! the Smith-Morra gambit.',
        'Black grabs the pawn.','Nxc3 recaptures, ahead in development.','Nc6 develops.','Nf3 develops.','e6 solid.',
        'Bc4 targets f7.','Qc7! the Siberian — eyeing ...Nd4 with a deadly ...Qxh2 idea.'
      ]
    },
    {
      id: 'morra-classical-d6',
      name: 'Classical Defense (…d6)',
      moves: ['e4','c5','d4','cxd4','c3','dxc3','Nxc3','d6','Bc4','Nc6','Nf3','e6'],
      explanations: [
        'White takes the centre.','Black plays c5.','d4 — the Morra setup.','Black takes.','c3! the gambit.',
        'Black grabs the pawn.','Nxc3 recaptures.','d6 — a solid accepted setup.','Bc4 targets f7.','Nc6 develops.',
        'Nf3 develops.','e6 — Black aims to consolidate the extra pawn.'
      ]
    }
  ],

  'french-defense': [
    {
      id: 'french-rubinstein',
      name: 'Rubinstein Variation',
      moves: ['e4','e6','d4','d5','Nc3','dxe4','Nxe4','Nd7'],
      explanations: [
        'White takes the centre.','e6 — the French.','d4 builds the centre.','d5 challenges.','Nc3 defends e4.',
        'dxe4! the Rubinstein, trading the cramped pawn.','Nxe4 recaptures.','Nd7 — solid, aiming for ...Ngf6.'
      ]
    },
    {
      id: 'french-fort-knox',
      name: 'Fort Knox',
      moves: ['e4','e6','d4','d5','Nc3','dxe4','Nxe4','Bd7','Nf3','Bc6'],
      explanations: [
        'White takes the centre.','e6 — the French.','d4 builds the centre.','d5 challenges.','Nc3 defends e4.',
        'dxe4 trades.','Nxe4 recaptures.','Bd7 — the Fort Knox setup.','Nf3 develops.',
        'Bc6 — the light-squared bishop reaches an active diagonal; rock-solid for Black.'
      ]
    }
  ],

  'french-winawer': [
    {
      id: 'winawer-armenian',
      name: 'Armenian (…Ne7 & …O-O)',
      moves: ['e4','e6','d4','d5','Nc3','Bb4','e5','Ne7','a3','Bxc3+','bxc3','c5','Qg4','O-O'],
      explanations: [
        'White takes the centre.','e6 — the French.','d4.','d5 challenges.','Nc3 defends e4.',
        'Bb4 — the Winawer pin.','e5 grabs space.','Ne7 heads for f5/g6.','a3 questions the bishop.',
        'Bxc3+ doubles White\'s pawns.','bxc3 recaptures.','c5 strikes the base.','Qg4 attacks g7.',
        'O-O! Black calmly castles into it — a sharp, modern treatment.'
      ]
    },
    {
      id: 'winawer-fingerslip',
      name: 'Fingerslip (4.Bd2)',
      moves: ['e4','e6','d4','d5','Nc3','Bb4','Bd2','dxe4','Qg4','Qxd4','O-O-O'],
      explanations: [
        'White takes the centre.','e6 — the French.','d4.','d5 challenges.','Nc3 defends e4.','Bb4 pins.',
        'Bd2 — the Fingerslip, breaking the pin oddly.','dxe4 grabs a pawn.','Qg4 hits g7.',
        'Qxd4 grabs the centre pawn too.','O-O-O! White castles long with a dangerous lead in development.'
      ]
    }
  ],

  'french-advance': [
    {
      id: 'advance-main-nh6',
      name: 'Main Line with …Nh6',
      moves: ['e4','e6','d4','d5','e5','c5','c3','Nc6','Nf3','Qb6','a3','Nh6'],
      explanations: [
        'White takes the centre.','e6 — the French.','d4.','d5 challenges.','e5 — the Advance, gaining space.',
        'c5 strikes the base.','c3 props up d4.','Nc6 pressures d4.','Nf3 defends.','Qb6 hits b2 and d4.',
        'a3 prepares b4.','Nh6! rerouting to f5 to hammer d4 — a fashionable plan.'
      ]
    },
    {
      id: 'advance-euwe',
      name: 'Euwe (…Bd7 & …Rc8)',
      moves: ['e4','e6','d4','d5','e5','c5','c3','Nc6','Nf3','Bd7','Be2','Rc8'],
      explanations: [
        'White takes the centre.','e6.','d4.','d5 challenges.','e5 — the Advance.','c5 strikes.','c3 props d4.',
        'Nc6 pressures d4.','Nf3 defends.','Bd7 prepares ...Qb6 and queenside play.','Be2 develops.',
        'Rc8 — Black piles on the c-file for a queenside break.'
      ]
    }
  ],

  'french-tarrasch': [
    {
      id: 'tarrasch-closed-nf6',
      name: 'Closed (3…Nf6)',
      moves: ['e4','e6','d4','d5','Nd2','Nf6','e5','Nfd7','Bd3','c5','c3','Nc6','Ne2'],
      explanations: [
        'White takes the centre.','e6 — the French.','d4.','d5 challenges.','Nd2 — the Tarrasch.',
        'Nf6 hits e4.','e5 gains space, chasing the knight.','Nfd7 retreats.','Bd3 eyes the kingside.',
        'c5 strikes the base.','c3 supports d4.','Nc6 pressures d4.','Ne2 holds the centre — a classic French clamp.'
      ]
    },
    {
      id: 'tarrasch-guimard',
      name: 'Guimard (3…Nc6)',
      moves: ['e4','e6','d4','d5','Nd2','Nc6','Ngf3','Nf6','e5','Nd7'],
      explanations: [
        'White takes the centre.','e6.','d4.','d5 challenges.','Nd2 — the Tarrasch.',
        'Nc6!? the Guimard, eyeing ...e5 instead of ...c5.','Ngf3 develops.','Nf6 hits e4.','e5 grabs space.',
        'Nd7 — Black aims for the ...f6 or ...e5 break.'
      ]
    }
  ],

  'caro-kann': [
    {
      id: 'caro-two-knights',
      name: 'Two Knights Attack',
      moves: ['e4','c6','Nc3','d5','Nf3','Bg4','h3','Bxf3','Qxf3'],
      explanations: [
        'White takes the centre.','c6 — the Caro-Kann.','Nc3 develops.','d5 challenges.','Nf3 develops.',
        'Bg4 pins.','h3 questions the bishop.','Bxf3 trades.','Qxf3 — White has the bishop pair and quick play.'
      ]
    },
    {
      id: 'caro-fantasy',
      name: 'Fantasy Variation (3.f3)',
      moves: ['e4','c6','d4','d5','f3','dxe4','fxe4','e5','Nf3','exd4','Bc4'],
      explanations: [
        'White takes the centre.','c6 — the Caro.','d4.','d5 challenges.','f3!? the Fantasy, propping up a big centre.',
        'dxe4 grabs.','fxe4 recaptures.','e5! Black counters in the centre.','Nf3 develops.','exd4 wins a pawn.',
        'Bc4 — White gambits for a fierce attack on f7.'
      ]
    }
  ],

  'caro-kann-advance': [
    {
      id: 'caro-advance-bayonet',
      name: 'Bayonet Attack (4.g4)',
      moves: ['e4','c6','d4','d5','e5','Bf5','g4','Be4','f3','Bg6','h4'],
      explanations: [
        'White takes the centre.','c6 — the Caro.','d4.','d5 challenges.','e5 — the Advance.','Bf5 develops the bishop.',
        'g4! the Bayonet, lunging at the bishop.','Be4 sidesteps.','f3 traps it on the diagonal.','Bg6 retreats.',
        'h4! storming the kingside to win the bishop or open lines.'
      ]
    },
    {
      id: 'caro-advance-vanderwiel',
      name: 'Van der Wiel (4.Nc3)',
      moves: ['e4','c6','d4','d5','e5','Bf5','Nc3','e6','g4','Bg6','Nge2','c5'],
      explanations: [
        'White takes the centre.','c6.','d4.','d5 challenges.','e5 — the Advance.','Bf5 develops.',
        'Nc3 develops, eyeing g4.','e6 supports d5.','g4 gains space and hits the bishop.','Bg6 retreats.',
        'Nge2 reroutes to f4/g3.','c5! Black counters on the queenside.'
      ]
    }
  ],

  'pirc-defense': [
    {
      id: 'pirc-czech',
      name: 'Czech System (…c6)',
      moves: ['e4','d6','d4','Nf6','Nc3','c6','f4','Qa5'],
      explanations: [
        'White takes the centre.','d6.','d4 builds a big centre.','Nf6 hits e4.','Nc3 defends.',
        'c6! the Czech setup, flexible and solid.','f4 grabs more space.','Qa5 pins the knight, eyeing ...Nxe4.'
      ]
    },
    {
      id: 'pirc-austrian-bd3',
      name: 'Austrian — 6.Bd3',
      moves: ['e4','d6','d4','Nf6','Nc3','g6','f4','Bg7','Nf3','O-O','Bd3','Na6'],
      explanations: [
        'White takes the centre.','d6.','d4.','Nf6 hits e4.','Nc3 defends.','g6 — the Pirc fianchetto.',
        'f4 — the Austrian Attack.','Bg7 fianchettoes.','Nf3 develops.','Black castles.','Bd3 eyes the kingside.',
        'Na6 — heading to c7/c5 to pressure White\'s big centre.'
      ]
    }
  ],

  'modern-defense': [
    {
      id: 'modern-pseudo-austrian',
      name: 'Pseudo-Austrian (f4)',
      moves: ['e4','g6','d4','Bg7','Nc3','d6','f4','Nf6','Nf3','O-O'],
      explanations: [
        'White takes the centre.','g6 — the Modern.','d4 builds the centre.','Bg7 fianchettoes.','Nc3 develops.',
        'd6 keeps it flexible.','f4 grabs big space — the pseudo-Austrian.','Nf6 hits e4.','Nf3 defends.',
        'O-O — Black castles and waits to counter the broad centre.'
      ]
    },
    {
      id: 'modern-gurgenidze',
      name: 'Gurgenidze System',
      moves: ['e4','g6','d4','Bg7','Nc3','c6','f4','d5'],
      explanations: [
        'White takes the centre.','g6 — the Modern.','d4.','Bg7 fianchettoes.','Nc3 develops.',
        'c6! the Gurgenidze, preparing ...d5.','f4 grabs space.','d5! striking the centre, blunting White\'s pawns.'
      ]
    }
  ],

  'alekhines-defense': [
    {
      id: 'alekhine-modern-main',
      name: 'Modern Main Line (4…Bg4)',
      moves: ['e4','Nf6','e5','Nd5','d4','d6','Nf3','Bg4','Be2','e6','O-O','Be7'],
      explanations: [
        'White takes the centre.','Nf6! the Alekhine, provoking the pawns forward.','e5 chases the knight.',
        'Nd5 hops in.','d4 builds the centre.','d6 challenges e5.','Nf3 develops.','Bg4 pins the knight.',
        'Be2 supports.','e6 solidifies.','O-O castles.','Be7 — Black undermines the big centre piece by piece.'
      ]
    },
    {
      id: 'alekhine-fianchetto',
      name: 'Modern — …g6 Fianchetto',
      moves: ['e4','Nf6','e5','Nd5','d4','d6','Nf3','g6','Bc4','Nb6','Bb3','Bg7'],
      explanations: [
        'White takes the centre.','Nf6 — the Alekhine.','e5 chases.','Nd5 hops in.','d4 builds.',
        'd6 challenges e5.','Nf3 develops.','g6 prepares a fianchetto.','Bc4 hits the knight.','Nb6 retreats.',
        'Bb3 keeps the bishop.','Bg7 — Black eyes the long diagonal against the centre.'
      ]
    }
  ],

  'petroff-defense': [
    {
      id: 'petroff-classical-main',
      name: 'Classical Main (5.d4)',
      moves: ['e4','e5','Nf3','Nf6','Nxe5','d6','Nf3','Nxe4','d4','d5','Bd3','Nc6'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Nf6! the Petroff, copying.','Nxe5 grabs.',
        'd6 kicks the knight.','Nf3 retreats.','Nxe4 restores material.','d4 builds the centre.','d5 supports e4.',
        'Bd3 develops, eyeing e4.','Nc6 develops — a symmetrical, solid middlegame.'
      ]
    },
    {
      id: 'petroff-cozio',
      name: 'Cozio (5.Qe2)',
      moves: ['e4','e5','Nf3','Nf6','Nxe5','d6','Nf3','Nxe4','Qe2'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Nf6 — the Petroff.','Nxe5 grabs.',
        'd6 kicks.','Nf3 retreats.','Nxe4 restores material.','Qe2! the Cozio, pinning and threatening to trade into a pull.'
      ]
    }
  ],

  'two-knights': [
    {
      id: 'twokn-fritz',
      name: 'Fritz Variation',
      moves: ['e4','e5','Nf3','Nc6','Bc4','Nf6','Ng5','d5','exd5','Nd4'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop eyes f7.',
        'Nf6 — the Two Knights.','Ng5 lunges at f7.','d5 strikes back.','White takes.',
        'Nd4!? the sharp Fritz, ignoring the pawn for piece activity.'
      ]
    },
    {
      id: 'twokn-ulvestad',
      name: 'Ulvestad Variation',
      moves: ['e4','e5','Nf3','Nc6','Bc4','Nf6','Ng5','d5','exd5','b5'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop eyes f7.',
        'Nf6 — the Two Knights.','Ng5 lunges.','d5 strikes back.','White takes.',
        'b5!? the Ulvestad, hitting the bishop to free the d5 knight with tempo.'
      ]
    }
  ],

  'queens-gambit': [
    {
      id: 'qg-albin',
      name: 'Albin Counter-Gambit',
      moves: ['d4','d5','c4','e5','dxe5','d4','Nf3','Nc6','g3','Nge7'],
      explanations: [
        'White takes the centre.','Black mirrors.','c4 — the Queen\'s Gambit.','e5!? the Albin Counter-Gambit.',
        'White grabs the pawn.','d4! a cramping advanced pawn.','Nf3 develops.','Nc6 supports d4.',
        'g3 prepares to fianchetto and pressure d4.','Nge7 defends the spearhead — sharp, tricky play.'
      ]
    },
    {
      id: 'qg-chigorin',
      name: 'Chigorin Defense',
      moves: ['d4','d5','c4','Nc6','Nf3','Bg4','cxd5','Bxf3','gxf3','Qxd5'],
      explanations: [
        'White takes the centre.','Black mirrors.','c4 — the Queen\'s Gambit.','Nc6!? the Chigorin, piece play over pawns.',
        'Nf3 develops.','Bg4 pins.','cxd5 opens the centre.','Bxf3 trades.','gxf3 recaptures, wrecking pawns.',
        'Qxd5 regains the pawn — Black gets active pieces against White\'s bishop pair.'
      ]
    }
  ],

  'slav-defense': [
    {
      id: 'slav-schlechter',
      name: 'Schlechter Variation',
      moves: ['d4','d5','c4','c6','Nf3','Nf6','Nc3','g6'],
      explanations: [
        'White takes the centre.','Black mirrors.','c4 — the Queen\'s Gambit.','c6 — the Slav.','Nf3 develops.',
        'Nf6 develops.','Nc3 develops.','g6! the Schlechter, fianchettoing for a Grünfeld-like setup.'
      ]
    },
    {
      id: 'slav-winawer-cg',
      name: 'Winawer Counter-Gambit',
      moves: ['d4','d5','c4','c6','Nc3','e5'],
      explanations: [
        'White takes the centre.','Black mirrors.','c4 — the Queen\'s Gambit.','c6 — the Slav.','Nc3 develops.',
        'e5!? the Winawer Counter-Gambit — a sharp, surprising central strike.'
      ]
    }
  ],

  'semi-slav': [
    {
      id: 'semi-slav-anti-moscow',
      name: 'Anti-Moscow Gambit',
      moves: ['d4','d5','c4','c6','Nf3','Nf6','Nc3','e6','Bg5','h6','Bh4','dxc4'],
      explanations: [
        'White takes the centre.','Black mirrors.','c4.','c6 — Semi-Slav roots.','Nf3 develops.','Nf6 develops.',
        'Nc3 develops.','e6 — the Semi-Slav.','Bg5 pins.','h6 questions the bishop.','Bh4 keeps the pin.',
        'dxc4! the Anti-Moscow Gambit — grabbing a pawn for wild complications.'
      ]
    },
    {
      id: 'semi-slav-shabalov',
      name: 'Shabalov-Shirov (g4)',
      moves: ['d4','d5','c4','c6','Nf3','Nf6','Nc3','e6','e3','Nbd7','Qc2','Bd6','g4'],
      explanations: [
        'White takes the centre.','Black mirrors.','c4.','c6.','Nf3 develops.','Nf6 develops.','Nc3 develops.',
        'e6 — the Semi-Slav.','e3 keeps it solid.','Nbd7 develops.','Qc2 eyes the centre.','Bd6 develops.',
        'g4! the Shabalov-Shirov gambit — a violent kingside pawn storm.'
      ]
    }
  ],

  'trompowsky-attack': [
    {
      id: 'tromp-vs-c5',
      name: 'vs 2…c5 (Vaganian Gambit)',
      moves: ['d4','Nf6','Bg5','c5','d5','Qb6','Nc3','Qxb2','Bd2','Qb6'],
      explanations: [
        'White takes the centre.','Black develops.','Bg5 — the Trompowsky.','c5 strikes the centre.',
        'd5 gains space.','Qb6 hits b2 and d4.','Nc3! the Vaganian Gambit, offering b2.','Qxb2 grabs the pawn.',
        'Bd2 traps nothing — but builds a big lead in development.','Qb6 retreats with the king still in the centre.'
      ]
    },
    {
      id: 'tromp-vs-e6',
      name: 'vs 2…e6 (3.e4)',
      moves: ['d4','Nf6','Bg5','e6','e4','h6','Bxf6','Qxf6','Nc3'],
      explanations: [
        'White takes the centre.','Black develops.','Bg5 — the Trompowsky.','e6 prepares to challenge.',
        'e4! grabbing the full centre.','h6 questions the bishop.','Bxf6 trades off.','Qxf6 recaptures.',
        'Nc3 — White has a big pawn centre against the bishop pair.'
      ]
    }
  ],

  'colle-system': [
    {
      id: 'colle-e4-break',
      name: 'The e4 Break',
      moves: ['d4','d5','Nf3','Nf6','e3','e6','Bd3','c5','c3','Nc6','Nbd2','Bd6','O-O','O-O','dxc5','Bxc5','e4'],
      explanations: [
        'White takes the centre.','Black mirrors.','Nf3 develops.','Nf6 develops.','e3 — the Colle.','e6.',
        'Bd3 aims at h7.','c5 strikes.','c3 props d4.','Nc6 develops.','Nbd2 prepares e4.','Bd6 develops.',
        'O-O castles.','Black castles.','dxc5 opens lines.','Bxc5 recaptures.','e4! the thematic central break, freeing White\'s pieces.'
      ]
    },
    {
      id: 'colle-vs-fianchetto',
      name: 'vs King\'s Indian Setup',
      moves: ['d4','Nf6','Nf3','g6','e3','Bg7','Bd3','O-O','O-O','d6','c3','Nbd7'],
      explanations: [
        'White takes the centre.','Black develops.','Nf3 develops.','g6 prepares a fianchetto.','e3 — the Colle.',
        'Bg7 fianchettoes.','Bd3 develops.','Black castles.','White castles.','d6 keeps it flexible.',
        'c3 supports d4.','Nbd7 — a quiet, solid manoeuvring battle.'
      ]
    }
  ],

  'dutch-defense': [
    {
      id: 'dutch-ilyin-zhenevsky',
      name: 'Ilyin-Zhenevsky System',
      moves: ['d4','f5','g3','Nf6','Bg2','e6','Nf3','Be7','O-O','O-O','c4','d6','Nc3','Qe8'],
      explanations: [
        'White takes the centre.','f5 — the Dutch.','g3 fianchettoes.','Nf6 develops.','Bg2 develops.','e6 solid.',
        'Nf3 develops.','Be7 develops.','White castles.','Black castles.','c4 grabs space.','d6 prepares ...e5.',
        'Nc3 develops.','Qe8! the Ilyin-Zhenevsky regrouping, heading to h5/g6 for a kingside attack.'
      ]
    }
  ],

  'benoni-defense': [
    {
      id: 'benoni-taimanov',
      name: 'Taimanov Attack',
      moves: ['d4','Nf6','c4','c5','d5','e6','Nc3','exd5','cxd5','d6','e4','g6','f4'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','c5 — the Benoni.','d5 advances.',
        'e6 challenges the chain.','Nc3 develops.','exd5 opens the e-file.','cxd5 recaptures.','d6 sets the structure.',
        'e4 builds a big centre.','g6 fianchettoes.','f4! the Taimanov, the most testing kingside push.'
      ]
    },
    {
      id: 'benoni-fianchetto',
      name: 'Fianchetto Variation',
      moves: ['d4','Nf6','c4','c5','d5','e6','Nc3','exd5','cxd5','d6','Nf3','g6','g3','Bg7','Bg2'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','c5 — the Benoni.','d5 advances.',
        'e6 challenges.','Nc3 develops.','exd5 opens lines.','cxd5 recaptures.','d6 sets the structure.','Nf3 develops.',
        'g6 fianchettoes.','g3 mirrors.','Bg7 fianchettoes.','Bg2 — a calm, positional treatment against the Benoni.'
      ]
    }
  ],

  'budapest-gambit': [
    {
      id: 'budapest-rubinstein',
      name: 'Rubinstein (Adler) Main',
      moves: ['d4','Nf6','c4','e5','dxe5','Ng4','Bf4','Nc6','Nf3','Bb4+','Nbd2'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','e5!? the Budapest Gambit.','dxe5 accepts.',
        'Ng4 chases the pawn.','Bf4 defends e5.','Nc6 piles on e5.','Nf3 develops.','Bb4+ checks.',
        'Nbd2 blocks — White keeps the extra pawn but Black has active pieces.'
      ]
    },
    {
      id: 'budapest-alekhine',
      name: 'Alekhine Variation (4.e4)',
      moves: ['d4','Nf6','c4','e5','dxe5','Ng4','e4'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','e5!? the Budapest Gambit.','dxe5 accepts.',
        'Ng4 chases the pawn.','e4! the Alekhine — building a huge centre and daring Black to regain the pawn.'
      ]
    }
  ],

  'benko-gambit': [
    {
      id: 'benko-fully-accepted',
      name: 'Fully Accepted Main',
      moves: ['d4','Nf6','c4','c5','d5','b5','cxb5','a6','bxa6','Bxa6','Nc3','d6','e4','Bxf1','Kxf1','g6'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','c5 hits d4.','d5 advances.','b5! the Benko Gambit.',
        'cxb5 accepts.','a6 challenges back.','bxa6 grabs a second pawn.','Bxa6 recaptures, eyeing f1.','Nc3 develops.',
        'd6 sets the structure.','e4 builds the centre.','Bxf1 trades off.','Kxf1 recaptures (losing castling).',
        'g6 — Black has long-term queenside pressure for the pawn.'
      ]
    },
    {
      id: 'benko-zaitsev',
      name: 'Zaitsev System (5.Nc3)',
      moves: ['d4','Nf6','c4','c5','d5','b5','cxb5','a6','Nc3','axb5','Nxb5'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','c5 hits d4.','d5 advances.','b5! the Benko.',
        'cxb5 accepts.','a6 challenges.','Nc3!? the Zaitsev, declining to grab a6 and developing instead.',
        'axb5 recaptures.','Nxb5 — White keeps the structure intact with a small pull.'
      ]
    }
  ],

  'english-opening': [
    {
      id: 'english-four-knights',
      name: 'Four Knights (g3)',
      moves: ['c4','e5','Nc3','Nf6','Nf3','Nc6','g3','d5','cxd5','Nxd5'],
      explanations: [
        'c4 — the English.','e5 — a Reversed Sicilian setup.','Nc3 develops.','Nf6 develops.','Nf3 develops.',
        'Nc6 develops.','g3 prepares a fianchetto.','d5! striking the centre.','cxd5 opens lines.',
        'Nxd5 recaptures — a balanced, classical English middlegame.'
      ]
    },
    {
      id: 'english-hedgehog',
      name: 'Hedgehog System',
      moves: ['c4','c5','Nf3','Nf6','Nc3','e6','g3','b6','Bg2','Bb7','O-O','Be7'],
      explanations: [
        'c4 — the English.','c5 — Symmetrical.','Nf3 develops.','Nf6 develops.','Nc3 develops.','e6 flexible.',
        'g3 fianchettoes.','b6 prepares ...Bb7.','Bg2 develops.','Bb7 fianchettoes.','White castles.',
        'Be7 — the Hedgehog: a compact, springy setup waiting to uncoil with ...b5 or ...d5.'
      ]
    }
  ],

  'reti-opening': [
    {
      id: 'reti-new-york',
      name: 'New York System (b3)',
      moves: ['Nf3','d5','c4','c6','b3','Nf6','g3','Bf5','Bg2','e6','O-O','Nbd7'],
      explanations: [
        'Nf3 — the Réti.','d5 takes the centre.','c4 challenges.','c6 defends — a Slav-like setup.','b3 prepares a double fianchetto.',
        'Nf6 develops.','g3 fianchettoes.','Bf5 develops the bishop outside the chain.','Bg2 develops.','e6 solid.',
        'O-O castles.','Nbd7 — a flexible, hypermodern manoeuvring game.'
      ]
    },
    {
      id: 'reti-advance',
      name: 'vs 2…d4 Advance',
      moves: ['Nf3','d5','c4','d4','g3','Nc6','Bg2','e5','d3','Nf6','O-O','Be7'],
      explanations: [
        'Nf3 — the Réti.','d5 takes the centre.','c4 challenges.','d4!? Black advances, grabbing space.','g3 fianchettoes.',
        'Nc6 supports d4.','Bg2 pressures the long diagonal.','e5 builds a broad centre.','d3 restrains it.',
        'Nf6 develops.','O-O castles.','Be7 — White plays against the over-extended pawns.'
      ]
    }
  ],

  'catalan-opening': [
    {
      id: 'catalan-closed-tabiya',
      name: 'Closed Main Tabiya',
      moves: ['d4','Nf6','c4','e6','g3','d5','Bg2','Be7','Nf3','O-O','O-O','c6','Qc2','Nbd7','Nbd2','b6'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','e6 — heading for the Catalan.','g3 fianchettoes.',
        'd5 challenges c4.','Bg2 — the Catalan bishop eyes the long diagonal.','Be7 develops.','Nf3 develops.','Black castles.',
        'O-O castles.','c6 supports d5 — the Closed Catalan.','Qc2 eyes the d5/e4 squares.','Nbd7 develops.',
        'Nbd2 reroutes.','b6 — Black frees the light-squared bishop in a deep positional struggle.'
      ]
    }
  ],

  // ============================================================
  // ADVANCED
  // ============================================================

  'kings-indian-defense': [
    {
      id: 'kid-bayonet',
      name: 'Bayonet Attack (9.b4)',
      moves: ['d4','Nf6','c4','g6','Nc3','Bg7','e4','d6','Nf3','O-O','Be2','e5','O-O','Nc6','d5','Ne7','b4'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','g6 prepares a fianchetto.','Nc3 develops.',
        'Bg7 fianchettoes.','e4 builds a big centre.','d6 — the King\'s Indian.','Nf3 develops.','Black castles.',
        'Be2 develops.','e5 strikes the centre.','White castles.','Nc6 pressures d4.','d5 closes the centre, gaining space.',
        'Ne7 heads for the kingside.','b4! the Bayonet — White races on the queenside while Black storms the king.'
      ]
    },
    {
      id: 'kid-makagonov',
      name: 'Makagonov (5.h3)',
      moves: ['d4','Nf6','c4','g6','Nc3','Bg7','e4','d6','h3','O-O','Bd3','e5','d5'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','g6 prepares a fianchetto.','Nc3 develops.',
        'Bg7 fianchettoes.','e4 builds a centre.','d6 — the King\'s Indian.','h3! the Makagonov, restraining ...Ng4 and ...Bg4.',
        'Black castles.','Bd3 develops.','e5 strikes.','d5 — White gains space with a flexible, modern setup.'
      ]
    }
  ],

  'kid-samisch': [
    {
      id: 'samisch-bg5',
      name: 'Sämisch with Bg5',
      moves: ['d4','Nf6','c4','g6','Nc3','Bg7','e4','d6','f3','O-O','Bg5','c5'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','g6 fianchetto.','Nc3 develops.','Bg7 fianchettoes.',
        'e4 big centre.','d6 — King\'s Indian.','f3 — the Sämisch, bracing e4.','Black castles.',
        'Bg5 pins and provokes weaknesses.','c5! Black hits the centre — a sharp Benoni-style fight.'
      ]
    },
    {
      id: 'samisch-orthodox-e5',
      name: 'Orthodox …e5',
      moves: ['d4','Nf6','c4','g6','Nc3','Bg7','e4','d6','f3','O-O','Be3','e5','d5','Nh5'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','g6 fianchetto.','Nc3 develops.','Bg7 fianchettoes.',
        'e4 big centre.','d6 — King\'s Indian.','f3 — the Sämisch.','Black castles.','Be3 develops.','e5 strikes.',
        'd5 closes the centre.','Nh5! heading for f4, the thematic KID kingside plan.'
      ]
    }
  ],

  'kid-four-pawns': [
    {
      id: 'fourpawns-classical-c5',
      name: 'Classical …c5',
      moves: ['d4','Nf6','c4','g6','Nc3','Bg7','e4','d6','f4','O-O','Nf3','c5','d5','e6'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','g6 fianchetto.','Nc3 develops.','Bg7 fianchettoes.',
        'e4 huge centre.','d6 — King\'s Indian.','f4 — the Four Pawns Attack.','Black castles.','Nf3 develops.',
        'c5! striking the broad centre.','d5 advances.','e6 — Black challenges the pawn wall at its base.'
      ]
    },
    {
      id: 'fourpawns-na6',
      name: 'Modern …Na6',
      moves: ['d4','Nf6','c4','g6','Nc3','Bg7','e4','d6','f4','O-O','Nf3','Na6'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','g6 fianchetto.','Nc3 develops.','Bg7 fianchettoes.',
        'e4 huge centre.','d6 — King\'s Indian.','f4 — the Four Pawns.','Black castles.','Nf3 develops.',
        'Na6! a flexible modern square, eyeing ...c5 and ...e5 breaks.'
      ]
    }
  ],

  'grunfeld-defense': [
    {
      id: 'grunfeld-modern-exchange',
      name: 'Modern Exchange (Be3)',
      moves: ['d4','Nf6','c4','g6','Nc3','d5','cxd5','Nxd5','e4','Nxc3','bxc3','Bg7','Be3','c5','Qd2'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','g6 fianchetto.','Nc3 develops.',
        'd5! the Grünfeld, striking the centre.','cxd5 takes.','Nxd5 recaptures.','e4 kicks the knight, building a centre.',
        'Nxc3 trades.','bxc3 builds a big pawn centre.','Bg7 eyes it on the long diagonal.','Be3 supports d4.',
        'c5! Black attacks the base.','Qd2 — the modern Exchange, a critical main line.'
      ]
    },
    {
      id: 'grunfeld-prins',
      name: 'Prins Variation (…Bg4)',
      moves: ['d4','Nf6','c4','g6','Nc3','d5','cxd5','Nxd5','e4','Nxc3','bxc3','Bg7','Bc4','c5','Ne2','cxd4','cxd4','Bg4'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','g6 fianchetto.','Nc3 develops.','d5! the Grünfeld.',
        'cxd5 takes.','Nxd5 recaptures.','e4 kicks the knight.','Nxc3 trades.','bxc3 builds a centre.','Bg7 eyes it.',
        'Bc4 develops actively.','c5 hits d4.','Ne2 supports.','cxd4 opens lines.','cxd4 recaptures.',
        'Bg4! the Prins — pinning to pile pressure on the d4 centre.'
      ]
    }
  ],

  'nimzo-indian': [
    {
      id: 'nimzo-huebner',
      name: 'Hübner Variation',
      moves: ['d4','Nf6','c4','e6','Nc3','Bb4','e3','c5','Bd3','Nc6','Nf3','Bxc3+','bxc3','d6'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','e6 flexible.','Nc3 develops.',
        'Bb4 — the Nimzo pin.','e3 — the Rubinstein.','c5 hits d4.','Bd3 develops.','Nc6 develops.','Nf3 develops.',
        'Bxc3+ doubles the c-pawns.','bxc3 recaptures.','d6! the Hübner — clamping the position to play against the weak pawns.'
      ]
    },
    {
      id: 'nimzo-fischer',
      name: 'Fischer Variation (…b6, …Ne4)',
      moves: ['d4','Nf6','c4','e6','Nc3','Bb4','e3','b6','Bd3','Bb7','Nf3','Ne4'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','e6 flexible.','Nc3 develops.','Bb4 pins.',
        'e3 — the Rubinstein.','b6 prepares a fianchetto.','Bd3 develops.','Bb7 fianchettoes, eyeing e4.','Nf3 develops.',
        'Ne4! the Fischer — planting the knight to fight for the centre and key light squares.'
      ]
    }
  ],

  'queens-indian': [
    {
      id: 'qid-fianchetto-main',
      name: 'Fianchetto Main (…Ba6)',
      moves: ['d4','Nf6','c4','e6','Nf3','b6','g3','Ba6','Qc2','Bb7','Bg2','c5','d5','exd5','cxd5','Nxd5'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','e6 flexible.','Nf3 develops.','b6 — the Queen\'s Indian.',
        'g3 fianchettoes.','Ba6! pressuring c4.','Qc2 defends c4.','Bb7 redeploys to the long diagonal.','Bg2 develops.',
        'c5 strikes.','d5 advances.','exd5 opens lines.','cxd5 recaptures.','Nxd5 — a sharp, well-mapped central battle.'
      ]
    }
  ],

  'sicilian-sveshnikov': [
    {
      id: 'sveshnikov-positional-nd5',
      name: 'Positional 9.Nd5',
      moves: ['e4','c5','Nf3','Nc6','d4','cxd4','Nxd4','Nf6','Nc3','e5','Ndb5','d6','Nd5'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','Knight develops.','d4 opens the centre.','Black takes.',
        'White recaptures.','Black develops.','Nc3 defends e4.','e5! the Sveshnikov, kicking the knight.','Ndb5 eyes d6.',
        'd6 plugs the hole.','Nd5! the positional choice — trading into a structure with the better minor pieces.'
      ]
    },
    {
      id: 'sveshnikov-bg5-main',
      name: 'Main Line (Bg5, a6)',
      moves: ['e4','c5','Nf3','Nc6','d4','cxd4','Nxd4','Nf6','Nc3','e5','Ndb5','d6','Bg5','a6','Na3','b5'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','Knight develops.','d4 opens the centre.','Black takes.',
        'White recaptures.','Black develops.','Nc3 defends e4.','e5! the Sveshnikov.','Ndb5 eyes d6.','d6 plugs the hole.',
        'Bg5 pins and pressures d5.','a6 kicks the knight.','Na3 retreats to the rim.','b5! Black grabs space — the main tabiya.'
      ]
    }
  ],

  'sicilian-poisoned-pawn': [
    {
      id: 'pp-main-e5',
      name: 'Main Line 10.e5',
      moves: ['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','a6','Bg5','e6','f4','Qb6','Qd2','Qxb2','Rb1','Qa3','e5','dxe5','fxe5','Nfd7'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','d6.','d4 opens the centre.','Black takes.',
        'White recaptures.','Black develops.','Nc3 defends e4.','a6 — the Najdorf.','Bg5 pins.','e6 solid.','f4 grabs space.',
        'Qb6 eyes b2.','Qd2 defends.','Qxb2! the poisoned pawn.','Rb1 attacks the queen.','Qa3 escapes.',
        'e5! the critical thrust.','dxe5 opens the centre.','fxe5 recaptures.','Nfd7 — razor-sharp, deeply analysed chaos.'
      ]
    },
    {
      id: 'pp-declined-be7',
      name: 'Declined (7…Be7)',
      moves: ['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','a6','Bg5','e6','f4','Be7'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','d6.','d4 opens the centre.','Black takes.',
        'White recaptures.','Black develops.','Nc3 defends e4.','a6 — the Najdorf.','Bg5 pins.','e6 solid.','f4 grabs space.',
        'Be7! declining the b2 pawn for a safe, well-tested setup.'
      ]
    }
  ],

  'sicilian-richter-rauzer': [
    {
      id: 'rauzer-main-ooo',
      name: 'Main Line (…a6, O-O-O)',
      moves: ['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','Nc6','Bg5','e6','Qd2','a6','O-O-O','Bd7'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','d6.','d4 opens the centre.','Black takes.',
        'White recaptures.','Black develops.','Nc3 defends e4.','Nc6 develops.','Bg5 — the Richter-Rauzer pin.','e6 solid.',
        'Qd2 prepares to castle long.','a6 prepares queenside play.','O-O-O! opposite-side intentions.','Bd7 develops — the main battleground.'
      ]
    },
    {
      id: 'rauzer-be7',
      name: 'Classical (…Be7)',
      moves: ['e4','c5','Nf3','d6','d4','cxd4','Nxd4','Nf6','Nc3','Nc6','Bg5','e6','Qd2','Be7','O-O-O','O-O'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','d6.','d4 opens the centre.','Black takes.',
        'White recaptures.','Black develops.','Nc3 defends e4.','Nc6 develops.','Bg5 pins.','e6 solid.','Qd2 prepares O-O-O.',
        'Be7 develops solidly.','O-O-O castles long.','O-O — Black castles short into a sharp race.'
      ]
    }
  ],

  'sicilian-accelerated-dragon': [
    {
      id: 'accel-maroczy-nxd4',
      name: 'Maróczy Bind (…Nxd4)',
      moves: ['e4','c5','Nf3','Nc6','d4','cxd4','Nxd4','g6','c4','Nf6','Nc3','d6','Be2','Nxd4','Qxd4','Bg7'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','Knight develops.','d4 opens the centre.','Black takes.',
        'White recaptures.','g6 — the Accelerated Dragon.','c4! the Maróczy Bind, clamping d5.','Nf6 develops.','Nc3 develops.',
        'd6 solid.','Be2 develops.','Nxd4 trades to ease the cramp.','Qxd4 recaptures.','Bg7 — Black aims for ...Be6 and ...a5 counterplay.'
      ]
    },
    {
      id: 'accel-classical-bc4',
      name: 'Classical (Bc4)',
      moves: ['e4','c5','Nf3','Nc6','d4','cxd4','Nxd4','g6','Nc3','Bg7','Be3','Nf6','Bc4','O-O','Bb3','d6'],
      explanations: [
        'White takes the centre.','Black plays c5.','Knight develops.','Knight develops.','d4 opens the centre.','Black takes.',
        'White recaptures.','g6 — the Accelerated Dragon.','Nc3 develops.','Bg7 fianchettoes.','Be3 develops.','Nf6 develops.',
        'Bc4 targets f7.','Black castles.','Bb3 keeps the bishop.','d6 — a sharp Dragon-style middlegame.'
      ]
    }
  ],

  'ruy-lopez-marshall': [
    {
      id: 'marshall-main-qh3',
      name: 'Main Line (…Qh3)',
      moves: ['e4','e5','Nf3','Nc6','Bb5','a6','Ba4','Nf6','O-O','Be7','Re1','b5','Bb3','O-O','c3','d5','exd5','Nxd5','Nxe5','Nxe5','Rxe5','c6','d4','Bd6','Re1','Qh4','g3','Qh3'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop pins.','a6 questions it.',
        'Bishop to a4.','Knight develops.','White castles.','Black develops.','Re1 backs e4.','b5 gains space.','Bishop to b3.',
        'Black castles.','c3 prepares d4.','d5! the Marshall Attack.','White takes.','Nxd5 recaptures.','Nxe5 grabs the pawn.',
        'Nxe5 trades.','Rxe5 recaptures.','c6 supports d5.','d4 frees the position.','Bd6 eyes the kingside.','Re1 retreats.',
        'Qh4 swings over.','g3 blocks.','Qh3! — Black has a textbook attack for the pawn.'
      ]
    },
    {
      id: 'anti-marshall-h3',
      name: 'Anti-Marshall (8.h3)',
      moves: ['e4','e5','Nf3','Nc6','Bb5','a6','Ba4','Nf6','O-O','Be7','Re1','b5','Bb3','O-O','h3','d6','c3','Re8'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Bishop pins.','a6 questions it.',
        'Bishop to a4.','Knight develops.','White castles.','Black develops.','Re1 backs e4.','b5 gains space.','Bishop to b3.',
        'Black castles.','h3! sidestepping the Marshall before allowing ...d5.','d6 stays solid.','c3 prepares d4.',
        'Re8 — a quieter Closed Ruy where White avoids the gambit.'
      ]
    }
  ],

  'semi-slav-meran': [
    {
      id: 'meran-main-a6',
      name: 'Meran Main (…b5, …a6)',
      moves: ['d4','d5','c4','c6','Nf3','Nf6','Nc3','e6','e3','Nbd7','Bd3','dxc4','Bxc4','b5','Bd3','a6'],
      explanations: [
        'White takes the centre.','Black mirrors.','c4.','c6.','Nf3 develops.','Nf6 develops.','Nc3 develops.','e6 — Semi-Slav.',
        'e3 solid.','Nbd7 develops.','Bd3 develops.','dxc4 grabs the pawn with tempo.','Bxc4 recaptures.','b5! the Meran, gaining space.',
        'Bd3 retreats.','a6 prepares ...c5 — Black gets active queenside play.'
      ]
    },
    {
      id: 'meran-reynolds',
      name: 'Reynolds Attack',
      moves: ['d4','d5','c4','c6','Nf3','Nf6','Nc3','e6','e3','Nbd7','Bd3','dxc4','Bxc4','b5','Bd3','a6','e4','c5','e5'],
      explanations: [
        'White takes the centre.','Black mirrors.','c4.','c6.','Nf3 develops.','Nf6 develops.','Nc3 develops.','e6 — Semi-Slav.',
        'e3 solid.','Nbd7 develops.','Bd3 develops.','dxc4 grabs with tempo.','Bxc4 recaptures.','b5 — the Meran.','Bd3 retreats.',
        'a6 prepares ...c5.','e4! the Reynolds, blasting the centre open.','c5 strikes back.','e5 — wild, forcing complications.'
      ]
    }
  ],

  'catalan-open': [
    {
      id: 'catalan-open-a6',
      name: 'Open …a6 (holding c4)',
      moves: ['d4','Nf6','c4','e6','g3','d5','Bg2','dxc4','Nf3','a6','O-O','Nc6'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','e6 — heading for the Catalan.','g3 fianchettoes.',
        'd5 challenges.','Bg2 — the Catalan bishop.','dxc4 grabs the pawn.','Nf3 develops.','a6! trying to cling to the pawn with ...b5.',
        'O-O castles, content to play for the initiative.','Nc6 — a sharp battle over the c4 pawn.'
      ]
    },
    {
      id: 'catalan-open-bb4',
      name: 'Open with …Bb4+',
      moves: ['d4','Nf6','c4','e6','g3','d5','Bg2','dxc4','Nf3','Bb4+','Bd2','a5'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','e6 — Catalan.','g3 fianchettoes.','d5 challenges.',
        'Bg2 — the Catalan bishop.','dxc4 grabs the pawn.','Nf3 develops.','Bb4+ checks to hold the pawn.','Bd2 blocks.',
        'a5 props up the bishop and the extra pawn — a tough nut White must crack with the initiative.'
      ]
    }
  ],

  'bogo-indian': [
    {
      id: 'bogo-bd2-qe7',
      name: 'Bd2 Main (…Qe7)',
      moves: ['d4','Nf6','c4','e6','Nf3','Bb4+','Bd2','Qe7','g3','Nc6','Bg2','Bxd2+','Nbxd2','d6'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','e6 flexible.','Nf3 develops.','Bb4+ — the Bogo check.',
        'Bd2 blocks.','Qe7 keeps the bishop pair option and supports ...e5.','g3 fianchettoes.','Nc6 prepares ...e5.',
        'Bg2 develops.','Bxd2+ trades.','Nbxd2 recaptures.','d6 — Black heads for the freeing ...e5 break.'
      ]
    },
    {
      id: 'bogo-bd2-a5',
      name: 'Bd2 with …a5',
      moves: ['d4','Nf6','c4','e6','Nf3','Bb4+','Bd2','a5','g3','d5','Bg2','O-O'],
      explanations: [
        'White takes the centre.','Black develops.','c4 grabs space.','e6 flexible.','Nf3 develops.','Bb4+ — the Bogo check.',
        'Bd2 blocks.','a5! holding the bishop on b4.','g3 fianchettoes.','d5 grabs the centre.','Bg2 develops.',
        'O-O — a solid, slightly cramped but rock-hard structure.'
      ]
    }
  ],

  // ============================================================
  // FUN
  // ============================================================

  'the-cow': [
    {
      id: 'cow-full-herd',
      name: 'The Full Herd',
      moves: ['e4','e5','d3','Nf6','Nd2','Nc6','c3','d5','Qc2','Bd6','Ngf3'],
      explanations: [
        'White takes the centre.','Black mirrors.','d3 — the quiet Cow setup.','Black develops.','Nd2 — knights stay home.',
        'Black develops.','c3 builds a little chain.','d5 strikes.','Qc2 supports e4.','Bd6 develops.',
        'Ngf3 — the herd is complete; White waits to break with a later d4 or f4.'
      ]
    }
  ],

  'bongcloud-attack': [
    {
      id: 'bongcloud-d5-break',
      name: 'vs …d5 Break',
      moves: ['e4','e5','Ke2','Nf6','Nf3','Nc6','Nc3','d5'],
      explanations: [
        'White takes the centre.','Black mirrors.','Ke2?! the Bongcloud — the king leads the way.','Nf6 hits e4.',
        'Nf3 defends e5 ideas.','Nc6 develops.','Nc3 defends e4.','d5! Black sensibly strikes the centre while White\'s king sits exposed.'
      ]
    }
  ],

  'double-bongcloud': [
    {
      id: 'double-bongcloud-developed',
      name: 'Developed Double Bongcloud',
      moves: ['e4','e5','Ke2','Ke7','Nf3','Nc6','Nc3','Nf6'],
      explanations: [
        'White takes the centre.','Black mirrors.','Ke2?! the Bongcloud.','Ke7?! Black returns the favour — the Double Bongcloud.',
        'Nf3 develops.','Nc6 develops.','Nc3 develops.','Nf6 — both kings stranded; pure meme symmetry.'
      ]
    }
  ],

  'polish-opening': [
    {
      id: 'polish-vs-e5',
      name: 'vs 1…e5 (Bxe5)',
      moves: ['b4','e5','Bb2','Bxb4','Bxe5','Nf6'],
      explanations: [
        'b4 — the Polish (Orangutan).','e5 grabs the centre.','Bb2 attacks e5.','Bxb4 snatches the b4 pawn.',
        'Bxe5 regains the pawn, controlling the long diagonal.','Nf6 develops — roughly balanced, offbeat play.'
      ]
    }
  ],

  'grob-attack': [
    {
      id: 'grob-vs-d5',
      name: 'vs 1…d5',
      moves: ['g4','d5','Bg2','Bxg4','c4','c6','cxd5'],
      explanations: [
        'g4?! the Grob.','d5 grabs the centre.','Bg2 eyes d5 on the long diagonal.','Bxg4 grabs the loose pawn.',
        'c4! the Grob Gambit idea, hitting d5.','c6 defends.','cxd5 — White opens lines for tricky compensation.'
      ]
    }
  ],

  'wayward-queen': [
    {
      id: 'wayward-best-defense',
      name: 'Best Defense (…g6, …Nf6)',
      moves: ['e4','e5','Qh5','Nc6','Bc4','g6','Qf3','Nf6'],
      explanations: [
        'White takes the centre.','Black mirrors.','Qh5?! the Wayward Queen, eyeing f7 and e5.','Nc6 defends e5.',
        'Bc4 joins the f7 threat.','g6! the cleanest defense, kicking the queen.','Qf3 keeps eyeing f7.',
        'Nf6! defending f7 and gaining time — Black is simply better developed.'
      ]
    }
  ],

  'halloween-gambit': [
    {
      id: 'halloween-main-e5',
      name: 'Main Line (…Ng6, e5)',
      moves: ['e4','e5','Nf3','Nc6','Nc3','Nf6','Nxe5','Nxe5','d4','Ng6','e5'],
      explanations: [
        'White takes the centre.','Black mirrors.','Knight hits e5.','Knight defends.','Nc3 — Four Knights.','Black develops.',
        'Nxe5?! the Halloween knight sac.','Black takes.','d4 grabs the centre.','Ng6 retreats safely.',
        'e5! chasing the f6 knight, building a huge pawn front for the piece.'
      ]
    }
  ],

  'hillbilly-attack': [
    {
      id: 'hillbilly-vs-d5',
      name: 'vs 2…d5',
      moves: ['e4','c6','Bc4','d5','Bb3','dxe4','Qh5'],
      explanations: [
        'White takes the centre.','c6 — the Caro-Kann.','Bc4?! the Hillbilly Attack.','d5! the principled central break.',
        'Bb3 keeps the bishop aimed at f7.','dxe4 grabs the pawn.','Qh5! a cheeky double-attack try on e4 and f7.'
      ]
    }
  ],

  'frankenstein-dracula': [
    {
      id: 'fd-nxc7-line',
      name: 'Critical Nxc7+ Line',
      moves: ['e4','e5','Nc3','Nf6','Bc4','Nxe4','Qh5','Nd6','Bb3','Nc6','Nb5','g6','Qf3','f5','Qd5','Qe7','Nxc7+'],
      explanations: [
        'White takes the centre.','Black mirrors.','Nc3 — the Vienna.','Black develops.','Bc4 eyes f7.',
        'Nxe4!? grabbing the pawn — the Frankenstein-Dracula.','Qh5 double-attacks.','Nd6 defends.','Bb3 retreats.',
        'Nc6 holds e5.','Nb5 jumps in, eyeing c7.','g6 hits the queen.','Qf3 keeps pressure.','f5 blocks and gains space.',
        'Qd5 forks e5 and the rook.','Qe7 defends.','Nxc7+! grabbing the rook — wildly unclear material chaos.'
      ]
    }
  ],

  'cornstalk-defense': [
    {
      id: 'cornstalk-vs-centre',
      name: 'vs the Full Centre',
      moves: ['e4','a5','d4','Nf6','Nc3','d6','Nf3','g6'],
      explanations: [
        'White takes the centre.','a5?! the Cornstalk — a wing pawn instead of developing.','d4 builds a big centre.',
        'Nf6 finally develops.','Nc3 develops.','d6 prepares.','Nf3 develops.','g6 — Black fianchettoes, hoping the early ...a5 proves useful.'
      ]
    }
  ],

  'lemming-defense': [
    {
      id: 'lemming-e5-counter',
      name: '…e5 Counter',
      moves: ['e4','Na6','d4','d6','Nf3','e5','dxe5','dxe5'],
      explanations: [
        'White takes the centre.','Na6?! the Lemming — a knight to the rim.','d4 grabs the centre.','d6 supports ...e5.',
        'Nf3 develops.','e5 strikes back.','dxe5 opens the centre.','dxe5 recaptures — queens come off and Black is just slightly worse.'
      ]
    }
  ],

  'carrs-defense': [
    {
      id: 'carrs-french-style',
      name: 'French-style …d5',
      moves: ['e4','h6','d4','e6','Nf3','d5','Nc3','Bb4'],
      explanations: [
        'White takes the centre.','h6?! Carr\'s Defense — a quiet luft move.','d4 builds a big centre.','e6 transposes toward a French.',
        'Nf3 develops.','d5 strikes the centre.','Nc3 develops.','Bb4 pins — a French-like structure where ...h6 is a small extra.'
      ]
    }
  ],

  'st-george-defense': [
    {
      id: 'st-george-miles',
      name: 'Miles Main Line',
      moves: ['e4','a6','d4','b5','Bd3','Bb7','Nf3','e6','O-O','c5'],
      explanations: [
        'White takes the centre.','a6 — St. George (made famous by Miles beating Karpov).','d4 builds the centre.','b5 grabs queenside space.',
        'Bd3 develops.','Bb7 fianchettoes, eyeing e4.','Nf3 develops.','e6 frees the bishop.','O-O castles.','c5! Black strikes the centre from both wings.'
      ]
    }
  ],

  'hammerschlag': [
    {
      id: 'hammerschlag-accept-mess',
      name: 'Accepting the Mess',
      moves: ['f3','e5','Kf2','d5','e4','dxe4','fxe4','Qh4+','g3'],
      explanations: [
        'f3?! the Hammerschlag.','e5 grabs the centre.','Kf2?! the king moves — losing castling on purpose.','d5 builds a big centre.',
        'e4 challenges.','dxe4 takes.','fxe4 recaptures.','Qh4+! a cheeky check.','g3 blocks — White survives, down only dignity.'
      ]
    }
  ],

  'botez-gambit': [
    {
      id: 'botez-actual',
      name: 'The Actual Botez (Qxe5+??)',
      moves: ['e4','e5','Qh5','Nc6','Qxe5+','Nxe5'],
      explanations: [
        'White takes the centre.','Black mirrors.','Qh5 greedily eyes the e5 pawn.','Nc6 defends e5.',
        'Qxe5+?? the literal Botez Gambit — grabbing a defended pawn and donating the queen with check.',
        'Nxe5 — the knight simply takes the queen. The meme lives on.'
      ]
    }
  ],

  'hippopotamus-defense': [
    {
      id: 'hippo-uncoil',
      name: 'Full Setup, Ready to Uncoil',
      moves: ['e4','Nh6','d4','g6','Nf3','Bg7','Nc3','d6','Be2','Nd7','O-O','e6','Be3','b6'],
      explanations: [
        'White takes the centre.','Nh6 — the Hippo, a flexible knight.','d4 builds a big centre.','g6 prepares a fianchetto.',
        'Nf3 develops.','Bg7 fianchettoes.','Nc3 develops.','d6 keeps it flexible.','Be2 develops.','Nd7 — the second knight tucks in.',
        'O-O castles.','e6 completes the shell.','Be3 develops.','b6 — the Hippo is fully built, ready to strike with ...c5 or ...f5.'
      ]
    }
  ],

  'monkeys-bum': [
    {
      id: 'monkeys-bum-h5',
      name: 'Main Line (…h5)',
      moves: ['e4','g6','d4','Bg7','h4','h5','Be3','Nf6','Nc3','d6'],
      explanations: [
        'White takes the centre.','g6 — a Modern setup.','d4 builds the centre.','Bg7 fianchettoes.',
        'h4!? the Monkey\'s Bum — an instant edge-pawn lunge.','h5 halts the pawn.','Be3 develops.','Nf6 develops.',
        'Nc3 develops.','d6 — a sharp, irregular Modern where White has committed to the h-file.'
      ]
    }
  ],

  'coca-cola-gambit': [
    {
      id: 'coca-cola-recapture',
      name: 'Accepted, Recapturing',
      moves: ['g4','g5','f4','gxf4','d4','d5','Bxf4'],
      explanations: [
        'g4?! the Coca-Cola Gambit.','g5 mirrors absurdly.','f4! offering the pawn.','gxf4 accepts.',
        'd4 grabs the centre.','d5 mirrors.','Bxf4 — White regains the pawn with a weirdly playable centre.'
      ]
    }
  ],

};

// ── Merge into OPENINGS (browser) ────────────────────────────────────
function mergeDeeperLines(openings, map) {
  for (const op of openings) {
    const extra = map[op.id];
    if (!extra || !extra.length) continue;
    const have = new Set((op.lines || []).map(l => l.id));
    for (const line of extra) {
      if (have.has(line.id)) continue;          // never duplicate
      op.lines.push(Object.assign({}, line, { tier: 'deeper' }));
    }
  }
}

if (typeof OPENINGS !== 'undefined') {
  mergeDeeperLines(OPENINGS, DEEPER_LINES);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DEEPER_LINES, mergeDeeperLines };
}
