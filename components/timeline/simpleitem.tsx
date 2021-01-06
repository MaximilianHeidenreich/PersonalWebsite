import React from 'https://esm.sh/react'

// Components
import TimelineItem from './item.tsx'

export default function SimpleItem() {
    return (
        <TimelineItem>
            <div className="flex justify-between p-6">
                <div className="flex-grow mr-12 max-w-screen-md">
                    <div className="flex-col justify-between">
                        <div>
                            <h1 className="text-gray-800 font-bold text-3xl leading-tight mb-1">My sample project</h1>
                            <p className="text-gray-700 text-xl">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div>
                            <p>Author</p>
                            <a href="/">Visit post</a>
                        </div>
                    </div>
                </div>
                <div className="flex-none">
                    <img className="rounded-lg border-none" src="https://via.placeholder.com/250"></img>
                </div>
            </div>
        </TimelineItem>
    )
}