const calculateQ = rating => {
  return Math.pow(10, rating / 400);
};

export const calculateExpectedScore = (ratingA, ratingB) => {
  const qA = calculateQ(ratingA);
  const qB = calculateQ(ratingB);
  return qA / (qA + qB);
};
