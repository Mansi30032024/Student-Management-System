package com.example.sms.controller;

import java.util.ArrayList;

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
    public ArrayList<Student> getStudent() {
        ArrayList<Student> students = new ArrayList<>();
        students.add(  new Student(1, "Ram", "MCA") );
        students.add(  new Student(2, "Sakshi", "BE") );
        students.add(  new Student(3, "Ritu", "BCA") );

        return students;
    }
}

//  return new Student(  1,  "Ram",   "MCA"   );
// <Student> --> Generic  
// <> diamond operator
//ArrayList<Student> students = new ArrayList<>();
//ArrayList is class , Student is data-type,   public ArrayList<Student> getStudent()}{}   ArrayList<Student> because we r returning list, 