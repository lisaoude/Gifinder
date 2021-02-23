export const headFour = (item) => {
    let element = document.createElement('h4')
    let textnode = document.createTextNode(item)
    element.appendChild(textnode)
    return element
}
