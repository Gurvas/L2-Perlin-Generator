// The Perlin Noise Generator Class file

import { NoiseMatrix } from './NoiseMatrix.js'
import { Gradient } from './Gradient.js'

export class PerlinNoiseGenerator {
  #seed
  #noiseMatrix
  #gradient
  #interpolation
  #randomGenerator

  constructor(seed = Math.random()) {
    this.#seed = seed
    this.#noiseMatrix = new NoiseMatrix()
    this.#gradient = new Gradient(seed)
  }
  
  generateNoise() {
    console.log('generating some noise')
  }
	
}
