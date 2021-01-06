import React from 'https://esm.sh/react'

// Components
import TimelineItem from './item.tsx'

export default function FullImageItem() {
    return (
        <TimelineItem>
            <div className="w-full h-40 " style={{ backgroundImage: 'url(\'https://web2tailwind.com/assets/docs/master/image-01.jpg\')' }}>
                <div className="flex items-end w-full h-full">
                    <div className="px-4 py-2">
                        <div className="text-sm text-green-400 mb-2">
                        Entertainment
                        </div>
                        <div className="mb-2">
                            <a href="#" className="font-semibold leading-tight text-2xl text-gray-100 hover:text-gray-100">
                            Bootstrap Card's Title using Tailwind
                            </a>
                        </div>
                        <div className='flex text-gray-200 text-sm '>
                            <div className="pr-3">May 6, 2020</div>
                            <div>Posted by Admin</div>
                        </div>
                    </div>
                </div>
            </div>
        </TimelineItem>
    )
}