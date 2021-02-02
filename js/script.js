const gifContainer = document.querySelector('.gifContainer')
const input = document.querySelector('.gifType')
const form = document.querySelector('.gifForm')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    gifContainer.innerHTML = ''
    fetchGifs(input.value)
})

const fetchGifs = (inputValue) => {
    const
        endpoint = 'https://api.giphy.com/v1/gifs/search?q=',
        key = 'JzbS3qH49ykiVKnHZx0z5M0gjNPVMbh3',
        limit = 20,
        url = `${endpoint}${inputValue}&api_key=${key}&limit=${limit}`

    fetch(url)
        .then(
            (res) => {
                res.json().then((data) => {
                    showGifs(data.data)
                })
            }
        )

        .catch((err) => {
            console.log(`Error: ${err}`)
        })

    const showGifs = (data) => {
        data.forEach(data => {
            const containerForGif = document.createElement('div')
            containerForGif.setAttribute('class', 'containerForGif')
            gifContainer.appendChild(containerForGif)

            const image = document.createElement('img')
            image.src = `https://media.giphy.com/media/${data.id}/giphy.gif`
            containerForGif.appendChild(image)
        })
    }
}
