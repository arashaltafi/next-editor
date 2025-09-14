import { toast, ToastOptions, TypeOptions, ToastPosition } from 'react-toastify';

type ToastStatus = 'success' | 'error' | 'warning';
type ToastPos =
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left';

export const showToast = (
    title: string,
    status: ToastStatus = 'success',
    time: number = 5000,
    position: ToastPos = 'top-right'
) => {
    if (!title) return;

    const options: ToastOptions = {
        theme: "colored",
        type: status as TypeOptions,
        autoClose: time,
        position: position as ToastPosition,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    };

    toast(title, options);
};