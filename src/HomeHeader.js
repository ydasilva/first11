// import React from 'react';
// import Slider from 'react-slick';
// import HeaderTop from '../header/HeaderTop';

// import seeds from '../../assets/static/seeds.json';

// import headers from '../header/headers.css';

// const header = headers.homeHeader;


// class Animation extends React.Component {
//     render() {
//         var settings = {
//             dots: false,
//             infinite: true,
//             speed: 800,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             autoplay: true,
//             pauseOnHover: true,
//             swipe: true,
//         };
//         return (
//             <Slider {...settings}>
//                 {seeds.map(app =>
//                     <div key={app.alt}>
//                         <AnimationSlide item={app}/>
//                     </div>
//                 )}

//             </Slider>
//         );
//     }
// }

// class AnimationSlide extends React.Component{
//     render(){
//         let item = this.props.item;
//         return(
//             <div>
//                 <div className="text-center">
//                     <p style={header.kwekuAndAma}>
//                         {item.slideshow.text}
//                     </p>
//                 </div>
//                 <div style={{header.content.background}}>
//                     <img style={{margin: "0 auto"}} alt="" src={require(`../../assets/art-work-for-${item.alt}.png`)}/>
//                     <span className="legend">
//                         <div className="grid-x" style={header.content.downloadLinks}>
//                             <div className="medium-6 small-12 text-center" style={{backgroundColor: ""}}>
//                                 <h1 style={header.content.ghanaTok}> {item.name} </h1>
//                             </div>
//                             <div className="medium-3 small-6" style={{marginTop: "auto", marginBottom: "auto"}}>
//                                 <a href={item.links.ios} target="_blank" rel="noopener noreferrer">
//                                     <img src={require("../../assets/badge-app-store.png")} style={header.content.appBadges} alt=""/>
//                                 </a>
//                             </div>
//                             <div className="medium-3 small-6" style={{marginTop: "auto", marginBottom: "auto"}}>
//                                 <a href={item.links.android} target="_blank" rel="noopener noreferrer">
//                                     <img src={require("../../assets/badge-google-play.png")} style={header.content.appBadges} alt=""/>
//                                 </a>
//                             </div>
//                         </div>
//                     </span>
//                 </div>
//             </div>
//         );
//     }
// }


// const HomeHeader = () => (
//     <div style={header.background}>
//         <div style={header.pattern}>

//             <div className="grid-container">
//                 <HeaderTop/>

//                 <div style={header.spaceBar}/>

//                 <div className="grid-x">
//                     <div className="medium-2" style={{background: ""}}/>
//                     <div className="small-12 medium-8" style={{background: ""}}>
//                         <div>
//                             {/*<img style={header.content.artwork} src={require("../assets/art-work-for-media.png")} alt=""/>*/}
//                             <div style={{ boxShadow: "0 0 0px grey", borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
//                                 <Animation />
//                             </div>

//                         </div>

//                     </div>
//                     <div className="medium-2 show-for-medium" style={{background: ""}}/>
//                 </div>

//             </div>
//             <div style={header.spaceBar}/>

//         </div>
//     </div>

// );

// export default HomeHeader;