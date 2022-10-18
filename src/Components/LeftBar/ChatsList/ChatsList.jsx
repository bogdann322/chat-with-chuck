import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'

import FriendInfo from './FriendInfo/FriendInfo'
import styles from './ChatList.module.css'
import { selectIdAction } from '../../store/chatsReducer'

const ChatsList = ({ searchedName, setNewMessage, newMessage }) => {
	
	const dispatch = useDispatch()
	const chatUsers = useSelector((state) => state.chatUsers.chatUsers)
	const idForMessage = useSelector(state => state.chatUsers.idForMessage)
	const getUserId = (id) =>{
		dispatch(selectIdAction(id))
		setNewMessage(false)
	}

	let sortedUsers =	[...chatUsers].sort((a, b) => b.messages[b.messages.length - 1].seconds - a.messages[a.messages.length - 1].seconds)

	return (
		<div className={styles.block}>
			<h4>Chat</h4>
			{sortedUsers
				.filter((chatUser) =>
					chatUser.name
						.toLocaleLowerCase()
						.includes(searchedName.toLocaleLowerCase())
				)
				.map((chatUser) => (
					<FriendInfo
						miniAvatar={chatUser.miniAvatar}
						name={chatUser.name}
						message={chatUser.messages[chatUser.messages.length - 1].message}
						date={chatUser.messages[chatUser.messages.length - 1].date}
						key={chatUser.id}
						id={chatUser.id}
						getUserId={getUserId}
						idForMessage={idForMessage}
						newMessage={newMessage}
					/>
				))}
		</div>
	)
}

export default ChatsList
