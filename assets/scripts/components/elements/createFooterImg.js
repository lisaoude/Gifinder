// creating image used in footer

// const, because I will use only one footer img
// and the source stays the same everytime 

export const footerImg = () => {
  const element = document.createElement('img')
  element.src = `https://user-images.githubusercontent.com/57795294/109191560-95629e00-7796-11eb-8d1c-12ddfdf91bd6.png`

  return element
}
