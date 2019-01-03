import React, { Component } from 'react';
import Navbar       from '../../components/header/Navbar';
import Footer       from '../../components/footer/Footer';
import TeamCarousel from '../../components/carousel/TeamCarousel';
import LogoText     from '../../assets/images/team/Logo-Just-Text.png';
import TeamOne      from '../../assets/images/team/Team-1.png';
import TeamTwo      from '../../assets/images/team/Team-2.png';
import TeamThree    from '../../assets/images/team/Team-3.png';
import TeamFour     from '../../assets/images/team/Team-4.png';
import TeamFive     from '../../assets/images/team/Team-5.png';
import TeamSix      from '../../assets/images/team/Team-6.png';

const styles = {

    gradientBackground: {
        height: "auto",
        backgroundImage: "linear-gradient(to bottom, #F89D1B, #7D0102)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat, repeat",
    },
    teamImage: {
        padding: '10px',
    },
    teamName: {
        fontWeight: 'bold',
        fontSize: '14px',
        margin: '0px'
    },
    teamDesc: {
        fontSize: '16px',
        fontWeight: '300',
        
    }
}

class TheTeam extends Component {

    render() {
        return(
            <div>
                <div style={styles.gradientBackground}>
                    <div>
                        <div className="smallSpaceBar"/>

                        <div className="show-for-medium-only">
                            {/* <Navbar mode="light"/>  */}
                            <Navbar mode="dark"/> 
                        </div>

                        <div className="hide-for-medium-only">
                            <div className="grid-container">
                                {/* <Navbar mode="light"/> */}
                                <Navbar mode="dark"/> 
                            </div>
                        </div>

                        <div className="smallSpaceBar"/>
                    </div>

                    <div className="grid-container grid-x">
                        <div className="medium-2 hide-for-small-only"/>
                        <div className="medium-8 small-12 grid-x">
                            <div className="small-12">
                                <TeamCarousel />
                            </div>
                            
                            <div className="spaceBar"/>
                            <div className="spaceBar"/>
                            
                        </div>
                        <div className="medium-2 hide-for-small-only"/>
                    </div>

                </div>

                <div className="grid-container grid-x text-center">
                    <div className="spaceBar"/>
                    <div className="small-10 small-offset-1 medium-8 medium-offset-2 grid-x">
                        <div className="small-8 small-offset-2">
                            <img src={LogoText} alt="LogoText"/>
                        </div>

                        <div className="spaceBar"/>

                        <div className="small-12 medium-6 large-4">
                            <img style={styles.teamImage} src={TeamOne} alt="TeamOne"/>
                            <p style={styles.teamName}>Frank Kweku Hayford</p>
                            <p style={styles.teamDesc}>President</p>
                        </div>
                        <div className="small-12 medium-6 large-4 text-center">
                            <img style={styles.teamImage} src={TeamTwo} alt="TeamTwo"/>
                            <p style={styles.teamName}>Kingsley Abeyie</p>
                            <p style={styles.teamDesc}>Director</p>
                        </div>
                        <div className="small-12 medium-6 large-4">
                            <img style={styles.teamImage} src={TeamThree} alt="TeamThree"/>
                            <p style={styles.teamName}>Raymond Gulutu</p>
                            <p style={styles.teamDesc}>Int. Sports/Education Director</p>
                        </div>
                        <div className="small-12 medium-6 large-4">
                            <img style={styles.teamImage} src={TeamFour} alt="TeamFour"/>
                            <p style={styles.teamName}>Fred Edem Ajoro</p>
                            <p style={styles.teamDesc}>Coordinator</p>
                        </div>
                        <div className="small-12 medium-6 large-4">
                            <img style={styles.teamImage} src={TeamFive} alt="TeamFive"/>
                            <p style={styles.teamName}>Elizabeth Ofosu</p>
                            <p style={styles.teamDesc}>Public Relations Officer</p>
                        </div>
                        <div className="small-12 medium-6 large-4">
                            <img style={styles.teamImage} src={TeamSix} alt="TeamSix"/>
                            <p style={styles.teamName}>Thomas Oduro Ntim</p>
                            <p style={styles.teamDesc}>Operations Manager</p>
                        </div>


                        <div className="small-12">
                            <div className="smallSpaceBar"/>
                            <div className="spaceBar" style={{borderTop: 'solid 1px rgba(0, 0, 0, 0.3)'}}/>
                        </div>


                        <div className="small-8 small-offset-2">
                            <img  style={{width: '100%'}} src={TeamOne} alt="TeamOne"/>
                            <div className="smallSpaceBar"/>
                            <p style={styles.teamName}>Frank Kweku Hayford</p>
                            <p style={styles.teamDesc}>President</p>
                            <p>
                                An energetic young man who strives to make a 
                                difference in the lives of young but needy 
                                talents in Africa.
                            </p>
                            <div className="spaceBar"/>
                        </div>

                        <div className="small-8 small-offset-2">
                            <img  style={{width: '100%'}} src={TeamTwo} alt="TeamTwo"/>
                            <div className="smallSpaceBar"/>
                            <p style={styles.teamName}>Kingsley Abeyie</p>
                            <p style={styles.teamDesc}>Director</p>
                            <p>
                                Lorem Ipsum...
                            </p>
                            <div className="spaceBar"/>
                        </div>

                        <div className="small-8 small-offset-2">
                            <img  style={{width: '100%'}} src={TeamThree} alt="TeamThree"/>
                            <div className="smallSpaceBar"/>
                            <p style={styles.teamName}>Raymond Gulutu</p>
                            <p style={styles.teamDesc}>Int. Sports/Education Director</p>
                            <p>
                                Lorem Ipsum...
                            </p>
                            <div className="spaceBar"/>
                        </div>

                        <div className="small-8 small-offset-2">
                            <img  style={{width: '100%'}} src={TeamFour} alt="TeamFour"/>
                            <div className="smallSpaceBar"/>
                            <p style={styles.teamName}>Fred Edem Ajoro</p>
                            <p style={styles.teamDesc}>Coordinator</p>
                            <p>
                                Lorem Ipsum...
                            </p>
                            <div className="spaceBar"/>
                        </div>
                        
                        <div className="small-8 small-offset-2">
                            <img  style={{width: '100%'}} src={TeamFive} alt="TeamFive"/>
                            <div className="smallSpaceBar"/>
                            <p style={styles.teamName}>Elizabeth Ofosu</p>
                            <p style={styles.teamDesc}>Public Relations Officer</p>
                            <p>
                                Elizabeth Owusua Ofosu is a Master’s graduate in Development 
                                Management from the University of Birmingham, UK. She has 8 years 
                                cumulative administrative experience, with experience in 
                                disseminating information and effective communication. 
                                She is currently an assistant manager at the Forestry 
                                commission as well as the CEO of El Anfitrion. She is a 
                                lively individual with very strict work ethics and who 
                                follows a project through to the end.
                            </p>
                            <div className="spaceBar"/>
                        </div>

                        <div className="small-8 small-offset-2">
                            <img  style={{width: '100%'}} src={TeamSix} alt="TeamSix"/>
                            <div className="smallSpaceBar"/>
                            <p style={styles.teamName}>Thomas Oduro Ntim</p>
                            <p style={styles.teamDesc}>Operations Manager</p>
                            <p>
                                Lorem Ipsum...
                            </p>
                            <div className="spaceBar"/>
                        </div>
                    </div>

                    
                    
                    <div className="spaceBar"/>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default TheTeam;