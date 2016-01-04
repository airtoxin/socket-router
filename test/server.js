'use babel'

import assert from 'assert'
import Server from '../lib/server'

describe(__filename, () => {
    let io = null
    let server = null

    beforeEach(() => {
        io = {
            on() {}
        }
        server = new Server(io)
    })

    it('should set connection handler', () => {
        io = {
            on(eventName, handler) {
                assert.strictEqual(eventName, 'connection')
                assert.strictEqual(typeof handler, 'function')
            }
        }
        new Server(io)
    })

    it('should push arguments when get called', () => {
        let path = 'pathpath'
        let callback = function(){}
        server.get(path, callback)
        assert.deepEqual(server._routes, [{path, callback}])
    })

    it('_onConnection', () => {
        let routes = [{
            path: 'yoyo',
            callback: function(){}
        }]
        io = {
            on(eventName, handler) {

            }
        }
    })
})
