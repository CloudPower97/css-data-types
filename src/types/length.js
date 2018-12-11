import number from './number'

/**
 * Relative lengths represent a measurement in terms of some other distance.
 * Depending on the unit, this can be the size of a specific character,
 * the line height, or the size of the viewport.
 */
const fontRelativeLength = '(?:cap|ch|em|ex|ic|lh|rem|rlh)'
const viewportPercentageLengths = '(?:vh|vw|vi|vb|vmin|vmax)'
const relativeLengthUnit = `${fontRelativeLength}|${viewportPercentageLengths}`
const absoluteLengthUnit = '(?:px|cm|mm|Q|in|pc|pt)'

/**
 * The <length> data type consists of a <number> followed by one of the units listed below.
 * As with all CSS dimensions, there is no space between the unit literal and the number.
 * The length unit is optional after the number 0.
 */
export default `${number
  .replace(/\^/g, '')
  .replace(/\$/g, '')}((${relativeLengthUnit})\\s*|${absoluteLengthUnit}\\s*)`
