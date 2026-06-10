package com.example.sms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.sms.model.Student;
import com.example.sms.repository.StudentRepository;



@Service
public class StudentService {
  
  @Autowired
   private JdbcTemplate jdbcTemplate;

   @Autowired
   private StudentRepository repository;

  public String getStudentInfo() {
      return "Student Service Working";
    }

    public Integer getStudentCount() {
        String sql = "SELECT COUNT(*) FROM students";
        return jdbcTemplate.queryForObject(sql,Integer.class);
    }

    public List<Student> getAllStudents(){
        return repository.findAll();
    }
    public Student saveStudent(Student student){
        return repository.save(student);
    }
}
