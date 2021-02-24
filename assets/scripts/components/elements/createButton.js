export const Button = (innerText) => {
  let element = document.createElement('button')
  let buttonText = document.createTextNode(innerText)

  element.setAttribute('id', 'button')
  element.setAttribute('type', 'submit')
  element.setAttribute('value', 'go')

  element.appendChild(buttonText)

  return element
}
