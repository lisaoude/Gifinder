// creating href (a)

// let, so I can use the same element multiple times
// and give a different link to it each time

export const Href = (link) => {
  let element = document.createElement('a')
  element.href = (link)

  return element
}
