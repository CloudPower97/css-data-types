import length from 'types/length'

const lengthRegex = new RegExp(length)

describe('The <length> data type consists of a <number> followed by one of the units listed below:', () => {
  describe('Font-relative lengths', () => {
    it('cap', () => {
      expect(lengthRegex.test('1cap')).toBeTruthy()
    })

    it('ch', () => {
      expect(lengthRegex.test('1ch')).toBeTruthy()
    })

    it('em', () => {
      expect(lengthRegex.test('1em')).toBeTruthy()
    })

    it('ex', () => {
      expect(lengthRegex.test('1ex')).toBeTruthy()
    })

    it('ic', () => {
      expect(lengthRegex.test('1ic')).toBeTruthy()
    })

    it('lh', () => {
      expect(lengthRegex.test('1lh')).toBeTruthy()
    })

    it('rem', () => {
      expect(lengthRegex.test('1rem')).toBeTruthy()
    })

    it('rlh', () => {
      expect(lengthRegex.test('1rlh')).toBeTruthy()
    })
  })

  describe('Viewport-percentage lengths', () => {
    it('vh', () => {
      expect(lengthRegex.test('1vh')).toBeTruthy()
    })

    it('vw', () => {
      expect(lengthRegex.test('1vw')).toBeTruthy()
    })

    it('vi', () => {
      expect(lengthRegex.test('1vi')).toBeTruthy()
    })

    it('vb', () => {
      expect(lengthRegex.test('1vb')).toBeTruthy()
    })

    it('vmin', () => {
      expect(lengthRegex.test('1vmin')).toBeTruthy()
    })

    it('vmax', () => {
      expect(lengthRegex.test('1vmax')).toBeTruthy()
    })
  })

  describe('Absolute length units', () => {
    it('px', () => {
      expect(lengthRegex.test('1px')).toBeTruthy()
    })

    it('cm', () => {
      expect(lengthRegex.test('1cm')).toBeTruthy()
    })

    it('mm', () => {
      expect(lengthRegex.test('1mm')).toBeTruthy()
    })

    it('Q', () => {
      expect(lengthRegex.test('1Q')).toBeTruthy()
    })

    it('in', () => {
      expect(lengthRegex.test('1in')).toBeTruthy()
    })

    it('pc', () => {
      expect(lengthRegex.test('1pc')).toBeTruthy()
    })

    it('pt', () => {
      expect(lengthRegex.test('1pt')).toBeTruthy()
    })
  })
})
