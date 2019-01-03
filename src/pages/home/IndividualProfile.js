import React, { Component } from 'react';
import { NavLink } from 'reactstrap';

const styles = {
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


class IndividualProfile extends Component {

    render() {
        const { playerName, playerImg, video, cv } =  this.props;
        return(
                <div className="small-12 medium-4">
                    <div className="small-12 medium-4 grid-x" style={{
                        color: 'black', padding: '25px', margin: '10px', borderRadius: '15px', 
                        backgroundColor: 'white', boxShadow: '5px 5px 5px rgba(0,0,0,0.5)'}}>
                        <div className="small-12">
                            <img src={playerImg} alt={playerImg}/><div className="smallSpaceBar"/>
                            <h5 style={{fontWeight: 800}}>{playerName}</h5>
                            <div className="smallestSpaceBar"/>
                        </div>
                        <div className="small-10 small-offset-1 grid-x">
                            <div className="small-6" style={{padding: '0 5px'}}>
                                <NavLink style={styles.videolink} target={video ? "_blank" : null} href={video ? video : "#video"}>
                                    Watch Video
                                </NavLink>
                            </div>
                            <div className="small-6" style={{padding: '0 5px'}}>
                                <NavLink style={styles.cvlink} target={cv ? "_blank" : null} href={cv ? cv : "#cv"}>
                                    Download CV
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default IndividualProfile;