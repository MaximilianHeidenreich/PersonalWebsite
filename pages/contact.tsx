import { Import, useDeno } from '../deps.ts'
import React, { useState } from 'https://esm.sh/react'

// Styles
import "../style/util.less"

// Components
import Logo from '../components/logo.tsx'

export default function Home() {

    const [count, setCount] = useState(0)

    return (
        <div className="page">
            <Import from="../style/index.less" />
            <p className="logo"><Logo /></p>
            <h1><strong>Maximilian Heidenreich</strong></h1>
            <p className="links">
                <a href="https://www.maximilian-heidenreich.de" target="">Website</a>
                <span>&middot;</span>
                <a href="https://github.com/MaximilianHeidenreich" target="_blank">Github</a>
                <span>&middot;</span>
                <a href="https://songwhip.com/m4xu" target="_blank">Music</a>
                <span>&middot;</span>
                <a href="/contact" target="">Contact</a>
            </p>
            {/*
            <p className="counter">
                <span>Counter:</span>
                <strong>{count}</strong>
                <button onClick={() => setCount(n => n - 1)}>-</button>
                <button onClick={() => setCount(n => n + 1)}>+</button>
            </p>
            <p className="copyinfo">Created by Maximilian Heidenreich</p>
             */}

        </div>
    )
}
