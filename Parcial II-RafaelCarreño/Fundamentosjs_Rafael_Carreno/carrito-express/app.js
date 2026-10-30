const express = require('express');
const path = require('node:path');

const app = express();
app.use(express.json());
app.get('/app', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.use((request, response, next) => {
  response.on('finish', () => {
    console.log(`${request.method} ${request.originalUrl} ${response.statusCode}`);
  });
  next();
});

const products = [
  { id: 'alimento-1', name: 'Arroz (1 kg)', category: 'alimentos', price: 45000 },
  { id: 'alimento-2', name: 'Leche (1 L)', category: 'alimentos', price: 3800 },
  { id: 'electro-1', name: 'Licuadora', category: 'electrodomesticos', price: 149900 },
  { id: 'electro-2', name: 'Horno microondas', category: 'electrodomesticos', price: 329900 },
  { id: 'auto-1', name: 'Automóvil compacto', category: 'automoviles', price: 65000000 },
  { id: 'auto-2', name: 'Automóvil familiar', category: 'automoviles', price: 92000000 }
];
const cart = new Map();

app.get('/', (request, response) => {
  response.json({ message: 'API del carrito de compras', products: '/api/products', cart: '/api/cart' });
});

app.get('/api/products', (request, response) => {
  const { category } = request.query;
  const availableCategories = [...new Set(products.map((product) => product.category))];

  if (category && !availableCategories.includes(category)) {
    return response.status(400).json({
      error: `Categoría no válida. Usa una de estas: ${availableCategories.join(', ')}.`
    });
  }

  const result = category
    ? products.filter((product) => product.category === category)
    : products;
  return response.json(result);
});

app.get('/api/cart', (request, response) => {
  const items = [...cart.values()].map(({ product, quantity }) => ({
    productId: product.id,
    name: product.name,
    price: product.price,
    quantity,
    subtotal: product.price * quantity
  }));
  const total = items.reduce((sum, item) => sum + item.subtotal, 0);

  response.json({ items, total });
});

app.post('/api/cart/items', (request, response) => {
  const { productId, quantity = 1 } = request.body ?? {};

  if (typeof productId !== 'string' || !Number.isInteger(quantity) || quantity <= 0) {
    return response.status(400).json({
      error: 'Envía productId como texto y quantity como entero positivo.'
    });
  }

  const product = products.find((item) => item.id === productId);
  if (!product) {
    return response.status(404).json({ error: 'Producto no encontrado.' });
  }

  const existingItem = cart.get(productId);
  const updatedItem = {
    product,
    quantity: (existingItem?.quantity ?? 0) + quantity
  };
  cart.set(productId, updatedItem);

  return response.status(201).json({
    message: 'Producto agregado al carrito.',
    item: {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: updatedItem.quantity,
      subtotal: product.price * updatedItem.quantity
    }
  });
});

app.delete('/api/cart/items/:productId', (request, response) => {
  if (!cart.delete(request.params.productId)) {
    return response.status(404).json({ error: 'El producto no está en el carrito.' });
  }

  return response.json({ message: 'Producto eliminado del carrito.' });
});

app.delete('/api/cart', (request, response) => {
  cart.clear();
  response.json({ message: 'Carrito vacío.' });
});

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`API del carrito disponible en http://localhost:${port}`);
  });
}

module.exports = app;
