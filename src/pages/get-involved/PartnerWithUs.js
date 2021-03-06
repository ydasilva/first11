import React, { Component } from 'react';
import Navbar       from '../../components/header/Navbar';
import Footer from '../../components/footer/Footer';
import Partners from '../../assets/images/donate/PartnerWithUsBg.png';

class PartnerWithUs extends Component {

    render() {
        return(
            <div>
                {/* <HomeHeader/> */}
                <div>
                    <div style={{backgroundColor: 'rgba(0,0,0,1)',}}>
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
                    <div style={{
                        backgroundImage: 'url('+Partners+')', 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width :'100%', 
                        height: 'auto',
                    }}>
                        {/* <div className="smallSpaceBar"/> */}

                        

                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="smallSpaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        <div style={{backgroundColor: 'rgba(0,0,0,.0)'}} className="spaceBar"/>
                        
                    </div>
                </div>
                <div className="grid-container grid-x text-center">
                    <div className="spaceBar"/>
                    <div className="small-12 medium-8 medium-offset-2">
                        <h1>Become a Volunteer</h1>
                        <p>We want to build partnerships with individuals, organizations, 
                            companies and media who believe in our mission of providing 
                            transformational life changing opportunities for the next 
                            generation of leaders who give back to society. In the quest 
                            to bring about change to the lives of children in sports and 
                            the communities they come from, we welcome volunteers from all 
                            over the world to work hand in hand with. Let us know if you will 
                            like to help achieve a greater goal. Send us a mail today with your 
                            expression of interest to psfoundationafrica@gmail.com</p>

                            <div className="spaceBar"/>

                        <h1>Corporate Social Responsibility</h1>
                        <p style={{textAlign: 'left'}}>Pathways Sports Foundation Africa (PSFA) partners with companies 
                            to help them bring to life their brand values and give back to society 
                            through sustainable projects and activities including:  

                            <ul style={{textAlign: 'left'}}>
                                <li>Tournaments & football camps</li>
                                <li>Education and character development programmes</li>
                                <li>Community giveback initiatives</li>
                                <li>Talent identification across West Africa</li>
                                <li>Corporate and marketing events</li>
                            </ul> 
                            Support Education of a Brilliant but Needy Child Athlete. Education is 
                            the key to transformation and, its students who come from the lowest 
                            socioeconomic communities in West Africa.
                        </p>

                    <h2>Fundraising Events </h2>
                    <p>
                    Pathways Sports Foundation Africa (PSFA)   seeks to hosts an annual fundraising event in a few select countries and is looking to expand its fundraising activities globally. We currently have charities in Ghana with an expansion coming up soon.  
                    </p>

                    <h2>A Legacy Fund for Education and Equality in Africa </h2>
                    <p>
                    Benefactors and patrons have been instrumental in the journey and impact so far. We need patrons to catalyse the future, and to take this extraordinary youth development model across the world.
For further information about our philanthropic investment opportunities, please contact: rsg@talk21.com talentid365@gmail.com
                    </p>

                    <h2>MEDIA</h2>
                    <p>
                    Pathways Sports Foundation Africa (PSFA)   is working alongside creative content marketing and communications experts to inspire and engage the global community and convey powerful stories of opportunity, transformation, leadership and giveback.
For media, advertising and content marketing requests, please contact Public relations ofiicer. Elizabethofosu97@yahoo.com
                    </p>
                    <div className="spaceBar"/>
                    </div>
                    
                </div>
                <Footer/>
            </div>
        )
    }

}

export default PartnerWithUs;