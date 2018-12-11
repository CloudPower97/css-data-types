import length from './length'
import percentage from './percentage'

const lengthReplace = length.replace(/\^/g, '').replace(/\$/g, '')
const percentageReplace = percentage.replace(/\^/g, '').replace(/\$/g, '')

const firstCoordinate = `(?:left|right)\\s*(?:${lengthReplace}|${percentageReplace})\\s*(?:top|bottom)\\s*(?:${lengthReplace}|${percentageReplace})`
const secondCoordinate = `(?:left|center|right|${lengthReplace}|${percentageReplace})\\s*(?:top|center|bottom|${lengthReplace}|${percentageReplace})?`

export default `${firstCoordinate}|${secondCoordinate}`
