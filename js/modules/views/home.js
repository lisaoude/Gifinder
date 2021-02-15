import { deleteGifs, createGifs } from '../components/gifs.js' 

// this function deletes the previous gifs
// and loads the new ones using the input value
export const createHomePage = (props, section) => {
  // console.log(props)
  // console.log(section)

  // remove previous gifs before loading next (gifs.js)
  let remove = deleteGifs()

  // append gifs to section (gifs.js)
  let gifs = createGifs(section, props)
  
}
