var selectedCityElement = document.querySelector("#selected-city")
var todaysDateElement = document.querySelector("#todays-date")
var selectedCityTempElement = document.querySelector("#temp-0")
var selectedCityWimdElement = document.querySelector("#wind-0")
var selectedCityHumidElement = document.querySelector("#humid-0")


const API_KEY = '82a2f69b5fd3dc3d0b3a9c7e689d1274'

const todaysDate = moment().format('LLLL');
console.log(moment().format('LLLL'));
todaysDateElement.innerHTML = todaysDate;

var todayPlus1El = document.querySelector("#date-1")
const todayPlus1 = moment().add(1,'d').format('LL');
console.log(moment().add(1,'d').format('LL'));
todayPlus1El.innerText = todayPlus1;

var todayPlus2El = document.querySelector("#date-2")
const todayPlus2 = moment().add(2,'d').format('LL');
console.log(moment().add(2,'d').format('LL'));
todayPlus2El.innerText = todayPlus2;

var todayPlus3El = document.querySelector("#date-3")
const todayPlus3 = moment().add(3,'d').format('LL');
console.log(moment().add(3,'d').format('LL'));
todayPlus3El.innerText = todayPlus3;

var todayPlus4El = document.querySelector("#date-4")
const todayPlus4 = moment().add(4,'d').format('LL');
console.log(moment().add(4,'d').format('LL'));
todayPlus4El.innerText = todayPlus4;

var todayPlus5El = document.querySelector("#date-5")
const todayPlus5 = moment().add(5,'d').format('LL');
console.log(moment().add(5,'d').format('LL'));
todayPlus5El.innerText = todayPlus5;



var citySearch = document.querySelector("#city-search");


triggerSearch()
function triggerSearch (e) {


    // selectedCityElement.innerText = 
    console.log(e);
    // var cityName = 

    // fetch(`http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid=${API_KEY}`).then(res => res.json()).then(data => {
    //     console.log(data)
    // })
}

// getWeatherForecast()
// function getWeatherForecast () {

//     navigator.geolocation.getCurrentPosition((success) => {
//         console.log(success);

//         let {latitude, longitude} = success.coords;
//         fetch(`api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`).then(res => res.json()).then(data => {
//             console.log(data)
//         })
//     })

// }