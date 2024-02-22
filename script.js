let apiKey = 'b735e147a6058d6e943d6887b68e44fc';
let city = 'toronto'
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


const res = fetch(apiUrl);
const data = await res.json;

console.log(data)
