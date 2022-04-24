module.exports = function makeObjectDeepCopy(obj) {
	let result = {};
	for (let key in obj) {
		if (typeof key == 'object' && obj[key] != null) makeObjectDeepCopy(key);
		result[key] = obj[key];
	}
	return result;
};
