const functions = require('./function');
test('Adds 2 + 2 equals to 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})


test('Adds 2 + 2 not equal to 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})


//check for truthy and falsy values

//toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})
//toBeFalsy
test('should be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy()
})

//user should be Hemant Nirmalkar

test('user should be Hemant Nirmalkar', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Hemant',
    lastName: 'Nirmalkar'
  })
})

//less than and greater than 
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600)
})

// Regular expression
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i)
})

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin']
  expect(usernames).toContain('admin')
})

// working with async data
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1)
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})

test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1)
  const data = await functions.fetchUser()

  expect(data.name).toEqual('Leanne Graham')

})