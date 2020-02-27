import React from "react";
import Image from "gatsby-image";
import PropTypes from 'prop-types'
import styles from "./program-card.module.scss";

const ProgramCard = ({ programTitle, programSlogan, programShortText, programImage }) => (
    <div className={styles.container}>
        <h1 className="title is-spaced is-3">{programTitle}</h1>
        <h2 className="subtitle is-5">{programSlogan}</h2>
        <div className={styles.shortText}>
            <p>{programShortText}</p>
        </div>
        <Image 
            fluid={programImage.childImageSharp.fluid}
            style={{
                objectFit: "cover",
                objectPosition: "0 90",
                height: 200,
                width: "100%",
                margin: 0
            }}
            alt=""
        />
    </div>
);

ProgramCard.propTypes = {
    programTitle: PropTypes.string.isRequired,
    programSlogan: PropTypes.string.isRequired,
    programShortText: PropTypes.string.isRequired,
    programImage: PropTypes.objectOf(PropTypes.string).isRequired,
  }

export default ProgramCard;