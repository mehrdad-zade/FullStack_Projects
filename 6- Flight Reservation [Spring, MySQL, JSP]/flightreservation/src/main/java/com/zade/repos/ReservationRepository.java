package com.zade.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zade.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
