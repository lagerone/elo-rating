import { calculateExpectedScore } from './elo-calculate-expected-score';

describe('calculateExpectedScore', () => {
  it('should calculate expected score', () => {
    runTest(1613, 1609, 0.51);
    runTest(1613, 1477, 0.69);
    runTest(1613, 1477, 0.69);
    runTest(1613, 1388, 0.79);
    runTest(1613, 1586, 0.54);
    runTest(1613, 1720, 0.35);

    function runTest(ratingA, ratingB, expectedResult) {
      // Act
      const result = calculateExpectedScore(ratingA, ratingB);

      // Assert
      expect(result).toBeCloseTo(expectedResult);
    }
  });
});
