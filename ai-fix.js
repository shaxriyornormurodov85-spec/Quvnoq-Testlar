/* Adds an actual AI opponent to the single-player VS AI mode. */
(function () {
  const hud = document.querySelector('.hud');
  if (!hud) return;

  const aiScoreItem = document.createElement('div');
  aiScoreItem.className = 'hud-item';
  aiScoreItem.id = 'aiScoreHud';
  aiScoreItem.innerHTML = '<span>AI hisob</span><strong id="aiScoreLabel">0</strong>';
  aiScoreItem.hidden = true;
  hud.appendChild(aiScoreItem);

  let gameNumber = 0;
  const originalStartGame = window.startSelectedGame;
  if (typeof originalStartGame === 'function') {
    window.startSelectedGame = function startGameWithAI() {
      gameNumber += 1;
      state.aiScoredRound = null;
      return originalStartGame.apply(this, arguments);
    };
  }

  const originalRenderRound = window.renderRound;
  if (typeof originalRenderRound === 'function') {
    window.renderRound = function renderRoundWithAI() {
      const result = originalRenderRound.apply(this, arguments);
      const isAiGame = state.selectedMode === 'ai';
      aiScoreItem.hidden = !isAiGame;

      if (!isAiGame || !state.questions[state.round]) return result;

      const roundKey = `${gameNumber}:${state.round}`;
      if (state.aiScoredRound === roundKey) return result;
      state.aiScoredRound = roundKey;

      const accuracy = { oson: 0.45, orta: 0.65, qiyin: 0.82 }[state.selectedDifficulty] || 0.6;
      if (Math.random() < accuracy) state.scores.p2 += 10;
      document.getElementById('aiScoreLabel').textContent = String(state.scores.p2);
      return result;
    };
  }

  const originalFinishGame = window.finishGame;
  if (typeof originalFinishGame === 'function') {
    window.finishGame = function finishGameWithAI() {
      const result = originalFinishGame.apply(this, arguments);
      if (state.selectedMode === 'ai') {
        if (state.scores.p1 > state.scores.p2) ui.winnerTitle.textContent = 'Siz yutdingiz!';
        else if (state.scores.p2 > state.scores.p1) ui.winnerTitle.textContent = 'AI yutdi!';
        else ui.winnerTitle.textContent = 'Durrang!';
      }
      return result;
    };
  }
})();
