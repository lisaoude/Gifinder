// importing elements
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
    'gif/:id': (id) => {

        // select main with class of homePage
        const removeHome = document.querySelector('#homePage')
       
        // if the homePage is there, remove it
        if (removeHome !== null) {
          removeHome.remove()
        }
      detailPage(id)
    }
  })
}