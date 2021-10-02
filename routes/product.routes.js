const router = require('express').Router()
const postController = require('../controller/product.controller')
const auth = require('../auth/auth')

router.post('/add',auth, postController.addPost)

router.get('/mypost', auth, postController.mypost)
router.patch('/edit/:id', auth, postController.editPost)
module.exports=router