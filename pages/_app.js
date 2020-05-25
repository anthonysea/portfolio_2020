import React from 'react';
import '../public/css/tailwind.css'

// Have to have Component and pageProps
export default function App({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}