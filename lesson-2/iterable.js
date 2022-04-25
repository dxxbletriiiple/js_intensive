const myIterable = { from: 1, to: 4 };

myIterable[Symbol.iterator] = function () {
	return {
		current: this.from,
		last: this.to,
		next() {
			if (
				this.current > this.last ||
				typeof this.current != 'number' ||
				typeof this.last != 'number'
			)
				throw new Error('Ошибка!');
			else if (this.current <= this.last) {
				return { done: false, value: this.current++ };
			} else return { done: true };
		},
	};
};

for (let key of myIterable) console.log(key);
