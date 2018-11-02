export default class Music {
  constructor(sourceUri) {
    this.sourceUri = sourceUri
    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.source = this.context.createBufferSource()
    this.playing = false
    this.loaded = false
  }

  stop() {
    if(this.playing) {
      this.source.stop(0)
      this.playing = false
    }
  }


  async play() {
    if(this.loaded === false) {
      this.playing = true
      this.source.buffer = await this.load()                // tell the source which sound to play
      this.source.connect(this.context.destination)         // connect the source to the context's destination (the speakers)
    }
    this.source.start(0);
  }

  async load() {
    return new Promise((resolve) => {

      let request = new XMLHttpRequest();
      request.open('GET', `/sounds/${this.sourceUri}.mp3`, true);
      request.responseType = 'arraybuffer';

      // Decode asynchronously
      request.onload = () => {
        this.loaded = true
        this.context.decodeAudioData(request.response, (buffer) => {
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