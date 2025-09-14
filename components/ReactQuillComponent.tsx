import React from 'react'
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface PropsType {
    isJustText?: boolean;
    className?: string;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>
}

const ReactQuillComponent = (props: PropsType) => {

    const toolbarOptions = props?.isJustText == true ? [
        [{ font: ['default', 'serif', 'monospace', 'sans-serif', 'cursive', 'fantasy'] }],
        [{ size: ['small', false, 'large', 'huge'] }],
        ['clean'],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ script: 'super' }, { script: 'sub' }],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['link']
    ] : [
        [{ font: ['default', 'serif', 'monospace', 'sans-serif', 'cursive', 'fantasy'] }],
        [{ size: ['small', false, 'large', 'huge'] }],
        ['clean'],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ script: 'super' }, { script: 'sub' }],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['link', 'image', 'video', 'formula']
    ];

    const formats = props?.isJustText == true ? [
        'font',
        'size',
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'color',
        'background',
        'script',
        'blockquote',
        'code-block',
        'list',
        'bullet',
        'indent',
        'align',
        'link',
    ] : [
        'font',
        'size',
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'color',
        'background',
        'script',
        'blockquote',
        'code-block',
        'list',
        'bullet',
        'indent',
        'align',
        'link',
        'image',
        'video',
        'formula',
    ];

    const modules = {
        toolbar: toolbarOptions,
        blotFormatter: {},
        clipboard: {
            matchVisual: false,
        },
    };

    return (
        <ReactQuill
            className={props?.className}
            theme="snow"
            value={props.value}
            onChange={props.onChange}
            modules={modules}
            formats={formats}
            placeholder="Compose your text here…"
        />
    )
}

export default ReactQuillComponent