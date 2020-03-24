import { Router, Response, Request } from 'express'

import { getProducts, getRanks } from '@services/feed'

const feed: Router = Router()

feed.get('/products', async (req: Request, res: Response) => {

    const { key } = req.query

    const result = await getProducts(key)

    res.json(result)
})

feed.get('/ranks', async (req: Request, res: Response) => {

    const { key } = req.query

    const result = await getRanks(key)

    res.json(result)
})

export default feed
