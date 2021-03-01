// making home page header

// all const, because I will use only one header at my home page
// and the content stays the same everytime 


// importing elements from other files
import { Header } from './elements/createHeader.js'
import { headOne } from './elements/createH1.js'
import { headTwo } from './elements/createH2.js'


// and combining into one
export const homeHeader = (idName) => {
  const header = Header()
  const h1 = headOne('Gifinder')
  const h2 = headTwo('Get a Gif!')

  header.appendChild(h1)
  header.appendChild(h2)

  return header
}
