import { body } from '../config/config.js'
import { receiveData } from '../data/fetch.js'

// export const detailPage = (props) => {
  export const detailPage = async (props) => {
  console.log(props)

  let title = props.title
//   console.log(title)

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









// // import { receiveData } from './modules/data/fetch.js'
// // import { reloadHomePage } from './modules/views/home.js'

// // gonna need to import data from a not yet existent file
// // so i can show whatever data i would want to show (details)

// import { body } from './modules/config/config.js'
// import router from './modules/routes/router.js'


// // this function shows the detailed info of the clicked gif
// export const detailPage = async () => {
    
//     // create element for main
//     const main = document.createElement('main')

//     // create elements for section
//     const sectionForText = document.createElement('section')
//     const h1 = document.createElement('h1')
//     const h2 = document.createElement('h2')

//     // create element section for gifs
//     const sectionForGifs = document.createElement('section')
    
//     // give h1 and h2 their content
//     h1.innerHTML = 'detailpagina'

//     // give the main a class (for styling purposes)
//     main.setAttribute('class', 'detailPage')

//     // append elements to html, inside the correct parents
//     body.appendChild(main)
//     main.appendChild(sectionForText)
//     main.appendChild(form)
//     main.appendChild(sectionForGifs)
//     sectionForText.appendChild(h1)
//     sectionForText.appendChild(h2)
//     form.appendChild(input)
//     form.appendChild(button)
//     button.appendChild(buttonText)
    

//     // // gets data from the input value (fetch.js)
//     // // let, because data changes based on input value
//     // let data = await receiveData(input.value)
    
//     // // function createHomePage is carried out (home.js)
//     // reloadHomePage(data.data, sectionForGifs)

//     // // IF the button gets clicked, data will be fetched again
//     // // but this time using the input value
//     // form.addEventListener('submit', async function (event) {
//     //     event.preventDefault()
//     //      data = await receiveData(input.value)
//     //       reloadHomePage(data.data, sectionForGifs)
//     //  }) 
     
//     router() 
// }

// detailPage()
