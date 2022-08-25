import React from 'react';

import styles from './Header.module.css'

const Header = ({avatar, name}) => {
    return (
        <div className={styles.header}>
            <img src={avatar} alt="profile photo" />
            <h3>{name}</h3>
        </div>
    );
};

export default Header;