export const createGifs = (element, props) => {
  props.forEach(item => {
      const frame = document.createElement('iframe')
      frame.src = `${item.embed_url}`
      frame.title = `${item.title}`
      element.appendChild(frame)
  })
  return element
}

export const deleteGifs = () => {
  const container = document.querySelector('#gifContainer')
   if (container.hasChildNodes()) {
     const iframes = Array.from(container.childNodes)
     iframes.forEach(item => {
       item.remove()
     })
    console.log(iframes)
  }
}