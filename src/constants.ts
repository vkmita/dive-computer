// Source    RQ
// -------------
// Schreiner 0.8
// US Navy   0.9
// Buhlmann  1.0
// schreiner's RQ is the most conservative
const RESPIRATORY_QUOTIENT = 0.9;

// American standard, average atmospheric pressure at sea level (bar)
const ATA = 1.01325;

// The meters betweem deco stops / steps
const DECO_STEP_SIZE = 3;

// U.S. Navy and the Journal of Underseaand Hyperbaric Medicine standard
// bar per meter sea water
// 3.28084 / 33.08
const MSW = 0.09917896009;

// constant vapor pressure at 37°C (47 mmHg converted to bar)
const ALVEOLAR_WATER_VAPOR_PRESSURE = 0.0626615233;

// 40 mmHg converted to bar
const ALVEOLAR_C02_PRESSURE = 0.053328956;

// 10 meters per minute (Buhlmann) m/min
const MAX_ASCENT_RATE = 10;

// ascent rate between deco stops m/min
const DECO_ASCENT_RATE = 3;

// end of deco to surface ascent rate m/min
const SURFACE_ASCENT_RATE = 1;

export {
  ALVEOLAR_C02_PRESSURE,
  ALVEOLAR_WATER_VAPOR_PRESSURE,
  ATA,
  DECO_ASCENT_RATE,
  DECO_STEP_SIZE,
  MAX_ASCENT_RATE,
  MSW,
  RESPIRATORY_QUOTIENT,
  SURFACE_ASCENT_RATE,
};
