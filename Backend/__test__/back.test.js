// const app=require("../server")

// require("dotenv").config()

// describe("it should return all accounts", () => {
//     it("should return all accounts", async () => {
//       const response = await request(app).get("/admin/getclient");
//         expect(response.statusCode).toBe(200);
           
//     });
//     });

// http://localhost:6060/admin/getclient

const request = require("supertest");
const app = require("../server");

describe("GET /admin/getclient", () => {
  it("should return 200 OK", (done) => {
    request(app)
      .get("/admin/getclient")
      .expect(200, done);
  });
}

)
