import Reat, { Component } from "react";
import { WithStyles, withStyles } from "@material-ui/styles";
import styles from "./styles";

class Taskboard extends Component {
    render(){
        const {classes} = this.props;
        return( 
            <div className={classes.taskboard}>
                <div className={classes.shape}>tai</div>
                <div className={classes.shape}>tai</div>
                <div className={classes.shape}>tai</div>
            </div>
        )
    }
}
export default withStyles(styles)(Taskboard);