import number from './number'

export default `${number.replace(/\^/g, '').replace(/\$/g, '')}(deg|grad|rad|turn)`
