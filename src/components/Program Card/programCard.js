import React from "react";
import PropTypes from 'prop-types'
import styles from "./program-card.module.scss";

const ProgramCard = ({ programTitle, programSlogan, programShortText, programImage }) => (
    <div className={styles.container}>
        <h1>{programTitle}</h1>
        <h2>{programSlogan}</h2>
        <div style={{height: 220}}>
            <p>{programShortText}</p>
        </div>

        <div className="">
            <img className="image" src={programImage} alt=""/>
        </div>
    </div>
);

ProgramCard.propTypes = {
    programTitle: PropTypes.string.isRequired,
    programSlogan: PropTypes.string.isRequired,
    programShortText: PropTypes.string.isRequired,
    programImage: PropTypes.string.isRequired,
  }

export default ProgramCard;