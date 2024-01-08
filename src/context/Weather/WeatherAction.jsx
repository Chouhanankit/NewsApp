export const fetchWeather = async (text) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=4e40b44e62994275b5690206240201&q=${text}&aqi=no`);
    const data = await response.json();
    return data;
}
