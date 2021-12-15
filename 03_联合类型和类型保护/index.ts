interface Bird {
	fly: Boolean;
	sing: () => {};
}

interface Dog {
	fly: Boolean;
	bark: () => {};
}

// 类型断言 - 类型保护
function trainAnimal(animal: Bird | Dog) {
	if (animal.fly) {
		(animal as Bird).sing();
	} else {
		(animal as Dog).bark();
	}
}

// in 语法 - 类型保护
function trainAnimalSecond(animal: Bird | Dog) {
	if ('sing' in animal) {
		animal.sing();
	} else {
		animal.bark();
	}
}

// typeof 语法 - 类型保护
function add(first: string | number, second: string | number) {
	if (typeof first === 'string' || typeof second === 'string') {
		return `${first}${second}`;
	}
	return first + second;
}

// instanceof 语法 - 类型保护
class NumberObj {
	count: number;
}

function addSecond(first: object | NumberObj, second: object | NumberObj) {
	if (first instanceof NumberObj && second instanceof NumberObj) {
		return first.count + second.count;
	}
	return 0;
}
