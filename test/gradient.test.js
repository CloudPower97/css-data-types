import { linearGradient } from 'types/gradient'

describe('The <gradient> data type is defined with one of the function types listed below.', () => {
  describe('linear-gradient()', () => {
    const linearGradientRegex = new RegExp(linearGradient)

    it('linear-gradient(#f69d3c, #3f87a6)', () => {
      expect(linearGradientRegex.test('linear-gradient(#f69d3c, #3f87a6)')).toBeTruthy()
    })

    it('linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)', () => {
      expect(
        linearGradientRegex.test('linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)')
      ).toBeTruthy()
    })

    it('linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%)', () => {
      expect(
        linearGradientRegex.test('linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%)')
      ).toBeTruthy()
    })

    it('linear-gradient(to right, red 20%, orange 20% 40 %, yellow 40% 60%, green 60% 80%, blue 80%)', () => {
      expect(
        linearGradientRegex.test(
          'linear-gradient(to right, red 20%, orange 20% 40%, yellow 40% 60%, green 60% 80%, blue 80%)'
        )
      ).toBeTruthy()
    })

    it('linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)', () => {
      expect(
        linearGradientRegex.test(
          'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%)'
        )
      ).toBeTruthy()
    })
  })
})
