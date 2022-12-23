import React from 'react'
import ReactDOM from 'react-dom/client'
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	color: #434140;
}
body {
	background-color: rgb(254, 248, 238);
}
a{
	text-decoration: none;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Global />
					<App />
				</PersistGate>
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
)
