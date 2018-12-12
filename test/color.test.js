import color from 'types/color'

describe('A <color> can be defined in any of the following ways:', () => {
  const colorRegex = new RegExp(color)

  describe('Using a keyord', () => {
    it('such as navajowhite', () => {
      expect(colorRegex.test('navajowhite')).toBeTruthy()
    })

    it('such as rebeccapurple', () => {
      expect(colorRegex.test('rebeccapurple')).toBeTruthy()
    })

    it('such as mediumaquamarine', () => {
      expect(colorRegex.test('mediumaquamarine')).toBeTruthy()
    })

    it('such as transparent', () => {
      expect(colorRegex.test('transparent')).toBeTruthy()
    })

    it('such as currentColor', () => {
      expect(colorRegex.test('currentColor')).toBeTruthy()
    })
  })

  describe('Using the RGB cubic-coordinate system', () => {
    describe('via the #-hexadecimal notation', () => {
      it('#f09', () => {
        expect(colorRegex.test('#f09')).toBeTruthy()
      })

      it('#F09', () => {
        expect(colorRegex.test('#F09')).toBeTruthy()
      })

      it('#ff0099', () => {
        expect(colorRegex.test('#ff0099')).toBeTruthy()
      })

      it('##FF0099', () => {
        expect(colorRegex.test('#FF0099')).toBeTruthy()
      })

      describe('with alpha value', () => {
        it('#f09f', () => {
          expect(colorRegex.test('#f09f')).toBeTruthy()
        })

        it('#F09F', () => {
          expect(colorRegex.test('#f09f')).toBeTruthy()
        })

        it('#ff0099ff', () => {
          expect(colorRegex.test('#ff0099ff')).toBeTruthy()
        })

        it('#FF0099FF', () => {
          expect(colorRegex.test('#FF0099FF')).toBeTruthy()
        })

        it('#3a30', () => {
          expect(colorRegex.test('#3a30')).toBeTruthy()
        })

        it('#3A3F', () => {
          expect(colorRegex.test('#3A3F')).toBeTruthy()
        })

        it('#33aa3300', () => {
          expect(colorRegex.test('#33aa3300')).toBeTruthy()
        })

        it('#33AA3388', () => {
          expect(colorRegex.test('#33AA3388')).toBeTruthy()
        })
      })
    })

    describe('via the rgb() functional notation', () => {
      it('rgb(255,0,153)', () => {
        expect(colorRegex.test('rgb(255,0,153)')).toBeTruthy()
      })

      it('rgb(255, 0, 153)', () => {
        expect(colorRegex.test('rgb(255, 0, 153)')).toBeTruthy()
      })

      it('rgb(255, 0, 153.0) should be rejected', () => {
        expect(colorRegex.test('rgb(255, 0, 153.0)')).toBeFalsy()
      })

      it('rgb(100%,0%,60%)', () => {
        expect(colorRegex.test('rgb(100%,0%,60%)')).toBeTruthy()
      })

      it('rgb(100%, 0%, 60%)', () => {
        expect(colorRegex.test('rgb(100%, 0%, 60%)')).toBeTruthy()
      })

      it('rgb(100%, 0, 60%) should be rejected', () => {
        expect(colorRegex.test('rgb(100%, 0, 60%)')).toBeFalsy()
      })

      it('rgb(255 0 153)', () => {
        expect(colorRegex.test('rgb(255 0 153)')).toBeTruthy()
      })

      describe('with alpha value', () => {
        it('rgb(255, 0, 153, 1)', () => {
          expect(colorRegex.test('rgb(255, 0, 153, 1)')).toBeTruthy()
        })

        it('rgb(255, 0, 153, 100%)', () => {
          expect(colorRegex.test('rgb(255, 0, 153, 100%)')).toBeTruthy()
        })
      })

      describe('with space-separated values', () => {
        it('rgb(255 0 153)', () => {
          expect(colorRegex.test('rgb(255 0 153)')).toBeTruthy()
        })

        it('rgb(51 170 51 / .4)', () => {
          expect(colorRegex.test('rgb(51 170 51 / .4)')).toBeTruthy()
        })

        it('rgb(51 170 51 / 40%)', () => {
          expect(colorRegex.test('rgb(51 170 51 / 40%)')).toBeTruthy()
        })
      })

      describe('without floats value', () => {
        it('rgb(255, 0, 153.6, 1)', () => {
          expect(colorRegex.test('rgb(255, 0, 153.6, 1)')).toBeFalsy()
        })

        it('rgb(1e2, .5e1, .5e0, +.25e2%)', () => {
          expect(colorRegex.test('rgb(1e2, .5e1, .5e0, +.25e2%)')).toBeFalsy()
        })
      })
    })

    describe('via the rgba() functional notation', () => {
      it('rgba(51, 170, 51, .1)', () => {
        expect(colorRegex.test('rgba(51, 170, 51, .1)')).toBeTruthy()
      })

      it('rgba(51, 170, 51, .4)', () => {
        expect(colorRegex.test('rgba(51, 170, 51, .4)')).toBeTruthy()
      })

      it('rgba(51, 170, 51, .7)', () => {
        expect(colorRegex.test('rgba(51, 170, 51, .7)')).toBeTruthy()
      })

      it('rgba(51, 170, 51,  1)', () => {
        expect(colorRegex.test('rgba(51, 170, 51, 1)')).toBeTruthy()
      })

      describe('with floats value', () => {
        it('rgba(255, 0, 153.6, 1)', () => {
          expect(colorRegex.test('rgba(255, 0, 153.6, 1)')).toBeFalsy()
        })

        it('rgba(1e2, .5e1, .5e0, +.25e2%)', () => {
          expect(colorRegex.test('rgba(1e2, .5e1, .5e0, +.25e2%)')).toBeFalsy()
        })
      })
    })
  })

  describe('Using the HSL cylindrical-coordinate system', () => {
    describe('via the hsl() functional notation', () => {
      it('hsl(270,60%,70%)', () => {
        expect(colorRegex.test('hsl(270,60%,70%)')).toBeTruthy()
      })

      it('hsl(270, 60%, 70%)', () => {
        expect(colorRegex.test('hsl(270, 60%, 70%)')).toBeTruthy()
      })

      it('hsl(270 60% 70%)', () => {
        expect(colorRegex.test('hsl(270 60% 70%)')).toBeTruthy()
      })

      it('hsl(270deg, 60%, 70%)', () => {
        expect(colorRegex.test('hsl(270deg, 60%, 70%)')).toBeTruthy()
      })

      it('hsl(4.71239rad, 60%, 70%)', () => {
        expect(colorRegex.test('hsl(4.71239rad, 60%, 70%)')).toBeTruthy()
      })

      it('hsl(.75turn, 60%, 70%)', () => {
        expect(colorRegex.test('hsl(.75turn, 60%, 70%)')).toBeTruthy()
      })

      it('hsl(270, 60%, 50%, .15)', () => {
        expect(colorRegex.test('hsl(270, 60%, 50%, .15)')).toBeTruthy()
      })

      it('hsl(270, 60%, 50%, 15%)', () => {
        expect(colorRegex.test('hsl(270, 60%, 50%, 15%)')).toBeTruthy()
      })

      it('hsl(270 60% 50% / .15)', () => {
        expect(colorRegex.test('hsl(270 60% 50% / .15)')).toBeTruthy()
      })

      it('hsl(270 60% 50% / 15%)', () => {
        expect(colorRegex.test('hsl(270 60% 50% / 15%)')).toBeTruthy()
      })
    })

    describe('via the hsla() functional notation', () => {
      it('hsla(240, 100%, 50%, .05)', () => {
        expect(colorRegex.test('hsla(240, 100%, 50%, .05)')).toBeTruthy()
      })

      it('hsla(240, 100%, 50%, .4)', () => {
        expect(colorRegex.test('hsla(240, 100%, 50%, .4)')).toBeTruthy()
      })

      it('hsla(240, 100%, 50%, .7)', () => {
        expect(colorRegex.test('hsla(240, 100%, 50%, .7)')).toBeTruthy()
      })

      it('hsla(240, 100%, 50%, 1)', () => {
        expect(colorRegex.test('hsla(240, 100%, 50%, 1)')).toBeTruthy()
      })

      /**
       * Whitespace syntax
       */
      it('hsla(240 100% 50% / .05)', () => {
        expect(colorRegex.test('hsla(240 100% 50% / .05)')).toBeTruthy()
      })

      /**
       * Percentage value for alpha
       */
      it('hsla(240 100% 50% / 5%)', () => {
        expect(colorRegex.test('hsla(240 100% 50% / 5%)')).toBeTruthy()
      })
    })
  })
})
