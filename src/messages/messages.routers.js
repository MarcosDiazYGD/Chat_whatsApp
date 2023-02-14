const messageServices = require('./messages.services')
const router = require('express').Router()

router.get('/messages', messageServices.getAllMessages )
router.post('/messages', messageServices.postMessage )


// Las rutas que tengan variables seran las ultimas
router.get('/messages/:id', messageServices.getMessageById )
router.put('/messages/:id', messageServices.putMessage )
router.delete('/messages/:id', messageServices.deleteMessage )


module.exports = router