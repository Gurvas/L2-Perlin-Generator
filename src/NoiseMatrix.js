import { RandomGenerator } from "./RandomGenerator.js"

export class NoiseMatrix {
  #height
  #width
  #matrix

  createMatrix() {
    if (!Number.isInteger(this.#height) || !Number.isInteger(this.#width)) {
      throw new Error('No width or height selected (should be integers)')
    }
    this.#matrix = []
    const totalElements = this.#height * this.#width
    for (let i = 0; i < totalElements; i++) {
      this.#matrix.push(this.#generateRandomValue())
    }
    return this.#matrix
  }

  setHeightAndWidth(height, width) {
    this.#height = height
    this.#width = width
  }

  getMatrixAs2DArray() {
    const matrix2D = []
    for (let i = 0; i < this.#height; i++) {
      const row = this.#matrix.slice(i * this.#width, (i +1) * this.#width)
      matrix2D.push(row)
    }
    return matrix2D
  }

  #generateRandomValue() {
    const randomizer = new RandomGenerator()
    return randomizer.generateRandomDecimal()
  }

}
