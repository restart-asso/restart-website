import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import styles from "./header.module.scss";
import logoImg from "../../assets/img/restart-icon.jpg"; 

const ListLink = props => (
    <div>
      <Link className={`navbar-item`} to={props.to}>{props.children}</Link>
    </div>
);

// TODO switch to a function using React Hooks
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isOpen: !state.isOpen
        }))
    };

    render() {
        const burgerClassName = classNames({
            'navbar-burger': true,
            'burger': true,
            'is-active': this.state.isOpen
        });

        const navbarClassName = classNames({
            'navbar-menu': true,
            'is-active': this.state.isOpen
        });
        
        return (
            <nav className={`navbar ${styles.navbar}`} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className={styles.logo} to="/">
                        <img src={logoImg} alt="Re:Start logo"/>
                    </Link>

                    <a  role="button" 
                        className={burgerClassName}
                        aria-label="menu" aria-expanded={this.state.isOpen} 
                        data-target="navbarMenu"
                        onClick={this.handleClick}
                    >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                    </a>
                </div>
                
                <div id="navbarMenu" className={navbarClassName}>
                    <div className={`navbar-end ${styles.menu}`}>
                        <ListLink to="/">Home</ListLink>
                        <ListLink to="#programs">Programs</ListLink>
                        <ListLink to="#about">About</ListLink>
                    </div>
                </div>
            </nav>
            );
    }
};

export default Header;
