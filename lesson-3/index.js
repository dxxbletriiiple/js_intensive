'use strict';
let arr = ['a', 'b', 'something', 'two', 'Long String', 'lol'];

function callback(item, index, array) {
	if (item.length <= 3) return true;
	return false;
}

Array.prototype.myFilter = function (callback, thisArg) {
	if (this === undefined || typeof callback !== 'function') throw new Error('Error!');
	if (thisArg) callback = callback.bind(thisArg);
	let result = [];
	let length = this.length;
	for (let i = 0; i < length; i++) {
		if (i in this) {
			if (callback(this[i])) result.push(this[i]);
		}
	}
	return result;
};

let newArr = arr.myFilter(callback);

console.log(newArr);
