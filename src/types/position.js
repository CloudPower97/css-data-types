/**
 * The <position> CSS data type denotes a two-dimensional coordinate used to set a location relative to an element box,
 * specified with one or two keywords, with optional offsets.
 */
import length from './length'
import percentage from './percentage'

const lengthReplace = length.replace(/\^/g, '').replace(/\$/g, '')
const percentageReplace = percentage.replace(/\^/g, '').replace(/\$/g, '')

/**
 * The keyword values are center, top, right, bottom, and left.
 * Each keyword represents either an edge of the element's box or the center line between two edges.
 * Depending on the context, center represents either the center between the left and right edges,
 * or the center between the top and bottom edges.
 */
const keywords = '(?:top|right|bottom|left|center)'

/**
 * If specified, an offset can be either a relative <percentage> value or an absolute <length> value.
 * Positive values are offset towards the right or the bottom, whichever is appropriate.
 * Negative values are offset in the opposite directions.
 */
const value = `(?:${lengthReplace}|${percentageReplace})`

/**
 * 1-value syntax
 * keyword : Either the horizontal or vertical position; the other axis defaults to center;
 * value   : The position on the x-axis; the y-axis defaults to 50%;
 */
const oneValueSyntax = `(?:${keywords}|${value})`

/**
 * 2-value syntax
 * keyword keyword : A keyword for each direction (the order is irrelevant);
 * keyword value   : A keyword for horizontal position, value for vertical position;
 * value keyword   : A value for horizontal position, keyword for vertical position;
 * value value     : A value for each direction (horizontal then vertical);
 * N.B: `left right`, `right left`, `top bottom` and `bottom top` are to be considered invalid.
 */
const twoValueSyntax = `(?:(?!^left right$)(?!^right left$)(?!^bottom top$)(?:${keywords}\\s+${keywords})|${keywords}\\s+${value}|${value}\\s+${keywords}|${value}\\s+${value})`

/**
 * 4-value syntax
 * Each value is an offset from the keyword that preceeds it
 */
const fourValueSyntax = `${keywords}\\s+${value}\\s+${keywords}\\s+${value}`

export default `(?:^${oneValueSyntax}$)|(?:^${twoValueSyntax}$)|(?:^${fourValueSyntax}$)`
