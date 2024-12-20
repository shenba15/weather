var search=document.querySelector(".search input")
var searchbtn=document.querySelector(".search button")
var weather=document.querySelector(".weather-icon")

const apikey='a6fcc03f436f7dd9fa2ba7daeb37d758'
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function check(city){
    const responce =await fetch(apiurl +city+`&appid=${apikey}`)
    var data=await responce.json()
    // console.log(data);
    if(responce.status===404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c"
    document.querySelector(".para1").innerHTML=data.main.humidity +"%"
    document.querySelector(".para2").innerHTML=data.wind.speed+" km/hr"

    if(data.weather[0].main=='Clouds'){
        weather.src='image/clouds.png'
    }
    else if(data.weather[0].main=='Clear'){
        weather.src='image/clear.png'
    }
    else if(data.weather[0].main=='Rain'){
        weather.src='image/rain.png'
    }
    else if(data.weather[0].main=='Drizzle'){
        weather.src='image/drizzle.png'
    }
    else if(data.weather[0].main=='Mist'){
        weather.src='image/mist.png'
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
}
}
searchbtn.addEventListener("click",()=>{
    check(search.value)
})

