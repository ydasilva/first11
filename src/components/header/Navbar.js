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
        return (
            <div>
                <Navbar color="light" light expand="md">
                {/*<Navbar className="grid-container">*/}
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
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
                                <NavLink href="/OurProjects">Our Projects</NavLink>
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
                                    <DropdownItem href="/SupportAProject">
                                        Support ...
                                    </DropdownItem>
                                    <DropdownItem href="/BecomeAVolunteer">
                                        Become ...
                                    </DropdownItem>
                                    <DropdownItem href="/ContactUs">
                                        Contact ...
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
                {/*</Navbar>*/}
            </div>
        );
    }
}