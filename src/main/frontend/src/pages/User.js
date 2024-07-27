import { useState } from "react";
import '../App.css';

function User() {
	
	const [ userList, setUserList ] = useState([
		{
			id : 0,
			name : 'yoonjae',
			email : 'nyj9349@hanmail.net'
		},
		{
			id : 1,
			name : 'cheeeeze',
			email : 'nam8644@gmail.com',
		}]);
	const [ regMode, setRegMode ] = useState( false );
	const modRegMode = ( mode ) => {
		console.log( mode );
		setRegMode( mode );
	}
	const addUserInfo = ( e ) => {
		e.preventDefault();
		let username = document.getElementById( 'username' );
		let email = document.getElementById( 'email' );
		console.log( username );
		console.log( email );
	}
	
	return (
		<div className="userDiv">
			<h1>User</h1>
			<div className="textAlignRight">
				<button onClick={ (e)=>{ modRegMode( !regMode ) }}>{ regMode ? '취소' : '추가' }</button>
			</div>
			{ regMode && (
				<div>
					<form>
						<div>
							username : <input type="text" id="username" defaultValue=""/>
						</div>
						<div>
							email : <input type="text" id="email" defaultValue=""/>
						</div>
						<div>
							<button type="submit" onClick={ ( e ) => { addUserInfo( e ); }}>등록</button>
						</div>
					</form>
				</div>
			) }
			<div>
				<UserList userList={ userList }></UserList>
			</div>
		</div>
	);
}

function UserList( props ) {
	const list = [];
	for ( let item of props.userList ) {
		list.push(
			<tr key={ item.id } id={ item.id } onClick={ e => {
				console.log( item.id );
			} }>
				{/*<a href={ '/read/' + item.id }>{ item.title }</a>*/}
				<td>{ item.id }</td>
				<td>{ item.name }</td>
				<td>{ item.email }</td>
			</tr>
		);
	}
	
	return <table>
		<thead>
			<tr>
				<th>id</th>
				<th>username</th>
				<th>email</th>
			</tr>
		</thead>
		<tbody>{list}</tbody>
	</table>
}

export default User;
