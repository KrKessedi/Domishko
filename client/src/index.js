import React from 'react'
import ReactDOM from 'react-dom/client'
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  outline: none;
}

body {
  background-color: rgb(254, 248, 238);
}

a {
  text-decoration: none;
}
:root {
	--index: (1vw + 1vh)
}
`

root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Global />
					<App />
					<ToastContainer
						position='top-center'
						autoClose={1000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='colored'
					/>
				</PersistGate>
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
)
