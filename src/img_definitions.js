export default [
  {scene : 'home',fileName : 'salon.jpg', shapes : [{coords : [310,138,455,300], transition : 'tv'}, {coords : [126,110,262,255], transition : 'radio'}, {coords : [490,141,590,241], transition : 'card1'}, {coords : [605,141,705,241], transition : 'card2'}]},
  {scene : 'tv',fileName : 'tv.jpg', shapes : [{coords : [574,105,620,225], action : 'javascript:_tv_preview()'}, {coords : [620,105,665,225], action : 'javascript:_tv_next()'}]},
  {scene : 'radio',fileName : 'radio.jpg', shapes : [{coords : [170,330,300,460], action : 'javascript:_radio_preview()'}, {coords : [530,330,660,460], action : 'javascript:_radio_next()'}]},
  {scene : 'card1',fileName : 'card1.jpg', shapes : [
      {coords : [300,175,370,295], action : 'javascript:_card(1)'},
      {coords : [395,175,465,295], action : 'javascript:_card(2)'},
      {coords : [485,175,555,295], action : 'javascript:_card(3)'},
      {coords : [295,310,365,430], action : 'javascript:_card(4)'},
      {coords : [395,310,465,430], action : 'javascript:_card(5)'},
      {coords : [500,310,570,430], action : 'javascript:_card(6)'},
      {coords : [285,450,255,570], action : 'javascript:_card(7)'},
      {coords : [405,450,475,570], action : 'javascript:_card(8)'},
      {coords : [510,450,580,570], action : 'javascript:_card(9)'},
      ]},
  {scene : 'card2',fileName : 'card2.jpg', shapes : [
    {coords : [360,560,440,705], action : 'javascript:_card(10)'},
    {coords : [450,560,530,705], action : 'javascript:_card(11)'},
    {coords : [535,560,6050,705], action : 'javascript:_card(12)'},
      ]}
]