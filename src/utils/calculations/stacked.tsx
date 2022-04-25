// calculates svg data attribute for wave with smooth peaks
import { generateRandomNumber } from './random';

export function calculateStacked (
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
  const equal = width / breaks;
  const waves = [];
  for (let stack = 0; stack <= stacks; stack++) {
    const data = [`M0 ${balance + stack * distance * (stack * distance)}`];
    for (let n = 1; n <= breaks; n++) {
      const random = (generateRandomNumber(seed+stack+n) - 0.5) * velocity;
      const smooth = {
        handle: {
          x: random < 0 ? (n - 1) * equal + equal / 2 - random : (n - 1) * equal + equal / 2 + random,
          y: balance + random + stack * distance * (stack * distance),
        },
        x: n * equal,
        y: balance + (generateRandomNumber(seed+stack+2*n) - 0.5) * velocity + stack * distance * (stack * distance),
      };
      data.push(`S${smooth.handle.x} ${smooth.handle.y} ${smooth.x} ${smooth.y}`);
    }
    data.push(`L${width} ${height}`, `L0 ${height}Z`);
    waves.push(data.join(" "));
  }
  return {
    dataString: waves.join(' ')
  };
}