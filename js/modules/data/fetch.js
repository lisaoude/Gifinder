import { url, trendingType, searchType, key, limit } from '../config/config.js'

// show either trending or searched for gifs
export const receiveData = async (query) => {

  // if the input field is empty
  if (query === '') {
      // console.log('leeg')
      // fetch trending gifs
      const response = await fetch(`${url}${trendingType}?&api_key=${key}&limit=${limit}`)
      const data = await response.json()
      return data  
  } else {
      // console.log(query)
      // fetch searched for gifs
      const response = await fetch(`${url}${searchType}${query}?&api_key=${key}&limit=${limit}`)
      const data = await response.json()
      return data   
  }
}