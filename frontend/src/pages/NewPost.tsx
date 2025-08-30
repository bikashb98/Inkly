
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useEffect, useState} from 'react';
import type { EditorState } from 'lexical';
import { $getRoot } from 'lexical';
import { useDebounce } from '../hooks/debounce';
import axios from 'axios';

const theme = {}



function onError(error : Error): void {
  console.error(error);
}



export function Editor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const debouncedTitle = useDebounce({value: title, delay: 1000})
  const debouncedContent = useDebounce({value: content, delay: 1000})

  useEffect(() =>{
    axios.post('/api/v1/blog/', {
      title: debouncedTitle,
      content: debouncedContent
    })
  }, [debouncedTitle, debouncedContent])

  const titleConfig = {
    namespace: 'TitleEditor',
    theme,
    onError,
  };

  const contentConfig = {
    namespace: 'ContentEditor',
    theme,
    onError,
  };

  const handleTitleChange = (editorState: EditorState) => {
    editorState.read(() => {
      const root = $getRoot();
      const textContent = root.getTextContent();
      setTitle(textContent);
    });
  };

  const handleContentChange = (editorState: EditorState) => {
    editorState.read(() => {
      const root = $getRoot();
      const textContent = root.getTextContent();
      setContent(textContent);
    });
  };

  return (

    <div className='h-screen flex justify-center my-5 bg-gray-50'>
        <div className='w-full max-w-4xl mx-auto p-6'>
          {/* Title Editor */} 
          <div className='relative mb-4'>
            <LexicalComposer initialConfig={titleConfig}>
                <RichTextPlugin
                    contentEditable={
                   <ContentEditable 
                     className='w-full p-3 border-l border-gray-300 focus:outline-none text-4xl font-headland min-h-16 bg-transparent' 
                     placeholder={<div className='text-gray-400 absolute top-3 left-3 pointer-events-none text-4xl font-headland'>Title</div>} 
                   />
                     }
                  ErrorBoundary={LexicalErrorBoundary}
                 />
                <HistoryPlugin />
                <OnChangePlugin onChange={handleTitleChange} />
            </LexicalComposer>
          </div>
          
          {/* Content Editor */}
          <div className='relative'>
            <LexicalComposer initialConfig={contentConfig}>
              <RichTextPlugin
                    contentEditable={
                   <ContentEditable 
                     className='w-full p-3 focus:outline-none text-xl font-headland min-h-96 bg-transparent' 
                     placeholder={<div className='text-gray-600 absolute top-3 left-3 pointer-events-none text-xl font-headland'>Tell your story...</div>} 
                   />
                     }
                  ErrorBoundary={LexicalErrorBoundary}
                 />
                <HistoryPlugin />
                <OnChangePlugin onChange={handleContentChange} />
            </LexicalComposer>
          </div>
        </div>
    </div>
  );


}

