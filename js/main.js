// declare variables
const gifContainer = document.querySelector('.gif-container')
const input = document.querySelector('.gif-type')
const form = document.querySelector('.gif-form')
const button = document.querySelector('.button')


// when 'form' is submitted, fetch the gifs
form.addEventListener('submit', (event) => {
    event.preventDefault()
    gifContainer.innerHTML = ''

    fetchGifs(input.value)
        .then(data => showGifs(data.data))

// when button is clicked, remove placeholder
button.addEventListener('click', removePlaceholder);

function removePlaceholder() {
    let placeholder = document.querySelector('.placeholder');

    placeholder.classList.add('remove');
}
})


// declare where the data (gifs) should be fetched from
const fetchGifs = (inputValue) => {
    const endpoint = 'https://api.giphy.com/v1/gifs/search?q='
    const key = 'JzbS3qH49ykiVKnHZx0z5M0gjNPVMbh3'
    const limit = 20
    const url = `${endpoint}${inputValue}&api_key=${key}&limit=${limit}`
    
    // return the promise that fetch gives us
    return fetch(url)
        .then(response => response.json())
        .catch(err => console.log(`Error ${err}`))
}


const showGifs = (data) => {

    // voor elk stukje data (gif)...
    data.forEach(data => {

        // create container element in which my data can be put
        const containerForGif = document.createElement('div')

        // set a class to that element
        containerForGif.setAttribute('class', 'containerForGif')

        // append made element to existing element
        gifContainer.appendChild(containerForGif)


        // create elements in which my data can be put
        const image = document.createElement('img')
        image.src = `https://media.giphy.com/media/${data.id}/giphy.gif`

        // append made element in to previously made element
        containerForGif.appendChild(image)
    })
}