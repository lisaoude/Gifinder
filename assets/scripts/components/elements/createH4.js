// creating h4

// let, so I can use the same element multiple times
// and give a different textnode to it each time

export const headFour = (item) => {
  let element = document.createElement('h4')
  let textnode = document.createTextNode(item)

  element.appendChild(textnode)
  
  return element
}
