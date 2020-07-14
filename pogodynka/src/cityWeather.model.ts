export interface CityWeather {
    cityName: string;
    temprature: number;
    pressure: number;
    humidity: number;
    description?: string; //jesli jest opcjonalna to mozna dac "?" 
}