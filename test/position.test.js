import position from 'types/position'

const positionRegex = new RegExp(position)

describe('The <position> data type is specified with one or two keywords, with optional offsets.', () => {
  describe('Valid <position>s are:', () => {
    it('center', () => {
      expect(positionRegex.test('center')).toBeTruthy()
    })

    it('left', () => {
      expect(positionRegex.test('left')).toBeTruthy()
    })

    it('center top', () => {
      expect(positionRegex.test('center top')).toBeTruthy()
    })

    it('right 8.5%', () => {
      expect(positionRegex.test('right 8.5%')).toBeTruthy()
    })

    it('10% 20%', () => {
      expect(positionRegex.test('10% 20%')).toBeTruthy()
    })

    it('8rem 14px', () => {
      expect(positionRegex.test('8rem 14px')).toBeTruthy()
    })
  })

  describe('Invalid <position>s are:', () => {
    it('left right', () => {
      expect(positionRegex.test('left right')).toBeFalsy()
    })

    it('bottom top', () => {
      expect(positionRegex.test('bottom top')).toBeFalsy()
    })

    it('10px 15px 20px 15px', () => {
      expect(positionRegex.test('10px 15px 20px 15px')).toBeFalsy()
    })
  })
})
