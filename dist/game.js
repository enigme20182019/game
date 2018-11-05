!function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);var s=[{scene:"home",fileName:"salon.jpg",shapes:[{coords:[310,138,455,300],transition:"tv"},{coords:[126,110,262,255],transition:"radio"},{coords:[490,141,590,241],transition:"card1"},{coords:[605,141,705,241],transition:"card2"}]},{scene:"tv",fileName:"tv.jpg",shapes:[{coords:[574,105,620,225],action:"javascript:_tv_preview()"},{coords:[620,105,665,225],action:"javascript:_tv_next()"}]},{scene:"radio",fileName:"radio.jpg",shapes:[{coords:[170,330,300,460],action:"javascript:_radio_preview()"},{coords:[530,330,660,460],action:"javascript:_radio_next()"}]},{scene:"card1",fileName:"card1.jpg",shapes:[{coords:[300,175,370,295],action:"javascript:_card(3)"},{coords:[395,175,465,295],action:"javascript:_card(1)"},{coords:[485,175,555,295],action:"javascript:_card(0)"},{coords:[295,310,365,430],action:"javascript:_card(2)"},{coords:[395,310,465,430],action:"javascript:_card(4)"},{coords:[500,310,570,430],action:"javascript:_card(8)"},{coords:[285,450,355,570],action:"javascript:_card(6)"},{coords:[405,450,475,570],action:"javascript:_card(7)"},{coords:[510,450,580,570],action:"javascript:_card(5)"}]},{scene:"card2",fileName:"card2.jpg",shapes:[{coords:[275,245,340,400],action:"javascript:_card(9)"},{coords:[360,245,430,400],action:"javascript:_card(10)"},{coords:[445,245,505,400],action:"javascript:_card(11)"}]}];const n=new(window.AudioContext||window.webkitAudioContext);class i{constructor(e){this.sourceUri=e,this.source=n.createBufferSource(),this.playing=!1}stop(){this.playing&&(console.log("stop"),this.source.stop(),this.playing=!1)}async play(){this.source=n.createBufferSource(),this.playing=!0,this.source.buffer=await this.load(),this.source.connect(n.destination),console.log("start"),this.source.start(0)}async load(){return document.querySelector(".loading").style.display="block",new Promise(e=>{let t=new XMLHttpRequest;t.open("GET",`./sounds/${this.sourceUri}.mp3`,!0),t.responseType="arraybuffer",t.onload=(()=>{n.decodeAudioData(t.response,t=>{document.querySelector(".loading").style.display="none",e(t)},this.onError)}),t.send()})}onError(e){console.error(e)}}const a=[{name:"Musiques",frequency:[91,2]},{name:"Classique",frequency:[91,5]},{name:"Nostalgie",frequency:[91,8]},{name:"Rire et chansons",frequency:[93,1]},{name:"TSF Jazz",frequency:[93,7]},{name:"Europe 1",frequency:[93,8]},{name:"Dijon",frequency:[99,3]},{name:"RFI",frequency:[99,8]},{name:"NRJ",frequency:[104,1]},{name:"Inter",frequency:[104,5]},{name:"Culture",frequency:[104,7]},{name:"RMC",frequency:[107,3]},{name:"Autoroute",frequency:[107,7]},{name:"Skyrock",frequency:[108,1]},{name:"Info",frequency:[108,2]}],c=[{path:"cards/aime_paris_mai"},{path:"cards/au_printemps"},{path:"cards/celine"},{path:"cards/cro_magnon"},{path:"cards/mon_mec_a_moi"},{path:"cards/paris_mai"},{path:"cards/quand_reviendras_tu"},{path:"cards/suis_un_homme"},{path:"cards/suis_venu_te_dire"},{path:"cards/mon_ptit_loup"},{path:"cards/pardonne_moi"},{path:"cards/voulez_vous_danser"}];const o=s[0],u=document.querySelector("#display"),d=new class{constructor(){this.c=document.getElementById("video-display"),this.current=0,this.images=["11.jpg","7.jpg","5.jpg","9.jpg","10.jpg","1.png","3.jpg","8.jpg","4.jpg","6.jpg","2.jpg","12.jpg"],window._tv_next=(()=>{this.next()}),window._tv_preview=(()=>{this.preview()})}next(){this.current=Math.abs((this.current+1)%this.images.length),this.up()}preview(){this.current=this.current-1,-1===this.current&&(this.current=this.images.length-1),this.up()}clear(){this.c.innerHTML=""}up(){this.c.innerHTML=`<div class="tv-pic" style="background-image: url('./pictures/tv/${this.images[this.current]}');"></div>`}},p=new class{constructor(){this.display=document.getElementById("radio-display"),this.on=!1,this.current=0,this.frequency=[87,5],this.cardsMusics=c.map(e=>new i(e.path)),window._radio_next=(()=>{this.current=(this.current+1)%a.length,this.switchFrequency()}),window._radio_preview=(()=>{this.current=(this.current-1)%a.length,-1===this.current&&(this.current=a.length-1),this.switchFrequency()}),window._card=(e=>{this.currentMusic&&this.currentMusic.stop(),this.currentMusic=this.cardsMusics[e],this.currentMusic.play()})}switchFrequency(){this.display.style.display="block",this.currentMusic&&this.currentMusic.stop(),this.frequency=a[this.current].frequency,this.name=a[this.current].name,this.play()}play(){this.display.innerHTML=`<div>${this.frequency[0]}.${this.frequency[1]}<br>${this.name}</div>`}clear(){this.currentMusic&&this.currentMusic.stop(),this.display.innerHTML="",this.display.style.display="none"}},h=e=>{console.log(e);let t=e.shapes.map(e=>{let t="#";return e.action?t=`javascript:${e.action}`:e.transition&&(t=`javascript:_scene('${e.transition}')`),`<area shape="rect" coords="${e.coords.join(",")}" href="${t}">`});u.innerHTML=`<img class="display-pic" src="./pictures/${e.fileName}" usemap="#ima1"><map name="ima1">${t.join("")}</map>`};window._scene=(e=>{p.clear(),d.clear();let t=s.find(t=>t.scene===e);h(t)}),h(o)}]);