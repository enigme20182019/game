const context = new (window.AudioContext || window.webkitAudioContext)();


export default class Music {
  constructor(sourceUri) {
    this.sourceUri = sourceUri
    this.source = context.createBufferSource()
    this.playing = false
    window._play = () => {
      context.resume();
    }
  }

  stop() {
    if(this.playing) {
      console.log('stop')
      this.source.stop()
      this.playing = false
    }
  }


  async play() {
    this.source = context.createBufferSource()
    this.playing = true
    this.source.buffer = await this.load()                // tell the source which sound to play
    this.source.connect(context.destination)         // connect the source to the context's destination (the speakers)
    console.log('start')
    this.source.start(0);
  }

  async load() {
    document.querySelector('.loading').style.display = 'block'
    return new Promise((resolve) => {

      let request = new XMLHttpRequest();
      request.open('GET', `./sounds/${this.sourceUri}.mp3`, true);
      request.responseType = 'arraybuffer';

      request.onload = () => {

        context.decodeAudioData(request.response, (buffer) => {
          document.querySelector('.loading').style.display = 'none'

          resolve(buffer)
        }, this.onError);
      }
      request.send();
    })
  }
  onError(e) {
    console.error(e)
  }


}