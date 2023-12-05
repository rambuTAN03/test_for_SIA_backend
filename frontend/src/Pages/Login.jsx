
import NavBar from '../components/NavBar';

import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleLoginToDashboard = () => navigate('/Dashboard');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin ( event ) {
    event.preventDefault();
    let userData = { user: username, password: password };
    //fetch( '/api/login', {
    fetch( '/api/auth', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify ( userData )
    })
    .then ( response => response.json() )
    .then ( data => {console.log( data );
                    Test(data.login, data.usertype);
                  })
    
    console.log( "clicked login" )

    
  }

  function Test(login, usertype){
    if(login===true){
      handleLoginToDashboard();
    }
  }
  
  return (

    <>

      <NavBar />

      <div className="content" style={{ marginTop: '2.9rem'}}>

          <Card className='credentials'>

            <h1>Login</h1>

            <div className="addPanel">

              <InputText id="username" placeholder='Email Address'aria-describedby="username-help" 
              onChange={(e) => setUsername(e.target.value)} />
            
            </div>

            <div className="passPanel">

              <Password inputStyle={{ width: "100%" }}
                id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} feedback={false}
                toggleMask />
           
            </div>

            <div className="loginButtons">

              <Button className='loginb' label="Login" onClick={handleLogin} />
              <Button icon='pi pi-google' className='loginG' label="Login with Google"/>

            </div>

            <div className="signin">

              <h3>
                Dont have an account?  <a href='/Signin'>Signin</a>
              </h3>

            </div>

          </Card>

      </div>

      

    </>
  )
}
export default Login
