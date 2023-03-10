import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// Get localhost:3000/skills
router.get('/', skillsCtrl.index)

// Get localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

// Get /skills/:id
router.get('/:id', skillsCtrl.show)

// Post localhost:3000/skills
router.post('/', skillsCtrl.create)

// Delete todos/:id
router.delete('/:id', skillsCtrl.delete)

export {
  router
}
