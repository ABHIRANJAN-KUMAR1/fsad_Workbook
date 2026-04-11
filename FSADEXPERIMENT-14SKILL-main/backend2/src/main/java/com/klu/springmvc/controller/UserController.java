package com.klu.springmvc.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klu.springmvc.model.User;
import com.klu.springmvc.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") 
public class UserController {

    @Autowired
    private UserRepository repo;

    // ✅ Register
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return repo.save(user);
    }

    // ✅ Login
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User existing = repo.findByEmail(user.getEmail());

        if (existing != null && existing.getPassword().equals(user.getPassword())) {
            return existing;
        }
        return null;
    }

    // ✅ Profile
    @GetMapping("/profile/{id}")
    public User getProfile(@PathVariable Long id) {
        return repo.findById(id).orElse(null);
    }
}
