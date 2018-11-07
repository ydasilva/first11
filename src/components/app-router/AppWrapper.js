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
                </Switch>
            </BrowserRouter>
        )
    }
}

