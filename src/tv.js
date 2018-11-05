export default class Tv {


  constructor() {
    this.c = document.getElementById('video-display')
    this.current = 0

    this.images = ['11.png', '7.png', '5.png', '9.png', '10.png', '1.png', '3.png', '8.png', '4.png', '6.png', '2.png', '12.png']


    window._tv_next = () => {
      this.next()
    }

    window._tv_preview = () => {
      this.preview()
    }
  }

  next() {
    this.current = Math.abs((this.current+1) % this.images.length)
    this.up()
  }
  preview() {
    this.current = (this.current-1)
    if(this.current === -1)
      this.current = this.images.length - 1
    this.up()
  }

  clear() {
    this.c.innerHTML=''
  }

  up() {
    this.c.innerHTML=`<div class="tv-pic" style="background-image: url('./pictures/tv/${this.images[this.current]}');"></div>`
  }
}