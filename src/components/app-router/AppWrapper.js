import React, {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import App from '../app-router/App';
import BecomeAVolunteer from '../../pages/get-involved/BecomeAVolunteer';
import ContactUs from '../../pages/get-involved/ContactUs';
import Donate from '../../pages/get-involved/Donate';
import PartnerWithUs from '../../pages/get-involved/PartnerWithUs';
import SupportAProject from '../../pages/get-involved/SupportAProject';
import Education from '../../pages/what-we-do/Education';
import Football from '../../pages/what-we-do/Football';
import OurPartners from '../../pages/who-we-are/OurPartners';
import TheTeam from '../../pages/who-we-are/TheTeam';
import AboutUs from '../../pages/who-we-are/AboutUs';
import Profiles from '../../pages/home/Profiles';
import Projects from '../../pages/home/Projects';
import Community from '../../pages/home/Community';
import SupportForm from '../../pages/get-involved/SupportForm';
import FootballClubForm from '../../pages/get-involved/FootballClubForm';
import ExchangeForm from '../../pages/get-involved/ExchangeForm';



export default class AppWrapper extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/BecomeAVolunteer' component={BecomeAVolunteer} />
                    <Route exact path='/ContactUs' component={ContactUs} />
                    <Route exact path='/Donate' component={Donate} />
                    <Route exact path='/PartnerWithUs' component={PartnerWithUs} />
                    <Route exact path='/SupportAProject' component={SupportAProject} />
                    <Route exact path='/Education' component={Education} />
                    <Route exact path='/Football' component={Football} />
                    <Route exact path='/AboutUs' component={AboutUs} />
                    <Route exact path='/OurPartners' component={OurPartners} />
                    <Route exact path='/TheTeam' component={TheTeam} />
                    <Route exact path='/Profiles' component={Profiles} />
                    <Route exact path='/Projects' component={Projects} />
                    <Route exact path='/Community' component={Community} />
                    <Route exact path='/SupportForm' component={SupportForm} />
                    <Route exact path='/FootballForm' component={FootballClubForm} />
                    <Route exact path='/ExchangeForm' component={ExchangeForm} />
                </Switch>
            </BrowserRouter>
        )
    }
}

