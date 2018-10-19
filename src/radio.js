import Music from "./music";

const musicsSettings = [
  {path : 'radio_star', frequency : [88,5]}
]
export default class Radio {
  constructor() {
    this.on = false
    this.current = 0
    this.frequency = [87,5] /* max 108 0 */
    this.musics = musicsSettings.map((musicPath) => {
      return new Music(musicPath)
    })
    this.currentMusic = this.musics[this.current]


    window._radio_next = () => {
      this.current++
    }

    window._radio_prev = () => {
      this.current--
    }

  }



  pause() {
    this.off = true
    this.currentMusic.pause()
  }

  switchFrequency() {

  }

  play() {
    this.on = true
    this.currentMusic.play()
  }
}