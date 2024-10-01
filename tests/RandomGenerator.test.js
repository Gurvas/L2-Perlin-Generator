import { RandomGenerator } from "../src/RandomGenerator.js"

test('should generate random numbers', () => {
  const generator = new RandomGenerator()
  const result = generator.generateRandomDecimal()
  expect(typeof result).toBe('number')
})
