import { url, trendingType, searchType, key, limit } from '../config/config.js'

export const receiveData = async (query) => {
  if (query === '') {
      console.log('leeg')
      const res = await fetch(`${url}${trendingType}?&api_key=${key}&limit=${limit}`)
      const data = await res.json()
      return data  
  } else {
      console.log(query)
      const res = await fetch(`${url}${searchType}${query}?&api_key=${key}&limit=${limit}`)
      const data = await res.json()
      return data   
  }
}