package com.weather.weatherapp.controller;

import org.springframework.web.bind.annotation.*;
import com.weather.weatherapp.service.WeatherService;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping
    public String getWeather(@RequestParam String city) {
        return weatherService.getWeatherData(city);
    }
}
