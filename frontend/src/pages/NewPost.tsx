import {useEditor, EditorContent} from '@tiptap/react'
import { BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import { useState, useEffect } from 'react'




export function NewPost() {

    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: ' ',
    })

    const [showMenu, setShowMenu] = useState(true)
    const [isEditable, setIsEditable] = useState(true)

     useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

    return (
        <div>
            <button type="button" onClick={() => { setShowMenu(old => !old);  editor.commands.focus() }}> Toggle menu </button>
             
             <div className="control-group">
                <label>
                <input type="checkbox" checked={isEditable} onChange={() => setIsEditable(!isEditable)} />
                Editable
                </label>
             </div>

            {editor && showMenu && (
                 <BubbleMenu editor={editor} options={{ placement: 'bottom', offset: 8 }}>
                    <div className="bubble-menu">
                        <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}type="button">Bold </button>
                        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''} type="button">Italic </button>
                        <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''} type="button">  Strike </button>
                    </div>
                 </BubbleMenu>
                 )}
            <EditorContent editor={editor} />

        </div>
    )
}

