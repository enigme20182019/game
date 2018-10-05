import imgDefs from './img_definitions'
const current = imgDefs[0]
const displayHandle = document.querySelector('#display')

const setup = () => {
  showScene(current)
}

const showScene = (img) => {
  console.log(img)
  let area = img.shapes.map((shape) => {
    return `<area shape="rect" coords="${shape.coords.join(',')}" href="javascript:_scene('${shape.action}')">`
  })
  displayHandle.innerHTML = `<img src="/imgs/${img.fileName}" usemap="#ima1"><map name="ima1">${area.join('')}</map>`
}

window._scene = (scene) => {
  let newScene = imgDefs.find((imgDef) => {
    return imgDef.scene === scene
  })

  showScene(newScene)
}


setup()