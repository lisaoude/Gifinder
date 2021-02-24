export const Text = (item) => {
  let element = document.createElement('p')
  let textnode = document.createTextNode(item)

  element.appendChild(textnode)
  
  return element
}
