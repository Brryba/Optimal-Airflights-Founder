package airflights.service;

import airflights.dto.AirportDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AirportService {
    public List<AirportDto> getAllAirports() {
        List<AirportDto> airports = new ArrayList<>();
        airports.add(new AirportDto(1, "Minsk", 12.0, 25.0));
        return airports;
    }

    public AirportDto createAirport(AirportDto airport) {
        return new AirportDto(2, airport.getAirportName(), airport.getLongitude(), airport.getLatitude());
    }

    public AirportDto updateAirport(Integer id, AirportDto airport) {
        return new AirportDto(id, airport.getAirportName(), airport.getLongitude(), airport.getLatitude());
    }

    public void deleteAirport(Integer id) {
    }
}
