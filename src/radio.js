import Music from "./music";

const musicsSettings = [
  {path : 'radio_star', frequency : [88,5]}
]

export default class Radio {
  constructor() {
    this.display = document.getElementById('#radio-display')
    this.on = false
    this.current = 0
    this.frequency = [87,5] /* max 108 0 */
    this.musics = musicsSettings.map((musicPath) => {
      return new Music(musicPath)
    })
    this.currentMusic = this.musics[this.current]


    window._radio_next = () => {
      this.current++
      this.switchFrequency()
    }

    window._radio_prev = () => {
      this.current--
    }
  }


  switchFrequency() {
    this.currentMusic = this.musics[this.current]
    this.frequency = this.currentMusic.frequency
    this.play()
  }

  play() {
    this.currentMusic.play()

    this.display.innerHTML = `<div>${this.frequency[0]}.${this.frequency[1]}</div>`
  }
}