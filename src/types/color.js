import percentage from './percentage'
import angle from './angle'
import number from './number'

const numberReplace = number.replace(/\^/g, '').replace(/\$/g, '')
const angleReplace = angle.replace(/\^/g, '').replace(/\$/g, '')
const percentageReplace = percentage.replace(/\^/g, '').replace(/\$/g, '')

/**
 * This colors are directly taken from https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#colors_table
 * They cover CSS from Level 1 all the way up to Color Module Level 4
 * Last updated: 12/12/18
 */
const colors = [
  'black',
  'silver',
  'gray',
  'white',
  'maroon',
  'red',
  'purple',
  'fuchsia',
  'green',
  'lime',
  'olive',
  'yellow',
  'navy',
  'blue',
  'teal',
  'aqua',
  'orange',
  'aliceblue',
  'antiquewhite',
  'aquamarine',
  'azure',
  'beige',
  'bisque',
  'blanchedalmond',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  'cornsilk',
  'crimson',
  'cyan',
  'aqua',
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgreen',
  'darkgrey',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkslategrey',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray',
  'dimgrey',
  'dodgerblue',
  'firebrick',
  'floralwhite',
  'forestgreen',
  'gainsboro',
  'ghostwhite',
  'gold',
  'goldenrod',
  'greenyellow',
  'grey',
  'honeydew',
  'hotpink',
  'indianred',
  'indigo',
  'ivory',
  'khaki',
  'lavender',
  'lavenderblush',
  'lawngreen',
  'lemonchiffon',
  'lightblue',
  'lightcoral',
  'lightcyan',
  'lightgoldenrodyellow',
  'lightgray',
  'lightgreen',
  'lightgrey',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightslategrey',
  'lightsteelblue',
  'lightyellow',
  'limegreen',
  'linen',
  'magenta',
  'fuchsia',
  'mediumaquamarine',
  'mediumblue',
  'mediumorchid',
  'mediumpurple',
  'mediumseagreen',
  'mediumslateblue',
  'mediumspringgreen',
  'mediumturquoise',
  'mediumvioletred',
  'midnightblue',
  'mintcream',
  'mistyrose',
  'moccasin',
  'navajowhite',
  'oldlace',
  'olivedrab',
  'orangered',
  'orchid',
  'palegoldenrod',
  'palegreen',
  'paleturquoise',
  'palevioletred',
  'papayawhip',
  'peachpuff',
  'peru',
  'pink',
  'plum',
  'powderblue',
  'rosybrown',
  'royalblue',
  'saddlebrown',
  'salmon',
  'sandybrown',
  'seagreen',
  'seashell',
  'sienna',
  'skyblue',
  'slateblue',
  'slategray',
  'slategrey',
  'snow',
  'springgreen',
  'steelblue',
  'tan',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'wheat',
  'whitesmoke',
  'yellowgreen',
  'rebeccapurple',
]

/**
 * Color keywords are case-insensitive identifiers that represent a specific color,
 * such as red, blue, black, or lightseagreen.
 * Although the names more or less describes their respective colors,
 * they are essentially artificial, without a strict rationale behind the names used.
 */
const colorKeywords = `^(?:${colors.join(',').replace(/,/g, '|')}|transparent|currentColor)$`

/**
 * We test both #RRGGBB[AA] and #RGB[A] syntax
 * R (red), G (green), B (blue), and A (alpha) are hexadecimal characters (0-9, A-F). A is optional.
 * The three-digit notation (#RGB) is a shorter version of the six-digit form (#RRGGBB).
 * For example, #f09 is the same color as #ff0099.
 * Likewise, the four-digit RGB notation (#RGBA) is a shorter version of the eight-digit form (#RRGGBBAA).
 * For example, #0f38 is the same color as #00ff3388.
 */
const hexNotation = '^#(?:[A-Fa-f0-9]{6}([A-Fa-f0-9]{2})?$|[A-Fa-f0-9]{3}[A-Fa-f0-9]?)'

/**
 * A (alpha) can be a <number> between 0 and 1,
 * or a <percentage>, where the number 1 corresponds to 100% (full opacity).
 */
const alphaRange = `(?:(?:\\.\\d+|(?:[0].\\d+)|[0]|[1](?:.[0]+)?)|${percentageReplace})`

/**
 * R (red), G (green), and B (blue) can be either <integer>s or <percentage>s, where the number 255 corresponds to 100%.
 * A (alpha) can be a <number> between 0 and 1, or a <percentage>, where the number 1 corresponds to 100% (full opacity).
 * We test both the rgb(R, G, B[, A])/rgba(R, G, B, A) and the CSS Colors Level 4 support for space-separated values rgb(R G B[ / A])/rgba(R G B / A) syntax
 * We test that one doesn't mix integers and percentages as well.
 */
const rgbRange = '0*(?:[0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]){1,3}'
const rgb = `(?:^rgb\\(${rgbRange},\\s*${rgbRange},\\s*${rgbRange}(,\\s*${alphaRange})?\\)$|^rgb\\(${percentageReplace},\\s*${percentageReplace},\\s*${percentageReplace}(,\\s*${alphaRange})?\\)$|^rgb\\(${rgbRange}\\s*${rgbRange}\\s*${rgbRange}(\\s*\\/\\s*${alphaRange})?\\)$)`
const rgba = `(?:^rgba\\(${rgbRange},\\s*${rgbRange},\\s*${rgbRange},\\s*${alphaRange}\\)$|^rgba\\(${percentageReplace},\\s*${percentageReplace},\\s*${percentageReplace},\\s*${alphaRange}\\)$|^rgba\\(${rgbRange}\\s*${rgbRange}\\s*${rgbRange}\\s*\\/\\s*${alphaRange}\\)$)`

/**
 * HSL colors are expressed through the functional hsl() and hsla() notations.
 * H (hue) is an <angle> of the color circle given in degs, rads, grads, or turns in CSS Color Module Level 4.
 * When written as a unitless <number>, it is interpreted as degrees, as specified in CSS Color Module Level 3.
 * By definition, red=0deg=360deg, with the other colors spread around the circle, so green=120deg, blue=240deg, etc.
 * As an <angle>, it implicitly wraps around such that -120deg=240deg, 480deg=120deg, -1turn=1turn, etc.
 * S (saturation) and L (lightness) are percentages. 100% saturation is completely saturated, while 0% is completely unsaturated (gray).
 * 100% lightness is white, 0% lightness is black, and 50% lightness is “normal.”
 */
const hsl = `(?:^hsl\\((${angleReplace}|${numberReplace}),\\s*${percentageReplace},\\s*${percentageReplace}(,\\s*${alphaRange})?\\)$|^hsl\\((${angleReplace}|${numberReplace})\\s+${percentageReplace}\\s+${percentageReplace}(\\s+\\/\\s+${alphaRange})?\\)$)`
const hsla = `(?:^hsla\\((${angleReplace}|${numberReplace}),\\s*${percentageReplace},\\s*${percentageReplace},\\s*${alphaRange}\\)$|^hsla\\((${angleReplace}|${numberReplace})\\s+${percentageReplace}\\s+${percentageReplace}\\s+\\/\\s+${alphaRange}\\)$)`

export default `${colorKeywords}|${hexNotation}|${rgb}|${rgba}|${hsl}|${hsla}`
