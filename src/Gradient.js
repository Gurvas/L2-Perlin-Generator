export class Gradient {

  #seed

  constructor(seed = Math.random()) {
    this.#seed = seed
  }

  generateGradientFromTwoIntegers(x, y) {
    // If x and y are not integers, throw an error
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw new Error('Both x and y must be integers')
    } else {
      return Math.sin(x * 23.234 + y * 34.94343 + this.#seed) * 23412.5454
    }
  }

  setSeed(newSeed) {
    this.#seed = newSeed
  }
}
