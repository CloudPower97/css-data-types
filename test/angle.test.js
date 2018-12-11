import angle from 'types/angle'

describe('The <angle> data type consists of a <number> followed by one of the units listed below:', () => {
  const angleRegex = new RegExp(angle)

  describe('deg, which represents an angle in degrees', () => {
    it('such as 0deg', () => {
      expect(angleRegex.test('0deg')).toBeTruthy()
    })

    it('such as 14.23deg', () => {
      expect(angleRegex.test('14.23deg')).toBeTruthy()
    })

    it('such as 90deg', () => {
      expect(angleRegex.test('90deg')).toBeTruthy()
    })

    it('such as 360deg', () => {
      expect(angleRegex.test('360deg')).toBeTruthy()
    })
  })

  describe('grad, which represents an angle in gradians', () => {
    it('such as 0grad', () => {
      expect(angleRegex.test('0grad')).toBeTruthy()
    })

    it('such as 38.8grad', () => {
      expect(angleRegex.test('38.8grad')).toBeTruthy()
    })

    it('such as 100grad', () => {
      expect(angleRegex.test('100grad')).toBeTruthy()
    })

    it('such as 400grad', () => {
      expect(angleRegex.test('400grad')).toBeTruthy()
    })
  })

  describe('rad, which represents an angle in radians', () => {
    it('such as 0rad', () => {
      expect(angleRegex.test('0grad')).toBeTruthy()
    })

    it('such as 1.0708rad', () => {
      expect(angleRegex.test('1.0708rad')).toBeTruthy()
    })

    it('such as 6.2832rad', () => {
      expect(angleRegex.test('6.2832rad')).toBeTruthy()
    })
  })

  describe('turn, which represents an angle in a number of turns', () => {
    it('such as 0turn', () => {
      expect(angleRegex.test('0turn')).toBeTruthy()
    })

    it('such as 0.25turn', () => {
      expect(angleRegex.test('0.25turn')).toBeTruthy()
    })

    it('such as 1.2turn', () => {
      expect(angleRegex.test('1.2turn')).toBeTruthy()
    })
  })
})
