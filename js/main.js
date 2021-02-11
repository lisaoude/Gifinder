import { fetchGifs } from "./modules/fetchData.js"
import { showGifs } from './modules/printGifs.js'

// declare variables


const init = () => {
    const gifContainer = document.querySelector('.gif-container')
const form = document.querySelector('.gif-form')
const button = document.querySelector('.button')
const input = document.querySelector('.gif-type')

            form.addEventListener('submit', (event) => {
            event.preventDefault()
            
            fetchGifs(input.value)
                .then(data => {
                    console.log(data.data)
                    
                    let testje = showGifs(gifContainer, data.data)
                    console.log(gifContainer)
                })
            })
}

init()
// const init = () => {
    
//     form.addEventListener('submit', function () {
//         data().then((data = data))
//     })
//     const abc = data()
// }

// const data = async () => {
//     if (input.value === '') {
//         const res = await fetchGifs(url)
//         console.log(res)
//         return res  
//     } else {
//         const res = await fetchGifs(searchUrl)
//         console.log('klik', res)

//         return  console.log('filled')
//     }
// } 
// // const init = () => {
// //     if (input.value === '') {
// //         const func = fetchGifs(url)
// //             .then(data => {
// //                 console.log(data.data)
            
// //                 let testje = showGifs(gifContainer, data.data)
// //                 console.log(gifContainer)
// //         })
// //     } else {

// //         form.addEventListener('submit', (event) => {
// //             event.preventDefault()
            
// //             console.log(searchUrl)

// //             console.log('je moeder')
// //             fetchGifs(searchUrl)
// //                 .then(data => {
// //                     console.log(data.data)
                    
// //                     let testje = showGifs(gifContainer, data.data)
// //                     console.log(gifContainer)
// //                 })
// //             })
// //     }
// // }

// init()
// when 'form' is submitted, fetch the gifs


//     console.log(input.value)

//     if (input.value === '') {
//         console.log('empty')
//     } else {
//         console.log('hoi')
//     }

// console.log(searchUrl)
// const testje = async () => {
//     const res = await fetch('')
//     const data = await res.json();
//     console.log(data)
// }

// testje()
    // if (geen user input, populairste gifjes?) {
    //     // Initial fetch, populairste resultaten
    // } else if ( user input, zoek deze term ) {
    //     // Verwijder eerst de vorige resultaten
    //     // Fetch de nieuwe resultaten
    // 