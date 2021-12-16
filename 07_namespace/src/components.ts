namespace Components {
	// 导出子命名空间
	export namespace SubComponents {
		export class Test {}
	}

	// 命名空间还可导出interface
	export interface User {
		name: string;
	}

	export class Header {
		constructor() {
			const elem = document.createElement('div');
			elem.innerText = 'This is Header';
			document.body.appendChild(elem);
		}
	}

	export class Content {
		constructor() {
			const elem = document.createElement('div');
			elem.innerText = 'This is Content';
			document.body.appendChild(elem);
		}
	}

	export class Footer {
		constructor() {
			const elem = document.createElement('div');
			elem.innerText = 'This is Footer';
			document.body.appendChild(elem);
		}
	}
}
