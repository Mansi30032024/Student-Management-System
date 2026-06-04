package com.example.sms.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sms.model.Student;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins="http://localhost:5173")
public class StudentController {

    @GetMapping
    public Student getStudent() {
        return new Student(  1,  "Ram",   "MCA"   );
    }
}