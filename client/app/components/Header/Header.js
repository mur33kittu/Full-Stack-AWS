import React, { Component } from "react";
import "./Header.scss";
import instagram from "../../../public/assets/png/instagram.png"

class Header extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.navContainer = React.createRef();
    this.state = {
      toggleMenu: false,
      header: [
        {
          key: 2,
          menuHref: "/",
          menuItem: "Home"
        },
        {
          key: 3,
          menuHref: "/about",
          menuItem: "About Us"
        },
        {
          key: 4,
          menuHref: "/",
          menuItem: "Products and Services"
        },
        {
          key: 5,
          menuHref: "/",
          menuItem: "Contact Us"
        },
        {
          key: 6,
          menuHref: "/",
          menuItem: "Admin"
        }
      ],
      mobileView: window.innerWidth <= 767 && window.innerWidth <= 767
    };
    this.toggleMenuIcon = this.toggleMenuIcon.bind(this);
  }

  // componentDidMount() {
  //   HeaderService.getHeaders()
  //     .then(res => {
  //       this.setState({
  //         header: res.data,
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

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
      <nav
        className="nav"        
        ref={this.navContainer}
      >
        <div className="menu-icon"></div>
        <img
          src={instagram}
          alt="title"
          style={{ width: "45px", height: "45px" }}
          onClick={this.toggleMenuIcon}
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
