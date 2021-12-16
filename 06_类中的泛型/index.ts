// class DataManger {
// 	constructor(private data: string[] | number[]) {}
// 	getItem(index: number): string | number {
// 		return this.data[index];
// 	}
// }

// class DataManger<T> {
// 	constructor(private data: T[]) {}
// 	getItem(index: number): T {
// 		return this.data[index];
// 	}
// }

// 要求参数每项中包含name字段
// interface Item {
// 	name: string;
// }
// class DataManger<T extends Item> {
// 	constructor(private data: T[]) {}
// 	getItem(index: number): string {
// 		return this.data[index].name;
// 	}
// }

// const data = new DataManger<string>(['123']);
// const data = new DataManger([{ name: '123' }]);
// data.getItem(0);
// console.log(data.getItem(0));

// 要求：泛型只能指定number或string
// interface Item {
// 	name: string;
// }
// class DataManger<T> {
// 	constructor(private data: T[]) {}
// 	getItem(index: number): T {
// 		return this.data[index];
// 	}
// }
// const data = new DataManger<Item>([{ name: 'str' }]);
// data.getItem(0);

// class DataManger<T extends number | string> {
// 	constructor(private data: T[]) {}
// 	getItem(index: number): T {
// 		return this.data[index];
// 	}
// }

// const data = new DataManger<string>(['str']);
// data.getItem(0);

// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
	return params;
}

const func: <T>(params: T) => T = hello;

// const func: <T>(params: T) => T = <T>(params: T) => {
// 	return params;
// };
