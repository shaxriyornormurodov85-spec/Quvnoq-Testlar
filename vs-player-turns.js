/* VS Player: independent question progress and 25-second timer for each player. */
(function () {
  const board = document.getElementById('versusBoard');
  if (!board || typeof state === 'undefined') return;

  let progress = { p1: 0, p2: 0 };
  let timers = { p1: null, p2: null };
  let locked = { p1: false, p2: false };
  let questions = { p1: [], p2: [] };
  const names = { p1: "Ko‘k jamoa", p2: "Qizil jamoa" };

  function stopTimer(key) {
    if (timers[key] !== null) {
      clearInterval(timers[key]);
      timers[key] = null;
    }
  }
  function updateProgress() {
    state.round = Math.min(state.questions.length, Math.max(progress.p1, progress.p2));
    ui.roundLabel.textContent = `1-o‘yinchi: ${progress.p1}/${state.questions.length} · 2-o‘yinchi: ${progress.p2}/${state.questions.length}`;
  }
  function finishIfDone() {
    if (progress.p1 >= state.questions.length && progress.p2 >= state.questions.length) {
      stopTimer('p1'); stopTimer('p2');
      finishGame();
      return true;
    }
    return false;
  }
  function renderPlayer(key) {
    const panel = board.querySelector(`.player-panel.${key === 'p1' ? 'left' : 'right'}`);
    if (!panel) return;
    stopTimer(key);
    locked[key] = false;
    const idx = progress[key];
    if (idx >= questions[key].length) {
      panel.innerHTML = `<h3>${names[key]}</h3><div class="player-done"><span>🏆</span><strong>Vazifani tugatdingiz!</strong><small>${state.scores[key]} ball</small></div>`;
      panel.classList.add('player-finished');
      return;
    }
    panel.classList.remove('player-finished');
    const q = questions[key][idx];
    panel.innerHTML = '';
    const title = document.createElement('h3');
    title.textContent = names[key];
    const timer = document.createElement('div');
    timer.className = 'player-own-timer';
    timer.innerHTML = '<span>Qolgan vaqt</span><strong>25</strong>';
    const qText = document.createElement('div');
    qText.className = 'question-mini';
    qText.textContent = q.question;
    const list = document.createElement('div');
    list.className = 'option-list';
    q.options.forEach((option, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65+i)}</span><span></span>`;
      btn.querySelector('span:last-child').textContent = option;
      btn.addEventListener('click', () => answer(key, option));
      list.appendChild(btn);
    });
    panel.append(title, timer, qText, list);
    let left = 25;
    timers[key] = setInterval(() => {
      left--;
      timer.querySelector('strong').textContent = String(left);
      if (left <= 0) answer(key, null);
    }, 1000);
  }
  function answer(key, value) {
    if (locked[key] || progress[key] >= questions[key].length) return;
    locked[key] = true;
    stopTimer(key);
    const q = questions[key][progress[key]];
    const correct = value === q.answer;
    if (correct) state.scores[key] += 10;
    const panel = board.querySelector(`.player-panel.${key === 'p1' ? 'left' : 'right'}`);
    panel.querySelectorAll('.option-btn').forEach(btn => {
      btn.disabled = true;
      const option = btn.querySelector('span:last-child').textContent;
      if (option === q.answer) btn.classList.add('correct');
      else if (option === value) btn.classList.add('wrong');
    });
    ui.statusText.textContent = correct ? `${names[key]}: to‘g‘ri javob!` : `${names[key]}: noto‘g‘ri javob yoki vaqt tugadi.`;
    progress[key]++;
    updateProgress();
    window.setTimeout(() => {
      renderPlayer(key);
      finishIfDone();
    }, 500);
  }
  function startIndependentDuel() {
    stopTimer('p1'); stopTimer('p2');
    progress = { p1: 0, p2: 0 };
    locked = { p1: false, p2: false };
    questions = {
      p1: [...state.questions],
      p2: [...state.questions].slice().reverse()
    };
    state.scores = { p1: 0, p2: 0 };
    state.answered = { p1: false, p2: false };
    state.roundQuestions = { p1: questions.p1[0], p2: questions.p2[0] };
    board.innerHTML = '';
    board.classList.remove('single');
    board.classList.add('dual');
    ['p1','p2'].forEach(key => {
      const panel = document.createElement('div');
      panel.className = `player-panel ${key === 'p1' ? 'left' : 'right'}`;
      board.appendChild(panel);
    });
    ui.questionTag.textContent = 'Har bir o‘yinchiga alohida vaqt';
    ui.questionText.textContent = 'Ikkala o‘yinchi o‘z tezligida javob beradi';
    renderPlayer('p1');
    renderPlayer('p2');
    updateProgress();
  }
  const original = window.renderRound;
  window.renderRound = function () {
    if (state.selectedMode === 'player') return startIndependentDuel();
    return original.apply(this, arguments);
  };
  window.addEventListener('beforeunload', () => { stopTimer('p1'); stopTimer('p2'); });
})();
