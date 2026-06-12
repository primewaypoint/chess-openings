'use strict';

// Synthesized sound effects via Web Audio — no audio files, fully offline.
// Toggled in Settings (localStorage 'soundEnabled', default on).
const SoundFX = (function () {
  let ctx = null;

  function enabled() {
    return localStorage.getItem('soundEnabled') !== 'off';
  }

  function ac() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone({ freq, freqEnd = null, time = 0, dur = 0.08, type = 'triangle', vol = 0.15 }) {
    const c = ac();
    if (!c) return;
    const t0 = c.currentTime + time;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (freqEnd) osc.frequency.exponentialRampToValueAtTime(freqEnd, t0 + dur);
    gain.gain.setValueAtTime(vol, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  return {
    move() {
      if (!enabled()) return;
      tone({ freq: 260, freqEnd: 170, dur: 0.07, type: 'triangle', vol: 0.22 });
    },
    capture() {
      if (!enabled()) return;
      tone({ freq: 210, freqEnd: 150, dur: 0.06, type: 'triangle', vol: 0.26 });
      tone({ freq: 130, freqEnd: 90, time: 0.04, dur: 0.09, type: 'triangle', vol: 0.22 });
    },
    wrong() {
      if (!enabled()) return;
      tone({ freq: 140, dur: 0.16, type: 'sawtooth', vol: 0.07 });
      tone({ freq: 104, dur: 0.18, type: 'sawtooth', vol: 0.07 });
    },
    complete() {
      if (!enabled()) return;
      tone({ freq: 523, time: 0,    dur: 0.14, type: 'sine', vol: 0.16 });
      tone({ freq: 659, time: 0.09, dur: 0.14, type: 'sine', vol: 0.16 });
      tone({ freq: 784, time: 0.18, dur: 0.22, type: 'sine', vol: 0.16 });
    },
    streak() {
      // Rising sparkle when the daily streak goes up
      if (!enabled()) return;
      tone({ freq: 660,  time: 0,    dur: 0.09, type: 'sine', vol: 0.13 });
      tone({ freq: 880,  time: 0.07, dur: 0.09, type: 'sine', vol: 0.13 });
      tone({ freq: 1175, time: 0.14, dur: 0.18, type: 'sine', vol: 0.12 });
    },
    fanfare() {
      // Richer chord for mastering a whole opening
      if (!enabled()) return;
      tone({ freq: 523,  time: 0,    dur: 0.30, type: 'sine', vol: 0.13 });
      tone({ freq: 659,  time: 0,    dur: 0.30, type: 'sine', vol: 0.11 });
      tone({ freq: 784,  time: 0.12, dur: 0.34, type: 'sine', vol: 0.13 });
      tone({ freq: 1047, time: 0.24, dur: 0.44, type: 'sine', vol: 0.14 });
    }
  };
})();
