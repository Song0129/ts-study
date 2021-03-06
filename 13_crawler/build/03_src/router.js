"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var crawler_1 = __importDefault(require("./crawler"));
var analyzer_1 = __importDefault(require("./analyzer"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send("\n        <html>\n            <body>\n               <a href=\"/getData\">\u722C\u53D6\u5185\u5BB9</a>\n               <a href=\"/showData\">\u67E5\u770B\u5185\u5BB9</a>\n               <a href=\"/logout\">\u9000\u51FA</a>\n            </body>\n        </html>\n    ");
    }
    else {
        res.send("\n        <html>\n            <body>\n                <form method=\"post\" action=\"/login\">\n                    <input type=\"password\" name=\"password\" />\n                    <button>\u767B\u9646</button>\n                </form>\n            </body>\n        </html>\n    ");
    }
});
router.get('/logout', function (req, res) {
    if (req.session) {
        req.session.login = undefined;
    }
    res.redirect('/');
});
router.post('/login', function (req, res) {
    var password = req.body.password;
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.send('已经登录');
    }
    else {
        if (password === '123' && req.session) {
            req.session.login = true;
            res.send('登陆成功');
        }
        else {
            res.send('登录失败');
        }
    }
});
router.get('/getData', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        var url = "https://song-api.only0129.top/slides";
        // 实例化分析类
        var analyzer = analyzer_1.default.getInstance();
        // 实例化爬虫类
        new crawler_1.default(url, analyzer);
        res.send('get data success');
    }
    else {
        res.send('请登录后爬取内容');
    }
});
router.get('/showData', function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        try {
            var position = path_1.default.resolve(__dirname, '../data/data.json');
            var result = fs_1.default.readFileSync(position, 'utf8');
            res.json(JSON.parse(result));
        }
        catch (e) {
            res.send('暂无数据');
        }
    }
    else {
        res.send('请登录后查看数据');
    }
});
exports.default = router;
