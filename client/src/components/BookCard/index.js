import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        // maxWidth: 500,
    },
    // image: {
    //     width: 128,
    //     height: 128,
    // },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));


export default function BookCard(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt={props.title} src={props.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {props.title}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Written by {props.authors}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {props.description}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button size="small" color="primary">
                                    <Link href={props.link} >
                                        View
                                    </Link>
                                </Button>
                                {props.isSearch ?
                                    <Button size="small" color="primary">Save</Button> :
                                    <Button size="small" color="primary">Delete</Button>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
