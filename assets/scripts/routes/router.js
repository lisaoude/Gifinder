import { homePage } from '../views/homePage.js'
import { detailPage } from '../views/detailPage.js'



export default function router() {

  routie({

    // if theres nothing behind the '/'
    '': (body) => {

      // select main with class of detailPage
      const removeDetail = document.querySelector('#detailPage')

      // if the detailPage is there, remove it
      if (removeDetail !== null) {
        removeDetail.remove()
      }

    homePage()
    },

      // if theres 'gif / a gif id' behind the '/'
    'gif/:id': async (id) => {

      // select main with class of homePage
      const removeHome = document.querySelector('#homePage')
       
      // if the homePage is there, remove it
      if (removeHome !== null) {
        removeHome.remove()
      }
       
      // and fetch the data from the API using the gifs ID
      const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?&api_key=JzbS3qH49ykiVKnHZx0z5M0gjNPVMbh3`)
      const data = await response.json()
      detailPage(data.data)
    },
  })
}
