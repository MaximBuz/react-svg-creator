// calculates svg data attribute for wave with edgy peaks
export function calculatePeak (
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
  opcacity: number = 0.5
) {
  const equal = width / breaks;
  const data = [`M0 ${balance}`];
  for (let n = 1; n <= breaks; n++) {
    data.push(`L${n * equal} ${balance + (Math.random() - 0.5) * velocity}`);
  }
  return data.join(' ');
}
console.log(calculatePeak());