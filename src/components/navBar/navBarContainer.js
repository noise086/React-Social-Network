import React from 'react';
import { connect } from 'react-redux';
import Nav from './navBar';



let mapStateToProps = (state) => {
    return {
        navBar: state.sideBar
    }
}

const NavBarContainer = connect(mapStateToProps)(Nav);

export default NavBarContainer;