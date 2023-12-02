import React, { useState } from 'react'
import styles from './Header.module.css'
import { GoPlus } from 'react-icons/go'

const Header = ({ onAddTask }) => {
	const [title, setTitle] = useState('')

	const handleSubmit = event => {
		event.preventDefault()
		onAddTask(title)
		setTitle('')
	}

	const onChangeTitle = event => {
		setTitle(event.target.value)
	}

	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<h1>ToDo App</h1>
			</div>
			<form onSubmit={handleSubmit} className={styles.taskForm}>
				<input
					type='text'
					placeholder='Add a new task'
					value={title}
					onChange={onChangeTitle}
				/>
				<button className={styles.btn}>
					<div>Add Task</div> <GoPlus className={styles.btnIcon} />
				</button>
				<button className={styles.btnMobile}>
					<GoPlus className={styles.btnMobileIcon} />
				</button>
			</form>
		</header>
	)
}

export default Header
