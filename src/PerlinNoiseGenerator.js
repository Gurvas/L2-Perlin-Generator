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
  #randomGenerator

  constructor(seed = Math.random()) {
    this.#seed = seed
    this.#noiseMatrix = new NoiseMatrix()
    this.#gradient = new Gradient(seed)
    this.#interpolation = new Interpolation()
    this.#randomGenerator = new RandomGenerator()
  }
  
  generateNoise() {
    console.log('generating some noise')
    
    this.#noiseMatrix.createMatrix()
  }
	
}
