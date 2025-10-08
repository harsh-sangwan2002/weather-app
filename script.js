const setDateTime = () => {
    dateTime.textContent = new Date().toLocaleString();
}

const updateDOM = (data) => {
    temp.textContent = data.current.temp_c + " °C";
    city.textContent = data.location.name;
    condition.textContent = data.current.condition.text;
}

const fetchWeatherData = async (city) => {
    let url = `https://api.weatherapi.com/v1/current.json?key=fb0b9d625d354cb684e50017251701&q=${city}&aqi=no`;
    let response = await fetch(url);
    let data = await response.json();
    return data;
}


const temp = document.querySelector(".temp");
const city = document.querySelector(".location");
const dateTime = document.querySelector(".date-time");
const condition = document.querySelector(".condition");
const inputRef = document.querySelector("input");
const buttonRef = document.querySelector("button");

setDateTime();

buttonRef.addEventListener("click", async (e) => {
    e.preventDefault();
    setDateTime();

    const data = await fetchWeatherData(inputRef.value);
    console.log(data);
    updateDOM(data);
});
