(()=>{"use strict";const t=sd,e=t.svg(),n=t.color(),a=new t.Rect(e).strokeWidth(3),i=new t.Rect(e).strokeWidth(3).x(100);t.init((()=>{})),t.main((async()=>{await t.pause(),a.startAnimate().color(n.red).endAnimate(),i.startAnimate().color(n.RED).endAnimate()}))})();