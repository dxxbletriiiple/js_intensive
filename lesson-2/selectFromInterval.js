module.exports = function selectFromInterval(arr, start, end) {
	if (!arr || !start || !end || !Array.isArray(arr)) throwErr();
	let result;
	if (start > end) {
		result = arr.filter((item) =>
			typeof item != 'number' ? throwErr() : start >= item && item >= end,
		);
	} else if (start < end) {
		result = arr.filter((item) =>
			typeof item != 'number' ? throwErr() : start <= item && item <= end,
		);
	}
	function throwErr() {
		throw new Error('Ошибка!');
	}

	return result;
};
