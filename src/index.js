import keyboard from './keyboard.js'
import Listener from './listener.js'
import Chain from './chain.js'
import debounce from './debounce.js'
import throttle from './throttle.js'
import madapter from './madaper.js'
import plt from './platform.js'
import aop from './aop'
import Sizzle from './sizzle'

// 移动端方法
export const mUtils = {
    keyboard,
    plt,
    madapter,
    beforefn: aop.beforefn,
    afterfn: aop.afterfn,
    Sizzle
}

export const cUtils = {
    Listener,
    Chain,
    debounce,
    throttle,
    plt,
    beforefn: aop.beforefn,
    afterfn: aop.afterfn,
    Sizzle
}

// 除移动端特性方法外的通用的方法
export default {
    keyboard,
    plt,
    madapter,
    beforefn: aop.beforefn,
    afterfn: aop.afterfn,
    Sizzle,
    Listener,
    Chain,
    debounce,
    throttle,
    plt,
    beforefn: aop.beforefn,
    afterfn: aop.afterfn,
    Sizzle
}
