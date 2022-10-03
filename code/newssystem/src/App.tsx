import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css'
import { store } from './redux/store';
import IndexRouter from "./router/IndexRouter";

export const persistor = persistStore(store);

function App() {
	return <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<IndexRouter></IndexRouter>
		</PersistGate>
	</Provider>
}

export default App;
