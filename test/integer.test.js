import integer from 'types/integer'

const integerRegex = new RegExp(integer)

describe('The <integer> data type consists of', () => {
  describe('one or several decimal digits, 0 through 9 inclusive', () => {
    // Zero
    it('0', () => {
      expect(integerRegex.test('0')).toBeTruthy()
    })

    // Positive integer (without a leading + sign)
    it('12', () => {
      expect(integerRegex.test('12')).toBeTruthy()
    })

    describe('optionally preceded by a single + or - sign', () => {
      // Zero, with a leading +
      it('+0', () => {
        expect(integerRegex.test('+0')).toBeTruthy()
      })

      // Zero, with a leading -
      it('-0', () => {
        expect(integerRegex.test('-0')).toBeTruthy()
      })

      // Positive integer (with a leading + sign)
      it('+123', () => {
        expect(integerRegex.test('+123')).toBeTruthy()
      })

      // Negative integer
      it('-456', () => {
        expect(integerRegex.test('+123')).toBeTruthy()
      })
    })
  })
})

describe('Invalid <integer> should be rejected', () => {
  // This is a <number>, not an <integer>, though it represents an integer.
  it('12.0', () => {
    expect(integerRegex.test('12.0')).toBeFalsy()
  })

  // Decimal points are not allowed.
  it('12.', () => {
    expect(integerRegex.test('12.')).toBeFalsy()
  })

  // Only one leading +/- is allowed.
  it('+---12', () => {
    expect(integerRegex.test('+---12')).toBeFalsy()
  })

  // Letters are not allowed.
  it('ten', () => {
    expect(integerRegex.test('ten')).toBeFalsy()
  })

  // Special characters are not allowed.
  it('_5', () => {
    expect(integerRegex.test('_5')).toBeFalsy()
  })

  // Escaped Unicode characters are not allowed, even if they are an integer (here: 5).
  it('\\35', () => {
    expect(integerRegex.test('\\35')).toBeFalsy()
  })

  // Non-arabic numerals are not allowed, even when escaped (here: the Japanese 5).
  it('\\4E94', () => {
    expect(integerRegex.test('\\4E94')).toBeFalsy()
  })

  // Scientific notation is not allowed.
  it('3e4', () => {
    expect(integerRegex.test('3e4')).toBeFalsy()
  })
})
