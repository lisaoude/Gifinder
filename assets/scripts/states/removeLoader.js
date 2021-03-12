// const, because there's one loader
// and it's used in the same way each time

// remove loading state when gifs are done being fetched
export const removeLoader = () => {

  const body = document.querySelector('body')
  const span = document.querySelector('span')

  body.removeChild(span)
}
  