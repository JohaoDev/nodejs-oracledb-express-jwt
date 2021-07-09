import jwt from "jsonwebtoken";

export const generateToken = () => {
  let token = jwt.sign({ userData: "jperlaza" }, process.env.KEY_JWT, {
    algorithm: "HS256",
    expiresIn: parseInt(process.env.TIME),
  });
  return token;
};
