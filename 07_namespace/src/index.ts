// 命名空间相互调用时 用来标识调用关系
///<reference path="./components.ts"/>
namespace Home {
	export class Page {
		user: Components.User = {
			name: 'tom',
		};
		constructor() {
			new Components.Header();
			new Components.Content();
			new Components.Footer();
		}
	}
}
