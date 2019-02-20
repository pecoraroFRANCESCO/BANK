/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import * as React from "react";

export default class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>{"Hello, world!"}</h1>
                <hr />
                <small>{"becode/bookshelf"}</small>
            </div>
        );
    }
}
