import React, { Component } from 'react';
import HomeHeader from '../../components/header/HomeHeader';

class OurPartners extends Component {

    render() {
        return(
            <div>
                <HomeHeader/>
                <div className="grid-container grid-x text-center">
                    <div className="spaceBar"/>
                    <div className="small-12">
                        <h1>OurPartners</h1>
                        <h2><strong><i>BTC Sports Network</i></strong></h2>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default OurPartners;