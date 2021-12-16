// 泛型 generic 泛指的类型

// 函数声明：用泛型来指定参数的类型
function join<T, P>(first: T, second: P) {
	return `${first}${second}`;
}

// 泛型也可对函数返回值进行指定
function anotherJoin<T>(first: T, second: T): T {
	return first;
}

// 参数为数组也可使用泛型进行定义
function map<T>(arr: T[]) {
	return arr;
}

// 调用函数：给定确定的类型
// 可直接指定，也可用TS类型推断
join<string, number>('123', 1);

anotherJoin<string>('1', '2');

map<object>([{ b: 1 }]);
