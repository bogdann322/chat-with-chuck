import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import axios from 'axios';

import Chat from './Chat/Chat';
import Header from './Header/Header';
import SendForm from './SendForm/SendForm';
import styles from './ChatPage.module.css'
import { addNewMessageAction, setAnswerAction, idForMessageAction } from '../store/chatsReducer';

const ChatPage = ({setNewMessage, newMessage}) => {
    const [ableToWrite, setAbleToWrite] = useState(false)

    const dispatch = useDispatch()
    const chatUsers = useSelector(state => state.chatUsers.chatUsers)
    const selectedId = useSelector(state => state.chatUsers.selectedId)
    const chucksAnswer = useSelector(state => state.chatUsers.answer)

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(chatUsers));
    }, [chatUsers[selectedId-1].messages.length]);

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
            dispatch(setAnswerAction(response.data.value))
        });
      }, [dispatch,chatUsers[selectedId-1].messages.length]);

    const Data = ( message, myMessage) => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = Date.now();

        return {
            message: message,
            date: `${day}/${month+1}/${year-2000}`,
            time: `${hours}:${minutes}`,
            seconds:seconds,
            myMessage: myMessage,
        }
    }
    const addnewMessage = (message, setMessage) => {
        setAbleToWrite(true)
        dispatch(idForMessageAction(selectedId))  
        
        dispatch(addNewMessageAction(Data(message, true)))
        setMessage('')
        
        setTimeout(() => {
            dispatch(addNewMessageAction(Data(chucksAnswer, false)))
            setNewMessage(true)
            alert(`You have a new message from ${chatUsers[selectedId -1].name}`)
            setAbleToWrite(false)
          }, 10000);
    }
    
    return (
        <div className={styles.block}>
            <Header avatar={chatUsers[selectedId -1].avatar} name = {chatUsers[selectedId -1].name}/>
            <Chat avatar={chatUsers[selectedId -1].avatar} messages={chatUsers[selectedId -1].messages}/>
            <SendForm addnewMessage={addnewMessage} newMessage={newMessage} ableToWrite={ableToWrite}/>
        </div>
    );
};

export default ChatPage;