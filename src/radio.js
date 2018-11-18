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
  {path : 'cards/paris_mai'},
  {path : 'cards/moustaki_mars'},
  {path : 'cards/yelle'},
  {path : 'cards/zazie_homme'},
  {path : 'cards/juliette_mome'},
  {path : 'cards/octobre'},
  {path : 'cards/barabara_dis_quand'},
  {path : 'cards/femme_80'},
  {path : 'cards/tais_toi_creuse'},
  {path : 'cards/petit_bout'},
  {path : 'cards/excuse_moi_partenaire'},
  {path : 'cards/zorro'},
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
      window._play()
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