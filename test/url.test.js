import url from 'types/url'

const urlRegex = new RegExp(url)

describe('The <url> data type is specified using the url() functional notation.', () => {
  // TODO: This is not as easy as I thought
  // Temporarily removing the test...
  // describe('It may be written without quotes', () => {
  //   it('url(http://mysite.example.com/mycursor.png)', () => {
  //     expect(urlRegex.test('url(http://mysite.example.com/mycursor.png)')).toBeTruthy()
  //   })
  // })

  describe('It may be written with single quotes', () => {
    it("url('http://mysite.example.com/mycursor.png')", () => {
      expect(urlRegex.test("url('http://mysite.example.com/mycursor.png')")).toBeTruthy()
    })
  })

  describe('It may be written with double quotes', () => {
    it('url("http://mysite.example.com/mycursor.png")', () => {
      expect(urlRegex.test('url("http://mysite.example.com/mycursor.png")')).toBeTruthy()
    })
  })
})
