import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TextCraftProEditor from '../src/TextCraftProEditor';

const ExampleApp = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (newContent) => {
    setEditorContent(newContent);
  };

  return (
    <div>
      <h1>TextCraft Pro Editor Example</h1>
      <TextCraftProEditor initialValue={editorContent} onChange={handleEditorChange} />
      <div>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div>
    </div>
  );
};

ReactDOM.render(<ExampleApp />, document.getElementById('root'));
