import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
// import Button from './Button/Button';
// Styles
import { Wrapper } from './Login.styles';
// Context
import { Context } from './Context';


export default function Login() {
//     const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false);

//   const [_user, setUser] = useContext(Context);
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     setError(false);
//     try {
//       // Authenticate User here if true then setUser()
//       navigate('/');
//     } catch (error) {
//       setError(true);
//     }
//   };

//   const handleInput = e => {
//     const name = e.currentTarget.name;
//     const value = e.currentTarget.value;

//     if (name === 'username') setUsername(value);
//     if (name === 'password') setPassword(value);
//   };

    let username = "om";
    let password = "abc";
    let handleInput = () => {}
    let error = false;

    return (
        <Wrapper>
      <label>Enter your information:</label>
      <div>
     <label>username</label>
      <input 
        autocomplete="off"
        type='text'
        value={username}
        name='username'
        onChange={handleInput}
        required
      />
     
      </div>
      <div>
          <label>password</label>
      <input
        type='password'
        value={password}
        name='password'
        onChange={handleInput}
        required
      />
      
      </div>
      {error && <div className='error'>Check your username or password!</div>}
      {/* <Button text='Login' callback={handleSubmit} /> */}
      {/* Button bnavanu baki hji */}

    </Wrapper>
    )
}


// export default Login;