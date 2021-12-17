import express, { Request, Response, NextFunction } from 'express';
import router from './router';
import bodyParser from 'body-parser';

const app = express();
// 问题1：express 库的类型定义文件 .d.ts 文件类型描述不准确
// 解决：继承原有类型Request，并添加对应类型
// 问题2：当我使用中间件的时候，对 req 或 res 做了修改之后呢，实际上类型并没有改变
// 解决：修改类型描述文件，增加对应类型

app.use(bodyParser.urlencoded({ extended: false }));
app.use((req: Request, res: Response, next: NextFunction) => {
	req.teacherName = 'tom';
	next();
});
app.use(router);

app.listen(7001, () => {
	console.log('server is running');
});
