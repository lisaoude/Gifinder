// creating loader with span

// getting body
import { Body } from '../components/index.js'


// const, because there's one loader
// and it's used in the same way each time

// show loading state when gifs are being fetched
export const showLoader = () => {

  const body = Body()
  const span = document.createElement('span')
  let textnode = document.createTextNode('loading..')
  
  span.appendChild(textnode)
  body.appendChild(span)
}
  