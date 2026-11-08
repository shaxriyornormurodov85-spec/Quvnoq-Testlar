/* VS Player is a turn-based game: after each answer, the next player gets a new question. */
(function () {
  const board = document.getElementById('versusBoard');
  if (!board) return;

  let turnAnswered = false;
  let turnTimer = null;

  function stopTurnTimer() {
    if (turnTimer !== null) {
      clearInterval(turnTimer);
      turnTimer = null;
    }
  }

  function showTurnQuestion() {
    if (state.round >= state.questions.length) {
      stopTurnTimer();
      finishGame();
      return;
    }

    const playerKey = state.round % 2 === 0 ? 'p1' : 'p2';
    const playerNumber = playerKey === 'p1' ? 1 : 2;
    const question = state.questions[state.round];
    state.currentPlayer = playerKey;
    state.roundQuestions = { p1: null, p2: null };
    state.roundQuestions[playerKey] = question;
    state.answered = { p1: false, p2: false };
    turnAnswered = false;

    ui.roundLabel.textContent = `${state.round + 1} / ${state.questions.length}`;
    ui.questionTag.textContent = `1-player navbati`;
    ui.questionText.textContent = `O‘yinchi ${playerNumber}, sizning navbatingiz`;
    board.innerHTML = '';
    board.classList.add('single');
    board.classList.remove('dual');

    const panel = document.createElement('div');
    panel.className = 'player-panel';
    const title = document.createElement('h3');
    title.textContent = `O‘yinchi ${playerNumber}`;
    panel.appendChild(title);

    const questionText = document.createElement('p');
    questionText.className = 'question-mini';
    questionText.textContent = question.question;
    panel.appendChild(questionText);

    const list = document.createElement('div');
    list.className = 'option-list';
    question.options.forEach((option) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option-btn';
      button.textContent = option;
      button.dataset.player = playerKey;
      button.dataset.value = option;
      button.addEventListener('click', () => answerTurn(playerKey, option));
      list.appendChild(button);
    });
    panel.appendChild(list);
    board.appendChild(panel);

    stopTurnTimer();
    state.timer = 25;
    ui.timeLabel.textContent = String(state.timer);
    turnTimer = setInterval(() => {
      state.timer -= 1;
      ui.timeLabel.textContent = String(state.timer);
      if (state.timer <= 0) answerTurn(playerKey, null);
    }, 1000);
  }

  function answerTurn(playerKey, selectedValue) {
    if (turnAnswered || state.currentPlayer !== playerKey) return;
    turnAnswered = true;
    stopTurnTimer();

    const question = state.roundQuestions[playerKey];
    const isCorrect = selectedValue === question.answer;
    state.answered[playerKey] = true;
    if (isCorrect) state.scores[playerKey] += 10;

    board.querySelectorAll('.option-btn').forEach((button) => {
      button.disabled = true;
      if (button.dataset.value === question.answer) button.classList.add('correct');
      if (button.dataset.value === selectedValue && !isCorrect) button.classList.add('wrong');
    });

    ui.statusText.textContent = isCorrect ? `O‘yinchi ${playerKey === 'p1' ? 1 : 2}: to‘g‘ri javob!` : 'Noto‘g‘ri javob yoki vaqt tugadi.';
    window.setTimeout(() => {
      state.round += 1;
      if (state.round >= state.questions.length) {
        stopTurnTimer();
        finishGame();
      } else {
        showTurnQuestion();
      }
    }, 850);
  }

  const renderRoundOriginal = window.renderRound;
  window.renderRound = function renderRoundTurnBased() {
    if (state.selectedMode === 'player') {
      showTurnQuestion();
      return;
    }
    return renderRoundOriginal.apply(this, arguments);
  };

  window.addEventListener('beforeunload', stopTurnTimer);
})();
