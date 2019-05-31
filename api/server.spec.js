// require("dotenv").config();

// const request = require("supertest");
// const server = require("./server");

// describe("server.js", () => {
//   it("should set the testing environment", () => {
//     expect(process.env.DB_ENV).toBe("testing");
//   });

//   describe("endpoints", () => {
//     describe("GET /users", () => {
//       it("should return the list of users and HTTP status code 200", async () => {
//         const res = await request(server).get("/users");
//         expect(res.status).toBe(200);
//       });

//       it("should return JSON", async () => {
//         const res = await request(server).get("/users");
//         expect(res.type).toBe("application/json");
//       });
//     });

//     describe("POST /", () => {
//       it("should return the list of users and HTTP status code 200", async () => {
//         const res = await request(server).get("/users");
//         expect(res.status).toBe(200);
//       });

//       it("should return JSON", async () => {
//         const res = await request(server).get("/users");
//         expect(res.type).toBe("application/json");
//       });
//     });
//   });
// });
