'use strict';

// Which side the user plays for each opening — shared by the main grid and review mode
const OPENING_SIDES = {
  // White-initiated openings
  'italian-game':'white','london-system':'white','vienna-game':'white',
  'kings-gambit':'white','kings-gambit-accepted':'white','giuoco-piano-full':'white',
  'fried-liver-attack':'white','evans-gambit':'white','danish-gambit':'white',
  'bishops-opening':'white','three-knights-game':'white','center-game':'white',
  'ponziani-opening':'white','bird-opening':'white','nimzowitsch-larsen-attack':'white',
  'ruy-lopez':'white','sicilian-alapin':'white','sicilian-smith-morra':'white',
  'french-advance':'white','french-tarrasch':'white','caro-kann-advance':'white',
  'trompowsky-attack':'white','colle-system':'white','english-opening':'white',
  'reti-opening':'white','catalan-opening':'white','catalan-open':'white',
  'kid-samisch':'white','kid-four-pawns':'white','sicilian-richter-rauzer':'white',
  'the-cow':'white','bongcloud-attack':'white','polish-opening':'white',
  'grob-attack':'white','wayward-queen':'white','halloween-gambit':'white',
  'hillbilly-attack':'white','monkeys-bum':'white','coca-cola-gambit':'white',
  'hammerschlag':'white',
  // Black-initiated defenses
  'scandinavian-defense':'black','philidor-defense':'black','hungarian-defense':'black',
  'ruy-lopez-berlin':'black','sicilian-defense':'black','sicilian-najdorf':'black',
  'sicilian-dragon':'black','sicilian-scheveningen':'black','french-defense':'black',
  'french-winawer':'black','caro-kann':'black','pirc-defense':'black',
  'modern-defense':'black','alekhines-defense':'black','petroff-defense':'black',
  'two-knights':'black','slav-defense':'black','semi-slav':'black',
  'dutch-defense':'black','benoni-defense':'black','budapest-gambit':'black',
  'benko-gambit':'black','kings-indian-defense':'black','grunfeld-defense':'black',
  'nimzo-indian':'black','queens-indian':'black','sicilian-sveshnikov':'black',
  'sicilian-poisoned-pawn':'black','sicilian-accelerated-dragon':'black',
  'ruy-lopez-marshall':'black','semi-slav-meran':'black','bogo-indian':'black',
  'cornstalk-defense':'black','lemming-defense':'black','carrs-defense':'black',
  'st-george-defense':'black','frankenstein-dracula':'black','hippopotamus-defense':'black',
  // Symmetric / both
  'four-knights-game':'both','ruy-lopez-closed':'both','queens-gambit':'both',
  'queens-gambit-accepted':'both','double-bongcloud':'both','botez-gambit':'both',
  // Traps — the user plays the side that springs the trap
  'scholars-mate':'white','legals-mate':'white','blackburne-shilling':'black',
  'englund-gambit-trap':'black','elephant-trap':'black','lasker-trap':'black',
  'noahs-ark-trap':'black',
};
