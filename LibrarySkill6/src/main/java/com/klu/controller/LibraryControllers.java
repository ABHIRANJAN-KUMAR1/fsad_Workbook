package com.klu.controller;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import com.klu.model.Books;

@RestController
@RequestMapping("/library")
public class LibraryControllers {

    private List<Books> bookList = new ArrayList<>();

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Online Library System";
    }

    @GetMapping("/count")
    public int count() {
        return bookList.size();
    }

    @GetMapping("/price")
    public double price() {
        return 499.99;
    }

    @GetMapping("/books")
    public List<String> books() {
        List<String> list = new ArrayList<>();
        list.add("Java Programming");
        list.add("Spring Boot Guide");
        list.add("Full Stack Development");
        return list;
    }

    @GetMapping("/books/{id}")
    public String bookById(@PathVariable int id) {
        return "Book ID is: " + id;
    }

    @GetMapping("/search")
    public String search(@RequestParam String title) {
        return "Searching for: " + title;
    }

    @GetMapping("/author/{name}")
    public String author(@PathVariable String name) {
        return "Books written by: " + name;
    }

    @PostMapping("/addbook")
    public String addBook(@RequestBody Books book) {
        bookList.add(book);
        return "Book Added Successfully";
    }

    @GetMapping("/viewbooks")
    public List<Books> viewBooks() {
        return bookList;
    }
}
