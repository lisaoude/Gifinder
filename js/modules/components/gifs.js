// import { deleteGifs, createGifs } from '../components/gifs.js' 

// this function deletes the previous gifs
// and loads the new ones using the input value
export const reloadHomePage = (props, section) => {
  // console.log(props)
  // console.log(section)

  // remove previous gifs before loading next (gifs.js)
  let remove = deleteGifs()

  // append gifs to section (gifs.js)
  let gifs = createGifs(section, props)
  
}


// showing gifs in html
 const createGifs = (element, props) => {

  // for each props item (gif)
  props.forEach(item => {

      // create a element
      const clickable = document.createElement('a')

      // create an img element
      const actualGifs = document.createElement('img')

      clickable.href = `#gif/${item.id}`;

      // identify the source
      actualGifs.src = `https://media.giphy.com/media/${item.id}/giphy.gif`

      // give each their own original title
      actualGifs.title = `${item.title}`

      
      clickable.appendChild(actualGifs)
      element.appendChild(clickable)

      // console.log(actualGifs)
  })
  return element
}

// delete previously loaded gifs
 const deleteGifs = () => {

  // turn html element into variable 
  const container = document.querySelector('#gifContainer')

  // if the container had any content (gifs)
   if (container.hasChildNodes()) {

     // convert to array to be able to remove the items in this array
     const previousGifs = Array.from(container.childNodes)

     // delete each items in this array
     previousGifs.forEach(item => {
       item.remove()
     })
    // console.log(iframes)
  }
}
