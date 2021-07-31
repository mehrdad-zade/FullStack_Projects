package com.zade.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zade.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email); //spring will automatically builds this query to find the email
}
