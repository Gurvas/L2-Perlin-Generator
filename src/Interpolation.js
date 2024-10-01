export class Interpolation {
  
  linearInterpolate(startValue, endValue, interpolationFactor) {
    return startValue + interpolationFactor * (endValue - startValue)
  }
}
