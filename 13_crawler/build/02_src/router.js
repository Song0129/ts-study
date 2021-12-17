"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crawler_1 = __importDefault(require("./crawler"));
var analyzer_1 = __importDefault(require("./analyzer"));
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    res.send("\n        <html>\n            <body>\n                <form method=\"post\" action=\"/getData\">\n                    <input type=\"password\" name=\"password\" />\n                    <button>\u63D0\u4EA4</button>\n                </form>\n            </body>\n        </html>\n    ");
});
router.post('/getData', function (req, res) {
    var password = req.body.password;
    if (password === '123') {
        var url = "https://song-api.only0129.top/slides";
        // 实例化分析类
        var analyzer = analyzer_1.default.getInstance();
        // 实例化爬虫类
        new crawler_1.default(url, analyzer);
        res.send('get data success');
    }
    else {
        res.send("".concat(req.teacherName, " password Error"));
    }
});
exports.default = router;
