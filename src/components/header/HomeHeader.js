import React from 'react';
import Navbar from './Navbar';
import tournament2 from '../../assets/images/tournament2.png';
// import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap-dropdown-menu';

const header = {
    background: {
    height: "auto",
    // backgroundImage: "linear-gradient(to bottom, #039be5, #8651aa)",
    backgroundImage: "url("+tournament2+")",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat, repeat",
    },
    giganticSpaceBar: {
    width: "auto",
    height: "600px",
    },
};

const HomeHeader = () => (
    <div style={header.background}>
        <div className="grid-containerss">
            <Navbar/>

            <div style={header.giganticSpaceBar}/>
            
        </div>
        <div style={header.spaceBar}/>


    </div>

);

export default HomeHeader;