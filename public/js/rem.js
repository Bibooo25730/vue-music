//rem适配
!(function (doc, win) { var docEl = doc.documentElement, resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize', recalc = function () { var clientWidth = docEl.clientWidth; if (!clientWidth) return; if (clientWidth >= 750) { docEl.style.fontSize = '100px'; } else { docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'; } docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'; }; if (!doc.addEventListener) return; win.addEventListener(resizeEvt, recalc, false); doc.addEventListener('DOMContentLoaded', recalc, false); })(document, window);
//flexd 滚动问题
// window.onscroll = function() {

//     var sl = -Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
    
//     document.getElementById('fixed').style.buttom = sl + 'px';
    
//     console.log(sl);
    
//     }
