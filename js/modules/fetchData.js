// declare where the data (gifs) should be fetched from
export const fetchGifs = async (inputValue) => {
    const endpoint = 'https://api.giphy.com/v1/gifs/search?q='
    const key = 'JzbS3qH49ykiVKnHZx0z5M0gjNPVMbh3'
    const limit = 20
    const url = `${endpoint}${inputValue}&api_key=${key}&limit=${limit}`
    
    // return the promise that fetch gives us
    const response = await fetch(url, { method: 'get', mode: 'cors'});
    const data = await response.json();
    return data

}

