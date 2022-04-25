import React from 'react';

export interface IWaveProps {};

export const Wave: React.FunctionComponent<IWaveProps> = props => {
  const width = 540;
  const height = 960;
  const balance = 500;
  const velocity = 50;
  const breaks = 2;
  const stacks = 4;
  const distance = 5;
  const equal = width / breaks;
  const startWaveColor = '#0113b2';
  const stopWaveColor = '#050e54';
  const shadowX = 0;
  const shadowY = 5;
  const shadowSD = 15;
  const shadowOpacity = 0.5;
 
  // calculate peak
  //  const data = [`M0 ${balance}`];
  // for (let n = 1; n <= breaks; n++) {
  //  data.push(`L${n * equal} ${balance + (Math.random() - 0.5) * velocity}`);
  // }
 
  // calculate wave
  //  const data = [`M0 ${balance}`];
  //  for (let n = 1; n <= breaks; n++) {
  //   const random = (Math.random() - 0.5) * velocity;
  //   const smooth = {
  //    handle: {
  //     x: random < 0 ? (n - 1) * equal + equal / 2 - random : (n - 1) * equal + equal / 2 + random,
  //     y: balance + random,
  //    },
  //    x: n * equal,
  //    y: balance + (Math.random() - 0.5) * velocity,
  //   };
  //   data.push(`S${smooth.handle.x} ${smooth.handle.y} ${smooth.x} ${smooth.y}`);
  //  }
 
  // filling everything beneath
  // data.push(`L${width} ${height}`, `L0 ${height}Z`);
 
  // calculate stacked wave
  const waves = [];
  for (let stack = 0; stack <= stacks; stack++) {
    const data = [`M0 ${balance + stack * distance * (stack * distance)}`];
 
    for (let n = 1; n <= breaks; n++) {
      const random = (Math.random() - 0.5) * velocity;
      const smooth = {
        handle: {
          x: random < 0 ? (n - 1) * equal + equal / 2 - random : (n - 1) * equal + equal / 2 + random,
          y: balance + random + stack * distance * (stack * distance),
        },
        x: n * equal,
        y: balance + (Math.random() - 0.5) * velocity + stack * distance * (stack * distance),
      };
      data.push(`S${smooth.handle.x} ${smooth.handle.y} ${smooth.x} ${smooth.y}`);
    }
    data.push(`L${width} ${height}`, `L0 ${height}Z`);
    waves.push(data);
  }
 
  // calculate color changes
  function averageColor (color1, color2) {
    var c = '#';
    for (var i = 0; i < 3; i++) {
      var sub1 = color1.substring(1 + 2 * i, 3 + 2 * i);
      var sub2 = color2.substring(1 + 2 * i, 3 + 2 * i);
      var v1 = parseInt(sub1, 16);
      var v2 = parseInt(sub2, 16);
      var v = Math.floor((v1 + v2) / 2);
      var sub = v.toString(16).toUpperCase();
      var padsub = ('0' + sub).slice(-2);
      c += padsub;
    }
    return c;
  }
  
  return (
    <>
      <svg viewBox={`0 0 ${width} ${height}`} height='100vh'>
        <rect x='0' y='0' width='540' height='960' fill='lightblue'></rect>
        <linearGradient id='linear-gradient'>
          <stop offset='0%' stopColor={startWaveColor} stopOpacity='100%' />
          <stop offset='100%' stopColor={stopWaveColor} stopOpacity='100%' />
        </linearGradient>
        <filter id='shadow'>
          <feDropShadow
            dx={shadowX}
            dy={shadowY}
            stdDeviation={shadowSD}
            floodColor='black'
            floodOpacity={shadowOpacity}
          />
        </filter>
        {/* Single wave */}
        {/* <path
       d={data.join(' ')}
       fill='none'
       strokeLinecap='round'
       style={{ transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s', fill: 'url(#linear-gradient)' }}
      ></path> */}
  
        {/* Stacked waves */}
        {waves.map((wave, index) => (
          <path
            key={index}
            d={wave.join(' ')}
            fill='none'
            strokeLinecap='round'
            filter='url(#shadow)'
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: 'url(#linear-gradient)',
            }}
          ></path>
        ))}
      </svg>
    </>
  );
};