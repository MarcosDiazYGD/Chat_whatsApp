const conversationsServices = require('./conversations.services')
const router = require('express').Router()

router.get('/conversations', conversationsServices.getAllConversations )
router.post('/conversations', conversationsServices.postConversation )


// Las rutas que tengan variables seran las ultimas
router.get('/conversations/:id', conversationsServices.getConversationById )
router.put('/conversations/:id', conversationsServices.putConversation )
router.delete('/conversations/:id', conversationsServices.deleteConversation )


module.exports = router