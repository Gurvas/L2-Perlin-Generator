export class RandomGenerator {

  generateRandomInteger(min, max) {
    return Math.floor(this.generateRandomDecimal(min, max))
  }

  generateRandomDecimal(min = 0, max = 1) {
    return Math.random() * (max - min) + min
  }

}
