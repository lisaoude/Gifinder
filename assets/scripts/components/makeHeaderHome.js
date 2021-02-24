import { Header } from './elements/createHeader.js'
import { headOne } from './elements/createH1.js'
import { headTwo } from './elements/createH2.js'

export const homeHeader = (idName) => {
  const header = Header()
  const h1 = headOne()
  const h2 = headTwo('Get a Gif!')

  header.appendChild(h1)
  header.appendChild(h2)

  return header
}