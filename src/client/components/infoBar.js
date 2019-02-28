import * as React from "react";

import {css} from "emotion";

import icon from "../img/home.png";

const styles = {
    container: css({
        display: "flex",
        border: "7px solid white",
        height: "100px",
        backgroundColor: "#acacac",
        marginTop: "30px",
        boxShadow: "7px 20px 30px #333",
        transform: "rotate(.3deg)",

        // "&:before": {
        // 	content: '""',
        //     top: "52px",
        //     left: "5px",
        //     transform: "rotate(-5deg)",
        //     boxShadow: "7px 6px 15px #333",
        // },

        // "&:after": {
        // 	content: '""',
        //     top: "52px",
        //     right: "5px",
        //     transform: "rotate(5deg)",
        //     boxShadow: "-7px 6px 15px #333",
        // },
    }),
    left: css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
    }),
    right: css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
    }),
    h1: css({
        alignItems: "center",
        justifyContent: "center",
    }),
    icon: css({
        width: "20px",
        height: "20px",
    }),
    font: css({
        fontSize: "20px",
    }),
};

export default class InfoBar extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1 className={styles.h1}> {"imageB"} </h1>
                </div>
                <div className={styles.right}>
                    <h3>{"Nom de la banque"}</h3>
                    <p className={styles.font}>
                        {"Rue de Mulhouse 36, 4020 Liège"}
                    </p>
                    <p className={styles.font}>
                        <img src={icon} className={styles.icon} />
                        {"2km"}
                    </p>
                </div>
            </div>
        );
    }
}
