// importing elements
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
  Section
} from '../components/index.js'




// showing clicked gif and detail info
export const detailPage = async (id) => {

  const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?&api_key=JzbS3qH49ykiVKnHZx0z5M0gjNPVMbh3`)
  const data = await response.json()

  console.log(data.data)

  // assigning fixed variables to imported elements
  const body = Body()
  const main = Main('detailPage')
  const header = Header()
  const h1 = headOne()
  const h3 = headThree('Gif Details')
  const h4Posted = headFour('Posted at')
  const h4Source = headFour('Original source?')
  const source = Text('Right here!')
  const h4Info = headFour('Wanna view on Giphy.com? Click!')
  const container = Section('detailContainer')
  const details = Section('detailSection')

  // let, because the text shown changes depending on the gif
  let h2 = headTwo(data.data.title)
  let posted = Text(data.data.import_datetime)
  let sourceHref = Href(data.data.source_post_url)
  let a = Href(data.data.bitly_url)

  const gif = document.createElement('img')
  gif.src = `https://media.giphy.com/media/${id}/giphy.gif`

  body.appendChild(main)
  main.appendChild(header)

  header.appendChild(h1)
  header.appendChild(h2)

  main.appendChild(container)
  container.appendChild(gif)
  container.appendChild(details)

  details.appendChild(h3)
  details.appendChild(h4Posted)
  details.appendChild(posted)
  details.appendChild(h4Source)
  details.appendChild(sourceHref)
  sourceHref.appendChild(source)
  details.appendChild(a)
  a.appendChild(h4Info)
}
