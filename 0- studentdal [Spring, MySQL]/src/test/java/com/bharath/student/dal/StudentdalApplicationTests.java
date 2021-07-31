package com.bharath.student.dal;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bharath.student.dal.entities.Student;
import com.bharath.student.dal.repos.StudentRepository;

@SpringBootTest
class StudentdalApplicationTests {
	
	@Autowired
	private StudentRepository repo;

	@Test
	void testCreateStudent() {
		Student student = new Student();
		student.setName("John");
		student.setCourse("Serverless using AWS Lambda");
		student.setFee(30d);
		repo.save(student);
	}
	
	@Test
	void testFindStudentById() {
		Student student = repo.findById(1l).get();
		System.out.println(student);
	}
	
	@Test
	void testUpdateStudent() {
		Student student = repo.findById(1l).get();
		student.setFee(40d);
		repo.save(student);
	}
	
	@Test
	void testDeleteStudent() {
		Student student = repo.findById(1l).get();
		repo.delete(student);
	}

}
















