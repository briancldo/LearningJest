const {
	funcExpectsCallback,
	retPromise,
	retErrorPromise,
} = require('../modules/async');

// callback
test('testing a function that takes a callback', (done) => {
	// be sure to have 'done' as a param
	function callback(data) {
		try {
			// need try/catch block
			expect(data).toBe('cheese');
			done(); // jest waits for the done call. important in testing callbacks!
		} catch (err) {
			done(err); // error in the expect will be caught
		}
	}

	funcExpectsCallback(callback);
});

// promises
test('function that returns a promise, using .then', () => {
	// must include the 'return' for jest to wait for promise to resolve.
	return retPromise().then((data) => expect(data).toBe("cheese 'n crackers"));
});

// promises, again
test('function that catches a error in promise', () => {
	// expect one assertion. without this line, a fulfilled promise will not fail.
	expect.assertions(1);
	// must include 'return'
	return retErrorPromise().catch((err) => expect(err.message).toBe('woah there'));
});


test('promise, using .resolves', () => {
    // alternatively, can use 'await' instead of 'return.' if so, add 'async' in front of function
    return expect(retPromise()).resolves.toBe("cheese 'n crackers");
});

test('promise error, using .rejects', () => {
    // alternatively, can use 'await' instead of 'return.' if so, add 'async' in front of function
    return expect(retErrorPromise()).rejects.toThrow('woah there');
});

test('promise, using async/await', async () => {
    const data = await retPromise();

    expect(data).toBe("cheese 'n crackers");
});

test('promise error, using async/await',async () => {
    expect.assertions(1);
    try {
        await retErrorPromise();
    } catch(err) {
        expect(err.message).toBe('woah there');
    }
});