export class WeatherSource {
    opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';
    constructor() { }

    getWeatherForCity(city: string): Promise<any> {
        // przykładowy link: http://api.openweathermap.org/data/2.5/weather?q=krakow&APPID=50d53005c0fd5f556bb4ef15224c4209
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherPromise = fetch(openWeatherUrl);
        return weatherPromise
            .then(
                (ret) => {
                    console.log('PROMISE RESOLVED', ret);
                    return ret.json()
                }
            )
          
      
    }
}
