!(function() {
    window.onload = function () {
        function maintain() {
            let article = document.getElementsByTagName("article")[0];
            let iframes = document.getElementsByTagName("iframe");
            console.log(article);
            console.log(article.clientWidth);
            let width = article.clientWidth;
            let height = width / 2;
            for (let i = 0; i < iframes.length; i++) {
                let iframe = iframes[i];
                if (typeof(iframe.inbox) === "undefined") {
                    iframe.removeAttribute("width");
                    iframe.removeAttribute("height");
                    iframe.style["width"] = "1200px";
                    iframe.style["height"] = "600px";
                    iframe.style["max-width"] = "1200px";
                    iframe.style["transform-origin"] = "top left";
                    let parent = iframe.parentElement;
                    let box = document.createElement("div");
                    parent.insertBefore(box, iframe);
                    box.appendChild(iframe);
                    iframe.inbox = true;
                    box.style["width"] = width + "px";
                    box.style["height"] = height + "px";
                } else {
                    let box = iframe.parentElement;
                    box.style["width"] = width + "px";
                    box.style["height"] = height + "px";
                }
                iframe.style["transform"] = `scale(${width / 1200}, ${height / 600})`;
            }
        }
        
        maintain();
        
        window.addEventListener("resize", maintain);
    }
})();