import React from 'https://esm.sh/react'

interface TimeLineProps {}

export default function TimelineItem(props: React.PropsWithChildren<TimeLineProps>) {
    return (
        <div className="container rounded-lg overflow-hidden mx-auto my-6 bg-white shadow-md timelineItem">
            { props.children }
        </div>
    )
}
