// creating p

// let, so I can use the same element multiple times
// and give a different textnode to it each time

export const Text = (item) => {
  let element = document.createElement('p')
  let textnode = document.createTextNode(item)

  element.appendChild(textnode)
  
  return element
}
