import React from "react";
import PropTypes from "prop-types";
import styles from "./partners.module.scss";

const Partners = ({ partnersTitle, partners }) => (
    <div className={styles.wrapper}>
        <div className="container">
            <div className="columns has-text-centered">
                <div className="column">
                    <div className={styles.columnContent}>
                        <h1 className="title is-3">
                            {partnersTitle}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="columns is-gapless">
                {partners.map(partner => 
                    <div key={partner.img} className="column">
                        <div className={styles.partner}>
                            <a href={partner.website}>
                                <img src={partner.img} alt=""/>    
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>   
    </div>
);

Partners.propTypes = {
    partnersTitle: PropTypes.string.isRequired,
    partners: PropTypes.objectOf(PropTypes.string).isRequired
}

export default Partners;