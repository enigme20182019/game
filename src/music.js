const context = new (window.AudioContext || window.webkitAudioContext)();


export default class Music {
  constructor(sourceUri) {
    this.sourceUri = sourceUri
    this.source = context.createBufferSource()
    this.playing = false
    this.loaded = false
  }

  stop() {
    if(this.playing) {
      this.source.stop()
      this.playing = false
    }
  }


  async play() {
    if(this.loaded === false) {
      this.playing = true
      this.source.buffer = await this.load()                // tell the source which sound to play
      this.source.connect(context.destination)         // connect the source to the context's destination (the speakers)
    }
    this.source.start(0);
  }

  async load() {
    document.querySelector('.loading').style.display = 'block'
    return new Promise((resolve) => {

      let request = new XMLHttpRequest();
      request.open('GET', `/sounds/${this.sourceUri}.mp3`, true);
      request.responseType = 'arraybuffer';

      // Decode asynchronously
      request.onload = () => {
        document.querySelector('.loading').style.display = 'none'

        this.loaded = true
        context.decodeAudioData(request.response, (buffer) => {
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