(()=>{"use strict";const e=sd,t=e.svg(),n=new e.Line(t,"A");new e.Line(t,new e.Rect(t).width(12).height(12)).x(100),console.log(n.text()),e.init((()=>{})),e.main((async()=>{await e.pause(),n.text("B")}))})();