'use babel'

import socketIO from 'socket.io-client'
import {createClient} from '../../lib'

let io = socketIO('http://localhost:3000/')
let client = createClient(io)

client.req('/').then((message) => {
    console.log('@message', message)
})
