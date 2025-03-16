import { Button, Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Avatar from "../../../../assets/images/PedroAvatar.jpeg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100h"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "40%"
    }))

    return (
        <>
            <StyledHero>
                <Container>
                    <Grid container spacing={2}>
                        <Grid size={4}>
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid size={8}>
                            <Typography variant="h1" color="primary" textAlign="center">Pedro Cecilio</Typography>
                            <Typography variant="h2" color="primary" textAlign="center">Sou Desenvolvedor de Sistemas</Typography>
                            <Button>
                                <DownloadIcon />Download Cv</Button>
                            <Button>
                                <MailOutlineIcon />Contate-me</Button>
                        </Grid>
                    </Grid>
                </Container>


            </StyledHero>
        </>
    )
}

export default Hero