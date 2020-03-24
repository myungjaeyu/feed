import { Router } from 'express'

import feed from './feed'

const api = Router()

api.use('/feed', feed)

export default api
