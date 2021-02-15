window.addEventListener('load',()=>{
    let long;
    let lat;
    let timezone = document.querySelector(".location-timezone");
    let deg = document.querySelector(".temperature-degree");
    let descp = document.querySelector(".temperature-desc");
    let iconid;
    let iconurl;
    let tempuni = document.querySelector(".temp-unit");
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            apiid = `e6fc1841dad000932c4973752d5811e1`;
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiid}&units=imperial`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const temp = data.main.temp;
                    const country = data.sys.country;
                    const desc = data.weather[0].main;
                    iconid = data.weather[0].icon;
                    let celsius = Math.floor((temp - 32) * (5/9));
                    //Set DOM elements
                    timezone.textContent = country;
                    deg.textContent = temp;
                    descp.textContent = desc;
                    //Get icon url
                    iconurl = "http://openweathermap.org/img/wn/" + iconid + "@2x.png";
                    Icon(iconurl);

                    //for celcius
                    tempuni.addEventListener('click', ()=>{
                        if(tempuni.textContent === "F"){
                            tempuni.textContent = "C";
                            deg.textContent = celsius;      
                        } else {
                            tempuni.textContent = "F";
                            deg.textContent = temp;
                        }
                        
                    })
                    
                });
        });

    }

//function to set icon     
function Icon(iconurl){
    document.querySelector(".icon").setAttribute("src",iconurl);
    document.querySelector(".icon").style.transform = "translate(100px,-50px)";
    document.querySelector(".icon").style.transition = "transform 3s ease-in-out";
}

});