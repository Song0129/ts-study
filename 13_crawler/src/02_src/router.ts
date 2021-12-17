import { Router, Request, Response } from 'express';
import Crawler from './crawler';
import MyAnalyzer from './analyzer';

interface RequestWithBody extends Request {
	body: {
		[key: string]: string;
	};
}

const router = Router();
router.get('/', (req: Request, res: Response) => {
	res.send(`
        <html>
            <body>
                <form method="post" action="/getData">
                    <input type="password" name="password" />
                    <button>提交</button>
                </form>
            </body>
        </html>
    `);
});

router.post('/getData', (req: RequestWithBody, res: Response) => {
	const { password } = req.body;
	if (password === '123') {
		const url = `https://song-api.only0129.top/slides`;
		// 实例化分析类
		const analyzer = MyAnalyzer.getInstance();
		// 实例化爬虫类
		new Crawler(url, analyzer);
		res.send('get data success');
	} else {
		res.send(`${req.teacherName} password Error`);
	}
});

export default router;
