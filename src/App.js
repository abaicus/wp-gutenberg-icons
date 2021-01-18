import './App.scss';
import IconsList from './IconsList';
import { useState } from 'react';

const App = () => {
	const [ search, setSearch ] = useState( '' );
	return (
		<div className="wp-icons-list">
			<header>
				<h1>WordPress Editor Icons List</h1>
				<input
					type="search"
					placeholder="Search for Icons"
					onChange={ ( e ) => {
						setSearch( e.target.value );
					} }
					value={ search }
				/>
			</header>
			<IconsList search={ search } />
		</div>
	);
};

export default App;
