export default class Tv {


  constructor() {
    this.c = document.getElementById('video-display')
    this.current = 0

    this.images = ['11.jpg', '7.jpg', '5.jpg', '9.jpg', '10.jpg', '1.jpg', '3.jpg', '8.jpg', '4.jpg', '6.jpg', '2.jpg', '12.jpg']


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

  up() {
    this.c.innerHTML=`<div class="tv-pic" style="background-image: url('./pictures/tv/${this.images[this.current]}');"></div>`
  }
}