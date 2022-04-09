import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {Spinner, Container, Button, Form} from 'react-bootstrap';
import Particle from '../Particle';
import {BASE_URL} from '../../Api';
// import '../../style.css'
import '../Login/login.css'

const Signup = () => {
    const [credentials, setCredentials] = useState({username:"", email:"", password:""});
    const [loading, setLoading] = useState(false);
    let history = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        const response = await fetch(`${BASE_URL}user/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: credentials.username, email: credentials.email, password: credentials.password})
        });
        setLoading(false);
        const json = await response.json();
        console.log(json);
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
                <div className="tit">SignUp</div>
                <Form onSubmit={handleSubmit}>
                    <div className="field">
                        <span className="fa fa-user photu"></span> 
                        <input className="inn" type="text" placeholder="Username" value={credentials.username} onChange={onChange} id="username" name="username" required />
                
                    </div>
                    <div className="field">
                        <span className="fa fa-envelope photu"></span> 
                        <input className="inn" type="email" placeholder="Email" value={credentials.email} onChange={onChange} id="email" name="email" required />
                    </div>
                    <div className="field">
                        <span className="fa fa-lock photu"></span>
                        <input className="inn" type="password"  value={credentials.password} onChange={onChange} id="password" name="password" placeholder="Password" required/>
                    </div>
                    
                    <Button type="submit" className="buton">Sign Up</Button>

                </Form>
        </div>
    </>
  )
}

export default Signup