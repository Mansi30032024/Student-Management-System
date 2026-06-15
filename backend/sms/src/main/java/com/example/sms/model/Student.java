package com.example.sms.model; //public accessible -->  only directory name mention  [can be import in other files to use ]
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="students")
public class Student {
//data field only accessible here only 
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String course;

    public Student() {
    }

    //use getter setter
   // this to assign data in particular parameters for different objects
    public Student(Integer id, String name, String course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }
  
}
//Student s1 = new Student(1, 'Ram', 'abc');
//every time we can't do like this so we have to use getter setter methods

//encapsulation -> private data , getter setter methods 
// data + methods together --> encapsulation 

//reference in stack , object created in heap  (memory will be allocated in heap )
  