import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/TextCraftProEditor.css';

const TextCraftProEditor = ({ initialValue, onChange }) => {
  const [content, setContent] = useState(initialValue || '');

  const handleContentChange = (newContent) => {
    setContent(newContent);
    onChange(newContent);
  };

  const applyFormat = (format) => {
    const selectedText = window.getSelection().toString();
    if (!selectedText || selectedText.trim() === '') {
      handleContentChange(`<${format}>${content}</${format}>`);
    } else {
      const updatedContent = content.replace(selectedText, `<${format}>${selectedText}</${format}>`);
      handleContentChange(updatedContent);
    }
  };

  return (
    <div className="textcraft-pro-editor">
      <div className="toolbar">
        <button onClick={() => applyFormat('strong')}>Bold</button>
        <button onClick={() => applyFormat('em')}>Italic</button>
        <button onClick={() => applyFormat('u')}>Underline</button>
        <button onClick={() => applyFormat('del')}>Strikethrough</button>
        <button onClick={() => applyFormat('h1')}>Heading 1</button>
        <button onClick={() => applyFormat('h2')}>Heading 2</button>
        <button onClick={() => applyFormat('h3')}>Heading 3</button>
        <button onClick={() => applyFormat('h4')}>Heading 4</button>
        <button onClick={() => applyFormat('h5')}>Heading 5</button>
        <button onClick={() => applyFormat('h6')}>Heading 6</button>
        <button onClick={() => applyFormat('a')}>Link</button>
        <button onClick={() => applyFormat('code')}>Code</button>
        <button onClick={() => applyFormat('blockquote')}>Blockquote</button>
        <button onClick={() => applyFormat('ul')}>Unordered List</button>
        <button onClick={() => applyFormat('ol')}>Ordered List</button>
        <button onClick={() => applyFormat('p')}>Paragraph</button>
        <button onClick={() => applyFormat('pre')}>Preformatted</button>
        <button onClick={() => applyFormat('sub')}>Subscript</button>
        <button onClick={() => applyFormat('sup')}>Superscript</button>
        <button onClick={() => applyFormat('mark')}>Mark</button>
        <button onClick={() => applyFormat('small')}>Small</button>
        <button onClick={() => applyFormat('span')}>Span</button>
      </div>
      <div className="editor" contentEditable={true} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

TextCraftProEditor.propTypes = {
  initialValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TextCraftProEditor;
