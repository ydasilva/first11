import React from 'react';
import './HomeHeader.scss';
// Old
import CSSTransitionGroup from 'react-addons-css-transition-group';
 
// New
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// let CSSTransitionGroup = React.addons.CSSTransitionGroup;

class Submenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          {/* <a>Our Company</a> */}
          <span>Our Company</span>
        </li>
        <li className="nav__submenu-item ">
          {/* <a>Our Team</a> */}
          <span>Our Team</span>
        </li>
        <li className="nav__submenu-item ">
          {/* <a>Our Portfolio</a> */}
          <span>Our Portfolio</span>
        </li>
      </ul>
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutMenu: false
    };
  }
  
  handleHover = (event) => {
    this.setState({ showAboutMenu: true });
  };
  
  handleLeave = (event) => {
    this.setState({ showAboutMenu: false });
  };
  
  render() {
    return (
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <span>Home</span>
          </li>
          <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
            <span onMouseEnter={this.handleHover}>
            About
            </span>
            <div className="submenu-container">
              <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                <Submenu />
                {/* { this.state.showAboutMenu ? <Submenu />  : null } */}
              </CSSTransitionGroup>
            </div>
          </li>

          <li className="nav__menu-item">
            <a>Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu;