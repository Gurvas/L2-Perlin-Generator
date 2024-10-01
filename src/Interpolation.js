export class Interpolation {
  
  /**
   * 
   * @param {*} startPoint 
   * @param {*} endPoint 
   * @param {*} interpolationFactor 
   * @returns 
   */
  linearInterpolate2D(startPoint, endPoint, interpolationFactor) {
    const x = startPoint.x + interpolationFactor * (endPoint.x - startPoint.x)
    const y = startPoint.y + interpolationFactor * (endPoint.y - startPoint.y)
    return { x, y }
  }
}
