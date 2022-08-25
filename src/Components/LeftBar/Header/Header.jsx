import React from 'react'

import avatar from '../../../img/profile.png'
import styles from './Header.module.css'

const Header = ({setSearchedName}) => {
	return (
		<div className={styles.header}>
			<div>
				<img src={avatar} alt='profile logo' />
			</div>
			<div >
				<input type='text' placeholder='Search chat' className={styles.input} onChange= {(e)=>setSearchedName(e.target.value)}/>
			</div>
		</div>
	)
}

export default Header
