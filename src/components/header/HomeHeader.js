import React from 'react';
import HeaderTop from './HeaderTop';
import Menu from './Menu';
import tournament2 from '../../assets/images/tournament2.png';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap-dropdown-menu';

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
        <div className="grid-container">
            {/* <Menu/> */}
            {/* <HeaderTop/> */}

            

            <div className="grid-x">
                <h1>Dummy Content for now</h1>
                <ButtonToolbar>
                <DropdownButton
                    bsStyle="default"
                    title="No caret"
                    noCaret
                    id="dropdown-no-caret"
                >
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
            </div>

            <div style={header.giganticSpaceBar}/>
            
        </div>
        <div style={header.spaceBar}/>


    </div>

);

export default HomeHeader;