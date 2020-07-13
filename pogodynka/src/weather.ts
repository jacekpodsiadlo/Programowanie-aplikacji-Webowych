export class Weather {
    cityName: string;
    temperature: number;
    pressure: number;
    humidity: number;
    weatherDescription: string;
    constructor(data: any) {
        this.cityName = data.name;
        this.temperature = data.main.temp - 270;
        this.pressure = data.main.pressure;
        this.humidity = data.main.humidity;
        this.weatherDescription = data.weather[0].description;
        
    }
    render(): string {
        return `<div class="city">
            <h1>${this.cityName}</h1>
            <div class="temp">${this.temperature}</div>
            <div class="pressure">${this.pressure}</div>
            <div class="humidity">${this.humidity}</div>
            <div class="description">${this.weatherDescription}</div>
        </div>
        `

    }

}