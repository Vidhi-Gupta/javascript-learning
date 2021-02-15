let galleryImages = document.querySelectorAll(".gallery-img")
let latestImg;
let windowWidth = window.innerWidth;

if(galleryImages) {
    galleryImages.forEach(function(image,index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image);
            let fullImgUrl = getElementCss.getPropertyValue("background-image");
            let lastUrl = fullImgUrl.split("/Image/");
            let img = lastUrl[1].replace('")',"");

            latestImg = index+1; 
            let element = document.body;
            let container = document.createElement("div");
            element.appendChild(container);
            container.setAttribute("class","new-box")
            container.setAttribute("onclick","closeWindow()"); 

            let newImg = document.createElement("img");
            container.appendChild(newImg);
            newImg.setAttribute("src","Image/" + img);
            newImg.setAttribute("id","curr");
          
            newImg.onload = function() {
                let imgWidth = this.width;
                let btnPos = ((windowWidth - imgWidth)/2)-80;
    
                let prevBtn = document.createElement("a");
                let text = document.createTextNode("Prev");
                prevBtn.appendChild(text);
                element.appendChild(prevBtn);
                prevBtn.setAttribute("class","img-prev");
                prevBtn.setAttribute("onclick","changeImg(0)");
                prevBtn.style.cssText ="left: " + btnPos + "px;";
    
                let nextBtn = document.createElement("a");
                let texts = document.createTextNode("Next");
                nextBtn.appendChild(texts);
                element.appendChild(nextBtn);
                nextBtn.setAttribute("class","img-next");
                nextBtn.setAttribute("onclick","changeImg(1)");
                let newlen = btnPos - 20;
                nextBtn.style.cssText ="right: " + newlen + "px;";
    
            }
        }

    });
}

function closeWindow() {
    document.querySelector(".new-box").remove();
    document.querySelector(".img-next").remove();
    document.querySelector(".img-prev").remove();
}

function changeImg(changeDir) {
    document.querySelector("#curr").remove();
    let wind = document.querySelector(".new-box");
    let newImg = document.createElement("img")
    wind.appendChild(newImg);

    let calcImage;
    if(changeDir === 1){
        calcImage = latestImg +1;
        if(calcImage>7){
            calcImage = 1;
        }
    }
    else{ calcImage = latestImg -1;
    if(calcImage < 1){
        calcImage = 7;
    }}

    newImg.setAttribute("src","Image/Img" + calcImage + ".jpg");
    newImg.setAttribute("id","curr");

    latestImg = calcImage;

    newImg.onload= function(){
        let imgWidth = this.width;
        let btnPos = ((windowWidth - imgWidth)/2)-80;
        let nxtBtn = document.querySelector(".img-next");
        let newLen = btnPos -20;
        nxtBtn.style.cssText ="right: " + newLen + "px;";

        let prevBtn = document.querySelector(".img-prev");
        prevBtn.style.cssText ="left: " + btnPos + "px;";
    }

}