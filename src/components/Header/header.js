import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";

const ListLink = props => (
    <div>
      <Link className={`navbar-item`} to={props.to}>{props.children}</Link>
    </div>
);

export default () => (
    <nav className={`navbar ${styles.navbar}`} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className={styles.logo} to="/">
                <img src="/img/restart-logo.png" 
                     alt="Re:Start logo" width="57" height="57px"/>
            </Link>
                
            <a  role="button" 
                className="navbar-burger burger" 
                aria-label="menu" aria-expanded="false" 
                data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
            </a>
        </div>
        
        <div id="navbarMenu" className="navbar-menu">
            <div className={`navbar-end ${styles.menu}`}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="#contact">Activities</ListLink>
                <ListLink to="#about">About</ListLink>
            </div>
        </div>
    </nav>
);

