import React from 'react'
import styles from './app.modules.scss'

const OnClickEvent = (e) => {
	e.preventDefault()
	alert('Clicked')
}

const App = () => {
	return (
			<div className={styles.content}>
				<div className={styles.label}>
					Create without CRA
				</div>
				<button className={styles.button} onClick={OnClickEvent}>Click Me!</button>
			</div>
		)
}

export default App