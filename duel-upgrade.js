/* Quvnoq Testlar: polished tug-of-war player mode and shared score HUD. */
(function () {
  const board = document.getElementById('versusBoard');
  const panel = document.querySelector('.game-panel');
  if (!board || !panel) return;

  let turnTimer = null;
  let turnLocked = false;
  let ropeBalance = 0;

  const scoreHud = document.createElement('div');
  scoreHud.className = 'duel-scorebar';
  scoreHud.innerHTML = `
    <div class="duel-score duel-score-left"><span class="duel-name" id="duelName1">1-O‘YINCHI</span><strong id="duelScore1">0</strong><small id="duelCorrect1">0 ta to‘g‘ri</small></div>
    <div class="duel-clock"><span>VAQT</span><strong id="duelClock">25</strong></div>
    <div class="duel-score duel-score-right"><span class="duel-name" id="duelName2">2-O‘YINCHI</span><strong id="duelScore2">0</strong><small id="duelCorrect2">0 ta to‘g‘ri</small></div>`;
  panel.insertBefore(scoreHud, board);

  const $ = (id) => document.getElementById(id);
  const correct = { p1: 0, p2: 0 };

  function updateScoreHud() {
    const ai = state.selectedMode === 'ai';
    $('duelName1').textContent = ai ? 'SIZ' : '1-O‘YINCHI';
    $('duelName2').textContent = ai ? 'AI' : '2-O‘YINCHI';
    $('duelScore1').textContent = String(state.scores.p1);
    $('duelScore2').textContent = String(state.scores.p2);
    $('duelCorrect1').textContent = correct.p1 + ' ta to‘g‘ri';
    $('duelCorrect2').textContent = correct.p2 + ' ta to‘g‘ri';
    $('duelClock').textContent = String(state.timer);
    scoreHud.classList.toggle('ai-scorebar', ai);
  }

  function stopTimer() {
    if (turnTimer !== null) {
      clearInterval(turnTimer);
      turnTimer = null;
    }
  }

  function makeButton(option, index, playerKey, question) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    const letter = document.createElement('span');
    letter.className = 'option-letter';
    letter.textContent = String.fromCharCode(65 + index);
    const label = document.createElement('span');
    label.textContent = option;
    button.append(letter, label);
    button.dataset.player = playerKey;
    button.dataset.value = option;
    button.addEventListener('click', () => answerPlayerTurn(playerKey, option, question));
    return button;
  }

  function renderPlayerRound() {
    if (state.round >= state.questions.length) {
      stopTimer();
      finishGame();
      return;
    }

    const playerKey = state.round % 2 === 0 ? 'p1' : 'p2';
    const playerNo = playerKey === 'p1' ? 1 : 2;
    const question = state.questions[state.round];
    state.currentPlayer = playerKey;
    state.roundQuestions = { p1: null, p2: null };
    state.roundQuestions[playerKey] = question;
    state.answered = { p1: false, p2: false };
    turnLocked = false;

    ui.roundLabel.textContent = (state.round + 1) + ' / ' + state.questions.length;
    ui.questionTag.textContent = '1-O‘YINCHI NAVBATI';
    ui.questionText.textContent = 'O‘yinchi ' + playerNo + ' javob beradi';
    board.className = 'versus-board tug-board';
    board.innerHTML = '';

    const layout = document.createElement('div');
    layout.className = 'tug-layout';

    ['p1', 'p2'].forEach((key) => {
      const isActive = key === playerKey;
      const side = document.createElement('section');
      side.className = 'player-panel tug-player ' + (key === 'p1' ? 'left' : 'right') + (isActive ? ' is-active' : ' is-waiting');

      const heading = document.createElement('h3');
      heading.textContent = key === 'p1' ? '🔵 1-O‘YINCHI' : '🔴 2-O‘YINCHI';
      side.appendChild(heading);

      if (isActive) {
        const q = document.createElement('p');
        q.className = 'question-mini';
        q.textContent = question.question;
        side.appendChild(q);
        const list = document.createElement('div');
        list.className = 'option-list';
        question.options.forEach((option, index) => list.appendChild(makeButton(option, index, key, question)));
        side.appendChild(list);
        const hint = document.createElement('div');
        hint.className = 'turn-hint';
        hint.textContent = 'Javobingizni tanlang!';
        side.appendChild(hint);
      } else {
        const waiting = document.createElement('div');
        waiting.className = 'waiting-card';
        waiting.innerHTML = '<span class="waiting-icon">⏳</span><strong>Navbat kutilyapti</strong><small>Hozir raqib javob bermoqda</small>';
        side.appendChild(waiting);
      }
      layout.appendChild(side);
    });

    const rope = document.createElement('div');
    rope.className = 'tug-rope-arena';
    rope.innerHTML = '<div class="rope-label rope-label-left">1-O‘YINCHI</div><div class="rope-line"><span class="rope-center"></span><span class="rope-knot">🏁</span></div><div class="rope-label rope-label-right">2-O‘YINCHI</div>';
    layout.appendChild(rope);
    board.appendChild(layout);

    stopTimer();
    state.timer = 25;
    updateScoreHud();
    turnTimer = setInterval(() => {
      state.timer = Math.max(0, state.timer - 1);
      updateScoreHud();
      if (state.timer <= 0) answerPlayerTurn(playerKey, null, question);
    }, 1000);
  }

  function moveRope(playerKey, isCorrect) {
    if (!isCorrect) return;
    ropeBalance += playerKey === 'p1' ? -1 : 1;
    ropeBalance = Math.max(-5, Math.min(5, ropeBalance));
    const knot = board.querySelector('.rope-knot');
    if (knot) knot.style.setProperty('--rope-shift', (ropeBalance * 7) + '%');
    const line = board.querySelector('.rope-line');
    if (line) line.dataset.leader = ropeBalance < 0 ? 'p1' : ropeBalance > 0 ? 'p2' : 'tie';
  }

  function answerPlayerTurn(playerKey, value, question) {
    if (turnLocked || state.currentPlayer !== playerKey) return;
    turnLocked = true;
    stopTimer();
    const isCorrect = value === question.answer;
    state.answered[playerKey] = true;
    if (isCorrect) {
      state.scores[playerKey] += 10;
      correct[playerKey] += 1;
      moveRope(playerKey, true);
    }

    board.querySelectorAll('.option-btn').forEach((button) => {
      button.disabled = true;
      if (button.dataset.value === question.answer) button.classList.add('correct');
      if (button.dataset.value === value && !isCorrect) button.classList.add('wrong');
    });
    updateScoreHud();
    ui.statusText.textContent = isCorrect
      ? 'Ajoyib! O‘yinchi ' + (playerKey === 'p1' ? 1 : 2) + ' to‘g‘ri javob berdi.'
      : 'Noto‘g‘ri javob yoki vaqt tugadi.';
    window.setTimeout(() => {
      state.round += 1;
      if (state.round >= state.questions.length) {
        finishGame();
      } else {
        renderPlayerRound();
      }
    }, 750);
  }

  const originalRenderRound = window.renderRound;
  window.renderRound = function renderRoundWithTugMode() {
    if (state.selectedMode === 'player') {
      renderPlayerRound();
      return;
    }
    const result = originalRenderRound.apply(this, arguments);
    updateScoreHud();
    return result;
  };

  const originalHandleChoice = window.handleChoice;
  if (typeof originalHandleChoice === 'function') {
    window.handleChoice = function handleChoiceWithScoreHud() {
      const result = originalHandleChoice.apply(this, arguments);
      if (state.selectedMode === 'ai') {
        if (arguments[2] !== true && state.answered[arguments[0]]) {
          const key = arguments[0];
          const question = state.roundQuestions[key];
          if (question && arguments[1] === question.answer) correct[key] += 1;
        }
        updateScoreHud();
      }
      return result;
    };
  }

  const originalFinishGame = window.finishGame;
  window.finishGame = function finishGameWithTugResult() {
    stopTimer();
    const result = originalFinishGame.apply(this, arguments);
    updateScoreHud();
    if (state.selectedMode === 'player') {
      ui.winnerTitle.textContent = state.scores.p1 > state.scores.p2
        ? '🏆 1-o‘yinchi g‘olib!'
        : state.scores.p2 > state.scores.p1
          ? '🏆 2-o‘yinchi g‘olib!'
          : '🤝 Durrang!';
      ui.resultSummary.textContent += ' • To‘g‘ri javoblar: ' + correct.p1 + ' : ' + correct.p2;
    } else {
      ui.resultSummary.textContent += ' • To‘g‘ri javoblar: ' + correct.p1 + ' : ' + correct.p2;
    }
    return result;
  };

  const originalStartSelectedGame = window.startSelectedGame;
  if (typeof originalStartSelectedGame === 'function') {
    window.startSelectedGame = function startWithFreshDuelStats() {
      correct.p1 = 0;
      correct.p2 = 0;
      ropeBalance = 0;
      stopTimer();
      const result = originalStartSelectedGame.apply(this, arguments);
      updateScoreHud();
      return result;
    };
  }

  // Keep the shared scoreboard clock and AI hit count in sync with the legacy AI timer.
  const hudSyncId = window.setInterval(() => {
    if (state.selectedMode === 'ai') {
      correct.p2 = Math.floor((state.scores.p2 || 0) / 10);
      correct.p1 = Math.floor((state.scores.p1 || 0) / 10);
      $('duelClock').textContent = ui.timeLabel.textContent;
      updateScoreHud();
    }
  }, 250);

  window.addEventListener('beforeunload', () => { stopTimer(); clearInterval(hudSyncId); });
  updateScoreHud();
})();