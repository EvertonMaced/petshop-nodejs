import { Router } from "express"

import * as  PagesController from '../controllers/pageController'
import * as SearchController from '../controllers/searchControllers'

const router = Router()


router.get('/',PagesController.home)

router.get('/dogs',PagesController.dogs)

router.get('/cats',PagesController.cats)

router.get('/fishes',PagesController.fishes)

export default router