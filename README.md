# TextCraft Pro Editor

TextCraft Pro Editor is a rich text editor React component with a Material Design-inspired theme.

## Installation

Install the package using npm:

```bash
npm install textcraft-pro-editor
```

## Usage

Import the TextCraftProEditor component and use it in your React application:

```bash
import React, { useState } from 'react';
import TextCraftProEditor from 'textcraft-pro-editor';

const App = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (newContent) => {
    setEditorContent(newContent);
  };

  return (
    <div>
      <h1>Your React App</h1>
      <TextCraftProEditor initialValue={editorContent} onChange={handleEditorChange} />
      <div>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div>
    </div>
  );
};

export default App;
```

## License

THis project is licensed under the MIT License - see the LICENSE file for details

## Contributions

Contributions are welcome! Submit an issue or open a pull request.