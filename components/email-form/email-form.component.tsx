import React from 'react';
import styles from  './EmailForm.module.scss';

import { IconContext } from "react-icons";
import { BsArrowRight } from 'react-icons/bs';


const EmailForm: React.FC = () => {
    return (
        <form className={styles.emailFormContainer}>
            <input type="text" placeholder='Subscribe' id={styles.emailInput}/>
            <div className={styles.submitButton}>
                <IconContext.Provider value={{ className: "arrow-right-email" }}>
                    <BsArrowRight />
                </IconContext.Provider>
            </div>
        </form>
    );
}

export default EmailForm;
