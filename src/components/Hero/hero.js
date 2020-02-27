// Solutions around background images with gatsby-image 
// https://github.com/gatsbyjs/gatsby/issues/2470
import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";
import styles from "./hero.module.scss";

const Hero = ({slogan, missionStatement, heroImage}) => (
    <section className={`hero is-large is-bold is-primary ${styles.hasBackground}`}>
        <Image 
            fluid={heroImage.hero.childImageSharp.fluid}
            style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                opacity: 0.3
            }}
            alt=""
        />
        <div className="hero-body">
            <div className="container has-text-centered">
            <h1 className="title is-2">
                {slogan}
            </h1>
            <h2 className="subtitle is-4">
                {missionStatement}
            </h2>
            </div>
        </div>
    </section>
);

Hero.propTypes = {
    slogan: PropTypes.string.isRequired,
    missionStatement: PropTypes.string.isRequired,
    heroImage: PropTypes.string.isRequired
  }

export default Hero;
