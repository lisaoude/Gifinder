export const headTwo = (item) => {
    let element = document.createElement('h2')
    let textnode = document.createTextNode(item)
    element.appendChild(textnode)
    return element
}
