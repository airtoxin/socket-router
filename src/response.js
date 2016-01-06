'use babel'

import constants from './constants'

export default class Response {
    constructor(path, socket) {
        this.path = path
        this._socket = socket
    }

    send(...responseArgs) {
        this._socket.emit(this.path + constants.CALLBACK_PREFIX, ...responseArgs)
    }
}
