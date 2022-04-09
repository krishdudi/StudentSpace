import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Spinner, Button, Form} from 'react-bootstrap';
import {BASE_URL} from '../../Api';
import './login.css'

const Login = () => {
    const [credentials, setCredentials] = useState({username:"", password:""});
    const [loading, setLoading] = useState(false);
    let history = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        const response = await fetch(`${BASE_URL}user/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: credentials.username, password: credentials.password})
        });
        setLoading(false);
        const json = await response.json();
        // console.log(json);
        if(json.status){
            //save the auth token and redirect
            localStorage.setItem('token', json.token);
            // console.log(localStorage.getItem('token'));
            history("/");
            // props.showAlert("Logged in successfully", "success");
        }else{
            alert('Invalid credentials');
            // props.showAlert("Invalid credentials", "danger");
        }
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <>
        {/* <Particle /> */}
        <div className="cnt">
                <div className="tit">LogIn</div>
                <Form onSubmit={handleSubmit}>
                    <div className="field">
                        <span className="fa fa-user photu"></span> 
                        <input className="inn" type="text" placeholder="Username" value={credentials.username} onChange={onChange} id="username" name="username" required />
                
                    </div>
                    <div className="field">
                        <span className="fa fa-lock photu"></span>
                        <input className="inn" type="password"  value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password" required/>
                    </div>
                    
                    <Button type="submit" className="buton" >Log in</Button>
                    {loading && (
                                <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    margin: "15px 0",
                                }}>
                                <Spinner animation="border" />
                                </div>
                            )}
                </Form>
                <div className="last">Don't have an account? <Link to="/signup">Sign Up</Link></div>
        </div>
    </>
  )
}

export default Login