/* Safe duel HUD: leaves the original game logic intact.
   VS Player uses the original simultaneous two-question/two-column engine. */
(function () {
  const board = document.getElementById('versusBoard');
  const panel = document.querySelector('.game-panel');
  if (!board || !panel) return;

  const hud = document.createElement('section');
  hud.className = 'duel-scorebar';
  hud.innerHTML = `
    <div class="duel-score duel-score-left"><span class="duel-name" id="duelName1">🔵 1-O‘YINCHI</span><strong id="duelScore1">0</strong><small id="duelCorrect1">0 ta to‘g‘ri</small></div>
    <div class="duel-clock"><span>QOLGAN VAQT</span><strong id="duelClock">25</strong></div>
    <div class="duel-score duel-score-right"><span class="duel-name" id="duelName2">🔴 2-O‘YINCHI</span><strong id="duelScore2">0</strong><small id="duelCorrect2">0 ta to‘g‘ri</small></div>`;
  panel.insertBefore(hud, board);

  const rope = document.createElement('div');
  rope.className = 'duel-rope';
  rope.innerHTML = '<span class="duel-rope-name left">1-O‘YINCHI</span><div class="duel-rope-track"><span class="duel-rope-mid"></span><span class="duel-rope-marker">🏁</span></div><span class="duel-rope-name right">2-O‘YINCHI</span>';
  board.insertAdjacentElement('afterend', rope);

  const $ = (id) => document.getElementById(id);
  function refresh() {
    if (typeof state === 'undefined') return;
    const ai = state.selectedMode === 'ai';
    $('duelName1').textContent = ai ? '🔵 SIZ' : '🔵 1-O‘YINCHI';
    $('duelName2').textContent = ai ? '🤖 AI' : '🔴 2-O‘YINCHI';
    const p1 = state.scores.p1 || 0;
    const p2 = state.scores.p2 || 0;
    $('duelScore1').textContent = String(p1);
    $('duelScore2').textContent = String(p2);
    $('duelCorrect1').textContent = Math.floor(p1 / 10) + ' ta to‘g‘ri';
    $('duelCorrect2').textContent = Math.floor(p2 / 10) + ' ta to‘g‘ri';
    $('duelClock').textContent = String(state.timer ?? 25);
    hud.classList.toggle('ai-scorebar', ai);
    const marker = rope.querySelector('.duel-rope-marker');
    const diff = Math.max(-1, Math.min(1, (p2 - p1) / Math.max(10, (p1 + p2 || 10))));
    marker.style.left = (50 + diff * 38) + '%';
    rope.classList.toggle('is-ai', ai);
    rope.querySelector('.duel-rope-name.left').textContent = ai ? 'SIZ' : '1-O‘YINCHI';
    rope.querySelector('.duel-rope-name.right').textContent = ai ? 'AI' : '2-O‘YINCHI';
    const gameActive = document.getElementById('gameScreen').classList.contains('active');
    hud.hidden = !gameActive;
    rope.hidden = !gameActive;
  }
  refresh();
  const syncId = window.setInterval(refresh, 200);
  window.addEventListener('beforeunload', () => clearInterval(syncId));
})();