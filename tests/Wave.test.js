'use strict';
require('chai').should();
import { calculatePeak } from '../src/utils/calculations/peak';
import { calculateSmooth } from '../src/utils/calculations/smooth';
import { calculateStacked } from '../src/utils/calculations/stacked';
import { generateRandomNumber } from '../src/utils/calculations/random';
import { mocks } from "./mocks";

describe('Utility Functions', function () {
  describe('Random Number Generator', function () {
    it('should generate the same random number between 0 and 1 given seed', () => {
      generateRandomNumber(2).should.equal(0.7342509443406016);
      generateRandomNumber(2).should.equal(0.7342509443406016);
      generateRandomNumber(4).should.equal(0.9236361971125007);
      generateRandomNumber(4).should.equal(0.9236361971125007);
    });
  });
});

describe('WaveComponent', function () {
  describe('PeakVariant', function () {
    it('should return a string in dataString attribute of return', () => {
      calculatePeak().dataString.should.be.a('string');
    });
    it('should return correctly calculated data string with default values, if no passed in arguments', () => {
      calculatePeak(mocks.peak.test1.seed).dataString.should.equal(mocks.peak.test1.result);
    });
    it('should return correctly calculated data string with default values, given different seeds', () => {
      calculatePeak(mocks.peak.test2.seed).dataString.should.equal(mocks.peak.test2.result);
      calculatePeak(mocks.peak.test3.seed).dataString.should.equal(mocks.peak.test3.result);
    });
  });

  describe('SmoothVariant', function () {
    it('should return a string in dataString attribute of return', () => {
      calculateSmooth().dataString.should.be.a('string');
    });
    it('should return correctly calculated data string with default values, if no passed in arguments', () => {
      calculateSmooth(mocks.smooth.test1.seed).dataString.should.equal(mocks.smooth.test1.result);
    });
    it('should return correctly calculated data string with default values, given different seeds', () => {
      calculateSmooth(mocks.smooth.test2.seed).dataString.should.equal(mocks.smooth.test2.result);
      calculateSmooth(mocks.smooth.test3.seed).dataString.should.equal(mocks.smooth.test3.result);
    });
  });

  describe('StackedVariant', function () {
    it('should return a string in dataString attribute of return', () => {
      calculateStacked().dataString.should.be.a('string');
    });
    it('should return correctly calculated data string with default values, if no passed in arguments', () => {
      calculateStacked(mocks.stacked.test1.seed).dataString.should.equal(mocks.stacked.test1.result);
    });
    it('should return correctly calculated data string with default values, given different seeds', () => {
      calculateStacked(mocks.stacked.test2.seed).dataString.should.equal(mocks.stacked.test2.result);
      calculateStacked(mocks.stacked.test3.seed).dataString.should.equal(mocks.stacked.test3.result);
    });
  });
});