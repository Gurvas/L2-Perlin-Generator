// The Perlin Noise Generator Class file

import { NoiseMatrix } from './NoiseMatrix.js'
import { Gradient } from './Gradient.js'
import { Interpolation } from './Interpolation.js'


export class PerlinNoiseGenerator {
  #seed
  #noiseMatrix
  #gradient
  #interpolation

  constructor(seed = Math.random()) {
    this.#seed = seed
    this.#noiseMatrix = new NoiseMatrix()
    this.#gradient = new Gradient() 
    this.#interpolation = new Interpolation()
  }
  
  generateNoise(height, width) {
    console.log('generating some noise')
    
    const matrix = this.#noiseMatrix.createMatrix()
    const matrix2D = this.#noiseMatrix.getMatrixAs2DArray()

    const gradients = this.#generateGradients(height, width)
  }

  setMatrixDimensions(height, width) {
    this.#noiseMatrix.setHeightAndWidth(height, width)
  }

  setSeedValue(seed) {
    this.#seed = seed
    this.#gradient.setSeed(seed)
  }
	
  #generateGradients(height, width) {
    const gradients = []
    for (let y = 0; y < height; y++) {
      const row = []
      for (let x = 0; x < width; x++) {
        row.push(this.#gradient.generateGradientFromTwoIntegers(x, y))
      }
      gradients.push(row)
    }
    return gradients
  }
}
