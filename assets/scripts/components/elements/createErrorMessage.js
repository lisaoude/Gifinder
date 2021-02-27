export const errorMessage = (item) => {
  let element = document.createElement('h3')
  let textnode = document.createTextNode(item)
  
  element.appendChild(textnode)
    
  return element
}
  