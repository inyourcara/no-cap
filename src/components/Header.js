import React from 'react';
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import EventNoteIcon from '@material-ui/icons/EventNote';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import Slide from '../components/Slide';
import { positions } from '@material-ui/system';

const useStyles = makeStyles({
    root : {
        backgroundColor: '#FFF'
    }   
})

export default function Header() {
    const classes = useStyles();
    return (
            <AppBar position="fixed" FormatAlignRight className ={classes.root}>
                
                    <Toolbar>
                        <Grid container>
                            <Grid item >
                                <InputBase />
                            </Grid>
                            <Grid item ></Grid>
                            <Grid item>
                                <IconButton>
                                    <Badge badgeContent={4} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton>
                                    <Badge badgeContent={3} color="secondary">
                                        <MessageIcon/>
                                    </Badge>
                                </IconButton>
                                <IconButton>
                                    <Badge badgeContent={2} color="secondary">
                                        <EventNoteIcon/>
                                    </Badge>
                                </IconButton>
                            </Grid>
                        </Grid>
                        <IconButton>
                        <Slide badgeContent={1}/>
<WebAssetIcon/>
                        </IconButton>
                </Toolbar>
             
            </AppBar>
    )
}
