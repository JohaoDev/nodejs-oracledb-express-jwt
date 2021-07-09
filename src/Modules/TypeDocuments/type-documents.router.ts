/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import { tokenAuth } from "../Middlewares/auth";
import * as TypeDocumentsService from "./type-documents.service";
import { BaseTypeDocuments, TypeDocument } from "./type-document.interface";

/**
 * Router Definition
 */
export const typeDocumentsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET type documents
typeDocumentsRouter.get(
  "/v1/type-documents",
  async (req: Request, res: Response) => {
    try {
      const typeDocuments: TypeDocument[] =
        await TypeDocumentsService.findAll();

      res.status(200).json({
        ok: true,
        data: typeDocuments,
      });
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
);

// GET type documents/:id
typeDocumentsRouter.get(
  "/v1/type-documents/:id",
  [tokenAuth],
  async (req: Request, res: Response) => {
    let { id } = req.params;

    try {
      const typeDocuments: TypeDocument[] = await TypeDocumentsService.findByID(
        Number(id)
      );

      res.status(200).json({
        ok: true,
        data: typeDocuments,
      });
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
);

// POST type documents

// PUT type documents/:id

// DELETE type documents/:id
