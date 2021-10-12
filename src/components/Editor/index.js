import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import "./styles.css";;

const Editor = (props) => {
    const config = {
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading3', view: 'h3', title: 'Heading', class: 'ck-heading_heading3' },
            ]
        }
    }

    const onChange = (event, editor) => {
        const data = editor.getData();
        props.onChange(data);
    }

    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                data={props.text}
                onChange={onChange}
                config={config}
                
            />
        </div>
    );
}

export default Editor;