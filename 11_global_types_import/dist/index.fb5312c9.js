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
    constructor(info){
        this.info = info;
    }
    getInfo(key) {
        return this.info[key];
    }
}
const teacher = new Teacher({
    name: 'tom',
    age: 20,
    gender: '男'
});
// tName为number、string、undefined
const tName = teacher.getInfo('age');
console.log(tName);

//# sourceMappingURL=index.fb5312c9.js.map
