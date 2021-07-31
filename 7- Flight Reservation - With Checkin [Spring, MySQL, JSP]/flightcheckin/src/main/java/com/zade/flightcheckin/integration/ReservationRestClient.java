package com.zade.flightcheckin.integration;

import com.zadeflightcheckin.integration.dto.Reservation;
import com.zadeflightcheckin.integration.dto.ReservationUpdateRequest;

public interface ReservationRestClient {

	public Reservation findReservation(Long id);

	public Reservation updateReservation(ReservationUpdateRequest request);

}
