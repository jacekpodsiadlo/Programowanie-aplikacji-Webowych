import { NewCity } from "./newCity";
import { LocStorage } from "./locStorage";
import { WeatherSource } from "./weatherSource";
import { CityWeather } from "./cityWeather.model";
import { Weather } from "./weather";

export class App {
  newCity: NewCity;
  cities: CityWeather[] = []; //tworzymy w klasie app cities, w niej cklase cityweather by zapisac w locstorage
  constructor() {
    this.start();
  }
  start(): void {
    this.newCity = new NewCity(this.onNewCity);
    const stor = new LocStorage();
    this.cities = stor.getData();
    for (let cityData of this.cities) {
       
    }
  }
  renderCity(cityData: CityWeather){
    const cityWeather = new Weather(cityData);
    const cities = document.querySelector("#cities");
    cities.innerHTML += cityWeather.render();
  }
  onNewCity = (city: string): void => {
    console.log("new City!", city);
    // pobrać pogodę dla miasta
    const weatherSource = new WeatherSource();
    const cityPromise = weatherSource.getWeatherForCity(city);
    cityPromise.then((cityData) => {
      this.cities.push(cityData);
      console.log("got data", cityData);
      // pokazać kafelek z pogodą
      const cityWeather = new Weather(cityData);
      const cities = document.querySelector("#cities");
      cities.innerHTML += cityWeather.render();

      // zapisać nowe miasto w LocStorage
      console.log("BEFORE SAVE");
      const stor = new LocStorage();
      stor.setData(this.cities);
      console.log("AFTER SAVE");
    });
  };
}
