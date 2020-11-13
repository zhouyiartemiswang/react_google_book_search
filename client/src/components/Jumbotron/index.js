import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './style.css';

const useStyles = makeStyles({
    title: {
        fontSize: 40,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Jumbotron() {
    const classes = useStyles();

    return (
        <Card className="jumbotron">
            <CardContent>
                <Typography className={classes.title} color="textPrimary"  gutterBottom>
                    (React) Google Books Search
                </Typography>
                <Typography variant="body1" component="p">
                    Search for and save books of interest
                </Typography>
            </CardContent>
        </Card>
    );
}
