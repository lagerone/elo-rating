import { calculateExpectedScore } from './elo-calculate-expected-score.js';

export const calculateUpdatedRating = (
  kFactor,
  playerRating,
  opponentRating,
  winLoseOrDrawScore
) => {
  return (
    playerRating +
    kFactor *
      (winLoseOrDrawScore -
        calculateExpectedScore(playerRating, opponentRating))
  );
};
