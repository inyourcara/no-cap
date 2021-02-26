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
        color: 'white',
        height:'70px'
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
                                <IconButton href="LandingTop">
                                    <Badge >
                                    <i class="fas fa-home" ></i>                                  </Badge>
                                </IconButton>
                                <IconButton href="SkillsBox">
                                    <Badge>
                                    <i class="fas fa-toilet-paper" ></i>
                                    </Badge>
                                </IconButton>
                                <IconButton>
                                    <Badge>
                                    <i class="fas fa-hands-helping"></i>                                    </Badge>
                                </IconButton>
                                <IconButton>
                                    <Badge>
                                    <IconButton>
                                    <Badge >
<i class="fas fa-shapes"></i>                                    </Badge>
                                </IconButton>                                    </Badge>
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
