package airflights.controller;

import airflights.dto.AirportDto;
import airflights.service.AirportService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/airport")
public class AirportController {
    private final AirportService airportService;

    public AirportController(AirportService airportService) {
        this.airportService = airportService;
    }

    @GetMapping
    public List<AirportDto> getAirports() {
        return airportService.getAllAirports();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public AirportDto addAirport(@RequestBody @Valid AirportDto airport) {
        return airportService.createAirport(airport);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public AirportDto updateAirport(@PathVariable(name = "id") Integer id, @RequestBody @Valid AirportDto airport) {
        return airportService.updateAirport(id, airport);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAirport(@PathVariable("id") Integer id) {
    }
}
