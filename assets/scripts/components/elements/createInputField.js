export const inputField = () => {
  let element = document.createElement('input')

  element.setAttribute('type', 'text')
  element.setAttribute('id', 'input')
  element.setAttribute('required', 'required')
  element.setAttribute('placeholder', 'What kind of gifs would you like?')

  return element
}
