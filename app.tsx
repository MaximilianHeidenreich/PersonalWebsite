import React, { ComponentType } from 'https://esm.sh/react'
import { Head } from './deps.ts'

// Other deps
// import ScrollReveal from 'https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/scrollreveal/index.d.ts'
//import * as ScrollReveal from 'https://unpkg.com/scrollreveal@4.0.7/dist/scrollreveal.min.js'

// Styles
//import "./style/vendor/tailwind.css"
//import "./style/vendor/repaintless.min.css"

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {

    // Setup ScrollReveal
    /// <reference types="scrollreveal" />
    //ScrollReveal().reveal('.timelineItem');

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>🚧</title>

                {/* Additional Fonts */}

                {/* Additional Scripts */}
                {/*<script src="https://unpkg.com/scrollreveal@4.0.7/dist/scrollreveal.min.js"></script>*/}
            </Head>
            <Page {...pageProps} />
        </>
    )
}
