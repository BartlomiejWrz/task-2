import React, { Component } from 'react';
import classes from "./Books.module.css"

import UsersList from "../DownloadButton/DownloadButton";


const API = 'https://randomuser.me/api/?results=5';

class Books extends Component {
	state = {
		users: null,
	}

	componentDidMount() {
		fetch(API)
			.then(response => {
				if (response.ok) {
					console.log(response)
					return response;
				}
				throw Error(response.status)
			})
			.then(response => response.json())
			.then(data => {
				this.setState({
					users: data.results
				})
			})
			.catch(console.log(error => console.log(error)))
	}

	// handleDownloadUsers = () => {
	// 	this.state.users.map(user => (
	// 		<div key={user.login.uuid}>
	// 			<h4>{`${user.name.first} ${user.name.last}`}</h4>
	// 		</div>
	// 	));
	// }

	render() {
		const users = this.state.users;
		return (
			<div className={classes.books} >

				{/* <DownloadButton click={this.handleDownloadUsers}> > */}
				{/* {this.state.users ? <div>{this.handleDownloadUsers}<div /> : this.state.users} */}

				{users ? <UsersList users={users} /> : users}
			</div >
		)
	}
}

export default Books;