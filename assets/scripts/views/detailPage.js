// <header>
// <h1> Gifinder </h1>
// <h2> Title of gif </h2>
// </header>

// <section>
// <img src="" alt="">
// </section>

// <section>
// <h3> Gif details </h3>

// <h4> Posted at </h4>
// <p> import_datetime </p>

// <h4> Get more info at </h4>
// <a href=""> bitly_url </a>
// </section> 

// importing elements
import { 
  Body, 
  Main,
  Header,
  headOne,
  headTwo,
  headThree,
  headFour,
  Text } 
  from '../components/index.js'

// showing clicked gif and detail info
export const detailPage = async (props) => {

  // assigning fixed variables to imported elements
  const body = Body()
  const main = Main('detailPage')
  const header = Header('detailHeader')
  const h1 = headOne()
  const h3 = headThree('hoiiii')

  // let, because the text shown changes depending on the gif
  let h2 = headTwo(props.title)
  let posted = Text(props.import_datetime)

  const theGif = document.createElement('img')
  theGif.src = `https://media.giphy.com/media/${props.id}/giphy.gif`

  body.appendChild(main)
  main.appendChild(header)
  header.appendChild(h1)
  header.appendChild(h2)
  main.appendChild(posted)
  main.appendChild(h3)
  main.appendChild(theGif)
}






