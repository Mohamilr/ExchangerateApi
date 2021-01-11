
const request = require('supertest');
const app = require('../app');

describe('App', () => {
    it('should get currency conversion', async done => {
        const res = await request(app)
        .get('/api/rates?base=CZK&currency=EUR,GBP,USD')

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('results');
        expect(res.body.results).toHaveProperty('base');
        expect(res.body.results).toHaveProperty('date');
        expect(res.body.results).toHaveProperty('rates');
        done();
    })

    it('should give an error if query values are not provide', async done => {
        const res = await request(app)
        .get('/api/rates?base=CZK&currency=')

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('message');
        done();
    })

    // it('should give an error on server error', async done => {
    //     const res = await request(app)
    //     .get('/api/rates?base=CZK&currency=EUR,GBP,USD')

    //     expect(res.statusCode).toEqual(500);
    //     expect(res.body).toHaveProperty('status');
    //     expect(res.body).toHaveProperty('message');
    //     done();
    // })

    it('should give an error on wrong route', async done => {
        const res = await request(app)
        .get('/api/rat?base=CZK&currency=EUR,GBP,USD')

        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('message');
        done();
    })
})