let apiKey = 'b735e147a6058d6e943d6887b68e44fc';
let city = 'Toronto, CA'
let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=43.7001&lon=-79.4163&appid={b735e147a6058d6e943d6887b68e44fc}';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const currentTemperature = data.main.temp;
        const currentConditions = data.weather[0].description;

        document.getElementById('currentTemperature').textContent = `Temperatura atual: ${currentTemperature}°C`;
        document.getElementById('currentConditions').textContent = `Condições atuais: ${currentConditions}`;
    })
    .catch(error => {
        console.error('Erro ao obter dados da API:', error);
    });