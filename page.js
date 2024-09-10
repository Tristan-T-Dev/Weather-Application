let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');
let main = document.querySelector('main');

form.addEventListener('submit' ,(event) => {
    event.preventDefault();
    if(valueSearch.value != ''){
        searchWeather();
    }
})
    // Fetch weather data
    let id = '9ba6a818cc6d4cc384f8c49bef909814'
    let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
    const searchWeather = () =>{
        fetch(url + '&q=' + valueSearch.value)
        .then(responsive => responsive.json())
        .then(data => {
            console.log(data);
            if(data.cod == 200){
                city.querySelector('figcaption') .innerText = data.name;
                city.querySelector('img') .src = 'https://flagsapi.com/'+data.sys.country+'/flat/32.png';
                temperature.querySelector('img') .src = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
                temperature.querySelector('figcaption span') .innerText = data.main.temp;
                description.innerText = data.weather[0].description;
                pressure.innerText = data.main.pressure;
                humidity.innerText = data.main.humidity;
                clouds.innerText = data.clouds.all;
            }else{
                main.classList.add('error');
                setTimeout(() =>{
                    main.classList.remove('error');
                }, 1000);
            }
            valueSearch.value = '';
        });
    }
    const initApp = () => {
        valueSearch.value = 'Philippines';
        searchWeather();
    }
    initApp();