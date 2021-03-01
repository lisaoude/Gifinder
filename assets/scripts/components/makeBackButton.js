// making backbutton

// all const, because its always the same backbutton
// with the same 'content' and endpoint


// importing elements from other files
import { Href } from './elements/createHref.js'
import { Container } from './elements/createContainer.js'


// and combining into one
export const backButton = (link) => {
  const href = Href(link)
  const container = Container()
    
  href.appendChild(container)
  
  return href
}
