(()=>{"use strict";const e=sd,n=e.svg(),i=e.color(),o=new e.DAG(n).width(100).height(100);o.newNode(1,new e.Rect(n).color(i.orange)),o.newNode(2,new e.Circle(n).color(i.blue)),o.newNode(3,new e.Image(n).href("/img/gift.png")),o.link(1,2).link(1,3).link(2,3),e.init((()=>{})),e.main((async()=>{}))})();