(()=>{"use strict";const e=sd,t=e.svg(),a=new e.Array(t).resize(3),n=new e.Circle(t).cx(a.element(0).cx()).cy(100),s=new e.Text(t,"A").cx(a.element(1).cx()).cy(100),i=new e.Box(t,"B").cx(a.element(2).cx()).cy(100);e.init((()=>{})),e.main((async()=>{await e.pause(),a.startAnimate().push(n).endAnimate(),await e.pause(),a.startAnimate().pushFromExistValue(s).endAnimate(),await e.pause(),a.startAnimate().pushFromExistElement(i).endAnimate()}))})();