import * as React from "react";

import {css} from "emotion";

const styles = {
    container: css({
        border: "1px solid black",
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
