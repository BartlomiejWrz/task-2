import React from 'react';

const UsersList = props => {

	const users = props.users.map(user => (
		<li key={user.login.uuid}>
			<h4>{`${user.name.first} ${user.name.last}`}</h4>
			<button onClick={props.click}>DELETE</button>
			<button >EDIT</button>
		</li>
	))
	return (
		<ul>
			{users}
		</ul>
	);
}

export default UsersList;