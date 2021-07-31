package com.zade.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.zade.entities.Location;

//JpaRepository is better when you want to findAll(), compared to CRUDRepository
public interface LocationRepository extends JpaRepository<Location, Integer> {
	
	@Query("select count(type) from Location group by type")
	public List<Object[]> findTypeAndTypeCount();

}
