import React, { Component } from 'react';
import myImage from '../myImage.jpg';

export default class Cc extends Component {
	state = {
		Person: {
			fullName: 'Med Ali BEN NASR',
			bio: 'I love myself',
			imgSrc: myImage,
			profession: 'Web Devloper and Logistic'
		},
		show: true,
		timer: 0
	};

	componentDidMount() {
		setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
	}
	render() {
		return (
			<div>
				<h3>{this.state.timer}</h3>
				{this.state.show && (
					<div style={{ textAlign: 'center' }}>
						<h1>{this.state.Person.fullName}</h1>
						<img src={this.state.Person.imgSrc} alt="Naruto" style={{ borderRadius: '50%' }} />
						<h1>{this.state.Person.profession}</h1>
						<h1>{this.state.Person.bio}</h1>
					</div>
				)}
			</div>
		);
	}
}
