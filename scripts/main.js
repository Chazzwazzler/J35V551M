// I see you looking at the code! You wont find anything useful. Everything important is hidden away. 

const _0x3bf0c2=_0x326a;function _0x326a(_0x12bb0b,_0x7a1b9d){const _0x5cc460=_0x5cc4();return _0x326a=function(_0x326ac4,_0x26a40c){_0x326ac4=_0x326ac4-0x8d;let _0xc98b3a=_0x5cc460[_0x326ac4];return _0xc98b3a;},_0x326a(_0x12bb0b,_0x7a1b9d);}(function(_0x1c0788,_0x4f0f27){const _0x5b7339=_0x326a,_0x329508=_0x1c0788();while(!![]){try{const _0x143920=-parseInt(_0x5b7339(0x9f))/0x1*(-parseInt(_0x5b7339(0xb0))/0x2)+parseInt(_0x5b7339(0xb2))/0x3*(parseInt(_0x5b7339(0xa3))/0x4)+-parseInt(_0x5b7339(0x98))/0x5*(parseInt(_0x5b7339(0x9d))/0x6)+-parseInt(_0x5b7339(0xa5))/0x7*(-parseInt(_0x5b7339(0x99))/0x8)+parseInt(_0x5b7339(0xa2))/0x9+parseInt(_0x5b7339(0x9b))/0xa*(parseInt(_0x5b7339(0xa9))/0xb)+-parseInt(_0x5b7339(0xaa))/0xc*(parseInt(_0x5b7339(0x8d))/0xd);if(_0x143920===_0x4f0f27)break;else _0x329508['push'](_0x329508['shift']());}catch(_0x51e6e9){_0x329508['push'](_0x329508['shift']());}}}(_0x5cc4,0x6e405));const background=document[_0x3bf0c2(0xad)](_0x3bf0c2(0xb4));background[_0x3bf0c2(0xa1)](_0x3bf0c2(0x95),getMousePosPercentage);function getMousePosPercentage(_0x50cac2){const _0x2f9126=_0x3bf0c2,_0x3f61ff=background[_0x2f9126(0xb3)](),_0x2e238f=_0x50cac2['clientX']-_0x3f61ff[_0x2f9126(0x93)],_0x14e953=_0x50cac2[_0x2f9126(0xa7)]-_0x3f61ff['top'];let _0x4f411=Math[_0x2f9126(0xab)](_0x2e238f/_0x3f61ff[_0x2f9126(0x90)]*0x64),_0x117e3a=Math[_0x2f9126(0xab)](_0x14e953/_0x3f61ff['height']*0x64);console[_0x2f9126(0xac)](_0x2f9126(0x91)+_0x4f411+_0x2f9126(0x96)+_0x117e3a+'%');}const power_button=document[_0x3bf0c2(0xad)](_0x3bf0c2(0x8f)),comp_on='url(\x27img/Comp_On.jpg\x27)',comp_off=_0x3bf0c2(0xae);function _0x5cc4(){const _0x39454d=['url(\x27img/Comp_Off.jpg\x27)','getTime','8132ZSjMxY','style','369sBDLmO','getBoundingClientRect','background','41964oqCfUT','\x20minutes,\x20and\x20','power-button','width','X:\x20','100','left','March\x201,\x202025\x2021:00:00','mousemove','%,\x20Y:\x20','screen-bounds','10vSRers','8HdoTKr','innerHTML','7730HvLBPm','\x20seconds\x20left\x20on\x20installation...','1296786UXurfg','\x20days,\x20','109nruWeY','countdown-timer','addEventListener','6351462ZgVzhn','27932bTKuxE','backgroundImage','5001423OXhYJs','opacity','clientY','Computer\x20Toggled.','10219tlYQLC','9504zUVeLM','floor','log','getElementById'];_0x5cc4=function(){return _0x39454d;};return _0x5cc4();}let computer_on=![];const countdown_date=new Date(_0x3bf0c2(0x94))[_0x3bf0c2(0xaf)](),countdown_text=document[_0x3bf0c2(0xad)](_0x3bf0c2(0xa0)),screen_bounds=document[_0x3bf0c2(0xad)](_0x3bf0c2(0x97));function ToggleOn(){const _0x57479e=_0x3bf0c2;computer_on=!computer_on,console[_0x57479e(0xac)](_0x57479e(0xa8)),computer_on?(background[_0x57479e(0xb1)][_0x57479e(0xa4)]=comp_on,screen_bounds['style'][_0x57479e(0xa6)]=_0x57479e(0x92)):(background['style']['backgroundImage']=comp_off,screen_bounds['style'][_0x57479e(0xa6)]='0');}power_button['addEventListener']('click',ToggleOn);function RemainingTime(){const _0x2007cb=_0x3bf0c2;let _0x4a9422=new Date()[_0x2007cb(0xaf)](),_0x4a9ed0=countdown_date-_0x4a9422,_0x395683=Math[_0x2007cb(0xab)](_0x4a9ed0/(0x3e8*0x3c*0x3c*0x18)),_0x526162=Math[_0x2007cb(0xab)](_0x4a9ed0%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c)),_0x7154de=Math[_0x2007cb(0xab)](_0x4a9ed0%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c)),_0x3306ea=Math[_0x2007cb(0xab)](_0x4a9ed0%(0x3e8*0x3c)/0x3e8);countdown_text[_0x2007cb(0x9a)]=_0x395683+_0x2007cb(0x9e)+_0x526162+'\x20hours,\x20'+_0x7154de+_0x2007cb(0x8e)+_0x3306ea+_0x2007cb(0x9c);}let remaining=setInterval(RemainingTime,0x3e8);
