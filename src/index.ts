/**
 * Required External Modules
 */
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import { typeDocumentsRouter } from "./Modules/TypeDocuments/type-documents.router";
import { authRouter } from "./Modules/Auth/auth.router";

import { initDB } from "./Database/db-conn";

dotenv.config();
initDB();

/**
 *  App Configuration
 */
const app = express();
const port = process.env.PORT || 3000;

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(cors());

app.get("/", (req: any, res: any) => {
  res.send("Oracle Database Node JS!");
});

app.use("/api", typeDocumentsRouter);
app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
