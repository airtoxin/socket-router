'use babel'

import {
    getCallbackRegisteringPath,
    getRegularPath,
    getRegularCallbackPath
} from './paths'

export default class Client {
    constructor(io) {
        this._io = io
        this._io.on(getCallbackRegisteringPath(), this._registerCallback)
    }

    _registerCallback(path, resolve, reject) {
        this._io.on(getRegularCallbackPath(path), (hasError, ...responseArgs) => {
            if (hasError) return reject(...responseArgs)
            resolve(...responseArgs)
        })
    }

    req(path, ...requestArgs) {
        return new Promise((resolve, reject) => {
            this._registerCallback(path, resolve, reject)
            this._io.emit(getRegularPath(path), ...requestArgs)
        })
    }

    send(path, ...requestArgs) {
        this._io.emit(getRegularPath(path), ...requestArgs)
    }
}
