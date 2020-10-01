import React from 'react';


function LoginPage(){
	return(
		<form action="/login" method="post">
			    <div>
			        <label>Email:</label>
			        <input type="text" name="email"/>
			    </div>
			    <div>
			        <label>Password:</label>
			        <input type="password" name="password"/>
			    </div>
			    <div>
			        <input type="submit" value="Log In"/>
			    </div>
			</form>
	);
}

export default LoginPage;