import express from 'express';
import db from '../public/db.json';

const app = express();

app.get('/api/categories', (req, res) => {
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

app.listen(3001, () => {
  console.log('API server listening on port 3001');
});