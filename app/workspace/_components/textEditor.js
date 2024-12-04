
import React from 'react'

const EditorText = () => {

        const editor = useEditor({
          extensions: [StarterKit],
          content: '<p>Hello World! 🌎️</p>',
        })
  return (
    <div>
        <div>
            <EditorContent editor={editor} />
        </div>
    </div>
  )
}

export default EditorText