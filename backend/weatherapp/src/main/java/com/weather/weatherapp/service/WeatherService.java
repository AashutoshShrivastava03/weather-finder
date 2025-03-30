package com.weather.weatherapp.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {

    private final String API_KEY = "39dc5cde7d0ed498a983d2a143586b9d";

    private final String BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

    public String getWeatherData(String city) {
        String url = BASE_URL + "?q=" + city + "&appid=" + API_KEY + "&units=metric";
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }
    
}
