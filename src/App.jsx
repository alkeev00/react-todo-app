import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import ListTasks from './components/ListTasks/ListTasks'
import Footer from './components/Footer/Footer'

const LOCAL_STORAGE_KEY = 'todo:savedTasks'

function App() {
	const [tasks, setTasks] = useState([])

	const getSavedTasks = () => {
		const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
		if (saved) {
			setTasks(JSON.parse(saved))
		}
	}

	useEffect(() => {
		getSavedTasks()
	}, [])

	const setTasksAndSave = newTasks => {
		setTasks(newTasks)
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
	}

	const addTask = taskTitle => {
		setTasksAndSave([
			...tasks,
			{
				id: crypto.randomUUID(),
				title: taskTitle,
				isCompleted: false,
			},
		])
	}

	const deleteTask = taskId => {
		const newTasks = tasks.filter(task => task.id !== taskId)
		setTasksAndSave(newTasks)
	}

	const toggleTaskCompleted = taskId => {
		const newTasks = tasks.map(task => {
			if (task.id === taskId) {
				return {
					...task,
					isCompleted: !task.isCompleted,
				}
			}
			return task
		})
		setTasksAndSave(newTasks)
	}

	return (
		<div className='container'>
			<Header onAddTask={addTask} />
			<ListTasks
				tasks={tasks}
				onComplete={toggleTaskCompleted}
				onDelete={deleteTask}
			/>
			<Footer />
		</div>
	)
}

export default App
