import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
// import logo from '../../assets/images/logo.png';
import psfalogo from '../../assets/images/psfa logo4.png';


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const {mode} = this.props;
        return (
            <div>
                <Navbar style={{fontWeight: 'bold'}} color="faded" light={true} dark={mode==='light'} expand="md">
                    <NavbarBrand  href="/" 
                        style={{
                            width: '80px', 
                            height: '80px',
                            boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)', 
                            borderRadius: '80px',
                            backgroundColor: 'white', 
                        }}>
                        <img  src={psfalogo} alt="psfalogo"
                            style={{
                                // width: '60px', 
                                // height: 'auto', 
                                padding: '5px 10px',
                                
                                // borderRadius: '70px', 
                                // backgroundColor: 'grey'
                            }}/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret 
                                    // style={{color: 'white'}}
                                >
                                    Who We Are
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/AboutUs">
                                        About Us
                                    </DropdownItem>
                                    <DropdownItem href="/TheTeam">
                                        The Team
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem href="/OurPartners">
                                        Our Partners
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    What We Do
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="/Education">
                                        Education
                                    </DropdownItem>
                                    <DropdownItem href="/Football">
                                        Football
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/Projects">Our Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Profiles">Profiles</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret href="/GetInvolved">
                                    Get Involved
                                </DropdownToggle>
                                <DropdownMenu right href="/Donate">
                                    <DropdownItem href="/Donate">
                                        Donate
                                    </DropdownItem>
                                    <DropdownItem href="/PartnerWithUs">
                                        Partner With Us
                                    </DropdownItem>
                                    <DropdownItem href="/BecomeAVolunteer">
                                        Become A Volunteer
                                    </DropdownItem>
                                    <DropdownItem href="/ContactUs">
                                        Contact Us
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem style={{margin: '0 auto',}}>
                                <NavLink style={{
                                    backgroundColor: '#FF0079',
                                    boxShadow: '0px 3px 3px rgba(0, 0, 0, .2)',  
                                    borderRadius: '5px', color: 'white',
                                    width: '150px',
                                    height: '50px',
                                    lineHeight: '30px',
                                    fontSize: '20px',
                                    textAlign: 'center',
                                    // fontWeight: 'bold',
                                    }} href="/Donate">Support</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}