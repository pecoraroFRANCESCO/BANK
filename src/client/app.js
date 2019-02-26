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
import {css, injectGlobal} from "emotion";

injectGlobal({
    "*": {
        margin: 0,
        padding: 0,
    },

    html: {
        background: "#dadfdb",
    },

    body: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

    "#app": {
        display: "flex",
    },
});

const styles = {
    container: css({
        flexDirection: "columns",

        width: "700px",
    }),

    position: css({
        marginTop: "10px",
    }),
};

ReactDOM.render(
    <div className={styles.container}>
        <Header />
        <Carte />
        <InfoBar />
    </div>,

    document.querySelector("#app"),
);
