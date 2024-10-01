import { Interpolation } from '../src/Interpolation'

test('should connect two values through a factor', () => {
  const interpolator = new Interpolation
  const startPoint = { x: 2, y: 3 }
  const endPoint = { x: 5, y: 7 }
  const interpolationFactor = 0.5
  const result = interpolator.linearInterpolate2D(startPoint, endPoint, interpolationFactor)
  expect(result).toEqual({ x: 3.5, y:5 })
})
