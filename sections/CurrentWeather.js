function displayCurrentWeather (city) {
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(city)

  fetch(currentWeatherEndpoint)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const { name, dt, main, weather, wind } = data
      const day = getDayOfTheWeek(dt)
      const hours = getHour(dt)
      const temperature = Math.round(main.temp)
      const realFeel = Math.round(main.feels_like)
      const weatherDescription = weather[0].description
      const weatherIcon = getWeatherIcon(weather[0].icon)
      const windSpeed = Math.round(windToKmPerHour(wind.speed))

      let currentWeatherContainer = document.querySelector('.current-weather')
      currentWeatherContainer.innerHTML = `
            <div>
              <div><strong>${name}</strong></div>
              <div><strong>${day}</strong>, ${hours}</div>
              <div>
                <strong>${temperature}°C</strong>
                <img src="${weatherIcon}" />
              </div>
            </div>
            <div>
              <p>Real feel: <strong>${realFeel}°C</strong></p>
              <p>${weatherDescription}</p>
              <p>Vânt: <strong>${windSpeed} km/h</strong></p>
            </div>
          `
    })
}
