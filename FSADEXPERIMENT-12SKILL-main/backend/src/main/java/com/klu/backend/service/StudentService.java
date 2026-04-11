package com.klu.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.backend.model.Student;
import com.klu.backend.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public Student add(Student s) {
        return repo.save(s);
    }

    public List<Student> getAll() {
        return repo.findAll();
    }

    public Student update(Long id, Student s) {
        Student st = repo.findById(id).orElseThrow();
        st.setName(s.getName());
        st.setEmail(s.getEmail());
        st.setCourse(s.getCourse());
        return repo.save(st);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}