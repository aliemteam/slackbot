import * as express from 'express';
import hooks from './hooks';
const router = express.Router();

export default function route(bot: Botkit.Bot): express.Router {

    router.use('/hooks', hooks(bot));

    // router.post('/message', (req, res) => {
    //     console.log(req.body);
    //     res.sendStatus(200);
    // });

    router.get('/', (req, res) => {
        res.send('Invalid endpoint.');
    });

    return router;
}
