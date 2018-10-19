export default class Tv {


  constructor() {
    this.c = document.getElementById('video-display')
    this.current = 0

    this.images = ['pr1']

    window._tv_next = () => {
      this.next()
    }

    window._tv_preview = () => {
      this.preview()
    }
  }

  next() {
    this.current = (this.current+1) % this.images.length
    this.up()
  }
  preview() {
    this.current = Math.abs((this.current-1) % this.images.length)
    this.up()
  }

  up() {
    this.c.innerHTML=`<img src="/pictures/tv/${this.images[this.current]}">`
  }
}