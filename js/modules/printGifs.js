export const showGifs = (element, data) => {
    console.log(data[0].embed_url)

    const section = document.createElement('section')
    element.appendChild(section)

    data.forEach(item => {
        const frame = document.createElement('iframe')
        frame.src = `${item.embed_url}`
        frame.title = 'Een leuk gifje'

        element.appendChild(frame)
    })

    return element
}