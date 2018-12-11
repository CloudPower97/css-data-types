import percentage from 'types/percentage'

const percentageRegex = new RegExp(percentage)

describe('The <percentage> data type consists of a <number> followed by the percentage sign (%)', () => {
  it('0%', () => {
    expect(percentageRegex.test('0%')).toBeTruthy()
  })

  it('100%', () => {
    expect(percentageRegex.test('100%')).toBeTruthy()
  })

  describe('Optionally, it may be preceded by a single + or - sign', () => {
    it('+20%', () => {
      expect(percentageRegex.test('+20%')).toBeTruthy()
    })

    it('-50%', () => {
      expect(percentageRegex.test('-50%')).toBeTruthy()
    })
  })
})

describe('As with all CSS dimensions, there is no space between the symbol and the number', () => {
  it('hence `50 %` should be rejected', () => {
    expect(percentageRegex.test('50 %')).toBeFalsy()
  })
})
