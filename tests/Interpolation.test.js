import { Interpolation } from '../src/Interpolation'
import { jest } from '@jest/globals'

test('should connect two values through a factor', () => {
  const interpolator = new Interpolation
  const result = interpolator.linearInterpolate(2, 5, 2)
  expect(typeof result).toBe('number')
})
