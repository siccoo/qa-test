// Test Task 2

import axios from "axios";
import { expect } from "chai";

const baseURL = "https://api.lendsqr.com/v1";

describe("Lendsqr API Tests", function () {
  this.timeout(10000);

  let token;

  describe("Signup API", function () {
    it("should signup a new user successfully", async function () {
      const response = await axios.post(`${baseURL}/signup`, {
        email: "testuser@example.com",
        password: "SecurePassword123",
      });
      expect(response.status).to.equal(201);
      expect(response.data).to.have.property("user_id");
    });

    it("should fail with invalid email", async function () {
      try {
        await axios.post(`${baseURL}/signup`, {
          email: "invalidemail",
          password: "SecurePassword123",
        });
      } catch (error) {
        expect(error.response.status).to.equal(400);
      }
    });

    it("should fail with weak password", async function () {
      try {
        await axios.post(`${baseURL}/signup`, {
          email: "testuser2@example.com",
          password: "123",
        });
      } catch (error) {
        expect(error.response.status).to.equal(400);
      }
    });
  });

  describe("Login API", function () {
    it("should login successfully with valid credentials", async function () {
      const response = await axios.post(`${baseURL}/login`, {
        email: "testuser@example.com",
        password: "SecurePassword123",
      });
      expect(response.status).to.equal(200);
      expect(response.data).to.have.property("token");
      token = response.data.token;
    });

    it("should fail with incorrect password", async function () {
      try {
        await axios.post(`${baseURL}/login`, {
          email: "testuser@example.com",
          password: "WrongPassword",
        });
      } catch (error) {
        expect(error.response.status).to.equal(401);
      }
    });

    it("should fail with non-existent email", async function () {
      try {
        await axios.post(`${baseURL}/login`, {
          email: "nonexistent@example.com",
          password: "SecurePassword123",
        });
      } catch (error) {
        expect(error.response.status).to.equal(404);
      }
    });
  });
});
