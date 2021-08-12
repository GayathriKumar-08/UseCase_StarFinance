import React, { useState,useEffect} from 'react';
import './Login.css';
import { useHistory } from "react-router-dom";
import Navadmin from './Navadmin';
import Auth from './Auth';
import axios from 'axios';

export default function AdminLogin() {
    const history = useHistory();

    const [auth,setAuth] = useState({
        username:"",
        password:""
    });

    const handleChange = (e) => {
        const {name,value} = e.target;

        setAuth((prev)=> {
            return {
                ...prev,
                [name]:value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (auth.username.trim() === "") {
            alert("No Username");
            return;
        }
            
        
        if (auth.password.trim() === "") {
            alert("No Password");
            return;
        }

        axios.post("http://localhost:8081/authenticate",auth).then((res)=>{
            console.log(JSON.stringify(res));
            console.log(res.data.token);
            console.log(res.data.roles);
            let authdata = new Auth(res.data.token,res.data.roles);
            //authdata = new Auth('',[]);
            console.log(JSON.stringify(auth));
            sessionStorage.setItem("auth",JSON.stringify(authdata));
            history.push('/admindashboard');
        }).catch(err =>{
            console.error(err);
            history.push('/error/100');
        })
    }

    useEffect(()=>{
        sessionStorage.removeItem("auth");
    },[]);

    return (
        <div>
            <div>
            <nav class="navbar navbar-expand-sm">
                    <img src="starlogo2.png" alt="logo" />
                    <label className="lab">Star Finance</label>
                </nav>
            </div>
            <div className="card">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div>
                                <form onSubmit={handleSubmit} class="box">
                                    <h1>Login</h1>
                                    <p class="text-muted"> Please enter your login and password!</p>

                                    <input type="text" name="username" value={auth.username} placeholder="Username" onChange={handleChange} />

                                    <input type="password" name="password" value={auth.password} placeholder="Password" onChange={handleChange} />
                                   
                                    <button type="submit" name="login" value="login">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

