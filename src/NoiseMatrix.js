import { RandomGenerator } from "./RandomGenerator"

export class NoiseMatrix {
  #height
  #width

  createMatrix() {
    if (!Number.isInteger(this.#height) || !Number.isInteger(this.#width)) {
      throw new Error('No width or height selected (should be integers)')
    }
    const matrix = []
    for (let i = 0; i < this.width; i++) {
      matrix.push(this.createMatrixRow())
    }
    return matrix
  }

  setHeightAndWidth(height, width) {
    this.#height = height
    this.#width = width
  }

  createMatrixRow() {
    const row = []
    for (let i = 0; i < this.#height; i++) {
      row.push(this.#generateRandomValue())
    }
    return row
  }

  #generateRandomValue() {
    const randomizer = new RandomGenerator()
    return randomizer.generateRandomDecimal()
  }

}
