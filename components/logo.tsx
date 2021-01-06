import React from 'https://esm.sh/react'

export default function Logo({ width = 125 }: { width?: number }) {
    return (
        <img className="border-none" src="/logo.svg" width={width} title="Aleph.js" />
    )
}
