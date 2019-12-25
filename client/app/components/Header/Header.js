import React, { Component } from "react";
import "./Header.scss";
import instagram from "../../../public/assets/png/instagram.png";
import "whatwg-fetch";

class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.navContainer = React.createRef();
    this.state = {
      toggleMenu: false,
      header: [],
      mobileView: window.innerWidth <= 767 && window.innerWidth <= 767
    };
    this.toggleMenuIcon = this.toggleMenuIcon.bind(this);
  }

  getHeaderData() {
    fetch("/api/headers", { method: "GET" })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          header: json
        });
      });
  }

  componentDidMount() {
    this.getHeaderData();
    //   HeaderService.getHeaders()
    //     .then(res => {
    //       this.setState({
    //         header: res.data,
    //       });
    //     })
    //     .catch(err => console.log(err));
  }

  toggleMenuIcon() {
    if (this.state.mobileView) {
      this.setState({
        toggleMenu: !this.state.toggleMenu
      });
      this.navContainer.current.classList.toggle("change");
    }
  }

  render() {
    return (
      <nav className="nav" ref={this.navContainer}>
        <div className="menu-icon" onClick={this.toggleMenuIcon}></div>
        <img
          src={instagram}
          alt="title"
          style={{ width: "45px", height: "45px" }}
        />
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
