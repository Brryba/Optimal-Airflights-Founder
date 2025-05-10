package airflights.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.annotation.Nullable;
import jakarta.validation.constraints.AssertTrue;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.format.annotation.NumberFormat;

@Data
public class AirportDto {
    private final Integer id;
    @Size(min = 3, message = "Airport name should contain at least 3 symbols")
    @NotNull(message = "Airport name should contain at least 3 symbols")
    private final String airportName;
    @NumberFormat(style = NumberFormat.Style.NUMBER)
    private final Double longitude;
    @NumberFormat(style = NumberFormat.Style.NUMBER)
    private final Double latitude;

    @AssertTrue(message = "Invalid longitude value")
    @JsonIgnore
    public boolean isLongitudeDiapasonCorrect() {
        return longitude >= -180 && longitude <= 180;
    }

    @AssertTrue(message = "Invalid latitude value")
    @JsonIgnore
    public boolean isLatitudeDiapasonCorrect() {
        return latitude >= -180 && latitude <= 180;
    }
}
