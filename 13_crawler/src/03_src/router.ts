import { Router, Request, Response } from 'express';
import Crawler from './crawler';
import MyAnalyzer from './analyzer';
import fs from 'fs';
import path from 'path';

interface RequestWithBody extends Request {
	body: {
		[key: string]: string;
	};
}

const router = Router();
router.get('/', (req: Request, res: Response) => {
	const isLogin = req.session ? req.session.login : false;
	if (isLogin) {
		res.send(`
        <html>
            <body>
               <a href="/getData">爬取内容</a>
               <a href="/showData">查看内容</a>
               <a href="/logout">退出</a>
            </body>
        </html>
    `);
	} else {
		res.send(`
        <html>
            <body>
                <form method="post" action="/login">
                    <input type="password" name="password" />
                    <button>登陆</button>
                </form>
            </body>
        </html>
    `);
	}
});

router.get('/logout', (req: RequestWithBody, res: Response) => {
	if (req.session) {
		req.session.login = undefined;
	}
	res.redirect('/');
});

router.post('/login', (req: RequestWithBody, res: Response) => {
	const { password } = req.body;
	const isLogin = req.session ? req.session.login : false;
	if (isLogin) {
		res.send('已经登录');
	} else {
		if (password === '123' && req.session) {
			req.session.login = true;
			res.send('登陆成功');
		} else {
			res.send('登录失败');
		}
	}
});

router.get('/getData', (req: RequestWithBody, res: Response) => {
	const isLogin = req.session ? req.session.login : false;
	if (isLogin) {
		const url = `https://song-api.only0129.top/slides`;
		// 实例化分析类
		const analyzer = MyAnalyzer.getInstance();
		// 实例化爬虫类
		new Crawler(url, analyzer);
		res.send('get data success');
	} else {
		res.send('请登录后爬取内容');
	}
});

router.get('/showData', (req: RequestWithBody, res: Response) => {
	const isLogin = req.session ? req.session.login : false;
	if (isLogin) {
		try {
			const position = path.resolve(__dirname, '../data/data.json');
			const result = fs.readFileSync(position, 'utf8');
			res.json(JSON.parse(result));
		} catch (e) {
			res.send('暂无数据');
		}
	} else {
		res.send('请登录后查看数据');
	}
});

export default router;
