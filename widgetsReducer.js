const initialState = {
  categories: []
};

const widgetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      const newWidget = {
        id: state.categories.length + 1,
        name: action.name,
        text: action.text
      };
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.id === action.categoryId) {
            return { ...category, widgets: [...category.widgets, newWidget] };
          }
          return category;
        })
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.id === action.categoryId) {
            return {
              ...category,
              widgets: category.widgets.filter(widget => widget.id !== action.widgetId)
            };
          }
          return category;
        })
      };
    default:
      return state;
  }
};

export default widgetsReducer;