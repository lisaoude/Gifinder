// import { body } from '../config/config.js'
// import { headOne } from '../components/createH1.js'
// import { text } from '../components/createText.js'
// import { receiveData } from '../modules/getData.js'


// // showing clicked gif and detail info
// export const detailPage = async (props) => {
//   // console.log(props)

//   const main = document.createElement('main')

//   let h1 = headOne(props.title)
//   // let p = text(props.)

//   const theGif = document.createElement('img')

//   main.setAttribute('class', 'detailPage')

//   theGif.src = `https://media.giphy.com/media/${props.id}/giphy.gif`

//   body.appendChild(main)
//   main.appendChild(h1)
//   main.appendChild(theGif)

//   let data = await receiveData(props.id)
  
// }







import { receiveData } from '../modules/getData.js'
// import { reloadHomePage } from '../modules/createGifs.js'
import { Body, Main, Header, headOne, headTwo } from '../components/index.js'


const gifDetailPage = async (props) => {

  let data = await receiveData(props.id)
}


// showing clicked gif and detail info
export const detailPage = async (props) => {

  const body = Body()
  const main = Main('detailPage')
  const header = Header('detailHeader')
  const h1 = headOne('Gifinder')
  const h2 = headTwo(props.title)

  const theGif = document.createElement('img')
  theGif.src = `https://media.giphy.com/media/${props.id}/giphy.gif`

  body.appendChild(main)
  main.appendChild(header)
  header.appendChild(h1)
  header.appendChild(h2)
  main.appendChild(theGif)

  await gifDetailPage()
}

detailPage()


// import { body } from '../config/config.js'
// import { receiveData } from '../modules/getData.js'


// // showing clicked gif and detail info

//   export const detailPage = async (props) => {
//   // console.log(props)

//   let title = props.title

//   // const body = document.querySelector('body')

//   const main = document.createElement('main')
//   const h1 = document.createElement('h1')
//   const h1Text = document.createTextNode(props.title)

//   const theGif = document.createElement('img')

//   main.setAttribute('class', 'detailPage')

//   theGif.src = `https://media.giphy.com/media/${props.id}/giphy.gif`

//   body.appendChild(main)
//   main.appendChild(h1)
//   h1.appendChild(h1Text)
//   main.appendChild(theGif)

//   let data = await receiveData(props.id)
// }





// <header>
// <h1> Gifinder </h1>
// <h2> Title of gif </h2>
// </header>

// <section>
// <img src="" alt="">
// </section>

// <section>
// <h3> Gif details </h3>
// <h4> Posted by </h4>
// <p> username (props.username) or (props.user.display_name)</p>

// <h4> Posted at </h4>
// <p> import_datetime </p>

// <h4> Get more info at </h4>
// <a href=""> bitly_url </a>
// </section> 