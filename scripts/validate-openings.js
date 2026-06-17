#!/usr/bin/env node
// Safety gate: replay every move of every line through chess.js.
// Fails (exit 1) if any move is illegal. Run before every build/publish.
//
//   node scripts/validate-openings.js
//
const path = require('path');
const { Chess } = require(path.join(__dirname, '..', 'assets', 'chess.js'));
const { OPENINGS, essentialLines, deeperLines } =
  require(path.join(__dirname, '..', 'renderer', 'openings.js'));
const { DEEPER_LINES, mergeDeeperLines } =
  require(path.join(__dirname, '..', 'renderer', 'deeper-lines.js'));

// Merge the external "Go deeper" module exactly as the browser does, so we
// validate the real shipped data.
mergeDeeperLines(OPENINGS, DEEPER_LINES);

let errors = 0;
let warnings = 0;
let lineCount = 0;
let deeperCount = 0;

for (const op of OPENINGS) {
  const seenIds = new Set();
  for (const line of (op.lines || [])) {
    lineCount++;
    if (line.tier === 'deeper') deeperCount++;

    // Duplicate line id within an opening would corrupt completion tracking
    if (line.id) {
      if (seenIds.has(line.id)) {
        console.error(`✗ ${op.id}: duplicate line id "${line.id}"`);
        errors++;
      }
      seenIds.add(line.id);
    }

    // Replay every move
    const game = new Chess();
    for (let i = 0; i < line.moves.length; i++) {
      const mv = line.moves[i];
      const res = game.move(mv);
      if (!res) {
        console.error(`✗ ${op.id} / ${line.id || line.name}: illegal move #${i + 1} "${mv}"`);
        errors++;
        break;
      }
    }

    // Explanations should line up with moves (non-fatal)
    if (line.explanations && line.explanations.length !== line.moves.length) {
      console.warn(`⚠ ${op.id} / ${line.id || line.name}: ${line.moves.length} moves but ${line.explanations.length} explanations`);
      warnings++;
    }
  }

  // Every opening must keep at least one essential line (mastery depends on it)
  if (essentialLines(op).length === 0) {
    console.error(`✗ ${op.id}: has no essential lines`);
    errors++;
  }
}

console.log('');
console.log(`Openings: ${OPENINGS.length}`);
console.log(`Lines:    ${lineCount} (${deeperCount} deeper)`);
console.log(`Warnings: ${warnings}`);
console.log(errors === 0 ? '✓ All moves legal' : `✗ ${errors} error(s)`);

process.exit(errors === 0 ? 0 : 1);
