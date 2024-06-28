import { Box, Typography, Grid } from '@mui/material';
const About = () => {
    return (
        <div>
            <Box sx={{ padding: '20px', marginTop: '20px', width: '900px'}}>
                <Grid container spacing={2} sx={{ marginBottom: '40px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Our <span style={{borderBottom: '2px solid #f20d0d',paddingBottom:'3px'}}>Mission</span>
                        </Typography>
                        <Typography variant="body1" sx={{width: '900px'}}>
                            <p>
                                Our mission is to
                                deliver <span className={'shadow'}>high-quality products</span> and <span className={'shadow'}>services</span> that meet and
                                exceed our customers' expectations. We strive to foster <span className={'shadow'}>innovation</span>,
                                embrace <span className={'shadow'}>change</span>, and continuously improve in all aspects of our business.
                                Our commitment is to create <span className={'shadow'}>value</span> for our customers, employees, and
                                community by being a leader in our industry. We believe in maintaining the highest
                                standards of <span className={'shadow'}>integrity</span>, <span className={'shadow'}>transparency</span>,
                                and <span className={'shadow'}>accountability</span>.
                            </p>
                            <p>
                                Our team is dedicated to providing exceptional customer service, ensuring that every
                                interaction with our company is a positive experience. We aim to build lasting
                                relationships based on <span className={'shadow'}>trust</span> and <span className={'shadow'}>mutual respect</span>. Through our
                                efforts, we hope to inspire others to pursue <span className={'shadow'}>excellence</span> and to make a
                                meaningful impact on the world.
                            </p>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Our <span style={{borderBottom: '2px solid #f20d0d',paddingBottom:'3px'}}>History</span>
                        </Typography>
                        <Typography variant="body1" sx={{width: '900px'}}>
                            <p>
                                <span className={'shadow'}>Founded in 2001</span>, our company has grown from a small startup to a major
                                player in the industry. Over the years, we
                                have <span className={'shadow'}>expanded our product line</span> and entered new markets, always staying true
                                to our core values of quality and customer satisfaction. Our journey has been one
                                of <span className={'shadow'}>innovation</span>, <span className={'shadow'}>dedication</span>, and <span className={'shadow'}>hard work</span>.
                            </p>
                            <p>
                                We started with just a handful of employees and a vision to make a difference. Today, we
                                are proud to have a team of over 500 talented professionals who share our passion and
                                drive. We have faced numerous challenges along the way, but each one has strengthened
                                our resolve and helped us grow stronger. Our history is a testament to our resilience
                                and our unwavering commitment to <span className={'shadow'}>excellence</span>.
                            </p>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default About;