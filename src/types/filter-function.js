import length from './length'
import number from './number'
import percentage from './percentage'
import color from './color'
import angle from './angle'

const lengthReplace = length.replace(/\^/g, '').replace(/\$/g, '')
const numberReplace = number.replace(/\^/g, '').replace(/\$/g, '')
const percentageReplace = percentage.replace(/\^/g, '').replace(/\$/g, '')
const colorReplace = color.replace(/\^/g, '').replace(/\$/g, '')
const angleReplace = angle.replace(/\^/g, '').replace(/\$/g, '')

export const blur = `^blur\\(${lengthReplace}\\)$`
export const brightness = `^brightness\\(${numberReplace}|${percentageReplace}\\)$`
export const contrast = `^contrast\\(${numberReplace}|${percentageReplace}\\)$`
export const dropShadow = `^drop-shadow\\(${lengthReplace}\\s${lengthReplace}\\s${lengthReplace}?\\s${lengthReplace}?\\s${colorReplace}?\\)$`
export const grayscale = `^grayscale\\(${numberReplace}|${percentageReplace}\\)$`
export const hueRotate = `^hue-rotate\\(${angleReplace}\\)$`
export const invert = `^invert\\(${numberReplace}|${percentageReplace}\\)$`
export const saturate = `^saturate\\(${numberReplace}|${percentageReplace}\\)$`
// TODO: Should we refactor ${numberReplace}|${percentageReplace} into it's own variable?
export const sepia = `^sepia\\(${numberReplace}|${percentageReplace}\\)$`
