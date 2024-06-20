const inputbox = document.getElementById("input-box");
const button = document.getElementById("search");
const weather_img = document.querySelector(".weather-img");
const tem = document.querySelector(".tem");
const tem_detail = document.querySelector(".des");
const humi = document.getElementById("humidity");
const first_tem = document.getElementById("first-temp");
const second_tem = document.getElementById("second-temp");
const third_tem = document.getElementById("third-temp");
const forth_tem = document.getElementById("forth-temp");
const fifth_tem = document.getElementById("fifth-temp");
const first_humi = document.getElementById("first-humi");
const second_humi = document.getElementById("second-humi");
const third_humi = document.getElementById("third-humi");
const forth_humi = document.getElementById("forth-humi");
const fifth_humi = document.getElementById("fifth-humi");
const first_con = document.getElementById("first-con");
const second_con = document.getElementById("second-con");
const third_con = document.getElementById("third-con");
const forth_con = document.getElementById("forth-con");
const fifth_con = document.getElementById("fifth-con");
function checkWeather(city) {
  const API_key = "b4db8f37673e301630f16a7fe50f604d";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;
  fetch(url)
    .then((response) => response.json())
    .then((weather_data) => {
      console.log(weather_data);
      //   if (weather_data.cod !== 200) {
      //     document.getElementsByClassName("error").innerHTML =
      //       weather_data.message;
      //     return;
      //   }
      tem.innerHTML = `${Math.round(
        weather_data.list[0].main.temp - 273.15
      )}°C`;
      tem_detail.innerHTML = `${weather_data.list[0].weather[0].description}`;
      humi.innerHTML = `${weather_data.list[0].main.humidity}%`;
      if (weather_data.list[0].weather[0].main == "Clear") {
        weather_img.src = "./clear.png";
      } else if (weather_data.list[0].weather[0].main == "Mist") {
        weather_img.src = "./mist.png";
      } else if (weather_data.list[0].weather[0].main == "Rain") {
        weather_img.src = "./rain.png";
      } else if (weather_data.list[0].weather[0].main == "Snow") {
        weather_img.src = "./snow.png";
      } else if (weather_data.list[0].weather[0].main == "Clouds") {
        weather_img.src = "./cloud.png";
      }
      first_tem.innerHTML = `Temperature=${Math.round(
        weather_data.list[1].main.temp - 273.15
      )}°C`;
      second_tem.innerHTML = `Temperature=${Math.round(
        weather_data.list[2].main.temp - 273.15
      )}°C`;
      third_tem.innerHTML = `Temperature=${Math.round(
        weather_data.list[3].main.temp - 273.15
      )}°C`;
      forth_tem.innerHTML = `Temperature=${Math.round(
        weather_data.list[4].main.temp - 273.15
      )}°C`;
      fifth_tem.innerHTML = `Temperature=${Math.round(
        weather_data.list[5].main.temp - 273.15
      )}°C`;
      first_humi.innerHTML = `Humidity=${weather_data.list[0].main.humidity}%`;
      second_humi.innerHTML = `Humidity=${weather_data.list[1].main.humidity}%`;
      third_humi.innerHTML = `Humidity=${weather_data.list[2].main.humidity}%`;
      forth_humi.innerHTML = `Humidity=${weather_data.list[3].main.humidity}%`;
      fifth_humi.innerHTML = `Humidity=${weather_data.list[4].main.humidity}%`;
    });
}
button.addEventListener("click", () => {
  checkWeather(inputbox.value);
});
// const API_key = "b4db8f37673e301630f16a7fe50f604d";
// const cnt = 5;
// const city = "agra";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
