import resolution from 'types/resolution'

const resolutionRegex = new RegExp(resolution)

describe('The <resolution> data type consists of a strictly positive <number> followed by one of the units listed below', () => {
  it('dpi', () => {
    expect(resolutionRegex.test('96dpi')).toBeTruthy()
  })

  it('dpcm', () => {
    expect(resolutionRegex.test('50.82dpcm')).toBeTruthy()
  })

  it('dppx', () => {
    expect(resolutionRegex.test('3dppx')).toBeTruthy()
  })

  it('x', () => {
    expect(resolutionRegex.test('1x')).toBeTruthy()
  })
})

describe('Invalid <resolutions> should be rejected', () => {
  // Spaces are not allowed between the number and the unit.
  it('72 dpi', () => {
    expect(resolutionRegex.test('72 dpi')).toBeFalsy()
  })

  // The number must use digits only.
  it('ten dpi', () => {
    expect(resolutionRegex.test('ten dpi')).toBeFalsy()
  })

  // The unit is required.
  it('0', () => {
    expect(resolutionRegex.test('0')).toBeFalsy()
  })
})
