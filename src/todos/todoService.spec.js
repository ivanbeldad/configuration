require('jest')

describe('Fake test', () => {
  it('Should be ok always', () => {
    expect(true).toBeTruthy()
  })
  it('Should throw error', () => {
    expect(false).toBeTruthy()
  })
})
