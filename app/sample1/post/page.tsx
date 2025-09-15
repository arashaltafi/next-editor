"use client"

import TipTapComponentClient from '@/components/TipTapComponentClient'
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { fileToBase64 } from '@/utils/Global';
import { showToast } from '@/utils/Toast';
import { MdDeleteOutline } from 'react-icons/md';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import Address from '@/utils/Address';

interface PropsType {
    desc?: string
    title?: string
    image?: string
}

const Sample1Post = (props: PropsType) => {
    const router = useRouter()

    const [showLoading, setShowLoading] = useState(false)

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const [form, setForm] = useState({
        image: props?.image || '',
        title: props?.title || '',
        desc: props?.desc || '',
    });

    const [descHtml, setDescHtml] = useState<string>(
        JSON.parse(props?.desc || '{}') || ''
    );

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;

        if (!file) {
            showToast('Error Select File', 'error')
            return;
        }

        if ((
            file.type !== "image/jpeg" &&
            file.type !== "image/png" &&
            file.type !== "image/jpg"
        )) {
            showToast('Only PNG or JPG allowed', 'error');
            return;
        }

        if (file.size === 0) {
            showToast("File can't be empty", 'error');
        }

        if (file.size > 10 * 1024 * 1024) {
            showToast('File too large (max 10MB)', 'error');
            return;
        }

        setImageFile(file);
    };

    const handleSubmit = async () => {
        setShowLoading(true)

        let updatedForm = { ...form };

        if (imageFile) {
            try {
                const base64str = await fileToBase64(imageFile);
                updatedForm.image = base64str;
            } catch (err) {
                showToast('Failed to read file', 'error');
                setShowLoading(false);
                return;
            }
        }

        if (descHtml) {
            updatedForm.desc = JSON.stringify(descHtml || {});
        }

        const res = await fetch(Address.EndPoints.sample1Post, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedForm),
        });

        const data = await res.json()
        setShowLoading(false)

        if (!res.ok || !data.success) {
            showToast((Array.isArray(data.error) && data.error[0]) ? data.error[0] : data.error?.toString() || 'Failed', "error")
            return
        }

        if (data.success) {
            showToast("Saved Successfully", "success")
            router.refresh()
        }
    };

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-start gap-8 px-16 py-8'>
            <h1 className='w-full text-center text-5xl font-bold'>Sample 1 Post</h1>

            <form
                className="w-full flex flex-col gap-4 bg-gray-100 rounded  border border-brand2 p-4"
                onSubmit={(e: React.FormEvent) => {
                    e.preventDefault()
                    handleSubmit()
                }}
            >
                <div className='w-full flex flex-col gap-2 border border-black p-4'>
                    <div className='flex flex-col gap-1'>
                        <label
                            htmlFor="image"
                            className="block text-sm font-medium cursor-pointer"
                        >
                            Image (png/jpeg, ≤ 10 MB)
                        </label>
                        <div className='w-full flex gap-8 items-center justify-center'>
                            <input
                                ref={fileInputRef}
                                id="image"
                                type="file"
                                accept="image/png, image/jpeg"
                                onChange={handleFileChange}
                                className="cursor-pointer block w-full border rounded p-2 bg-white"
                            />
                            <Image
                                src={imageFile ? URL.createObjectURL(imageFile) : form.image}
                                alt="image"
                                width={500}
                                height={500}
                                className='w-64 h-52 object-cover border-gray-950 border rounded'
                            />
                            <MdDeleteOutline
                                className='size-16 text-red-500 cursor-pointer'
                                onClick={() => {
                                    setImageFile(null)
                                    setForm(prev => ({ ...prev, image: '' }))
                                    if (fileInputRef.current) {
                                        fileInputRef.current.value = '';
                                        fileInputRef.current.focus();
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium cursor-pointer"
                        >
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="mt-1 block w-full border rounded p-2"
                        />
                    </div>
                </div>

                <span className='w-full h-8' />

                <div className='my-2 w-full flex flex-col gap-2 border border-black p-4'>
                    <div className='flex flex-col gap-1'>
                        <label
                            htmlFor="desc"
                            className="block text-sm font-medium cursor-pointer"
                        >
                            Desc
                        </label>
                        <TipTapComponentClient
                            value={descHtml}
                            onChange={setDescHtml}
                        />
                        {/* <ReactQuillComponent
                                value={descHtml}
                                onChange={setDescHtml}
                            /> */}
                    </div>
                </div>

                <Button
                    type="submit"
                    title='Submit'
                    loading={showLoading}
                    onClick={handleSubmit}
                    className="w-max px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all"
                />
            </form>
        </div>
    )
}

export default Sample1Post