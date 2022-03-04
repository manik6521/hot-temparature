const API_KEY = `46f07d1dcd8ef6568b21da96282b8c1a`;

const searchTemperature = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    // console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temparature => {
    // const changeName = document.getElementById("city");
    // const numberDeg = document.getElementById('temperature');
    setInnerText ('city', temparature.name);
    setInnerText ('temperature', temparature.main.temp);
    setInnerText ('condition', temparature.weather[0].main);

    // setIcon 

    const url =` http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute('src', url);
     
    // console.log(temparature)
}