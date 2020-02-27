import React from "react";
import PropTypes from "prop-types";
import styles from "./about.module.scss";

const TeamMember = ({image, name, responsability}) => (
    <div key={image} className={`has-text-centered ${styles.teamMember}`}>
        <img src={image} alt=""/>
        <div>
            <h1 >{name}</h1>
            <h2 >{responsability}</h2>
        </div>
    </div>
);

const About = ({aboutTitle, aboutSubtitle, aboutText, teamMembers}) => (
    <div id="about" className={styles.wrapper}>
        <div className={`container ${styles.aboutContainer}`}>
            <div className="columns has-text-centered">
                <div className="column">
                    <div className={styles.columnContent}>
                        <h1 className="title is-3">
                            {aboutTitle}
                        </h1>
                        <h2 className="subtitle is-5">
                            {aboutSubtitle}
                        </h2>
                    </div>
                </div>
            </div>
            <div className="columns" style={{ marginTop: 20}}>
                <div className="column">
                    <div className={styles.columnContent}>
                        <p>{aboutText}</p>
                    </div>
                </div>
                <div className="column">
                    <div className="columns is-tablet">
                        {teamMembers.map( (member, index ) => {                   
                            if (index !== (teamMembers.length-1)) {
                                return (
                                    <div className="column is-half">
                                    <   TeamMember {...member} />
                                    </div>
                                );
                            }
                            return <span></span>;
                        })}
                    </div>
                    <div className="columns"> 
                        <div className="column is-half is-offset-one-quarter">
                            <TeamMember {...teamMembers[teamMembers.length-1]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

About.propTypes = {
    aboutTitle: PropTypes.string.isRequired,
    aboutSubtitle: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
    teamMembers: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        responsability: PropTypes.string
    }),
}

export default About; 
