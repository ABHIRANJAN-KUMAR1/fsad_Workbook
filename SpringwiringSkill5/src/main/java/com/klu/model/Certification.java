package com.klu.model;

import org.springframework.stereotype.Component;

@Component
public class Certification {

    private int id;
    private String name;
    private String dateOfCompletion;

    public Certification() {
        this.id = 101;
        this.name = "Java Spring Framework";
        this.dateOfCompletion = "15-Jan-2026";
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDateOfCompletion() {
        return dateOfCompletion;
    }

    @Override
    public String toString() {
        return "Certification [id=" + id + ", name=" + name +
               ", dateOfCompletion=" + dateOfCompletion + "]";
    }
}
