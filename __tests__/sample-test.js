const sum = require('../FileCabinet/SuiteScripts/sum')

it('should assert strings are equal', () => {
  const a = 'foobar'
  const b = 'foobar'
  // comment this line:
  expect(a).toMatch(b)
  // and add this line:
  //   expect(true).toBeFalsy()
})

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
