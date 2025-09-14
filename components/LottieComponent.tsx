import dynamic from 'next/dynamic';

const LottieComponent = dynamic(() => import('./DynamicLottieComponent'), {
    ssr: false
});

export default LottieComponent