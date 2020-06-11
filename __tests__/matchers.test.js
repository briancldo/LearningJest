const { sum, createObject } = require('../modules/matchers');

test('add 1 + 2 = 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('create object w/ two properties', () => {
	expect(createObject(2, 3)).toEqual({ a: 2, b: 3 });
});

// result: (pass) thus, yes it does!
test('does toEqual apply to arrays, too?', () => {
	const arr = [1, 2, 'three'];

	expect(arr).toEqual([1, 2, 'three']);
});