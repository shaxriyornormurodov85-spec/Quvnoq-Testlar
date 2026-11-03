/* Restores the subject → grade → question count → mode → difficulty flow
   expected by index.html while reusing the existing question bank/game logic. */

// The original script was written for an older HTML layout. Extend its existing
// state and UI references so the current screens and controls are available.
state.selectedGrade = null;
state.selectedCount = null;
ui.screens.grade = document.getElementById('gradeScreen');
ui.screens.count = document.getElementById('countScreen');
ui.continueToGrade = document.getElementById('continueToGrade');
ui.gradeGrid = document.getElementById('gradeGrid');
ui.continueToCount = document.getElementById('continueToCount');
ui.countGrid = document.getElementById('countGrid');
ui.continueToDifficulty = document.getElementById('continueToDifficulty');

function clearSelections() {
  [ui.subjectGrid, ui.gradeGrid, ui.countGrid, ui.modeGrid, ui.difficultyGrid]
    .forEach((grid) => {
      if (!grid) return;
      grid.querySelectorAll('.choice-btn').forEach((button) => {
        button.classList.remove('selected');
      });
    });
}

function resetCurrentFlow() {
  state.selectedSubject = null;
  state.selectedGrade = null;
  state.selectedCount = null;
  state.selectedMode = null;
  state.selectedDifficulty = null;
  state.questions = [];
  state.round = 0;
  state.scores = { p1: 0, p2: 0 };
  state.answered = { p1: false, p2: false };
  state.roundQuestions = { p1: null, p2: null };
  clearTimer();
  clearSelections();

  ui.statusText.textContent = 'Fan tanlang';
  ui.continueToGrade.disabled = true;
  ui.continueToCount.disabled = true;
  ui.continueToMode.disabled = true;
  ui.continueToDifficulty.disabled = true;
}

function markSelected(grid, dataKey, value) {
  grid.querySelectorAll('.choice-btn').forEach((button) => {
    button.classList.toggle('selected', button.dataset[dataKey] === String(value));
  });
}

function startSelectedGame() {
  if (!state.selectedSubject || !state.selectedGrade || !state.selectedCount ||
      !state.selectedMode || !state.selectedDifficulty) return;

  const pool = shuffle(getQuestionsForDifficulty());
  state.questions = pool.slice(0, Math.min(state.selectedCount, pool.length));
  state.round = 0;
  state.scores = { p1: 0, p2: 0 };
  state.answered = { p1: false, p2: false };
  state.roundQuestions = { p1: null, p2: null };

  ui.subjectLabel.textContent = getSubjectLabel(state.selectedSubject);
  ui.statusText.textContent = `${getSubjectLabel(state.selectedSubject)} • ${state.selectedGrade}-sinf • ${state.selectedMode === 'ai' ? 'VS AI' : 'VS Player'} • ${state.selectedDifficulty}`;
  showScreen('game');
  renderRound();
}

// Capture these clicks before the legacy listeners can run. Other game clicks
// (answer options, for example) continue to use the original game logic.
document.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;

  const stopLegacyHandler = () => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  };

  if (button.closest('#subjectGrid') && button.dataset.subject) {
    stopLegacyHandler();
    state.selectedSubject = button.dataset.subject;
    markSelected(ui.subjectGrid, 'subject', state.selectedSubject);
    ui.continueToGrade.disabled = false;
    ui.statusText.textContent = `Fan: ${getSubjectLabel(state.selectedSubject)}`;
    return;
  }

  if (button.id === 'continueToGrade') {
    stopLegacyHandler();
    if (!state.selectedSubject) return;
    showScreen('grade');
    ui.statusText.textContent = `${getSubjectLabel(state.selectedSubject)} • sinfni tanlang`;
    return;
  }

  if (button.closest('#gradeGrid') && button.dataset.grade) {
    stopLegacyHandler();
    state.selectedGrade = button.dataset.grade;
    markSelected(ui.gradeGrid, 'grade', state.selectedGrade);
    ui.continueToCount.disabled = false;
    ui.statusText.textContent = `${getSubjectLabel(state.selectedSubject)} • ${state.selectedGrade}-sinf darajasi`;
    return;
  }

  if (button.id === 'continueToCount') {
    stopLegacyHandler();
    if (!state.selectedGrade) return;
    showScreen('count');
    ui.statusText.textContent = 'Savollar sonini tanlang';
    return;
  }

  if (button.closest('#countGrid') && button.dataset.count) {
    stopLegacyHandler();
    state.selectedCount = Number(button.dataset.count);
    markSelected(ui.countGrid, 'count', state.selectedCount);
    ui.continueToMode.disabled = false;
    ui.statusText.textContent = `${state.selectedCount} ta savol tanlandi`;
    return;
  }

  if (button.id === 'continueToMode') {
    stopLegacyHandler();
    if (!state.selectedCount) return;
    showScreen('mode');
    ui.statusText.textContent = `${state.selectedCount} ta savol • o'yin turini tanlang`;
    return;
  }

  if (button.closest('#modeGrid') && button.dataset.mode) {
    stopLegacyHandler();
    state.selectedMode = button.dataset.mode;
    markSelected(ui.modeGrid, 'mode', state.selectedMode);
    ui.continueToDifficulty.disabled = false;
    ui.statusText.textContent = `${getSubjectLabel(state.selectedSubject)} • ${state.selectedMode === 'ai' ? 'VS AI' : 'VS Player'}`;
    return;
  }

  if (button.id === 'continueToDifficulty') {
    stopLegacyHandler();
    if (!state.selectedMode) return;
    showScreen('difficulty');
    ui.statusText.textContent = 'Qiyinchilik darajasini tanlang';
    return;
  }

  if (button.closest('#difficultyGrid') && button.dataset.difficulty) {
    stopLegacyHandler();
    state.selectedDifficulty = button.dataset.difficulty;
    markSelected(ui.difficultyGrid, 'difficulty', state.selectedDifficulty);
    startSelectedGame();
    return;
  }

  if (button.id === 'restartBtn') {
    stopLegacyHandler();
    resetCurrentFlow();
    showScreen('start');
  }
}, true);

resetCurrentFlow();
showScreen('start');
