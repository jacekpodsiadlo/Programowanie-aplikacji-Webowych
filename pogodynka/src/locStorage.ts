import { CityWeather } from "./cityWeather.model";

export class LocStorage {
  key = "data";

  getData(): CityWeather[] {
    const rawData = localStorage.getItem(this.key);
    return JSON.parse(rawData); //zmieniamy na obiekt
  }
  setData(data: CityWeather[]): void {
    const processedData = JSON.stringify(data); //zmieniamy data na text
    localStorage.setItem(this.key, processedData);
  }
}
