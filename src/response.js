'use babel'

import constants from './constants'

export default class Response {
    constructor(path, socket) {
        this.path = path
        this._socket = socket
        this._destRoute = this.path + constants.CALLBACK_PREFIX
    }

    send(...responseArgs) {
        this._socket.emit(this._destRoute, 0, ...responseArgs)
    }

    fail(...responseArgs) {
        this._socket.emit(this._destRoute, 1, ...responseArgs)
    }
}
