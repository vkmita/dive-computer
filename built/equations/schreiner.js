'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// Schreiner equation for saturation level
// Pt(t) = pAlv + R * (t - 1/k) - (pAlv - p0 - R/k) * e^(-k * t)
//
// returns pressure in tissue compartment
//
// p0: initial pressure of inert gas in tissue (bar)
// pAlv: initial pressure of inert gas in the lungs (bar)
// t: interval time (minutes)
// R: rate of pressure change (bar/minute)
// k: gas decay constant (log(2) / halfTime)
exports.default = function (_a) {
  var p0 = _a.p0,
    pAlv = _a.pAlv,
    R = _a.R,
    k = _a.k,
    t = _a.t;
  return pAlv + R * (t - 1 / k) - (pAlv - p0 - R / k) * Math.exp(-k * t);
};
// The Shreiner equation solved for time with R being zero (no pressure change)
// t = -ln(( Pt(t) - pAlv ) / (-pAlv + p0)) / k
exports.solvedForTime = function (_a) {
  var ptt = _a.ptt,
    p0 = _a.p0,
    pAlv = _a.pAlv,
    k = _a.k;
  return -Math.log((ptt - pAlv) / (-pAlv + p0)) / k;
};
