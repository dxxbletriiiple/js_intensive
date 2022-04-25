module.exports = function makeObjectDeepCopy(obj) {
	if (typeof obj !== 'object' || obj == null) return obj;
	const result = Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		const value = obj[key];
		result[key] = makeObjectDeepCopy(value);
	}
	return result;
};
