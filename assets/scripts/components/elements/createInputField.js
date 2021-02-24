export const inputField = () => {
  let element = document.createElement('input')

  element.setAttribute('type', 'text')
  element.setAttribute('id', 'input')
  element.setAttribute('name', 'giftype')
  element.setAttribute('required', 'required')
  element.setAttribute('placeholder', 'Tell me!')

  return element
}
