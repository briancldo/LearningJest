function getValueSlowAsync() {
	return new Promise((resolve) => {
        // setTimeout simulates a promise that takes time to resolve
        setTimeout(() => resolve('your slow value, sir'), 250);
    });
};

module.exports = getValueSlowAsync;