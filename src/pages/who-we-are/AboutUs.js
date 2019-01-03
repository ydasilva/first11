import React, { Component } from 'react';
// import ReactPlayer from 'react-player';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
// import AboutVid from '../../assets/video/About Us - video 1.mp4';
import WordFromRaymond from '../../assets/images/about/Word-from-Raymond.png';
import Waves from '../../components/waves/Waves';
import YoutubeEmbedVideo from "youtube-embed-video";

const styles = {
    gradientBackground: {
        height: "auto",
        backgroundImage: "linear-gradient(to bottom left, black, #FF0079)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat, repeat",
    },
};

class AboutUs extends Component {

    render() {


        return(
            <div>
                <div style={{
                    backgroundColor: '#262626', //charcoal background
                    color: 'white'}}>
                    <div>
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

                    <div className="grid-x">
                        <div className="small-12 hide-for-small-only" style={{margin: '0 auto', display: 'block'}}>
                            {/* <ReactPlayer url={AboutVid} width='100%' playing /> */}
                            <center><YoutubeEmbedVideo width='750' videoId="SydT3WCKp9k" suggestions={false} /></center>
                        </div>
                        <div className="small-12 show-for-small-only" style={{margin: '0 auto', display: 'block'}}>

                            <center><YoutubeEmbedVideo width='300' videoId="SydT3WCKp9k" suggestions={false} /></center>
                        </div>
                    </div>
                    <div className="spaceBar"/>
                    <div className="smallSpaceBar"/>
                    <div className="smallSpaceBar"/>
                </div>

                <Waves/>
                
                <div> 
                    <div className="spaceBar"/>
                    <div className="text-center grid-container grid-x">
                        <div className="small-12 medium-8 medium-offset-2">
                            <h2>Our Mission</h2>
                            <p>
                                To provide life changing opportunities to excellent but needy young athletes; 
                                inspiring them to become next generational leaders and inspiring change as part
                                of a global movement that shares remarkable stories of human endeavour. 
                            </p>
                            <p>
                                Our Football & Education programme guides talented young footballers on 
                                their journey as student athletes, as they prepare for a future in football and beyond. 
                                Aimed at students aged 10-18, the programme provides academic support for pupils 
                                whilst training like professional footballers every day.
                            </p>
                            <p>
                                The programme challenges young athletes through competitions in the local divisional 
                                League. The programme is crucial in helping pupils achieve their college scholarship, 
                                semi-professional and professional football aspirations. We aim to help participants 
                                achieved a positive exit route; moving on to university, work, or apprenticeships.
                            </p>
                        </div>
                    </div>
                    <div className="spaceBar"/>
                </div>

                <div style={{
                    backgroundColor: '#7F0000' //wine background
                }} className="text-center text-white grid-x">
                    <div className="spaceBar"/>
                    <div className="small-12 medium-8 medium-offset-2">
                        <h2>Our Approach</h2>
                        <p>
                            To identify talented children and provide them with a transformational foundation. 
                            Through Football, Education and Character Development, we open opportunities to 
                            world class professional pathways; enabling young people to change their reality, 
                            become impactful leaders and give back to their communities. 
                        </p>
                    </div>
                    <div className="spaceBar"/>
                </div>

                <div className="text-center grid-container grid-x">
                    <div className="spaceBar"/>
                    <div className="small-12 medium-8 medium-offset-2">
                    
                        <h2>Our Values</h2>
                        <p>
                            These are key traits that we seek to instill in all of our students, players, 
                            staff and alumni to create a shared sense of values. The foundation operates 
                            with the core values of integrity, honor, discipline and respect, which is 
                            instilled in every player from the very beginning.
                        </p>
                        <p>
                            Pathways Sports Foundation Africa (PSFA), our objective is to 
                            develop high-performance athletes, capable of building a successful career 
                            as professional footballers at an elite level. With a focus on education and 
                            developing one's character, our graduates can also become influential role 
                            models who will use their profile as players to inspire, create and lead 
                            positive change in the world.
                        </p>
                        <p>
                            With an extensive player development system, Pathways Sports Foundation Africa 
                            (PSFA) is building a model not seen before by the football world. By exposing 
                            young athletes to various cultures and through our student exchange programme 
                            we motivate young athletes to greater heights. 
                        </p>

                    </div>
                    <div className="spaceBar"/>
                </div>

                <div className="text-center text-white" style={styles.gradientBackground}>
                    <div className="spaceBar"/>
                    <div className="grid-container grid-x">
                        
                        <div className="small-12 medium-8 medium-offset-2 grid-x" style={{fontSize: '1.2rem'}}>
                            <div className="small-12">
                                <h1>A Word From Raymond Gulutu</h1>
                            </div>

                            <div className="smallSpaceBar"/>

                            <div className="large-4 medium-12">
                                <img style={{display: 'inline-block', padding: '10px'}} src={WordFromRaymond} alt="WordFromRaymond"/>
                            </div>
                            <div className="large-8 medium-12">
                                <p>
                                    From my experiences first hand in Ghana, the high level of footballing potential 
                                    of players of all ages is without question very high. However, sadly the frustrations 
                                    and limitations for those with elite potential/ability face to further develop a 
                                    pathway into professional football in the major footballing countries throughout the 
                                    world, and in particular the UK and mainland Europe, which currently is a difficult 
                                    and for the many unattainable.
                                </p>
                            </div>

                            <div className="small-12">
                                
                                <p>
                                    It cannot be ignored particularly the difficulties adult players have to overcome to 
                                    achieve an opportunity to play professional football in Europe, be it financial, 
                                    logistical, visa/work permit authorization. Sadly as result many talented players 
                                    will not achieve both their dream and potential.
                                </p>
                                <p>
                                    I am committed to helping create a supported and managed pathway for those 
                                    talented footballers to play at the highest level and in best clubs - leagues 
                                    there ability can allow.
                                </p>
                                <p>
                                    I believe that a key way to combat these difficulties is to create strong 
                                    long term relationships with professional clubs that includes early talent 
                                    identification, education support, and welfare support at source, that being 
                                    in Ghana with a particular focus being those younger players aged from 7-14 
                                    whereby they are supported with a view to attending the partnered club academy 
                                    at frequent times for both the experience and development monitoring and then 
                                    when the player is of an age if he has continued to develop at the required 
                                    level, relocate to the place of that club and one hopes embark on the next 
                                    phase of the development that being to obtain a scholarship.
                                </p>
                                <p>
                                    It is my aim in partnership with The Pathways Sports Foundation Africa (PSFA) 
                                    to help build strong pathways for these bridges to be crossed and provide 
                                    talented players with a structured and supportive opportunity.
                                </p>
                                <h6><strong><i>Raymond Gulutu</i></strong></h6>
                                {/* <h6>The Team</h6> */}
                            </div>
                        </div>
                    <div className="spaceBar"/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default AboutUs;