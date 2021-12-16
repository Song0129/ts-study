interface Person {
	name: string;
	age: number;
	gender: string;
}

// class Teacher {
// 	constructor(private info: Person) {}
// 	getInfo(key: string) {
// 		if (key === 'name' || key === 'age' || key === 'gender') return this.info[key];
// 	}
// }

// const teacher = new Teacher({ name: 'tom', age: 20, gender: '男' });
// // tName为number、string、undefined
// const tName = teacher.getInfo('name');
// console.log(tName);

class Teacher {
	constructor(private info: Person) {}
	getInfo<T extends keyof Person>(key: T): Person[T] {
		return this.info[key];
	}
}

const teacher = new Teacher({ name: 'tom', age: 20, gender: '男' });
// tName为number、string、undefined
const tName = teacher.getInfo('age');
console.log(tName);
