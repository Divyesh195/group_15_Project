import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "Divyesh",
    lastName: "Parmar",
    email: "divyeshparmar@gmail.com",
    password: "zxcvbnml",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
  },
];
