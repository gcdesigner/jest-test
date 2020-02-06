import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  const data = {
    name: 'Gabriel Costa',
    email: 'gabriel@gmail.com',
    password_hash: '123456',
  };

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send(data);

    expect(response.body).toHaveProperty('id');
  });
});
