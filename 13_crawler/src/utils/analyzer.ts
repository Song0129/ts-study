import fs from 'fs';
import path from 'path';
import { Analyzer } from '../utils/crawler';

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

// 重写接口Analyzer  必须有analyze方法
export default class MyAnalyzer implements Analyzer {
	private static instance: MyAnalyzer;

	static getInstance() {
		if (!MyAnalyzer.instance) {
			MyAnalyzer.instance = new MyAnalyzer();
		}
		return MyAnalyzer.instance;
	}

	// 分析组装数据
	private analyzerData(html: string) {
		const data = JSON.parse(html);
		return { time: new Date().getTime(), data: data.data };
	}

	// 获取文件数据、添加数据
	private getJsonContent(slideData: SlideData, filePath: string) {
		let fileContent: Content = {};
		if (fs.existsSync(filePath)) {
			fileContent = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
		}
		fileContent[slideData.time] = slideData.data;
		return fileContent;
	}

	public analyze(html: string, filePath: string) {
		const sildeData = this.analyzerData(html);
		const fileContent = this.getJsonContent(sildeData, filePath);
		return JSON.stringify(fileContent);
	}

	private constructor() {}
}
