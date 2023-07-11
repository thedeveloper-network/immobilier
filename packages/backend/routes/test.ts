import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/db/test', ( req: Request, res: Response ) => {
    try {


        res.status(200).send({

        })
    } catch ( e ){

    }
    
});

router.get('/queue/test', ( req: Request, res: Response ) => {

    res.status(200).send( {
        message: 'testing queue'
    })
});

export default router;