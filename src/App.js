import React from 'react';
import './App.css';
import Cc from './Cc/Cc.jsx';

class App extends React.Component {
	state = {
		show: true
	};

	handleShowPerson = () => {
		this.setState({
			...this.state,
			show: !this.state.show
		});
	};

	render() {
		return (
			<div>
				<button
					onClick={this.handleShowPerson}
					style={{
						backgroundColor: '#FEF9EF',
						width: '20%',
						fontSize: '30px',
					
					}}
				>
					{' '}
					{this.state.show ? 'Hide Med Ali' : 'Show Med Ali'}{' '}
				</button>

				{this.state.show && <Cc />}
			</div>
		);
	}
}

export default App;
