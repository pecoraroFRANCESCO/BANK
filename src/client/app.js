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

ReactDOM.render(
    <div>
        <Header />
        <Carte />
        <InfoBar />
    </div>,
    document.querySelector("#app"),
);
