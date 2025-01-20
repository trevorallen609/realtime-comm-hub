const express = require('express')
const router = express.Router()
const passport = require('passport')


const {getAllRooms, getMyRooms, addNewRoom, joinRoom, leaveRoom, sendMessage} = require('../controllers/chat')

// get all chat rooms
router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    getAllRooms
)

router.get(
    '/myrooms',
    passport.authenticate('jwt', { session: false }),
    getMyRooms
)

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    addNewRoom
)

router.post(
    '/join',
    passport.authenticate('jwt', { session: false }),
    joinRoom
)

router.post(
  '/leave',
  passport.authenticate('jwt', { session: false }),
  leaveRoom
)

// Send a message to a chat room
router.post(
    '/:id/messages',
    passport.authenticate('jwt', { session: false }),
    sendMessage
)

module.exports = router

<!-- Updated: 2024-03-05T18:22:00.312077 -->

<!-- Updated: 2024-05-16T13:26:00.312077 -->

<!-- Updated: 2024-06-17T13:51:00.312077 -->

<!-- Updated: 2024-07-16T09:16:00.312077 -->

<!-- Updated: 2024-09-21T18:27:00.312077 -->
