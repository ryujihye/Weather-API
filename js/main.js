const API_KEY = "8ab786ce362b6c4a8ef78359c05b9b69";
const lat = 51.50853;
const lon = -0.12574;

axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
        // handle success
        console.log(response);
        const temperature = document.querySelector(".temperature");
        const weatherType = document.querySelector(".weather-type");
        const Icon = document.querySelector(".icon");
        const humidity = document.querySelector(".humidity");

        temperature.innerHTML = response.data.main.temp
        // console.log(response.data.main.temp);
        // console.log(response.data.weather[0].main);
        // console.log(response.data.main.temp);
        // console.log(response.data.main.humidity);


        temperature.innerHTML = `${response.data.main.temp}`;
        weatherType.innerHTML = `${response.data.weather[0].main}`;
        humidity.innerHTML = `humidity : ${response.data.main.humidity}%`;
        Icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)


    })
    .catch(function (error) {
        // handle error
        // console.log(error);
    })
    .then(function () {
        // always executed
    });


const select = document.querySelector("#select");
select.addEventListener("change", (event) => {

    axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${event.target.value}&appid=${API_KEY}&units=metric`)

        .then(function (response) {
            //온도, 날씨, 아이콘
            const temperature = document.querySelector(".temperature");
            const weatherType = document.querySelector(".weather-type");
            const Icon = document.querySelector(".icon");



            temperature.innerHTML = `${response.data.main.temp}`;
            weatherType.innerHTML = `${response.data.weather[0].main}`;
            Icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)




        })
        .catch(function (error) {

            console.log(error);
        })
        .then(function () {

        });
})