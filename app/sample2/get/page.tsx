"use client";

import DisplayUIJson from "@/components/DisplayUIJson";
import LottieComponent from "@/components/LottieComponent";
import Address from "@/utils/Address";
import React, { useEffect, useState } from "react";

interface Sample2 {
    title: string;
    image: string;
    desc: string;
}

const Sample2Get = () => {
    const [data, setData] = useState<Sample2 | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            const res = await fetch(Address.EndPoints.sample2Get);
            if (!res.ok) {
                throw new Error(`Failed to fetch: ${res.status}`);
            }
            const json = await res.json();
            setData(json.data);
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col gap-8 items-center justify-start px-16 py-8">
            <h1 className='w-full text-center text-5xl font-bold'>Sample 2 Get</h1>

            {
                loading && (
                    <>
                        <LottieComponent
                            src={Address.lotties.loading}
                            className="mt-16 size-56 bg-gray-400 rounded-xl"
                        />
                        <p className="text-xl text-gray-500">Loading...</p>
                    </>
                )
            }

            {
                !loading && error && (
                    <p className="mt-16 text-xl text-red-500">Error: {error}</p>
                )
            }

            {
                !loading && !data ? (
                    <p className="mt-16 text-xl text-gray-500">No data found</p>
                ) : !loading && data && (
                    <div className="w-full max-w-screen-lg mx-auto py-8 flex flex-col items-start justify-start px-5 lg:px-8 space-y-6">
                        <h2 className="text-xl font-semibold">{data.title}</h2>

                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full max-w-md rounded shadow"
                        />

                        <div
                            className="prose text-sm lg:text-lg leading-6 lg:leading-7 text-justify"
                            dangerouslySetInnerHTML={{ __html: data.desc }}
                        />
                        {/* <DisplayUIJson
                            json={JSON.parse(data.desc || '{}')}
                        /> */}
                    </div>
                )
            }
        </div>
    );
};

export default Sample2Get;