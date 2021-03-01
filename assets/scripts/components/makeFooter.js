// making footer

// all const, because I will use only one footer
// and the content stays the same everytime 


// importing elements from other files
import { footerContainer } from './elements/createFooter.js'
import { Text } from './elements/createText.js'
import { footerImg } from './elements/createFooterImg.js'


// and combining into one
export const Footer = () => {
  const footer = footerContainer()
  const textGiphy = Text('Powered by')
  const img = footerImg()
  const textDesigner = Text('© Lisa Oude Elferink - 2021')
  
  footer.appendChild(textGiphy)
  footer.appendChild(img)
  footer.appendChild(textDesigner)
      
  return footer
}
