import React, { Component } from 'react';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import { NavLink } from 'reactstrap';

import ProjectBackground from '../../assets/images/projects/CommuBg.png';
import commu1 from '../../assets/images/projects/Commu-1.png';
import commu2 from '../../assets/images/projects/Commu-2.png';
import commu3 from '../../assets/images/projects/Commu-3.png';

const styles = {
    description: {
        fontWeight: '300',
        height: '50px',
        width: '80%',
        margin: '0 auto'
    },
    navlink: {
        backgroundColor: '#262626',
        border: 'solid 2px #FFF',
        boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
        borderRadius: '5px',
        color: '#FFF', width: '60%',
        textAlign: 'center', fontWeight: 'bold',
        margin: '15px auto',
    }
}

class Community extends Component {
    render() {
        return(
            <div className="text-center">
                {/* <Navbar/> */}
                <div>
                    <div style={{
                        backgroundImage: 'url('+ProjectBackground+')', 
                        backgroundSize: 'cover',
                        width :'100%', 
                        height: 'auto',
                    }}>
                        {/* <div className="smallSpaceBar"/> */}

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
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                    </div>
                </div>

                <div className="grid-container grid-x">
                    <div className="smallSpaceBar"/>
                    <div className="medium-2 hide-for-small-only"/>
                    <div className="small-12 medium-8">
                        <h1>Community Give back</h1>

                        <p>
                            The kids in our Foundation are thought the principal of 
                            giving back to others in need. Each kid create and engage 
                            in termly giveback projects to help their communities. With 
                            the help and support of the administrators, the kids conceive, 
                            design and execute their own initiatives.
                        </p>

                        <div className="spaceBar"/>

                        <h1>Current projects include</h1>
                    </div>

                    {/* <div className="spaceBar"/> */}

                    <div className="small-12 medium-4 grid-x" style={{padding: '5px'}}>
                        <div className="small-12" style={{backgroundColor: '#262626', color: 'white'}}>
                            <img src={commu1} alt="commu1" style={{width: '100%'}}/>

                            <div className="smallSpaceBar"/>

                            <p style={styles.description}>
                                Helping get start up fund for the old needy women in the community
                            </p>

                            <div className="smallSpaceBar"/>

                            <NavLink 
                                style={styles.navlink} 
                                href="#Support"
                            >
                                Support
                            </NavLink>
                        </div>
                        <div className="spaceBar"/>
                    </div>

                    <div className="small-12 medium-4 grid-x" style={{padding: '5px'}}>
                        <div className="small-12" style={{backgroundColor: '#262626', color: 'white'}}>
                            <img src={commu2} alt="commu2" style={{width: '100%'}}/>

                            <div className="smallSpaceBar"/>

                            <p style={styles.description}>
                                Teaching kids about proper sanitation to prevent diseases
                            </p>

                            <div className="smallSpaceBar"/>

                            <NavLink 
                                style={styles.navlink} 
                                href="#Support"
                            >
                                Support
                            </NavLink>
                        </div>
                        <div className="spaceBar"/>
                    </div>

                    <div className="small-12 medium-4 grid-x" style={{padding: '5px'}}>
                        <div className="small-12" style={{backgroundColor: '#262626', color: 'white'}}>
                            <img src={commu3} alt="commu3" style={{width: '100%'}}/>

                            <div className="smallSpaceBar"/>

                            <p style={styles.description}>
                                Providing school meals for the local village school
                            </p>

                            <div className="smallSpaceBar"/>

                            <NavLink 
                                style={styles.navlink} 
                                href="#Support"
                            >
                                Support
                            </NavLink>
                        </div>
                        <div className="spaceBar"/>
                    </div>
                    

                    <div className="smallSpaceBar"/>
                    
                </div>
                
                <Footer/>
            </div>
        )
    }

}

export default Community;