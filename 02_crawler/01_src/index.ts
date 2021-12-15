import superagent from 'superagent';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

interface Slide {
	id: number;
	image: string;
	link: string;
}

interface SlideData {
	time: number;
	data: Slide[];
}

interface Content {
	[propName: number]: Slide[];
}

class Crawler {
	private secret = 'secretKey';
	private url = `https://song-api.only0129.top/slides`;

	// 获取数据
	async getHtml() {
		const result = await superagent.get(this.url);
		// console.log(result.text);
		return result.text;
	}

	// 分析组装数据
	analyzerData(html: string) {
		// console.log(html);
		const data = JSON.parse(html);
		return { time: new Date().getTime(), data: data.data };
	}

	// 获取文件数据、添加数据
	getJsonContent(slideData: SlideData) {
		const filePath = path.resolve(__dirname, '../data/data.json');
		let fileContent: Content = {};
		if (fs.existsSync(filePath)) {
			fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
		}
		fileContent[slideData.time] = slideData.data;
		return fileContent;
	}

	// 写入数据
	async initSpiderProcess() {
		const filePath = path.resolve(__dirname, '../data/data.json');
		const html = await this.getHtml();
		const data = this.analyzerData(html);
		const fileContent = this.getJsonContent(data);
		// console.log(data);
		fs.writeFileSync(filePath, JSON.stringify(fileContent));
	}

	constructor() {
		this.initSpiderProcess();
	}
}

const crawler = new Crawler();
console.log(crawler);
