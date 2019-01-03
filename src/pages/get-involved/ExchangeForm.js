import React, { Component } from 'react';
import Navbar       from '../../components/header/Navbar';
import Footer       from '../../components/footer/Footer';

class ExchangeForm extends Component {

    render() {
        return(
            <div>
                <div>
                    <div style={{backgroundColor: 'black'}}>
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

                        <div className="smallestSpaceBar"/>
                    </div>
                </div>
                
                <div className="grid-container grid-x text-center">
                    <div className="spaceBar"/>
                    <div className="medium-2 hide-for-small-only"/>
                    <div className="small-12 medium-8">
                        <iframe title="ExchangeForm" src="https://docs.google.com/forms/d/e/1FAIpQLScRRn7bpkvHxL_9Y2XTbNmkNvvPKXeiI8huUcPhhI9Y1UjpKw/viewform?embedded=true" width="640" height="1125" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                    </div>
                    <div className="spaceBar"/>
                </div>

                <Footer/>
            </div>
        )
    }

}

export default ExchangeForm;