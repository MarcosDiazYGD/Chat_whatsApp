const usersServices = require('./users.services')
const router = require('express').Router()

router.get('/users', usersServices.getAllUsers )
router.post('/users', usersServices.postUser )


// Las rutas que tengan variables seran las ultimas
router.get('/users/:id', usersServices.getUserById )
router.put('/users/:id', usersServices.putUser )
router.delete('/users/:id', usersServices.deleteUser )


module.exports = router