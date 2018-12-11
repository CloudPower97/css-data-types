import { strictlyPositive } from './integer'

const strictlyPositiveInteger = strictlyPositive.replace('^', '').replace('$', '')

export default `^${strictlyPositiveInteger}\\s*\\/\\s*${strictlyPositiveInteger}$`
