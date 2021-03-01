// creating loading state

// all const, because I will use only one header at my home page
// and the content stays the same everytime


// importing elements from other files
import { Container } from './elements/createContainer.js'


// and combining into one
export const loadingState = () => {
  const loader = Container()

  loader.setAttribute('id', 'loader')
  loader.classList.add('hide')

  return loader
}
