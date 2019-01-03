import React, { Component } from 'react';
import HomeHeader from '../../components/header/HomeHeader';

class SupportAProject extends Component {

    render() {
        return(
            <div>
                <HomeHeader/>
                <div className="grid-container grid-x text-center">
                    <div className="spaceBar"/>
                    <div className="small-12">
                        <h1>Educational Pathways</h1>
                        <p>
                            As a student approaches the age of fifteen at the Foundation they will be offered the choice to apply for one of our educational pathways. These include opportunities in the US, the UK or continued education within professional football. The PSF student-athlete pathway provides students the chance to enter top private high schools on full scholarships that will extend through to university. If students are pursuing a professional contract at eighteen, they will remain at the Foundation and continue their varied education, including football specific life courses, while in Ghana or on training attachment in Europe.
                        </p>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default SupportAProject;