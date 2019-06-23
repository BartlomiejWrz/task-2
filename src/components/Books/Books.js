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


	render() {
		const users = this.state.users;
		return (
			<div className={classes.books} >
				{users ? <UsersList users={users} /> : users}
			</div >
		)
	}
}

export default Books;