import React, { Component } from 'react';
import Footer from '../../components/footer/Footer';
import dribble from '../../assets/images/football/Dribble.png';
import FootballHeader from '../../components/header/FootballHeader';

class Football extends Component {

    render() {
        return(
            <div>
                <FootballHeader/>
                <div className="grid-container grid-x text-center">
                    <div className="spaceBar"/>
                    <div className="small-12 medium-8 medium-offset-2">
                        <h1>Football</h1>
                        <p>
                            Our talent identification process should start 
                            with players between the ages of 9- 14 years, 
                            since at the time the minds and characters of 
                            the kids are ripe for molding and it will be 
                            easy to instill the disciplines and values of 
                            the foundation in them.  
                        </p>
                        <div className="smallSpaceBar"/>
                        <img style={{width: '40%', margin: '0 auto'}} src={dribble} alt="dribble"/>
                        <div className="smallSpaceBar"/>
                        <h1>Development contracts for randomly scouted players</h1>
                        <p>
                            The foundation aims to organize random scouting 
                            events for other talents outside the foundation, 
                            within the ages of 16 – 21 years. Selected players 
                            will be promoted to clubs in Europe to secure them 
                            development contracts with football clubs. These are 
                            contracts that are given o players who do not have 
                            experience with higher level football on the 
                            international scene, by the owners of the various 
                            international clubs. The contracts are to stipulate 
                            the provision of training for the players to develop 
                            their tactical, technical and social skills in the 
                            football scene. The players are then signed into the 
                            big clubs immediately after excelling during their 
                            contract duration. 
                        </p>
                    </div>
                    <div className="spaceBar"/>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Football;