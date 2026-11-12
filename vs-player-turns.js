/* VS Player uses the same two-column layout on every device. Both players answer their own question at the same time. */
(function () {
  const renderRoundOriginal = window.renderRound;
  if (typeof renderRoundOriginal !== 'function') return;

  window.renderRound = function renderRoundTwoColumns() {
    return renderRoundOriginal.apply(this, arguments);
  };
})();
