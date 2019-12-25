import React, { Component } from "react";
import "./header.scss";
import { HeaderService } from "../../../services/header";
import instagram from "../../../../public/assets/png/instagram.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.navContainer = React.createRef();
    this.menuIcon = React.createRef();
    this.state = {
      toggleMenu: false,
      header: [],
      mobileView: window.innerWidth <= 767
    };
    this.toggleMenuIcon = this.toggleMenuIcon.bind(this);
  }

  componentDidMount() {
    HeaderService.getHeaders()
      .then(res => {
        this.setState({
          header: res.data
        });
      })
      .catch(err => console.log(err));
  }

  toggleMenuIcon() {
    if (this.state.mobileView) {
      this.setState({
        toggleMenu: !this.state.toggleMenu
      });
      this.menuIcon.current.classList.toggle("rotate-image");
    }
  }

  render() {
    return (
      <nav className="nav" ref={this.navContainer}>
        <div
          className="menu-icon"
          onClick={this.toggleMenuIcon}
          ref={this.menuIcon}
        ></div>
        <div className="menu-title">
          <img src={instagram} alt="title" />
        </div>
        <ul
          className={`nav-container ${
            this.state.toggleMenu ? "show-menu" : ""
          }`}
        >
          {this.state.header
            ? this.state.header.map(item => (
                <a
                  className="nav-item"
                  href={
                    item.menuHref === "/"
                      ? item.menuHref + "home"
                      : item.menuHref
                  }
                  key={item.key}
                >
                  {item.menuItem}
                </a>
              ))
            : ""}
        </ul>
      </nav>
    );
  }
}

export default Header;
