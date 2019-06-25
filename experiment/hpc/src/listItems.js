import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <NavLink to="/" activeStyle={{ color: 'white' }} style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon color="inherit"/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </NavLink>
    <NavLink to="/" activeStyle={{ color: 'white' }} style={{ textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon color="inherit"/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </NavLink>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Current Job Stats" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader color='inherit' inset>Additional Information</ListSubheader>
    <NavLink to="/hpc2" activeStyle={{ color: 'white' }} style={{ color: 'inherit', textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="HPC2" />
    </ListItem>
    </NavLink>
    
    <NavLink to="/tutorial" activeStyle={{ color: 'white' }} style={{ color: 'inherit', textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Tutorial" />
    </ListItem>
    </NavLink>

    <NavLink to="/resources" activeStyle={{ color: 'white' }} style={{ color: 'inherit', textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Resources" />
    </ListItem>
    </NavLink>

    <NavLink to="/environment" activeStyle={{ color: 'white' }} style={{ color: 'inherit', textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Environment" />
    </ListItem>
    </NavLink>

    <NavLink to="/tensor" activeStyle={{ color: 'white' }} style={{ color: 'inherit', textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Tensor Flow / Keras" />
    </ListItem>
    </NavLink>
  </div>
);