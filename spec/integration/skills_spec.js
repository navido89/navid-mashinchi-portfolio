const request = require ("request");
const server = require ("../../src/server");
const base = "http://localhost:3000/skills";

describe("routes : skills", () => {

    describe("GET /skills", () => {

        it("should return status code 200", (done) => {

            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
                done();
            });
        });
    });
});