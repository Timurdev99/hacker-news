import React from 'react';
import {
    makeStyles,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    closeButton: {
        color: 'black',
        background: '#FFC700',
    },
    title: {
        fontWeight: 'bold',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    }
}));

export default function DetailDialog({showDialog, setShowDialog, item}) {
    const classes = useStyles();

    const handleClose = () => {
        setShowDialog(false);
    }

    return (
        <React.Fragment>
            <Dialog 
                fullWidth
                maxWidth='sm'
                onClose={handleClose}
                aria-labelledby='detail-dialog'
                open={showDialog}
            >
                <DialogTitle id='detail-dialog' onClose={handleClose}>
                    Metadata Information
                </DialogTitle>
                <DialogContent dividers>
                    {item.id ? 
                        <div>
                            <Typography component='h5' className={classes.title}>id</Typography>
                            <Typography>{item.id}</Typography>
                        </div> 
                        : ''
                    }
                    {item.deleted ? 
                        <div>
                            <Typography component='h5' className={classes.title}>deleted</Typography>
                            <Typography>{item.deleted}</Typography>
                        </div>
                        : ''
                    }
                    {item.type ? 
                        <div>
                            <Typography component='h5' className={classes.title}>type</Typography>
                            <Typography>{item.type}</Typography>
                        </div>
                        : ''
                    }
                    {item.by ? 
                        <div>
                            <Typography component='h5' className={classes.title}>by</Typography>
                            <Typography>{item.by}</Typography>
                        </div>
                        : ''
                    }
                    {item.time ? 
                        <div>
                            <Typography component='h5' className={classes.title}>time</Typography>
                            <Typography>{item.time}</Typography>
                        </div>
                        : ''
                    }
                    {item.text ? 
                        <div>
                            <Typography component='h5' className={classes.title}>text</Typography>
                            <Typography>{item.text}</Typography>
                        </div>
                        : ''
                    }
                    {item.dead ? 
                        <div>
                            <Typography component='h5' className={classes.title}>dead</Typography>
                            <Typography>{item.dead}</Typography>
                        </div>
                        : ''
                    }
                    {item.parent ? 
                        <div>
                            <Typography component='h5' className={classes.title}>parent</Typography>
                            <Typography>{item.parent}</Typography>
                        </div>
                        : ''
                    }
                    {item.poll ? 
                        <div>
                            <Typography component='h5' className={classes.title}>poll</Typography>
                            <Typography>{item.poll}</Typography>
                        </div>
                        : ''
                    }
                    {item.kids ? 
                        <div>
                            <Typography component='h5' className={classes.title}>kids</Typography>
                            <Typography>{item.kids.map((kid) => <span>{kid} </span>)}</Typography>
                        </div>
                        : ''
                    }
                    {item.url ? 
                        <div>
                            <Typography component='h5' className={classes.title}>url</Typography>
                            <Typography><Link href={item.url} color='primary' target='_blank'>{item.url}</Link></Typography>
                        </div>
                        : ''
                    }
                    {item.score ? 
                        <div>
                            <Typography component='h5' className={classes.title}>score</Typography>
                            <Typography>{item.score}</Typography>
                        </div>
                        : ''
                    }
                    {item.title ? 
                        <div>
                            <Typography component='h5' className={classes.title}>title</Typography>
                            <Typography>{item.title}</Typography>
                        </div>
                        : ''
                    }
                    {item.parts ? 
                        <div>
                            <Typography component='h5' className={classes.title}>parts</Typography>
                            <Typography>{item.parts.map((part) => <span>{part} </span>)}</Typography>
                        </div>
                        : ''
                    }
                    {item.descendants ? 
                        <div>
                            <Typography component='h5' className={classes.title}>descendants</Typography>
                            <Typography>{item.descendants}</Typography>
                        </div>
                        : ''
                    }
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' className={classes.closeButton} onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}