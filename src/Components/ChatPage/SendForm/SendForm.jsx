import React, {useState} from 'react';

import styles from './SendForm.module.css'

const SendForm = ({addnewMessage,ableToWrite}) => {
    const [message, setMessage] = useState('');
    return (
        <div className={styles.blockInput}>
            <input type="text" placeholder='Type your message' className={styles.input} value={message} onChange={e => setMessage(e.target.value)}/>
            <button disabled={ableToWrite} onClick={()=> addnewMessage(message, setMessage)}>Send</button>
        </div>
    );
};

export default SendForm;