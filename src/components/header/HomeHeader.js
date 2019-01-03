import React from 'react';
import Navbar from './Navbar';
import HomeCarousel from '../carousel/HomeCarousel';

const header = {
    background: {
        height: "auto",
        backgroundImage: "linear-gradient(to bottom left, black, #FF0079)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat, repeat",
    },
    giganticSpace: {
        height: '500px',
    }
};

const HomeHeader = () => (
    <div style={header.background}>
        <div className="hidre" style={{zIndex: '999'}}>
            <div className="smallSpaceBar"/>

            <div className="show-for-medium-only">
                <Navbar mode="light"/> 
                {/* <Navbar mode="dark"/>  */}
            </div>

            <div className="hide-for-medium-only">
                <div className="grid-container">
                    <Navbar mode="light"/>
                    {/* <Navbar mode="dark"/>  */}
                </div>
            </div>

        </div>

        <div style={{padding: '0 15%'}} >
            <HomeCarousel />
        </div>

        <div className="grid-container grid-x">
            <div className="medium-2 hide-for-small-only"/>
            <div className="medium-8 small-12 grid-x">
                <div className="small-12 hide">
                    <HomeCarousel />
                </div>
                
                <div className="smallSpaceBar"/>
                <div className="smallSpaceBar"/>

                <div className="small-12 text-white">
                    <h3 className="text-center" style={{ fontStyle: 'italic' }}>Desire cannot be coached. It must come from within.</h3>
                    <h5 className="text-right">Raymond Gulutu</h5>
                </div>
                
            </div>
            <div className="medium-2 hide-for-small-only"/>
        </div>

        <div className="spaceBar"/>
        <div className="spaceBar"/>
        <div className="spaceBar"/>
        
    </div>

);

export default HomeHeader;