import React, { Component } from 'react';
import Navbar       from '../../components/header/Navbar';
import Footer       from '../../components/footer/Footer';

class SupportForm extends Component {

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
                        <iframe title="SupportForm" src="https://docs.google.com/forms/d/e/1FAIpQLSddHx5cqm8XGfAwNKZGP0pPOGG3aCw0tgf-3zWyHmUOTUe1gg/viewform?embedded=true" width="700" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                    </div>
                    <div className="spaceBar"/>
                </div>

                <Footer/>
            </div>
        )
    }

}

export default SupportForm;