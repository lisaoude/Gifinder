// creating main

// const, because there's one main
// and it's used in the same way each time

export const Main = (idName) => {
  const element = document.createElement('main')
  element.setAttribute('id', idName)
  
  return element
}
