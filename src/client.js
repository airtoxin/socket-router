'use babel'

import constants from './constants'

export default class Client {
    constructor(io) {
        this._io = io
        this._io.on(constants.REGISTER_CALLBACK, this._registerCallback)
    }

    _registerCallback(path, resolve, reject) {
        this._io.on(path + constants.CALLBACK_PREFIX, (hasError, ...responseArgs) => {
            if (hasError) return reject(...responseArgs)
            resolve(...responseArgs)
        })
    }

    req(path, ...requestArgs) {
        return new Promise((resolve, reject) => {
            this._registerCallback(path, resolve, reject)
            this._io.emit(path, ...requestArgs)
        })
    }
}
