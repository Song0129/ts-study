// 定义全局变量
// declare var $: (param: () => void) => void;

// 定义全局函数  函数同名，参数不同，作用不同-函数重载
interface JqueryInstance {
	html: (html: string) => JqueryInstance;
}
declare function $(readyFunc: () => void): viod;
declare function $(selector: string): JqueryInstance;

// 使用interface的语法 实现函数重载
// interface JqueryInstance {
// 	html: (html: string) => JqueryInstance;
// }

// interface JQuery {
// 	(readyFunc: () => void): viod;
// 	(selector: string): JqueryInstance;
// }
// declare var $: JQuery;

// 如何对对象进行类型定义  以及对类进行类型定义  以及命名空间的嵌套
declare namespace $ {
	namespace fn {
		class init {}
	}
}
