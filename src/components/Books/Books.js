import React, { Component } from 'react';
import classes from "./Books.module.css"

import UsersList from "../UsersList/UsersList";


const API = 'https://randomuser.me/api/?results=5';

class Books extends Component {
	state = {
		users: null,
	}

	componentDidMount() {
		fetch(API)
			.then(response => {
				if (response.ok) {
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
	}

	handleDeleteUser = (uuid) => {
		console.log(uuid)
		let users = [...this.state.users];
		users = users.filter(user => user.login.uuid !== uuid)
		this.setState({
			users
		})
	}

	handleChangeData = (e) => {
		console.log(e.target.form.name.value, e.target.form.lastName.value);

		// for (let i = 0; i < this.state.users.length; i++) {
		// 	let name = e.target.form.name.placeholder
		// 	let newName = e.target.form.name.value;
		// 	let newLastName = e.target.form.lastName.value;
		// 	if (this.state.users[i].name.first === name) {
		// 		console.log(i)
		// 		this.setState({
		// 			users: {
		// 				[i]: {
		// 					name: {
		// 						first: newName,
		// 						last: newLastName,
		// 					}
		// 				}
		// 			}
		// 		})
		// 	}
		// }
	}


	render() {
		const users = this.state.users;
		return (
			<div className={classes.books} >
				{users ? <UsersList users={users} delete={this.handleDeleteUser} change={this.handleChangeData} /> : users}
			</div >
		)
	}
}

export default Books;