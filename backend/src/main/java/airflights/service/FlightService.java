package airflights.service;

import airflights.dto.FlightDto;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FlightService {
    public List<FlightDto> getAllFlights() {
        return List.of(new FlightDto(1, 2, 3, 4,
                LocalDateTime.now().plusHours(2), LocalDateTime.now().plusHours(4)));
    }

    public List<Integer> getFlightsIdWithShortestTime(Integer startAirportId, Integer destinationAirportId) {
        return List.of(1, 2);
    }

    public List<Integer> getFlightsIdWithLowestPrice(Integer startAirportId, Integer destinationAirportId) {
        return List.of(3, 4);
    }

    public List<Integer> getFlightsIdWithShortestDistance(Integer startAirportId, Integer destinationAirportId) {
        return List.of(5, 6);
    }

    public List<Integer> getFlightsIdWithLowestTransfers(Integer startAirportId, Integer destinationAirportId) {
        return List.of(7, 8);
    }

    public FlightDto createFlight(FlightDto flight) {
        return new FlightDto(1, flight.getStartAirportId(), flight.getDestinationAirportId(), 2,
                flight.getDepartureTime(), flight.getArrivalTime());
    }

    public FlightDto updateFlight(Integer id, FlightDto flight) {
        return new FlightDto(id, flight.getStartAirportId(), flight.getDestinationAirportId(), 4,
                flight.getDepartureTime(), flight.getArrivalTime());
    }

    public void deleteFlight(Integer id) {
    }
}