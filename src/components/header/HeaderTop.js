import React from 'react';
import {NavLink} from 'react-router-dom'

import headers from './headers.css';
const headerTop = headers.headerTop;

const HeaderTop = () => (
        <div>
            <div style={headerTop.spaceBar}/>
            <div className="">

                {/*code for small screens*/}
                <div className="grid-x show-for-small-only">
                    <div className="cell small-12" style={{paddingBottom: "10px"}}>
                        <div style={{background: "white", borderRadius: "11.7px", width: "164px", height: "auto", display: "block", margin: "0 auto", padding: "10px" }}>
                            <NavLink style={{ textDecoration: 'none' }} to='/' activeStyle={{color: 'white'}}>
                                <img style={{display: "block", margin: "0px",}} src={require("../../assets/images/logo.png")} alt=""/>
                            </NavLink>
                        </div>
                        <div style={headerTop.smallSpaceBar}/>
                    </div>
                    <div className="small-6 cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: "none", color: "lightpink" }} to="/customize" activeStyle={{color: 'white'}}>
                            <h1 style={headerTop.appBar.smallText}>Customize*</h1>
                        </NavLink>
                    </div>

                    <div className="small-6 cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: "none", color: "lightpink" }} to="/apps" activeStyle={{color: 'white'}} >
                            <h1 style={headerTop.appBar.smallText}>Apps</h1>
                        </NavLink>
                    </div>

                    <div className="small-6 cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: "none", color: "lightpink" }} to="/stories" activeStyle={{color: 'white'}}>
                            <h1 style={headerTop.appBar.smallText}>Stories</h1>
                        </NavLink>
                    </div>

                    <div className="small-6 cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: "none", color: "lightpink" }} to="/creators" activeStyle={{color: 'white'}}>
                            <h1 style={headerTop.appBar.smallText}>Creators</h1>
                        </NavLink>
                    </div>

                    <div className="small-6 cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: "none", color: "lightpink" }} to="/brands" activeStyle={{color: 'white'}}>
                            <h1 style={headerTop.appBar.smallText}>Brands</h1>
                        </NavLink>
                    </div>

                    <div className="small-6 cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: "none", color: "lightpink" }} to="/games" activeStyle={{color: 'white'}}>
                            <h1 style={headerTop.appBar.smallText}>Games</h1>
                        </NavLink>

                    </div>
                </div>

                {/*code for regular screen*/}
                <div className="grid-x hide-for-small-only">
                    <div className="auto cell text-center" style={{background: "", borderRadius: "11.7px", marginTop: "-10px",}}>
                        <NavLink style={{ textDecoration: 'none', margin: "35px 0px", background: "", }} to='/' activeStyle={{color: 'white'}}>
                            <img style={headerTop.appBar.gstickers.logoImage} src={require("../../assets/images/logo.png")} alt=""/>
                        </NavLink>
                    </div>

                    <div style={{width: "20%"}}/>
                    
                    <div className="auto cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: 'none', color: "white" }} to='/customize' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.text}>What We Do</span>
                        </NavLink>
                    </div>
                    <div className="auto cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: 'none', color: "white" }} to='/apps' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.text}>Register</span>
                        </NavLink>
                    </div>
                    <div className="auto cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: 'none', color: "white" }} to='/creators' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.text}>Upcoming Events</span>
                        </NavLink>
                    </div>
                    <div className="auto cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: 'none', color: "white" }} to='/games' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.text}>Donate</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
);

export default HeaderTop


