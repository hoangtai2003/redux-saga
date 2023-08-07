import { withStyles } from '@material-ui/styles'
import React, { Component } from 'react'
import styles from './styles'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography  from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Fab, Icon } from '@material-ui/core';
class TaskItem extends Component {
  render() {
    const {classes, task, status} = this.props;
    const {id, title} = task;
    return (
        <Card key={task.id} className={classes.card}>
            <CardContent>
                <Grid container justifyContent="space-between">
                    <Grid item md={8}>
                        <Typography component = "h2"> {title}</Typography>
                    </Grid>
                    <Grid item md={4}>
                        {status.label}
                    </Grid>
                </Grid>
                <p>{task.description}</p>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <Fab color='primary' aria-label='Edit' className={classes.fab} size = "small">
                    <Icon fontSize='small'>
                        edit_icon
                    </Icon>
                </Fab>
                <Fab color='primary' aria-label='Delete' className={classes.fab} size = "small">
                    <Icon fontSize='small'>
                        delete_icon
                    </Icon>
                </Fab>
            </CardActions>
        </Card>
    )
  }
}
export default withStyles(styles)(TaskItem);