import { receiveData } from '../modules/getData.js'
import { reloadHomePage } from '../modules/createGifs.js'
import { Body, Main, homeHeader, Form, inputField, Button, Section } from '../components/index.js'

const body = Body()
const main = Main('homePage')
const header = homeHeader('homeHeader')
const form = Form()
let input = inputField()
const button = Button('Show the gifs')
const section = Section('gifContainer')

const gifsHomePage = async () => {
    // gets data from the input value (fetch.js)
    // let, because data changes based on input value
    let data = await receiveData(input.value)
    // console.log(data.data[0])

    // function createHomePage is carried out (home.js)
    reloadHomePage(data.data, section)

    // IF the form gets submitted, data will be fetched again
    // but this time using the input value
    form.addEventListener('submit', async function (event) {
        event.preventDefault()
         data = await receiveData(input.value)
          reloadHomePage(data.data, section)
     }) 
}

export const homePage = () => {

    body.appendChild(main)
    main.appendChild(header)
    main.appendChild(form)
    form.appendChild(input)
    form.appendChild(button)
    main.appendChild(section)

    gifsHomePage()
}

