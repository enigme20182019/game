export default [
  {scene : 'home',fileName : 'salon.jpg', shapes : [{coords : [0,0,100,100], transition : 'tv'}, {coords : [100,0,100,100], transition : 'radio'}]},
  {scene : 'tv',fileName : 'tv.jpg', shapes : [{coords : [0,0,100,100], action : 'javascript:_tv_next()'}, {coords : [0,100,100,100], action : 'javascript:_tv_preview()'}]},
  {scene : 'radio',fileName : 'radio.jpg', shapes : [{coords : [0,0,100,100], action : 'javascript:_radio_next()'}]},
]