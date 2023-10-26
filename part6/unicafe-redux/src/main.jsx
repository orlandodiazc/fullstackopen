import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './store.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderMain = () => {
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}

renderMain()
store.subscribe(renderMain)
