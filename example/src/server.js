'use babel'

import socketIO from 'socket.io'
import {createServer} from '../../lib'

let io = socketIO(3000)
let router = createServer(io)

router.get('/', (request, response) => {
    console.log('@Route /')
    response.send('Hello world!')
})