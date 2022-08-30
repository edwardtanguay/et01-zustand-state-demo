import { useState } from 'react';
import './App.scss';

function App() {
	const [message, setMessage] = useState('');

	return (
		<div className="App">
			<h1>Zustand Demo</h1>
			<main>
				<section className="controlArea">
					<div className="data">
						<label>Message:</label>
						<input
							autoFocus
							type="text"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						TEST: {message}
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
