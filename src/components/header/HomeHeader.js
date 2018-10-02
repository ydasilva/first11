import React from 'react';
import Slider from 'react-slick';

import HeaderTop from './HeaderTop';
import seeds from '../../assets/static/seeds.json';

// import headers from '../header/headers.css';
// const header = headers.homeHeader;
const header = {
        background: {
            height: "auto",
            backgroundImage: "linear-gradient(to bottom, #df5a34, #8651aa)",
        },
        pattern: {
            width: "100%",
            height: "auto",
            // backgroundImage: "url(" + pattern + ")",
        },
        spaceBar: {
            width: "auto",
            height: "50px",
        },
        appBar: {
            width: "1440px",
            height: "90px",
            margin: "auto",
            customize: {
                width:"14.285%",
                height: "70px",
                display: "inline-flex",
            },
            apps: {
                width:"14.285%",
                height: "70px",
                display: "inline-flex",
            },
            stories: {
                width:"14.285%",
                height: "70px",
                display: "inline-flex",
            },
            gstickers: {
                width:"14.285%",
                height: "70px",
                display: "inline-flex",
                margin: "auto",
                padding: "auto",
                background: {
                    width: "100%",
                    height: "100%",
                    borderRadius: "11.7px",
                    backgroundColor: "#ffffff",
                    marginTop: "0px",
                },
                image: {

                    width: "164px",
                    objectFit: "contain",
                    marginLeft: "10%",
                    marginTop: "8%",
                    display: "inline-flex",
                },
                logoImage: {
                    width: "90%",
                    objectFit: "contain",
                    marginTop: "3px",
                    marginBottom: "3px",
                    display: "inline-flex",
                },
            },
            forCreators: {
                width:"14.285%",
                height: "70px",
                display: "inline-flex",
            },
            forBrands: {
                width:"14.285%",
                height: "70px",
                display: "inline-flex",
            },
            merch: {
                width:"14.285%",
                height: "70px",
                display: "inline-flex",
            },
            shadowText: {
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontWeight: "800",
                letterSpacing: "-1.5px",
                margin: "auto",
                color: "#ffffff",
                textShadow: "0 1px 6px rgba(0, 0, 0, 0.5)",
            },
            text: {
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontWeight: "800",
                letterSpacing: "-1.5px",
                margin: "auto",
                color: "#ffffff",
            },
            smallShadowText: {
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: "800",
                letterSpacing: "-1px",
                margin: "auto",
                color: "#ffffff",
                textShadow: "0 1px 6px rgba(0, 0, 0, 0.5)",
            },
            smallText: {
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: "800",
                letterSpacing: "-1px",
                margin: "auto",
                color: "#ffffff",
            }
        },
        kwekuAndAma: {
            width: "90%",
            height: "auto",
            fontFamily: "Montserrat",
            fontSize: "30px",
            fontWeight: "bold",
            letterSpacing: "-2.5px",
            textAlign: "center",
            color: "#ffffff",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            objectFit: "contain",
            display: "block",
        },
        content: {
            background: {
                height: "auto",
                opacity: "0.98",
                borderRadius: "15px",
                backgroundColor: "#ffffff",
                paddingTop: "15px",
                paddingBottom: "15px",
                marginLeft: "5px",
                marginRight: "5px",
            },
            artwork: {
                width: "90%",
                height: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                objectFit: "contain",
                display: "block",
            },
            downloadLinks: {
                width: "95%",
                opacity: "0.97",
                borderRadius: "15px",
                border: "solid 1.5px #c7c7c7",
                marginTop: "5px",
                marginBottom: "5px",
                marginLeft: "auto",
                marginRight: "auto",
            },
            ghanaTok: {
                width: "100%",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                letterSpacing: "-2px",
                // colors:"#fff",
                color:"#292929",
                marginTop:    "auto",
                marginBottom: "auto",
            },
            ghanaTok_WhiteText: {
                width: "100%",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                letterSpacing: "-2px",
                color:"#fff",
                // colors:"#292929",
                marginTop:    "auto",
                marginBottom: "auto",
            },
            appBadges: {
                width: "90%",
                height: "auto",
                marginTop: "10px",
                marginBottom: "10px",
                marginRight: "5%",
                marginLeft: "5%",
            },
        },
    };

class Animation extends React.Component {
    render() {
        var settings = {
            // dots: false,
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            pauseOnHover: true,
            swipe: true,
        };
        return (
            <Slider {...settings}>
                {
                    seeds.map(image =>
                    <div key={image.alt}>
                        <AnimationSlide item={image}/>
                    </div>)
                }
            </Slider>
        );
    }
}

class AnimationSlide extends React.Component{
    render(){
        let item = this.props.item;
        alert(item.name);
        return(
            <div>
                <div className="text-center">
                    <p>
                        text
                    </p>
                </div>
                <div style={header.content.backgroundxxxx}>
                    <img style={{margin: "0 auto", width: '3000px'}} alt="" src={require(`../../assets/images/${item.alt}.jpg`)}/>
                </div>
            </div>
        );
    }
}


const HomeHeader = () => (
    <div style={header.background}>
        <div style={header.pattern}>

            <div className="grid-container">
                <HeaderTop/>

                <div style={header.spaceBar}/>

                <div className="grid-x">
                    <div className="medium-2" style={{height: ''}}/>
                    <div className="small-12 medium-8" style={{background: ""}}>

                        <Animation />
                        <div style={{display: 'none'}}>
                            {/*<img style={header.content.artwork} src={require("../assets/art-work-for-media.png")} alt=""/>*/}
                            <div style={{ boxShadow: "0 0 0px grey", borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
                                
                            </div>

                        </div>

                    </div>
                    <div className="medium-2 show-for-medium" style={{background: ""}}/>
                </div>

            </div>
            <div style={header.spaceBar}/>

        </div>
    </div>

);

export default HomeHeader;