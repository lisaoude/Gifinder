// deletes the previously loaded gifs
// and loads the new ones using the input value
export const reloadHomePage = (props, section) => {

  // remove previous gifs before loading next
  const remove = deleteGifs()

  // append gifs to section
  const gifs = createGifs(section, props)
}


// showing gifs in html
const createGifs = (element, props) => {

  // for each props item (gif)
  props.forEach(item => {

    // create 'a' element
    const clickable = document.createElement('a')

    // add href to 'a' element
    clickable.href = `#gif/${item.id}`;

    // create an img element
    const actualGifs = document.createElement('img')

    // identify the source
    actualGifs.src = `https://media.giphy.com/media/${item.id}/giphy.gif`

    // give each their own original title
    actualGifs.title = `${item.title}`

    clickable.appendChild(actualGifs)
    element.appendChild(clickable)

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
  }
}
