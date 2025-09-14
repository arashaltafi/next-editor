import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import Image from '@tiptap/extension-image'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'


interface PropsType {
    json: string
    className?: string
}

const DisplayUIJson = (props: PropsType) => {
    const editor = useEditor({
        editable: false,
        extensions: [
            // @ts-ignore
            StarterKit,
            TextStyle,
            Color,
            Image,
            Table.configure({ resizable: true }),
            TableHeader,
            TableRow,
            TableCell,
        ],
        content: props.json,
    });

    return (
        <EditorContent className={`ProseMirror ${props?.className}`} editor={editor} />
    )
}

export default DisplayUIJson