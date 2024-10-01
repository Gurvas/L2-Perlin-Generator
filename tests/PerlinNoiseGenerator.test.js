import { PerlinNoiseGenerator } from '../src/PerlinNoiseGenerator.js'
import { jest } from '@jest/globals'

test('should generate noise', () => {
  const generator = new PerlinNoiseGenerator()
  console.log = jest.fn()
  generator.setMatrixDimensions(10, 10)
  generator.generateNoise()
  expect(console.log).toHaveBeenCalledWith('generating some noise')
})
