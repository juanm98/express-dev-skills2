import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// Get localhost:3000/skills
router.get('/', skillsCtrl.index)

// Get localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

// Post localhost:3000/skills
router.post('/', skillsCtrl.create)

export {
  router
}
