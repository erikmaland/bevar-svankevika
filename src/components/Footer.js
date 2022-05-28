import Container from '@mui/material/Container';
import {Grid, Typography} from "@mui/material";

const Footer = ({
    name,
    address,
    mail,
    orgNr,
}) => {
    return (
        <Container
            maxWidth={false}
            disableGutters={true}
            sx = {{
                backgroundColor: '#FFCCCB',
                color: 'white',
                minHeight: '5em',
                padding: '50px'
            }}
        >
            <Grid
                container
                direction="row"
                sx={{
                    justifyContent: 'center'
                }}
            >
                <Grid
                    item
                    md={2}
                />
                <Grid
                    item
                    md={6}
                >
                    <Grid
                        container
                        direction="row"
                        sx={{

                        }}
                    >
                        <Grid
                            item
                            md={6}
                        >
                            <Typography variant="h6">
                                {name}
                            </Typography>
                            <Typography variant="h6">
                                Org. nr: {orgNr}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            md={6}
                        >
                            <Typography variant="h6">
                                {address}
                            </Typography>
                            <Typography variant="h6">
                                <a href={`mailto:${mail}`} >
                                    Send oss en mail!
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    md={2}
                />
            </Grid>
        </Container>
    )
};

export default Footer;