import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styles from "./header.module.scss";

const ListLink = props => (
    <div>
      <Link className={`navbar-item`} to={props.to}>{props.children}</Link>
    </div>
);

export default () => {
    const logoImgData = useStaticQuery(graphql`
        query {
            logo: file(relativePath: { eq: "restart-icon.jpg" }) {
                childImageSharp {
                fluid(maxWidth: 100, quality: 100) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    console.log(logoImgData);
    return (
    <nav className={`navbar ${styles.navbar}`} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link className={styles.logo} to="/">
                <Image 
                    fluid={logoImgData.logo.childImageSharp.fluid}
                    alt="Re:Start logo" 
                    style={{
                        width: 57,
                        height: 57
                    }}
                    />
            </Link>
            {/* change link tag by button tag */}
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
                <ListLink to="#programs">Programs</ListLink>
                <ListLink to="#about">About</ListLink>
            </div>
        </div>
    </nav>
)};

