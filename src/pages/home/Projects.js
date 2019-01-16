import React, { Component } from 'react';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import { NavLink } from 'reactstrap';
// import ProjectBackground from '../../assets/images/projects/ProjectsBg.png';
import ProjectBackground from '../../assets/images/projects/header-bg.png';
import project1 from '../../assets/images/projects/Project-1.png';
import project2 from '../../assets/images/projects/Project-2.png';
import project3 from '../../assets/images/projects/Project-3.png';

const styles = {
    description: {
        fontWeight: '300',
        height: '50px',
        width: '80%',
        margin: '0 auto'
    },
    navlink: {
        backgroundColor: '#7F0000',
        border: 'solid 2px #FFF',
        boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
        borderRadius: '5px',
        color: '#FFF', width: '60%',
        textAlign: 'center', fontWeight: 'bold',
        margin: '15px auto',
    }
}

class Projects extends Component {
    render() {
        return(
            <div className="text-center">
                {/* <Navbar/> */}
                <div>
                    <div style={{backgroundImage: 'url('+ProjectBackground+')', backgroundSize: 'cover', width :'100%', height: 'auto'}}>
                        {/* <div className="smallSpaceBar"/> */}

                        <div style={{backgroundColor: 'rgba(0,0,0,.65)',}}>
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

                        <div className="smallSpaceBar"/>
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                        <div className="small-12 grid-x" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                            <div className="smallSpaceBar"/>
                            <div className="medium-2 hide-for-small-only"/>
                            <div className="medium-8 small-12 grid-x text-white">
                                <div className="small-12">
                                    <h5 className="text-center" style={{ fontStyle: 'italic' }}>The most simplest way to succeed is believing in yourself . </h5>
                                    <h6 className="text-right">Frank Kweku Hayford</h6>
                                </div>
                            </div>
                            <div className="smallSpaceBar"/>
                        </div>
                    </div>
                </div>

                <div className="grid-container grid-x">
                    <div className="smallSpaceBar"/>
                    <div className="small-12">
                        <h1>Support Our Projects</h1>
                    </div>

                    <div className="spaceBar"/>

                    <div className="small-12 medium-4 grid-x" style={{padding: '5px'}}>
                        <div className="small-12" style={{backgroundColor: '#7F0000', color: 'white'}}>
                            <img src={project1} alt="project1" style={{width: '100%'}}/>

                            <div className="smallSpaceBar"/>

                            <h4 style={{height: '50px'}}>Scouting events</h4>

                            <div className="smallSpaceBar"/>

                            <p style={styles.description}>
                                Join our quarterly talent hunt program
                            </p>

                            <div className="smallSpaceBar"/>

                            <NavLink 
                                style={styles.navlink} 
                                target="_blank" rel="noopener noreferrer"
                                href="https://drive.google.com/file/d/1TPmganhp0iHT0CYr2dQq_xA_B-yB7aFF/view?usp=sharing"
                            >
                                Register
                            </NavLink>
                        </div>
                        <div className="spaceBar"/>
                    </div>

                    <div className="small-12 medium-4 grid-x" style={{padding: '5px'}}>
                        <div className="small-12" style={{backgroundColor: '#7F0000', color: 'white'}}>
                            <img src={project2} alt="project2" style={{width: '100%'}}/>

                            <div className="smallSpaceBar"/>

                            <h4 style={{height: '50px'}}>Build a dream</h4>

                            <div className="smallSpaceBar"/>

                            <p style={styles.description}>
                                Help improve the lives of the foundation kids
                            </p>

                            <div className="smallSpaceBar"/>

                            <NavLink 
                                style={styles.navlink} 
                                href="/Donate"
                            >
                                Support
                            </NavLink>
                        </div>
                        <div className="spaceBar"/>
                    </div>

                    <div className="small-12 medium-4 grid-x" style={{padding: '5px'}}>
                        <div className="small-12" style={{backgroundColor: '#7F0000', color: 'white'}}>
                            <img src={project3} alt="project3" style={{width: '100%'}}/>

                            <div className="smallSpaceBar"/>

                            <h4 style={{height: '50px'}}>Community Give back</h4>

                            <div className="smallSpaceBar"/>

                            <p style={styles.description}>
                                Helping get start up fund for the old needy women in the community
                            </p>

                            <div className="smallSpaceBar"/>

                            <NavLink 
                                style={styles.navlink} 
                                href="/community"
                            >
                                Learn More
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

export default Projects;