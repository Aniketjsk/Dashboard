import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddWidgetModal from './AddWidgetModal';

const Dashboard = () => {
  const categories = useSelector(state => state.widgets.categories);
  const dispatch = useDispatch();
  const [addWidgetModalOpen, setAddWidgetModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      dispatch({ type: 'INITIALIZE_CATEGORIES', payload: data.categories });
    };
    fetchData();
  }, []);

  const handleAddWidget = (name, text) => {
    dispatch({ type: 'ADD_WIDGET', name, text, categoryId: selectedCategory.id });
    setAddWidgetModalOpen(false);
  };

  const handleRemoveWidget = (widgetId) => {
    dispatch({ type: 'REMOVE_WIDGET', widgetId, categoryId: selectedCategory.id });
  };

  const handleSearch = (searchTerm) => {
    // implement search logic here
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <h2>{category.name}</h2>
            <ul>
              {category.widgets.map(widget => (
                <li key={widget.id}>
                  <h3>{widget.name}</h3>
                  <p>{widget.text}</p>
                  <button onClick={() => handleRemoveWidget(widget.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <button onClick={() => setAddWidgetModalOpen(true)}>Add Widget</button>
          </li>
        ))}
      </ul>
      {addWidgetModalOpen && (
        <AddWidgetModal
          onAddWidget={handleAddWidget}
          onClose={() => setAddWidgetModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;