import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
// import Facebook from '../../assets/images/icons/Footer-Icon-Facebook.png';
// import Instagram from '../../assets/images/icons/Footer-Icon-Insta.png';
// import Location from '../../assets/images/icons/Footer-Icon-Location.png';
// import Mail from '../../assets/images/icons/Footer-Icon-Mail.png';
// import Phone from '../../assets/images/icons/Footer-Icon-Phone.png';

class Footer extends Component {
    render() {
        return(
            <div style={{backgroundColor: '#262626',}}>
                <div className="smallSpaceBar" />
                <div className='grid-container grid-x'>
                    <div className="small-12 grid-x">
                        <div className="small-4 small-offset-4 medium-4 medium-offset-4 text-center">
                            <NavLink style={{
                                backgroundColor: '#FF0079',
                                boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
                                borderRadius: '5px', color: 'white',
                                textAlign: 'center', fontWeight: 'bold'
                                }} href='/Donate'>Support</NavLink>
                        </div>
                    </div>

                    <div className="smallSpaceBar" />
                    {/* <div className="smallestSpaceBar" /> */}

                    <div className="small-12 medium-4 grid-x text-white text-center">
                        <div className="small-12">
                            <p>
                                <i style={{fontSize: '25px', padding: '10px'}} class="fas fa-envelope"></i>
                                <span style={{}}>psfoundationafrica@gmail.com</span>
                            </p>
                        </div>
                        <div className="small-12">
                            <p>
                                <i style={{fontSize: '25px', padding: '10px'}} class="fas fa-map-marker-alt"></i>
                                <span style={{}}><strong>323/76 Haatso</strong> | Accra, Ghana</span>
                            </p>
                        </div>
                        <div className="small-12">
                            <p>
                                <i style={{fontSize: '25px', padding: '10px'}} class="fas fa-phone"></i>
                                <span style={{}}><strong>+233 (0) 504 973 942</strong></span>
                            </p>
                        </div>
                    </div>
                    <div className="medium-4 hide-for-small-only"></div>
                    <div className="small-12 medium-4 text-white text-center">
                        <div className="spaceBar" />
                        <h3>Follow Us</h3>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/psfafrica/">
                                <i style={{fontSize: '35px', padding: '10px', color: 'white'}} class="fab fa-facebook-square"></i>
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/psfafrica/">
                                <i style={{fontSize: '35px', padding: '10px', color: 'white'}} class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="smallSpaceBar" />
            </div>
        );
    }
}

export default Footer;