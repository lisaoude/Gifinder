// importing functions
import { dataHomePage } from '../modules/getData.js'
import { reloadHomePage } from '../modules/reloadHome.js'

// importing elements
import {
  Body,
  Main,
  homeHeader,
  Form,
  inputField,
  Button,
  Section,
  Footer,
  loadingState
} from '../components/index.js'


// assigning imports to variables
const body = Body()
const main = Main('homePage')
const header = homeHeader('homeHeader')
const form = Form()
const input = inputField()
const button = Button('Show the gifs')
const section = Section('gifContainer')
const footer = Footer()
const loader = loadingState()


// function to put getting data and showing the gifs together
const gifsHomePage = async () => {

  // gets data from the input value (getData.js)
  // if input value is empty, the trending gifs will be shown (as declared in getData.js)
  // let, because the data changes
  let data = await dataHomePage(input.value)

  // function reloadHomePage is carried out (reloadHome.js)
  reloadHomePage(data.data, section)

  // IF the form gets submitted, data will be fetched again
  // but this time using the input value
  form.addEventListener('submit', async function (event) {
    event.preventDefault()
    data = await dataHomePage(input.value)
    reloadHomePage(data.data, section)
  }) 
}


// append elements into html
export const homePage = () => {

  body.appendChild(main)
  main.appendChild(header)
  main.appendChild(form)
  form.appendChild(input)
  form.appendChild(button)
  main.appendChild(loader)
  main.appendChild(section)
  main.appendChild(footer)

  gifsHomePage()
}
