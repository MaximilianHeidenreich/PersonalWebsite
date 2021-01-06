import { Import, useDeno } from '../deps.ts'
import React, { useState } from 'https://esm.sh/react'

// Styles
import "../style/util.less"

// Components
import Logo from '../components/logo.tsx'
import Timeline from '../components/timeline/timeline.tsx'

export default function Home() {
    const [count, setCount] = useState(0)
    const version = useDeno(() => {
        return Deno.version
    })

    return (
        <div className="w-full h-auto bg-pattern-squiggles">
            <div className="container mx-auto">
                <Import from="../style/index.less" />

                {/* HEADER */}
                <div className="container mx-auto mt-20 mb-20 px-4 element-animated slide-from-bottom long">
                    <div className="flex">
                        <Logo />
                        <div className="pt-4">
                            <h1 className="text-4xl mb-4">🙋‍♂️ <strong>Feel free to explore...</strong></h1>
                            <p className="shortcuts">
                                <p>Shortcuts</p>
                                <div className="flex">
                                    <a href="https://alephjs.org" target="_blank">Home</a>
                                    <svg className="ml-1 w-3 text-indigo-700 stroke-current stroke-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                                    <a className="ml-1" href="https://alephjs.org/docs" target="_blank">Projects</a>
                                    <svg className="ml-1 w-3 text-indigo-700 stroke-current stroke-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                                    <a className="ml-1" href="https://alephjs.org/docs" target="_blank">Blog</a>
                                    <svg className="ml-1 w-3 text-indigo-700 stroke-current stroke-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                                    <a className="ml-1" href="https://alephjs.org/docs" target="_blank">Contact</a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Timeline Controls */}
                <div className="container mx-auto bg-red-400">
                    <p>Search</p>
                    <p>Sort Ascending, Descending</p>
                </div>

                {/* Timeline */}
                <Timeline />

            </div>
        </div>
    )
}
