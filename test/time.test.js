import time from 'types/time'

const timeRegex = new RegExp(time)

describe('The <time> data type consists of a​ ​​​​​​<number> followed by one of the units listed below:', () => {
  describe('s', () => {
    it('0s', () => {
      expect(timeRegex.test('0s')).toBeTruthy()
    })

    it('1.5s', () => {
      expect(timeRegex.test('1.5s')).toBeTruthy()
    })
  })

  describe('ms', () => {
    it('0ms', () => {
      expect(timeRegex.test('0ms')).toBeTruthy()
    })

    it('150.25ms', () => {
      expect(timeRegex.test('150.25ms')).toBeTruthy()
    })
  })

  describe('Optionally, it may be preceded by a single + or - sign', () => {
    it('-456ms', () => {
      expect(timeRegex.test('-456ms')).toBeTruthy()
    })

    it('+0s', () => {
      expect(timeRegex.test('+0s')).toBeTruthy()
    })

    it('-0ms', () => {
      expect(timeRegex.test('-0ms')).toBeTruthy()
    })
  })
})

describe('Invalid <time> should be rejected', () => {
  // Although unitless zero is allowed for <length>s, it's invalid for <time>s.
  it('0', () => {
    expect(timeRegex.test('0')).toBeFalsy()
  })

  // This is a <number>, not a <time>, because it's missing a unit.
  it('12.0', () => {
    expect(timeRegex.test('12.0')).toBeFalsy()
  })

  // No space is allowed between the number and the unit.
  it('7 ms', () => {
    expect(timeRegex.test('7 ms')).toBeFalsy()
  })
})
