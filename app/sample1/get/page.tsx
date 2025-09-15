"use client"

import DisplayUIJson from '@/components/DisplayUIJson'
import React, { useState } from 'react'

interface PropsType {
    desc?: string
}

const Sample1Get = (props: PropsType) => {
    const [cleanDesc] = useState(props?.desc)

    return (
        <div>
            <h1>Sample1Get</h1>

            <div className='w-full max-w-screen-maxWidth mx-auto mb-8 lg:mb-16  py-8 lg:py-20 flex flex-col items-start justify-start px-5 lg:px-8'>
                {/* <div
                        className="ql-editor text-sm lg:text-lg font-hydrosansRegular leading-6 lg:leading-7 !text-justify !p-0"
                        dangerouslySetInnerHTML={{ __html: cleanDesc }}
                    /> */}
                <DisplayUIJson
                    json={JSON.parse(cleanDesc || '{}')}
                />
            </div>
        </div>
    )
}

export default Sample1Get