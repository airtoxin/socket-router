'use babel'

import constants from './constants'

export default class Client {
    constructor(io) {
        this._io = io
        this._io.on(constants.REGISTER_CALLBACK, this._registerCallback)
    }

    _registerCallback(path, callback) {
        this._io.on(path + CALLBACK_PREFIX, (...responseArgs) => {
            callback(...responseArgs)
        })
    }
}
