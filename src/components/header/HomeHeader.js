import React from 'react';
import HeaderTop from './HeaderTop';
import Menu from './Menu';
import tournament2 from '../../assets/images/tournament2.png';

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
            <Menu/>
            {/* <HeaderTop/> */}

            <div className="grid-x">
                <h1>Dummy Content for now</h1>
            </div>

            <div style={header.giganticSpaceBar}/>
            
        </div>
        <div style={header.spaceBar}/>


    </div>

);

export default HomeHeader;