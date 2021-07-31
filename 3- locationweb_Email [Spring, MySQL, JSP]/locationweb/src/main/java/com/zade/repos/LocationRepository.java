package com.zade.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zade.entities.Location;

//JpaRepository is better when you want to findAll(), compared to CRUDRepository
public interface LocationRepository extends JpaRepository<Location, Integer> {

}
