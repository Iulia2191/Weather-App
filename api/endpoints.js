const apiKey = 'f7219262c4768c7034d81d70fe738841'

function getCurrentWeatherEndpoint (city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${apiKey}`
}
function getForecastEndpoint (city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${apiKey}`
}
