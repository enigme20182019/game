import Music from "./music";

const musicsSettings = [
  {name : 'Musiques', frequency : [91,2]},
  {name : 'Classique', frequency : [91,5]},
  {name : 'Nostalgie', frequency : [91,8]},
  {name : 'Rire et chansons', frequency : [93,1]},
  {name : 'TSF Jazz', frequency : [93,7]},
  {name : 'Europe 1', frequency : [93,8]},
  {name : 'Dijon', frequency : [99,3]},
  {name : 'RFI', frequency : [99,8]},
  {name : 'NRJ', frequency : [104,1]},
  {name : 'Inter', frequency : [104,5]},
  {name : 'Culture', frequency : [104,7]},
  {name : 'RMC', frequency : [107,3]},
  {name : 'Autoroute', frequency : [107,7]},
  {name : 'Skyrock', frequency : [108,1]},
  {name : 'Info', frequency : [108,2]},
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


    this.cardsMusics = cardSettings.map((musicPath) => {
      return new Music(musicPath.path)
    })

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
    if(this.currentMusic)
      this.currentMusic.stop()
    this.frequency = musicsSettings[this.current].frequency
    this.name = musicsSettings[this.current].name
    this.play()
  }

  play() {
    this.display.innerHTML = `<div>${this.frequency[0]}.${this.frequency[1]}<br>${this.name}</div>`
  }

  clear() {
    if(this.currentMusic)
      this.currentMusic.stop()
    this.display.innerHTML = ''
    this.display.style.display = 'none'
  }
}