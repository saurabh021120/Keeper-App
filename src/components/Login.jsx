import React from "react";
import login_styles from './login_styles.css';

function Login(){
    return(
<div class="login">
<h3>LOGIN</h3>
<form method="post">
  <div class="in">
  <label><b>Username : </b></label>
  <input type="text" placeholder="Enter Username" name="em" required />

  <label><b>Password : </b></label>
  <input type="password" placeholder="Enter Password" name="pass" required />

  <button class="btn btn-primary login_button" type="submit" name="button">Login</button>
  <label>Don't have an account ? <a href="register">Register Here.</a></label>
</div>
</form>
</div>);
}

export default Login;
