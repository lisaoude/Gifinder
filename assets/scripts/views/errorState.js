// importing elements
import {
  Body,
  Main,
  Footer,
  errorMessage
} from '../components/index.js'
  
  
// assigning imports to variables
const body = Body()
const main = Main('homePage')
const footer = Footer()
const error = errorMessage('An error occured while loading the content. Please try again later.')
  
  
export const errorState = () => {
  body.appendChild(main)
  main.appendChild(error)
  main.appendChild(footer)
}