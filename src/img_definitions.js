export default [
  {scene : 'home',fileName : 'salon.jpg', shapes : [{coords : [310,138,455,300], transition : 'tv'}, {coords : [126,110,262,255], transition : 'radio'}]},
  {scene : 'tv',fileName : 'tv.jpg', shapes : [{coords : [574,105,620,225], action : 'javascript:_tv_next()'}, {coords : [620,105,665,225], action : 'javascript:_tv_preview()'}]},
  {scene : 'radio',fileName : 'radio.jpg', shapes : [{coords : [170,330,300,460], action : 'javascript:_radio_next()'}, {coords : [530,330,660,460], action : 'javascript:_radio_prev()'}]},
]