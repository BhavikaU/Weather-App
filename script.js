
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const abcd = document.querySelector(".abcd");
const card = document.querySelector(".card");


btn.addEventListener("click", onclick);

function onclick() {
    abcd.innerText = input.value;
    input.value ="";
    checkweather(abcd.innerText);
}

let apikey = "9997dac2d837752f990c600fb9568687";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city) {
    console.log(city);
    let response = await fetch(apiurl + city + `&appid=${apikey}`);
    
    let File = await response.json();
    console.log(File);
    console.log(File.main.temp_max);
    document.querySelector(".a").innerText = File.main.temp_max;
    document.querySelector(".ab").innerText = File.main.temp_min;
    document.querySelector(".abc").innerText = File.main.humidity;
    document.querySelector(".abcdd").innerText = File.sys.sunrise;
    document.querySelector(".abcdf").innerText = File.sys.sunset;

}
// checkweather();





