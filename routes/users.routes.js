const router = require('express').Router()
const userController = require('../controller/user.controller')
 const auth = require('../auth/auth')

router.post('/register', userController.register)
router.post('/addAddr/:id', userController.addAddr)
router.post('/login', userController.login)
router.post('/logout', auth,userController.logOut)
router.post('/logoutAll',auth, userController.logOutAll)

module.exports = router