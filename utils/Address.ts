import loading from "@/public/lotties/loading.json";
import notFound from "@/public/lotties/404.json";
import serverError from "@/public/lotties/500.json";

const Address = {
    Routes: {
        Home: '/',

        error404: '/404',
        error500: '/500',

        sample1: '/sample1',
        sample1Get: '/sample1/get',
        sample1Post: '/sample1/post',

        sample2: '/sample2',
        sample2Get: '/sample2/get',
        sample2Post: '/sample2/post',
    },
    EndPoints: {
        sample1Post: '/api/sample1',
        sample1Get: '/api/sample1',

        sample2Post: '/api/sample2',
        sample2Get: '/api/sample2',
    },
    icons: {
        loading: '/icons/loading.svg'
    },
    images: {

    },
    lotties: {
        loading: loading,
        notFound: notFound,
        serverError: serverError,
    }
}

export default Address