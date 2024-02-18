import * as React from "react";
import { Helmet } from "react-helmet"

function App({children}) {
    return(
        <>
        <Helmet>
            <title>
                {children}
                {' '}
                |
                شرکت دانا الکترونیک آرمین
            </title>
        </Helmet>
        </>
    )
}

export default App