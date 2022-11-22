var citySearch = document.getElementById('city-search');
var stateSearch = document.getElementById('state-search');
var todaysDateElement = document.querySelector("#todays-date");
var selectedCityTempElement = document.querySelector("#temp-0");
var selectedCityWimdElement = document.querySelector("#wind-0");
var selectedCityHumidElement = document.querySelector("#humid-0");
var cityInfo = document.getElementsByClassName('selected-city-info');


const API_KEY = '82a2f69b5fd3dc3d0b3a9c7e689d1274'
const API_KEY2 = '8c0861baac0db3361a78532cbb30c458'

const todaysDate = moment().format('LL');
console.log(moment().format('LL'));
todaysDateElement.innerText = todaysDate;

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


var selectedCity = document.getElementById('selected-city');
var selectedState = document.getElementById('selected-state');
var citySearchBtn = document.getElementById('city-searches');


todaytempEL = document.getElementById('temp-0');
todaywindEL = document.getElementById('wind-0');
todayhumidEL = document.getElementById('humid-0');
todayiconEL = document.getElementById('day-0-icon');

dayonetempEL = document.getElementById('temp-1');
dayonewindEL = document.getElementById('wind-1');
dayonehumidEL = document.getElementById('humid-1');
dayoneiconEL = document.getElementById('day-1-icon');

daytwotempEL = document.getElementById('temp-2');
daytwowindEL = document.getElementById('wind-2');
daytwohumidEL = document.getElementById('humid-2');
daytwoiconEL = document.getElementById('day-2-icon');

daythreetempEL = document.getElementById('temp-3');
daythreewindEL = document.getElementById('wind-3');
daythreehumidEL = document.getElementById('humid-3');
daythreeiconEL = document.getElementById('day-3-icon');

dayfourtempEL = document.getElementById('temp-4');
dayfourwindEL = document.getElementById('wind-4');
dayfourhumidEL = document.getElementById('humid-4');
dayfouriconEL = document.getElementById('day-4-icon');

dayfivetempEL = document.getElementById('temp-5');
dayfivewindEL = document.getElementById('wind-5');
dayfivehumidEL = document.getElementById('humid-5');
dayfiveiconEL = document.getElementById('day-5-icon');


var searchHistoryJSON = JSON.parse(localStorage.getItem('citystateCombo'))|| [];


var triggerSearch = function (event) {
    var city = citySearch.value;
    console.log(city)

    var state = stateSearch.value;
    console.log(state)
  
    let searchcombo = (`${city},${state}`)
    console.log(searchcombo)

    selectedCity.innerText = searchcombo;

    var searchHistory = localStorage.getItem('citystateCombo') || []
    var searchHistoryJSON = JSON.parse(searchHistory);
    searchHistoryJSON.push(searchcombo);

    var newsearchHistory = JSON.stringify(searchHistoryJSON);
    // localStorage.setItem('citySearchHistory', city);
    // localStorage.setItem('stateSearchHistory', state);

    localStorage.setItem('citystateCombo', newsearchHistory);

    var searchHistory = localStorage.getItem('citystateCombo')
    if (searchHistory) {
            searchHistoryJSON = JSON.parse(searchHistory);
    }
    searchHistoryJSON.push(searchcombo)
    
    localStorage.setItem('citystateCombo', JSON.stringify(searchHistoryJSON))

    event.preventDefault();

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},US&limit=1&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((latlongdata) => {
    console.log(latlongdata)

        var lat = latlongdata[0].lat;
        var long = latlongdata[0].lon;

        console.log(lat, long)

    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((weatherdata) => {
    console.log(weatherdata)

// Today
        var todaytemp = weatherdata.list[0].main.temp;
        todaytempEL.innerText = todaytemp;

        var todaywind = weatherdata.list[0].wind.speed;
        todaywindEL.innerText = todaywind;

        var todayhumid = weatherdata.list[0].main.humidity;
        todayhumidEL.innerText = todayhumid;
    
        var todayicon = weatherdata.list[0].weather[0].icon;
        todayiconEL.setAttribute('src', `http://openweathermap.org/img/wn/${todayicon}.png`);

        console.log(todaytemp, todaywind, todayhumid, todayicon)

// Day 1
        var dayonetemp = weatherdata.list[6].main.temp;
        dayonetempEL.innerText = dayonetemp;

        var dayonewind = weatherdata.list[6].wind.speed;
        dayonewindEL.innerText = dayonewind;

        var dayonehumid = weatherdata.list[6].main.humidity;
        dayonehumidEL.innerText = dayonehumid;


        var dayoneicon = weatherdata.list[6].weather[0].icon;
        dayoneiconEL.setAttribute('src', `http://openweathermap.org/img/wn/${dayoneicon}.png`);

        console.log(dayonetemp, dayonewind, dayonehumid, dayoneicon)

// Day 2
        var daytwotemp = weatherdata.list[14].main.temp;
        daytwotempEL.innerText = daytwotemp;

        var daytwowind = weatherdata.list[14].wind.speed;
        daytwowindEL.innerText = daytwowind;
    
        var daytwohumid = weatherdata.list[14].main.humidity;
        daytwohumidEL.innerText = daytwohumid;

        var daytwoicon = weatherdata.list[14].weather[0].icon;
        daytwoiconEL.setAttribute('src', `http://openweathermap.org/img/wn/${daytwoicon}.png`);
        
        console.log(daytwotemp, daytwowind, daytwohumid, daytwoicon)

// Day 3
        var daythreetemp = weatherdata.list[22].main.temp;
        daythreetempEL.innerText = daythreetemp;

        var daythreewind = weatherdata.list[22].wind.speed;
        daythreewindEL.innerText = daythreewind;

        var daythreehumid = weatherdata.list[22].main.humidity;
        daythreehumidEL.innerText = daythreehumid;

        var daythreeicon = weatherdata.list[22].weather[0].icon;
        daythreeiconEL.setAttribute('src', `http://openweathermap.org/img/wn/${daythreeicon}.png`);

        console.log(daythreetemp, daythreewind, daythreehumid, daythreeicon)

// Day 4
        var dayfourtemp = weatherdata.list[30].main.temp;
        dayfourtempEL.innerText = dayfourtemp;

        var dayfourwind = weatherdata.list[30].wind.speed;
        dayfourwindEL.innerText = dayfourwind;

        var dayfourhumid = weatherdata.list[30].main.humidity;
        dayfourhumidEL.innerText = dayfourhumid;

        var dayfouricon = weatherdata.list[30].weather[0].icon;
        dayfouriconEL.setAttribute('src', `http://openweathermap.org/img/wn/${dayfouricon}.png`);
        

        console.log(dayfourtemp, dayfourwind, dayfourhumid, dayfouricon)

// Day 5
        var dayfivetemp = weatherdata.list[38].main.temp;
        dayfivetempEL.innerText = dayfivetemp;

        var dayfivewind = weatherdata.list[38].wind.speed;
        dayfivewindEL.innerText = dayfivewind;

        var dayfivehumid = weatherdata.list[38].main.humidity;
        dayfivehumidEL.innerText = dayfivehumid;

        var dayfiveicon = weatherdata.list[38].weather[0].icon;
        dayfiveiconEL.setAttribute('src', `http://openweathermap.org/img/wn/${dayfiveicon}.png`);

        console.log(dayfivetemp, dayfivewind, dayfivehumid, dayfiveicon)

    })

    })
};

var createSearchBtn = function () {
    console.log(searchHistoryJSON)

    if (searchHistoryJSON.length === 0) {
        return

    }

    for (var i = 0; i < searchHistoryJSON.length; i++) {
    let searchHistoryEL = document.createElement('button');
        searchHistoryEL.classList = 'city-btn';
        searchHistoryEL.setAttribute('data-universal', searchHistoryJSON[i]);
        searchHistoryEL.setAttribute('onclick', 'triggerHistoricSearch(event);');
        searchHistoryEL.innerText = searchHistoryJSON[i];
        citySearchBtn.appendChild(searchHistoryEL);

        console.log(searchHistoryJSON[i])
    }
}



window.onload = function() {

createSearchBtn();

};



var triggerHistoricSearch = function (event) {
   
    var cityData = event.target.getAttribute('data-universal');
    console.log(cityData);

    selectedCity.innerText = cityData;

    event.preventDefault();

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityData},US&limit=1&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((latlongdata) => {
    console.log(latlongdata)

        var lat = latlongdata[0].lat;
        var long = latlongdata[0].lon;

        console.log(lat, long)

    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((weatherdata) => {
    console.log(weatherdata)

// Today
        var todaytemp = weatherdata.list[0].main.temp;
        todaytempEL.innerText = todaytemp;

        var todaywind = weatherdata.list[0].wind.speed;
        todaywindEL.innerText = todaywind;

        var todayhumid = weatherdata.list[0].main.humidity;
        todayhumidEL.innerText = todayhumid;
    
        var todayicon = weatherdata.list[0].weather[0].icon;
        todayiconEL.setAttribute('src', `http://openweathermap.org/img/wn/${todayicon}.png`);

        console.log(todaytemp, todaywind, todayhumid, todayicon)

// Day 1
        var dayonetemp = weatherdata.list[6].main.temp;
        dayonetempEL.innerText = dayonetemp;

        var dayonewind = weatherdata.list[6].wind.speed;
        dayonewindEL.innerText = dayonewind;

        var dayonehumid = weatherdata.list[6].main.humidity;
        dayonehumidEL.innerText = dayonehumid;


        var dayoneicon = weatherdata.list[6].weather[0].icon;
        dayoneiconEL.setAttribute('src', `http://openweathermap.org/img/wn/${dayoneicon}.png`);

        console.log(dayonetemp, dayonewind, dayonehumid, dayoneicon)

// Day 2
        var daytwotemp = weatherdata.list[14].main.temp;
        daytwotempEL.innerText = daytwotemp;

        var daytwowind = weatherdata.list[14].wind.speed;
        daytwowindEL.innerText = daytwowind;
    
        var daytwohumid = weatherdata.list[14].main.humidity;
        daytwohumidEL.innerText = daytwohumid;

        var daytwoicon = weatherdata.list[14].weather[0].icon;
        daytwoiconEL.setAttribute('src', `http://openweathermap.org/img/wn/${daytwoicon}.png`);
        
        console.log(daytwotemp, daytwowind, daytwohumid, daytwoicon)

// Day 3
        var daythreetemp = weatherdata.list[22].main.temp;
        daythreetempEL.innerText = daythreetemp;

        var daythreewind = weatherdata.list[22].wind.speed;
        daythreewindEL.innerText = daythreewind;

        var daythreehumid = weatherdata.list[22].main.humidity;
        daythreehumidEL.innerText = daythreehumid;

        var daythreeicon = weatherdata.list[22].weather[0].icon;
        daythreeiconEL.setAttribute('src', `http://openweathermap.org/img/wn/${daythreeicon}.png`);

        console.log(daythreetemp, daythreewind, daythreehumid, daythreeicon)

// Day 4
        var dayfourtemp = weatherdata.list[30].main.temp;
        dayfourtempEL.innerText = dayfourtemp;

        var dayfourwind = weatherdata.list[30].wind.speed;
        dayfourwindEL.innerText = dayfourwind;

        var dayfourhumid = weatherdata.list[30].main.humidity;
        dayfourhumidEL.innerText = dayfourhumid;

        var dayfouricon = weatherdata.list[30].weather[0].icon;
        dayfouriconEL.setAttribute('src', `http://openweathermap.org/img/wn/${dayfouricon}.png`);
        

        console.log(dayfourtemp, dayfourwind, dayfourhumid, dayfouricon)

// Day 5
        var dayfivetemp = weatherdata.list[38].main.temp;
        dayfivetempEL.innerText = dayfivetemp;

        var dayfivewind = weatherdata.list[38].wind.speed;
        dayfivewindEL.innerText = dayfivewind;

        var dayfivehumid = weatherdata.list[38].main.humidity;
        dayfivehumidEL.innerText = dayfivehumid;

        var dayfiveicon = weatherdata.list[38].weather[0].icon;
        dayfiveiconEL.setAttribute('src', `http://openweathermap.org/img/wn/${dayfiveicon}.png`);

        console.log(dayfivetemp, dayfivewind, dayfivehumid, dayfiveicon)

    })

    })
};
// }
