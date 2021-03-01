// importing all separate elements

import { Body } from './elements/selectBody.js'
import { Main } from './elements/createMain.js'

import { homeHeader } from './makeHeaderHome.js'
import { Header } from './elements/createHeader.js'

import { headOne } from './elements/createH1.js'
import { headTwo } from './elements/createH2.js'
import { headThree } from './elements/createH3.js'
import { headFour } from './elements/createH4.js'

import { Text } from './elements/createText.js'
import { Href } from './elements/createHref.js'

import { Form } from './elements/createForm.js'
import { inputField } from './elements/createInputField.js'
import { Button } from './elements/createButton.js'

import { Section } from './elements/createSection.js'

import { Footer } from './makeFooter.js'

import { backButton } from './makeBackButton.js'

import { loadingState } from './makeLoadingState.js'



// and exporting them
// for easy importing in other files

export {
  Body,
  Main,

  homeHeader,
  Header,

  headOne,
  headTwo,
  headThree,
  headFour,

  Text,
  Href,

  Form,
  inputField,
  Button,
    
  Section,

  Footer,

  backButton,

  loadingState
}
