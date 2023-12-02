import React from 'react'
import styles from './Task.module.css'
import { GoTrash, GoCheck } from 'react-icons/go'

const Task = ({ task, onComplete, onDelete }) => {
	return (
		<div
			className={`${styles.task} ${
				task.isCompleted ? styles.taskCompleted : ''
			}`}
		>
			<p>{task.title}</p>
			<div className={styles.controls}>
				<button className={styles.complete} onClick={() => onComplete(task.id)}>
					<GoCheck className={`${styles.icon} ${styles.completeIcon}`} />
				</button>
				<button className={styles.delete} onClick={() => onDelete(task.id)}>
					<GoTrash className={`${styles.icon} ${styles.deleteIcon}`} />
				</button>
			</div>
		</div>
	)
}

export default Task
