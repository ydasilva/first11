import React, { Component } from 'react';
import Navbar from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import { NavLink } from 'reactstrap';
import ProjectBackground from '../../assets/images/projects/header-bg.png';
import donate1 from '../../assets/images/donate/donate-1.png';
import donate2 from '../../assets/images/donate/donate-2.png';
import donate3 from '../../assets/images/donate/donate-3.png';
import donate4 from '../../assets/images/donate/donate-4.png';
import donate5 from '../../assets/images/donate/donate-5.png';
import donate6 from '../../assets/images/donate/donate-6.png';

class Donate extends Component {

    render() {
        return(
            <div>
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
                        
                    </div>
                </div>
                <div className="grid-container grid-x text-center">
                    <div className="small-12 medium-8 medium-offset-2">
                        <div className="smallSpaceBar"/>
                        <h1>Support Dreams</h1>
                        <div className="smallSpaceBar"/>
                        <h3>
                            We Appreciate any kind of gifts
                            from you to help bring the dreams
                            of these kids to reality 
                        </h3>
                        <div className="spaceBar"/>
                    </div>
                    <div className="small-10 small-offset-1 grid-x">
                        <div className="small-12 medium-4" style={{padding: '5px', backgroundColor: 'lightgre'}}>
                            <img src={donate1} alt="donate1"/>
                            <div className="smallSpaceBar"/>
                            <h1>BOOTS</h1>
                            <p style={{
                                    height: '100px',
                                    width: '90%',
                                    margin: '0 auto'
                                }}> We would love to
                                received either new/used
                                football boots and sneakers. 
                                We appreciate your support.
                            </p>
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
                                href="/SupportForm"
                            >
                                Support
                            </NavLink>
                        </div>

                        <div className="small-12 medium-4" style={{padding: '5px', backgroundColor: 'lightgre'}}>
                            <img src={donate2} alt="donate2"/>
                            <div className="smallSpaceBar"/>
                            <h1>JERSEYS</h1>
                            <p style={{
                                    height: '100px',
                                    width: '90%',
                                    margin: '0 auto'
                                }}> We would love to
                                received either new/used
                                football jerseys. We 
                                appreciate your support.
                            </p>
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
                                href="/SupportForm"
                            >
                                Support
                            </NavLink>
                        </div>

                        <div className="small-12 medium-4" style={{padding: '5px', backgroundColor: 'lightgre'}}>
                            <img src={donate3} alt="donate3"/>
                            <div className="smallSpaceBar"/>
                            <h1>BOOKS</h1>
                            <p style={{
                                    height: '100px',
                                    width: '90%',
                                    margin: '0 auto'
                                }}> We would love to
                                received either new/used
                                books. We appreciate
                                your support.
                            </p>
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
                                href="/SupportForm"
                            >
                                Support
                            </NavLink>
                        </div>


                        <div className="small-12 medium-4" style={{padding: '5px', backgroundColor: 'lightgre'}}>
                            <img src={donate4} alt="donate4"/>
                            <div className="smallSpaceBar"/>
                            <h1>EQUIPMENT</h1>
                            <p style={{
                                    height: '100px',
                                    width: '90%',
                                    margin: '0 auto'
                                }}> We would love to
                                received either new/used
                                training equipment. 
                                We appreciate your support.
                            </p>
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
                                href="/SupportForm"
                            >
                                Support
                            </NavLink>
                        </div>

                        <div className="small-12 medium-4" style={{padding: '5px', backgroundColor: 'lightgre'}}>
                            <img src={donate5} alt="donate5"/>
                            <div className="smallSpaceBar"/>
                            <h1>BALLS</h1>
                            <p style={{
                                    height: '100px',
                                    width: '90%',
                                    margin: '0 auto'
                                }}> We would love to
                                received either new/used
                                footballs. We appreciate 
                                your support.
                            </p>
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
                                href="/SupportForm"
                            >
                                Support
                            </NavLink>
                        </div>

                        <div className="small-12 medium-4" style={{padding: '5px', backgroundColor: 'lightgre'}}>
                            <img src={donate6} alt="donate6"/>
                            <div className="smallSpaceBar"/>
                            <h1>CASH</h1>
                            <p style={{
                                    height: '100px',
                                    width: '90%',
                                    margin: '0 auto'
                                }}> No support is too little.
                                We appreciate
                                every little support.
                            </p>
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
                                href="/SupportForm"
                            >
                                Support
                            </NavLink>
                        </div>
                        <div className="smallSpaceBar"/>
                    </div>
                </div>

                <div style={{backgroundColor: "#7F0000"}}>
                    <div className="smallSpaceBar"/>
                    <div className="grid-container grid-x text-white text-center">
                        <div className="small-8 small-offset-2">
                            <h1>You're making a difference</h1>
                            <div className="smallestSpaceBar"/>
                            <p>Your support goes into paying for tuition fees, 
                                buying educational supplies as well as providing 
                                daily meals for each child in the Foundation.</p>
                            <div className="smallestSpaceBar"/>
                            <i>We appreciate your support. With your help we keep 
                                putting smiles on the faces of these kids.</i>
                        </div>
                    </div>
                    <div className="smallSpaceBar"/>
                </div>

                <div className="grid-container grid-x">
                    <div className="small-8 small-offset-2 text-center">
                        <div className="smallSpaceBar"/>
                        <h1>Educational Pathways</h1>
                        <div className="smallSpaceBar"/>
                        <p>
                            As a student approaches the age of fifteen at the Foundation 
                            they will be offered the choice to apply for one of our 
                            educational pathways. These include opportunities in the US, 
                            the UK or continued education within professional football. 
                            The PSF student-athlete pathway provides students the chance 
                            to enter top private high schools on full scholarships that 
                            will extend through to university. If students are pursuing 
                            a professional contract at eighteen, they will remain at 
                            the Foundation and continue their varied education, including 
                            football specific life courses, while in Ghana or on 
                            training attachment in Europe.
                        </p>
                        <div className="smallSpaceBar"/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Donate;