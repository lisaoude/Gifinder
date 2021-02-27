export const Footer = () => {
  const element = document.createElement('footer')
    
  const text = document.createElement('p')
  const textnode = document.createTextNode('Powered by')

  const img = document.createElement('img')
  img.src = `https://user-images.githubusercontent.com/57795294/109191560-95629e00-7796-11eb-8d1c-12ddfdf91bd6.png`
    
  element.appendChild(text)
  text.appendChild(textnode)
  element.appendChild(img)
    
  return element
}
  