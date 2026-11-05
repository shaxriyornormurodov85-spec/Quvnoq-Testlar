/* Prevents basic questions leaking into the 9–11 grade hard-question pool. */
(function () {
  const previousGetQuestions = window.getQuestionsForDifficulty;
  if (typeof previousGetQuestions !== 'function') return;

  window.getQuestionsForDifficulty = function getGradeAndDifficultyQuestions() {
    const questions = previousGetQuestions.apply(this, arguments);
    const grade = Number(state.selectedGrade);

    if (grade >= 11 && state.selectedDifficulty === 'qiyin') {
      const basicQuestions = new Set(questionBank[state.selectedSubject]?.basic || []);
      const gradeAppropriate = questions.filter((question) => !basicQuestions.has(question));
      return gradeAppropriate.length ? gradeAppropriate : questions;
    }

    return questions;
  };
})();
