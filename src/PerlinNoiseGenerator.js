// The Perlin Noise Generator Class file

import { NoiseMatrix } from './NoiseMatrix.js'
import { Gradient } from './Gradient.js'
import { Interpolation } from './Interpolation.js'
import { RandomGenerator } from './RandomGenerator.js'


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
    
    this.#noiseMatrix.createMatrix()
  }
	
}
