export const headOne = () => {
    let element = document.createElement('h1')
    let textnode = document.createTextNode('Gifinder')
    element.appendChild(textnode)
    return element
}
