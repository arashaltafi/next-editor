"use client"

import Address from '@/utils/Address';
import Image from 'next/image';
import React from 'react';

interface PropsType {
    title: string;
    type?: "button" | "reset" | "submit",
    className?: string,
    loading?: boolean,
    onClick?: () => void
}

const Button = (props: PropsType) => {
    return (
        <button
            className={`w-full flex items-center justify-center py-2 rounded bg-blue-500 ${props.loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 focus:ring-blue-400"} text-white font-medium
                  focus:outline-none focus:ring-2 focus:ring-offset-2 transition
                  ${props.className}`}
            onClick={() => (props.loading == null || props.loading == false) && props.onClick?.()}
            type={props.type || "button"}
            disabled={props.loading}
        >
            {
                props.loading ? (
                    <Image
                        src={Address.icons.loading}
                        width={16}
                        height={16}
                        alt="loading"
                        className="loading-svg py-1"
                    />
                ) : (
                    props.title
                )
            }
        </button>
    );
}

export default Button;