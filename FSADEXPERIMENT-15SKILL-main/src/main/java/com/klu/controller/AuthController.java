package com.klu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klu.entity.User;
import com.klu.repository.UserRepository;
import com.klu.security.JwtUtil;

@RestController
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        User dbUser = userRepository
                .findByUsername(user.getUsername())
                .orElse(null);

        if (dbUser != null && dbUser.getPassword().equals(user.getPassword())) {
            return jwtUtil.generateToken(
                    dbUser.getUsername(),
                    dbUser.getRole()
            );
        }

        return "Invalid Credentials";
    }
}