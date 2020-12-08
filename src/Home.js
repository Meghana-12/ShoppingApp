import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from './Cards';
import bg from "./bg.jpg" 
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '1.5rem',
    },
    image: {
        width: "100%",
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.row}>
            <Card />
            <Card/>
            <Card/>
            <Card/>
            </div>
            <div className={classes.row}>
            <Card/>
            <Card/>
            </div>
        </div>
    )
}

export default Home
