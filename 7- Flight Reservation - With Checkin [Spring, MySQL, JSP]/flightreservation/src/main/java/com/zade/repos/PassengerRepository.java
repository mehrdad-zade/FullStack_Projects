package com.zade.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zade.entities.Passenger;

public interface PassengerRepository extends JpaRepository<Passenger, Long> {

}
