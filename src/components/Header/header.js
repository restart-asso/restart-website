import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.css";

const ListLink = props => (
    <div>
      <Link className={styles.links} to={props.to}>{props.children}</Link>
    </div>
);

export default () => (
    <header className={styles.navbar}>
        <div className={styles.logo}>
            <Link to="/">
                <img src="/img/restart-logo.png" alt="Re:Start logo" />
            </Link> 
        </div>
   
        <div className={styles.menu}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="#contact">Activities</ListLink>
            <ListLink to="#about">About</ListLink>
        </div>
    </header>
);

