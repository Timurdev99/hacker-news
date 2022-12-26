import React, {useState, useEffect} from 'react';
import {
    makeStyles,
    Box,
    Grid,
    CircularProgress,
} from '@material-ui/core';
import {BottomScrollListener} from 'react-bottom-scroll-listener';
import axios from 'axios';

import Topbar from './topbar';
import HackerCard from './hacker_card';
import DetailDialog from './detail_dialog';
import Footerbar from './footer';

const useStyle = makeStyles((theme) => ({
    root: {
        maxWidth: 450,
        margin: '0 auto',
    },
    load: {
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',

        '& .MuiCircularProgress-root': {
            color: '#FFC700',
        }
    }
}));

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    params: {
        print: 'pretty',
    }
});

export default function HackerContainer() {
    const classes = useStyle();

    const [item, setItem] = useState('newstories');
    const [initialList, setInitialList] = useState([]);
    const [showList, setShowList] = useState([]);
    const [apiEnable, setApiEnable] = useState(false);
    const [listPosition, setListPosition] = useState(0);
    const [showDialog, setShowDialog] = useState(false);
    const [dialogItem, setDialogItem] = useState({});

    const scrollCallback = () => {
        if (apiEnable && (listPosition * 8 < initialList.length)) {
            setApiEnable(false);
            const idList = initialList.filter((id, index) => index >= (listPosition * 8) && index < ((listPosition + 1) * 8));
    
            let promises =  idList.map((id) => {
                return api.get(`/item/${id}.json`)
            });
    
            Promise.all(promises).then(values => {
                setShowList(showList.concat(values.map((value) => value.data)));
                setApiEnable(true);
                setListPosition(listPosition + 1);
            });
        }
    }

    const manageDialog = (item) => {
        setDialogItem(item);
        setShowDialog(true);
    }

    useEffect(() => {
        setInitialList([]);
        setApiEnable(false);
        setListPosition(0);

        api
            .get(`/${item}.json`)
            .then((response) => {
                setInitialList(response.data);
                setApiEnable(true);
            })
            .catch(() => {
                setInitialList([]);
                setApiEnable(true);
            });
    }, [item]);

    useEffect(() => {
        setApiEnable(false);
        const idList = initialList.filter((id, index) => index > -1 && index < 8);

        let promises =  idList.map((id) => {
            return api.get(`/item/${id}.json`)
        });

        Promise.all(promises).then(values => {
            setShowList(values.map((value) => value.data));
            setApiEnable(true);
            setListPosition(1);
        });
    }, [initialList]);

    const loadingData = apiEnable ? '' : <div className={classes.load}><CircularProgress /></div>;

    return (
        <BottomScrollListener onBottom={scrollCallback}>
            <Box component='div' className={classes.root}>
                <Topbar item={item} setItem={setItem} />
                <Grid container>
                    {showList.map((item) => <HackerCard key={item.id} item={item} manageDialog={manageDialog} />)}
                </Grid>
                {loadingData}
                <DetailDialog showDialog={showDialog} setShowDialog={setShowDialog} item={dialogItem} />
                <Footerbar />
            </Box>
        </BottomScrollListener>
    )
}