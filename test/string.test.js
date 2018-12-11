import string from 'types/string'

const stringRegex = new RegExp(string)

describe('The <string> data type is composed of any number of Unicode characters surrounded by either double (") or single (\') quotes.', () => {
  it('"This string is demarkated by double quotes."', () => {
    expect(stringRegex.test('"This string is demarkated by double quotes."')).toBeTruthy()
  })

  it("'This string is demarkated by single quotes.'", () => {
    expect(stringRegex.test("'This string is demarkated by single quotes.'")).toBeTruthy()
  })
})
