// importing elements
import { homePage } from '../views/homePage.js'
import { detailPage } from '../views/detailPage.js'
import { loadingState } from '../states/loadingState.js'


export function router() {

  routie({

    // if theres nothing behind the '/'
    '': (body) => {

        // show loading state
        loadingState()

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

        // show loading state
        loadingState()


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