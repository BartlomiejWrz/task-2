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

	handleDeleteUser = (e) => {
		let arr_number = e.target.parentNode
		console.log(arr_number)
		e.target.parentNode.remove();
		// console.log(this.state.users)

	}


	render() {
		const users = this.state.users;
		return (
			<div className={classes.books} >
				{users ? <UsersList users={users} click={this.handleDeleteUser} /> : users}
			</div >
		)
	}
}

export default Books;