import {describe, it} from "@jest/globals";
import request from "supertest"
import {app} from "../src/server";

describe("POST /", () => {
  it("add employee", async () => {
    await request(app)
      .post("/")
      .send({"name": "shehan chamika" , "position": "1234" , "level":"junior"})
      .set("Accept", "application/json")
      .expect(200);
  });
});