import superagent from 'superagent';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import MyAnalyzer from './analyzer';

// MyAnalyzer实例的数据类型
// 要求必须有analyze方法
export interface Analyzer {
	analyze: (html: string, filePath: string) => string;
}

class Crawler {
	// 定义文件路径
	private filePath = path.resolve(__dirname, '../data/data.json');

	// 获取数据
	async getHtml() {
		const result = await superagent.get(this.url);
		// console.log(result.text);
		return result.text;
	}

	// 写入数据
	async initSpiderProcess() {
		// 获取数据
		const html = await this.getHtml();
		// 获取组合数据，拼接原有数据
		const fileContent = this.analyzer.analyze(html, this.filePath);
		// 数据写入
		fs.writeFileSync(this.filePath, fileContent);
	}

	constructor(private url: string, private analyzer: Analyzer) {
		this.initSpiderProcess();
	}
}

const secret = 'secretKey';
const url = `https://song-api.only0129.top/slides`;

// 实例化分析类
const analyzer = new MyAnalyzer();
// 实例化爬虫类
new Crawler(url, analyzer);
