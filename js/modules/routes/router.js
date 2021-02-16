import { homePage } from '../views/home.js'
import { detailPage } from '../views/detail.js'

export default function router() {


    routie({
      '': async (body) => {

        const removeDetail = document.querySelector('.detailPage')

        if (removeDetail !== null) {
          removeDetail.remove()
        }

        homePage()
      },
      'gif/:id': async (id) => {
        const removeHome = document.querySelector('.homePage')
       
        if (removeHome !== null) {
          removeHome.remove()
        }
       
        const res = await fetch(`https://api.giphy.com/v1/gifs/${id}?&api_key=JzbS3qH49ykiVKnHZx0z5M0gjNPVMbh3`)
        const data = await res.json()
        detailPage(data.data)
      },
    })
}


// `https://api.giphy.com/v1/gifs/trending?&api_key=JzbS3qH49ykiVKnHZx0z5M0gjNPVMbh3&limit=20`
