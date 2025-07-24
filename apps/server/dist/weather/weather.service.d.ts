import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class WeatherService {
    private httpService;
    private configService;
    constructor(httpService: HttpService, configService: ConfigService);
    getWeather(city: string): Promise<any>;
}
