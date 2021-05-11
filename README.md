# Gifinder

_Made for Web App From Scratch @ cmda-minor-web 2020 - 2021_

![Gifinder Mockups](https://user-images.githubusercontent.com/57795294/109716112-b23b0f00-7ba4-11eb-93fd-34428f5c9a32.png)

<!-------------------------- New Paragraph -------------------------->

## :pencil2: App description

Always wanted to quickly search for a specific GIF? **_Gifinder_** is here! By simply typing a word of choice, you will get 24 GIFs that meet your requirements!  
By clicking on one of the GIFs, you will see that GIF's title, posted time, original source and a link to view the GIF at [Giphy.com](https://giphy.com)

[**_Gifinder_** can be viewed right here](https://gifinder-lisaoude.netlify.app/)

<br/>

I have also made a [Wiki](https://github.com/lisaoude/Gifinder/wiki), where I kept a weekly log, explained some things about map, filter & reduce and made some JavaScript related annotations.

<!-------------------------- New Paragraph -------------------------->

## :pushpin: Table of Contents

- [What does this Web App do?](#gem-What-does-this-Web-App-do?)
- [API](#link-API)
- [Diagrams](#chart_with_upwards_trend-Diagrams)
- [Folders & Files](#open_file_folder-Folders-&-files)
- [Install](#inbox_tray-Install)
- [License](#closed_lock_with_key-License)
- [Next Steps](#telescope-Next-Steps)
- [Resources](#books-Resources)

<br/>

<!-------------------------- New Paragraph -------------------------->

## :gem: What does this Web App do?

- Fetch & show the trending GIFs on load
- Fetch & show the user GIFs based on the value they haved typed into the input field
- Fetch & show the user the details of a GIF they clicked on
- Provide the user with feedback while the content is loading
- Provide the user with feedback when hovering over a GIF

<br/>

<!-------------------------- New Paragraph -------------------------->

## :link: API

### :question: Which API did I use?

This Web App has been designed and developed with the [the Giphy API](https://developers.giphy.com/docs/api/).  
Giphy has the largest GIF library in the world and their API makes it possible to seamlessly integrate these GIFs into any application.

<br/>

### :eyes: What can you do with this API?

_All information can also be found on [the Giphy website](https://giphy.com)_

- Return a random GIF
- Show trending GIFs to users
- Let the user search for GIFs, using a word or phrase
- Convert what the user typed into the input field into the perfect GIF using their :sparkles:special sauce:sparkles: algorithm
- Autocomplete user input with a list of valid terms that completes what the user has typed into the input field
- Generate a unique ID to assign to each new user in an application
- Generate one or multiple GIFs by ID endpoint
- Provide users with a list of GIF categories
- Provide users with a list of the trending search terms
- Suggest searches to users
- Upload content programmatically on Giphy.com

<br/>

### :raising_hand: What did I do with this API?

I have implemented the following points into **_Gifinder_**:

**Home page**

- Show trending GIFs to users on load of the page
- Let the user search for GIFs, using a word or phrase
- Show the user the gifs they searched for using a word or phrase

<br/>

**Detail page**

- Generate a GIF by ID endpoint

<br/>

<!-------------------------- New Paragraph -------------------------->

## :chart_with_upwards_trend: Diagrams

### Actor Diagram

![Actor Diagram](https://user-images.githubusercontent.com/57795294/117823305-9ec7b680-b26d-11eb-8c13-b9849b184802.png)

### Interaction Diagram

![Interaction Diagram](https://user-images.githubusercontent.com/57795294/117823312-9f604d00-b26d-11eb-83ab-946a8253a200.png)

<br/>

<!-------------------------- New Paragraph -------------------------->

## :open_file_folder: Folders & files

### Folder structure

During the development of Gifinder, I worked with modules for the first time. In my previous 'projects', as far as we can even call it that, my whopping 3 to 100 lines of JavaScript would just live in the same document. I used such little JavaScript, that it wasn't necessary to split it up at all. Because I'm obviously using MUCH more JavaScript for Gifinder, modules are great to keep everything organized. My folder & files structure for Gifinder looks like this:

![Folder & Files Structure](https://user-images.githubusercontent.com/57795294/117823313-9f604d00-b26d-11eb-816a-0ae64b9524d7.png)

<br/>

### Explanation folder structure

#### Assets

- Basically all code, except for my `index.html`, can be found inside this folder

<br/>

#### Scripts

- In here all my JavaScript code can be found

<br/>

#### Components

- In this folder, my folder with separate elements can be found, as well as my larger components, amde with those separate elements. In this folder my `index.js` file can also be found.

<br/>

#### Index.js

- Although this is a file and not a folder, it's definitely worth talking about. In this file I import all the separate elements made inside the `elements` folder. This way I can import these elements with way less code in my other files. An example can be found below.

##### **Example**

```js
// Messy, unnecessarily much code
import { elementOne } from "./file1.js";
import { elementTwo } from "./file2.js";
import { elementThree } from "./file3.js";
import { elementFour } from "./file4.js";
import { elementFive } from "./file5.js";
```

```js
// Clean, easily understandable code
import {
  elementOne
  elementTwo
  elementThree
  elementFour
  elementFive
  } from './index.js'
```

<br/>

#### Config

- In this folder, my `config.js` files can be found. In this file I export variables, such as the url and key I need for my API.

<br/>

#### Modules

- The `getData.js` file inside this folder does just what its name says: get the data. It fetches either the trending gifs on load, or fetches the gifs that the user has searched for using their input in to the input field.
- The `reloadHome.js` file inside this folder reloads the content on the home page after a request has been made. It makes sure to delete the previously loaded content before shaowing the new content.

<br/>

#### Routes

- The routes folder contains my `router.js` file, where all possible routes are handled by the router. Because I use routie as my router, there's also a `routie.min.js` file. This file is provided for by Routie, and does not contain self-written code.

<br/>

#### Views

- The views folder contains all the pages that are rendered after a request has been made. These two pages use the imports from the `index.js` file in order to build all the HTML from scratch.

<br/>

#### States

- The states folder contains the loading state, which is shown during the loading of the gifs.

<br/>

#### Main.js

- This file is used to trigger the router and get Gifinder started.

<br/>

<!-------------------------- New Paragraph -------------------------->

## :inbox_tray: Install

### 1. :dancers: Cone this repo

Before we can get started, we'll need to clone this repo.  
This can be done by typing the following line of code into your terminal:

```git clone https://github.com/lisaoude/Gifinder```

<br/>

### 2. :computer: Install an http server

Next, we will have to install an http server.  
Type the following line of code into your terminal:

```npm install http-server```

<br/>

### 3. :running: Run the app with our http server

This can be done by typing the following line of code into your terminal:

```http-server PATH-TO-DIRECTORY/Gifinder```

<br/>

### 4. :globe_with_meridians: Open browser and navigate to localhost

Almost done! We just need to navigate to the localhost in the browser.

```http://127.0.0.1:5500/```

<br/>

<!-------------------------- New Paragraph -------------------------->

## :closed_lock_with_key: License

This repository is licensed as [MIT](https://github.com/lisaoude/Gifinder/blob/master/LICENSE.txt) by © Lisa Oude Elferink, 2021

<br/>

<!-------------------------- New Paragraph -------------------------->

## :telescope: Next Steps

We all know creative developing projects are never _truly_ done..
These are some next steps that I would love to make:

- Make it possible for the user to save gifs, in the following ways:
  - Save the gifs to a favorites list
  - Save the gifs to a special collection, which the user can name themselves (e.g. funny gifs, cat gifs, etc.)
  - Save the gifs to their device (download)

</br>

- Give Gifinder a random mode
  - Returns a random GIF to the user after a button press

</br>

- Autocomplete user input with a list of valid terms that completes what the user has typed into the input field

- Provide users with a list of GIF categories
- Provide users with a list of the trending search terms
- Suggest searches to users

<br/>

<!-------------------------- New Paragraph -------------------------->

## :books: Resources

I have used the following resources while creating my Web App:

- Schepenaar, W. (2018, June 12). Server-side vs Client-side Routing - Wilbert Schepenaar, from [Medium](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f)
- Blog, W. T. (2020). Understanding client side routing by implementing a router in Vanilla JS, from [Will Taylor](https://www.willtaylor.blog/client-side-routing-in-vanilla-js/)
- Routie | Javascript hash router. (2016), from [Routie](http://projects.jga.me/routie/)
- MDN. (2021, February 19). Using Fetch - Web APIs, from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- MDN. (2021, February 19). Async await - Web APIs, from [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- Can I insert elements to the beginning of an element using .appendChild()? (2009, March 6), from [Stack Overflow](https://stackoverflow.com/questions/618089/can-i-insert-elements-to-the-beginning-of-an-element-using-appendchild)
- MDN. (2021, February 19). Node.appendChild() - Web APIs, from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
- MDN. (2021, February 19). Node.removeChild() Web APIs, from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
- Pure CSS Loader - Optimized Spinners for Web · Loading.io. (2020), from [Loading.io](https://loading.io/css/)
- Complete list of github markdown emoji's. (2016), from [rxaviers](https://gist.github.com/rxaviers/7360908)
- MDN. (2021, February 19). setTimeout() - Web APIs, from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
- MDN. (2020, October 16). Array.prototype.map() - JavaScript, from [MDN](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- MDN. (2019, Match 23). Array.prototype.filter() - JavaScript, from [MDN](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- MDN. (2021, February 19). Array.prototype.reduce() - JavaScript, from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
