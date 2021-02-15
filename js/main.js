import {receiveData} from './modules/data/fetch.js'
import {createHomePage} from './modules/views/home.js'


// this function shows the trending gifs
const start = async () => {

    // turn html elements into variables
    const input = document.querySelector('#input')
    // const button = document.querySelector('#button')
    const form = document.querySelector('form')
    const main = document.querySelector('main')

    // create section element
    let section = document.createElement('section')

    // set id to that section
    section.setAttribute('id', 'gifContainer')

    // append section in to main
    main.appendChild(section)

    // gets data from the input value (fetch.js)
    // let, because data changes based on input value
    let data = await receiveData(input.value)
    
    // function createHomePage is carried out (home.js)
    createHomePage(data.data, section)

    // IF the button gets clicked, data will be fetched again
    // but this time using the input value
    form.addEventListener('submit', async function (event) {
        event.preventDefault()
         data = await receiveData(input.value)
          createHomePage(data.data, section)
     })  
}

start()
