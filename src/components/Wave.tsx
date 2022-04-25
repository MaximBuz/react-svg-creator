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