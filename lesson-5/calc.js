class Calculator {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	set setX(newX) {
		if (newX == undefined || typeof newX != 'number') throw new Error('Invalid first argument');
		this.x = newX;
	}

	set setY(newY) {
		if (newY == undefined || typeof newY != 'number')
			throw new Error('Invalid second argument');
		this.y = newY;
	}

	logSum() {
		return console.log(this.x + this.y);
	}
	logSub() {
		return console.log(this.x - this.y);
	}
	logMul() {
		return console.log(this.x * this.y);
	}
	logDiv() {
		return console.log(this.x / this.y);
	}
}

const calc = new Calculator(1, 1);
