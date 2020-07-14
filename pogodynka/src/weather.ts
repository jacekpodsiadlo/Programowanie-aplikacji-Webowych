import { CityWeather } from "./cityWeather.model";

export class Weather {
    cityName: string;
    temperature: number;
    pressure: number;
    humidity: number;
    weatherDescription: string;
    constructor(data: CityWeather) {
        this.cityName = data.cityName;
        this.temperature = data.temprature// to fixed zmienia na stringa, a + zamienia spowrotem na liczbe
        this.pressure = data.pressure;
        this.humidity = data.humidity;
        this.weatherDescription = data.description;
        
    }
    render(): string {
        return `<div class="city">
            <h1>${this.cityName}</h1>
            <div class="description">${this.weatherDescription}</div>
            <div class="temp">Temp:${this.temperature} &deg;C</div>
            <div class="pressure">Press:${this.pressure}</div>
            <div class="humidity">Humid:${this.humidity}</div>
            </div>
        `

    }

}