import React, { Component } from 'react';
import Navbar       from '../../components/header/Navbar';
import Footer       from '../../components/footer/Footer';
import ProfileBackground from '../../assets/images/profiles/ProfileBg.png';

class ContactUs extends Component {

    render() {
        return(
            <div>
                <div>
                    <div style={{
                        backgroundImage: 'url('+ProfileBackground+')', 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width :'100%', 
                        height: 'auto',
                    }}>
                        {/* <div className="smallSpaceBar"/> */}

                        <div style={{backgroundColor: 'rgba(0,0,0,.75)',}}>
                            <div className="smallestSpaceBar"/>

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

                            {/* <div className="smallestSpaceBar"/> */}
                        </div>

                        <div style={{backgroundColor: 'rgba(0,0,0,.5)'}} className="smallSpaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.5)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.5)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.5)', color: 'white', textAlign: 'center'}} className="spaceBar">
                            <h1>Contact Us</h1>
                            <h4>We are happy to answer any questions you have!</h4>
                        </div>
                        <div style={{backgroundColor: 'rgba(0,0,0,.5)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.5)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.5)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.5)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.5)'}} className="spaceBar"/>
                        
                    </div>
                </div>
                
                <div className="grid-container grid-x text-center">
                    <div className="spaceBar"/>
                    <div className="medium-2 hide-for-small-only"/>
                    <div className="small-12 medium-8">
                        <iframe title="ContactUs" src="https://docs.google.com/forms/d/e/1FAIpQLSeHTBFZ4aGX64rFf7LkEmVWCBJMtVxFz-FK5blXk0wHOaXbkg/viewform?embedded=true" width="640" height="1055" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default ContactUs;