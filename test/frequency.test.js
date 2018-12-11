import frequency from 'types/frequency'

const frequencyRegex = new RegExp(frequency)

describe('The <frequency> data type consists of a <number> followed by one of the units listed below:', () => {
  describe('Hz', () => {
    it('0Hz', () => {
      expect(frequencyRegex.test('0Hz')).toBeTruthy()
    })

    it('+0Hz', () => {
      expect(frequencyRegex.test('0Hz')).toBeTruthy()
    })

    it('-0Hz', () => {
      expect(frequencyRegex.test('0Hz')).toBeTruthy()
    })

    it('4.3Hz', () => {
      expect(frequencyRegex.test('4.3Hz')).toBeTruthy()
    })

    it('12Hz', () => {
      expect(frequencyRegex.test('12Hz')).toBeTruthy()
    })
  })

  describe('kHz', () => {
    it('0kHz', () => {
      expect(frequencyRegex.test('0kHz')).toBeTruthy()
    })

    it('1.5kHz', () => {
      expect(frequencyRegex.test('1.5kHz')).toBeTruthy()
    })

    it('10kHz', () => {
      expect(frequencyRegex.test('10kHz')).toBeTruthy()
    })
  })
})

describe('Invalid <frequency> values should be rejected', () => {
  it('12.0', () => expect(frequencyRegex.test(12.0)).toBeFalsy())

  it('7 Hz', () => {
    expect(frequencyRegex.test('7 Hz')).toBeFalsy()
  })

  it('0', () => {
    expect(frequencyRegex.test('0')).toBeFalsy()
  })
})
