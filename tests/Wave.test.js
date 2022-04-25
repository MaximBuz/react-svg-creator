'use strict';
require('chai').should();
import {calculatePeak} from '../src/utils/calculations/peak';

describe('WaveComponent', function () {
  describe('PeakVariant', function () {
    it('should return a string', () => {
      calculatePeak().should.be.a('string')
    })
  })
})