import { WeatherService } from './weather.service';
export declare class WeatherController {
    private weatherService;
    constructor(weatherService: WeatherService);
    getWeather(city: string): Promise<any>;
}
