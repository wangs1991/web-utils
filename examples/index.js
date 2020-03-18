import menu from './menu'
require('./css/application.css')

const __BASEURI = './pages/'

const getTemplate = data => {
    let tpl = []

    data.forEach(n => {
        tpl.push('<li><a href="' + __BASEURI + n.uri + '">' + n.name + '</a></li>')
    })
    return tpl.join('\n')
}

const evtHandler = e => {
    console.log(this.src)
}

const element = document.createElement('div')
element.innerHTML = getTemplate(menu)
document.getElementById('MENUList').appendChild(element)

Array.prototype.forEach.call(element.getElementsByTagName('a'), n => {
    n.addEventListener('click', e => {
        e = e || window.event
        console.log(e.target.getAttribute('src'))
        // e.preventDefault()
        return false
    }, true)
})