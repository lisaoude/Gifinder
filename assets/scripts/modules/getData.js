import { url, trendingType, searchType, key, limit } from '../config/config.js'

// show either trending or searched for gifs
export const receiveData = async (query) => {

  // if the input field is empty
  if (query === '') {
      // fetch trending gifs
      const response = await fetch(`${url}${trendingType}?&api_key=${key}&limit=${limit}`)
      // console.log(`${url}${trendingType}?&api_key=${key}&limit=${limit}`)
      const data = await response.json()
      return data  
  } else {
      // fetch searched for gifs
      const response = await fetch(`${url}${searchType}${query}?&api_key=${key}&limit=${limit}`)
      const data = await response.json()
      return data   
  }
}
