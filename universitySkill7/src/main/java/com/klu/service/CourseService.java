package com.klu.service;

import com.klu.entity.Course;
import com.klu.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    // Add course
    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    // Update course
    public Course updateCourse(Long id, Course courseDetails) {
        Optional<Course> optionalCourse = courseRepository.findById(id);
        if(optionalCourse.isPresent()) {
            Course course = optionalCourse.get();
            course.setTitle(courseDetails.getTitle());
            course.setDuration(courseDetails.getDuration());
            course.setFee(courseDetails.getFee());
            return courseRepository.save(course);
        }
        return null;
    }

    // Delete course
    public boolean deleteCourse(Long id) {
        Optional<Course> optionalCourse = courseRepository.findById(id);
        if(optionalCourse.isPresent()) {
            courseRepository.deleteById(id);
            return true;
        }
        return false;
    }

    // Get course by ID
    public Course getCourseById(Long id) {
        return courseRepository.findById(id).orElse(null);
    }

    // Get all courses
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    // Search courses by title
    public List<Course> searchCoursesByTitle(String title) {
        return courseRepository.findByTitleContainingIgnoreCase(title);
    }
}
