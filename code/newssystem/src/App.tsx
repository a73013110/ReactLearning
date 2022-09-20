import axios from 'axios';
import { useEffect } from 'react';
import './App.css'
import Child from './Child';

function App() {
	useEffect(() => {
		axios.get("/bilibiliApi/x/web-interface/nav").then(res => {
			console.log(res)
		})
	}, [])


	return (
		<div>
			app
			<ul>
				<li>1111</li>
				<li>2222</li>
			</ul>

			<Child />
		</div>
	);
}

export default App;
