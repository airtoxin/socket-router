'use babel'

import ServerRouter from './server'
import ClientRouter from './client'

export function createServer(io) {
    return new ServerRouter(io)
}

export function createClient(io) {
    return new ClientRouter(io)
}
