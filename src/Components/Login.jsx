import React,  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from "../store/action/authAction";

import styles from "./login.module.css";

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginAction({ email, password }));
    };

    return (
        <div>
            <form onSubmit={loginHandler} >
                <input type="text" placeholder="Enter Your Email" className={styles.inputBox} value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder="Enter Your Password" className={styles.inputBox} value={password} onChange={(e) => setpassword(e.target.value)} />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;