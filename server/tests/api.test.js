const request = require('supertest');
const express = require('express');
const productRoutes = require('../routes/productRoutes');

const app = express();
app.use(express.json());
app.use('/api/products', productRoutes);

describe('Product API', () => {
  it('should return a list of products', async () => {
    const res = await request(app).get('/api/products');
    
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return 404 for invalid route', async () => {
    const res = await request(app).get('/api/unknown');
    expect(res.statusCode).toBe(404);
  });
});
