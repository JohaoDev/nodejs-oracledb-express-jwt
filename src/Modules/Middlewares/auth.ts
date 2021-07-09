import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const tokenAuth = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization || null;

  jwt.verify(token, process.env.KEY_JWT, (error, decode) => {
    if (error) {
      return res.status(400).json({
        ok: false,
        data: error,
        info: "Token inválido",
      });
    } else {
      let token = jwt.sign({ data: decode.data }, process.env.KEY_JWT, {
        algorithm: "HS256",
        expiresIn: 300,
      });

      req.body.decode = decode;
      req.body.token = token;

      next();
    }
  });
};
