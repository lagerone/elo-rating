(() => {
  const getK = () =>
    parseInt(document.querySelector('input[name="k"]').value, 10);

  const calculateQ = rating => {
    return Math.pow(10, rating / 400);
  };

  const calculateExpectedScore = (ratingA, ratingB) => {
    const qA = calculateQ(ratingA);
    const qB = calculateQ(ratingB);
    return qA / (qA + qB);
  };

  const calculateUpdatedRating = (
    playerRating,
    opponentRating,
    winLoseOrDrawScore
  ) => {
    const k = getK();
    return (
      playerRating +
      k *
        (winLoseOrDrawScore -
          calculateExpectedScore(playerRating, opponentRating))
    );
  };

  const renderRating = (oldRating, newRating) => {
    const diff = newRating - oldRating;
    return `${newRating} (${diff > 0 ? '+' : ''}${diff})`;
  };

  document.getElementsByTagName('form')[0].addEventListener('submit', event => {
    event.preventDefault();
    const winnersRating = parseInt(
      event.target.querySelector('input[name="ratingWinner"]').value,
      10
    );
    const losersRating = parseInt(
      event.target.querySelector('input[name="ratingLoser"]').value,
      10
    );
    const isDraw = event.target.querySelector('input[name="isDraw"]').checked;
    const winnersUpdatedRating = calculateUpdatedRating(
      winnersRating,
      losersRating,
      isDraw ? 0.5 : 1
    );
    const losersUpdatedRating = calculateUpdatedRating(
      losersRating,
      winnersRating,
      isDraw ? 0.5 : 0
    );
    document.getElementById('result').innerHTML = `
        <h2>Result</h2>
        <p>Winners updated rating: ${renderRating(
          winnersRating,
          Math.round(winnersUpdatedRating)
        )}</p>
        <p>Losers updated rating: ${renderRating(
          losersRating,
          Math.round(losersUpdatedRating)
        )}</p>
      `;
  });
})();
