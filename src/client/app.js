/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Carte from "./components/carte";
import InfoBar from "./components/infobar";
import {css} from "emotion";

const styles = {
    html: css({
        padding: 0,
        margin: 0,
        background: "red",
    }),
};

ReactDOM.render(
    <div className={styles.html}>
        <Header />
        <Carte />
        <InfoBar />
    </div>,
    document.querySelector("#app"),
);
