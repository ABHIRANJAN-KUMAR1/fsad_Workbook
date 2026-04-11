package com.klu.springmvc.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.klu.springmvc.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}