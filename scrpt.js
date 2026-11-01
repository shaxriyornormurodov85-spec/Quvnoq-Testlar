const categoryLabels = {
  iq: 'IQ Test',
  grammar: 'Grammar',
  vocabulary: 'Vocabulary',
  russian: 'Russian',
  duel: '2-Player',
};

const questionSets = {
  iq: [
    {
      question: 'Qatorni davom ettiring: 2, 4, 8, 16, ?',
      options: ['20', '24', '32', '64'],
      correct: '32',
    },
    {
      question: 'Noto‘g‘ri variantni tanlang: Circle, Square, Triangle, Apple',
      options: ['Circle', 'Square', 'Triangle', 'Apple'],
      correct: 'Apple',
    },
    {
      question: 'Agar A > B va B > C bo‘lsa, nima to‘g‘ri?',
      options: ['A < C', 'A = C', 'A > C', 'C > A'],
      correct: 'A > C',
    },
    {
      question: 'Book is to Read as Pen is to ?',
      options: ['Write', 'Desk', 'Paper', 'School'],
      correct: 'Write',
    },
    {
      question: 'If all cats are animals and some animals live outside, which is true?',
      options: ['All cats live outside', 'Some cats live outside', 'No cat is an animal', 'All animals are cats'],
      correct: 'Some cats live outside',
    },
  ],
  grammar: [
    {
      question: 'To‘g‘ri gapni tanlang:',
      options: ['She go to school every day.', 'She goes to school every day.', 'She going to school every day.', 'She gone to school every day.'],
      correct: 'She goes to school every day.',
    },
    {
      question: 'I ___ a book right now.',
      options: ['read', 'am reading', 'reads', 'readed'],
      correct: 'am reading',
    },
    {
      question: 'Qaysi gap to‘g‘ri?',
      options: ['There are many informations.', 'There is much information.', 'There are much information.', 'There is many information.'],
      correct: 'There is much information.',
    },
    {
      question: 'He ___ already finished his homework.',
      options: ['has', 'have', 'is', 'was'],
      correct: 'has',
    },
    {
      question: 'If I ___ enough money, I would travel.',
      options: ['has', 'had', 'have', 'will have'],
      correct: 'had',
    },
  ],
  vocabulary: [
    {
      question: '“Brave” so‘zining ma’nosi nima?',
      options: ['Qorqoq', 'Jasur', 'Tez', 'Jim'],
      correct: 'Jasur',
    },
    {
      question: '“Rapid” so‘zining sinonimi qaysi?',
      options: ['Slow', 'Quick', 'Old', 'Weak'],
      correct: 'Quick',
    },
    {
      question: '“Ancient” so‘zining ma’nosi nima?',
      options: ['Zaytun', 'Juda eski', 'Kichkina', 'Qimmat'],
      correct: 'Juda eski',
    },
    {
      question: '“Simplify” so‘zining ma’nosi nima?',
      options: ['Yengillashtirish', 'Qiyinlashtirish', 'Yoqmaslik', 'Buzish'],
      correct: 'Yengillashtirish',
    },
    {
      question: '“Gigantic” ga yaqin ma’noli so‘z qaysi?',
      options: ['Huge', 'Small', 'Quiet', 'Light'],
      correct: 'Huge',
    },
  ],
  russian: [
    {
      question: '“Я ___ в школу каждый день” gapida to‘g‘ri so‘z qaysi?',
      options: ['иду', 'идет', 'идёшь', 'ходим'],
      correct: 'иду',
    },
    {
      question: '“Книга” so‘zi nima degani?',
      options: ['Kitob', 'Yulduz', 'Qolam', 'Bino'],
      correct: 'Kitob',
    },
    {
      question: '“Good morning” ning to‘g‘ri tarjimasi qaysi?',
      options: ['Xayrli kech', 'Xayrli tong', 'Salom', 'Xayr'],
      correct: 'Xayrli tong',
    },
    {
      question: '“Мне нравится чай” ning to‘g‘ri tarjimasi nima?',
      options: ['Choyimni yoqtiraman', 'Menga choy yoqadi', 'Choy meni yaxshi ko‘radi', 'Men choyni yaxshi ko‘raman'],
      correct: 'Menga choy yoqadi',
    },
    {
      question: '“Большой” inglizchasida nima?',
      options: ['Small', 'Big', 'Fast', 'Cold'],
      correct: 'Big',
    },
  ],
  duel: [
    {
      question: 'Qaysi raqam keyingi keladi: 3, 6, 12, 24, ?',
      options: ['30', '36', '48', '60'],
      correct: '48',
    },
    {
      question: 'Which sentence is correct?',
      options: ['He are happy.', 'He is happy.', 'He am happy.', 'He be happy.'],
      correct: 'He is happy.',
    },
    {
      question: '“Brave” so‘ziga yaqin ma’noli so‘z nima?',
      options: ['Frightened', 'Courageous', 'Slow', 'Silent'],
      correct: 'Courageous',
    },
    {
      question: '“Книга” so‘zi rus tilida nima?',
      options: ['Птица', 'Книга', 'Дом', 'Река'],
      correct: 'Книга',
    },
    {
      question: 'Mantiqiy misol: A > B > C. To‘g‘ri ifoda qaysi?',
      options: ['A < C', 'A = C', 'A > C', 'C > A'],
      correct: 'A > C',
    },
  ],
};

const state = {
  category: 'iq',
  questions: [],
  currentIndex: 0,
  currentPlayer: 1,
  totalScore: 0,
  scores: { 1: 0, 2: 0 },
  answered: false,
};

const els = {
  categoryNav: document.getElementById('categoryNav'),
  categoryLabel: document.getElementById('categoryLabel'),
  progressLabel: document.getElementById('progressLabel'),
  questionText: document.getElementById('questionText'),
  options: document.getElementById('options'),
  nextBtn: document.getElementById('nextBtn'),
  resultCard: document.getElementById('resultCard'),
  resultTitle: document.getElementById('resultTitle'),
  resultText: document.getElementById('resultText'),
  quizCard: document.getElementById('quizCard'),
  scoreboard: document.getElementById('scoreboard'),
  resetAllBtn: document.getElementById('resetAllBtn'),
  restartBtn: document.getElementById('restartBtn'),
  player1Score: document.getElementById('player1Score'),
  player2Score: document.getElementById('player2Score'),
};

function setActiveCategory(category) {
  state.category = category;
  state.currentIndex = 0;
  state.totalScore = 0;
  state.scores = { 1: 0, 2: 0 };
  state.currentPlayer = 1;
  state.questions = [...questionSets[category]];

  document.querySelectorAll('.category-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.category === category);
  });

  const isDuel = category === 'duel';
  els.scoreboard.classList.toggle('hidden', !isDuel);
  els.categoryLabel.textContent = categoryLabels[category];

  if (isDuel) {
    updateScoreboard();
  }

  renderQuestion();
}

function updateScoreboard() {
  els.player1Score.textContent = state.scores[1];
  els.player2Score.textContent = state.scores[2];

  document.querySelectorAll('.score-box').forEach((box) => {
    const player = Number(box.dataset.player);
    box.classList.toggle('active-player', state.currentPlayer === player && !isFinished());
  });
}

function renderQuestion() {
  els.resultCard.classList.add('hidden');
  els.quizCard.classList.remove('hidden');
  els.nextBtn.disabled = true;
  state.answered = false;

  if (state.currentIndex >= state.questions.length) {
    showResult();
    return;
  }

  const currentQuestion = state.questions[state.currentIndex];
  els.progressLabel.textContent = `${state.currentIndex + 1} / ${state.questions.length}`;
  els.questionText.textContent = currentQuestion.question;
  els.options.innerHTML = '';

  currentQuestion.options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.textContent = option;
    button.addEventListener('click', () => handleAnswer(button, option, currentQuestion.correct));
    els.options.appendChild(button);
  });

  if (state.category === 'duel') {
    els.questionText.textContent = `Player ${state.currentPlayer}: ${currentQuestion.question}`;
  }

  updateScoreboard();
}

function handleAnswer(button, selectedOption, correctAnswer) {
  if (state.answered) return;
  state.answered = true;

  const optionButtons = [...document.querySelectorAll('.option-btn')];
  optionButtons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) btn.classList.add('correct');
    if (btn.textContent === selectedOption && selectedOption !== correctAnswer) btn.classList.add('wrong');
  });

  if (state.category === 'duel') {
    if (selectedOption === correctAnswer) {
      state.scores[state.currentPlayer] += 1;
    }
    state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
    updateScoreboard();
  } else {
    if (selectedOption === correctAnswer) {
      state.totalScore += 1;
    }
  }

  els.nextBtn.disabled = false;
}

function isFinished() {
  return state.currentIndex >= state.questions.length;
}

function nextQuestion() {
  if (!state.answered) return;

  state.currentIndex += 1;

  if (state.currentIndex >= state.questions.length) {
    showResult();
    return;
  }

  renderQuestion();
}

function showResult() {
  els.quizCard.classList.add('hidden');
  els.resultCard.classList.remove('hidden');

  if (state.category === 'duel') {
    const p1 = state.scores[1];
    const p2 = state.scores[2];
    let winner = 'Durrang';

    if (p1 > p2) winner = 'Player 1 yutdi!';
    else if (p2 > p1) winner = 'Player 2 yutdi!';
    else winner = 'Durang!';

    els.resultTitle.textContent = winner;
    els.resultText.textContent = `Player 1: ${p1} / ${state.questions.length} • Player 2: ${p2} / ${state.questions.length}`;
    return;
  }

  const score = state.totalScore;
  const total = state.questions.length;
  const percent = Math.round((score / total) * 100);

  els.resultTitle.textContent = `${score} / ${total}`;

  if (percent >= 80) {
    els.resultText.textContent = `Ajoyib! Siz ${percent}% ball to‘pladingiz.`;
  } else if (percent >= 60) {
    els.resultText.textContent = `Yaxshi! Siz ${percent}% ball to‘pladingiz.`;
  } else if (percent >= 40) {
    els.resultText.textContent = `Yaxshi harakat! Siz ${percent}% ball to‘pladingiz.`;
  } else {
    els.resultText.textContent = `Ko‘proq mashq qiling! Siz ${percent}% ball to‘pladingiz.`;
  }
}

function resetAll() {
  state.currentIndex = 0;
  state.totalScore = 0;
  state.scores = { 1: 0, 2: 0 };
  state.currentPlayer = 1;
  setActiveCategory('iq');
}

els.nextBtn.addEventListener('click', nextQuestion);
els.restartBtn.addEventListener('click', () => {
  setActiveCategory(state.category);
});
els.resetAllBtn.addEventListener('click', resetAll);
document.querySelectorAll('.category-btn').forEach((button) => {
  button.addEventListener('click', () => setActiveCategory(button.dataset.category));
});

setActiveCategory('iq');
