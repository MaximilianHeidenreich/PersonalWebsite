import { Import, useDeno } from '../../deps.ts'
import React from 'https://esm.sh/react'


// Components
import FullImageItem from './fullimageitem.tsx'
import SimpleItem from './simpleitem.tsx'

export default function Timeline() {
    return (
        <div className="container mx-auto flex-col">
            <Import from="../../style/timeline.less" />
            <FullImageItem />
            <SimpleItem />
        </div>
    )
}