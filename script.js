const questions = [
  {
    question: 'Qaysi shahar "Dunyoning poytaxti" deb atalmaydi?',
    options: ['Tokio', 'Paris', 'London', 'Berlin'],
    answer: 'Paris'
  },
  {
    question: 'Keling, eng katta dengiz hayvoni nima?',
    options: ['Ayiq', 'Velikan kit', 'Akula', 'Delfin'],
    answer: 'Velikan kit'
  },
  {
    question: '3 × 9 nechaga teng?',
    options: ['24', '27', '29', '32'],
    answer: '27'
  },
  {
    question: 'Yilning qaysi fasli yozda bo‘ladi?',
    options: ['Dekabr', 'Mart', 'Iyul', 'Noyabr'],
    answer: 'Iyul'
  },
  {
    question: 'O‘zbekiston Respublikasining poytaxti qaysi shahar?',
    options: ['Toshkent', 'Samarqand', 'Buxoro', 'Farg‘ona'],
    answer: 'Toshkent'
  },
  {
    question: 'Yer atrofida necha oy mavjud?',
    options: ['9', '11', '1', '12'],
    answer: '12'
  },
  {
    question: 'JavaScriptda massiv elementini chiqarish uchun qaysi usul ishlatiladi?',
    options: ['console.log()', 'array.print()', 'massive.show()', 'element.run()'],
    answer: 'console.log()'
  },
  {
    question: 'Qaysi bayroqda uchta rang mavjud?',
    options: ['Braziliya', 'Fransiya', 'AQSh', 'Yaponiya'],
    answer: 'Fransiya'
  },
  {
    question: '10 + 15 - 5 = ?',
    options: ['15', '20', '25', '30'],
    answer: '20'
  },
  {
    question: 'Qaysi hayvon "yovvoyi kuchuk" deb ham ataladi?',
    options: ['Bo‘ri', 'Ot', 'Qoplon', 'Yolbars'],
    answer: 'Bo‘ri'
  }
];

const state = {
  players: ['Player 1', 'Player 2'],
  scores: [0, 0],
  currentRound: 0,
  currentPlayer: 0,
  timer: 15,
  timerId: null,
  started: false
};

const elements = {
  screens: {
    start: document.getElementById('startScreen'),
    game: document.getElementById('gameScreen'),
    result: document.getElementById('resultScreen')
  },
  player1Name: document.getElementById('player1Name'),
  player2Name: document.getElementById('player2Name'),
  startBtn: document.getElementById('startBtn'),
  restartBtn: document.getElementById('restartBtn'),
  turnBanner: document.getElementById('turnBanner'),
  roundLabel: document.getElementById('roundLabel'),
  timeLabel: document.getElementById('timeLabel'),
  scoreLabel: document.getElementById('scoreLabel'),
  questionTag: document.getElementById('questionTag'),
  questionText: document.getElementById('questionText'),
  options: document.getElementById('options'),
  winnerTitle: document.getElementById('winnerTitle'),
  finalScore: document.getElementById('finalScore')
};

function showScreen(name) {
  Object.values(elements.screens).forEach((screen) => {
    screen.classList.remove('active');
  });
  elements.screens[name].classList.add('active');
}

function startGame() {
  const name1 = elements.player1Name.value.trim() || 'Player 1';
  const name2 = elements.player2Name.value.trim() || 'Player 2';

  state.players = [name1, name2];
  state.scores = [0, 0];
  state.currentRound = 0;
  state.currentPlayer = 0;
  state.started = true;

  elements.turnBanner.textContent = `${name1} turn`;
  showScreen('game');
  loadQuestion();
}

function renderScores() {
  const [p1, p2] = state.scores;
  elements.scoreLabel.textContent = `${p1} - ${p2}`;
  elements.turnBanner.textContent = `${state.players[state.currentPlayer]} turn`;
}

function clearTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function startTimer() {
  clearTimer();
  state.timer = 15;
  elements.timeLabel.textContent = String(state.timer);

  state.timerId = setInterval(() => {
    state.timer -= 1;
    elements.timeLabel.textContent = String(state.timer);

    if (state.timer <= 0) {
      clearTimer();
      handleAnswer(null, false);
    }
  }, 1000);
}

function loadQuestion() {
  if (state.currentRound >= questions.length) {
    finishGame();
    return;
  }

  const roundNumber = state.currentRound + 1;
  const question = questions[state.currentRound];
  const playerName = state.players[state.currentPlayer];

  elements.roundLabel.textContent = `${roundNumber} / ${questions.length}`;
  elements.questionTag.textContent = `${playerName}`;
  elements.questionText.textContent = question.question;
  elements.options.innerHTML = '';

  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.textContent = option;
    button.addEventListener('click', () => handleAnswer(option, option === question.answer));
    elements.options.appendChild(button);
  });

  renderScores();
  startTimer();
}

function handleAnswer(selectedOption, isCorrect) {
  clearTimer();
  const question = questions[state.currentRound];
  const buttons = [...elements.options.querySelectorAll('button')];

  buttons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === question.answer) {
      button.classList.add('correct');
    }

    if (selectedOption && button.textContent === selectedOption && !isCorrect) {
      button.classList.add('wrong');
    }
  });

  if (isCorrect) {
    state.scores[state.currentPlayer] += 10;
  }

  renderScores();

  setTimeout(() => {
    state.currentRound += 1;
    state.currentPlayer = state.currentRound % 2;
    if (state.currentRound >= questions.length) {
      finishGame();
      return;
    }
    loadQuestion();
  }, 900);
}

function finishGame() {
  clearTimer();
  const [p1, p2] = state.scores;

  let winner = 'Durrang!';
  if (p1 > p2) winner = `${state.players[0]} yutdi!`;
  else if (p2 > p1) winner = `${state.players[1]} yutdi!`;
  else winner = 'Draw!';

  elements.winnerTitle.textContent = winner;
  elements.finalScore.textContent = `${p1} - ${p2}`;
  showScreen('result');
}

function init() {
  elements.startBtn.addEventListener('click', startGame);
  elements.restartBtn.addEventListener('click', () => {
    showScreen('start');
  });
}

init();
