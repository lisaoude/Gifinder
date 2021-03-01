# Gifinder

### Web App From Scratch @ cmda-minor-web 2020 - 2021

## :pencil2: App description

Always wanted to quickly search for a specific GIF? **_Gifinder_** is here! By simply typing a word of choice, you will get 24 GIFs that meet your requirements!  
By clicking on one of the GIFs, you will see that GIF's title, posted time, original source and a link to view the GIF at [Giphy.com](https://giphy.com)

[**_Gifinder_** can be viewed right here](https://lisaoude.github.io/Gifinder/)

<br/>

## :pushpin: Table of Contents

- [What does this Web App do?](#gem-What-does-this-Web-App-do?)
- [API](#link-API)

<br/>

## :gem: What does this Web App do?

- Show the trending GIFs on load
- Show the user GIFs based on the value they haved typed into the input field
- Show the user the details of a GIF they clicked on
  <!-- - Provide the user with feedback while the content is loading -->
  <!-- - Provide the user with feedback when an error occurs while loading the content -->

<br/>

## :link: API

### :gray_question: Which API did I use?

This Web App has been designed and developed with the help of [the Giphy API](https://developers.giphy.com/docs/api/).  
Giphy has the largest GIF library in the world and their API makes it possible to seamlessly integrate these GIFs into any application.

### :eyes: What can you do with this API?

_All information can be found on [the Giphy website](https://giphy.com)_

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

- Show trending GIFs to users

  - These are shown to the user on load of the home page

<br/>

- Let the user search for GIFs, using a word or phrase

  - This can be done on the home page as well

<br/>

- Generate one or multiple GIFs by ID endpoint
  - This is done on the detail page, where the user can navigate to by clicking on a GIF

<br/>

## :chart_with_upwards_trend: Diagrams

### Actor Diagram

#### Explanation

...

### Interaction Diagram

#### Explanation

...

<br/>

## :crystal_ball: Design Patterns

...

<br/>

## :inbox_tray: Install

### 1. :dancers: Cone this repo

Before we can get started, we'll need to clone this repo.  
This can be done by typing the following line of code into your terminal:  
`git clone https://github.com/lisaoude/Gifinder`

<br/>

### 2. Install an http server

Next, we will have to install an http server.  
Type the following line of code into your terminal:  
`npm install http-server`

<br/>

### 3. Run the app with our http server

This can be done by typing the following line of code into your terminal:  
`htpp-server PATH-TO-DIRECTORY/Gifinder`

<br/>

### 4. Open browser and navigate to localhost

Almost done! We just need to navigate to the localhost in the browser.  
`http://127.0.0.1:5500/`

<br/>

## Sources

I have used the following sources while creathing my Web App:

- ...

<br/>

## License

<!-- This repo is licensed as [MIT](**_NEEDS LINK_**) by © Lisa Oude Elferink, 2021 -->

...

<br/>

## Next Steps

We all know creative developing projects are never _truly_ done..  
These are some next steps that I would love to make:

- Literally just turn it in.

...

<br/>

<!-- # To Do

- [x] Translate readme to English
- [x] Add description to 'about' section of repo
- [x] Split code up in to modules
- [x] Link modules to each other
- [x] Fix data showing in live demo (when you search a different word, the gifs show up underneath the previous result)
- [x] Show popular gifs before searching as a homepage
- [x] Add some more comments in js files for clarity
- [x] Render gifs in images instead of iframes
- [x] Implement router
- [x] Make detail page
- [ ] Expand content shown on detail page
- [ ] Add loading state
- [ ] Add error state
- [ ] Update actor diagram
- [ ] Make interaction diagram
- [ ] Describe design patterns used? -->

<!-- <br/> -->

<!-- # Weekly log -->

<!-- ## Week 3 - Wrapping up 🎁

_Goal: Manipulate data. Reflect on end result._

This weeks [Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/course/week-3.md) & [Slides](https://docs.google.com/presentation/d/1yZi-ODpENKHMr0-kpKmnCI6dGSgXS9oeLxMXCJnieic/edit?usp=sharing)

### How it went

#### Monday, February 15th

- [x] Added extra comments to my code for clarity
- [x] Now rendering gifs in images again instead of iframes
- [x] Emptied my HTML, now all rendered with JavaScript ✔️

<br/>

#### Tuesday, February 16th

- [x] Made a detail page
- [x] Got routie to work! 🔥
- [x] Added a little content to my detail page

<br/> -->

<!-- ## Week 2 - Design and Refactor 🛠

_Goal: Design the web app. Add routes and states. Split code into modules. Rendering detail page._

This weeks [Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/course/week-2.md) & [Slides](https://docs.google.com/presentation/d/1ycANqFk9LtrZCBJF2TyQ1c_bejjEctSlb-52xbK_P1g/edit?usp=sharing)

### How it went

#### Monday, February 8th

Had a bit of a rough day, it all felt like a lot to still do and didn't really know where to start. So decided to take it easy!

- [x] Split some of my code up & got rid of 'waterfalls'
- [x] _Tried_ making the [first version of my Actor Diagram](https://github.com/lisaoude/web-app-from-scratch-2021/blob/master/images/v1_actordiagram.png)

<br/>

#### Tuesday, February 9th

- [x] Had a JavaScript Fundamentals meeting (see annotations at bottom of readme).
- [x] Tried splitting code up, but broke it 😃👍✔️

<br/>

#### Thursday, February 11th

- [x] Had another try at fixing my code. I was able to load in some gifs, but didn't get it to work again with input from my users.
- [x] Was able to show trending gifs on load 🔥

<br/>

#### Friday, February 12th

- [x] 🔥**Finally**🔥 fixed my code so it works in modules, shows trending gifs on load _and_ shows gifs based on the input of my users.

<br/> -->

<!-- ## Week 1 - Hello API 🐒

_Goal: Retrieve data from an API and render it in an overview page._

This weeks [Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/course/week-1.md) & [Slides](https://docs.google.com/presentation/d/1hXfgIhBzJ2QXDmpKpMcx7G-a9R_fVrcPdeOyM3G0I00/edit?usp=sharing)

### How it went

#### Monday, February 1st

- [x] Introduction to the course
- [x] Put personal data into the Tribe API
- [x] Made my [business card](https://lisaoude.github.io/kickoff-2021/)

<br/>

#### Tuesday, February 2nd

- [x] Wrote basic HTML form ym app
- [x] Retrieved data from my chosen [API](https://developers.giphy.com/docs/api/)
- [x] Added basic CSS styling
- [x] Made it possible to let the user search for specific gifs

<br/> -->

<!-- ## Annotations JavaScript Fundamentals

**Loading the script**

- At the bottom of the HTML
- Or: at the top, in the head with:

  - `<script defer src="js/main.js"></script>`

    - Makes the script wait to be carried out until after all HTML has been loaded

  - `<script type = 'module' src="js/main.js"></script>`
    - With type module the script automatically defers
    - Main script **needs** to have type module to work

<br/>

**Modules**

- Modules are scoped
- Modules only work on a web server or local host
- Modules are deferred by default
- Main script **needs** to have type module to work

<br/>

**Scope**

- **_Local scope_**

  - _Block scope_

    - `{ const heading = document.querySelector('h1') }`
    - A `const` within curly brackets can only be used within those brackets

  - _Function scope_ or _Lexical scope_
    - `function getHeading { var heading = (..); }`
    - A variable within this function can only be used within this function

- **_Global scope_** - `const` - A `const` outside of any functions can be used within the entire document

<br/>

**Hoisting**

- Hoisting code up 'above' the functions

<br/>

**Function declarations**

- `function one() { (..) }`

**Function expression**

- `const func = function (one) { (..) }`

<br/>

**General**

- `[array literal]`
- `{object literal}`

- Browser -> sources

  - Shows which things 'live' inside a scope

- Call stack -> waitinglist -->

<!--In this course you will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. You will learn different ways to structure code and develop your own coding style. With the gained knowledge you will be able to build interactive prototypes, based on real data. Also you will gain a better understanding of how API's, frameworks and libraries work.-->

<!--## Learning goals-->

<!--
* _You can add structure to your code by applying patterns. You can defend the choice for the chosen patterns_
* _You can retrieve data, manipulate it and dynamically convert it to html elements using templating_
* _You understand how you can work with an external API using asynchronous code_
* _You understand how you can manage state in your application and you inform the user of state where necessary_
-->

<!--
[Rubric](https://docs.google.com/spreadsheets/d/1vJJ4EhIqkefWj1nWFp0Pnvy1Kld-S2V3qwZgC6XQO0c/edit?usp=sharing), with learning goals
[Overall planning](https://teams.microsoft.com/l/file/95EAEC95-4AB8-4E62-A810-2445969460B6?tenantId=0907bb1e-21fc-476f-8843-02d09ceb59a7&fileType=xlsx&objectUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt%2FShared%20Documents%2F02%20-%20Web%20App%20From%20Scratch%2FWAFS%202021%20Planning.xlsx&baseUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt&serviceName=teams&threadId=19:9bd8abc7b32c4e0196ddbaae12cf8e79@thread.tacv2&groupId=5d001f9a-0a4b-4768-92b1-0f1768328ba3)
-->

<!--
## Best Practices
All work during this course will be tested against our [Best Practices for JavaScript](https://github.com/cmda-minor-web/best-practices/blob/master/javascript.md).
-->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
