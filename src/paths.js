'use babel'

export function getCallbackRegisteringPath() {
    return `$$router$register$callback$$`
}

export function getRegularPath(path) {
    return `$$router$${path}$$`
}

export function getRegularCallbackPath(path) {
    return `$$router$${path}$callback$$`
}

export function getRoomPath(path, roomName) {
    return `$$router$${path}$room${roomName}$$`
}

export function getRoomCallbackpath(path, roomName) {
    return `$$router$${path}$room${roomName}$callback$$`
}
