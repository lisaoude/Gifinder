// importing elements
import { homePage } from '../views/homePage.js'
import { detailPage } from '../views/detailPage.js'
import { showLoader } from '../states/showLoader.js'


export function router() {

  routie({
    '': (body) => {

      showLoader()

      const removeDetail = document.querySelector('#detailPage')

      if (removeDetail !== null) {
        removeDetail.remove()
      }

      homePage()
    },

    'gif/:id': (id) => {

      showLoader()

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