import React, { Component } from 'react';
import Navbar       from '../../components/header/Navbar';
import Footer       from '../../components/footer/Footer';
import BTC from '../../assets/images/partners/BTC.png';
import RJ from '../../assets/images/partners/RJ-Pro.png';
import El from '../../assets/images/partners/El-Anfitron.png';
import KS from '../../assets/images/partners/KS-Logo.png';
import Silva from '../../assets/images/partners/Silva-fox.png';
import Mega from '../../assets/images/partners/Mega.png';

class OurPartners extends Component {

    render() {
        return(
            <div>
                <div>
                    <div style={{backgroundColor: 'black'}}>
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

                        <div className="smallSpaceBar"/>
                    </div>
                </div>
                
                <div className="grid-container grid-x text-center">
                    <div className="spaceBar"/>
                    <div className="small-12">
                        <h1>Our Partners</h1>

                        <h2 className="hide"><strong><i>BTC Sports Network</i></strong></h2>
                    </div>

                    <div className="small-12 medium-6 medium-offset-3" style={{backgroundColor: 'lightble'}}>
                        <img style={{width: '50%', margin: '0 auto'}} src={BTC} alt="BTC"/>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/btcsportsnetworkgh/">btcsportsnetworkgh</a></h5>
                    </div>

                    <div className="small-12 medium-6 medium-offset-3">
                        <div className="spaceBar"/>
                        <img style={{width: '50%', margin: '0 auto'}} src={RJ} alt="RJ"/>
                        <h5>RJ Pro Management - Certified Sports Managament</h5>
                    </div>

                    <div className="small-12 medium-6 medium-offset-3">
                        <div className="spaceBar"/>
                        <img style={{width: '50%', margin: '0 auto'}} src={KS} alt="KS"/>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kakrastudios/">kakrastudios</a></h5>
                    </div>

                    <div className="small-12 medium-6 medium-offset-3">
                        <div className="spaceBar"/>
                        <img style={{width: '50%', margin: '0 auto'}} src={El} alt="El"/>
                    </div>

                    <div className="small-12 medium-6 medium-offset-3">
                        <div className="spaceBar"/>
                        <img style={{width: '50%', margin: '0 auto'}} src={Silva} alt="Silva"/>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/youdasilva/">@youdasilva</a></h5>
                    </div>
                </div>

                <div style={{
                        backgroundColor: '#7F0000' //wine background
                    }} className="text-center text-white">

                    <div className="grid-container grid-x">
                        <div className="spaceBar"/>
                        <div className="small-12 medium-6 medium-offset-3">
                            <h1>Our Current Sponsors</h1>

                            <img style={{width: '30%', margin: '0 auto'}} src={Mega} alt="Mega"/>

                            <h3><a target="_blank" rel="noopener noreferrer" href="https://www.megaHuset.se">MegaHuset.se</a></h3>
                        </div>
                    </div>

                </div>

                <div className="grid-container grid-x text-center">
                    <div className="small-12"><div className="spaceBar"/></div>
                    <div className="small-12 medium-6 medium-offset-3">
                        <h1>Sponsor an Event</h1>
                    </div>
                    <div className="small-12 medium-4" style={{backgroundColor: 'black', padding: '10px'}}>
                        <a href="#tournament" style={{color: 'white'}}>A football tournament</a>
                    </div>
                    <div className="small-12 medium-4" style={{backgroundColor: 'black', padding: '10px'}}>
                        <a href="#Event" style={{color: 'white'}}>Educational Event</a>
                    </div>
                    <div className="small-12 medium-4" style={{backgroundColor: 'black', padding: '10px'}}>
                        <a href="#Competitions" style={{color: 'white'}}>Inter-schools Competitions</a>
                    </div>
                    <div className="small-12"><div className="smallSpaceBar"/></div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default OurPartners;