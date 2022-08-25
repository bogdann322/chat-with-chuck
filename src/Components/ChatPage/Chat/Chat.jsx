import React from 'react'

import styles from './Chat.module.css'

const Chat = ({ avatar, messages }) => {
	return (
		<div className={styles.chatBlock}>
			{messages.map((message) => (
				<div className={styles.chatBlockItems} key = {message.message}>
					{!message.myMessage ? (
						<div>
							<img src={avatar} alt='profile_photo' />
						</div>
					) : null}
					<div>
						<span className={styles.span}>{message.message}</span>
						<p>{`${message.date}, ${message.time} `}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Chat
