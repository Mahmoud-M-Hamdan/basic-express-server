'use strict';

const { server } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Web server', () => {





    test('/home works', async () => {

        const response = await mockRequest.get('/');
        expect(response.status).toBe(200);

    });




    test('Should respond with 404 status on an invalid method', async () => {

        const response = await mockRequest.get('/foo');
        expect(response.status).toBe(404);

    });




    test('person route', async () => {
        const res = await mockRequest.get('/person');
        expect(res.status).toBe(200);
    });


});