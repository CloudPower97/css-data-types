import { strictlyPositive } from './number'

const strictlyPositiveInteger = strictlyPositive.replace('^', '').replace('$', '')

export default `${strictlyPositiveInteger}(?:dpi|dpcm|dppx|x)`
