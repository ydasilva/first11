import React from 'react';
import {NavLink} from 'react-router-dom'
import headers from './headers.css';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
const headerTop = headers.headerTop;

const HeaderTop = () => (
        <div>
            <div style={headerTop.spaceBar}/>
            <div className="">

                {/*code for small screens*/}
                <div className="grid-x show-for-small-only">
                    <div className="cell small-12" style={{paddingBottom: "10px"}}>
                        <div style={{background: "", borderRadius: "11.7px", width: "164px", height: "auto", display: "block", margin: "0 auto", padding: "10px" }}>
                            <NavLink style={{ textDecoration: 'none' }} to='/' activeStyle={{color: 'white'}}>
                                <img style={{display: "block", margin: "0px",}} src={require("../../assets/images/logo.png")} alt=""/>
                            </NavLink>
                        </div>
                        <div style={headerTop.smallSpaceBar}/>
                    </div>
                    <div className="small-6 cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to='/#What We Do' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.smallText}>What We Do</span>
                        </NavLink>
                    </div>
                    <div className="small-6 cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to='/#register' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.smallText}>Register</span>
                        </NavLink>
                    </div>
                    <div className="small-6 cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to='/#upcoming' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.smallText}>Events</span>
                        </NavLink>
                    </div>
                    <div className="small-6 cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to='/#donate' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.smallText}>Donate</span>
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
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to='/#What-We-Do' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.text}>What We Do</span>
                        </NavLink>
                    </div>
                    <div className="auto cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to='/#register' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.text}>Register</span>
                        </NavLink>
                    </div>
                    <div className="auto cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to='/#upcoming' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.text}>Upcoming Events</span>
                        </NavLink>
                    </div>
                    <div className="auto cell text-center" style={{background: ""}}>
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to='/#donate' activeStyle={{color: 'white'}}>
                            <span style={headerTop.appBar.text}>Donate</span>
                        </NavLink>
                    </div>
                    <div className="auto cell text-center" style={{background: ""}}>
                    <DropdownMenu triggerType='text' trigger='Settings'>
                        <MenuItem text='Home' location='/clickevent' />
                        <MenuItem text='Edit Profile' location='/clickevent' />
                        <MenuItem text='Delete Account' onClick={() => {}} />
                        <MenuItem text='Logout' location='/clickevent' />
                    </DropdownMenu>
                    </div>

                </div>
            </div>
        </div>
);

export default HeaderTop;
