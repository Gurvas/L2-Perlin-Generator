import { RandomGenerator } from "./RandomGenerator"

export class NoiseMatrix {
  #height
  #width

  createMatrix() {
    if (!Number.isInteger(this.#height) || !Number.isInteger(this.#width)) {
      throw new Error('No width or height selected (should be integers)')
    }
    const matrix = []

  }

  setHeightAndWidth(height, width) {
    this.#height = height
    this.#width = width
  }

  #generateRandomValue() {
    const randomizer = new RandomGenerator()
    return randomizer.generateRandomDecimal()
  }

}
