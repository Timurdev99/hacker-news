import React from 'react';
import {
    makeStyles,
    Box,
    Card,
    CardActionArea,
    CardContent,
    Grid,
    Typography,
    Avatar,
} from '@material-ui/core';
import {
    Add as AddIcon,
} from '@material-ui/icons';
import Parse from 'html-react-parser';

const useStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        width: '100%',
        boxSizing: 'border-box',
    },
    cardWrap: {
        position: 'relative',
        overflow: 'visible',
    },
    avatarButton: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        margin: '0 auto',
        transform: 'translateY(50%)',
        zIndex: 1,
        background: '#FFC700',
        width: 26,
        height: 26,
    },
    addIcon: {
        color: 'black',
    },
    title: {
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: theme.spacing(2),
        overflowWrap: 'break-word',
    },
    text: {
        overflowWrap: 'break-word',
    },
}))

export default function HackerCard({item, manageDialog}) {
    const classes = useStyle();

    return (
        <Box compoent='div' className={classes.root}>
            <Card elevation={5} className={classes.cardWrap}>
                <CardActionArea onClick={() => {manageDialog(item)}}>
                    <Grid container>
                        <Grid item xs={12} >
                            <CardContent>
                                <Typography component='h5' className={classes.title}>
                                    {item.title ? Parse(item.title) : 'No Title'}
                                </Typography>
                                <Typography className={classes.text}>
                                    {item.text ? Parse(item.text) : 'No Text'}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                    <Avatar className={classes.avatarButton} aria-label='add'>
                        <AddIcon className={classes.addIcon} />
                    </Avatar>
                </CardActionArea>
            </Card>
        </Box>
    );
}