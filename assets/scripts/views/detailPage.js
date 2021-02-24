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

  console.log(data)

  // assigning fixed variables to imported elements
  const body = Body()
  const main = Main('detailPage')
  const header = Header('detailHeader')
  const h1 = headOne()
  const h3 = headThree('Gif Details')
  const h4Posted = headFour('Posted at')
  const h4Info = headFour('Get more info at')
  const p = Text('Click here to view this gif on the Giphy website')
  const a = Href(data.data.bitly_url)
  const sectionGif = Section('sectionGif')
  const sectionDetails = Section('sectionDetails')

  // let, because the text shown changes depending on the gif
  let h2 = headTwo(data.data.title)
  let posted = Text(data.data.import_datetime)

  const gif = document.createElement('img')
  gif.src = `https://media.giphy.com/media/${id}/giphy.gif`

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
