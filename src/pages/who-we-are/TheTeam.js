import React, { Component } from 'react';
import HomeHeader from '../../components/header/HomeHeader';
import Mask1 from './../../assets/images/Mask Group 1.png'
import Mask2 from './../../assets/images/Mask Group 2.png'
import Mask3 from './../../assets/images/Mask Group 3.png'
import Mask4 from './../../assets/images/Mask Group 4.png'
import Mask5 from './../../assets/images/Mask Group 5.png'

const styles = {
    teamImgs: {
        padding: "10px"
    }
}

class TheTeam extends Component {

    render() {
        return(
            <div>
                <HomeHeader/>
                <div className="grid-container grid-x text-center">
                    <div className="spaceBar"/>
                    <div className="small-12">
                        <h1>TheTeam</h1>
                    </div>
                    <div className="smallSpaceBar"/>
                    <div className="small-12 grid-x">
                        <div className="medium-1 hide-for-small-only"></div>
                        <div className="medium-2 small-12"><img src={Mask1} style={styles.teamImgs} alt="Mask1"/></div>
                        <div className="medium-2 small-12"><img src={Mask2} style={styles.teamImgs} alt="Mask2"/></div>
                        <div className="medium-2 small-12"><img src={Mask3} style={styles.teamImgs} alt="Mask3"/></div>
                        <div className="medium-2 small-12"><img src={Mask4} style={styles.teamImgs} alt="Mask4"/></div>
                        <div className="medium-2 small-12"><img src={Mask5} style={styles.teamImgs} alt="Mask5"/></div>
                        <div className="medium-1 hide-for-small-only"></div>
                    </div>
                    <div className="small-12 grid-x">
                        <div className="medium-1 hide-for-small-only"></div>
                        <div className="medium-2 small-12">
                            <h5><strong>Frank Kweku Hayford</strong></h5>
                            <h6><i>CEO of BTC Sports Network and founding partner of BTC Sports Foundation</i></h6>
                            <p>An energetic young man who strives to make a difference in the lives of young but needy talents in Africa</p>
                        </div>
                        <div className="medium-2 small-12">
                            <h5><strong>Kingsley Abeyie</strong></h5>
                            <h6><i>Founding partner for the BTC Sports Foundation/NGO</i></h6>
                            <p>~</p>
                        </div>
                        <div className="medium-2 small-12">
                            <h5><strong>Raymond Gulutu</strong></h5>
                            <h6><i>Founder Independant Talent Idenfication (iTi)
Partner / International Relations Manager</i></h6>
                            <p>An English Football Association Advanced Level 4 Qualified Football Psychologist who supports/works with players</p>
                        </div>
                        <div className="medium-2 small-12">
                            <h5><strong>Fred Edem Ajoro</strong></h5>
                            <h6><i>Coordinator for the BTC Sports Foundation</i></h6>
                            <p>Ensures the smooth running of various projects of the Foundation</p>
                        </div>
                        <div className="medium-2 small-12">
                            <h5><strong>Elizabeth Ofosu</strong></h5>
                            <h6><i>Public Relations Officer</i></h6>
                            <p>~</p>
                        </div>
                        <div className="medium-1 hide-for-small-only"></div>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default TheTeam;