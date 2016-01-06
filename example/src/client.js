'use babel'

import socketIO from 'socket.io-client'
import {createClient} from '../../lib'

let io = socketIO('http://localhost:3000/')
let client = createClient(io)

client.req('/').then((message) => {
    console.log('@message', message)
})

client.req('/yoyo', 'hogehoge').then((...args) => {
    console.log('@success args', args)
}).catch((...args) => {
    console.log('@fail args', args)
})
