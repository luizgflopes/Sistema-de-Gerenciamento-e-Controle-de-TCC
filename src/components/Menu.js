import React from 'react';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as Icon from '@material-ui/icons';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {MenuDataCurso, MenuDataUser, MenuDataCronograma} from './MenuData';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  profileIcon: {
    marginLeft: theme.spacing(112),
    color: 'white',      
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1
      },
  },
  profileMenu: { 
    overflowX: 'hidden',
    marginLeft: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(12) - 70
      },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(true)
  const [openSchool, setOpenSchool] = React.useState(true)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleUserClose = () => {
    setOpenMenu(!openMenu);
  };
  const handleSchoolClose = () => {
    setOpenSchool(!openSchool);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <Icon.Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            TCC
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <Icon.ChevronRight /> : <Icon.ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={handleUserClose}>
            <ListItemIcon>
              <Icon.Person />
            </ListItemIcon>
            <ListItemText primary="Usuários" />
            {openMenu ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding> 
              {MenuDataUser.map((item, index) => {
                return (
                  <ListItem button key={index} className = {item.cName}>
                    <Link to={item.path}>
                      <ListItemIcon>{item.icon} </ListItemIcon>
                    </Link>
                    <ListItemText primary={item.title} />
                  </ListItem>
                )
              })}
            </List>
          </Collapse>
          <Divider />
          <ListItem button onClick={handleSchoolClose}>
            <ListItemIcon>
              <Icon.LibraryBooks />
            </ListItemIcon>
            <ListItemText primary="Cursos" />
            {openSchool ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSchool} timeout="auto" unmountOnExit>
            <List component="div" disablePadding> 
              {MenuDataCurso.map((item, index) => {
                return (
                  <ListItem button key={index} className = {item.cName}>
                    <Link to={item.path}>
                      <ListItemIcon>{item.icon} </ListItemIcon>
                    </Link>
                    <ListItemText primary={item.title} />
                  </ListItem>
                )
              })}
            </List>
          </Collapse>
          <Divider />
          {MenuDataCronograma.map((item, index) => {
                return (
                  <ListItem button key={index} className = {item.cName}>
                    <Link to={item.path}>
                      <ListItemIcon>{item.icon} </ListItemIcon>
                    </Link>
                    <ListItemText primary={item.title} />
                  </ListItem>
                )
          })}      
        </List>
      </Drawer>
    </div>
  );
}