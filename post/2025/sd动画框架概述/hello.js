(()=>{"use strict";const t=sd,a=t.svg(),e=t.color(),s=new t.Text(a,"Hello, sd!");t.init((()=>{})),t.main((async()=>{await t.pause(),s.startAnimate().opacity(0).dx(20).endAnimate(),await t.pause(),s.dx(-20),s.opacity(1),s.stroke(e.black),s.strokeDashOffset(0),s.strokeDashArray([0,5]),s.fill(e.white),s.strokeWidth(1),s.startAnimate().strokeDashArray([5,0]).endAnimate(),await t.pause(),s.startAnimate().stroke(e.textBlue).fill(e.blue).endAnimate(),await t.pause(),s.startAnimate().strokeWidth(0).endAnimate()}))})();