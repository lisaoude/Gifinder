import { deleteGifs, createGifs } from '../components/gifs.js' 

export const createHomePage = (props, section) => {
  console.log(props)
  console.log(section)


  // Remove previous gifs before loading next
  let remove = deleteGifs()

  // Append gifs to section
  let gifs = createGifs(section, props)
  
}

