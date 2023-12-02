import React from 'react'
import styles from './ListTasks.module.css'
import Task from '../Task/Task'

const ListTasks = ({ tasks, onComplete, onDelete }) => {
	const tasksQuantity = tasks.length
	const tasksCompleted = tasks.filter(task => task.isCompleted).length

	return (
		<section className={styles.tasks}>
			<div className={styles.tasksStatus}>
				{tasksQuantity == 0 ? (
					<p>No tasks created</p>
				) : (
					<>
						<p>Tasks completed</p>
						<span>
							{tasksCompleted} of {tasksQuantity}
						</span>
					</>
				)}
			</div>
			<div className={styles.listTasks}>
				{tasks.map(task => (
					<Task
						key={task.id}
						task={task}
						onComplete={onComplete}
						onDelete={onDelete}
					/>
				))}
			</div>
		</section>
	)
}

export default ListTasks
