const request = require('supertest');
const server = require('./server');

describe("server.js", () => {
  it("should set the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("endpoints", () => {
    describe("GET /games", () => {
      it("should return the list of games and HTTP status code 200", async () => {
        const res = await request(server).get("/games");
        expect(res.status).toBe(200);
      });

      it('should return JSON', async () => {
        const res = await request(server).get('/games');
        expect(res.type).toBe('application/json');
      })

      it('should return { api: "up" }', async() => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({ api: "up" });
      })
    });

    describe('POST /', () => {
      it("should return the list of games and HTTP status code 200", async () => {
        const res = await request(server).get("/games");
        expect(res.status).toBe(200);
      });

      it('should return JSON', async () => {
        const res = await request(server).get('/games');
        expect(res.type).toBe('application/json');
      })

      it('should return { api: "up" }', async() => {
        const res = await request(server).get('/');
        expect(res.body).toEqual({ api: "up" });
      })
    })
  });
});