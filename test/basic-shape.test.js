import { inset, circle, ellipse, polygon, path } from 'types/basic-shape'

describe('The <basic-shape> data type is defined with one of the basic shape functions listed below:', () => {
  describe('inset()', () => {
    const insetRegex = new RegExp(inset)

    it('inset(100px 50px)', () => {
      expect(insetRegex.test('inset(100px 50px)')).toBeTruthy()
    })

    it('inset(22% 12% 15px 35px)', () => {
      expect(insetRegex.test('inset(22% 12% 15px 35px)')).toBeTruthy()
    })

    it('inset(50% 50% 50% 50%)', () => {
      expect(insetRegex.test('inset(50% 50% 50% 50%)')).toBeTruthy()
    })

    it('inset(10px 10px 10px 10px)', () => {
      expect(insetRegex.test('inset(10px 10px 10px 10px)')).toBeTruthy()
    })
  })

  describe('circle()', () => {
    const circleRegex = new RegExp(circle)

    it('circle(6rem at 12rem 8rem)', () => {
      expect(circleRegex.test('circle(6rem at 12rem 8rem)')).toBeTruthy()
    })

    it('circle(50% at 25% 25%)', () => {
      expect(circleRegex.test('circle(50% at 25% 25%)')).toBeTruthy()
    })

    it('circle(50px at 0 100px)', () => {
      expect(circleRegex.test('circle(50px at 0 100px)')).toBeTruthy()
    })

    it('circle(40%)', () => {
      expect(circleRegex.test('circle(40%)')).toBeTruthy()
    })
  })

  describe('ellipse()', () => {
    const ellipseRegex = new RegExp(ellipse)

    it('ellipse(115px 55px at 50% 40%)', () => {
      expect(ellipseRegex.test('ellipse(115px 55px at 50% 40%)')).toBeTruthy()
    })

    it('ellipse(130px 140px at 10% 20%)', () => {
      expect(ellipseRegex.test('ellipse(130px 140px at 10% 20%)')).toBeTruthy()
    })
  })

  describe('polygon()', () => {
    const polygonRegex = new RegExp(polygon)

    it('polygon(50% 20%, 90% 80%, 10% 80%)', () => {
      expect(polygonRegex.test('polygon(50% 20%, 90% 80%, 10% 80%)')).toBeTruthy()
    })

    it('polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%, 50% 81.3%, 80.9% 97.6%, 75% 63.1%, 100% 38.8%, 65.5% 33.8%)', () => {
      expect(
        polygonRegex.test(
          'polygon(50% 2.4%, 34.5% 33.8%, 0% 38.8%, 25% 63.1%, 19.1% 97.6%, 50% 81.3%, 80.9% 97.6%, 75% 63.1%, 100% 38.8%, 65.5% 33.8%)'
        )
      ).toBeTruthy()
    })

    it('polygon(0px 0px, 907px 0px, 907px 4025px, 0px 4025px)', () => {
      expect(
        polygonRegex.test('polygon(0px 0px, 907px 0px, 907px 4025px, 0px 4025px)')
      ).toBeTruthy()
    })

    it('polygon(nonzero, 342px -46px, 507px 0px, 507px 19px, 11px 65px);', () => {
      expect(
        polygonRegex.test('polygon(nonzero, 342px -46px, 507px 0px, 507px 19px, 11px 65px);')
      ).toBeTruthy()
    })
  })

  describe('path()', () => {
    const pathRegex = new RegExp(path)

    it("path('M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200')", () => {
      expect(
        pathRegex.test("path('M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200')")
      ).toBeTruthy()
    })

    it("path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z')", () => {
      expect(
        pathRegex.test(
          "path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z')"
        )
      ).toBeTruthy()
    })

    it("path('evenodd, M 0,200 Q 200,200 260,80 Q 290,20 400,0 Q 300,100 400,200')", () => {
      expect(pathRegex.test("path('evenodd, M 0,200 Q 200,200 260,80 Q 290')")).toBeTruthy()
    })

    it("path('nonzero, M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25')", () => {
      expect(
        pathRegex.test(
          "path('nonzero, M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25')"
        )
      ).toBeTruthy()
    })
  })
})
