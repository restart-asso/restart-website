import React from "react"
// A more holistic way to add the icons throughout the app 
// https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import restartLogo from '../../assets/img/restart-icon.jpg'
import styles from "./footer.module.scss"

export default () => (
    <footer> 
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={restartLogo} alt="Re:Start logo"/>
            </div>
            <div className={styles.separator}></div>
            <div className={styles.infoContainer}>
                <span>Contact</span>
                <span>
                    <a href="mailto:hello@restart-asso.org">
                        hello@restart-asso.org
                    </a>
                </span>
                <span className={styles.socialMedia}>
                    <a href="https://twitter.com/restartAsso">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        size="lg"
                    />
                    </a>
                    <a href="https://www.facebook.com/restart.asso/">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        size="lg"
                    />
                    </a>
                    <a href="mailto:hello@restart-asso.org">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        size="lg"
                    />
                    </a>
                </span>
                <span>© Re:Start,  2019.</span>
            </div>
        </div>
    </footer>
)