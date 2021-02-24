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
export const detailPage = async (props) => {

  // assigning fixed variables to imported elements
  const body = Body()
  const main = Main('detailPage')
  const header = Header('detailHeader')
  const h1 = headOne()
  const h3 = headThree('Gif Details')
  const h4Posted = headFour('Posted at')
  const h4Info = headFour('Get more info at')
  const p = Text('Click here to view this gif on the Giphy website')
  const a = Href(props.bitly_url)
  const sectionGif = Section('sectionGif')
  const sectionDetails = Section('sectionDetails')

  // let, because the text shown changes depending on the gif
  let h2 = headTwo(props.title)
  let posted = Text(props.import_datetime)

  const gif = document.createElement('img')
  gif.src = `https://media.giphy.com/media/${props.id}/giphy.gif`

  body.appendChild(main)
  main.appendChild(header)

  header.appendChild(h1)
  header.appendChild(h2)

  main.appendChild(sectionGif)
  sectionGif.appendChild(gif)

  main.appendChild(sectionDetails)
  sectionDetails.appendChild(h3)
  sectionDetails.appendChild(h4Posted)
  sectionDetails.appendChild(posted)
  sectionDetails.appendChild(h4Info)
  sectionDetails.appendChild(a)
  a.appendChild(p)
}
