import React from 'react';
import useMeasure from '../utils/calculations/useMeasure';
import { calculateStacked } from '../utils/calculations/stacked';
const Wave = (props) => {
    const [ref, { width, height }] = useMeasure();
    const startWaveColor = '#0113b2';
    const stopWaveColor = '#050e54';
    const shadowX = 0;
    const shadowY = 5;
    const shadowSD = 15;
    const shadowOpacity = 0.5;
    const wavesData = calculateStacked(1, width, height, 0.5);
    return (React.createElement("div", { ref: ref, style: { width: '100%', height: '100%' } },
        React.createElement("svg", { viewBox: `0 0 ${width} ${height}`, height: "100%", width: "100%" },
            React.createElement("rect", { x: "0", y: "0", width: "540", height: "960", fill: "lightblue" }),
            React.createElement("linearGradient", { id: "linear-gradient" },
                React.createElement("stop", { offset: "0%", stopColor: startWaveColor, stopOpacity: "100%" }),
                React.createElement("stop", { offset: "100%", stopColor: stopWaveColor, stopOpacity: "100%" })),
            React.createElement("filter", { id: "shadow" },
                React.createElement("feDropShadow", { dx: shadowX, dy: shadowY, stdDeviation: shadowSD, floodColor: "black", floodOpacity: shadowOpacity })),
            wavesData.map((wave, index) => (React.createElement("path", { key: index, d: wave, fill: "none", strokeLinecap: "round", filter: "url(#shadow)", style: {
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
                    fill: 'url(#linear-gradient)',
                } }))))));
};
export default Wave;
//# sourceMappingURL=Wave.js.map