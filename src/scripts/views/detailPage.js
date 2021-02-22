import { body } from '../config/config.js'
import { receiveData } from '../modules/getData.js'


// showing clicked gif and detail info

  export const detailPage = async (props) => {
  // console.log(props)

  let title = props.title

  const main = document.createElement('main')
  const h1 = document.createElement('h1')
  const h1Text = document.createTextNode(props.title)

  const theGif = document.createElement('img')

  main.setAttribute('class', 'detailPage')

  theGif.src = `https://media.giphy.com/media/${props.id}/giphy.gif`

  body.appendChild(main)
  main.appendChild(h1)
  h1.appendChild(h1Text)
  main.appendChild(theGif)

  let data = await receiveData(props.id)
}


// note: more content will be added to this page!
