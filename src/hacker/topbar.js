import React, {useState} from 'react';
import {
    makeStyles,
    withStyles,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Grid,
    TextField,
    Menu,
    MenuItem,
} from '@material-ui/core';
import {
} from '@material-ui/icons/Style'
import {
    Menu as MenuIcon,
    SearchOutlined as SearchIcon,
} from '@material-ui/icons';

const SearchField = withStyles({
    root: {
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },

        '& .MuiInput-underline:hover:before': {
            borderBottomColor: '#ddd',
            borderBottomWidth: '1px',
        },

        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        }
    }
})(TextField);

const useStyle = makeStyles((theme) => ({
    root: {
        borderBottomColor: '#D8D8D8',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        paddingBottom: theme.spacing(2),
        background: 'white',
    },
    grow: {
        flexGrow: 1,
    },
    titleToolbar: {
        background: 'white',
    },
    searchToolbar: {
        background: '#FFC700',
    },
    textLight: {
        color: '#FFC700',
        textTransform: 'uppercase',
        fontFamily: 'Fat Frank',
        fontSize: '25px',
    },
    textDark: {
        color: '#222A41',
        textTransform: 'uppercase',
        fontFamily: 'Fat Frank',
        fontSize: '25px',
    },
    menu: {
        color: 'black',
        fontSize: '40px',
    },
    search: {
        fontSize: '36px',
        lineHeight: 1,
    }
}));

export default function Topbar({item, setItem}) {
    const classes = useStyle();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleMenuItem = value  => {
        setItem(value);
        setAnchorEl(null);
    }

    return (
        <AppBar position='relative' className={classes.root} elevation={0}>
            <Toolbar className={classes.titleToolbar}>
                <Typography className={classes.grow}>
                    <Typography component='span' className={classes.textLight}>HACKER</Typography>
                    <Typography component='span' className={classes.textDark}>{item}</Typography>
                    <Typography component='span' className={classes.textLight}>.</Typography>
                </Typography>
                <IconButton aria-label='menu' aria-controls='hacker-menu' aria-haspopup='true' onClick={handleMenu}>
                    <MenuIcon className={classes.menu} />
                </IconButton>
                <Menu
                    id='hacker-menu' 
                    anchorEl={anchorEl} 
                    keepMounted 
                    open={Boolean(anchorEl)} 
                    onClose={handleClose}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                >
                    <MenuItem onClick={() => handleMenuItem('newstories')}>News</MenuItem>
                    <MenuItem onClick={() => handleMenuItem('topstories')}>Tops</MenuItem>
                </Menu>
            </Toolbar>
            <Toolbar className={classes.searchToolbar}>
                <Grid container>
                    <Grid item className={classes.grow}>
                        <SearchField id='search' fullWidth />
                    </Grid>
                    <Grid item>
                        <SearchIcon className={classes.search} />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}