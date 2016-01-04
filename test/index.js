'use babel'

import assert from 'assert'
import {createServer, createClient} from '../lib'
import Server from '../lib/server'
import Client from '../lib/client'

describe(__filename, () => {
    it('should export two functions', () => {
        assert.strictEqual(typeof createServer, 'function')
        assert.strictEqual(typeof createClient, 'function')
    })

    it('should return instance', () => {
        const _ioServer = {
            on() {}
        }
        const _ioClient = {
            on(){}
        }
        const server = createServer(_ioServer)
        const client = createClient(_ioClient)
        assert.ok(server instanceof Server)
        assert.ok(client instanceof Client)
    })
})
