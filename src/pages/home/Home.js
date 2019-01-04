import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import InvolvedOne from '../../assets/images/home/Home-Involved-One.png';
import InvolvedTwo from '../../assets/images/home/Home-Involved-Two.png';
import InvolvedThree from '../../assets/images/home/Home-Involved-Three.png';
import InvolvedFour from '../../assets/images/home/Home-Involved-Four.png';
import InvolvedFive from '../../assets/images/home/Home-Involved-Five.png';
import InvolvedSix from '../../assets/images/home/Home-Involved-Six.png';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            
        }
    }

    render() {
        return (
        <div>
            <div className="grid-container grid-x">
                <div className="smallSpaceBar" />
                <div className="small-12 grid-x">
                    <div className="small-12 medium-8 medium-offset-2 text-center">
                        <p style={{fontSize: '1.2rem', padding: '20px'}}>
                        From my experiences first hand in Ghana, the high level of 
                        footballing potential of players of all ages is without 
                        question very high. However, the frustrations and limitations 
                        that those with elite potential/ability face to further develop 
                        a pathway into professional football in the major footballing 
                        countries throughout the world, and in particular the UK and 
                        mainland Europe, makes it difficult, and for many …
                        </p>
                    </div>
                    <div className="smallSpaceBar" />
                    <div className="small-4 small-offset-4 medium-2 medium-offset-5 text-center">
                        <NavLink 
                            style={{
                                // backgroundColor: '#FF0079',
                                backgroundColor: '#FFF',
                                border: 'solid 2px #FF0079',
                                boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
                                borderRadius: '5px',
                                color: '#FF0079',
                                width: '100%',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                // fontWeight: 'bold',
                            }} 
                            href="/AboutUs"
                        >
                            Read More
                        </NavLink>
                    </div>
                    <div className="spaceBar" />
                    <div className="spaceBar" />
                    <div className="small-12 text-center">
                        <h1>Get Involved</h1>
                    </div>
                    <div className="small-12 grid-x">
                        <div className="small-12 medium-4 grid-x">
                            <div className="small-12">
                                <img style={{padding: '20px'}} src={InvolvedOne} alt="InvolvedOne"/>
                            </div>
                            <div className="small-10 small-offset-1 text-center">
                                <h2 style={{
                                    height: '150px',
                                    width: '80%',
                                    margin: '0 auto'
                                }}>Football Club Partnership Program</h2>
                                <NavLink 
                                    style={{
                                        // backgroundColor: '#FF0079',
                                        backgroundColor: '#FFF',
                                        border: 'solid 2px #262626',
                                        boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
                                        borderRadius: '5px',
                                        color: '#262626',
                                        width: '60%',
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        margin: '15px auto',
                                        // fontWeight: 'bold',
                                    }} 
                                    href="/FootballForm"
                                >
                                    Learn More
                                </NavLink>
                            </div>
                        </div>
                        <div className="small-12 medium-4 grid-x">
                            <div className="small-12">
                                <img style={{padding: '20px'}} src={InvolvedTwo} alt="InvolvedTwo"/>
                            </div>
                            <div className="small-10 small-offset-1 text-center">
                                <h2 style={{
                                    height: '150px',
                                    width: '80%',
                                    margin: '0 auto'
                                }}>Become A Volunteer</h2>
                                <NavLink 
                                    style={{
                                        // backgroundColor: '#FF0079',
                                        backgroundColor: '#FFF',
                                        border: 'solid 2px #262626',
                                        boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
                                        borderRadius: '5px',
                                        color: '#262626',
                                        width: '60%',
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        margin: '15px auto',
                                        // fontWeight: 'bold',
                                    }} 
                                    href="/BecomeAVolunteer"
                                >
                                    Learn More
                                </NavLink>
                            </div>
                        </div>
                        <div className="small-12 medium-4 grid-x">
                            <div className="small-12">
                                <img style={{padding: '20px'}} src={InvolvedThree} alt="InvolvedThree"/>
                            </div>
                            <div className="small-10 small-offset-1 text-center">
                                <h2 style={{
                                    height: '150px',
                                    width: '80%',
                                    margin: '0 auto'
                                }}>Sponsor A Project</h2>
                                <NavLink 
                                    style={{
                                        backgroundColor: '#FFF',
                                        border: 'solid 2px #262626',
                                        boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
                                        borderRadius: '5px',
                                        color: '#262626',
                                        width: '60%',
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        margin: '15px auto',

                                    }} 
                                    href="/SupportForm"
                                >
                                    Learn More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="spaceBar" />
                </div>
            </div>

            <div style={{
                backgroundColor: '#7F0000' //wine background
            }}>
                <div className="spaceBar" />
                <div className="grid-container grid-x">
                    <div className="small-12 grid-x">

                        <div className="small-12 medium-4 grid-x">
                            <div className="small-12">
                                <img style={{padding: '20px'}} src={InvolvedFour} alt="InvolvedFour"/>
                            </div>
                            <div className="small-10 small-offset-1 text-center text-white">
                                <h2>Sponsor A</h2>
                                <h2>Child</h2>
                                <NavLink 
                                    style={{
                                        backgroundColor: '#7F0000',
                                        border: 'solid 2px #FFF',
                                        boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
                                        borderRadius: '5px', margin: '15px auto',
                                        color: '#FFF', width: '60%',
                                        textAlign: 'center', fontWeight: 'bold',
                                    }} 
                                    href="/Donate"
                                >
                                    Learn More
                                </NavLink>
                            </div>
                        </div>
                        <div className="small-12 medium-4 grid-x">
                            <div className="small-12">
                                <img style={{padding: '20px'}} src={InvolvedFive} alt="InvolvedFive"/>
                            </div>
                            <div className="small-10 small-offset-1 text-center text-white">
                                <h2>Student Exchange Program</h2>
                                <NavLink 
                                    style={{
                                        backgroundColor: '#7F0000',
                                        border: 'solid 2px #FFF',
                                        boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
                                        borderRadius: '5px',
                                        color: '#FFF', width: '60%',
                                        textAlign: 'center', fontWeight: 'bold',
                                        margin: '15px auto',
                                    }} 
                                    href="/ExchangeForm"
                                >
                                    Learn More
                                </NavLink>
                            </div>
                        </div>
                        <div className="small-12 medium-4 grid-x">
                            <div className="small-12">
                                <img style={{padding: '20px'}} src={InvolvedSix} alt="InvolvedSix"/>
                            </div>
                            <div className="small-10 small-offset-1 text-center text-white">
                                <h2>Support</h2>
                                <h2>Us</h2>
                                <NavLink 
                                    style={{
                                        backgroundColor: '#7F0000',
                                        border: 'solid 2px #FFF',
                                        boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
                                        borderRadius: '5px',
                                        color: '#FFF', width: '60%',
                                        textAlign: 'center', fontWeight: 'bold',
                                        margin: '15px auto',
                                    }} 
                                    href="/SupportForm"
                                >
                                    Learn More
                                </NavLink>
                            </div>
                        </div>
                        
                    
                    </div>
                </div>
                <div className="spaceBar" />
            </div>
        </div>
        );
    }
}

export default Home;
