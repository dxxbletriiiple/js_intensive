module.exports = function makeObjectDeepCopy(obj) {
	let result = {};
	for (let key in obj) {
		if (typeof key == 'object' && obj[key] != null) {
			if (Array.isArray(key)) {
				key.forEach((element) => {
					if (typeof element == 'object') makeObjectDeepCopy(element);
				});
			}
			makeObjectDeepCopy(key);
		}
		result[key] = obj[key];
	}
	return result;
};
