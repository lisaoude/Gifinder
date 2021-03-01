export const backButton = (link) => {
  let href = document.createElement('a')
  href.setAttribute('href', link)

  let content = document.createElement('div')
  
  href.appendChild(content)

  return href
}
  