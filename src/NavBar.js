import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Button } from '@material-ui/core';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
    textDecoration: 'none',
    marginRight: '10px',
  },
  buttontext: {
    color: "#ffff",
    display: 'block',
    textDecoration: 'none',
    fontSize: "12px",
  },
  search: {
    position: 'relative',
    flex: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  sectionDesktop: {
    display: 'flex',
  },
  main:{
      display: 'flex',
      justifyContent:'space-between',
      zIndex: 100,
  },
  number: {
      marginLeft: "5px",
      fontSize: "20px",
  }
}));

export default function PrimarySearchAppBar() {
  const [{cart,user}] = useStateValue();
  const isLoggedIn = () => {
    if(user){
      auth.signOut();
    }
  }
  const classes = useStyles();
  const menuId = 'primary-search-account-menu';
  console.log(cart);
  return (
    <div className={classes.main}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{textDecoration: 'none', color: "#ffff"}}>
            <div className={classes.title}>
            <Typography  variant="h6" noWrap>
                E-commerce <br/>
            </Typography>
                Web application 
            </div>
          </Link>
          
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <Link to={!user && "/login"} style={{textDecoration: 'none', color: "#ffff", display:'flex', alignItems:'center'}}>
            <Button onClick={isLoggedIn}>
            <Typography className={classes.buttontext} noWrap>
               { !user ? 'Login' : user.email + ',\nSignOut'}
                </Typography>
            </Button>
            </Link>
            <Link to="/" style={{textDecoration: 'none', color: "#ffff"}}>
            <Button>
            <Typography className={classes.buttontext}  noWrap>
                Returns/ <br/> Orders
            </Typography>
            </Button>
            </Link>
            <Link to="/checkout" style={{color: "#ffff", textDecoration:'none'}}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <LocalMallIcon />
              <span className={classes.number}>{cart?.length}</span>
            </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
