import string from './string'

export default `url\\(${string.replace(/\^/g, '').replace(/\$/g, '')}\\)`
