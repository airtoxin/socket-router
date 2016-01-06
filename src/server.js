'use babel'

import Request from './request'
import Response from './response'
import {getRegularPath} from './paths'

export default class Server {
    constructor(io) {
        this._io = io
        this._socket = null
        this._io.on('connection', (socket) => {
            this._onConnection(socket)
        })
        this._routes = []
    }

    get(path, callback) {
        this._routes.push({
            path,
            callback
        })
    }

    _onConnection(socket) {
        this._socket = socket
        for (let {path, callback} of this._routes) {
            this._socket.on(getRegularPath(path), (...requestArgs) => {
                callback(new Request(path, requestArgs), new Response(path, this._socket))
            })
        }
    }
}
