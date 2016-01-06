'use babel'

import {getRegularCallbackPath} from './paths'

export default class Response {
    constructor(path, socket) {
        this.path = path
        this._socket = socket
    }

    send(...responseArgs) {
        this._socket.emit(getRegularCallbackPath(this.path), 0, ...responseArgs)
    }

    fail(...responseArgs) {
        this._socket.emit(getRegularCallbackPath(this.path), 1, ...responseArgs)
    }
}
