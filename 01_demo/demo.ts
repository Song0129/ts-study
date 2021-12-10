/**
 * constructor super
 */
// class Person {
// 	constructor(public name: string) {}
// }

// class Teacher extends Person {
// 	constructor(name: string, public age: number) {
// 		super(name);
// 	}
// }

// let teacher = new Teacher('tom', 28);

// console.log(teacher.name, teacher.age);

/**
 * getters setters
 */
// class Person {
// 	constructor(private _name: string) {}
// 	get name() {
// 		return this._name + ' lee';
// 	}
// 	set name(name: string) {
// 		const realName = name.split(' ')[0];
// 		this._name = realName;
// 	}
// }

// const person = new Person('tom');
// console.log(person.name);
// person.name = 'jerry lee';
// console.log(person.name);

/**
 * 单例模式
 */
// class Demo {
// 	private static instance: Demo;
// 	private constructor(public name: string) {}
// 	static getInstance(name: string) {
// 		if (!this.instance) {
// 			this.instance = new Demo(name);
// 		}
// 		return this.instance;
// 	}
// }

// const demo1 = Demo.getInstance('tom');
// const demo2 = Demo.getInstance('jerry');

// console.log(demo1);
// console.log(demo2);
// console.log(Demo);

/**
 * readonly
 */
// class Person {
// 	// 传统方式
// 	// private _name: string;
// 	// constructor(name: string) {
// 	// 	this._name = name;
// 	// }
// 	// get name() {
// 	// 	return this._name;
// 	// }

// 	public readonly name: string;
// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }

// const person = new Person('tom');
// // person.name = 'jerry';
// console.log(person.name);

/**
 * 抽象类
 * 只能被继承
 */

// abstract class Geom {
// 	getType() {
// 		return 'Geom';
// 	}
// 	abstract getArea(): number;
// }

// class Circle extends Geom {
// 	constructor(public width: number) {
// 		super();
// 	}
// 	getArea(): number {
// 		return Math.PI * this.width ** 2;
// 	}
// }

// const circle = new Circle(2);
// console.log(circle.getArea());

// class Rectangle extends Geom {
// 	constructor(public width: number, public height: number) {
// 		super();
// 	}
// 	getArea(): number {
// 		return this.width * this.height;
// 	}
// }

// const rectangle = new Rectangle(2, 22);
// console.log(rectangle.getArea());

/**
 * 接口
 */
interface Person {
	name: string;
}
interface Teacher extends Person {
	teachingAge: number;
}
interface Student extends Person {
	age: number;
}
const teacher: Teacher = {
	name: 'tom',
	teachingAge: 2,
};

const student: Student = {
	name: 'jerry',
	age: 20,
};

const getUerName = (user: Person) => {
	console.log(user.name);
};

console.log(12);
