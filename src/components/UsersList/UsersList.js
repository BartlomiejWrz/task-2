import React from 'react';
import classes from "./UsersList.module.css"

const UsersList = props => {

	const users = props.users.map(user => (
		<div className={classes.li} key={user.login.uuid}>
			<h4>{`${user.name.first} ${user.name.last}`}</h4>
			<button onClick={() => props.delete(user.login.uuid)}>DELETE</button>

			{/* <form name="form">
				<input type="text" name="name" placeholder={user.name.first}></input>
				<input type="text" name="lastName" placeholder={user.name.last}></input>
				<input type="button" value="EDIT" onClick={props.change}></input>
			</form> */}

		</div>
	))
	return (
		<ul className={classes.ul}>
			{users}
		</ul>
	);
}

export default UsersList;