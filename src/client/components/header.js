import * as React from "react";
import {css} from "emotion";

import Cbank from "../img/Cbank.png";

// injectGlobal({

// 	"@font-face":{
// 		"font-family": 'Rapha',
// 		src: url("../fonts/RaphaTalia.ttf") format('truetype'),
// 		font-weight: normal,
// 		font-style: normal,
// 	}
// });

const styles = {
    color: css({
        color: "black",
    }),

    // font: css({
    // 	font-family: 'Rapha',
    // }),

    mod: css({
        height: "30px",
        width: "30px",
        opacity: "0.33",
    }),
};

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className={styles.color}>{"Find Bank"}</h1>
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
                <img src={Cbank} className={styles.mod} />
            </div>
        );
    }
}
