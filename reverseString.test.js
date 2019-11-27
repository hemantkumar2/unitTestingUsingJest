const reverseString = require('./reverseString')

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
})

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh')
})