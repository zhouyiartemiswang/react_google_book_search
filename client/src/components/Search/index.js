import React, { useState } from 'react';
import API from '../../utils/API';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
    const [bookState, setBookState] = useState([]);
    const [formState, setFormState] = useState({
        query: ""
    });

    function handleInputChange(event) {
        setFormState({ query: event.target.value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();

        API.searchBooks(formState.query)
            .then(res => setBookState(res.data.items))
            .catch(err => console.log(err));
    };

    return (
        <>
            <form onSubmit={handleFormSubmit} className={classes.root}>
                <TextField
                    onChange={handleInputChange}
                    value={formState.query}
                    name="query"
                    id="outlined-basic"
                    label="Search for books"
                    variant="outlined" />
            </form>
            {bookState.map(bookObj =>
                <BookCard
                    key={bookObj._id}
                    title={bookObj.volumeInfo.title}
                    authors={bookObj.volumeInfo.authors}
                    description={bookObj.volumeInfo.description}
                    image={bookObj.volumeInfo.imageLinks.thumbnail}
                    link={bookObj.volumeInfo.selfLink}
                    isSearch={true}
                />)}
        </>
    )
}
