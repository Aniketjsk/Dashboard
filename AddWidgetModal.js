import React, { useState } from 'react';

const AddWidgetModal = ({ onAddWidget, onClose }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleAddWidget = () => {
    onAddWidget(name, text);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Widget</h2>
        <form>
          <label>Widget Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <label>Widget Text:</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          <br />
          <button onClick={handleAddWidget}>Add Widget</button>
          <button onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;