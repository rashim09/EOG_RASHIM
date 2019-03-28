import React, {Component} from 'react';
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Card from "@material-ui/core/Card";
import CardHeaderRaw from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";


const cardStyles = theme => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = {
  card: {
    margin: "5% 25%"
  }
};
  

class Dashboard extends Component{
    state={
        now:new Date().toLocaleString()
    }
    
    componentDidMount() {
      const self = this;
      self.interval = setInterval(() => {
        this.props.onload();
      }, 4000);
      this.setState({now:new Date().toLocaleString()}); 
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){
        return(
                <Card style={styles.card}>
                <CardHeader />
                <CardContent>
                  <List>
                    <ListItem>   
                    <ListItemText primary="Temperature" />
                      <ListItemText primary={this.props.metric}/>
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Latitude" />
                      <ListItemText primary={this.props.latitude}/>
                    </ListItem>
                    <ListItem>
             
                      <ListItemText primary="Longitude" />
                      <ListItemText primary={this.props.longitude}/>
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Timestamp" />
                      <ListItemText primary={this.state.now}/>
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
        );
    }
}

const mapState = (state, ownProps) => {
    const {
      loading,
      name,
      weather_state_name,
      temperatureinFahrenheit,
      latitude,
      longitude,
      timestamp,
      metric
    } = state.weather;
    return {
      loading,
      name,
      weather_state_name,
      temperatureinFahrenheit,
      latitude,
      longitude,
      timestamp,
      metric,
    };
  };
  
  const mapDispatch = dispatch => ({
    onload:()=>
    dispatch({
      type: actions.FETCHDRONE_WEATHER,
    })
  });
  
  export default connect(
    mapState,
    mapDispatch
  )(withStyles(styles)(Dashboard));
  

