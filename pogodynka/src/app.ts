import { NewCity } from "./newCity";
import { LocStorage } from "./locStorage";
import { WeatherSource } from "./weatherSource";

export class App {
    newCity: NewCity;
    constructor() {
        this.start();
    }
    start(): void {
        this.newCity = new NewCity(this.onNewCity);
    }
    onNewCity(city: string): void {
        console.log('new City!', city)
        // pobrać pogodę dla miasta
        const weatherSource = new WeatherSource();
        const cityPromise = weatherSource.getWeatherForCity(city);
        cityPromise.then(cityData => {
            console.log('got data', cityData);
            // pokazać kafelek z pogodą
            const cityWeather = new Weather(cityData);
            const cities = document.querySelector('#cities');
            cities.innerHTML += cityWeather.render();


            // zapisać nowe miasto w LocStorage
            console.log('BEFORE SAVE')
            const stor = new LocStorage();
            stor.setData(cityData);
            console.log('AFTER SAVE')
        });
    }
}