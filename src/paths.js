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
