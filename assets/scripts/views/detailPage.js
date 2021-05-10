// importing elements from other file
import {
  Body,
  Main,
  Header,
  headOne,
  headTwo,
  headThree,
  headFour,
  Text,
  Href,
  Section,
  Footer,
  backButton
} from '../components/index.js'

import { removeLoader } from '../states/removeLoader.js'


// showing clicked gif and detail info
export const detailPage = async (id) => {

  const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?&api_key=JzbS3qH49ykiVKnHZx0z5M0gjNPVMbh3`)
  const data = await response.json()

  removeLoader()

  // NOTE: assigning the fixed variables to the imported elements resulted in
  // previously loaded content not being removed once the next was loaded.

  // assigning fixed variables to imported elements
  const body = Body()
  const main = Main('detailPage')
  const header = Header()
  const h1 = headOne('Gifinder')

  const gif = document.createElement('img')
  gif.src = `https://media.giphy.com/media/${id}/giphy.gif`

  const h3 = headThree('Gif Details')
  const h4Posted = headFour('Posted at')
  const h4Source = headFour('Original source')
  const h4Info = headFour('Wanna view on Giphy.com? Click!')
  const container = Section('detailContainer')
  const details = Section('detailSection')
  const footer = Footer()
  const back = backButton('/')


  // let, because the text shown changes depending on the gif
  // gif title
  let h2 = headTwo(data.data.title)

  // posted time
  let posted = Text(data.data.import_datetime)

  // original source text
  let sourceText = Text(data.data.source)

  // original source href
  let source = Href(data.data.source)

  // view on giphy 
  let a = Href(data.data.bitly_url)

  // append elements into html
  body.appendChild(main)
  main.appendChild(header)

  header.appendChild(back)
  header.appendChild(h1)
  header.appendChild(h2)

  main.appendChild(container)
  container.appendChild(gif)
  container.appendChild(details)

  details.appendChild(h3)
  details.appendChild(h4Posted)
  details.appendChild(posted)
  details.appendChild(h4Source)
  details.appendChild(source)
  source.appendChild(sourceText)
  details.appendChild(a)
  a.appendChild(h4Info)
  main.appendChild(footer)
}
