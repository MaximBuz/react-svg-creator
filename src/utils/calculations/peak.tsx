// calculates svg data attribute for wave with edgy peaks
import { generateRandomNumber } from './random';

export function calculatePeak (
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
  const randomNumber = generateRandomNumber(seed);
  const equal = width / breaks;
  const data = [`M0 ${balance}`];
  for (let n = 1; n <= breaks; n++) {
    data.push(`L${n * equal} ${balance + (randomNumber - 0.5) * velocity}`);
  }
  data.push(`L${width} ${height}`, `L0 ${height}Z`);
  return {
    dataString: data.join(' ')
  };
}