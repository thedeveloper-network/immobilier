import express, { Request, Response } from 'express';
import { AppDataSource } from '../db/dbConnect';
import { ListingModel } from '../models/Listing';
const router = express.Router();

router.get('/db/test/list', async ( req: Request, res: Response ) => {
    try {
        const lRep = AppDataSource.getRepository( ListingModel );
        const listings = await lRep.find();
        res.status(200).send({
            message: 'ok',
            listings
        })
    } catch ( e ){
        res.status(500).send({
            error: e
        })
    } 
});
router.get('/db/test/create', async ( req: Request, res: Response ) => {
    try {
        const listing = new ListingModel()
        listing.name = 'New Listing';
        listing.description = 'Test '+ new Date().getTime();
        listing.published = false;

        const lRep = AppDataSource.getRepository( ListingModel );
        await lRep.save( listing );

        res.status(200).send({
            message: 'created',
            listing
        })
    } catch( e ){
        res.status(500).send({
            error: e
        })
    }
})

router.get('/queue/test', ( req: Request, res: Response ) => {

    res.status(200).send( {
        message: 'testing queue'
    })
});

export default router;