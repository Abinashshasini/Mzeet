import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import CallIcon from "@material-ui/icons/Call";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../../styles/images/logo.png";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <Divider />
        <List component='nav' aria-label='main mailbox folders'>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <Typography variant='subtitle1'>Home</Typography>
          </ListItem>
        </List>
        <Divider />
        <List component='nav' aria-label='main mailbox folders'>
          <ListItem button>
            <ListItemIcon>
              <AccountBoxIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <Typography variant='subtitle1'>Your Account</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalMallIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <Typography variant='subtitle1'>Your Order</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ListAltIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <Typography variant='subtitle1'>Your Wish List</Typography>
          </ListItem>
        </List>
        <Divider />
        <List component='nav' aria-label='main mailbox folders'>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <Typography variant='subtitle1'>About US</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LiveHelpIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <Typography variant='subtitle1'>FAQs</Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CallIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <Typography variant='subtitle1'>Support</Typography>
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <AppBar
          position='static'
          color='default'
          iconElementLeft={<img src={logo} alt='Logo' />}
        >
          <Toolbar>
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
            <div style={applogo}>
              <img src={logo} style={applogoImg} />
            </div>
          </Toolbar>
        </AppBar>
      ))}
    </div>
  );
}

const applogo = {
  margin: "auto",
  textAlign: "center",
};
const applogoImg = {
  maxWidth: "50px",
  marginLeft: "-40px",
};
