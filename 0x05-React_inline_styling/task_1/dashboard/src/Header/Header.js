import { React } from "react";
import holbertonlogo from './holbertonlogo.jpg';
import { StyleSheet, css } from "aphrodite";

export default function Header(props) {
    return (
        <header className={css(styles.header)}>
            <img src={holbertonlogo} alt="Holberton Logo" />
            <h1>
                School dashboard
            </h1>
        </header>
    );
};

const cssVars = {
    mainColor: "#e01d3f",
};

const styles = StyleSheet.create({
    header: {
        display: "flex",
        alignItems: "center",
        color: cssVars.mainColor,
        fontSize: "20px",
    },

    headerImg: {
        width: "200px",
    },
});

