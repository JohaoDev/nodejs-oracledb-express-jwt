/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as AuthService from "./auth.service";

/**
 * Router Definition
 */
export const authRouter = express.Router();

/**
 * Controller Definitions
 */

// GET auth token
authRouter.get("/v1/auth", async (req: Request, res: Response) => {
  try {
    const auth: string = await AuthService.getNewToken();

    res.status(200).json({
      ok: true,
      data: auth,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});
