// creating h1

// let, so I can use the same element multiple times
// and give a different textnode to it each time

export const headOne = (item) => {
  let element = document.createElement('h1')
  let textnode = document.createTextNode(item)

  element.appendChild(textnode)
  
  return element
}
