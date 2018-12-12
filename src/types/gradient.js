/**
 * The <gradient> CSS data type is a special type of <image> that consists of a progressive transition between two or more colors.
 */
import angle from './angle'
import length from './length'
import percentage from './percentage'
import color from './color'

const lengthReplace = length.replace(/\^/g, '').replace(/\$/g, '')
const percentageReplace = percentage.replace(/\^/g, '').replace(/\$/g, '')
const colorReplace = color.replace(/\^/g, '').replace(/\$/g, '')
const angleReplace = angle.replace(/\^/g, '').replace(/\$/g, '')

/**------------------------------------------------------------------------------------------
 * The linear-gradient() CSS function creates an image consisting of a progressive transition
 *  between two or more colors along a straight line.
 *-------------------------------------------------------------------------------------------/

/**
 * The position of the gradient line's starting point.
 * If specified, it consists of the word to and up to two keywords: one indicates the horizontal side (left or right),
 * and the other the vertical side (top or bottom). The order of the side keywords does not matter.
 */
const sideOrCorner = '(?:top|right|bottom|left)'

const colorStopLength = `((${percentageReplace}|${lengthReplace}){1,2})`

/**
 * A color-stop's <color> value, followed by one or two optional stop positions,
 * (each being either a <percentage> or a <length> along the gradient's axis).
 */
const linearColorStop = `(?:${colorReplace}(\\s+${colorStopLength})?)`

const colorHint = `(?:${percentageReplace}|${lengthReplace})`

const colorStopList = `(((?:${linearColorStop}\\s*(,\\s+${colorHint})?)+)?,\\s*${linearColorStop})`

export const linearGradient = `linear-gradient\\(((${angleReplace}|to ${sideOrCorner}),\\s*)?${colorStopList}*\\)`

/**-----------------------------------------------------------------------------------------*/
