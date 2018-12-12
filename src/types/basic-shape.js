import length from './length'
import percentage from './percentage'
import string from './string'
import position from './position'

const lengthReplace = length.replace(/\^/g, '').replace(/\$/g, '')
const percentageReplace = percentage.replace(/\^/g, '').replace(/\$/g, '')
const stringReplace = string.replace(/\^/g, '').replace(/\$/g, '')
const positionReplace = position.replace(/\^/g, '').replace(/\$/g, '')

const shapeArg = `(?:${lengthReplace}\\s+|${percentageReplace}\\s+)`
const shapeRadius = `(?:${shapeArg}|${percentageReplace}|closest-side|farthest-side)`
// TODO: Check why we didn't use borderRadius
// const borderRadius = `(?:${lengthReplace}|${percentageReplace}){1,4}(\\s+\\/\\s+(?:${lengthReplace}|${percentageReplace}){1,4})?`
const fillRule = '(?:nonzero|evenodd)'

export const inset = `inset\\(${shapeArg}{1,4}|(${percentageReplace}\\s+){1,4}\\)`
export const circle = `circle\\(${shapeRadius}?(at\\s+${positionReplace})?\\)`
export const ellipse = `ellipse\\((?:${shapeRadius}{2})?(at\\s+${positionReplace})?\\)`
export const polygon = `polygon\\((?:${fillRule},\\s+)?(?:${shapeArg}{2}|(${percentageReplace}\\s+){2})*`
export const path = `path\\((?:${fillRule},\\s+)?${stringReplace}\\)`
