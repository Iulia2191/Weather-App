const currentCityTag = document.querySelector('.current-city')
const errorMessageTag = document.querySelector('#error-message')

let currentCity = localStorage.getItem('city')

if (!currentCity) {
  localStorage.setItem('city', 'Cluj-Napoca')
  currentCity = 'Cluj-Napoca'
}

currentCityTag.innerHTML =
  currentCity.charAt(0).toUpperCase() + currentCity.slice(1)
