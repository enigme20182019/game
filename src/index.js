import imgDefs from './img_definitions'
import Tv from "./tv";
import Radio from "./radio";
const current = imgDefs[0]
const displayHandle = document.querySelector('#display')


const tv = new Tv()
const radio = new Radio()

const setup = () => {
  showScene(current)
}

const showScene = (img) => {
  console.log(img)
  let area = img.shapes.map((shape) => {
    let method = '#'
    if(shape.action) {
      method = `javascript:${shape.action}`
    } else if(shape.transition){
      method = `javascript:_scene('${shape.transition}')`
    }
    return `<area shape="rect" coords="${shape.coords.join(',')}" href="${method}">`
  })
  displayHandle.innerHTML = `<img class="display-pic" src="/pictures/${img.fileName}" usemap="#ima1"><map name="ima1">${area.join('')}</map>`
}

window._scene = (scene) => {
  let newScene = imgDefs.find((imgDef) => {
    return imgDef.scene === scene
  })

  showScene(newScene)
}


setup()