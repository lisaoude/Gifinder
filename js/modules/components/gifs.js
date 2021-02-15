// showing gifs in html
export const createGifs = (element, props) => {

  // for each props item (gif)
  props.forEach(item => {

      // create an iframe element
      const actualGifs = document.createElement('img')

      // identify the source
      actualGifs.src = `https://media.giphy.com/media/${item.id}/giphy.gif`

      // give each their own original title
      actualGifs.title = `${item.title}`

      // append frame to element
      element.appendChild(actualGifs)

      console.log(actualGifs)
  })
  return element
}

// delete previously loaded gifs
export const deleteGifs = () => {

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
