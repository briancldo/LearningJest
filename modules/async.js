module.exports.funcExpectsCallback = (callback) => {
	const data = 'cheese';
	callback('cheese');
}

module.exports.retPromise = async () => {
	return 'cheese \'n crackers';
}

module.exports.retErrorPromise = async() => {
    throw new Error('woah there');
}

