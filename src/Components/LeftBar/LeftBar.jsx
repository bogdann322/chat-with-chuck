import React, {useState} from 'react';

import ChatsList from './ChatsList/ChatsList';
import Header from './Header/Header';
import styles from './LeftBar.module.css'

const LeftBar = ({setNewMessage, newMessage}) => {

    const [searchedName, setSearchedName] = useState('');
    return (
        <div className={styles.block}>
            <Header setSearchedName={setSearchedName}/>
            <ChatsList searchedName={searchedName} setNewMessage={setNewMessage} newMessage={newMessage}/>
        </div>
    );
};

export default LeftBar;