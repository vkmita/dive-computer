// Source    RQ
// -------------
// Schreiner 0.8
// US Navy   0.9
// Buhlmann  1.0
// schreiner's RQ is the most conservative
const RESPIRATORY_QUOTIENT: number = 0.9;

// American standard, average atmospheric pressure at sea level (bar)
const ATA: number = 1.01325;

// The meters betweem deco stops / steps
const DECO_STEP_SIZE: number = 3;

// U.S. Navy and the Journal of Underseaand Hyperbaric Medicine standard
// bar per meter sea water
// 3.28084 / 33.08
const MSW: number = 0.09917896009;

// constant vapor pressure at 37°C (47 mmHg converted to bar)
const ALVEOLAR_WATER_VAPOR_PRESSURE: number = 0.0626615233;

// 40 mmHg converted to bar
const ALVEOLAR_C02_PRESSURE: number = 0.053328956;

// 10 meters per minute (buhlmann)
const MAX_ASCENT_RATE: number = 10;

export {
  ALVEOLAR_C02_PRESSURE,
  ALVEOLAR_WATER_VAPOR_PRESSURE,
  ATA,
  DECO_STEP_SIZE,
  MAX_ASCENT_RATE,
  MSW,
  RESPIRATORY_QUOTIENT,
};