// export default const
//     gifContainer = document.querySelector('.gif-container'),
//     input = document.querySelector('.gif-type'),
//     form = document.querySelector('.gif-form'),
//     button = document.querySelector('.button');

// export default const gifContainer = document.querySelector('.gif-container');
// export default const input = document.querySelector('.gif-type');
// export default const form = document.querySelector('.gif-form');
// export default const button = document.querySelector('.button');
// const inputValue = 'test'

const input = document.querySelector('.gif-type')

export const endpoint = 'https://api.giphy.com/v1/gifs/search?q='
export const key = 'JzbS3qH49ykiVKnHZx0z5M0gjNPVMbh3'
export const limit = 20
export const searchUrl = `${endpoint}${input.value}&api_key=${key}&limit=${limit}`
export const url = `https://api.giphy.com/v1/gifs/trending?&api_key=${key}&limit=${limit}`


