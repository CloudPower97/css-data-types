import blendMode from 'types/blend-mode'

describe('The <blend-mode> data type is defined using a keyword value chosen from the list below:', () => {
  const blendModeRegex = new RegExp(blendMode)

  it('normal', () => {
    expect(blendModeRegex.test('normal')).toBeTruthy()
  })

  it('multiply', () => {
    expect(blendModeRegex.test('multiply')).toBeTruthy()
  })

  it('screen', () => {
    expect(blendModeRegex.test('screen')).toBeTruthy()
  })

  it('overlay', () => {
    expect(blendModeRegex.test('overlay')).toBeTruthy()
  })

  it('darken', () => {
    expect(blendModeRegex.test('darken')).toBeTruthy()
  })

  it('lighten', () => {
    expect(blendModeRegex.test('lighten')).toBeTruthy()
  })

  it('color-dodge', () => {
    expect(blendModeRegex.test('color-dodge')).toBeTruthy()
  })

  it('color-burn', () => {
    expect(blendModeRegex.test('color-burn')).toBeTruthy()
  })

  it('hard-light', () => {
    expect(blendModeRegex.test('hard-light')).toBeTruthy()
  })

  it('soft-light', () => {
    expect(blendModeRegex.test('soft-light')).toBeTruthy()
  })

  it('difference', () => {
    expect(blendModeRegex.test('difference')).toBeTruthy()
  })

  it('exclusion', () => {
    expect(blendModeRegex.test('exclusion')).toBeTruthy()
  })

  it('hue', () => {
    expect(blendModeRegex.test('hue')).toBeTruthy()
  })

  it('saturation', () => {
    expect(blendModeRegex.test('saturation')).toBeTruthy()
  })

  it('color', () => {
    expect(blendModeRegex.test('color')).toBeTruthy()
  })

  it('luminosity', () => {
    expect(blendModeRegex.test('luminosity')).toBeTruthy()
  })
})
