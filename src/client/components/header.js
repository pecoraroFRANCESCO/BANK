import * as React from "react";
import {css} from "emotion";
import Cbank from "../img/Cbank.png";

const styles = {
    font: css({
        fontFamily: "Yellowtail",
        color: "black",
        opacity: "0.8",
        padding: "0 81px",
    }),

    mod: css({
        height: "30px",
        width: "30px",
        opacity: "0.6",
    }),

    container: css({
        display: "flex",
        transform: "rotate(-.3deg)",

        marginTop: "60px",
        marginBottom: "10px",
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
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <h1 className={styles.font}>{"Find Bank"}</h1>
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
            </div>
        );
    }
}
