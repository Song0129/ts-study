import { Router, Request, Response } from 'express';
import Crawler from './crawler';
import MyAnalyzer from './analyzer';

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

router.post('/getData', (req: Request, res: Response) => {
	console.log(req);
	if (req.body.password === '123') {
		const url = `https://song-api.only0129.top/slides`;
		// 实例化分析类
		const analyzer = MyAnalyzer.getInstance();
		// 实例化爬虫类
		new Crawler(url, analyzer);
		res.send('get data success');
	} else {
		res.send('password Error');
	}
});

export default router;
