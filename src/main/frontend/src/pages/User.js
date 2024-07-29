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
	const [ nextUserId, setNextUserId ] = useState( userList.length );
	const [ regMode, setRegMode ] = useState( false );
	const [ updateUserId, setUpdateUserId ] = useState(null );
	const modRegMode = ( mode ) => {
		setRegMode( mode );
	}
	const addUserInfo = ( e ) => {
		e.preventDefault();
		let username = document.getElementById( 'username' ).value;
		let email = document.getElementById( 'email' ).value;
		
		if ( '' === username || '' === email ) {
			alert( "필수값을 입력하세요" );
			return;
		}
		let userObj = {
			id : nextUserId,
			name : username,
			email : email
		}
		let _userList = [ ...userList ];
		_userList.push( userObj );
		setNextUserId( nextUserId + 1 );
		setUserList( _userList );
		modRegMode( !regMode );
	}
	
	const deleteUser = ( userObj ) => {
		let _userList = userList.filter( item => item.id !== userObj.id );
		setUserList( _userList );
		setNextUserId( nextUserId - 1 );
	}
	
	const updateUser = function( userObj ) {
		console.log( userObj );
		// 테이블의 해당 id 를 가진 td 태그의 요소들을
		// input form 으로 변경시킨다.
		setUpdateUserId( userObj.id );
	}
	
	return (
		<div className="userDiv">
			<h1>User</h1>
			<ul>
				<li>추가 : form노출 / 사용자를 추가할 수 있다.</li>
				<li>삭제 : 한 줄 바로 삭제</li>
				<li>수정 : table내에서 내용 변경가능</li>
			</ul>
			<div className="textAlignRight">
				<button onClick={ (e)=>{ modRegMode( !regMode ) }}>{ regMode ? '취소' : '추가' }</button>
			</div>
			{ regMode && (
				<div>
					<form style={ { "textAlign" : "right"}}>
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
				<UserList userList={ userList }
				          deleteUser={ deleteUser }
				          updateUser={ updateUser }
				          updateUserId = {updateUserId}
				          setUpdateUserId = { setUpdateUserId }
				          setUserList = { setUserList }
				></UserList>
			</div>
		</div>
	);
}

function UserList( props ) {
	
	const list = [];
	const [ name, setName ] = useState( '' );
	const [ email, setEmail ] = useState( '' );
	
	const onChangeName = ( e ) => {
		setName( e.target.value );
	}
	const onChangeEmail = ( e ) => {
		setEmail( e.target.value );
	}
	
	for ( let item of props.userList ) {
		
		let isUpdateRow = item.id === props.updateUserId;
		
		list.push(
			<tr key={ item.id } id={ item.id } onClick={ e => {
				// console.log( item.id );
			} }>
				<td>{ item.id }</td>
				<td>{ isUpdateRow ? <input type={"text"} defaultValue={item.name} onChange={ onChangeName }/> : item.name }</td>
				<td>{ isUpdateRow ? <input type={"text"} defaultValue={item.email} onChange={ onChangeEmail } /> : item.email }</td>
				<td>
					{
						isUpdateRow ?
							<>
								<button type={ "button" } onClick={ ( e ) => {
									props.setUpdateUserId( null );
								} }>취소
								</button>
								<button type={ "button" } onClick={ ( e ) => {
									let _userList = [ ...props.userList ];
									let userObj = _userList.filter( u => u.id === item.id )[0];
									userObj.name = name;
									userObj.email = email;
									props.setUserList( _userList );
									props.setUpdateUserId( null );
								} }>완료
								</button>
							</>
							:
							<>
								<button type={ "button" } onClick={ ( e ) => {
									props.deleteUser( item );
								} }>삭제
								</button>
								<button type={ "button" } onClick={ ( e ) => {
									props.updateUser( item );
									setName( item.name );
									setEmail( item.email );
								} }>수정
								</button>
							</>
					}
				</td>
			</tr>
		)
		;
	}
	
	return <table className={ "yjTable" }>
		<thead>
		<tr>
			<th>아이디</th>
			<th>이름</th>
			<th>이메일</th>
			<th>비고</th>
		</tr>
		</thead>
		<tbody>{ list }</tbody>
	</table>
}

export default User;
