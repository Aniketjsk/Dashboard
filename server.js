const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/api/categories', (req, res) => {
  // Return the categories from the database
  res.json(db.categories);
});

app.post('/api/widgets', (req, res) => {
  const { name, text, categoryId } = req.body;
  const newWidget = {
    id: db.categories.find(category => category.id === categoryId).widgets.length + 1,
    name,
    text
  };
  db.categories.find(category => category.id === categoryId).widgets.push(newWidget);
  res.json(newWidget);
});

app.delete('/api/widgets/:widgetId', (req, res) => {
  const { widgetId } = req.params;
  const categoryId = req.body.categoryId;
  db.categories.find(category => category.id === categoryId).widgets = db.categories.find(category => category.id === categoryId).widgets.filter(widget => widget.id !== parseInt(widgetId));
  res.json({ message: 'Widget deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});