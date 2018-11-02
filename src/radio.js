import Music from "./music";

const musicsSettings = [
  {path : 'radio/aime_paris_mai', frequency : [88,5]},
  {path : 'radio/au_printemps', frequency : [90,2]}
]
const cardSettings = [
  {path : 'cards/aime_paris_mai'},
  {path : 'cards/au_printemps'},
  {path : 'cards/celine'},
  {path : 'cards/cro_magnon'},
  {path : 'cards/mon_mec_a_moi'},
  {path : 'cards/paris_mai'},
  {path : 'cards/quand_reviendras_tu'},
  {path : 'cards/suis_un_homme'},
  {path : 'cards/suis_venu_te_dire'},
  {path : 'cards/mon_ptit_loup'},
  {path : 'cards/pardonne_moi'},
  {path : 'cards/voulez_vous_danser'},
]

export default class Radio {
  constructor() {
    this.display = document.getElementById('radio-display')
    this.on = false
    this.current = 0
    this.frequency = [87,5] /* max 108 0 */
    this.musics = musicsSettings.map((musicPath) => {
      return new Music(musicPath.path)
    })

    this.cardsMusics = cardSettings.map((musicPath) => {
      return new Music(musicPath.path)
    })

    this.currentMusic = this.musics[this.current]
    window._radio_next = () => {
      this.current = (this.current+1) % musicsSettings.length
      this.switchFrequency()
    }

    window._radio_preview = () => {
      this.current = (this.current-1) % musicsSettings.length
      if(this.current === -1) {
        this.current = musicsSettings.length - 1
      }
      this.switchFrequency()
    }

    window._card = (i) => {
      if(this.currentMusic)
        this.currentMusic.stop()

      this.currentMusic = this.cardsMusics[i]
      this.currentMusic.play()
    }
  }

  switchFrequency() {
    this.display.style.display = 'block'
    this.currentMusic.stop()
    this.currentMusic = this.musics[this.current]
    this.frequency = musicsSettings[this.current].frequency
    this.play()
  }

  play() {
    this.currentMusic.play()
    this.display.innerHTML = `<div>${this.frequency[0]}.${this.frequency[1]}</div>`
  }

  clear() {
    if(this.currentMusic)
      this.currentMusic.stop()
    this.display.innerHTML = ''
  }
}