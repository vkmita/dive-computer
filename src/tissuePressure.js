import absolutePressure from './absolutePressure';

// calculates the pressure of a tissue compartment
// given an initial pressure

// using the "Schreiner" equation
// returns the tissue pressure after the dive interval
export default (
  startAlviolarPressure, // bar
  startTissuePressure, // bar
  gasRatio, // 0 - 1, ex: .79
  startDepth, // meters
  endDepth, // meters
  intervalTime, // minutes
  halfTime, // minutes
) => {
  // the "k" in the schreiner equation
  const k = Math.LN2 / halfTime;

  // meters / minute
  const rateOfPressureChange =
    (absolutePressure(endDepth) - absolutePressure(startDepth)) / intervalTime;

  // "R" in the schreiner equation
  const R = rateOfPressureChange * gasRatio;

  // P = Pio + R(t - 1/k) - [Pio - Po - (R/k)]e^-kt
  return (
    startAlviolarPressure +
    R * (intervalTime - 1 / k) -
    (startAlviolarPressure - startTissuePressure - R / k) *
      Math.exp(-k * intervalTime)
  );
};
