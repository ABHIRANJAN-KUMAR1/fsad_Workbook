package com.klu.model;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Student {

    private int id;
    private String name;
    private String gender;

    @Autowired   // Field Injection
    private Certification certification;

    public Student() {
        this.id = 1;
        this.name = "Aarav";
        this.gender = "Male";
    }

    public Certification getCertification() {
        return certification;
    }

    @Override
    public String toString() {
        return "Student [id=" + id + ", name=" + name +
               ", gender=" + gender + ", certification=" + certification + "]";
    }
}
