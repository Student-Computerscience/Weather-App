const input_box = document.getElementById("input-box");
const input_button = document.getElementById("search-button");
const wether_img = document.getElementById("wether-img");
const tempreture = document.querySelector(".tempreture");
const discription = document.querySelector(".discription"); 
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const location_not_found = document.querySelector(".location-not-found");
const wether_box = document.querySelector(".wether-box");
const wether_details = document.querySelector(".wether-details");


async function checkwether(city){
   const api_key = "6530f7a87c81e2e994b4ce02c895c087";
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
   const wether_data = await fetch(`${url}`).then(response => response.json());

   if(wether_data.cod ===`404`){
        location_not_found.style.display = "flex";
        wether_box.style.display = "none";
        wether_details.style.display = "none";
        return;
   }
    else{
        wether_box.style.display = "flex";
        wether_details.style.display = "flex";
        location_not_found.style.display = "none";
    }
   
   tempreture.innerHTML = `${Math.round(wether_data.main.temp - 273.15)}°C`;
   discription.innerHTML = `${wether_data.weather[0].description}`;
   humidity.innerHTML = `${wether_data.main.humidity}%`;
   wind.innerHTML = `${wether_data.wind.speed}Km/H`;

   switch(wether_data.weather[0].main){ //this is for img
        case 'Clouds':
        wether_img.src = "images/cloud.png" ;
        break; 
        case 'Clear':
            wether_img.src = "images/clear.png" ; 
        break;
        case 'Rain':
            wether_img.src = "images/rain.png" ;
        break; 
        case 'Mist':
            wether_img.src = "images/mist.png" ;
        break;
        case 'Snow':
            wether_img.src = "images/snow.png" ;    
   }  
}
input_button.addEventListener("click", ()=>{
    checkwether(input_box.value);
})
