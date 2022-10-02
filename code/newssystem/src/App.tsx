import { Provider } from 'react-redux'
import './App.css'
import { store } from './redux/store';
import IndexRouter from "./router/IndexRouter";

function App() {
	return <Provider store={store}>
		<IndexRouter></IndexRouter>
	</Provider>
}

export default App;
