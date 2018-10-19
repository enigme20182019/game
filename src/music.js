export default class Music {
  constructor(source) {
    this.source=source;
    this.volume=100;
    this.finish=false;

    this.sonDomHandle=document.createElement("embed");
    this.sonDomHandle.setAttribute("src",this.source);
    this.sonDomHandle.setAttribute("hidden","true");
    this.sonDomHandle.setAttribute("volume",this.volume.toString());
    this.sonDomHandle.setAttribute("autostart","false");
    this.sonDomHandle.setAttribute("loop",'false');

    document.body.appendChild(this.sonDomHandle);
  }

  pause() {
    this.sonDomHandle.pause()
  }

  play() {
    if(this.finish)return false;
    this.sonDomHandle.play()
  }

  remove () {
    document.body.removeChild(this.sonDomHandle);
    this.finish=true;
  }
}