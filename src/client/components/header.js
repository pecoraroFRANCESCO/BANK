import * as React from "react";
import {css} from "emotion";

const styles = {
    aa: css({
        color: "bleu",
    }),
};

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className={styles.aa}>{"header"}</h1>
            </div>
        );
    }
}
