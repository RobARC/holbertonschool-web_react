import React, { Fragment } from 'react';
import { StyleSheet, css } from "aphrodite";

export default function Login(props) {
    return (
        <Fragment>
            <div className={css(styles.Login)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor="Email">Email</label>
                <input type="email" id="Email" name="Email" placeholder="Email..."></input>
                <label htmlFor="Password">Password</label>
                <input type="password" id="Password" name="Password" placeholder="Password..."></input>
                <button>OK</button>
            </div>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    login: {
        margin: "50px",
        flexGrow: 1,
    },

    loginInput: {
        marginLeft: "10px",
        marginRight: "20px",
    },
});