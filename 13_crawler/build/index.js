"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
// 问题1：express 库的类型定义文件 .d.ts 文件类型描述不准确
// 问题2：当我使用中间件的时候，对 req 或 res 做了修改之后呢，实际上类型并没有改变
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(router_1.default);
app.listen(7001, function () {
    console.log('server is running');
});
