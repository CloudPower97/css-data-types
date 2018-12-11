import {
  blur,
  brightness,
  contrast,
  dropShadow,
  grayscale,
  hueRotate,
  invert,
  opacity,
  saturate,
  sepia,
} from 'types/filter-function'

describe('The <filter-function> data type is specified using one of the filter functions listed below:', () => {
  describe('The blur() CSS function applies a Gaussian blur to the input image.', () => {
    const blurRegex = new RegExp(blur)

    // No effect
    it('blur(0)', () => {
      expect(blurRegex.test('blur(0)')).toBeTruthy()
    })

    // Blur with 8px radius
    it('blur(8px)', () => {
      expect(blurRegex.test('blur(8px)')).toBeTruthy()
    })

    // Blur with 1.17rem radius
    it('blur(1.17rem)', () => {
      expect(blurRegex.test('blur(1.17rem)')).toBeTruthy()
    })
  })

  describe('The brightness() CSS function applies a linear multiplier to the input image, making it appear brighter or darker.', () => {
    const brightnessRegex = new RegExp(brightness)

    // Completely black
    it('brightness(0%)', () => {
      expect(brightnessRegex.test('brightness(0%)')).toBeTruthy()
    })

    // 60% brightness
    it('brightness(0.6)', () => {
      expect(brightnessRegex.test('brightness(0.6)')).toBeTruthy()
    })

    // No effect
    it('brightness(1)', () => {
      expect(brightnessRegex.test('brightness(1)')).toBeTruthy()
    })

    // Double brightness
    it('brightness(200%)', () => {
      expect(brightnessRegex.test('brightness(200%)')).toBeTruthy()
    })
  })

  describe('The contrast() CSS function adjusts the contrast of the input image.', () => {
    const contrastRegex = new RegExp(contrast)

    // Completely gray
    it('contrast(0)', () => {
      expect(contrastRegex.test('contrast(0)')).toBeTruthy()
    })

    // 65% contrast
    it('contrast(65%)', () => {
      expect(contrastRegex.test('contrast(65%)')).toBeTruthy()
    })

    // No effect
    it('contrast(1)', () => {
      expect(contrastRegex.test('contrast(1)')).toBeTruthy()
    })

    // Double contrast
    it('contrast(200%)', () => {
      expect(contrastRegex.test('contrast(200%)')).toBeTruthy()
    })
  })

  describe('The drop-shadow() CSS function applies a drop shadow effect to the input image.', () => {
    const dropShadowRegex = new RegExp(dropShadow)

    it('drop-shadow(30px 10px 4px #4444dd)', () => {
      expect(dropShadowRegex.test('drop-shadow(30px 10px 4px #4444dd)')).toBeTruthy()
    })

    it('drop-shadow(0 -6mm 4mm rgb(160, 0, 210))', () => {
      expect(dropShadowRegex.test('drop-shadow(0 -6mm 4mm rgb(160, 0, 210))')).toBeTruthy()
    })

    it('drop-shadow(0 0 0.75rem crimson);', () => {
      expect(dropShadowRegex.test('drop-shadow(0 0 0.75rem crimson)')).toBeTruthy()
    })

    it('drop-shadow(.5rem .5rem 1rem .3rem #e23)', () => {
      expect(dropShadowRegex.test('drop-shadow(.5rem .5rem 1rem .3rem #e23)')).toBeTruthy()
    })
  })

  describe('The grayscale() CSS function converts the input image to grayscale.', () => {
    const grayscaleRegex = new RegExp(grayscale)

    it('grayscale(0)', () => {
      expect(grayscaleRegex.test('grayscale(0)')).toBeTruthy()
    })

    it('grayscale(.7)', () => {
      expect(grayscaleRegex.test('grayscale(.7)')).toBeTruthy()
    })

    it('grayscale(100%)', () => {
      expect(grayscaleRegex.test('grayscale(100%)')).toBeTruthy()
    })
  })

  describe('The hue-rotate() CSS function rotates the hue of an element and its contents.', () => {
    const hueRotateRegex = new RegExp(hueRotate)

    it('hue-rotate(-90deg)', () => {
      expect(hueRotateRegex.test('hue-rotate(-90deg)')).toBeTruthy()
    })

    it('hue-rotate(0deg)', () => {
      expect(hueRotateRegex.test('hue-rotate(0deg)')).toBeTruthy()
    })

    it('hue-rotate(90deg)', () => {
      expect(hueRotateRegex.test('hue-rotate(90deg)')).toBeTruthy()
    })

    it('hue-rotate(.5turn)', () => {
      expect(hueRotateRegex.test('hue-rotate(.5turn)')).toBeTruthy()
    })

    it('hue-rotate(405deg)', () => {
      expect(hueRotateRegex.test('hue-rotate(405deg)')).toBeTruthy()
    })
  })

  describe('The invert() CSS function inverts the color samples in the input image.', () => {
    const invertRegex = new RegExp(invert)

    it('invert(0)', () => {
      expect(invertRegex.test('invert(0)')).toBeTruthy()
    })

    it('invert(.6)', () => {
      expect(invertRegex.test('invert(.6)')).toBeTruthy()
    })

    it('invert(100%)', () => {
      expect(invertRegex.test('invert(100%)')).toBeTruthy()
    })
  })

  describe('The opacity() CSS function applies transparency to the samples in the input image.', () => {
    const opacityRegex = new RegExp(opacity)

    it('opacity(0%)', () => {
      expect(opacityRegex.test('opacity(0%)')).toBeTruthy()
    })

    it('opacity(50%)', () => {
      expect(opacityRegex.test('opacity(50%)')).toBeTruthy()
    })

    it('opacity(1)', () => {
      expect(opacityRegex.test('opacity(1)')).toBeTruthy()
    })
  })

  describe('The saturate() CSS function super-saturates or desaturates the input image.', () => {
    const saturateRegex = new RegExp(saturate)

    it('saturate(0)', () => {
      expect(saturateRegex.test('saturate(0)')).toBeTruthy()
    })

    it('saturate(.4)', () => {
      expect(saturateRegex.test('saturate(.4)')).toBeTruthy()
    })

    it('saturate(100%)', () => {
      expect(saturateRegex.test('saturate(100%)')).toBeTruthy()
    })

    it('saturate(200%)', () => {
      expect(saturateRegex.test('saturate(200%)')).toBeTruthy()
    })
  })

  describe('The sepia() CSS function converts the input image to sepia, giving it a warmer, more yellow/brown appearance.', () => {
    const sepiaRegex = new RegExp(sepia)

    it('sepia(0)', () => {
      expect(sepiaRegex.test('sepia(0)')).toBeTruthy()
    })

    it('sepia(.65)', () => {
      expect(sepiaRegex.test('sepia(.65)')).toBeTruthy()
    })

    it('sepia(100%)', () => {
      expect(sepiaRegex.test('sepia(100%)')).toBeTruthy()
    })
  })
})
