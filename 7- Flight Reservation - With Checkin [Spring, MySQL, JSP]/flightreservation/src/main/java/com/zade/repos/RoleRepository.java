package com.zade.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zade.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
