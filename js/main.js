import {receiveData} from './modules/data/fetch.js'
import {createHomePage} from './modules/views/home.js'


const init = async () => {
    const input = document.querySelector('#input')
    const button = document.querySelector('#button')
    const main = document.querySelector('main')

    // Create section element
    let section = document.createElement('section')
    section.setAttribute('id', 'gifContainer')
    main.appendChild(section)

    let data = await receiveData(input.value)
    
    createHomePage(data.data, section)

    button.addEventListener('click', async function () {
        data = await receiveData(input.value)
        createHomePage(data.data, section)
    })
}

init()


