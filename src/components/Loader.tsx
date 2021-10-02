import {Box, Container, Grid, Typography } from '@material-ui/core';
import React from 'react'

export const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box>
                        <div className="lds-hourglass"></div>
                        <Typography variant={'h5'}>loading...</Typography>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    )
};

export default Loader;