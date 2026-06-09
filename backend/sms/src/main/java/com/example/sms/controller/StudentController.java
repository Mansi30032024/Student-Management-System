package com.example.sms.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sms.model.Student;
import com.example.sms.service.StudentService;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins="http://localhost:5173")
public class StudentController {

    @Autowired 
    private StudentService service;

    @GetMapping
    public ArrayList<Student> getStudent() {
        ArrayList<Student> students = new ArrayList<>();
        students.add(  new Student(1, "Ram", "MCA") );
        students.add(  new Student(2, "Sakshi", "BE") );
        students.add(  new Student(3, "Ritu", "BCA") );

        return students;
    }

    @GetMapping("/bca")
    public List<Student> getBcaStudents(){
        return  getStudent().stream()
                  .filter (student-> "BCA".equals(student.getCourse()))
                  .collect(Collectors.toList());

    }

    @GetMapping("/count")
    public int countStudents(){
        return service.getStudentCount();
    }
   
    @GetMapping("/message")
    public String getMessage(){
        return service.getStudentInfo();
    }
  
}

//  return new Student(  1,  "Ram",   "MCA"   );
// <Student> --> Generic  
// <> diamond operator
//ArrayList<Student> students = new ArrayList<>(); //constructor
//ArrayList is class , Student is data-type,   public ArrayList<Student> getStudent()}{}   ArrayList<Student> because we r returning list, 

//student is a object having id,name , course
//Collectors convert data into a list
//just returning a list not created a list 