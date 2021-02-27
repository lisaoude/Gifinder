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
  Section,
  Footer
} from '../components/index.js'


// assigning imports to variables
const body = Body()
const main = Main('detailPage')
const header = Header()
const h1 = headOne()
const gif = document.createElement('img')
const h3 = headThree('Gif Details')
const h4Posted = headFour('Posted at')
const h4Source = headFour('Original source')
const h4Info = headFour('Wanna view on Giphy.com? Click!')
const container = Section('detailContainer')
const details = Section('detailSection')
const footer = Footer()


// showing clicked gif and detail info
export const detailPage = async (id) => {

  const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?&api_key=JzbS3qH49ykiVKnHZx0z5M0gjNPVMbh3`)
  const data = await response.json()

  gif.src = `https://media.giphy.com/media/${id}/giphy.gif`

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


  // appended elements into html
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
  details.appendChild(source)
  source.appendChild(sourceText)
  details.appendChild(a)
  a.appendChild(h4Info)
  main.appendChild(footer)
}