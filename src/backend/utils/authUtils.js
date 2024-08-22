import { Response } from "miragejs";
import dayjs from "dayjs";
import { jwtDecode } from "jwt-decode";

const token = "eyJ0eXAiO.../// jwt token";
// const decoded = jwtDecode(token);

export const requiresAuth = function (request) {
  const encodedToken = request.requestHeaders.authorization;
  const decodedToken = jwtDecode(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET
  );
  if (decodedToken) {
    const user = this.db.users.findBy({ email: decodedToken.email });
    if (user) {
      return user._id;
    }
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
