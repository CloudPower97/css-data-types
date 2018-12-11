import number from 'types/number'

const numberRegex = new RegExp(number)

describe('The syntax of <number> extends the syntax of <integer>.', () => {
  describe('A fractional value is represented by a . followed by one or more decimal digits, and may be appended to an integer:', () => {
    // A raw <integer> is also a <number>.
    it('12', () => {
      expect(numberRegex.test('12')).toBeTruthy()
    })

    // Positive fraction
    it('4.01', () => {
      expect(numberRegex.test('4.01')).toBeTruthy()
    })

    // Negative fraction
    it('-456.8', () => {
      expect(numberRegex.test('-456.8')).toBeTruthy()
    })

    // Zero
    it('0.0', () => {
      expect(numberRegex.test('0.0')).toBeTruthy()
    })

    // Zero, with a leading +
    it('+0.0', () => {
      expect(numberRegex.test('+0.0')).toBeTruthy()
    })

    // Zero, with a leading -
    it('-0.0', () => {
      expect(numberRegex.test('-0.0')).toBeTruthy()
    })

    // Fractional number without a leading zero
    it('.60', () => {
      expect(numberRegex.test('.60')).toBeTruthy()
    })

    // Scientific notation
    it('10e3', () => {
      expect(numberRegex.test('10e3')).toBeTruthy()
    })

    // Complicated scientific notation
    it('-3.4e-2', () => {
      expect(numberRegex.test('-3.4e-2')).toBeTruthy()
    })
  })

  describe('Invalid <number> should be rejected', () => {
    // Decimal points must be followed by at least one digit.
    it('12.', () => {
      expect(numberRegex.test('12.')).toBeFalsy()
    })

    // Only one leading +/- is allowed.
    it('+-12.2', () => {
      expect(numberRegex.test('+-12.2')).toBeFalsy()
    })

    // Only one decimal point is allowed.
    it('12.1.1', () => {
      expect(numberRegex.test('12.1.1')).toBeFalsy()
    })
  })
})
