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
  
  generateNoise() {
    console.log('generating some noise')
    
    this.#noiseMatrix.setHeightAndWidth(10, 10)
    const matrix = this.#noiseMatrix.createMatrix()
    const matrix2D = this.#noiseMatrix.getMatrixAs2DArray()
  }
	
}
