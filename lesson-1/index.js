'use strict';

document.addEventListener('DOMContentLoaded', () => {
	firstExercise();
	setTimeout(secondExercise, 1000);
});

function firstExercise() {
	const first = prompt('Введите число', '');
	const second = prompt('Введите систему счисления', '');
	first.match(/[a-z]/gi) != null || second.match(/[a-z]/gi) != null
		? console.log('Некорректный ввод!')
		: console.log((+first).toString(second));
}

function secondExercise() {
	const first = prompt('Введите число', '');
	if (first.match(/[a-z]/gi) != null) {
		console.log('Некорректный ввод!');
		return;
	}
	const second = prompt('Введите систему счисления', '');
	if (second.match(/[a-z]/gi) != null) {
		console.log('Некорректный ввод!');
		return;
	} else console.log(`Ответ: ${+first + +second}, ${+first / +second}`);
}
