'use babel'

import socketIO from 'socket.io'
import {createServer} from '../../lib'

let io = socketIO(3000)
let router = createServer(io)

router.get('/', (request, response) => {
    console.log('@Route /')
    response.send('Hello world!')
})

router.get('/yoyo', (request, response) => {
    console.log('@Route /yoyo')
    response.fail('failed!!!!!!!!!')
})

router.get('/one-way', (request, response) => {
    console.log('@Route one-way')
})
