import { randomNumber } from '../fixtures/example'

describe('Random number comming from JS fixutre', () => {
  it('expects random number to be between 0 and 99', () => {
    expect(randomNumber).to.be.within(0, 99)
  })
})