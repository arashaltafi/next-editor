import dynamic from 'next/dynamic';
import React from 'react';

const TipTapComponent = dynamic(() => import('@/components/TipTapComponent'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

interface PropsType {
    isJustText?: boolean;
    className?: string;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>
}

const TipTapComponentClient = (props: PropsType) => {
    return (
        <>
            <TipTapComponent  {...props} />
        </>
    );
}

export default TipTapComponentClient;