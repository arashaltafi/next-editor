import { useCallback, useState } from 'react'
import RichTextEditor, { BaseKit } from 'reactjs-tiptap-editor'
import { Attachment } from 'reactjs-tiptap-editor/attachment';
import { Blockquote } from 'reactjs-tiptap-editor/blockquote';
import { Bold } from 'reactjs-tiptap-editor/bold';
import { BulletList } from 'reactjs-tiptap-editor/bulletlist';
import { Clear } from 'reactjs-tiptap-editor/clear';
import { Code } from 'reactjs-tiptap-editor/code';
import { CodeBlock } from 'reactjs-tiptap-editor/codeblock';
import { Color } from 'reactjs-tiptap-editor/color';
import { ColumnActionButton } from 'reactjs-tiptap-editor/multicolumn';
import { Emoji } from 'reactjs-tiptap-editor/emoji';
import { ExportPdf } from 'reactjs-tiptap-editor/exportpdf';
import { ExportWord } from 'reactjs-tiptap-editor/exportword';
import { FontFamily } from 'reactjs-tiptap-editor/fontfamily';
import { FontSize } from 'reactjs-tiptap-editor/fontsize';
import { FormatPainter } from 'reactjs-tiptap-editor/formatpainter';
import { Heading } from 'reactjs-tiptap-editor/heading';
import { Highlight } from 'reactjs-tiptap-editor/highlight';
import { History } from 'reactjs-tiptap-editor/history';
import { HorizontalRule } from 'reactjs-tiptap-editor/horizontalrule';
import { Iframe } from 'reactjs-tiptap-editor/iframe';
import { Image } from 'reactjs-tiptap-editor/image';
import { ImageGif } from 'reactjs-tiptap-editor/imagegif';
import { ImportWord } from 'reactjs-tiptap-editor/importword';
import { Indent } from 'reactjs-tiptap-editor/indent';
import { Italic } from 'reactjs-tiptap-editor/italic';
import { LineHeight } from 'reactjs-tiptap-editor/lineheight';
import { Link } from 'reactjs-tiptap-editor/link';
import { Mention } from 'reactjs-tiptap-editor/mention';
import { MoreMark } from 'reactjs-tiptap-editor/moremark';
import { OrderedList } from 'reactjs-tiptap-editor/orderedlist';
import { SearchAndReplace } from 'reactjs-tiptap-editor/searchandreplace';
import { SlashCommand } from 'reactjs-tiptap-editor/slashcommand';
import { Strike } from 'reactjs-tiptap-editor/strike';
import { Table } from 'reactjs-tiptap-editor/table';
import { TableOfContents } from 'reactjs-tiptap-editor/tableofcontent';
import { TaskList } from 'reactjs-tiptap-editor/tasklist';
import { TextAlign } from 'reactjs-tiptap-editor/textalign';
import { TextUnderline } from 'reactjs-tiptap-editor/textunderline';
import { Video } from 'reactjs-tiptap-editor/video';
import { TextDirection } from 'reactjs-tiptap-editor/textdirection';
import { Katex } from 'reactjs-tiptap-editor/katex';
import { Drawer } from 'reactjs-tiptap-editor/drawer';
import { Excalidraw } from 'reactjs-tiptap-editor/excalidraw';
import { Twitter } from 'reactjs-tiptap-editor/twitter';
import { Mermaid } from 'reactjs-tiptap-editor/mermaid';

import 'reactjs-tiptap-editor/style.css'
import 'prism-code-editor-lightweight/layout.css';
import "prism-code-editor-lightweight/themes/github-dark.css"

import 'katex/dist/katex.min.css'
import 'easydrawer/styles.css'
import 'react-image-crop/dist/ReactCrop.css';
import "@excalidraw/excalidraw/index.css";
import { MAX_FILE_SIZE } from '@/utils/Constant';

const extensions = [
    BaseKit.configure({
        placeholder: {
            showOnlyCurrent: true,
        },
        characterCount: {
            limit: 50_000,
        },
    }),
    History,
    SearchAndReplace,
    TableOfContents,
    FormatPainter.configure({ spacer: true }),
    Clear,
    FontFamily.configure({
        fontFamilyList: [
            'hydrosans-regular',
            'hydrosans-semibold',
            'Arial',
            'Arial Black',
            'Comic Sans MS',
            'Courier New',
            'Georgia',
            'Helvetica',
            'Impact',
            'Lucida Console',
            'Tahoma',
            'Times New Roman',
            'Trebuchet MS',
            'Verdana',
        ],
        toolbar: true,
        spacer: true,
    }),
    Heading.configure({ spacer: true }),
    FontSize,
    Bold,
    Italic,
    TextUnderline,
    Strike,
    MoreMark,
    Emoji,
    Color.configure({ spacer: true }),
    Highlight,
    BulletList,
    OrderedList,
    TextAlign.configure({ types: ['heading', 'paragraph'], spacer: true }),
    Indent,
    LineHeight,
    TaskList.configure({
        spacer: true,
        taskItem: {
            nested: true,
        },
    }),
    Link,
    Image.configure({
        upload: (file: File) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64 = reader.result as string;
                    console.log(base64)
                    resolve(base64);
                };
                console.log(file)
                reader.readAsDataURL(file);
            });
        },
        onError: (error: any) => {
            alert(error.message);
        },
        maxSize: MAX_FILE_SIZE,
        acceptMimes: ['image/jpeg', 'image/jpg', 'image/png']
    }),
    Video.configure({
        upload: (files: File) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(URL.createObjectURL(files))
                }, 0)
            })
        },
    }),
    ImageGif.configure({
        GIPHY_API_KEY: process.env.NEXT_PUBLIC_GIPHY_API_KEY as string,
    }),
    Blockquote,
    SlashCommand,
    HorizontalRule,
    Code.configure({
        toolbar: false,
    }),
    CodeBlock,
    ColumnActionButton,
    Table,
    Iframe,
    ExportPdf.configure({ spacer: true }),
    ImportWord.configure({
        upload: (files: File[]) => {
            const f = files.map(file => ({
                src: URL.createObjectURL(file),
                alt: file.name,
            }))
            return Promise.resolve(f)
        },
    }),
    ExportWord,
    TextDirection,
    Mention,
    Attachment.configure({
        upload: (file: any) => {
            // fake upload return base 64
            const reader = new FileReader()
            reader.readAsDataURL(file)

            return new Promise((resolve) => {
                setTimeout(() => {
                    // const blob = convertBase64ToBlob(reader.result as string)
                    // resolve(URL.createObjectURL(blob))
                    resolve(reader.result as string)
                }, 300)
            })
        },
    }),

    Katex,
    Excalidraw,
    Mermaid.configure({
        upload: (file: any) => {
            // fake upload return base 64
            const reader = new FileReader()
            reader.readAsDataURL(file)

            return new Promise((resolve) => {
                setTimeout(() => {
                    // const blob = convertBase64ToBlob(reader.result as string)
                    // resolve(URL.createObjectURL(blob))
                    resolve(reader.result as string)
                }, 300)
            })
        },
    }),
    Drawer.configure({
        upload: (file: any) => {
            // fake upload return base 64
            const reader = new FileReader()
            reader.readAsDataURL(file)

            return new Promise((resolve) => {
                setTimeout(() => {
                    // const blob = convertBase64ToBlob(reader.result as string)
                    // resolve(URL.createObjectURL(blob))
                    resolve(reader.result as string)
                }, 300)
            })
        },
    }),
    Twitter,
]

function debounce(func: any, wait: number) {
    let timeout: NodeJS.Timeout
    return function (...args: any[]) {
        clearTimeout(timeout)
        // @ts-ignore
        timeout = setTimeout(() => func.apply(this, args), wait)
    }
}

interface PropsType {
    isJustText?: boolean;
    className?: string;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>
}

function TipTapComponent(props: PropsType) {
    const [content, setContent] = useState(props?.value || '')

    const onValueChange = useCallback(
        debounce((value: any) => {
            props.onChange(value)
            setContent(value)
        }, 300),
        [],
    )

    return (
        <div className='mt-8 w-full max-w-screen-maxWidth mx-auto'>
            <RichTextEditor
                output="json"
                content={content as any}
                onChangeContent={onValueChange}
                extensions={extensions}
                dark={false}
                disabled={false}
            />
        </div>
    )
}

export default TipTapComponent