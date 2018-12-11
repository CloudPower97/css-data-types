// TODO: Add functionalRgb and HSL/HSLA notation
import percentage from './percentage'

const percentageReplace = percentage.replace(/\^/g, '').replace(/\$/g, '')

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

const colorKeywords = `^(?:${colors.join(',').replace(/,/g, '|')}|transparent|currentColor)$`

const rgbRangeRegex = `(?:[0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])|${percentageReplace}`
const alphaRange = `(?:\\.\\d+|(?:[0].\\d+)|[0]|[1](?:.[0]+)?)|${percentageReplace}`
const hexNotation =
  '^#[a-f0-9]{2}[a-f0-9]{2}[a-f0-9]{2}[a-f0-9]{0,2}$|^#[a-f0-9][a-f0-9][a-f0-9][a-f09]?$'

const rgb = `^(?:rgb\\(${rgbRangeRegex}(?:,|\\s)\\s*${rgbRangeRegex}(?:,|\\s)\\s*${rgbRangeRegex}(?:(?:,|\\s)\\s*${alphaRange})?\\))$`
const rgba = `rgba\\(${rgbRangeRegex}(,|\\s)\\s*${rgbRangeRegex}(,|\\s)\\s*${rgbRangeRegex}(,|\\s)\\s*${alphaRange}\\)`
const functionalRgba = `^(?:rgba\\(${rgbRangeRegex}\\s${rgbRangeRegex}\\s${rgbRangeRegex}\\s\\/\\s${alphaRange}\\))$`

export default `${hexNotation}|${rgb}|${rgba}|${functionalRgba}|${colorKeywords}`