import React, { Component } from 'react';
import Footer       from '../../components/footer/Footer';
import EducationHeader from '../../components/header/EducationHeader';

class Education extends Component {

    render() {
        return(
            <div>
                <EducationHeader/>
                <div className="grid-container grid-x text-center">
                    <div className="spaceBar"/>
                    <div className="small-12 medium-8 medium-offset-2">
                        <h1>Education</h1>
                        <p>
                            We believe education is the key to success and putting priority on 
                            education in our work is a major step to bringing about socio-economic 
                            transformation in the lives of these young ones, who come from rather 
                            poor backgrounds. We try as much as we can to place every child in 
                            school, through our financial support aid which comes from cherished 
                            donors such as yourself. 
                        </p>
                    </div>
                    <div className="spaceBar"/>
                </div>
                <div style={{
                    backgroundColor: '#F89D1B'
                    }} className="text-center text-white">

                    <div className="grid-container grid-x">
                        <div className="spaceBar"/>
                        <div className="small-12 medium-8 medium-offset-2">
                            <h1>Where your support goes</h1>
                            <p>
                                Support that comes in from donors are used to 
                                pay for tuition, educational supplies as well 
                                as daily upkeep of each child in the Foundation.
                            </p>
                        </div>
                        <div className="spaceBar"/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Education;