const request = require("supertest");

const app = require("../app");

describe("Phones Endpoints", () => {
    it("should get the list of phones", async () => {
        const res = await request(app).get("/api/phones");
        expect(res.statusCode).toEqual(200);
    });
});
