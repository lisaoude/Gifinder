// loading state when gifs are being fetched
export const loadingState = () => {

  // selecting the element from html
  const loader = document.querySelector('#loader');

  // toggle class hide 
  // if the element has a class of hide, remove it
  // if the element doesn't have a class of hide, add it
  loader.classList.toggle('hide');  

  //after 700ms classlist is toggled again
  // if the element has a class of hide, remove it
  // if the element doesn't have a class of hide, add it
  setTimeout(function loadingOff(){
    loader.classList.toggle('hide');  
  }, [700]);
}
