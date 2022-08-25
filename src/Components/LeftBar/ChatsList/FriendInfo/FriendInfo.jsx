import React from 'react';


import styles from './FriendInfo.module.css'

const FriendInfo = ({miniAvatar, name, message, date, id, getUserId, newMessage, idForMessage}) => {
    
    return (
        <div className={id === idForMessage && newMessage ? `${styles.chatList} ${styles.blockInfo}` : styles.blockInfo} onClick={()=> getUserId(id)}>
            <div className={styles.img}>
                <img src={miniAvatar} alt="friend logo" />
            </div>
            <div className={styles.blockData}>
                <div>
                    <div>{name}</div>
                    <div>{message}</div>
                </div>
                <div className={styles.date}>
                    {date}
                </div>
            </div>
        </div>
    );
};

export default FriendInfo;