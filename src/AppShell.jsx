import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { MenuList, MenuItem, } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import Build from 'material-ui-icons/Build';
import Contact from 'material-ui-icons/Phone';
import Home from 'material-ui-icons/Home';
import {
    Route, BrowserRouter as Router, NavLink, Redirect, Link
} from 'react-router-dom';
import ListItemSecondaryAction from 'material-ui';
const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class TemporaryDrawer extends React.Component {
    state = {
        left: false,
    };

    toogleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <MenuList>
                    <Link to="/">
                        <MenuItem className={classes.MenuItem}
                            onClick={this.toogleDrawer('left', false)}>
                            <ListItemIcon className={classes.icon}>
                                <Home />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
                        </MenuItem>
                    </Link>
                    <Divider />
                    <Link to="/Contact">
                        <MenuItem className={classes.MenuItem} onClick={this.toogleDrawer('left', false)}>
                            <ListItemIcon className={classes.icon}>
                                <Contact />
                            </ListItemIcon>
                            <ListItemText className={{ primary: classes.primary }} inset primary="Contact" />
                        </MenuItem>
                    </Link>
                    <Divider />
                    <Link to="/About">
                        <MenuItem className={classes.MenuItem} onClick={this.toogleDrawer('left', false)}>
                            <ListItemIcon className={classes.icon}>
                                <Build />
                            </ListItemIcon>
                            <ListItemText className={{ primary: classes.primary }} inset primary="About" />
                        </MenuItem>
                    </Link>
                    <Divider />
                </MenuList>
            </div>
        );
        //////////////////////
        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton onClick={this.toogleDrawer('left', true)} className={classes.menButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" className={classes.flex}>
                                Ai Kotoba
                        </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>

                <Drawer open={this.state.left} onClose={this.toogleDrawer('left', false)}>
                    <div tabIndex={0} role="button" onKeyDown={this.toogleDrawer('left', false)}>
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }

}
TemporaryDrawer.PropTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TemporaryDrawer);