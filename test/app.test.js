const request = require('supertest');
const app = require('../index'); 

describe('GET /', () => {
    it('should return a welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe("Hello World from CICD 🍕");
    });
});

describe('GET /healthy', () => {
    it('should return healthy status', async () => {
        const res = await request(app).get('/healthy');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toBe("I am healthy 🍕");
    });
});
