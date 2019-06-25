import React from 'react';

const UsersList = props => {

	const users = props.users.map(user => (
		<li key={user.login.uuid}>
			<h4>{`${user.name.first} ${user.name.last}`}</h4>
			<button onClick={props.delete}>DELETE</button>
			<form name="form">
				<input type="text" name="name" placeholder={user.name.first}></input>
				<input type="text" name="lastName" placeholder={user.name.last}></input>
				<input type="button" value="EDIT" onClick={props.change}></input>
			</form>
		</li>
	))
	return (
		<ul>
			{users}
		</ul>
	);
}

export default UsersList;