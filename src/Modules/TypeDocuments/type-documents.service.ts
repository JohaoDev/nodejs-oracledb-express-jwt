/**
 * Data Model Interfaces
 */
import { BaseTypeDocuments, TypeDocument } from "./type-document.interface";
import { TypeDocuments } from "./type-documents.interface";
import { getAll, getByID } from "./type-documents.controller";

/**
 * Service Methods
 */
export const findAll = async (): Promise<TypeDocument[]> => {
  let data: any = await getAll();
  return data.rows;
};

export const findByID = async (id: number): Promise<TypeDocument[]> => {
  let data: any = await getByID(id);
  return data.rows;
};
