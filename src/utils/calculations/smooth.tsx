// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber } from './random';

export function calculateSmooth (
  seed: number = 0,
  width: number = 540,
  height: number = 960,
  balance: number = 500,
  velocity: number = 50,
  breaks: number = 2,
  stacks: number = 4,
  distance: number = 5,
  startWaveColor: string = '#0113b2',
  stopWaveColor: string = '#050e54',
  shadowX: number = 0,
  shadowY: number = 5,
  shadowDeviation: number = 15,
  opcacity: number = 0.5,
) {
  const data = [`M0 ${balance}`];
  const equal = width / breaks;
   for (let n = 1; n <= breaks; n++) {
    const random = (generateRandomNumber(seed+n) - 0.5) * velocity;
    const smooth = {
     handle: {
      x: random < 0 ? (n - 1) * equal + equal / 2 - random : (n - 1) * equal + equal / 2 + random,
      y: balance + random,
     },
     x: n * equal,
     y: balance + (generateRandomNumber(seed+2*n) - 0.5) * velocity,
    };
    data.push(`S${smooth.handle.x} ${smooth.handle.y} ${smooth.x} ${smooth.y}`);
   }
  data.push(`L${width} ${height}`, `L0 ${height}Z`);
  return {
    dataString: data.join(' ')
  };
}