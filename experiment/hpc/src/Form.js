import React, { Component } from 'react';
import JsonParse from "./JsonParse";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import DropDown from './DropDown';
import Select from 'react-select';

const styles = theme => ({
    main: {
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });

  const options = [
    { value: 'priority', label: 'priority' },
    { value: 'command', label: 'command' },
    { value: 'nodes', label: 'nodes' }
    ];

    
    class Form extends Component {
        constructor(props){
            super(props);

            this.state = {
                value: '',
                isClicked: false
              };

              
            
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({value: event.target.value});
          }

        handleSubmit(event) {
            this.setState({ isClicked: true });
            event.preventDefault();
          }

        resetButton(){
            this.setState({isClicked: false});
        }  


        renderJson(){
        console.log(this.state.isClicked)
        if(this.state.isClicked===true){
        return(
            <JsonParse dataValue={this.state.value}/>
        );}
        }      

    render() {
        const { classes } = this.props;
        const {thing} = this.props;

        Form.propTypes = {
            classes: PropTypes.object.isRequired,
          };
      return (
        <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Job stats
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <FormControl margin="normal" fullWidth>
            <Select
		          value={thing}
		          onChange={this.handleChange}
		          options={options}
		        />
          </FormControl> 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
            
        </form>
        {this.renderJson()}
      </Paper>
      <Paper className={classes.form}>
      <DropDown/>
      </Paper>
      
    </main>
      );
    }
}

  export default withStyles(styles)(Form);
