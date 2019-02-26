import * as React from "react";
import {css} from "emotion";
import Cbank from "../img/Cbank.png";

const styles = {
    color: css({
        color: "black",
    }),

    mod: css({
        height: "30px",
        width: "30px",
        opacity: "0.33",
    }),

    container: css({
        display: "flex",
        border: "1px solid black",
        background: "red",
    }),
};

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <h1 className={styles.color}>{"Find Bank"}</h1>
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
            </div>
        );
    }
}
