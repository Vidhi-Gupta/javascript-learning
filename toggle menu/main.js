let toggleStatus = false;

let toggleChange = function(){
    let getNavSide = document.querySelector(".nav-side");
    let getNavSideUl = document.querySelector(".nav-side ul");
    let getNavSideSpan = document.querySelector(".nav-side span");
    let getNavSideLinks = document.querySelectorAll(".nav-side a");

    if(toggleStatus == false){
        getNavSideUl.style.visibility = "visible";
        getNavSide.style.width = "300px";
        getNavSideSpan.style.opacity = "0.5";
        
        let arraylength = getNavSideLinks.length;
        for(let i =0; i< arraylength; i++){
            getNavSideLinks[i].style.opacity = "1";
        }
        toggleStatus = true;
    }

    else if(toggleStatus == true){
        getNavSideUl.style.visibility = "hidden";
        getNavSide.style.width = "60px";
        getNavSideSpan.style.opacity = "0";
        
        let arraylength = getNavSideLinks.length;
        for(let i =0; i< arraylength; i++){
            getNavSideLinks[i].style.opacity = "0";
        }
        toggleStatus = false;
    }

}