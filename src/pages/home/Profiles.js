import React, { Component } from 'react';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import { NavLink } from 'reactstrap';
import ProfileBackground from '../../assets/images/profiles/ProfileBg.png';
import player1 from '../../assets/images/profiles/player-1.png';
import player2 from '../../assets/images/profiles/player-2.png';
import player3 from '../../assets/images/profiles/player-3.png';
import player4 from '../../assets/images/profiles/player-4.png';
import player5 from '../../assets/images/profiles/player-5.png';
import player6 from '../../assets/images/profiles/player-6.png';
import player7 from '../../assets/images/profiles/player-7.png';
import player8 from '../../assets/images/profiles/player-8.png';
import player9 from '../../assets/images/profiles/player-9.png';
import female from '../../assets/images/profiles/female.png';
import IndividualProfile from './IndividualProfile';

const styles = {
    discoverBackground: {
        height: "auto",
        backgroundImage: "linear-gradient(to bottom, #7F0000, #F89D1B)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat, repeat",
        color: "white",
    },
    videolink: {
        backgroundColor: '#7F0000',
        fontSize: '9px',
        // border: 'solid 2px #FFF',
        boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
        borderRadius: '5px',
        color: '#FFF', 
        // width: '60%',
        textAlign: 'center', fontWeight: 'bold',
        // margin: '15px auto',
    },
    cvlink: {
        backgroundColor: '#F89D1B',
        fontSize: '9px',
        // border: 'solid 2px #FFF',
        boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
        borderRadius: '5px',
        color: '#FFF', 
        // width: '60%',
        textAlign: 'center', fontWeight: 'bold',
        // margin: '15px auto',
    }
}


class Profiles extends Component {

    render() {
        return(
            <div className="text-center">
                {/* <Navbar/> */}
                <div>
                    <div style={{
                        backgroundImage: 'url('+ProfileBackground+')', 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width :'100%', 
                        height: 'auto',
                    }}>
                        {/* <div className="smallSpaceBar"/> */}

                        <div style={{backgroundColor: 'rgba(0,0,0,.5)',}}>
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
                        <div className="spaceBar"/>
                        <div className="spaceBar"/>
                    </div>
                </div>

                <div style={styles.discoverBackground}>

                    <div className="spaceBar"/>
                    <div className="grid-container grid-x text-center">
                        <div className="small-12"><h1>Discover Talent</h1></div>
                        <div className="smallSpaceBar"/>

                        <IndividualProfile playerName="Ransford Gyan" playerImg={player1} 
                                            video="https://youtu.be/SydT3WCKp9k"
                                            cv="https://drive.google.com/file/d/1nsgz2hYymWz0Jy5cgfsuNsp67eUQqhI7/view?usp=sharing"/>
                        <IndividualProfile playerName="Solomon Awuti" playerImg={player2}/>
                        <IndividualProfile playerName="Dabie Clinton" playerImg={player3}/>

                        <IndividualProfile playerName="Felix Cobbina" playerImg={player4}/>
                        <IndividualProfile playerName="Desmond Oteng-Kumi" playerImg={player5}/>
                        <IndividualProfile playerName="Ankamah Yeboah Richmond" playerImg={player6}/>

                        <IndividualProfile playerName="Appiah Vincent" playerImg={player7}/>
                        <IndividualProfile playerName="Bismark Amponsah" playerImg={player8}/>
                        <IndividualProfile playerName="Emmanuel Yirimaloh" playerImg={player9}/>

                        <div className="small-12 medium-4 grid-x hide" style={{
                            color: 'black', padding: '25px',
                            margin: '10px', borderRadius: '15px', 
                            backgroundColor: 'white', boxShadow: '5px 5px 5px rgba(0,0,0,0.5)'}}>
                            <div className="small-12">
                                <img src={player2} alt="player2"/><div className="smallSpaceBar"/>
                                <h5 style={{fontWeight: 800}}>Solomon Awuti</h5>
                                <div className="smallestSpaceBar"/>
                            </div>
                            <div className="small-10 small-offset-1 grid-x">
                                <div className="small-6" style={{padding: '0 5px'}}>
                                    <NavLink style={styles.videolink} href="#video">
                                        Watch Video
                                    </NavLink>
                                </div>
                                <div className="small-6" style={{padding: '0 5px'}}>
                                    <NavLink style={styles.cvlink} href="#cv">
                                        Download CV
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="spaceBar"/>

                </div>

                <div className="grid-container">
                    <div className="spaceBar"/>
                    <h1>Meet our All Female Team</h1>
                    <img src={female} alt="female"/>
                    <div className="spaceBar"/>
                </div>
                
                <Footer/>
            </div>
        )
    }

}

export default Profiles;