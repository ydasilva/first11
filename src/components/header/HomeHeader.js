import React from 'react';

import HeaderTop from './HeaderTop';

import Slideshow from 'react-slidez';

import './HomeHeader.css';

import alvaro from '../../assets/images/alvaro-mendoza-602538-unsplash.jpg';
import aziz from '../../assets/images/aziz-acharki-549137-unsplash.jpg';
import kenny from '../../assets/images/kenny-webster-559402-unsplash.jpg';

// import headers from '../header/headers.css';
// const header = headers.homeHeader;
const header = {
    background: {
    height: "auto",
    backgroundImage: "linear-gradient(to bottom, #039be5, #8651aa)",
    },
    giganticSpaceBar: {
    width: "auto",
    height: "600px",
    },
    appBar: {
    width: "1440px",
    height: "90px",
    margin: "auto",



    shadowTextt: {
    fontFamily: "Montserrat",
    fontSize: "24px",
    fontWeight: "800",
    letterSpacing: "-1.5px",
    margin: "auto",
    color: "#ffffff",
    textShadow: "0 1px 6px rgba(0, 0, 0, 0.5)",
    },
    smallShadowText: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "800",
    letterSpacing: "-1px",
    margin: "auto",
    color: "#ffffff",
    textShadow: "0 1px 6px rgba(0, 0, 0, 0.5)",
    },
    smallText: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "800",
    letterSpacing: "-1px",
    margin: "auto",
    color: "#ffffff",
    }
    },
};

const HomeHeader = () => (
    <div style={header.background}>
        <div className="grid-container">
            <HeaderTop/>

            <div className="grid-x">
                <div className="medium-2"/>
                <div className="small-12 medium-8">
                    <div>
                        <Slideshow
                            id="slidezzz"
                            // showIndex
                            showArrows={false}
                            autoplay
                            enableKeyboard
                            useDotIndex
                            slideInterval={6000}
                            defaultIndex={0}
                            slides={[
                            alvaro,
                            aziz,
                            kenny,
                            ]}
                            effect={'fade'}
                            height={'400px'}
                            width={'65%'}
                        />
                    </div>
                    
                </div>
                <div className="medium-2 show-for-medium"/>
            </div>

            <div style={header.giganticSpaceBar}/>
            
        </div>
        <div style={header.spaceBar}/>


    </div>

);

export default HomeHeader;