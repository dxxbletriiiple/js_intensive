const log100 = () => console.log(100);

function createDebounceFunction(callback, ms) {
	let time;
	return (...args) => {
		clearTimeout(time);
		time = setTimeout(() => {
			console.log('ms = ', ms, 'time = ', time);
			callback.apply(this, args);
		}, ms);
	};
}

const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();
setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 400);
