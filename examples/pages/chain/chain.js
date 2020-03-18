require('../../css/application.css')
import Chain from '../../../src/chain'

const process1 = new Chain(data => {
    console.log(1)
    return 'nextSuccessor'
})

const process2 = new Chain(function () {
    let self = this

    // 异步传递方法
    console.log(2)
    setTimeout(function (){
        self.next()
    }, 2500)
})

const process3 = new Chain(data => {
    console.log(3)
    // return 'nextSuccessor'
})

process1.setNextSuccessor(process2).setNextSuccessor(process3)
process1.passRequest()
