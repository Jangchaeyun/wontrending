package com.won.trending.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping
    public String Home() {
        return "Welcome to trending platform";
    }

    @GetMapping("/api")
    public String secure() {
        return "Welcome to trending platform Secure";
    }
}
