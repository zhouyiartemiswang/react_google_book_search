import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BookCard from '../BookCard';
import './style.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Search() {
    const classes = useStyles();
    return (
        <>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Search for books" variant="outlined" />
                <Button variant="contained">Search</Button>
            </form>
            <BookCard />
        </>
    )
}
