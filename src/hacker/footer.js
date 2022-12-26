import React from 'react';
import {
    makeStyles,
    Box,
    Grid,
    Typography,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    borderBox: {
        height: 12,
        borderRadius: '50%',
        position: 'relative',
        zIndex: 1,
        background: 'white',
    },
    mainBox: {
        marginTop: -6,
        background: '#FFC700',
        height: 100,
    },
    title: {
        textTransform: 'uppercase',
        fontFamily: 'Fat Frank',
        fontSize: '25px',
    }
}));

export default function Footer() {
    const classes = useStyle();

    return (
        <Box component='div'>
            <Box component='div' className={classes.borderBox} />
            <Grid container className={classes.mainBox} alignItems='center' justifyContent='center'>
                <Typography component='h2' className={classes.title}>HACKERNEWS.</Typography>
            </Grid>
        </Box>
    );
}