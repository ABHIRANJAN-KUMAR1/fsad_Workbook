package com.klu.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @PostMapping("/add")
    public String addEmployee() {
        return "Employee Added (ADMIN)";
    }

    @DeleteMapping("/delete")
    public String deleteEmployee() {
        return "Employee Deleted (ADMIN)";
    }
}