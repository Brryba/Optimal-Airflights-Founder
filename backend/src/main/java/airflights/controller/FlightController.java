package airflights.controller;

import airflights.dto.FlightDto;
import airflights.service.FlightService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flight")
public class FlightController {
    private final FlightService flightService;

    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }

    @GetMapping
    public List<FlightDto> getFlights() {
        return flightService.getAllFlights();
    }

    @GetMapping("/time")
    public List<Integer> getFlightsIdWithShortestTime(@RequestParam("from") Integer startAirportId,
                                                      @RequestParam("to") Integer destinationAirportId) {
        return flightService.getFlightsIdWithShortestTime(startAirportId, destinationAirportId);
    }

    @GetMapping("/price")
    public List<Integer> getFlightsIdWithLowestPrice(@RequestParam("from") Integer startAirportId,
                                                     @RequestParam("to") Integer destinationAirportId) {
        return flightService.getFlightsIdWithLowestPrice(startAirportId, destinationAirportId);
    }

    @GetMapping("/distance")
    public List<Integer> getFlightsIdWithShortestDistance(@RequestParam("from") Integer startAirportId,
                                                          @RequestParam("to") Integer destinationAirportId) {
        return flightService.getFlightsIdWithShortestDistance(startAirportId, destinationAirportId);
    }

    @GetMapping("/transfer")
    public List<Integer> getFlightsIdWithLowestFlights(@RequestParam("from") Integer startAirportId,
                                                       @RequestParam("to") Integer destinationAirportId) {
        return flightService.getFlightsIdWithLowestTransfers(startAirportId, destinationAirportId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public FlightDto addFlight(@RequestBody @Valid FlightDto flight) {
        return flightService.createFlight(flight);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public FlightDto updateFlight(@PathVariable(name = "id") Integer id,
                                  @RequestBody @Valid FlightDto flight) {
        return flightService.updateFlight(id, flight);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFlight(@PathVariable("id") Integer id) {
        flightService.deleteFlight(id);
    }
}