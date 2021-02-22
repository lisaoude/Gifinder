import { receiveData } from '../modules/getData.js'
import { reloadHomePage } from '../modules/createGifs.js'
import { body, sectionForGifs } from '../config/config.js'


// showing trending gifs on load

export const homePage = async () => {
    // console.log('home')

    // create element for main
    const main = document.createElement('main')

    // create elements for section
    const sectionForText = document.createElement('section')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')

    // create elements for form
    const form = document.createElement('form')
    const input = document.createElement('input')
    const button = document.createElement('button')
    const buttonText = document.createTextNode('Show me the gifs!')

    // give h1 and h2 their content
    h1.innerHTML = 'Get a Gif!'
    h2.innerHTML = 'What kind of gifs would you like?'

    // give the main a class (for styling purposes)
    main.setAttribute('class', 'homePage')

    // set some attributes for input and button
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'input')
    input.setAttribute('name', 'giftype')
    input.setAttribute('required', 'required')
    input.setAttribute('placeholder', 'Tell me!')
    button.setAttribute('id', 'button')
    button.setAttribute('type', 'submit')
    button.setAttribute('value', 'go')

    // set id to section for gifs
    sectionForGifs.setAttribute('id', 'gifContainer')

    // append elements to html, inside the correct parents
    body.appendChild(main)
    main.appendChild(sectionForText)
    main.appendChild(form)
    main.appendChild(sectionForGifs)
    sectionForText.appendChild(h1)
    sectionForText.appendChild(h2)
    form.appendChild(input)
    form.appendChild(button)
    button.appendChild(buttonText)
    

    // gets data from the input value (fetch.js)
    // let, because data changes based on input value
    let data = await receiveData(input.value)
    // console.log(data.data[0])
    // function createHomePage is carried out (home.js)
    reloadHomePage(data.data, sectionForGifs)

    // IF the form gets submitted, data will be fetched again
    // but this time using the input value
    form.addEventListener('submit', async function (event) {
        event.preventDefault()
         data = await receiveData(input.value)
          reloadHomePage(data.data, sectionForGifs)
     }) 
}
