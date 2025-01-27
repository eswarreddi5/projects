const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeatherData(city);
    }
});

function fetchWeatherData(city) {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '72fe4a1266a2b7590fda9a1a2386a589'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            cityName.textContent = data.name;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            description.textContent = `Description: ${data.weather[0].description}`;

            const weatherCondition = data.weather[0].main;
            let backgroundUrl = '';

            if (weatherCondition === 'Clear') {
                backgroundUrl = 'images/sunny.jpg'; 
            } else if (weatherCondition === 'Clouds') {
                backgroundUrl = 'images/cloudy.jpg';
            } else if (weatherCondition === 'Rain') {
                backgroundUrl = 'images/rainy.jpg';
            } else if (weatherCondition === 'Snow') {
                backgroundUrl = 'images/snowy.jpg';
            } else {
                backgroundUrl = 'images/default.jpg'; 
            }
    
            
            document.body.style.backgroundImage = `url(${backgroundUrl})`;
    
        let iconUrl = '';

        if (weatherCondition === 'Clear') {
            iconUrl = 'images/sunny.png'; // Replace with your image path
        } else if (weatherCondition === 'Clouds') {
            iconUrl = 'images/cloudy.png'; 
        } else if (weatherCondition === 'Rain') {
            iconUrl = 'images/rainy.png'; 
        } else if (weatherCondition === 'Snow') {
            iconUrl = 'images/snowy.png';
        } else {
            iconUrl = 'images/default.png'; // Default image for other conditions
        }
        
        document.getElementById('weatherIcon').src = iconUrl; 



        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            // Handle error, e.g., display an error message to the user
        });
}


const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];

function mycallback({quantity}){
    return quantity >200 ? "ok":"low"
}

const result = Map.groupBy(fruits,mycallback);

let text = "These fruits ore ok: <br>";
for (let x of result.get("ok")){
    text+=x.name+" "+x.quantity+"<br>";
}
text+="<br> These fruits are low:<br>";
for (let x of result.get("low")){
    text+=x.name+" "+x.quantity+"<br>";
}
console.log(text)