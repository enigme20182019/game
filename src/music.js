export default class Music {
  constructor(source) {
    this.source = source
    this.context = new AudioContext();
  }


  async play() {
    this.load()
    let source = this.context.createBufferSource(); // creates a sound source
    source.buffer = buffer;                    // tell the source which sound to play
    source.connect(this.context.destination);       // connect the source to the context's destination (the speakers)
    source.start(0);
  }

  async load() {
    return new Promise((resolve) => {

      let request = new XMLHttpRequest();
      request.open('GET', `/sounds/${this.source}`, true);
      request.responseType = 'arraybuffer';

      // Decode asynchronously
      request.onload = function() {
        this.context.decodeAudioData(request.response, (buffer) => {
          resolve(buffer)
        }, onError);
      }
      request.send();
    })

  }

}