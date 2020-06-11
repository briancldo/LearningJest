describe('mocked request module', () => {
	beforeAll(() => jest.mock('../modules/request'));

	test('make a request, using a mock module', () => {
		const makeRequestMock = require('../modules/usesRequest');
		const makeRequestExpectedValue = 'your quick value, sir';

		expect.assertions(1);
		return makeRequestMock().then((val) =>
			expect(val).toBe(makeRequestExpectedValue)
		);

		/*
        equivalent to the above Promise resolution:
        expect(makeRequest()).resolves.toBe(makeRequestExpectedValue);
    */
	});
});

describe('unmocked (actual) request module', () => {
	beforeAll(() => {
		jest.resetModules();
		jest.unmock('../modules/request');
	});

	test('mock timer', () => {
		const makeRequestActual = require('../modules/usesRequest');
		const makeRequestExpectedValue = 'your slow value, sir';

		return makeRequestActual().then((val) =>
			expect(val).toBe(makeRequestExpectedValue)
		);
	});
});
