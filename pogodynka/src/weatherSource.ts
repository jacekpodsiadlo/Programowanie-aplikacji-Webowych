import { CityWeather } from "./cityWeather.model";

export class WeatherSource {
    opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';
    constructor() { }

    getWeatherForCity(city: string): Promise<CityWeather> {
        // przykładowy link: http://api.openweathermap.org/data/2.5/weather?q=krakow&APPID=50d53005c0fd5f556bb4ef15224c4209
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherPromise = fetch(openWeatherUrl);
        return weatherPromise
            .then(
                (responseObject) => {
                    console.log('PROMISE RESOLVED', responseObject);
                    return responseObject.json();
                }
            )
            .then(data => {
                // this.cityName = data.name;
                // this.temperature = +(data.main.temp - 270).toFixed(0);
                // this.pressure = data.main.pressure;
                // this.humidity = data.main.humidity;
                // this.weatherDescription = data.weather[0].description;
                const ret: CityWeather =  {
                    cityName: data.name,
                    temprature:  +(data.main.temp - 270).toFixed(0),
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    description: data.weather[0].description
                }
                return ret;
            })
    }
}
