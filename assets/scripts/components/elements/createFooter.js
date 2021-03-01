export const Footer = () => {
  const element = document.createElement('footer')
    
  const textGiphy = document.createElement('p')
  const textnodeGiphy = document.createTextNode('Powered by')

  const img = document.createElement('img')
  img.src = `https://user-images.githubusercontent.com/57795294/109191560-95629e00-7796-11eb-8d1c-12ddfdf91bd6.png`
    
  const textAuthor = document.createElement('p')
  const textnodeAuthor = document.createTextNode('© Lisa Oude Elferink - 2021')


  element.appendChild(textGiphy)
  textGiphy.appendChild(textnodeGiphy)
  element.appendChild(img)
  element.appendChild(textAuthor)
  textAuthor.appendChild(textnodeAuthor)
    
  return element
}
  