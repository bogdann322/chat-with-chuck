import React from 'react';

import styles from './NoChat.module.css'

const NoChat = () => {
    return (
        <div className={styles.block}>
            <h1>You did not choose a chat</h1>
        </div>
    );
};

export default NoChat;