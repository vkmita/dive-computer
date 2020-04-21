import type GasCompartment from './GasCompartment';
import { ascentCeiling } from './equations/ceiling';
import schreiner, {
  solvedForTime as schreinerSolvedForTime,
} from './equations/schreiner';
import noDecompressionLimit from './equations/noDecompressionLimit';
import {
  alveolarPressure,
  ambientPressure,
  rateOfPressureChange,
} from './equations/pressure';
import GasMix from './Gas';
import { MAX_ASCENT_RATE } from './constants';

// associated with a Sample
export default class SampleTissue {
  // startTissuePressure: number; // bar
  // gasRatio: number; // 0 - 1, ex: .79
  // startDepth: number; // meters
  // endDepth: number; // meters
  // intervalTime: number; // minutes
  depth: number;
  gasMix: GasMix;
  gasCompartment: GasCompartment; // GasCompartment
  pressure: number;

  constructor({
    startTissuePressure, // bar
    gasMix, // 0 - 1, ex: .79
    startDepth, // meters
    endDepth, // meters
    intervalTime, // minutes
    gasCompartment, // GasCompartment
    pressure,
  }: {
    startTissuePressure?: number; // bar
    gasMix: GasMix;
    startDepth?: number; // meters
    endDepth: number; // meters
    intervalTime?: number; // minutes
    gasCompartment: GasCompartment; // GasCompartment)
    pressure?: number;
  }) {
    Object.assign(this, { depth: endDepth, gasMix, gasCompartment, pressure });

    if (!pressure) {
      const { gas } = gasCompartment;
      const R = gasMix.R({ startDepth, endDepth, time: intervalTime, gas });
      // meters / minute
      const startAlviolarPressure = alveolarPressure({
        ambientPressure: ambientPressure(startDepth),
        gasRatio: gasMix[gasCompartment.gas],
      });

      this.pressure = schreiner({
        pAlv: startAlviolarPressure,
        R,
        p0: startTissuePressure,
        k: gasCompartment.k,
        t: intervalTime,
      });
    }
  }

  noStopTime() {
    const { a, b, k, gas } = this.gasCompartment;
    const gasRatio = this.gasMix[gas];

    const surfacePressure = ambientPressure(0);
    const depthPressure = ambientPressure(this.depth);

    // alveolar pressure at the surface
    const pAlv0 = alveolarPressure({
      ambientPressure: depthPressure,
      gasRatio,
    });
    // time needed to ascend to the surface
    const tAsc = this.depth / MAX_ASCENT_RATE;

    // the no decompression limit equation
    // max partial pressure of gas the tissue can have at the current depth
    const maxPressureAtDepth = noDecompressionLimit({
      k,
      m0: a + surfacePressure / b,
      R:
        rateOfPressureChange({
          startDepth: this.depth,
          endDepth: 0,
          time: tAsc,
        }) * gasRatio,
      pAlv0,
      tAsc: this.depth / MAX_ASCENT_RATE,
    });

    // we never hit a no stop time
    if (maxPressureAtDepth > pAlv0 * gasRatio) return 99;

    const noStopTime = schreinerSolvedForTime({
      k,
      ptt: maxPressureAtDepth,
      p0: this.pressure,
      pAlv0,
    });

    return noStopTime < 0 ? 0 : noStopTime;
  }

  ascentCeiling() {
    const { a, b } = this.gasCompartment;
    const pComp = this.pressure;

    return ascentCeiling({ a, b, pComp });
  }
}
