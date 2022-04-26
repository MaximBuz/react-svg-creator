"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useMeasure_1 = __importDefault(require("../utils/calculations/useMeasure"));
const stacked_1 = require("../utils/calculations/stacked");
const Wave = (props) => {
    const { ref, size } = (0, useMeasure_1.default)();
    const startWaveColor = '#0113b2';
    const stopWaveColor = '#050e54';
    const shadowX = 0;
    const shadowY = 5;
    const shadowSD = 15;
    const shadowOpacity = 0.5;
    const wavesData = (0, stacked_1.calculateStacked)(1, size.width, size.height, 0.5);
    return (react_1.default.createElement("div", { ref: ref, style: { width: '100%', height: '100%' } },
        react_1.default.createElement("svg", { viewBox: `0 0 ${size.width} ${size.height}`, height: "100%", width: "100%" },
            react_1.default.createElement("rect", { x: "0", y: "0", width: size.width, height: size.height, fill: "lightgreen" }),
            react_1.default.createElement("linearGradient", { id: "linear-gradient" },
                react_1.default.createElement("stop", { offset: "0%", stopColor: startWaveColor, stopOpacity: "100%" }),
                react_1.default.createElement("stop", { offset: "100%", stopColor: stopWaveColor, stopOpacity: "100%" })),
            react_1.default.createElement("filter", { id: "shadow" },
                react_1.default.createElement("feDropShadow", { dx: shadowX, dy: shadowY, stdDeviation: shadowSD, floodColor: "black", floodOpacity: shadowOpacity })),
            wavesData.map((wave, index) => (react_1.default.createElement("path", { key: index, d: wave, fill: "none", strokeLinecap: "round", filter: "url(#shadow)", style: {
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
                    fill: 'url(#linear-gradient)',
                } }))))));
};
exports.default = Wave;
//# sourceMappingURL=Wave.js.map