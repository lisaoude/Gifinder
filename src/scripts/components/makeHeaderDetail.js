import { Header } from './elements/createHeader.js'
import { headOne } from './elements/createH1.js'
import { headTwo } from './elements/createH2.js'

export const detailHeader = () => {
    const header = Header()
    const h1 = headOne('Gifinder')
    const h2 = headTwo(props.title)

    header.appendChild(h1)
    header.appendChild(h2)

    return header
}