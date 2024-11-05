import unpluginBase64 from './assets/unplugin.svg?base64'
import unpluginPath from './assets/unplugin.svg?path'

const image = document.createElement('img')
image.src = unpluginBase64

const content = document.createElement('pre')
content.textContent = unpluginPath

document.body.appendChild(image)
document.body.appendChild(content)
