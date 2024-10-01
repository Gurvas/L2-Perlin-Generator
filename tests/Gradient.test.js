import {Gradient} from '../src/Gradient.js'

test('should generate a gradient from two integers', () => {
  const gradient = new Gradient()
  gradient.setSeed(0.5)
  const result = gradient.generateGradientFromTwoIntegers(1, 2)
  expect(typeof result).toBe('number')
})

test('should throw an error if x or y are not integers', () => {
  const gradient = new Gradient()
  expect(() => gradient.generateGradientFromTwoIntegers(1.5, 2)).toThrow()
})