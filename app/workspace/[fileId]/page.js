'use client'

import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { WorkspaceHeader } from '../_components/WorkspaceHeader';
import PdfViewer from '../_components/pdfViewer'
import { useAction, useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';

// edit text imports
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import EditExtenstion from '../_components/EditExtenstion'
import Bold from '@tiptap/extension-bold'

const Workspace = () => {
    const { fileId } = useParams(); // Ensure the correct parameter name is used
    const fileInfo = useQuery(api.fileStorage.getFileRecord, {
        fileId: fileId || '' // Check if fileId is present before making the query
    });

    useEffect(() => {
        if (fileInfo && fileInfo.data) {
            console.log(fileInfo.data);
        }
    }, [fileInfo]);

    return (
        <div>
            <WorkspaceHeader fileName={fileInfo?.fileName} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <EditorText fileId={fileId} />
                </div>
                <div>
                    <PdfViewer fileurl={fileInfo?.fileUrl} />
                </div>
            </div>
        </div>
    )
}

export default Workspace

// Text editor component
const EditorText = ({ fileId }) => {
    const notes = useQuery(api.notes.GetNotes, {
        fileId: fileId
    })

    console.log(notes);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Start Taking Your Notes here'
            })
        ],
        editorProps: {
            attributes: {
                class: 'focus:outline-none h-screen p-5'
            }
        }
    })

    useEffect(() => {
        if (editor && notes) {
            editor.commands.setContent(notes)
        }
    }, [notes && editor])

    return (
        <div>
            <EditExtenstion editor={editor} />
            <div className="overflow-scroll h-[80vh] hide-scrollbar">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}
