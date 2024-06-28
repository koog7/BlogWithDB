import { Box, Button, Grid, TextField, Typography } from '@mui/material';
const Contact = () => {
    return (
        <div>
            <Box sx={{
                padding: 4,
                backgroundColor: '#242424',
                borderRadius: 2,
                boxShadow: 3,
                maxWidth: 600,
                margin: '100px auto 0 auto',

            }}>
                <Typography variant="h4" component="h1" gutterBottom color={'white'}>
                    Contact us
                </Typography>
                <form noValidate autoComplete="off">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                required
                                sx={{backgroundColor: 'white', borderRadius: '5px'}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Surname"
                                variant="outlined"
                                required
                                sx={{backgroundColor: 'white', borderRadius: '5px'}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                type="email"
                                required
                                sx={{backgroundColor: 'white', borderRadius: '5px'}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Telephone"
                                variant="outlined"
                                type="tel"
                                required
                                sx={{backgroundColor: 'white', borderRadius: '5px'}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                required
                                sx={{backgroundColor: 'white', borderRadius: '5px'}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{backgroundColor: '#f20d0d'}}
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    );
};

export default Contact;