import React from "react";
import classNames from "classnames";
import styles from "./header.module.scss";
import logoImg from "../../assets/img/restart-icon.jpg"; 

const ListLink = props => (
    <div>
      <a className={`navbar-item`} href={props.to}>{props.children}</a>
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
            'button': true,
            'is-white': true,
            'is-active': this.state.isOpen
        });

        const navbarClassName = classNames({
            'navbar-menu': true,
            'is-active': this.state.isOpen
        });
        
        return (
            <nav className={`navbar ${styles.navbar}`} role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className={styles.logo} href="">
                        <img src={logoImg} alt="Re:Start logo"/>
                    </div>

                    <button  
                        className={burgerClassName}
                        aria-label="menu" aria-expanded={this.state.isOpen} 
                        data-target="navbarMenu"
                        onClick={this.handleClick}
                    >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                    </button>
                </div>
                
                <div id="navbarMenu" className={navbarClassName}>
                    <div className={`navbar-end ${styles.menu}`}>
                        <ListLink to="#">Home</ListLink>
                        <ListLink to="#programs">Programs</ListLink>
                        <ListLink to="#about">About</ListLink>
                    </div>
                </div>
            </nav>
            );
    }
};

export default Header;
