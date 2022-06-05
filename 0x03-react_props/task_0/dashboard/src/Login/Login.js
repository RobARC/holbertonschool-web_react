import React, { Fragment } from 'react';
import './Login.css';


export function Login(props) {
    return (
        <Fragment>
            <div className="Login">
                <p>Login to access the full dashboard</p>
                <label htmlFor="Email">Email</label>
                <input type="text" id="Email" name="Email" placeholder="Email..."></input>
                <label htmlFor="Password">Password</label>
                <input type="password" id="Password" name="Password" placeholder="Password..."></input>
                <button>OK</button>
            </div>
        </Fragment>
    );
};
