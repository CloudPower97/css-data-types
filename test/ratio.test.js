import ratio from 'types/ratio'

const ratioRegex = new RegExp(ratio)

describe("The <ratio> data type consists of a strictly positive <integer> followed by a forward slash ('/', Unicode U+002F SOLIDUS) and a second strictly positive <integer>.", () => {
  it('4/3', () => {
    expect(ratioRegex.test('4/3')).toBeTruthy()
  })

  it('16/9', () => {
    expect(ratioRegex.test('16/9')).toBeTruthy()
  })

  it('185/100', () => {
    expect(ratioRegex.test('185/100')).toBeTruthy()
  })

  it('239/100', () => {
    expect(ratioRegex.test('239/100')).toBeTruthy()
  })

  describe('Spaces before and after the slash are optional', () => {
    it('4 /3', () => {
      expect(ratioRegex.test('4 /3')).toBeTruthy()
    })

    it('16/ 9', () => {
      expect(ratioRegex.test('16/ 9')).toBeTruthy()
    })

    it('185 / 100', () => {
      expect(ratioRegex.test('185 / 100')).toBeTruthy()
    })
  })
})
