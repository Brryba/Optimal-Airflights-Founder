import React from 'react';
import { TextField, Button, Container, Typography, Grid, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const FormComponent = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Find route
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="From"
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="To"
                            variant="outlined"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined" required>
                            <InputLabel>Sort By</InputLabel>
                            <Select
                                label="Sort By"
                                defaultValue="time"
                            >
                                <MenuItem value="time">Fastest (Time)</MenuItem>
                                <MenuItem value="distance">Fastest (Distance)</MenuItem>
                                <MenuItem value="price">Cheapest</MenuItem>
                                <MenuItem value="land">Less Landings</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default FormComponent;