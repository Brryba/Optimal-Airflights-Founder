package airflights.dto;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import java.time.LocalDateTime;

@Data
public class FlightDto {
    private final int flightId;
    @NumberFormat
    private final int startAirportId;
    @NumberFormat
    private final int destinationAirportId;
    @NumberFormat(style = NumberFormat.Style.CURRENCY)
    private final double price;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private final LocalDateTime departureTime;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private final LocalDateTime arrivalTime;
}
