const assert = require('node:assert/strict');
const { after, before, test } = require('node:test');
const app = require('./app');

let server;
let baseUrl;

before(async () => {
  server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => (error ? reject(error) : resolve()));
  });
});

test('permite listar, agregar, validar y vaciar productos del carrito', async () => {
  const productsResponse = await fetch(`${baseUrl}/api/products?category=alimentos`);
  assert.equal(productsResponse.status, 200);
  const filteredProducts = await productsResponse.json();
  assert.equal(filteredProducts.length, 2);
  assert.ok(filteredProducts.every((product) => product.category === 'alimentos'));

  const addResponse = await fetch(`${baseUrl}/api/cart/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId: 'alimento-1', quantity: 2 })
  });
  assert.equal(addResponse.status, 201);
  const addedItem = await addResponse.json();
  assert.equal(addedItem.item.quantity, 2);
  assert.equal(addedItem.item.subtotal, 9000);

  const cartResponse = await fetch(`${baseUrl}/api/cart`);
  const cart = await cartResponse.json();
  assert.equal(cart.total, 9000);
  assert.equal(cart.items.length, 1);

  const invalidResponse = await fetch(`${baseUrl}/api/cart/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId: 'alimento-1', quantity: 0 })
  });
  assert.equal(invalidResponse.status, 400);

  const clearResponse = await fetch(`${baseUrl}/api/cart`, { method: 'DELETE' });
  assert.equal(clearResponse.status, 200);
  const emptyCartResponse = await fetch(`${baseUrl}/api/cart`);
  assert.deepEqual(await emptyCartResponse.json(), { items: [], total: 0 });
});
