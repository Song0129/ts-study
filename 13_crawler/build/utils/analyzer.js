"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// 重写接口Analyzer  必须有analyze方法
var MyAnalyzer = /** @class */ (function () {
    function MyAnalyzer() {
    }
    MyAnalyzer.getInstance = function () {
        if (!MyAnalyzer.instance) {
            MyAnalyzer.instance = new MyAnalyzer();
        }
        return MyAnalyzer.instance;
    };
    // 分析组装数据
    MyAnalyzer.prototype.analyzerData = function (html) {
        var data = JSON.parse(html);
        return { time: new Date().getTime(), data: data.data };
    };
    // 获取文件数据、添加数据
    MyAnalyzer.prototype.getJsonContent = function (slideData, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            fileContent = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
        }
        fileContent[slideData.time] = slideData.data;
        return fileContent;
    };
    MyAnalyzer.prototype.analyze = function (html, filePath) {
        var sildeData = this.analyzerData(html);
        var fileContent = this.getJsonContent(sildeData, filePath);
        return JSON.stringify(fileContent);
    };
    return MyAnalyzer;
}());
exports.default = MyAnalyzer;
