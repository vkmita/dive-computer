import GasCompartment from './GasCompartment';

export type Compartment = { he: GasCompartment, n2: GasCompartment };
type ZHL16B = { [componentNumber: string]: Compartment }

const ZHL16B: ZHL16B = {
  1: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 4.0, a: 1.2599, b: 0.524 }),
    he: new GasCompartment({ gas: 'he', halfTime: 1.51, a: 1.7424, b: 0.4245 }),
  },
  '1b': {
    n2: new GasCompartment({ gas: 'n2', halfTime: 5.0, a: 1.1696, b: 0.5578 }),
    he: new GasCompartment({ gas: 'he', halfTime: 1.88, a: 1.6189, b: 0.477 }),
  },
  2: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 8.0, a: 1.0, b: 0.6514 }),
    he: new GasCompartment({ gas: 'he', halfTime: 3.02, a: 1.383, b: 0.5747 }),
  },
  3: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 12.5, a: 0.8618, b: 0.7222 }),
    he: new GasCompartment({ gas: 'he', halfTime: 4.72, a: 1.1919, b: 0.6527 }),
  },
  4: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 18.5, a: 0.7562, b: 0.7825 }),
    he: new GasCompartment({ gas: 'he', halfTime: 6.99, a: 1.0458, b: 0.7223 }),
  },
  5: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 27.0, a: 0.6491, b: 0.8126 }),
    he: new GasCompartment({ gas: 'he', halfTime: 10.21, a: 0.922, b: 0.7582 }),
  },
  6: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 38.3, a: 0.5316, b: 0.8434 }),
    he: new GasCompartment({ gas: 'he', halfTime: 14.48, a: 0.8205, b: 0.7957 }),
  },
  7: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 54.3, a: 0.4681, b: 0.8693 }),
    he: new GasCompartment({ gas: 'he', halfTime: 20.53, a: 0.7305, b: 0.8279 }),
  },
  8: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 77.0, a: 0.4301, b: 0.891 }),
    he: new GasCompartment({ gas: 'he', halfTime: 29.11, a: 0.6502, b: 0.8553 }),
  },
  9: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 109.0, a: 0.4049, b: 0.9092 }),
    he: new GasCompartment({ gas: 'he', halfTime: 41.2, a: 0.595, b: 0.8757 }),
  },
  10: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 146.0, a: 0.3719, b: 0.9222 }),
    he: new GasCompartment({ gas: 'he', halfTime: 55.19, a: 0.5545, b: 0.8903 }),
  },
  11: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 187.0, a: 0.3447, b: 0.9313 }),
    he: new GasCompartment({ gas: 'he', halfTime: 70.69, a: 0.5333, b: 0.8997 }),
  },
  12: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 239.0, a: 0.3176, b: 0.9403 }),
    he: new GasCompartment({ gas: 'he', halfTime: 90.34, a: 0.5189, b: 0.9073 }),
  },
  13: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 305.0, a: 0.2828, b: 0.9477 }),
    he: new GasCompartment({ gas: 'he', halfTime: 115.29, a: 0.5181, b: 0.9122 }),
  },
  14: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 390.0, a: 0.2716, b: 0.9544 }),
    he: new GasCompartment({ gas: 'he', halfTime: 147.42, a: 0.5176, b: 0.9171 }),
  },
  15: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 498.0, a: 0.2523, b: 0.9602 }),
    he: new GasCompartment({ gas: 'he', halfTime: 188.24, a: 0.5172, b: 0.9217 }),
  },
  16: {
    n2: new GasCompartment({ gas: 'n2', halfTime: 635.0, a: 0.2327, b: 0.9653 }),
    he: new GasCompartment({ gas: 'he', halfTime: 240.03, a: 0.5119, b: 0.9267 }),
  },
};

export default ZHL16B;