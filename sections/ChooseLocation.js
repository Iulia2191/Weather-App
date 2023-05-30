const button = document.querySelector('#btn')
const searchInput = document.getElementById('search')

function updateCurrentCity (city) {
  const currentCity = document.querySelector('.current-city')
  currentCity.innerHTML = city
}

function updateWeather (city) {
  localStorage.setItem('city', city)
  console.log('location')
  updateCurrentCity(city)
  displayCurrentWeather(city)
  displayWeatherForecast(city)
}

button.addEventListener('click', function (event) {
  event.preventDefault()
  const searchInput = document.getElementById('search')
  const city = searchInput.value
  updateWeather(city)
})

searchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    const city = searchInput.value
    updateWeather(city)
  }
})
