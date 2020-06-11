const f1 = require('../modules/spied');

test('we will spy on the f1 function and call all mockFn methods', () => {
	const f1Wrapper = { f1 }; // f1 must be in an object to create a spy
	const f1Spy = jest.spyOn(f1Wrapper, 'f1');
	let f1Result = f1Wrapper.f1(1, 2);

	expect(f1Spy).toHaveBeenCalledTimes(1);
	expect(f1Spy.mock.calls[0]).toEqual([1, 2]);

	expect(f1Result).toBe(3);

	f1Spy.mockClear();

	f1Result = f1Wrapper.f1(3, 40);
    expect(f1Spy).toHaveBeenCalledTimes(1);
	expect(f1Spy.mock.calls[0]).toEqual([3, 40]);

	expect(f1Result).toBe(43);
});
