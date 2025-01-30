console.log("Am i in there?");
const searchBar = document.getElementById('search')
const btn = document.getElementById('submit-btn')
const weatherDisplayContainer = document.querySelector('.commentary-text')

btn.addEventListener('click', () => {
async function getWeather() {

    const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchBar.value}?unitGroup=metric&key=PMX9KD7XUBMNRC73WSBAVUGX2&contentType=json`, {mode: 'cors'});
    const parseData = await data.json();
    let weatherResult = parseData.currentConditions.temp
    let isCelsius = true
       
    weatherDisplayContainer.innerHTML = `<h1 class="temperature">${weatherResult} C</h1>
                <br>Switch Temp Format:<br>
                <label class="switch">
                    <input type="checkbox" id="switch">
                    <span class="slider round"></span>
                </label>`
    let tempDisplay = document.querySelector('.temperature')
    let checkbox = document.getElementById('switch')

               checkbox.addEventListener('change', () => {
                    isCelsius = !checkbox.checked 
                    tempDisplay.textContent = isCelsius ? `${weatherResult} C` : `${celsiusToFahrenheit(weatherResult)} F`;
                })

                function fetchGif() {
                    
                        if (weatherResult > 12) {
                            fetch(`https://api.giphy.com/v1/gifs/translate?api_key=YNqwKQoDKQc2bRznISOwhR8BshCPnk1x&s=hotweather`, {mode: "cors"})
                            .then(response => response.json())
                            .then(data => {
                                imgContainer.src = ''
                              imgContainer.src = data.data.images.original.url;
                            })
                            }
                               else if (weatherResult < 12) {
                                fetch(`https://api.giphy.com/v1/gifs/translate?api_key=YNqwKQoDKQc2bRznISOwhR8BshCPnk1x&s=coldweather`, {mode: "cors"})
                                .then(response => response.json())
                                .then(data => {
                                    imgContainer.src = ''
                                  imgContainer.src = data.data.images.original.url;
                                })
                               }  }
                             fetchGif()
                              }

getWeather()
})





const gifContainer = document.querySelector('.intro-1')
const imgContainer = document.querySelector('img')








function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return Math.ceil(fahrenheit);
}

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return Math.ceil(celsius)
}

// weather api key -
// PMX9KD7XUBMNRC73WSBAVUGX2