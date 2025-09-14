import React from 'react'
import Lottie from "lottie-react";

interface PropsType {
    className?: string,
    src: any
}

const DynamicLottieComponent = (props: PropsType) => {
    return (
        <Lottie
            className={`size-12 ${props.className}`}
            animationData={props.src}
            loop={true}
        />
    )
}

/**
 * sample to use =>
 * <LottieComponent
        src={Address.lotties.loading}
    />
 */

export default DynamicLottieComponent