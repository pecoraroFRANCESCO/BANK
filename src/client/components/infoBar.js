import * as React from "react";

import {css} from "emotion";

const styles = {
    container: css({
        border: "7px solid white",
        height: "100px",
        backgroundColor: "#acacac",
        marginTop: "30px",

        "&:before": {
            top: "52px",
            left: "5px",
            transform: "rotate(-5deg)",
            boxShadow: "7px 6px 15px #333",
        },

        "&:after": {
            top: "52px",
            right: "5px",
            transform: "rotate(5deg)",
            boxShadow: "-7px 6px 15px #333",
        },
    }),
};

export default class InfoBar extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1> {"Info Bar"} </h1>
            </div>
        );
    }
}
