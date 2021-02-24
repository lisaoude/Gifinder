import { Header } from './elements/createHeader.js'
import { headOne } from './elements/createH1.js'
import { headTwo } from './elements/createH2.js'
import { headThree } from './elements/createH3.js'

export const homeHeader = (idName) => {
  const header = Header()
  const h1 = headOne()
  const h2 = headTwo('Get a Gif!')
  const h3 = headThree('what kind of gifs would you like?')

  header.setAttribute('id', idName)

  header.appendChild(h1)
  header.appendChild(h2)
  header.appendChild(h3)

  return header
}