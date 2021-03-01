// creating section

// let, so I can use the same element multiple times
// and give a different id to it each time

export const Section = (idName) => {
  let element = document.createElement('section')
  element.setAttribute('id', idName)
  
  return element
}
