// making a button

// let, because the button can change
// in appearance and innertext wise
// and can be re-used later

export const Button = (innerText) => {
  let element = document.createElement('button')
  let textnode = document.createTextNode(innerText)

  element.setAttribute('type', 'submit')
  element.setAttribute('value', 'go')

  element.appendChild(textnode)

  return element
}
