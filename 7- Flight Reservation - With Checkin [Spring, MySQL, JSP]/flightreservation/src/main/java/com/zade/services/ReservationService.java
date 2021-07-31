package com.zade.services;

import com.zade.dto.ReservationRequest;
import com.zade.entities.Reservation;

public interface ReservationService {
	
	public Reservation bookFlight(ReservationRequest request);

}
